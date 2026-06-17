import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../../');
const IMGS = path.join(ROOT, 'src/data/images');

const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skECACuhN7I6sfL9RkYv7W2lanykaSiNMhfDFGnT9bu1m2eMifzzhobTVILcxWA3pUTxJ22qfLc2AVEicgzMXF0bh8is2oCzx0e14oPczyNW8TRexoAYBDNk0AH0roku8024CayM9UCSnD296tSV0ai0TOEOAFYSVjAEcljplwn9V4URycOJ'
});

// Upload a local file to Sanity and return the asset reference
async function uploadImage(filePath, filename) {
  const stream = createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

const entries = [
  {
    _id: 'beforeAfter-01',
    before: path.join(IMGS, 'sub-treatments', 'smooth-lines', 'review_one.jpg'),
    after:  path.join(IMGS, 'sub-treatments', 'smooth-lines', 'forehead-lines.png'),
  },
  {
    _id: 'beforeAfter-02',
    before: path.join(IMGS, 'sub-treatments', 'smooth-lines', 'review_two.webp'),
    after:  path.join(IMGS, 'sub-treatments', 'face-sculpt', 'lip-fillers.png'),
  },
  {
    _id: 'beforeAfter-03',
    before: path.join(IMGS, 'sub-treatments', 'smooth-lines', 'review_three.jpg'),
    after:  path.join(IMGS, 'sub-treatments', 'face-sculpt', 'cheek-fillers.png'),
  },
  {
    _id: 'beforeAfter-04',
    before: path.join(IMGS, 'sub-treatments', 'smooth-lines', 'review_four.jpg'),
    after:  path.join(IMGS, 'sub-treatments', 'skin-glow', 'profhilo.png'),
  },
  {
    _id: 'beforeAfter-05',
    before: path.join(IMGS, 'two.png'),
    after:  path.join(IMGS, 'sub-treatments', 'skin-glow', 'prp-facial.png'),
  },
  {
    _id: 'beforeAfter-06',
    before: path.join(IMGS, 'three.png'),
    after:  path.join(IMGS, 'sub-treatments', 'skin-glow', 'polynucleotides.png'),
  },
  {
    _id: 'beforeAfter-07',
    before: path.join(IMGS, 'five.png'),
    after:  path.join(IMGS, 'sub-treatments', 'skin-glow', 'skin-boosters.png'),
  },
  {
    _id: 'beforeAfter-08',
    before: path.join(IMGS, 'about', 'three.png'),
    after:  path.join(IMGS, 'sub-treatments', 'face-sculpt', 'jawline-filler.png'),
  },
  {
    _id: 'beforeAfter-09',
    before: path.join(IMGS, 'about', 'seven.png'),
    after:  path.join(IMGS, 'service_img_two.png'),
  },
];

for (const entry of entries) {
  console.log(`\nProcessing ${entry._id}…`);

  const beforeRef = await uploadImage(entry.before, path.basename(entry.before));
  console.log(`  ✓ before uploaded → ${beforeRef.asset._ref}`);

  const afterRef = await uploadImage(entry.after, path.basename(entry.after));
  console.log(`  ✓ after  uploaded → ${afterRef.asset._ref}`);

  await client.patch(entry._id)
    .set({ beforeImage: beforeRef, afterImage: afterRef })
    .commit();

  console.log(`  ✓ ${entry._id} patched`);
}

console.log('\nAll done — images uploaded and documents updated.');
