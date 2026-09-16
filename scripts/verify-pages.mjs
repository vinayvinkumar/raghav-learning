import { access, readFile } from "node:fs/promises";
import { dirname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(appRoot, "dist");
const indexPath = resolve(outputDirectory, "index.html");
const html = await readFile(indexPath, "utf8");
const manifest = JSON.parse(await readFile(resolve(outputDirectory, "manifest.webmanifest"), "utf8"));
const serviceWorker = await readFile(resolve(outputDirectory, "service-worker.js"), "utf8");
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

for (const filename of [".nojekyll", "english-module.css", "english-module.js", "service-worker.js"]) {
  await access(resolve(outputDirectory, filename));
}

if (manifest.display !== "standalone" || manifest.start_url !== "./" || manifest.scope !== "./") {
  throw new Error("The web app manifest is not configured for project-path installation.");
}

async function verifyPngDimensions(relativePath, expectedWidth, expectedHeight) {
  const image = await readFile(resolve(outputDirectory, relativePath));
  const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (!image.subarray(0, 8).equals(pngSignature)) {
    throw new Error(`Install icon is not a valid PNG: ${relativePath}`);
  }
  const width = image.readUInt32BE(16);
  const height = image.readUInt32BE(20);
  if (width !== expectedWidth || height !== expectedHeight) {
    throw new Error(`Install icon has unexpected dimensions: ${relativePath}`);
  }
}

for (const icon of manifest.icons ?? []) {
  if (icon.src.startsWith("/")) throw new Error(`Manifest icon must be relative: ${icon.src}`);
  const iconPath = icon.src.split(/[?#]/, 1)[0];
  await access(resolve(outputDirectory, iconPath));
  const size = /^(\d+)x(\d+)$/.exec(icon.sizes);
  if (!size) throw new Error(`Manifest icon must declare one exact size: ${icon.src}`);
  await verifyPngDimensions(iconPath, Number(size[1]), Number(size[2]));
  if (!serviceWorker.includes(icon.src)) {
    throw new Error(`Manifest icon is missing from the offline shell: ${icon.src}`);
  }
}

if ((manifest.icons ?? []).length < 2) {
  throw new Error("The web app manifest must provide install icons.");
}

await verifyPngDimensions("icons/apple-touch-icon.png", 180, 180);

console.log("Verified Learning Hub GitHub Pages output.");
