/**
 * Main treatment pages that moved under another treatment (Nov 2026).
 * Their old URLs 301-redirect in public/.htaccess; they are no longer built
 * or listed in the sitemap, and every internal link points to the new page.
 * Kept tiny on purpose: imported by client components.
 */
export const MOVED_MAIN_TREATMENTS = {
  profhilo: '/main-treatments/skin-boosters/profhilo-newcastle',
  polynucleotides: '/main-treatments/skin-boosters/polynucleotides-newcastle',
};

export const isMovedMainTreatment = (slug) => Boolean(MOVED_MAIN_TREATMENTS[slug]);

/** Link to a main treatment page, following a move if there was one. */
export const mainTreatmentPath = (slug) => MOVED_MAIN_TREATMENTS[slug] || `/main-treatments/${slug}`;
