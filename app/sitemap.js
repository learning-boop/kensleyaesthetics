import { LOCATIONS } from '@/src/data/locations';
import { STATIC_MAIN_TREATMENTS } from '@/src/data/mainTreatments';
import { client } from '@/src/lib/sanityClient';
import { getSubPageParams } from '@/src/lib/subPages';
import { isWinterEditLive } from '@/src/data/winterEdit';

const SITE_URL = 'https://kensleyaesthetics.com';

// Fallbacks, used only if Sanity can't be reached at build time.
// The live lists come from Sanity below, using the same queries as the
// pages' generateStaticParams, so the sitemap never lists a page that
// wasn't built (e.g. removed treatment plans).
const FALLBACK_TREATMENT_SLUGS = [
  'clear-skin', 'even-and-bright', 'firm-and-lift', 'glow-and-hydrate',
  'neck-renewal', 'non-surgical-lift', 'sculpt-and-define', 'under-eye-refresh',
];

const FALLBACK_MAIN_TREATMENT_SLUGS = [
  'anti-wrinkle-treatments', 'dermal-fillers', 'skin-boosters',
  'regenerative-treatments', 'biostimulators', 'microneedling',
  'rf-microneedling', 'hifu', 'chemical-peel', 'hydro2-facial',
  'mesotherapy', 'led-light-therapy', 'profhilo', 'prp',
  'polynucleotides', 'medical-grade-skincare',
];

// /book and /treatment-plan are noindexed (thin pages), so they are not listed.
// Sub-treatment pages (/main-treatments/<slug>/<sub>) were removed from the
// site in Nov 2026. Only the treatments in SUB_PAGE_PARENTS
// (src/data/richTreatments.js — currently Dermal Fillers) have them again;
// they are listed below from the same source the pages are built from.
// public/.htaccess returns 410 Gone for every other old copy on the server.

async function fetchSlugs(query, fallback) {
  try {
    const rows = await client.fetch(query);
    const slugs = (rows || []).map((r) => r.slug).filter(Boolean);
    return slugs.length ? slugs : fallback;
  } catch {
    return fallback;
  }
}

async function fetchBlogPosts() {
  try {
    const rows = await client.fetch(`*[_type == "blogPost" && defined(slug.current)]{ "slug": slug.current, publishedAt, _updatedAt }`);
    return rows || [];
  } catch {
    return [];
  }
}

export const dynamic = 'force-static';

export default async function sitemap() {
  const now = new Date().toISOString();

  const treatmentSlugs = await fetchSlugs(
    `*[_type == "treatment"]{ "slug": slug.current }`,
    FALLBACK_TREATMENT_SLUGS,
  );
  const mainTreatmentSlugs = [
    ...new Set([
      ...(await fetchSlugs(`*[_type == "mainTreatment"]{ "slug": slug.current }`, FALLBACK_MAIN_TREATMENT_SLUGS)),
      ...Object.keys(STATIC_MAIN_TREATMENTS),
    ]),
  ].sort();

  const staticPages = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/treatments`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/training`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/skin-concerns`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/testimonials`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/prices`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/locations`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Seasonal offer page: listed only while the offer is running.
  if (isWinterEditLive()) {
    staticPages.push({ url: `${SITE_URL}/black-friday`, changeFrequency: 'weekly', priority: 0.8 });
  }

  const treatmentPages = treatmentSlugs.map((slug) => ({
    url: `${SITE_URL}/treatments/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: now,
  }));

  const mainTreatmentPages = mainTreatmentSlugs.map((slug) => ({
    url: `${SITE_URL}/main-treatments/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
    lastModified: now,
  }));

  const subTreatmentPages = (await getSubPageParams()).map(({ slug, subSlug }) => ({
    url: `${SITE_URL}/main-treatments/${slug}/${subSlug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: now,
  }));

  const blogPages = (await fetchBlogPosts()).map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
    lastModified: post._updatedAt || post.publishedAt || now,
  }));

  const locationPages = LOCATIONS.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: now,
  }));

  return [...staticPages, ...treatmentPages, ...mainTreatmentPages, ...subTreatmentPages, ...blogPages, ...locationPages];
}
