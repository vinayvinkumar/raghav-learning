import { copyFile, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(appRoot, "dist");
const publishedFiles = ["index.html", "english-module.css", "english-module.js"];

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });

await Promise.all(
  publishedFiles.map((filename) =>
    copyFile(join(appRoot, filename), join(outputDirectory, filename)),
  ),
);

await writeFile(join(outputDirectory, ".nojekyll"), "");

console.log(`Built Learning Hub for GitHub Pages in ${outputDirectory}`);
