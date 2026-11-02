/**
 * Location data for Kensley Aesthetics location pages.
 * Only Jesmond / Newcastle upon Tyne — our home clinic location.
 *
 * Fields
 * ──────
 * slug          URL segment
 * name          Display name
 * county        County / ceremonial county
 * council       Local authority / council name
 * region        English region or nation
 * distanceMiles Approx. miles from the Jesmond clinic (0 = home city)
 * heroHeadline  H1 displayed in the page hero
 * intro         2–3 sentence opening, location-specific
 * body          Longer paragraph with local context
 * cta           Short closing call-to-action line
 * nearbyAreas   Array of local neighbourhoods / towns to mention
 */

export const LOCATIONS = [
  {
    slug: 'newcastle-upon-tyne',
    name: 'Newcastle upon Tyne',
    county: 'Tyne and Wear',
    council: 'Newcastle City Council',
    region: 'North East England',
    distanceMiles: 0,
    heroHeadline: 'Refined aesthetic care in the heart of Jesmond',
    intro:
      'Our clinic on Sandyford Road welcomes clients from across Newcastle upon Tyne, offering unhurried consultations and treatments with a medically qualified team.',
    body:
      'Whether you live in Jesmond itself, in Gosforth or Heaton, or work in the city centre, the clinic is easy to reach for a consultation, a treatment or a follow-up visit.',
    cta: 'Book online or call us to arrange a consultation at our Jesmond clinic. There is no obligation to go ahead with treatment on the day.',
    nearbyAreas: ['Jesmond', 'Gosforth', 'Heaton', 'Sandyford', 'Fenham', 'Kenton', 'Byker', 'Ouseburn', 'City Centre'],
  },
];

export const LOCATIONS_BY_SLUG = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l]),
);
