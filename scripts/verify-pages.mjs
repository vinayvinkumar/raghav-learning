import { access, readFile } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(appRoot, "dist");
const indexPath = resolve(outputDirectory, "index.html");
const html = await readFile(indexPath, "utf8");
const localReferences = [...html.matchAll(/(?:href|src)=["']([^"']+)["']/g)]
  .map((match) => match[1])
  .filter((reference) => !/^(?:[a-z]+:|#|\/\/)/i.test(reference));

if (localReferences.length === 0) {
  throw new Error("The Learning Hub page does not contain any local assets.");
}

for (const reference of localReferences) {
  if (reference.startsWith("/")) {
    throw new Error(`Root-relative asset paths do not work on project Pages sites: ${reference}`);
  }

  const relativePath = reference.split(/[?#]/, 1)[0];
  const assetPath = resolve(outputDirectory, relativePath);
  if (assetPath !== outputDirectory && !assetPath.startsWith(`${outputDirectory}${sep}`)) {
    throw new Error(`Asset path escapes the Pages output directory: ${reference}`);
  }
  await access(assetPath);
}

for (const filename of [".nojekyll", "english-module.css", "english-module.js"]) {
  await access(resolve(outputDirectory, filename));
}

console.log("Verified Learning Hub GitHub Pages output.");
