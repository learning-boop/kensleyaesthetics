/**
 * Inserts heroImage fields into STATIC_SUB_TREATMENTS entries.
 * Run from project root: node scripts/add-hero-images.js
 */

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../src/data/subTreatments.js');
const IMG_BASE = 'src/data/images/kensley-treatment-images';

// Maps: [group-key, slug] → image sub-path (relative to IMG_BASE)
const IMAGE_MAP = [
  // ── Anti-wrinkle ──────────────────────────────────────────────────────
  ['anti-wrinkle-treatments', 'women-one-area',        '01-anti-wrinkle-treatments/women-one-area/kensley-anti-wrinkle-treatments-women-one-area-01.webp'],
  ['anti-wrinkle-treatments', 'women-two-areas',       '01-anti-wrinkle-treatments/women-two-areas/kensley-anti-wrinkle-treatments-women-two-areas-01.webp'],
  ['anti-wrinkle-treatments', 'women-three-areas',     '01-anti-wrinkle-treatments/women-three-areas/kensley-anti-wrinkle-treatments-women-three-areas-01.webp'],
  ['anti-wrinkle-treatments', 'men-one-area',          '01-anti-wrinkle-treatments/men-one-area/kensley-anti-wrinkle-treatments-men-one-area-01.webp'],
  ['anti-wrinkle-treatments', 'men-two-areas',         '01-anti-wrinkle-treatments/men-two-areas/kensley-anti-wrinkle-treatments-men-two-areas-01.webp'],
  ['anti-wrinkle-treatments', 'men-three-areas',       '01-anti-wrinkle-treatments/men-three-areas/kensley-anti-wrinkle-treatments-men-three-areas-01.webp'],
  ['anti-wrinkle-treatments', 'nefertiti-lift',        '01-anti-wrinkle-treatments/nefertiti-lift/kensley-anti-wrinkle-treatments-nefertiti-lift-01.webp'],
  ['anti-wrinkle-treatments', 'jawline-slimming',      '01-anti-wrinkle-treatments/jawline-slimming/kensley-anti-wrinkle-treatments-jawline-slimming-01.webp'],
  ['anti-wrinkle-treatments', 'teeth-grinding',        '01-anti-wrinkle-treatments/teeth-grinding/kensley-anti-wrinkle-treatments-teeth-grinding-01.webp'],
  ['anti-wrinkle-treatments', 'traptox',               '01-anti-wrinkle-treatments/traptox/kensley-anti-wrinkle-treatments-traptox-01.webp'],
  ['anti-wrinkle-treatments', 'migraine-treatment',    '01-anti-wrinkle-treatments/migraine-treatment/kensley-anti-wrinkle-treatments-migraine-treatment-01.webp'],

  // ── Dermal fillers ────────────────────────────────────────────────────
  ['dermal-fillers', 'lips-1ml',                '02-dermal-fillers/lips-1ml/kensley-dermal-fillers-lips-1ml-01.webp'],
  ['dermal-fillers', 'cheeks',                  '02-dermal-fillers/cheeks/kensley-dermal-fillers-cheeks-01.webp'],
  ['dermal-fillers', 'chin',                    '02-dermal-fillers/chin/kensley-dermal-fillers-chin-01.webp'],
  ['dermal-fillers', 'jawline',                 '02-dermal-fillers/jawline/kensley-dermal-fillers-jawline-01.webp'],
  ['dermal-fillers', 'nasolabial-folds',        '02-dermal-fillers/nasolabial-folds/kensley-dermal-fillers-nasolabial-folds-01.webp'],
  ['dermal-fillers', 'marionette-lines',        '02-dermal-fillers/marionette-lines/kensley-dermal-fillers-marionette-lines-01.webp'],
  ['dermal-fillers', 'upper-lip-lines',         '02-dermal-fillers/upper-lip-lines/kensley-dermal-fillers-upper-lip-lines-01.webp'],
  ['dermal-fillers', 'temples',                 '02-dermal-fillers/temples/kensley-dermal-fillers-temples-01.webp'],
  ['dermal-fillers', 'tear-trough',             '02-dermal-fillers/tear-trough/kensley-dermal-fillers-tear-trough-01.webp'],
  ['dermal-fillers', 'tear-trough-prp',         '02-dermal-fillers/tear-trough-and-prp/kensley-dermal-fillers-tear-trough-and-prp-01.webp'],
  ['dermal-fillers', 'non-surgical-rhinoplasty','02-dermal-fillers/non-surgical-rhinoplasty/kensley-dermal-fillers-non-surgical-rhinoplasty-01.webp'],
  ['dermal-fillers', 'non-surgical-facelift',   '02-dermal-fillers/non-surgical-facelift/kensley-dermal-fillers-non-surgical-facelift-01.webp'],
  ['dermal-fillers', 'dissolving-filler',       '02-dermal-fillers/dissolving-filler/kensley-dermal-fillers-dissolving-filler-01.webp'],

  // ── Skin boosters ─────────────────────────────────────────────────────
  ['skin-boosters', 'profhilo-skin-booster', '03-skin-boosters/profhilo-skin-booster/kensley-skin-boosters-profhilo-skin-booster-01.webp'],
  ['skin-boosters', 'klardie',               '03-skin-boosters/klardie/kensley-skin-boosters-klardie-01.webp'],
  ['skin-boosters', 'neofound',              '03-skin-boosters/neofound/kensley-skin-boosters-neofound-01.webp'],

  // ── Regenerative treatments ───────────────────────────────────────────
  ['regenerative-treatments', 'prp-facials',           '04-regenerative-treatments/prp-skin-rejuvenation/kensley-regenerative-treatments-prp-skin-rejuvenation-01.webp'],
  ['regenerative-treatments', 'plasma-gel-bio-filler', '04-regenerative-treatments/plasma-gel/kensley-regenerative-treatments-plasma-gel-01.webp'],
  ['regenerative-treatments', 'exosomes',              '04-regenerative-treatments/exosome-skin-treatment/kensley-regenerative-treatments-exosome-skin-treatment-01.webp'],
  ['regenerative-treatments', 'polynucleotides',       '04-regenerative-treatments/polynucleotide-skin-rejuvenation/kensley-regenerative-treatments-polynucleotide-skin-rejuvenation-01.webp'],

  // ── Biostimulators ────────────────────────────────────────────────────
  ['biostimulators', 'radiesse', '05-biostimulators/radiesse/kensley-biostimulators-radiesse-01.webp'],

  // ── Microneedling ─────────────────────────────────────────────────────
  ['microneedling', 'standard-face',              '06-microneedling/standard-face/kensley-microneedling-standard-face-01.webp'],
  ['microneedling', 'standard-face-3-sessions',   '06-microneedling/standard-face-3-sessions/kensley-microneedling-standard-face-3-sessions-01.webp'],
  ['microneedling', 'standard-face-neck',         '06-microneedling/standard-face-and-neck/kensley-microneedling-standard-face-and-neck-01.webp'],
  ['microneedling', 'standard-face-neck-3-sessions','06-microneedling/standard-face-and-neck-3-sessions/kensley-microneedling-standard-face-and-neck-3-sessions-01.webp'],
  ['microneedling', 'calecim-face',               '06-microneedling/with-calecim-face/kensley-microneedling-with-calecim-face-01.webp'],
  ['microneedling', 'calecim-face-3-sessions',    '06-microneedling/with-calecim-face-3-sessions/kensley-microneedling-with-calecim-face-3-sessions-01.webp'],
  ['microneedling', 'calecim-face-neck',          '06-microneedling/with-calecim-face-and-neck/kensley-microneedling-with-calecim-face-and-neck-01.webp'],
  ['microneedling', 'calecim-face-neck-3-sessions','06-microneedling/with-calecim-face-and-neck-3-sessions/kensley-microneedling-with-calecim-face-and-neck-3-sessions-01.webp'],
  ['microneedling', 'prp-face',                   '06-microneedling/with-prp-face/kensley-microneedling-with-prp-face-01.webp'],
  ['microneedling', 'prp-face-3-sessions',        '06-microneedling/with-prp-face-3-sessions/kensley-microneedling-with-prp-face-3-sessions-01.webp'],
  ['microneedling', 'prp-face-neck',              '06-microneedling/with-prp-face-and-neck/kensley-microneedling-with-prp-face-and-neck-01.webp'],
  ['microneedling', 'prp-face-neck-3-sessions',   '06-microneedling/with-prp-face-and-neck-3-sessions/kensley-microneedling-with-prp-face-and-neck-3-sessions-01.webp'],
  ['microneedling', 'exosomes-face',              '06-microneedling/with-exosomes-face/kensley-microneedling-with-exosomes-face-01.webp'],
  ['microneedling', 'exosomes-face-3-sessions',   '06-microneedling/with-exosomes-face-3-sessions/kensley-microneedling-with-exosomes-face-3-sessions-01.webp'],
  ['microneedling', 'exosomes-face-neck',         '06-microneedling/with-exosomes-face-and-neck/kensley-microneedling-with-exosomes-face-and-neck-01.webp'],
  ['microneedling', 'exosomes-face-neck-3-sessions','06-microneedling/with-exosomes-face-and-neck-3-sessions/kensley-microneedling-with-exosomes-face-and-neck-3-sessions-01.webp'],

  // ── RF Microneedling ──────────────────────────────────────────────────
  ['rf-microneedling', 'face',           '07-rf-microneedling/face/kensley-rf-microneedling-face-01.webp'],
  ['rf-microneedling', 'neck-decolletage','07-rf-microneedling/neck-and-decolletage/kensley-rf-microneedling-neck-and-decolletage-01.webp'],
  ['rf-microneedling', 'abdomen',        '07-rf-microneedling/abdomen/kensley-rf-microneedling-abdomen-01.webp'],
  ['rf-microneedling', 'above-knees',    '07-rf-microneedling/above-the-knees/kensley-rf-microneedling-above-the-knees-01.webp'],

  // ── HIFU ──────────────────────────────────────────────────────────────
  ['hifu', 'face-neck',       '08-hifu/face-and-neck/kensley-hifu-face-and-neck-01.webp'],
  ['hifu', 'neck',            '08-hifu/neck/kensley-hifu-neck-01.webp'],
  ['hifu', 'body-small-area', '08-hifu/body-small-area/kensley-hifu-body-small-area-01.webp'],
  ['hifu', 'body-large-area', '08-hifu/body-large-area/kensley-hifu-body-large-area-01.webp'],

  // ── Chemical peel ─────────────────────────────────────────────────────
  ['chemical-peel', 'single-chemical-peel',   '09-chemical-peel/single-treatment/kensley-chemical-peel-single-treatment-01.webp'],
  ['chemical-peel', 'course-4-chemical-peels','09-chemical-peel/course-of-four/kensley-chemical-peel-course-of-four-01.webp'],

  // ── Mesotherapy ───────────────────────────────────────────────────────
  ['mesotherapy', 'face-single-session',   '11-mesotherapy/single-session/kensley-mesotherapy-single-session-01.webp'],
  ['mesotherapy', 'face-course-3-sessions','11-mesotherapy/treatment-course/kensley-mesotherapy-treatment-course-01.webp'],

  // ── Profhilo ──────────────────────────────────────────────────────────
  ['profhilo', 'profhilo-face',             '13-profhilo/face/kensley-profhilo-face-01.webp'],
  ['profhilo', 'profhilo-neck',             '13-profhilo/neck/kensley-profhilo-neck-01.webp'],
  ['profhilo', 'profhilo-hands',            '13-profhilo/hands/kensley-profhilo-hands-01.webp'],
  ['profhilo', 'profhilo-decolletage',      '13-profhilo/decolletage/kensley-profhilo-decolletage-01.webp'],
  ['profhilo', 'course-3-treatments',       '13-profhilo/course-of-3-treatments/kensley-profhilo-course-of-3-treatments-01.webp'],
  ['profhilo', 'face-hands-neck-decolletage','13-profhilo/face-hands-neck-and-decolletage/kensley-profhilo-face-hands-neck-and-decolletage-01.webp'],

  // ── PRP ───────────────────────────────────────────────────────────────
  ['prp', 'prp-face',          '14-prp/face/kensley-prp-face-01.webp'],
  ['prp', 'prp-neck',          '14-prp/neck/kensley-prp-neck-01.webp'],
  ['prp', 'prp-hands',         '14-prp/hands/kensley-prp-hands-01.webp'],
  ['prp', 'prp-decolletage',   '14-prp/decolletage/kensley-prp-decolletage-01.webp'],
  ['prp', 'prp-face-neck',     '14-prp/face-and-neck/kensley-prp-face-and-neck-01.webp'],
  ['prp', 'prp-tear-trough',   '14-prp/tear-trough/kensley-prp-tear-trough-01.webp'],
  ['prp', 'prp-microneedling', '14-prp/prp-and-microneedling/kensley-prp-prp-and-microneedling-01.webp'],
  ['prp', 'prp-hair-loss',     '14-prp/hair-loss/kensley-prp-hair-loss-01.webp'],
  ['prp', 'prp-3-session-package','14-prp/3-session-package/kensley-prp-3-session-package-01.webp'],

  // ── Polynucleotides ───────────────────────────────────────────────────
  ['polynucleotides', 'face',                    '15-polynucleotides/face/kensley-polynucleotides-face-01.webp'],
  ['polynucleotides', 'eyes',                    '15-polynucleotides/eyes/kensley-polynucleotides-eyes-01.webp'],
  ['polynucleotides', 'neck',                    '15-polynucleotides/neck/kensley-polynucleotides-neck-01.webp'],
  ['polynucleotides', 'decolletage',             '15-polynucleotides/decolletage/kensley-polynucleotides-decolletage-01.webp'],
  ['polynucleotides', 'course-3-treatments',     '15-polynucleotides/course-of-3-treatments/kensley-polynucleotides-course-of-3-treatments-01.webp'],
  ['polynucleotides', 'face-hands-neck-decolletage','15-polynucleotides/face-hands-neck-and-decolletage/kensley-polynucleotides-face-hands-neck-and-decolletage-01.webp'],

  // ── Medical-grade skincare ────────────────────────────────────────────
  ['medical-grade-skincare', 'obagi-medical',  '16-medical-grade-skincare/obagi-skincare/kensley-medical-grade-skincare-obagi-skincare-01.webp'],
  ['medical-grade-skincare', 'zo-skin-health', '16-medical-grade-skincare/zo-skincare/kensley-medical-grade-skincare-zo-skincare-01.webp'],
];

// ── Parse and patch the file ──────────────────────────────────────────────────

let source = fs.readFileSync(DATA_FILE, 'utf8');

// We work on the source as a flat string. For each entry, we locate the
// group block then, within it, find the object that owns the slug and
// insert heroImage immediately after the slug line (or priceIntro line
// if one exists right after the slug line).

const STATIC_KEY = 'STATIC_SUB_TREATMENTS';

// Split source into lines for easier positional work
const lines = source.split('\n');

let inserted = 0;
let skipped = 0;

for (const [groupKey, slug, imgSubPath] of IMAGE_MAP) {
  const heroImageValue = `${IMG_BASE}/${imgSubPath}`;

  // Find the group start line
  const groupPattern = `'${groupKey}': [`;
  const groupLineIdx = lines.findIndex(l => l.includes(groupPattern));
  if (groupLineIdx === -1) {
    console.warn(`⚠  Group not found: ${groupKey}`);
    skipped++;
    continue;
  }

  // Find the next group start (to bound our search)
  let nextGroupLineIdx = lines.length;
  for (let i = groupLineIdx + 1; i < lines.length; i++) {
    // Look for another top-level group key pattern (2-space indent + quote)
    if (/^  '[a-z]/.test(lines[i]) && lines[i].includes(': [')) {
      nextGroupLineIdx = i;
      break;
    }
  }

  // Within the group, find the slug line
  const slugPattern = `slug: '${slug}'`;
  let slugLineIdx = -1;
  for (let i = groupLineIdx + 1; i < nextGroupLineIdx; i++) {
    if (lines[i].includes(slugPattern)) {
      slugLineIdx = i;
      break;
    }
  }

  if (slugLineIdx === -1) {
    console.warn(`⚠  Slug '${slug}' not found in group '${groupKey}'`);
    skipped++;
    continue;
  }

  // Check if heroImage already added
  if (lines[slugLineIdx + 1] && lines[slugLineIdx + 1].includes('heroImage:')) {
    console.log(`ℹ  Already has heroImage: ${groupKey}/${slug}`);
    continue;
  }
  if (lines[slugLineIdx + 2] && lines[slugLineIdx + 2].includes('heroImage:')) {
    console.log(`ℹ  Already has heroImage: ${groupKey}/${slug}`);
    continue;
  }

  // Determine insert position: after priceIntro line if it follows slug, else after slug line
  let insertAfter = slugLineIdx;
  const nextLine = lines[slugLineIdx + 1] || '';
  if (nextLine.includes('priceStandard:') || nextLine.includes('priceIntro:')) {
    insertAfter = slugLineIdx + 1;
  }

  // Build the heroImage line with same indentation as the slug line
  const indent = lines[slugLineIdx].match(/^(\s+)/)?.[1] ?? '      ';
  const heroLine = `${indent}heroImage: '${heroImageValue}',`;

  lines.splice(insertAfter + 1, 0, heroLine);

  // Because we spliced, nextGroupLineIdx shifts — but we don't need it again
  console.log(`✓  ${groupKey}/${slug}`);
  inserted++;
}

fs.writeFileSync(DATA_FILE, lines.join('\n'), 'utf8');
console.log(`\nDone. ${inserted} heroImage fields inserted, ${skipped} skipped.`);
