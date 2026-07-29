/**
 * Pushes all sub-treatment documents + images to Sanity.
 * Run from project root: node studio-renova/scripts/push-sub-treatments.mjs
 */

import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname    = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '../..');

const TOKEN = 'skECACuhN7I6sfL9RkYv7W2lanykaSiNMhfDFGnT9bu1m2eMifzzhobTVILcxWA3pUTxJ22qfLc2AVEicgzMXF0bh8is2oCzx0e14oPczyNW8TRexoAYBDNk0AH0roku8024CayM9UCSnD296tSV0ai0TOEOAFYSVjAEcljplwn9V4URycOJ';

const client = createClient({
  projectId:  'puzajrus',
  dataset:    'production',
  apiVersion: '2024-01-01',
  useCdn:     false,
  token:      TOKEN,
});

// Maps static data group keys -> Sanity mainTreatment _id
const PARENT_ID_MAP = {
  'anti-wrinkle-treatments': 'mainTreatment-anti-wrinkle-treatments',
  'dermal-fillers':          'mainTreatment-dermal-fillers',
  'skin-boosters':           'mainTreatment-skin-boosters',
  'regenerative-treatments': 'mainTreatment-regenerative-treatments',
  'biostimulators':          'mainTreatment-biostimulators',
  'microneedling':           'mainTreatment-microneedling',
  'rf-microneedling':        'mainTreatment-rf-microneedling',
  'hifu':                    'mainTreatment-hifu',
  'chemical-peel':           'main-treatment-chemical-peel',
  '3d-hydro2-facial':        'main-treatment-hydro2-facial',
  'mesotherapy':             'main-treatment-mesotherapy',
  'led-light-therapy':       'main-treatment-led-light-therapy',
  'profhilo':                'main-treatment-profhilo',
  'prp':                     'main-treatment-prp',
  'polynucleotides':         'main-treatment-polynucleotides',
  'medical-grade-skincare':  'main-treatment-medical-grade-skincare',
};

// Upload a WebP image to Sanity, return image field object or null
async function uploadImage(heroImageUrl) {
  if (!heroImageUrl) return null;

  // heroImageUrl is like /assets/kensley-treatment-images/01-.../slug/file.webp
  const filePath = path.join(PROJECT_ROOT, 'public', heroImageUrl);

  if (!fs.existsSync(filePath)) {
    console.warn(`    WARNING: File not found: ${filePath}`);
    return null;
  }

  const asset = await client.assets.upload(
    'image',
    fs.createReadStream(filePath),
    { filename: path.basename(filePath), contentType: 'image/webp' }
  );

  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

// Strip null/undefined fields from an object (shallow)
function clean(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== null && v !== undefined)
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

const { STATIC_SUB_TREATMENTS } = await import('../../src/data/subTreatments.js');

let created = 0;
let failed  = 0;

for (const [groupKey, items] of Object.entries(STATIC_SUB_TREATMENTS)) {
  const parentId = PARENT_ID_MAP[groupKey];
  if (!parentId) {
    console.warn(`\nWARNING: No parent mapping for group "${groupKey}" — skipping`);
    continue;
  }

  console.log(`\n-- ${groupKey} (${items.length} sub-treatments) --`);

  for (let i = 0; i < items.length; i++) {
    const item  = items[i];
    const docId = `sub-treatment-${groupKey}-${item.slug}`;

    try {
      // Upload hero image if present
      let imageField = null;
      if (item.heroImage) {
        process.stdout.write(`  [${i + 1}/${items.length}] ${item.slug} — uploading image...`);
        imageField = await uploadImage(item.heroImage);
        process.stdout.write(imageField ? ' done\n' : ' skipped\n');
      } else {
        console.log(`  [${i + 1}/${items.length}] ${item.slug} — no image`);
      }

      // Build FAQs array with required _key
      const faqs = (item.faqs || []).map((faq, fi) => ({
        _key: `faq-${fi + 1}`,
        q:    faq.q,
        a:    faq.a,
      }));

      // Compose document — map static field names to Sanity schema field names
      const doc = clean({
        _id:   docId,
        _type: 'subTreatment',

        // Identity
        label:           item.name,
        slug:            { _type: 'slug', current: item.slug },
        parentTreatment: { _type: 'reference', _ref: parentId },
        group:           item.title           || null,
        num:             i + 1,

        // Content
        tagline:      item.tagline      || null,
        description:  item.description  || null,
        whatItTreats: item.whatItHelps  || null,  // static uses whatItHelps
        howItWorks:   item.howItWorks   || null,
        whatToExpect: item.whatToExpect || null,
        ideal:        item.ideal        || null,
        benefits:     (item.benefits || []).length ? item.benefits : null,

        // Extended content
        introduction:        item.introduction        || null,
        anaesthetic:         item.anaesthetic         || null,
        longevity:           item.longevity           || null,
        whatItHelps:         item.whatItHelps         || null,
        preparation:         item.preparation         || null,
        durationAndSessions: item.durationAndSessions || null,
        resultsAndTimeline:  item.resultsAndTimeline  || null,
        recoveryAndDowntime: item.recoveryAndDowntime || null,
        aftercare:           item.aftercare           || null,
        suitability:         item.suitability         || null,
        sideEffectsAndRisks: item.sideEffectsAndRisks || null,
        whyKensley:          item.whyKensley          || null,

        // Treatment details
        duration:        item.duration        || null,
        downtime:        item.downtime        || null,
        resultsTimeline: item.resultsTimeline || null,
        numSessions:     item.numSessions     || null,

        // Pricing
        priceStandard: item.priceStandard || null,
        priceIntro:    item.priceIntro    || null,

        // Media
        ...(imageField ? { image: imageField } : {}),

        // FAQs
        ...(faqs.length ? { faqs } : {}),

        // SEO
        seoTitle:       item.seoTitle       || null,
        seoDescription: item.seoDescription || null,
      });

      await client.createOrReplace(doc);
      console.log(`  OK: ${item.slug}`);
      created++;
    } catch (err) {
      console.error(`  FAILED: ${item.slug}: ${err.message}`);
      failed++;
    }
  }
}

console.log(`\n${'─'.repeat(50)}`);
console.log(`Done — ${created} documents pushed, ${failed} failed.`);
