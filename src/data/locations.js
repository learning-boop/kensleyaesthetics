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
    heroHeadline: 'Premier Aesthetic Clinic in Newcastle',
    intro:
      'Kensley Aesthetics is based right here in Newcastle upon Tyne — in the beautiful neighbourhood of Jesmond — making us your closest doctor-led aesthetic clinic. Whether you live in Gosforth, Heaton, Jesmond itself, or anywhere across the city, world-class aesthetic care is never far away.',
    body:
      'Located on Sandyford Road in the heart of Jesmond, our clinic is easily accessible from every part of Newcastle. We are just a short walk from Jesmond Metro station, with excellent bus links and parking nearby. Dr Tiru Matla and the team welcome clients from across Newcastle and the surrounding areas for expert aesthetic treatments in a safe, clinical environment.',
    cta: 'Book your consultation today at Kensley Aesthetics, Jesmond — Newcastle\'s premier doctor-led aesthetic clinic.',
    nearbyAreas: ['Jesmond', 'Gosforth', 'Heaton', 'Sandyford', 'Fenham', 'Kenton', 'Byker', 'Ouseburn', 'City Centre'],
  },
];

export const LOCATIONS_BY_SLUG = Object.fromEntries(
  LOCATIONS.map((l) => [l.slug, l]),
);
