/**
 * Upload real treatment photos to Sanity and patch mainTreatment documents.
 * Run: node scripts/upload-treatment-images.js
 */
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

const IMAGES_DIR = path.join(__dirname, '..', 'kensley-website-ready', 'images');

// Mapping: mainTreatment document _id → new image filename (desktop version)
const TREATMENT_IMAGE_MAP = [
  {
    docId: 'mainTreatment-anti-wrinkle-treatments',
    label: 'Wrinkle Consultations',
    file: 'wrinkle-consultations-treatment-kensley-aesthetics.webp',
  },
  {
    docId: 'mainTreatment-skin-boosters',
    label: 'Skin Boosters',
    file: 'skin-boosters-rejuran-kensley-aesthetics-newcastle.webp',
  },
  {
    docId: 'mainTreatment-regenerative-treatments',
    label: 'Regenerative Treatments',
    file: 'polynucleotides-rejuran-kensley-aesthetics-newcastle.webp',
  },
  {
    docId: 'mainTreatment-rf-microneedling',
    label: 'RF Microneedling',
    file: 'rf-microneedling-kensley-aesthetics-newcastle.webp',
  },
  {
    docId: 'mainTreatment-hifu',
    label: 'HIFU',
    file: 'hifu-treatment-room-kensley-aesthetics-newcastle.webp',
  },
  {
    docId: 'main-treatment-medical-grade-skincare',
    label: 'Medical-Grade Skincare',
    file: 'medical-grade-skincare-zo-skin-health-kensley-aesthetics.webp',
  },
  {
    docId: 'main-treatment-polynucleotides',
    label: 'Polynucleotides',
    file: 'polynucleotides-rejuran-kensley-aesthetics-newcastle.webp',
  },
];

async function uploadAndPatch({ docId, label, file }) {
  const filePath = path.join(IMAGES_DIR, file);

  if (!fs.existsSync(filePath)) {
    console.error(`  SKIP "${label}" — file not found: ${file}`);
    return;
  }

  console.log(`  Uploading "${file}" for "${label}"...`);
  const imageAsset = await client.assets.upload('image', fs.createReadStream(filePath), {
    filename: file,
    contentType: 'image/webp',
  });

  console.log(`  Patching ${docId} → asset ${imageAsset._id}`);
  await client
    .patch(docId)
    .set({
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: imageAsset._id },
      },
    })
    .commit();

  console.log(`  Done: ${label}`);
}

async function main() {
  console.log('Uploading treatment images to Sanity...\n');

  for (const item of TREATMENT_IMAGE_MAP) {
    try {
      await uploadAndPatch(item);
    } catch (err) {
      console.error(`  ERROR on "${item.label}":`, err.message);
    }
  }

  console.log('\nAll done.');
}

main();
