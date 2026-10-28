#!/usr/bin/env bash
# Installiert den Gutachten-Tipptrainer auf einem frischen Ubuntu- oder Debian-Server.
# Der Dienst lauscht nur lokal; nach außen geht es über einen Cloudflare-Tunnel (HTTPS).
#
# Aufruf als root, im Projektordner (/opt/gutachten-trainer):
#   TUNNEL_TOKEN='...' bash install.sh
# TUNNEL_TOKEN ist der Token des bestehenden Cloudflare-Tunnels (derselbe wie für ff).
# Den DeepSeek-Schlüssel kannst du auch später im Browser unter Einstellungen eintragen.
set -euo pipefail

APP=/opt/gutachten-trainer
cd "$APP"

echo "==> Pakete"
apt-get update -qq
apt-get install -y -qq curl unzip ca-certificates gnupg

if ! command -v node >/dev/null || [ "$(node -p 'process.versions.node.split(".")[0]')" -lt 18 ]; then
  echo "==> Node.js 20"
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y -qq nodejs
fi

if [ -n "${TUNNEL_TOKEN:-}" ] && ! command -v cloudflared >/dev/null; then
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

if [ -n "${TUNNEL_TOKEN:-}" ]; then
  echo "==> Cloudflare-Tunnel"
  if systemctl cat cloudflared >/dev/null 2>&1; then
    echo "cloudflared läuft schon als Dienst (z. B. für ff). Er wird nicht neu eingerichtet."
  else
    cloudflared service install "$TUNNEL_TOKEN"
  fi
fi

echo
echo "Fertig. Prüfe: systemctl status gutachten-trainer"
echo "Den DeepSeek-Schlüssel trägst du im Browser unter Einstellungen › Server ein, falls du ihn nicht oben angegeben hast."
[ -n "${TUNNEL_TOKEN:-}" ] && echo "Im Cloudflare-Dashboard, im Tunnel mit diesem Token: Public Hostname für den Tipptrainer › Service HTTP://localhost:3000"
exit 0
