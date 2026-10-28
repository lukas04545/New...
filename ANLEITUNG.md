# Gutachten-Tipptrainer auf dem eigenen VPS

Diese Anleitung geht von einem frischen Ubuntu- oder Debian-Server aus, auf dem du dich per SSH als `root` anmeldest. Rechne mit etwa 10 Minuten.

Du brauchst:

- einen VPS mit Ubuntu 22.04/24.04 oder Debian 12
- einen DeepSeek-API-Schlüssel von platform.deepseek.com (kannst du auch später im Browser eintragen)

Du brauchst **kein** Cloudflare-Konto, keine Domain und keinen Token. Der Tipptrainer lauscht nur auf `127.0.0.1:3000`. Die Installation richtet einen Cloudflare Quick Tunnel ein. Der stellt eine HTTPS-Adresse wie `https://xyz.trycloudflare.com` bereit. Der Server braucht keine offenen Ports außer SSH.

## 1. Installation

Auf dem Server als `root` ausführen:

```bash
apt-get update && apt-get install -y git
git clone https://github.com/lukas04545/New... /opt/gutachten-trainer
cd /opt/gutachten-trainer
bash install.sh
```

Das Skript installiert Node.js 20 und `cloudflared`, legt den Systembenutzer `tipptrainer` an, startet den Tipptrainer und den Tunnel als Dienste. Zum Schluss fragt es nach dem Passwort (mindestens 10 Zeichen) und zeigt deine Adresse an.

Falls das Repo privat ist, brauchst du vorher einen GitHub-Zugang. Ohne Git kannst du das Projekt auch per `scp` hochladen und das Skript im Ordner starten.

## 2. DeepSeek-Schlüssel eintragen

Im Browser unter **Einstellungen › Server › DeepSeek-API-Schlüssel › Speichern**. Der Schlüssel wird auf dem Server in einer Datei gespeichert, die nur der Dienst lesen kann.

## 3. Adresse und Prüfung

```bash
systemctl status gutachten-trainer gutachten-tunnel   # beide sollten "active (running)" zeigen
journalctl -u gutachten-tunnel --no-pager | grep trycloudflare.com | tail -1   # deine Adresse
```

Die Adresse öffnen und mit deinem Passwort anmelden.

**Wichtig zur Quick-Tunnel-Adresse:** Sie bleibt nur so lange gleich, wie der Tunnel läuft. Nach einem Neustart des Servers oder von `gutachten-tunnel` bekommst du eine neue. Für eine feste Adresse brauchst du eine eigene Domain bei Cloudflare und einen Tunnel-Token. Dann installierst du mit `TUNNEL_TOKEN='...' bash install.sh`. Im Cloudflare-Dashboard legst du dafür unter Zero Trust › Networks › Tunnels einen Tunnel an und trägst einen Public Hostname mit Service `HTTP://localhost:3000` ein.

## Passwort ändern

```bash
cd /opt/gutachten-trainer && npm run passwort && chown -R tipptrainer:tipptrainer /opt/gutachten-trainer
systemctl restart gutachten-trainer
```

Danach sind alle Geräte abgemeldet.

## Ohne Tunnel

Wenn du gar nichts von außen erreichen willst, öffne von deinem Rechner aus einen SSH-Tunnel:

```bash
ssh -L 3000:127.0.0.1:3000 root@DEINE-SERVER-IP
```

Solange das Fenster offen ist, erreichst du den Tipptrainer unter `http://localhost:3000`. Den Dienst `gutachten-tunnel` dafür einfach nicht starten: `systemctl disable --now gutachten-tunnel`.

## Wo liegen deine Daten?

Alles liegt in `/opt/gutachten-trainer/data`:

| Ordner | Inhalt |
|---|---|
| `db/` | Einheiten (Übungen, Definitionen, Streitstände, Schemata, Karteikarten) und Mitschriften als JSON |
| `ablage/` | Originaldateien und `Übungen.md`, sortiert nach Rechtsgebiet › Teilgebiet › Datum Thema |
| `papierkorb/` | Ablage-Ordner gelöschter Einheiten |
| `config.json` | Passwort-Hash und Sitzungsschlüssel |
| `ai-key.json` | DeepSeek-Schlüssel aus den Einstellungen |

Sichern: `tar czf jura-backup-$(date +%F).tgz -C /opt/gutachten-trainer data` und die Datei herunterladen, z. B. mit `scp`.

## Aktualisieren

```bash
cd /opt/gutachten-trainer && git pull
npm install --omit=dev
chown -R tipptrainer:tipptrainer /opt/gutachten-trainer
systemctl restart gutachten-trainer
```

Der Ordner `data` und die Datei `.env` bleiben dabei unverändert.

## Kosten der KI

Abgerechnet wird bei DeepSeek nach Textmenge. Eine Vorlesung mit 30 Folien kostet in der Regel nur Bruchteile eines Cents bis wenige Cent. Den Stand siehst du auf platform.deepseek.com.
