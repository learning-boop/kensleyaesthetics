#!/usr/bin/env node
/**
 * Push the Dermal Fillers content (src/data/dermalFillersContent.js) to Sanity.
 *
 *   Dry run (default — changes nothing, writes the planned changes to
 *   scripts/out/dermal-fillers-mutations.json and prints a summary):
 *     node scripts/push-dermal-fillers.mjs
 *
 *   Apply (writes the PUBLISHED documents in production):
 *     macOS/Linux:  SANITY_TOKEN=sk... node scripts/push-dermal-fillers.mjs --apply
 *     PowerShell:   $env:SANITY_TOKEN="sk..."; node scripts/push-dermal-fillers.mjs --apply
 *   Token: https://www.sanity.io/manage/project/puzajrus/api#tokens (Editor role)
 *
 * What it does (one transaction):
 *   • mainTreatment-dermal-fillers — sets the new page content, lists the 10
 *     treatments in order (subTreatments), removes old fields (benefits, ideal…)
 *   • the 9 existing sub-treatments — new slug/label/content, keeps their image,
 *     removes every old content field (at-a-glance values, prices, old copy…)
 *   • Facial Balancing — created (no image; add one in Studio later)
 *   • the 4 hidden sub-treatments (Upper Lip Lines, Tear Trough + PRP,
 *     Non-Surgical Facelift, Dissolving Filler) are NOT touched
 * Safe to re-run: it always sets the same values.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const PROJECT_ID = 'puzajrus';
const DATASET = 'production';
const API_VERSION = 'v2024-01-01';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APPLY = process.argv.includes('--apply');

/* Load the content file as ESM whatever the Node version / package type. */
async function loadContent() {
  const src = fs.readFileSync(path.join(ROOT, 'src/data/dermalFillersContent.js'), 'utf8');
  const tmp = path.join(os.tmpdir(), `dermalFillersContent-${process.pid}-${Date.now()}.mjs`);
  fs.writeFileSync(tmp, src);
  try {
    return await import(pathToFileURL(tmp).href);
  } finally {
    fs.rmSync(tmp, { force: true });
  }
}

/* Old fields removed from the Dermal Fillers documents (Nov 2026: "only the new document's content"). */
const OLD_MAIN_FIELDS = ['benefits', 'ideal', 'image_second', 'reviews', 'prices'];
const OLD_SUB_FIELDS = [
  'group', 'whatItTreats', 'howItWorks', 'whatToExpect', 'ideal', 'benefits',
  'duration', 'downtime', 'resultsTimeline', 'numSessions', 'anaesthetic', 'longevity',
  'priceStandard', 'priceIntro', 'image_second', 'reviews',
  'introduction', 'whatItHelps', 'preparation', 'durationAndSessions', 'resultsAndTimeline',
  'recoveryAndDowntime', 'aftercare', 'suitability', 'sideEffectsAndRisks', 'whyKensley',
];

const sections = (list = [], prefix) =>
  list.map((s, i) => ({
    _type: 'pageSection',
    _key: `${prefix}-${i + 1}`,
    heading: s.heading,
    body: s.body,
    ...(s.linkLabel ? { linkLabel: s.linkLabel } : {}),
    ...(s.linkUrl ? { linkUrl: s.linkUrl } : {}),
  }));

const faqs = (list = []) =>
  list.map((f, i) => ({ _type: 'faq', _key: `faq-${i + 1}`, q: f.q, a: f.a }));

/* Split a field map into Sanity `set` (values) and `unset` (empty values). */
function setUnset(fields) {
  const set = {};
  const unset = [];
  for (const [k, v] of Object.entries(fields)) {
    if (v === null || v === undefined || v === '') unset.push(k);
    else set[k] = v;
  }
  return { set, unset };
}

function buildMutations(c) {
  const subs = c.DERMAL_FILLERS_SUBS;
  const idBySlug = Object.fromEntries(subs.map((s) => [s.slug, s._id]));
  const parentRef = { _type: 'reference', _ref: c.DERMAL_FILLERS_MAIN_ID };
  const mutations = [];
  const summary = [];

  for (const s of subs) {
    // Creates Facial Balancing; a no-op for the nine that already exist.
    mutations.push({
      createIfNotExists: {
        _id: s._id,
        _type: 'subTreatment',
        label: s.label,
        slug: { _type: 'slug', current: s.slug },
        parentTreatment: parentRef,
        num: s.num,
      },
    });

    const { set, unset } = setUnset({
      label: s.label,
      slug: { _type: 'slug', current: s.slug },
      parentTreatment: parentRef,
      num: s.num,
      seoTitle: s.seoTitle,
      seoDescription: s.seoDescription,
      heroTitle: s.heroTitle,
      tagline: s.tagline,
      description: s.description,
      heroCtaLabel: s.heroCtaLabel,
      cardTitle: s.cardTitle,
      cardBody: s.cardBody,
      cardLinkLabel: s.cardLinkLabel,
      pageSections: sections(s.pageSections, 'section'),
      faqHeading: s.faqHeading,
      faqs: faqs(s.faqs),
      ctaHeading: s.ctaHeading,
      ctaBody: s.ctaBody,
      ctaLabel: s.ctaLabel,
      backLinkLabel: s.backLinkLabel,
      relatedTreatments: (s.related || []).length
        ? s.related.map((r) => ({ _type: 'reference', _ref: idBySlug[r], _key: `rel-${r}` }))
        : null,
    });
    mutations.push({ patch: { id: s._id, set, unset: [...unset, ...OLD_SUB_FIELDS] } });
    summary.push({
      id: s._id,
      page: `/main-treatments/${c.DERMAL_FILLERS_SLUG}/${s.slug}`,
      action: s.oldSlug === undefined || s._id.endsWith('facial-balancing') ? 'create + set' : 'update',
      slug: s.oldSlug && s.oldSlug !== s.slug ? `${s.oldSlug} → ${s.slug}` : s.slug,
      image: s.image ? 'kept' : 'none (add in Studio)',
      sections: s.pageSections.length,
      faqs: s.faqs.length,
      related: (s.related || []).join(', ') || '—',
    });
  }

  const m = c.DERMAL_FILLERS_MAIN;
  const main = setUnset({
    seoTitle: m.seoTitle,
    seoDescription: m.seoDescription,
    heroTitle: m.heroTitle,
    tagline: m.tagline,
    description: m.description,
    heroCtaLabel: m.heroCtaLabel,
    introSections: sections(m.introSections, 'intro'),
    treatmentsHeading: m.treatmentsHeading,
    treatmentsIntro: m.treatmentsIntro,
    pageSections: sections(m.pageSections, 'section'),
    faqHeading: m.faqHeading,
    faqs: faqs(m.faqs),
    ctaHeading: m.ctaHeading,
    ctaBody: m.ctaBody,
    ctaAddress: m.ctaAddress,
    ctaPhone: m.ctaPhone,
    ctaLabel: m.ctaLabel,
    subTreatments: subs.map((s) => ({ _type: 'reference', _ref: s._id, _key: `sub-${s.slug}` })),
  });
  mutations.push({ patch: { id: c.DERMAL_FILLERS_MAIN_ID, set: main.set, unset: [...main.unset, ...OLD_MAIN_FIELDS] } });
  summary.push({
    id: c.DERMAL_FILLERS_MAIN_ID,
    page: `/main-treatments/${c.DERMAL_FILLERS_SLUG}`,
    action: 'update',
    slug: c.DERMAL_FILLERS_SLUG,
    image: 'kept',
    sections: m.introSections.length + m.pageSections.length,
    faqs: m.faqs.length,
    related: `${subs.length} treatments listed`,
  });

  return { mutations, summary };
}

const content = await loadContent();
const { mutations, summary } = buildMutations(content);

const outDir = path.join(ROOT, 'scripts/out');
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, 'dermal-fillers-mutations.json');
fs.writeFileSync(outFile, JSON.stringify({ mutations }, null, 2));

console.table(summary);
console.log(`\n${mutations.length} mutations written to ${path.relative(ROOT, outFile)}`);
console.log('Not touched (hidden):', content.DERMAL_FILLERS_HIDDEN_IDS.join(', '));

if (!APPLY) {
  console.log('\nDry run only — nothing was sent to Sanity. Add --apply to write.');
  process.exit(0);
}

const TOKEN = process.env.SANITY_TOKEN;
if (!TOKEN) {
  console.error('\nERROR: set SANITY_TOKEN (Editor token) to apply.');
  process.exit(1);
}

const base = `https://${PROJECT_ID}.api.sanity.io/${API_VERSION}/data`;
const headers = { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' };

// Warn about unpublished drafts: Studio would show those instead of the new content.
const ids = summary.map((s) => `drafts.${s.id}`);
const draftRes = await fetch(`${base}/query/${DATASET}?query=${encodeURIComponent('*[_id in $ids]._id')}&$ids=${encodeURIComponent(JSON.stringify(ids))}`, { headers });
const drafts = (await draftRes.json()).result || [];
if (drafts.length) {
  console.warn('\nWARNING: these documents have unpublished drafts in Studio (they will hide the new content there):');
  drafts.forEach((d) => console.warn('  -', d));
}

const res = await fetch(`${base}/mutate/${DATASET}?returnIds=true&visibility=sync`, {
  method: 'POST',
  headers,
  body: JSON.stringify({ mutations }),
});
const body = await res.json();
if (!res.ok) {
  console.error('\nSanity rejected the changes:', JSON.stringify(body, null, 2));
  process.exit(1);
}
console.log(`\nDone. Transaction ${body.transactionId}: ${body.results.length} operations applied.`);
console.log('Rebuild and deploy the site so the static pages pick up the new content.');
