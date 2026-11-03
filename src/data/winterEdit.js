/**
 * Black Friday at Kensley — offer page (/black-friday).
 * (File keeps its original name; the offer was first planned as the "Winter Edit".)
 *
 * Offer prices supplied by the clinic (Nov 2026). `was` is the clinic's
 * standard price; under UK rules a crossed-out price must be one the clinic
 * has genuinely charged.
 *
 * The end date is used internally only and is never shown on the site
 * (clinic's decision). After `endsAt` the page swaps the prices for an
 * "offers have ended" message, the homepage banner hides itself, and the
 * page drops out of the sitemap on the next build.
 *
 * Wording reminders (ASA / CAP, cosmetic treatments): no countdowns or
 * "hurry" wording, never name prescription-only medicines.
 */

export const WINTER_EDIT = {
  name: 'Black Friday at Kensley',
  endsAt: '2026-11-30T23:59:59Z', // UK time is GMT in November
  endLabel: '30 November 2026', // internal only, not displayed

  groups: [
    {
      title: 'Facials & peels',
      image: '/images/promo/winter-edit-facials.webp',
      focus: '62% 74%', // crop point on phones
      items: [
        // Client's list says "HydraFacial"; the clinic's device is listed on the site as the 3D HydrO2 Facial
        { name: '3D HydrO2 Facial', note: 'Face treatment', was: 199, now: 99, href: '/main-treatments/hydro2-facial' },
        { name: 'Chemical Peel', note: 'Face treatment', was: 125, now: 79, href: '/main-treatments/chemical-peel' },
      ],
    },
    {
      title: 'Collagen & texture',
      image: '/images/promo/winter-edit-texture.webp',
      focus: '40% 32%',
      items: [
        { name: 'Microneedling', note: 'Face treatment', was: 199, now: 129, href: '/main-treatments/microneedling' },
        { name: 'Microneedling course', note: 'Face treatment · Course of 3 sessions', was: 500, now: 349, href: '/main-treatments/microneedling' },
        { name: 'RF Microneedling', note: 'Face treatment', was: 499, now: 349, href: '/main-treatments/rf-microneedling' },
      ],
    },
    {
      title: 'Skin boosters & regenerative',
      image: '/images/promo/winter-edit-boosters.webp',
      focus: '50% 58%',
      items: [
        { name: 'Skin Booster', note: 'Face treatment', was: 225, now: 149, href: '/main-treatments/skin-boosters' },
        { name: 'Profhilo', note: 'Face treatment', was: 299, now: 199, href: '/main-treatments/profhilo' },
        { name: 'Polynucleotides', note: 'Face treatment', was: 299, now: 199, href: '/main-treatments/polynucleotides' },
        { name: 'PRP', note: 'Face treatment', was: 350, now: 249, href: '/main-treatments/prp' },
      ],
    },
    {
      title: 'Lifting',
      image: '/images/promo/winter-edit-lifting.webp',
      focus: '58% 36%',
      items: [
        { name: 'HIFU', note: 'Face treatment', was: 700, now: 350, href: '/main-treatments/hifu' },
        { name: 'HIFU', note: 'Face & neck treatment', was: 1000, now: 499, href: '/main-treatments/hifu' },
      ],
    },
  ],

  images: {
    lounge: '/images/promo/winter-edit-lounge.webp', // 1672 × 941
    lounge1280: '/images/promo/winter-edit-lounge-1280.webp',
    cta: '/images/promo/winter-edit-cta.webp', // 1914 × 822
    cta1280: '/images/promo/winter-edit-cta-1280.webp',
  },

};

export const WINTER_EDIT_FAQS = [
  {
    q: 'Is a consultation included?',
    a: 'Yes. Every Black Friday treatment starts with a complimentary consultation. Your practitioner will look at your skin, medical history and goals, and will only go ahead if the treatment is suitable for you.',
  },
  {
    q: 'Do I need a patch test?',
    a: 'Yes. A patch test is required 48 hours before treatment, and we will arrange it with you when you book.',
  },
  {
    q: 'Is there any downtime?',
    a: 'It depends on the treatment. Facials usually involve little interruption, while microneedling, RF microneedling and chemical peels can cause temporary redness or sensitivity. Your practitioner will explain what to expect before you book.',
  },
  {
    q: 'Who can book a Black Friday treatment?',
    a: 'Anyone aged 18 or over can book a consultation. Treatment goes ahead only if it is clinically suitable for you.',
  },
];

/** True until the offer's end date has passed. */
export function isWinterEditLive(now = Date.now()) {
  const end = Date.parse(WINTER_EDIT.endsAt);
  return Number.isNaN(end) || now <= end;
}

/** £ format: 1000 → "£1,000" */
export const gbp = (n) => `£${Number(n).toLocaleString('en-GB')}`;

/** Largest saving as a whole percentage (for "up to" wording). */
export function maxSavingPercent() {
  const all = WINTER_EDIT.groups.flatMap((g) => g.items);
  return Math.max(...all.map((i) => Math.floor(((i.was - i.now) / i.was) * 100)));
}
