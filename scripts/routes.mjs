/**
 * scripts/routes.mjs
 * Single source of truth for every public URL on kensleyaesthetics.com.
 * Used by:  scripts/generate-sitemap.mjs   (prebuild)
 *           scripts/prerender.mjs          (postbuild)
 *
 * Merges three sources so nothing is orphaned again:
 *   1. Sanity (mainTreatment, subTreatment, treatment, blogPost) - with _updatedAt for <lastmod>
 *   2. src/data/subTreatments.js  (STATIC_SUB_TREATMENTS fallback content)
 *   3. src/data/treatments.js     (signature programmes)
 */
import fs from 'node:fs';
import { createClient } from '@sanity/client';

export const SITE_URL = 'https://kensleyaesthetics.com';

const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

/* Main-treatment slugs - keep in sync with Treatments.js / Footer */
export const MAIN_TREATMENT_SLUGS = [
  'anti-wrinkle-treatments', 'dermal-fillers', 'skin-boosters', 'regenerative-treatments',
  'biostimulators', 'microneedling', 'rf-microneedling', 'hifu',
  'chemical-peel', '3d-hydro2-facial', 'mesotherapy', 'led-light-therapy',
  'profhilo', 'prp', 'polynucleotides', 'medical-grade-skincare',
];

/* Static routes. `sitemap:false` = prerender but keep out of the sitemap. */
export const STATIC_ROUTES = [
  { path: '/',               priority: 1.0, changefreq: 'weekly'  },
  { path: '/treatments',     priority: 0.9, changefreq: 'weekly'  },
  { path: '/prices',         priority: 0.8, changefreq: 'monthly' },
  { path: '/about',          priority: 0.8, changefreq: 'monthly' },
  { path: '/gallery',        priority: 0.7, changefreq: 'monthly' },
  { path: '/skin-concerns',  priority: 0.7, changefreq: 'monthly' },
  { path: '/testimonials',   priority: 0.6, changefreq: 'monthly' },
  { path: '/faq',            priority: 0.6, changefreq: 'monthly' },
  { path: '/blog',           priority: 0.8, changefreq: 'weekly'  },
  { path: '/training',       priority: 0.5, changefreq: 'monthly' },
  { path: '/privacy-policy', priority: 0.2, changefreq: 'yearly'  },
  { path: '/terms',          priority: 0.2, changefreq: 'yearly'  },
  { path: '/book',           sitemap: false },
  { path: '/treatment-plan', sitemap: false },
  { path: '/404',            sitemap: false },
];

/* Price-variant / duplicate sub-treatment slugs (audit §1.10). Once you have
 * consolidated them into one page with a price table, list the patterns here:
 * they are still prerendered (old links keep working) but are dropped from the
 * sitemap. Also render <SeoHead noindex> for them in SubTreatmentDetail.
 * Examples - uncomment when ready:
 *   /-(one|two|three)-areas?$/, /-\d-sessions$/, /^\d+-minute/, /^course-/,
 *   /^standard-face-neck$/, /^face-hands-neck-decolletage$/
 */
export const NOINDEX_SUB_PATTERNS = [];

const isNoindexSub = slug => NOINDEX_SUB_PATTERNS.some(re => re.test(slug));

/* Parse the static fallback data without importing CRA modules */
function parseStaticSubTreatments(file = 'src/data/subTreatments.js') {
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, 'utf8');
  const re  = /'?([a-z0-9-]+)'?\s*:\s*\[|slug:\s*'([^']+)'/g;
  const out = [];
  let parent = null, m;
  while ((m = re.exec(src))) {
    if (m[1]) { if (MAIN_TREATMENT_SLUGS.includes(m[1])) parent = m[1]; }
    else if (m[2] && parent) out.push({ parent, slug: m[2] });
  }
  return out;
}

function parseStaticProgrammes(file = 'src/data/treatments.js') {
  if (!fs.existsSync(file)) return [];
  const src = fs.readFileSync(file, 'utf8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);
}

/* Main */
export async function getAllRoutes() {
  const [mains, subs, programmes, posts] = await Promise.all([
    client.fetch(`*[_type == "mainTreatment" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`),
    client.fetch(`*[_type == "subTreatment" && defined(slug.current)]{ "slug": slug.current, "parent": parentTreatment->slug.current, _updatedAt }`),
    client.fetch(`*[_type == "treatment" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`),
    client.fetch(`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current, _updatedAt, publishedAt }`),
  ]).catch(err => {
    console.warn('Sanity fetch failed, falling back to static data only:', err.message);
    return [[], [], [], []];
  });

  const routes = new Map();
  const add = (path, meta = {}) => {
    const key = path.replace(/\/+$/, '') || '/';
    if (!routes.has(key)) routes.set(key, { path: key, priority: 0.5, changefreq: 'monthly', sitemap: true, ...meta });
  };

  STATIC_ROUTES.forEach(r => add(r.path, r));

  // Main treatment pages
  for (const slug of new Set([...MAIN_TREATMENT_SLUGS, ...mains.map(m => m.slug)])) {
    const s = mains.find(m => m.slug === slug);
    add(`/main-treatments/${slug}`, { priority: 0.9, changefreq: 'monthly', lastmod: s?._updatedAt });
  }

  // Sub-treatment pages (Sanity first, then static fallback)
  for (const s of subs) if (s.parent && s.slug) add(`/main-treatments/${s.parent}/${s.slug}`, { priority: 0.7, lastmod: s._updatedAt, sitemap: !isNoindexSub(s.slug) });
  for (const s of parseStaticSubTreatments()) add(`/main-treatments/${s.parent}/${s.slug}`, { priority: 0.7, sitemap: !isNoindexSub(s.slug) });

  // Signature programmes
  for (const slug of new Set([...programmes.map(p => p.slug), ...parseStaticProgrammes()])) {
    const s = programmes.find(p => p.slug === slug);
    add(`/treatments/${slug}`, { priority: 0.8, lastmod: s?._updatedAt });
  }

  // Blog posts - slugs come straight from Sanity, so they are always the real (lower-case) ones
  for (const p of posts) add(`/blog/${p.slug}`, { priority: 0.7, changefreq: 'monthly', lastmod: p._updatedAt || p.publishedAt });

  const all = [...routes.values()];
  return {
    all,
    sitemap: all.filter(r => r.sitemap !== false),
  };
}

/* Allow `node scripts/routes.mjs` for a quick listing */
if (process.argv[1] && process.argv[1].endsWith('routes.mjs')) {
  const { all, sitemap } = await getAllRoutes();
  console.log(all.map(r => r.path).join('\n'));
  console.log(`\n${all.length} routes (${sitemap.length} in sitemap)`);
}
