#!/usr/bin/env bash
# Installiert den Gutachten-Tipptrainer auf einem frischen Ubuntu- oder Debian-Server.
# Der Dienst lauscht nur lokal (127.0.0.1:3000). Nach außen geht es über einen Cloudflare-Tunnel mit HTTPS.
#
# Aufruf als root, im Projektordner (/opt/gutachten-trainer):
#   bash install.sh
#
# Ohne Token entsteht ein Quick Tunnel: kein Konto, keine Domain, keine Zugangsdaten.
# Die Adresse hat die Form https://xyz.trycloudflare.com und ändert sich, wenn der Tunnel neu startet.
# Optional: TUNNEL_TOKEN='...' bash install.sh nutzt einen festen Tunnel mit eigener Domain.
set -euo pipefail

APP=/opt/gutachten-trainer
cd "$APP"

# Der Ordner gehört dem Dienstbenutzer tipptrainer; damit root trotzdem git pull ausführen darf:
git config --global --get-all safe.directory 2>/dev/null | grep -qx "$APP" || git config --global --add safe.directory "$APP"

echo "==> Pakete"
apt-get update -qq
apt-get install -y -qq curl unzip ca-certificates gnupg

if ! command -v node >/dev/null || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 18 ]; then
  echo "==> Node.js 20"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y -qq nodejs
fi
if ! command -v npm >/dev/null; then
  echo "==> npm"
  apt-get install -y -qq npm
fi

if ! command -v cloudflared >/dev/null; then
  echo "==> cloudflared"
  mkdir -p --mode=0755 /usr/share/keyrings
  curl -fsSL https://pkg.cloudflare.com/cloudflare-public-v2.gpg -o /usr/share/keyrings/cloudflare-public-v2.gpg
  echo 'deb [signed-by=/usr/share/keyrings/cloudflare-public-v2.gpg] https://pkg.cloudflare.com/cloudflared any main' > /etc/apt/sources.list.d/cloudflared.list
  apt-get update -qq
  apt-get install -y -qq cloudflared
fi

echo "==> Benutzer und Abhängigkeiten"
id tipptrainer >/dev/null 2>&1 || useradd --system --home "$APP" --shell /usr/sbin/nologin tipptrainer
npm install --omit=dev

[ -f .env ] || cp .env.example .env
if [ -n "${DEEPSEEK_API_KEY:-}" ]; then
  sed -i "s|^DEEPSEEK_API_KEY=.*|DEEPSEEK_API_KEY=${DEEPSEEK_API_KEY}|" .env
fi

if [ ! -f data/config.json ]; then
  echo "==> Passwort festlegen"
  npm run passwort
fi

echo "==> Rechte"
chown -R tipptrainer:tipptrainer "$APP"
chmod 600 .env
[ -f data/config.json ] && chmod 600 data/config.json

echo "==> Dienst"
cp gutachten-trainer.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now gutachten-trainer

echo "==> Tunnel"
if [ -n "${TUNNEL_TOKEN:-}" ]; then
  if systemctl cat cloudflared >/dev/null 2>&1; then
    echo "cloudflared läuft schon als Dienst. Er wird nicht neu eingerichtet."
  else
    cloudflared service install "$TUNNEL_TOKEN"
  fi
  echo "Im Cloudflare-Dashboard, im Tunnel mit diesem Token: Public Hostname › Service HTTP://localhost:3000"
else
  cp gutachten-tunnel.service /etc/systemd/system/
  systemctl daemon-reload
  systemctl enable --now gutachten-tunnel
  sleep 10
  URL=$(journalctl -u gutachten-tunnel --no-pager 2>/dev/null | grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' | tail -1 || true)
  echo "Deine Adresse: ${URL:-noch nicht bereit. Gleich prüfen: journalctl -u gutachten-tunnel | grep trycloudflare}"
fi

echo "==> Update-Dienst"
chmod +x update.sh
cp gutachten-update.service gutachten-update.path /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now gutachten-update.path

echo
echo "Fertig. Prüfe: systemctl status gutachten-trainer"
echo "Den DeepSeek-Schlüssel trägst du im Browser unter Einstellungen › Server ein, falls du ihn nicht oben angegeben hast."
exit 0
