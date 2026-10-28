# Gutachten-Tipptrainer auf dem eigenen VPS (mit Cloudflare Tunnel)

Diese Anleitung geht von einem frischen Ubuntu- oder Debian-Server aus, auf dem du dich per SSH als `root` anmeldest. Rechne mit etwa 15 Minuten.

Du brauchst:

- einen VPS mit Ubuntu 22.04/24.04 oder Debian 12
- eine Domain, deren DNS bei Cloudflare verwaltet wird (z. B. `jura.deinname.de`), und ein kostenloses Cloudflare-Konto
- einen DeepSeek-API-Schlüssel von platform.deepseek.com

Der Tipptrainer lauscht nur auf `127.0.0.1:3000`. Von außen erreichbar ist er ausschließlich über den Cloudflare-Tunnel. Der Server braucht dafür keine offenen Ports außer SSH.

## 1. Cloudflare-Tunnel anlegen (im Browser)

Läuft auf dem Server schon ein Tunnel, etwa für ff, nimm dessen Token und überspringe das Anlegen. Du musst dann nur im selben Tunnel einen neuen Public Hostname hinzufügen (siehe Punkt 4 in diesem Abschnitt).

1. Im Cloudflare-Dashboard: **Zero Trust › Networks › Tunnels › Create a tunnel › Cloudflared**.
2. Einen Namen vergeben, z. B. `tipptrainer`.
3. Bei der Installation erscheint ein Befehl mit einem langen Token (`eyJ…`). Kopiere nur das Token, den Rest brauchst du nicht.
4. Weiter zu **Public Hostname**: Subdomain `jura`, Domain `deinname.de`, Service **HTTP** und URL `localhost:3000`. Speichern.

## 2. Installation auf dem Server

Auf dem Server als `root` ausführen. Ersetze die beiden Werte in Hochkommas:

```bash
apt-get update && apt-get install -y git
git clone https://github.com/lukas04545/New... /opt/gutachten-trainer
cd /opt/gutachten-trainer
TUNNEL_TOKEN='DEIN-TUNNEL-TOKEN' bash install.sh
```

Das Skript installiert Node.js 20, legt den Systembenutzer `tipptrainer` an, installiert die Abhängigkeiten und startet den Dienst. `cloudflared` wird nur installiert, wenn es fehlt. Läuft es schon für ff, bleibt der bestehende Dienst unverändert. Zum Schluss fragt es nach dem Passwort (mindestens 10 Zeichen).

Den DeepSeek-Schlüssel trägst du danach im Browser ein: **Einstellungen › Server › DeepSeek-API-Schlüssel › Speichern**. Er wird auf dem Server in einer Datei gespeichert, die nur der Dienst lesen kann. Alternativ geht auch `DEEPSEEK_API_KEY=` in der `.env`, die Einstellung im Browser hat aber Vorrang.

Falls das Repo privat ist, bitte vorher einen GitHub-Zugang einrichten. Ohne Git kannst du das Projekt auch per `scp` hochladen und das Skript im Ordner starten.

## 3. Prüfen

```bash
systemctl status gutachten-trainer cloudflared   # beide sollten "active (running)" zeigen
journalctl -u gutachten-trainer -f               # Protokoll des Tipptrainers
```

Dann `https://jura.deinname.de` im Browser öffnen und mit deinem Passwort anmelden.

## Passwort ändern

```bash
cd /opt/gutachten-trainer && npm run passwort && chown -R tipptrainer:tipptrainer /opt/gutachten-trainer
systemctl restart gutachten-trainer
```

Danach sind alle Geräte abgemeldet.

## Ohne Domain

Ohne eigene Domain kannst du den Cloudflare-Tunnel weglassen und stattdessen per SSH-Tunnel zugreifen:

```bash
ssh -L 3000:127.0.0.1:3000 root@DEINE-SERVER-IP
```

Solange das Fenster offen ist, erreichst du den Tipptrainer unter `http://localhost:3000`. Dafür Schritt 2 ohne `TUNNEL_TOKEN` ausführen, dann wird kein Tunnel eingerichtet.

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

```bash
cd /opt/gutachten-trainer && git pull
npm install --omit=dev
chown -R tipptrainer:tipptrainer /opt/gutachten-trainer
systemctl restart gutachten-trainer
```

Der Ordner `data` und die Datei `.env` bleiben dabei unverändert.

## Kosten der KI

Abgerechnet wird bei DeepSeek nach Textmenge. Eine Vorlesung mit 30 Folien kostet in der Regel nur Bruchteile eines Cents bis wenige Cent. Den Stand siehst du auf platform.deepseek.com.
