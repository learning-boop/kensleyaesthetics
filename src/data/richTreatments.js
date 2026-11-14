/**
 * Treatments whose pages use the long-form layout (content sections,
 * treatment rows, closing call to action) and have their own
 * sub-treatment pages at /main-treatments/<slug>/<sub-slug>.
 *
 * Sub-treatment pages were removed site-wide in Nov 2026. Only the
 * treatments listed in SUB_PAGE_PARENTS have them again; every other
 * /main-treatments/<slug>/<sub> URL still answers 410 Gone (public/.htaccess).
 *
 * Sanity is the source of truth. The local content below is used only
 * until the new fields have been pushed to Sanity (or if Sanity can't be
 * reached at build time), so the pages can be previewed locally first.
 */
import {
  DERMAL_FILLERS_SLUG,
  DERMAL_FILLERS_MAIN,
  DERMAL_FILLERS_SUBS,
} from './dermalFillersContent';
import {
  ANTI_WRINKLE_SLUG,
  ANTI_WRINKLE_MAIN,
  ANTI_WRINKLE_SUBS,
} from './antiWrinkleContent';

export const SUB_PAGE_PARENTS = [DERMAL_FILLERS_SLUG, ANTI_WRINKLE_SLUG];

const LOCAL_CONTENT = {
  [DERMAL_FILLERS_SLUG]: { main: DERMAL_FILLERS_MAIN, subs: DERMAL_FILLERS_SUBS },
  [ANTI_WRINKLE_SLUG]: { main: ANTI_WRINKLE_MAIN, subs: ANTI_WRINKLE_SUBS },
};

export const hasSubPages = (slug) => SUB_PAGE_PARENTS.includes(slug);

export const subTreatmentPath = (parentSlug, subSlug) => `/main-treatments/${parentSlug}/${subSlug}`;

/** True once a document carries the long-form fields (i.e. it has been pushed). */
export const isRich = (doc) =>
  Boolean(doc && ((doc.pageSections && doc.pageSections.length) || (doc.introSections && doc.introSections.length)));

/** Shape a local sub-treatment like the main page query returns it. */
function localCard(sub) {
  return {
    slug: sub.slug,
    name: sub.label,
    title: null,
    tagline: sub.tagline,
    image: sub.image || null,
    cardTitle: sub.cardTitle,
    cardBody: sub.cardBody,
    cardLinkLabel: sub.cardLinkLabel,
  };
}

/**
 * Main treatment page: if Sanity doesn't have the long-form fields yet,
 * lay the local content over whatever Sanity returned (keeping its image).
 */
export function withLocalMain(slug, sanityDoc) {
  const local = LOCAL_CONTENT[slug];
  if (!local || isRich(sanityDoc)) return sanityDoc;
  const { image, ...main } = local.main;
  return {
    ...(sanityDoc || {}),
    ...main,
    slug,
    image: sanityDoc?.image || image || null,
    image_second: null,
    reviews: sanityDoc?.reviews || [],
    subTreatments: local.subs.map(localCard),
  };
}

/** Sub-treatment slugs from local content (used before the Sanity push). */
export function localSubSlugs(slug) {
  return (LOCAL_CONTENT[slug]?.subs || []).map((s) => s.slug);
}

/** A single sub-treatment page from local content, shaped like SUB_TREATMENT_QUERY. */
export function localSub(slug, subSlug) {
  const local = LOCAL_CONTENT[slug];
  if (!local) return null;
  const sub = local.subs.find((s) => s.slug === subSlug);
  if (!sub) return null;
  const bySlug = Object.fromEntries(local.subs.map((s) => [s.slug, s]));
  const { _id, oldSlug, related, ...fields } = sub;
  return {
    ...fields,
    relatedTreatments: (related || [])
      .filter((r) => bySlug[r])
      .map((r) => ({ slug: r, name: bySlug[r].label, title: null, parentSlug: slug })),
    parentLabel: local.main.label,
    parentSlug: slug,
  };
}
