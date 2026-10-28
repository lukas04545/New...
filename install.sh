#!/usr/bin/env bash
# Installiert den Gutachten-Tipptrainer auf einem frischen Ubuntu- oder Debian-Server.
# Der Dienst lauscht nur lokal; nach außen geht es über einen Cloudflare-Tunnel (HTTPS).
#
# Aufruf als root, im Projektordner (/opt/gutachten-trainer):
#   TUNNEL_TOKEN='...' DEEPSEEK_API_KEY='...' bash install.sh
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

if [ -n "${TUNNEL_TOKEN:-}" ]; then
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
  cloudflared service install "$TUNNEL_TOKEN" || echo "Hinweis: cloudflared-Dienst war schon eingerichtet. Mit neuem Token: systemctl restart cloudflared"
fi

echo
echo "Fertig. Prüfe: systemctl status gutachten-trainer"
[ -n "${TUNNEL_TOKEN:-}" ] && echo "Tunnel prüfen: systemctl status cloudflared. Im Dashboard: Public Hostname › Service HTTP://localhost:3000"
exit 0
