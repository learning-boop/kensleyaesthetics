/**
 * Build-time helpers for the sub-treatment pages that are live
 * (see SUB_PAGE_PARENTS in src/data/richTreatments.js).
 * Used by app/main-treatments/[slug]/[subSlug]/page.js and app/sitemap.js,
 * so the sitemap only ever lists pages that were actually built.
 */
import { client } from './sanityClient';
import { SUB_PAGE_PARENTS, localSubSlugs } from '../data/richTreatments';

const SUB_SLUGS_QUERY = `*[_type == "mainTreatment" && slug.current == $slug][0].subTreatments[]->slug.current`;

/** The sub-treatment slugs shown on a parent page, in display order. */
export async function getSubSlugs(slug) {
  try {
    const rows = await client.fetch(SUB_SLUGS_QUERY, { slug });
    const slugs = (rows || []).filter(Boolean);
    if (slugs.length) return slugs;
  } catch {
    /* Sanity unreachable — fall back to local content */
  }
  return localSubSlugs(slug);
}

/** [{ slug, subSlug }] for every live sub-treatment page. */
export async function getSubPageParams() {
  const params = [];
  for (const slug of SUB_PAGE_PARENTS) {
    for (const subSlug of await getSubSlugs(slug)) params.push({ slug, subSlug });
  }
  return params;
}
