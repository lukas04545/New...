# Gutachten-Tipptrainer auf dem eigenen VPS

Diese Anleitung geht von einem frischen Ubuntu- oder Debian-Server aus, auf dem du dich per SSH als `root` (oder mit `sudo`) anmeldest. Rechne mit etwa 20 Minuten.

Du brauchst:

- einen VPS mit Ubuntu 22.04/24.04 oder Debian 12
- eine Domain oder Subdomain, die auf die IP-Adresse des VPS zeigt (z. B. `jura.deinname.de`). Ohne Domain geht es auch, siehe Abschnitt „Ohne Domain“.
- einen DeepSeek-API-Schlüssel von platform.deepseek.com

## 1. Node.js installieren

```bash
apt update && apt install -y curl unzip
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v   # sollte v20.x anzeigen
```

## 2. Programm hochladen und einrichten

Lade `Gutachten-Tipptrainer-Server.zip` auf den Server, z. B. von deinem Rechner aus:

```bash
scp Gutachten-Tipptrainer-Server.zip root@DEINE-SERVER-IP:/opt/
```

Dann auf dem Server:

```bash
cd /opt
unzip Gutachten-Tipptrainer-Server.zip
cd gutachten-trainer
useradd --system --home /opt/gutachten-trainer --shell /usr/sbin/nologin tipptrainer
npm install --omit=dev
cp .env.example .env
nano .env
```

In `.env` trägst du bei `DEEPSEEK_API_KEY=` deinen Schlüssel ein und speicherst mit Strg+O, Enter, Strg+X.

`npm install` lädt die Bibliotheken für PDF, Word und die Texterkennung von Folien. Klappt das nicht, läuft das Programm trotzdem und lädt diese Bibliotheken im Browser aus dem Internet.

## 3. Passwort festlegen

```bash
npm run passwort
chown -R tipptrainer:tipptrainer /opt/gutachten-trainer
chmod 600 .env data/config.json
```

Mit `npm run passwort` kannst du das Passwort jederzeit ändern. Danach sind alle Geräte abgemeldet. Führe anschließend den `chown`-Befehl erneut aus.

## 4. Als Dienst starten

```bash
cp gutachten-trainer.service /etc/systemd/system/
systemctl daemon-reload
systemctl enable --now gutachten-trainer
systemctl status gutachten-trainer   # sollte "active (running)" zeigen
```

Der Dienst startet nach einem Neustart des Servers automatisch. Protokoll ansehen: `journalctl -u gutachten-trainer -f`

## 5. HTTPS mit Caddy

Der Tipptrainer lauscht nur intern auf Port 3000. Caddy stellt ihn mit HTTPS-Zertifikat nach außen bereit. Ohne HTTPS würde dein Passwort unverschlüsselt übertragen.

```bash
apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list
apt update && apt install -y caddy
```

Dann `/etc/caddy/Caddyfile` öffnen (`nano /etc/caddy/Caddyfile`), den Inhalt ersetzen durch

```
jura.deinname.de {
    reverse_proxy 127.0.0.1:3000
    request_body {
        max_size 100MB
    }
}
```

und neu laden:

```bash
systemctl reload caddy
```

Falls eine Firewall aktiv ist: `ufw allow 80,443/tcp`

Jetzt `https://jura.deinname.de` im Browser öffnen und mit deinem Passwort anmelden.

## Ohne Domain

Lass Caddy weg und öffne von deinem Rechner aus einen SSH-Tunnel:

```bash
ssh -L 3000:127.0.0.1:3000 root@DEINE-SERVER-IP
```

Solange das Fenster offen ist, erreichst du den Tipptrainer unter `http://localhost:3000`.

## Wo liegen deine Daten?

Alles liegt in `/opt/gutachten-trainer/data`:

| Ordner | Inhalt |
|---|---|
| `db/` | Einheiten (Übungen, Definitionen, Streitstände, Schemata) und Mitschriften als JSON |
| `ablage/` | Originaldateien und `Übungen.md`, sortiert nach Rechtsgebiet › Teilgebiet › Datum Thema |
| `papierkorb/` | Ablage-Ordner gelöschter Einheiten |
| `config.json` | Passwort-Hash und Sitzungsschlüssel |

Sichern: `tar czf jura-backup-$(date +%F).tgz -C /opt/gutachten-trainer data` und die Datei herunterladen, z. B. mit `scp`.

## Aktualisieren

Neue Version hochladen, entpacken und den Ordner `data` sowie die Datei `.env` behalten. Danach:

```bash
cd /opt/gutachten-trainer && npm install --omit=dev
chown -R tipptrainer:tipptrainer /opt/gutachten-trainer
systemctl restart gutachten-trainer
```

## Kosten der KI

Abgerechnet wird bei DeepSeek nach Textmenge. Eine Vorlesung mit 30 Folien kostet in der Regel nur Bruchteile eines Cents bis wenige Cent. Den Stand siehst du auf platform.deepseek.com.
