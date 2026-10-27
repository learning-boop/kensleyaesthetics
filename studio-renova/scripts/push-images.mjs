import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const BASE = 'D:/creative_touch/renova'

function mimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg'
  if (ext === '.webp') return 'image/webp'
  return 'image/png'
}

async function upload(filePath) {
  console.log(`  Uploading ${path.basename(filePath)}...`)
  const buffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(filePath),
    contentType: mimeType(filePath),
  })
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
}

async function run() {
  // ── 1. Main treatment images (public/assets/) ──────────────────────────────
  console.log('\n📸 Uploading main treatment images...')
  const mainImages = [
    { id: 'treatment-smooth-lines',     file: `${BASE}/public/assets/smooth_lines.png` },
    { id: 'treatment-face-sculpt',      file: `${BASE}/public/assets/face_sculpt.png` },
    { id: 'treatment-skin-glow',        file: `${BASE}/public/assets/skin_glow.png` },
    { id: 'treatment-collagen-restore', file: `${BASE}/public/assets/collagen_restore.png` },
    { id: 'treatment-clear-skin',       file: `${BASE}/public/assets/clear_skin.png` },
    { id: 'treatment-neck-renewal',     file: `${BASE}/public/assets/neck_renewal.png` },
    { id: 'treatment-full-face-refresh',file: `${BASE}/public/assets/full_face_refresh.png` },
    { id: 'treatment-stay-youthful',    file: `${BASE}/public/assets/stay_youthful.png` },
  ]
  for (const { id, file } of mainImages) {
    const ref = await upload(file)
    await client.patch(id).set({ image: ref }).commit()
    console.log(`  ✅ ${id}`)
  }

  // ── 2. Secondary image for smooth-lines ───────────────────────────────────
  console.log('\n📸 Uploading secondary image (smooth-lines)...')
  const slSecond = await upload(`${BASE}/src/data/images/treatment/smoothlines_one.png`)
  await client.patch('treatment-smooth-lines').set({ image_second: slSecond }).commit()
  console.log('  ✅ treatment-smooth-lines image_second')

  // ── 3. Review images for smooth-lines ─────────────────────────────────────
  console.log('\n📸 Uploading review images (smooth-lines)...')
  const reviewFiles = [
    { key: 'review-one',   file: `${BASE}/src/data/images/sub-treatments/smooth-lines/review_one.jpg` },
    { key: 'review-two',   file: `${BASE}/src/data/images/sub-treatments/smooth-lines/review_two.webp` },
    { key: 'review-three', file: `${BASE}/src/data/images/sub-treatments/smooth-lines/review_three.jpg` },
    { key: 'review-four',  file: `${BASE}/src/data/images/sub-treatments/smooth-lines/review_four.jpg` },
  ]
  const reviews = []
  for (const { key, file } of reviewFiles) {
    const ref = await upload(file)
    reviews.push({ ...ref, _key: key })
  }
  await client.patch('treatment-smooth-lines').set({ reviews }).commit()
  console.log('  ✅ treatment-smooth-lines reviews')

  // ── 4. Sub-treatment images: smooth-lines ─────────────────────────────────
  console.log('\n📸 Uploading sub-treatment images (smooth-lines)...')
  const smoothLinesSubs = [
    { key: 'st-sl-1',  file: 'forehead-lines.png' },
    { key: 'st-sl-2',  file: 'frown-lines.png' },
    { key: 'st-sl-3',  file: 'crows-feet.png' },
    { key: 'st-sl-4',  file: 'bunny-lines.png' },
    { key: 'st-sl-5',  file: 'gummy-smile.png' },
    { key: 'st-sl-6',  file: 'lip-flip.png' },
    { key: 'st-sl-7',  file: 'pebble-chin.png' },
    { key: 'st-sl-8',  file: 'brow-lift.png' },
    { key: 'st-sl-9',  file: 'masseter-botox.png' },
    { key: 'st-sl-10', file: 'traptox.png' },
    { key: 'st-sl-11', file: 'migraine-botox.png' },
    { key: 'st-sl-12', file: 'hyperhidrosis.png' },
  ]
  const slDoc = await client.getDocument('treatment-smooth-lines')
  for (const { key, file } of smoothLinesSubs) {
    const ref = await upload(`${BASE}/src/data/images/sub-treatments/smooth-lines/${file}`)
    const idx = slDoc.subTreatments.findIndex(st => st._key === key)
    if (idx !== -1) slDoc.subTreatments[idx] = { ...slDoc.subTreatments[idx], image: ref }
  }
  await client.patch('treatment-smooth-lines').set({ subTreatments: slDoc.subTreatments }).commit()
  console.log('  ✅ treatment-smooth-lines sub-treatments')

  // ── 5. Sub-treatment images: face-sculpt ──────────────────────────────────
  console.log('\n📸 Uploading sub-treatment images (face-sculpt)...')
  const faceSculptSubs = [
    { key: 'st-fs-1',  file: 'dermal-fillers.png' },
    { key: 'st-fs-2',  file: 'cheek-fillers.png' },
    { key: 'st-fs-3',  file: 'jawline-filler.png' },
    { key: 'st-fs-4',  file: 'chin-filler.png' },
    { key: 'st-fs-5',  file: 'lip-fillers.png' },
    { key: 'st-fs-6',  file: 'tear-trough-filler.png' },
    { key: 'st-fs-7',  file: 'non-surgical-nose.png' },
    { key: 'st-fs-8',  file: 'temple-filler.png' },
    { key: 'st-fs-9',  file: 'nasolabial-filler.png' },
    { key: 'st-fs-10', file: 'marionette-filler.png' },
    { key: 'st-fs-11', file: 'vertical-lip-lines.png' },
    { key: 'st-fs-12', file: 'filler-dissolving.png' },
    { key: 'st-fs-13', file: 'facial-balancing.png' },
  ]
  const fsDoc = await client.getDocument('treatment-face-sculpt')
  for (const { key, file } of faceSculptSubs) {
    const ref = await upload(`${BASE}/src/data/images/sub-treatments/face-sculpt/${file}`)
    const idx = fsDoc.subTreatments.findIndex(st => st._key === key)
    if (idx !== -1) fsDoc.subTreatments[idx] = { ...fsDoc.subTreatments[idx], image: ref }
  }
  await client.patch('treatment-face-sculpt').set({ subTreatments: fsDoc.subTreatments }).commit()
  console.log('  ✅ treatment-face-sculpt sub-treatments')

  // ── 6. Sub-treatment images: skin-glow ────────────────────────────────────
  console.log('\n📸 Uploading sub-treatment images (skin-glow)...')
  const skinGlowSubs = [
    { key: 'st-sg-1', file: 'skin-boosters.png' },
    { key: 'st-sg-2', file: 'profhilo.png' },
    { key: 'st-sg-3', file: 'polynucleotides.png' },
    { key: 'st-sg-4', file: 'mesotherapy.png' },
    { key: 'st-sg-5', file: 'prp-facial.png' },
    { key: 'st-sg-6', file: 'hydro2-facial.png' },
  ]
  const sgDoc = await client.getDocument('treatment-skin-glow')
  for (const { key, file } of skinGlowSubs) {
    const ref = await upload(`${BASE}/src/data/images/sub-treatments/skin-glow/${file}`)
    const idx = sgDoc.subTreatments.findIndex(st => st._key === key)
    if (idx !== -1) sgDoc.subTreatments[idx] = { ...sgDoc.subTreatments[idx], image: ref }
  }
  await client.patch('treatment-skin-glow').set({ subTreatments: sgDoc.subTreatments }).commit()
  console.log('  ✅ treatment-skin-glow sub-treatments')

  console.log('\n🎉 All images uploaded and linked successfully!')
}

run().catch(err => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
