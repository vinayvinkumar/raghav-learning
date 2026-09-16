import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, resolve, sep } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { requireNodeAuthentication } from "../../packages/cockpit-auth/index.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const host = process.env.LEARNING_HOST ?? "127.0.0.1";
const port = Number(process.env.LEARNING_PORT ?? 5176);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function sendJson(response, status, payload) {
  response.writeHead(status, { "Cache-Control": "no-store", "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

const server = createServer((request, response) => {
  if (!requireNodeAuthentication(request, response, {
    canonicalOrigin: "http://localhost:5176",
    mode: "auto",
  })) return;
  const url = new URL(request.url ?? "/", `http://${request.headers.host ?? `${host}:${port}`}`);
  if (url.pathname === "/health") {
    sendJson(response, 200, { status: "ok" });
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    sendJson(response, 400, { error: "Invalid path." });
    return;
  }

  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const candidate = resolve(root, relativePath);
  const safePrefix = `${resolve(root)}${sep}`;
  if (!candidate.startsWith(safePrefix) || !existsSync(candidate) || !statSync(candidate).isFile()) {
    sendJson(response, 404, { error: "File not found." });
    return;
  }

  const extension = extname(candidate).toLowerCase();
  const isApplicationCode = [".css", ".html", ".js"].includes(extension);
  response.writeHead(200, {
    "Cache-Control": isApplicationCode ? "no-store" : "public, max-age=3600",
    "Content-Type": contentTypes[extension] ?? "application/octet-stream",
  });
  createReadStream(candidate).pipe(response);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") console.error(`Learning Hub port ${port} is already in use.`);
  else console.error(error);
  process.exit(1);
});

server.listen(port, host, () => {
  console.log(`Raghav Learning running at http://${host}:${port}`);
});
