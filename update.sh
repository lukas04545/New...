#!/usr/bin/env bash
# Wird vom Dienst gutachten-update als root gestartet, sobald die Einstellungen eine Aktualisierung anfordern.
# Holt den neuesten Code, installiert Pakete nur bei Änderungen und startet nur den Tipptrainer neu.
# Der Cloudflare-Tunnel bleibt dabei unberührt.
set -uo pipefail

APP=/opt/gutachten-trainer
DATA="$APP/data"
REQ="$DATA/update.request"
STATUS="$DATA/update-status.json"
LOG="$DATA/update.log"

[ -f "$REQ" ] || exit 0
SINCE=$(cat "$REQ")
rm -f "$REQ"

# Der Browser vergleicht „at“ mit dem Zeitpunkt seiner Anfrage, daher steht hier genau dieser Wert.
status() { printf '{"state":"%s","at":"%s"}' "$1" "$SINCE" > "$STATUS"; }

: > "$LOG"
exec >>"$LOG" 2>&1
status running
echo "Aktualisierung gestartet: $(date -Is)"

cd "$APP" || { echo "Ordner $APP fehlt."; status error; exit 1; }
GIT=(git -c "safe.directory=$APP")

OLD=$("${GIT[@]}" rev-parse HEAD)
echo "== Code holen"
if ! "${GIT[@]}" pull --ff-only; then
  echo "Aktualisierung fehlgeschlagen: git pull war nicht möglich (siehe oben)."
  status error; exit 1
fi
NEW=$("${GIT[@]}" rev-parse HEAD)

if [ "$OLD" != "$NEW" ]; then
  if ! "${GIT[@]}" diff --quiet "$OLD" "$NEW" -- package.json; then
    echo "== Abhängigkeiten installieren"
    npm install --omit=dev || { echo "npm install ist fehlgeschlagen."; status error; exit 1; }
  fi
else
  echo "Schon auf dem neuesten Stand. Der Dienst wird trotzdem neu gestartet."
fi

echo "== Rechte setzen"
chown -R tipptrainer:tipptrainer "$APP"
chmod 600 .env data/config.json data/ai-key.json 2>/dev/null || true

echo "== Tipptrainer neu starten (Tunnel bleibt an)"
if ! systemctl restart gutachten-trainer; then
  echo "Neustart fehlgeschlagen. Siehe: journalctl -u gutachten-trainer"
  status error; exit 1
fi

echo "Fertig. Version: $NEW"
status ok
