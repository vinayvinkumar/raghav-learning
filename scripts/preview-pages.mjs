import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, resolve, sep } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(appRoot, "dist");
const host = process.env.LEARNING_PAGES_HOST ?? "127.0.0.1";
const port = Number(process.env.LEARNING_PAGES_PORT ?? 4176);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

if (!existsSync(resolve(outputDirectory, "index.html"))) {
  console.error("Pages output is missing. Run `npm run build` first.");
  process.exit(1);
}

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${request.headers.host ?? `${host}:${port}`}`);
  const relativePath = requestUrl.pathname === "/" ? "index.html" : requestUrl.pathname.replace(/^\/+/, "");
  const candidate = resolve(outputDirectory, relativePath);
  const safePrefix = `${outputDirectory}${sep}`;

  if (!candidate.startsWith(safePrefix) || !existsSync(candidate) || !statSync(candidate).isFile()) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("File not found.");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-store",
    "Content-Type": contentTypes[extname(candidate).toLowerCase()] ?? "application/octet-stream",
  });
  createReadStream(candidate).pipe(response);
});

server.listen(port, host, () => {
  console.log(`Learning Hub Pages preview running at http://${host}:${port}`);
});
