/**
 * Convert PNG/JPG images to WebP.
 * Run: node scripts/convert-images.mjs
 *
 * Converts images in:
 *   - src/data/images/ (imported via webpack)
 *   - public/assets/   (served statically)
 *
 * Skips files that already have a .webp sibling.
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const QUALITY = 80;
const DIRS = [
  'src/data/images',
  'public/assets',
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

async function convert() {
  let converted = 0;
  let skipped = 0;

  for (const dir of DIRS) {
    let files;
    try {
      files = await walk(dir);
    } catch {
      console.log(`  Skipping ${dir} (not found)`);
      continue;
    }

    const images = files.filter(f => /\.(png|jpe?g)$/i.test(f));

    for (const file of images) {
      // Skip master PNGs in kensley-treatment-images (already have .webp siblings)
      if (file.includes('-master.png')) {
        skipped++;
        continue;
      }

      const ext = extname(file);
      const webpPath = file.slice(0, -ext.length) + '.webp';

      // Skip if WebP already exists
      try {
        await stat(webpPath);
        skipped++;
        continue;
      } catch { /* doesn't exist, proceed */ }

      try {
        await sharp(file)
          .webp({ quality: QUALITY })
          .toFile(webpPath);
        converted++;
        console.log(`  ✓ ${file} → .webp`);
      } catch (err) {
        console.error(`  ✗ ${file}: ${err.message}`);
      }
    }
  }

  console.log(`\nDone: ${converted} converted, ${skipped} skipped.`);
}

convert();
