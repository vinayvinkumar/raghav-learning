import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(appRoot, "dist");
const publishedFiles = [
  "index.html",
  "english-module.css",
  "english-module.js",
  "manifest.webmanifest",
  "service-worker.js",
  "icons/app-icon.svg",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
];

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });

await Promise.all(publishedFiles.map(async (filename) => {
  const destination = join(outputDirectory, filename);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(join(appRoot, filename), destination);
}));

await writeFile(join(outputDirectory, ".nojekyll"), "");

console.log(`Built Learning Hub for GitHub Pages in ${outputDirectory}`);
