#!/usr/bin/env node
/*
 * Gutachten-Tipptrainer – Server für den eigenen VPS.
 * Keine Fremdpakete nötig (Node.js 18 oder neuer). Start: node server.js
 * Passwort setzen: node server.js passwort
 */
"use strict";
const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const readline = require("readline");

const APP_DIR = __dirname;
loadEnv(path.join(APP_DIR, ".env"));

const PORT = parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.HOST || "127.0.0.1";
const DATA_DIR = path.resolve(APP_DIR, process.env.DATA_DIR || "data");
const DB_DIR = path.join(DATA_DIR, "db");
const META_DIR = path.join(DATA_DIR, "meta");
const ABLAGE_DIR = path.join(DATA_DIR, "ablage");
const TRASH_DIR = path.join(DATA_DIR, "papierkorb");
const CONFIG_FILE = path.join(DATA_DIR, "config.json");
const ENV_DS_KEY = (process.env.DEEPSEEK_API_KEY || "").trim();
const AI_KEY_FILE = path.join(DATA_DIR, "ai-key.json");
// Update: der Browser legt eine Anfrage ab, ein Root-Dienst (gutachten-update) führt update.sh aus.
const UPDATE_REQ = path.join(DATA_DIR, "update.request");
const UPDATE_STATUS = path.join(DATA_DIR, "update-status.json");
const UPDATE_LOG = path.join(DATA_DIR, "update.log");
const APP_VERSION = (() => { try { return require("child_process").execFileSync("git", ["-C", APP_DIR, "rev-parse", "--short", "HEAD"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim(); } catch (e) { return ""; } })();
const DS_MODEL = (process.env.DEEPSEEK_MODEL || "deepseek-chat").trim();
const DS_URL = (process.env.DEEPSEEK_URL || "https://api.deepseek.com/chat/completions").trim();
const SESSION_DAYS = parseInt(process.env.SESSION_DAYS || "30", 10);
const PUBLIC_DIR = path.join(APP_DIR, "public");
const RG = ["Zivilrecht", "Strafrecht", "Öffentliches Recht", "Grundlagen"];

function loadEnv(file) {
  try {
    for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]] !== undefined) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  } catch (e) { /* keine .env */ }
}

/* ---------- Passwort und Sitzungen ---------- */
function readConfig() { try { return JSON.parse(fs.readFileSync(CONFIG_FILE, "utf8")); } catch (e) { return null; } }
/* Der DeepSeek-Schlüssel kommt bevorzugt aus den Einstellungen (Datei im Datenordner, nur für den Dienst lesbar), sonst aus der .env. */
function readAiKey() { try { return JSON.parse(fs.readFileSync(AI_KEY_FILE, "utf8")).key || ""; } catch (e) { return ""; } }
function currentAiKey() { return readAiKey() || ENV_DS_KEY; }
function hashPassword(pw, salt) { return crypto.scryptSync(pw, salt, 64, { N: 16384, r: 8, p: 1 }).toString("hex"); }

async function setPasswordCli() {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  const ask = (q) => new Promise((res) => {
    rl.stdoutMuted = false; rl.question(q, (a) => { rl.stdoutMuted = false; process.stdout.write("\n"); res(a); }); rl.stdoutMuted = true;
  });
  rl._writeToOutput = function (s) { if (!rl.stdoutMuted) rl.output.write(s); else rl.output.write("*"); };
  const a = await ask("Neues Passwort (mind. 10 Zeichen): ");
  const b = await ask("Passwort wiederholen: ");
  rl.close();
  if (a.length < 10) { console.error("Zu kurz. Bitte mindestens 10 Zeichen."); process.exit(1); }
  if (a !== b) { console.error("Die Eingaben stimmen nicht überein."); process.exit(1); }
  await fsp.mkdir(DATA_DIR, { recursive: true });
  const salt = crypto.randomBytes(16).toString("hex");
  const cfg = { salt, hash: hashPassword(a, salt), secret: crypto.randomBytes(32).toString("hex"), changed: new Date().toISOString() };
  await fsp.writeFile(CONFIG_FILE, JSON.stringify(cfg, null, 2), { mode: 0o600 });
  console.log("Passwort gespeichert. Alle bisherigen Anmeldungen sind damit abgemeldet.");
}

function sign(payload, secret) { return crypto.createHmac("sha256", secret).update(payload).digest("base64url"); }
function makeToken(cfg) {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + SESSION_DAYS * 864e5 })).toString("base64url");
  return payload + "." + sign(payload, cfg.secret);
}
function validToken(tok, cfg) {
  if (!tok || !cfg) return false;
  const [p, s] = tok.split(".");
  if (!p || !s) return false;
  const exp = sign(p, cfg.secret);
  if (s.length !== exp.length || !crypto.timingSafeEqual(Buffer.from(s), Buffer.from(exp))) return false;
  try { return JSON.parse(Buffer.from(p, "base64url").toString()).exp > Date.now(); } catch (e) { return false; }
}
function cookies(req) {
  const out = {};
  for (const part of (req.headers.cookie || "").split(";")) { const i = part.indexOf("="); if (i > 0) out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim()); }
  return out;
}
function isSecure(req) { return req.headers["x-forwarded-proto"] === "https" || /"scheme":"https"/.test(req.headers["cf-visitor"] || "") || !!req.socket.encrypted; }
// Hinter dem Cloudflare-Tunnel kommt jede Anfrage von 127.0.0.1; die echte IP steht in CF-Connecting-IP.
function clientIp(req) { return req.headers["cf-connecting-ip"] || req.socket.remoteAddress; }
const attempts = new Map();
function tooManyAttempts(ip) {
  const now = Date.now(), list = (attempts.get(ip) || []).filter((t) => now - t < 15 * 60e3);
  attempts.set(ip, list); return list.length >= 10;
}

/* ---------- Hilfsfunktionen ---------- */
function send(res, status, body, headers = {}) {
  const isBuf = Buffer.isBuffer(body);
  const data = isBuf || typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, { "Content-Type": isBuf || typeof body === "string" ? "text/plain; charset=utf-8" : "application/json; charset=utf-8", ...headers });
  res.end(data);
}
function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on("data", (c) => { size += c.length; if (size > limit) { reject(Object.assign(new Error("zu groß"), { status: 413 })); req.destroy(); } else chunks.push(c); });
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}
async function readJSON(req, limit) { const b = await readBody(req, limit); try { return JSON.parse(b.toString("utf8")); } catch (e) { throw Object.assign(new Error("JSON"), { status: 400 }); } }
const cleanName = (s) => String(s || "").replace(/[\\/:*?"<>|\x00-\x1f]/g, "").replace(/\s+/g, " ").replace(/^\.+/, "").trim().slice(0, 120) || "Ohne Titel";
const validId = (id) => /^[un]-[a-z0-9]{4,20}$/.test(id);
async function writeAtomic(file, data) { const tmp = file + "." + crypto.randomBytes(4).toString("hex") + ".tmp"; await fsp.writeFile(tmp, data); await fsp.rename(tmp, file); }
async function readDoc(id) { try { return JSON.parse(await fsp.readFile(path.join(DB_DIR, id + ".json"), "utf8")); } catch (e) { return null; } }
async function readMeta(id) { try { return JSON.parse(await fsp.readFile(path.join(META_DIR, id + ".json"), "utf8")); } catch (e) { return null; } }
async function exists(p) { try { await fsp.access(p); return true; } catch (e) { return false; } }

async function unitDir(unit) {
  const meta = await readMeta(unit.id);
  if (meta?.dir && await exists(path.join(ABLAGE_DIR, meta.dir))) return path.join(ABLAGE_DIR, meta.dir);
  const rg = RG.includes(unit.rechtsgebiet) ? unit.rechtsgebiet : "Grundlagen";
  const base = [rg, cleanName(unit.teilgebiet || "Allgemein"), cleanName(`${unit.datum || ""} ${unit.thema || "Vorlesung"}`)];
  let rel = path.join(...base), n = 2;
  while (await exists(path.join(ABLAGE_DIR, rel))) rel = path.join(base[0], base[1], `${base[2]} (${n++})`);
  await fsp.mkdir(path.join(ABLAGE_DIR, rel), { recursive: true });
  await writeAtomic(path.join(META_DIR, unit.id + ".json"), JSON.stringify({ dir: rel }));
  return path.join(ABLAGE_DIR, rel);
}

/* ---------- Statische Dateien ---------- */
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".wasm": "application/wasm", ".gz": "application/gzip", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon", ".md": "text/markdown; charset=utf-8", ".pdf": "application/pdf" };
const NM = path.join(APP_DIR, "node_modules");
const VENDOR = {
  "/vendor/pdf.min.js": path.join(NM, "pdfjs-dist/build/pdf.min.js"),
  "/vendor/pdf.worker.min.js": path.join(NM, "pdfjs-dist/build/pdf.worker.min.js"),
  "/vendor/mammoth.browser.min.js": path.join(NM, "mammoth/mammoth.browser.min.js"),
  "/vendor/tesseract/tesseract.min.js": path.join(NM, "tesseract.js/dist/tesseract.min.js"),
  "/vendor/tesseract/worker.min.js": path.join(NM, "tesseract.js/dist/worker.min.js"),
  "/vendor/lang/deu.traineddata.gz": path.join(NM, "@tesseract.js-data/deu/4.0.0_best_int/deu.traineddata.gz"),
};
let INDEX = null;
function indexHtml() {
  if (INDEX && process.env.NODE_ENV === "production") return INDEX;
  const local = fs.existsSync(VENDOR["/vendor/pdf.min.js"]) && fs.existsSync(VENDOR["/vendor/mammoth.browser.min.js"]);
  const vendor = local
    ? '<script src="/vendor/pdf.min.js"></script>\n<script src="/vendor/mammoth.browser.min.js"></script>'
    : '<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.6.0/mammoth.browser.min.js"></script>\n<script>window.GT_PDF_WORKER="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"</script>';
  INDEX = fs.readFileSync(path.join(PUBLIC_DIR, "head.html"), "utf8").replace("<!--VENDOR-->", vendor) + fs.readFileSync(path.join(PUBLIC_DIR, "body.html"), "utf8") + '\n<script src="/app.js"></script>\n</body>\n</html>\n';
  return INDEX;
}
async function serveFile(req, res, file, cache) {
  try {
    const st = await fsp.stat(file);
    if (!st.isFile()) throw new Error();
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream", "Content-Length": st.size, "Cache-Control": cache || "no-cache" });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  } catch (e) { send(res, 404, "Nicht gefunden"); }
}

/* ---------- Anmeldeseite ---------- */
const LOGIN_HTML = `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Anmelden · Gutachten-Tipptrainer</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bitter:wght@700&family=Source+Sans+3:wght@400;600&display=swap">
<style>:root{--bg:#EEF2F0;--surface:#fff;--ink:#17201C;--muted:#5A6962;--line:#D3DCD8;--accent:#1D6A50;--wrong:#B8322A}
@media (prefers-color-scheme:dark){:root{--bg:#111614;--surface:#19201D;--ink:#E3EBE7;--muted:#93A39B;--line:#2B3530;--accent:#5FC79E;--wrong:#F07F72;color-scheme:dark}}
body{margin:0;min-height:100vh;display:grid;place-items:center;background:var(--bg);color:var(--ink);font:16px/1.5 "Source Sans 3",system-ui,sans-serif;padding:16px;box-sizing:border-box}
form{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:28px;display:grid;gap:14px;width:min(360px,100%)}
h1{font:700 1.5rem Bitter,Georgia,serif;margin:0}h1 span{color:var(--accent)}p{margin:0;color:var(--muted)}
input{font:inherit;padding:9px 11px;border:1px solid var(--line);border-radius:8px;background:var(--surface);color:var(--ink)}
button{font-family:inherit;font-weight:600;font-size:1rem;padding:10px;border-radius:8px;border:0;background:var(--ink);color:var(--bg);cursor:pointer}
.err{color:var(--wrong);min-height:1.5em}</style></head><body>
<form id="f"><h1>Gutachten<span>·</span>Tipptrainer</h1><p>Bitte melde dich an.</p>
<input type="password" id="pw" autocomplete="current-password" placeholder="Passwort" aria-label="Passwort" autofocus required>
<button type="submit">Anmelden</button><p class="err" id="e"></p></form>
<script>document.getElementById("f").addEventListener("submit",async e=>{e.preventDefault();const r=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:document.getElementById("pw").value})});
if(r.ok){location.href="/";return;}const b=await r.json().catch(()=>({}));document.getElementById("e").textContent=b.code==="too_many"?"Zu viele Versuche. Warte 15 Minuten.":"Das Passwort stimmt nicht.";});</script></body></html>`;

/* ---------- KI-Weiterleitung an DeepSeek ---------- */
async function handleAI(req, res) {
  const key = currentAiKey();
  if (!key) return send(res, 503, { code: "no_key" });
  const { prompt, json } = await readJSON(req, 600_000);
  if (typeof prompt !== "string" || !prompt.trim()) return send(res, 400, { code: "bad_request" });
  const ctl = new AbortController();
  res.on("close", () => { if (!res.writableEnded) ctl.abort(); });
  const body = {
    model: DS_MODEL, stream: true, max_tokens: 8000,
    messages: [
      { role: "system", content: json ? "Du antwortest ausschließlich mit einem gültigen JSON-Objekt." : "Du bist ein erfahrener juristischer Korrektor und Repetitor." },
      { role: "user", content: prompt },
    ],
  };
  if (json) body.response_format = { type: "json_object" };
  let up;
  try {
    up = await fetch(DS_URL, { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer " + key }, body: JSON.stringify(body), signal: ctl.signal });
  } catch (e) { return send(res, 502, { code: "network" }); }
  if (!up.ok) {
    const t = await up.text().catch(() => "");
    const code = up.status === 401 ? "auth" : up.status === 402 ? "balance" : up.status === 429 ? "rate_limited" : /context|too long|maximum/i.test(t) ? "too_large" : up.status === 400 ? "bad_model" : "http";
    console.error(`[ki] DeepSeek ${up.status}: ${t.slice(0, 300)}`);
    return send(res, 502, { code, status: up.status });
  }
  res.writeHead(200, { "Content-Type": "text/event-stream; charset=utf-8", "Cache-Control": "no-cache", "X-Accel-Buffering": "no" });
  try { for await (const chunk of up.body) res.write(chunk); }
  catch (e) { if (!ctl.signal.aborted) res.write(`data: ${JSON.stringify({ error: "network" })}\n\n`); }
  res.end();
}

/* ---------- Anfragen ---------- */
async function handle(req, res) {
  const url = new URL(req.url, "http://x");
  const p = url.pathname;
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "same-origin");
  const cfg = readConfig();
  const authed = validToken(cookies(req).gt_session, cfg);

  if (p === "/login") return authed ? send(res, 302, "", { Location: "/" }) : send(res, 200, LOGIN_HTML, { "Content-Type": "text/html; charset=utf-8" });
  if (p === "/api/login" && req.method === "POST") {
    const ip = clientIp(req);
    if (tooManyAttempts(ip)) return send(res, 429, { code: "too_many" });
    const { password } = await readJSON(req, 10_000);
    const ok = cfg && typeof password === "string" && crypto.timingSafeEqual(Buffer.from(hashPassword(password, cfg.salt), "hex"), Buffer.from(cfg.hash, "hex"));
    if (!ok) { attempts.get(ip).push(Date.now()); return send(res, 401, { code: "wrong" }); }
    attempts.delete(ip);
    return send(res, 200, { ok: true }, { "Set-Cookie": `gt_session=${makeToken(cfg)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_DAYS * 86400}${isSecure(req) ? "; Secure" : ""}` });
  }
  if (p === "/api/logout") return send(res, 200, { ok: true }, { "Set-Cookie": "gt_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0" });
  if (p === "/favicon.ico") return send(res, 204, "");

  if (!authed) return p.startsWith("/api/") ? send(res, 401, { code: "login" }) : send(res, 302, "", { Location: "/login" });

  if (p === "/" || p === "/index.html") return send(res, 200, indexHtml(), { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
  if (p === "/app.js" || p === "/app.css") return serveFile(req, res, path.join(PUBLIC_DIR, p));
  if (VENDOR[p]) return serveFile(req, res, VENDOR[p], "public, max-age=604800");
  if (p.startsWith("/vendor/tesseract-core/")) {
    const f = path.basename(p);
    if (!/^tesseract-core[\w.-]*\.(js|wasm)$/.test(f)) return send(res, 404, "Nicht gefunden");
    return serveFile(req, res, path.join(NM, "tesseract.js-core", f), "public, max-age=604800");
  }

  if (p === "/api/me") {
    const stored = readAiKey(), key = stored || ENV_DS_KEY;
    return send(res, 200, { ai: !!key, aiHint: key.slice(-4), aiSource: stored ? "settings" : ENV_DS_KEY ? "env" : "", model: DS_MODEL, dataDir: DATA_DIR, version: APP_VERSION });
  }
  if (p === "/api/settings/ai-key" && req.method === "PUT") {
    const { key } = await readJSON(req, 10_000);
    const k = typeof key === "string" ? key.trim() : "";
    if (!/^[\w.-]{16,200}$/.test(k)) return send(res, 400, { code: "bad_key" });
    await fsp.writeFile(AI_KEY_FILE, JSON.stringify({ key: k }), { mode: 0o600 });
    await fsp.chmod(AI_KEY_FILE, 0o600);
    return send(res, 200, { ok: true, hint: k.slice(-4) });
  }
  if (p === "/api/update" && req.method === "POST") {
    if (fs.existsSync(UPDATE_REQ)) return send(res, 409, { code: "busy" });
    const since = new Date().toISOString();
    await fsp.writeFile(UPDATE_REQ, since);
    return send(res, 202, { ok: true, since });
  }
  if (p === "/api/update/status" && req.method === "GET") {
    let st = {};
    try { st = JSON.parse(await fsp.readFile(UPDATE_STATUS, "utf8")); } catch (e) { /* noch kein Lauf */ }
    const log = await fsp.readFile(UPDATE_LOG, "utf8").catch(() => "");
    return send(res, 200, { ...st, log: log.slice(-4000) });
  }
  if (p === "/api/settings/ai-key" && req.method === "DELETE") {
    await fsp.rm(AI_KEY_FILE, { force: true });
    return send(res, 200, { ok: true });
  }

  if (p === "/api/docs" && req.method === "GET") {
    const files = (await fsp.readdir(DB_DIR)).filter((f) => f.endsWith(".json"));
    const docs = [];
    for (const f of files) { try { docs.push(JSON.parse(await fsp.readFile(path.join(DB_DIR, f), "utf8"))); } catch (e) { console.error("[db] defekt:", f); } }
    return send(res, 200, docs);
  }
  const dm = p.match(/^\/api\/docs\/([^/]+)$/);
  if (dm) {
    const id = decodeURIComponent(dm[1]);
    if (!validId(id)) return send(res, 400, { code: "bad_id" });
    const file = path.join(DB_DIR, id + ".json");
    if (req.method === "PUT") {
      const doc = await readJSON(req, 5_000_000);
      if (!doc || doc.id !== id || !["unit", "note"].includes(doc.kind)) return send(res, 400, { code: "bad_doc" });
      await writeAtomic(file, JSON.stringify(doc));
      return send(res, 200, { ok: true });
    }
    if (req.method === "DELETE") {
      const meta = await readMeta(id);
      if (meta?.dir && await exists(path.join(ABLAGE_DIR, meta.dir))) {
        const dest = path.join(TRASH_DIR, new Date().toISOString().replace(/[:.]/g, "-") + " " + path.basename(meta.dir));
        await fsp.mkdir(TRASH_DIR, { recursive: true });
        await fsp.rename(path.join(ABLAGE_DIR, meta.dir), dest);
      }
      await fsp.rm(file, { force: true }); await fsp.rm(path.join(META_DIR, id + ".json"), { force: true });
      return send(res, 200, { ok: true });
    }
  }

  if (p === "/api/files") {
    const id = url.searchParams.get("unit") || "", name = cleanName(url.searchParams.get("name"));
    if (!validId(id)) return send(res, 400, { code: "bad_id" });
    const unit = await readDoc(id);
    if (!unit) return send(res, 404, { code: "no_unit" });
    if (req.method === "POST") {
      const data = await readBody(req, 80 * 1024 * 1024);
      const dir = await unitDir(unit);
      await writeAtomic(path.join(dir, name), data);
      return send(res, 200, { ok: true, path: path.relative(ABLAGE_DIR, path.join(dir, name)) });
    }
    if (req.method === "GET" || req.method === "HEAD") {
      const meta = await readMeta(id);
      if (!meta?.dir) return send(res, 404, "Nicht gefunden");
      res.setHeader("Content-Disposition", `attachment; filename*=UTF-8''${encodeURIComponent(name)}`);
      return serveFile(req, res, path.join(ABLAGE_DIR, meta.dir, name));
    }
  }

  if (p === "/api/ai" && req.method === "POST") return handleAI(req, res);
  return send(res, 404, "Nicht gefunden");
}

/* ---------- Start ---------- */
async function main() {
  if (process.argv[2] === "passwort" || process.argv[2] === "password") return setPasswordCli();
  if (!readConfig()) { console.error("Noch kein Passwort gesetzt. Führe zuerst aus: npm run passwort"); process.exit(1); }
  for (const d of [DB_DIR, META_DIR, ABLAGE_DIR]) await fsp.mkdir(d, { recursive: true });
  if (!fs.existsSync(path.join(NM, "pdfjs-dist"))) console.warn("Hinweis: Bibliotheken fehlen, die Seite lädt sie dann aus dem Internet. Führe 'npm install' aus.");
  if (!currentAiKey()) console.warn("Hinweis: Noch kein DeepSeek-Schlüssel. Trag ihn unter „Server“ in den Einstellungen ein. KI-Funktionen sind bis dahin aus.");
  http.createServer((req, res) => {
    handle(req, res).catch((e) => {
      if (!res.headersSent) send(res, e.status || 500, { code: e.status === 413 ? "too_large" : e.status === 400 ? "bad_request" : "server" });
      if (!e.status) console.error(e);
    });
  }).listen(PORT, HOST, () => console.log(`Gutachten-Tipptrainer läuft auf http://${HOST}:${PORT} (Daten: ${DATA_DIR})`));
}
main();
