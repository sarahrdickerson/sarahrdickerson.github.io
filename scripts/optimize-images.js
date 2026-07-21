#!/usr/bin/env node
// node scripts/optimize-images.js public/photos
/**
 * optimize-images.js
 *
 * Batch-converts PNG/JPEG images to resized WebP, skipping any image
 * that's already been converted (and hasn't changed since). Safe to
 * re-run anytime — only touches new or modified source files.
 *
 * Usage:
 *   node optimize-images.js [sourceDir] [options]
 *
 * Options:
 *   --width=2000        Max width in px (long edge), default 2000
 *   --quality=80         WebP quality 1-100, default 80
 *   --out=<dir>          Output directory (default: same as source)
 *   --delete-original    Delete the original PNG/JPEG after conversion
 *   --dry-run            Show what would happen without writing files
 *
 * Example:
 *   node optimize-images.js ./public/photography --width=2000 --quality=82
 *
 * Setup:
 *   npm install sharp
 */

const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch (err) {
  console.error(
    "\nMissing dependency 'sharp'. Install it first:\n\n  npm install sharp\n",
  );
  process.exit(1);
}

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg"]);

function parseArgs(argv) {
  const args = {
    sourceDir: "public",
    width: 2000,
    quality: 80,
    out: null,
    deleteOriginal: false,
    dryRun: false,
  };
  for (const arg of argv) {
    if (!arg.startsWith("--")) {
      args.sourceDir = arg;
    } else if (arg.startsWith("--width=")) {
      args.width = parseInt(arg.split("=")[1], 10);
    } else if (arg.startsWith("--quality=")) {
      args.quality = parseInt(arg.split("=")[1], 10);
    } else if (arg.startsWith("--out=")) {
      args.out = arg.split("=")[1];
    } else if (arg === "--delete-original") {
      args.deleteOriginal = true;
    } else if (arg === "--dry-run") {
      args.dryRun = true;
    }
  }
  return args;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

function outputPathFor(sourcePath, sourceDir, outDir) {
  const relative = path.relative(sourceDir, sourcePath);
  const relativeWebp = relative.replace(/\.(png|jpe?g)$/i, ".webp");
  return path.join(outDir, relativeWebp);
}

// A file only needs (re)processing if the .webp doesn't exist yet,
// or the source has been modified more recently than the .webp
// (mtime comparison — this is what makes re-runs safe/cheap).
function needsProcessing(sourcePath, outPath) {
  if (!fs.existsSync(outPath)) return true;
  const sourceMtime = fs.statSync(sourcePath).mtimeMs;
  const outMtime = fs.statSync(outPath).mtimeMs;
  return sourceMtime > outMtime;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const sourceDir = path.resolve(args.sourceDir);
  const outDir = args.out ? path.resolve(args.out) : sourceDir;

  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    process.exit(1);
  }

  const allImages = walk(sourceDir);
  if (allImages.length === 0) {
    console.log(`No PNG/JPEG files found under ${sourceDir}`);
    return;
  }

  let converted = 0;
  let skipped = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  console.log(`Scanning ${allImages.length} image(s) in ${sourceDir}\n`);

  for (const sourcePath of allImages) {
    const outPath = outputPathFor(sourcePath, sourceDir, outDir);

    if (!needsProcessing(sourcePath, outPath)) {
      skipped++;
      continue;
    }

    const beforeSize = fs.statSync(sourcePath).size;
    const relLabel = path.relative(process.cwd(), sourcePath);

    if (args.dryRun) {
      console.log(`[dry-run] would convert: ${relLabel}`);
      converted++;
      continue;
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });

    await sharp(sourcePath)
      .rotate() // auto-orient using EXIF data before resizing, then strip it
      .resize({ width: args.width, withoutEnlargement: true })
      .webp({ quality: args.quality })
      .toFile(outPath);

    const afterSize = fs.statSync(outPath).size;
    totalBefore += beforeSize;
    totalAfter += afterSize;
    converted++;

    const savings = (100 - (afterSize / beforeSize) * 100).toFixed(0);
    console.log(
      `converted: ${relLabel} (${formatBytes(beforeSize)} -> ${formatBytes(afterSize)}, -${savings}%)`,
    );

    if (args.deleteOriginal) {
      fs.unlinkSync(sourcePath);
    }
  }

  console.log(`\nDone. ${converted} converted, ${skipped} already up to date.`);
  if (totalBefore > 0) {
    const overallSavings = (100 - (totalAfter / totalBefore) * 100).toFixed(0);
    console.log(
      `Total: ${formatBytes(totalBefore)} -> ${formatBytes(totalAfter)} (-${overallSavings}%)`,
    );
  }
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
