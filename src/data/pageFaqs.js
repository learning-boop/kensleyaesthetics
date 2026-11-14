/**
 * AEO / GEO FAQ content — digital marketer handoff (Oct 2026),
 * "Prioritised user FAQs for AEO / GEO" (21 questions).
 *
 * Each question lives on ONE page only, so no two pages carry the same
 * FAQPage schema entry. Visible accordions and JSON-LD both read from
 * this file, so the schema always matches the text on screen.
 *
 *   /faq ............................ Q1, Q14, Q19, Q20, Q21
 *   /locations ...................... Q16, Q17, Q18
 *   /prices ......................... Q13
 *   /skin-concerns .................. Q7, Q9
 *   /main-treatments/dermal-fillers . (none — uses its own content-plan FAQs, Nov 2026)
 *   /main-treatments/skin-boosters .. Q3, Q5
 *   /main-treatments/biostimulators . Q6
 *   /main-treatments/profhilo ....... Q4
 *   /main-treatments/polynucleotides  Q12
 *   /main-treatments/rf-microneedling Q11
 *   /main-treatments/chemical-peel .. Q8
 *   /main-treatments/anti-wrinkle-treatments  Q15
 *
 *   / (homepage) .................... 6 common questions (Q1, Q21, Q13, Q18,
 *                                     Q14, Q9) as visible text only. No FAQ
 *                                     schema there, so nothing is duplicated.
 */

import { PRICE_TREATMENTS } from './prices';

/* ────────────────────────────────────────────────────────────
 * /faq — full category list (existing questions + new ones)
 * ──────────────────────────────────────────────────────────── */
export const FAQ_PAGE_CATEGORIES = [
  {
    category: 'Your Consultation',
    icon: '✨',
    items: [
      {
        q: 'What happens during a consultation?',
        a: 'Your consultation is a relaxed, no-pressure conversation. We’ll assess your skin, discuss your goals and recommend the most suitable treatments. There’s no obligation to book on the day.',
      },
      // Q1 — replaces "How do I know which treatment is right for me?"
      {
        q: 'How do I know which aesthetic treatment might suit my skin?',
        a: 'The most suitable aesthetic treatment depends on your skin concerns, medical history, expectations and what you hope to change. There is no single treatment that works for everyone. A consultation can help you understand whether skincare, a non-invasive procedure, an injectable treatment or no treatment is appropriate.',
      },
      {
        q: 'Are your practitioners medically qualified?',
        a: 'Yes. All treatments at Kensley Aesthetics are performed or overseen by medically qualified practitioners with specialist training in aesthetic medicine.',
      },
    ],
  },
  {
    category: 'Treatments & Results',
    icon: '✶',
    items: [
      {
        q: 'Do the treatments hurt?',
        a: 'Discomfort is minimal. We use fine needles, topical numbing agents and a gentle technique to ensure your experience is as comfortable as possible.',
      },
      {
        q: 'How long do results last?',
        a: 'This varies by treatment. Relaxant injections typically last 3–4 months, dermal fillers 9–18 months, and skin-boosting treatments such as Profhilo typically last several months (commonly reviewed at around 6 months). Your practitioner will give you a realistic expectation during your consultation.',
      },
      {
        q: 'Can I combine treatments?',
        a: 'Absolutely. Many clients benefit from combining treatments for a more comprehensive result. Our Full Face Refresh is specifically designed as a combination protocol.',
      },
      {
        q: 'How soon will I see results?',
        a: 'Some treatments show immediate improvement, while others develop gradually over weeks as your skin responds. Your clinician will explain the expected timeline for your specific treatment.',
      },
      // Q14
      {
        q: 'How much recovery time should I allow after a skin treatment?',
        a: 'Recovery varies by procedure, treatment intensity and individual skin response. Some facial treatments may involve little interruption to daily activities, while microneedling, chemical peels and certain injectable procedures can cause temporary redness, swelling or other effects. Your practitioner should explain the expected recovery and warning signs before treatment.',
      },
    ],
  },
  {
    category: 'About Kensley Aesthetics',
    icon: '❖',
    items: [
      // Q19
      {
        q: 'Does Kensley Aesthetics offer Profhilo and polynucleotide treatments?',
        a: 'Yes. Kensley Aesthetics offers both Profhilo and polynucleotide treatments, and each has its own treatment page. They are not the same product or treatment, and a consultation is needed to establish whether either option is appropriate for your concerns.',
      },
      // Q20 — marketer's audit note about directory listings removed (pages are fixed)
      {
        q: 'Does Kensley Aesthetics offer HIFU, LED light therapy, PRP and mesotherapy?',
        a: 'Yes. Kensley Aesthetics offers HIFU, LED light therapy, PRP and mesotherapy, and each has its own treatment page. Whether one of these suits you depends on your skin concern and medical history, so your practitioner will confirm the right option and current availability at your consultation.',
      },
    ],
  },
  {
    category: 'Booking & Practical',
    icon: '☆',
    items: [
      // Q21 — replaces "How do I book an appointment?"
      {
        q: 'How can I book a consultation at Kensley Aesthetics?',
        a: 'You can book a consultation with Kensley Aesthetics online at kensleyaesthetics.com or by calling 0333 057 0295. The clinic is in Jesmond, Newcastle upon Tyne. When you book, tell us your main concern and we will suggest the most appropriate type of consultation.',
      },
      {
        q: 'What should I do before my appointment?',
        a: 'Where possible, avoid over-the-counter blood-thinning medication such as ibuprofen or aspirin for 24–48 hours before treatment — but never stop prescribed medication without your doctor’s advice first. Stay hydrated and arrive with a clean face. We will provide full pre-treatment instructions when you book.',
      },
      {
        q: 'What aftercare do I need?',
        a: 'Aftercare varies by treatment, but generally we advise avoiding strenuous exercise, alcohol and direct sun exposure for 24 hours. Full aftercare instructions will be provided at your appointment.',
      },
      {
        q: 'What if I’m not happy with my result?',
        a: 'Your satisfaction is our priority. If you have any concerns about your results, please contact us and we will arrange a follow-up appointment to assess and advise.',
      },
    ],
  },
];

export const FAQ_PAGE_FAQS = FAQ_PAGE_CATEGORIES.flatMap((cat) => cat.items);

/* ────────────────────────────────────────────────────────────
 * /locations — Q16, Q17, Q18
 * ──────────────────────────────────────────────────────────── */
export const LOCATIONS_FAQS = [
  // Q18
  {
    q: 'Where is Kensley Aesthetics located in Newcastle?',
    a: 'Kensley Aesthetics is at Old Brewery Court, 156 Sandyford Rd, Jesmond, Newcastle upon Tyne, NE2 1XG. You can book a consultation online or by calling 0333 057 0295. If you have questions about access or parking, please contact the clinic before your visit.',
  },
  // Q16
  {
    q: 'How do I choose an aesthetic clinic in Newcastle upon Tyne?',
    a: 'Choose an aesthetics clinic by checking practitioner qualifications, procedure-specific training, consultation standards, safety processes, aftercare and clear pricing. Location and reviews can help you shortlist clinics, but they should not replace clinical checks. The most appropriate clinic is one that can explain your options and their limitations without pressuring you.',
  },
  // Q17
  {
    q: 'How can I check whether an aesthetic practitioner is qualified?',
    a: 'Ask for the practitioner’s full name, professional qualification, registration status, training in the proposed procedure and insurance arrangements. Where someone claims to be a registered doctor, nurse or other regulated professional, use the relevant professional register. Registration alone does not confirm competence in every cosmetic procedure.',
  },
];

/* ────────────────────────────────────────────────────────────
 * /prices — Q13 (example prices read live from the price list)
 * ──────────────────────────────────────────────────────────── */
function findPrice(treatmentId, itemName, groupLabel) {
  const t = PRICE_TREATMENTS.find((x) => x.id === treatmentId);
  if (!t) return null;
  const groups = groupLabel ? t.groups.filter((g) => g.label === groupLabel) : t.groups;
  for (const g of groups) {
    const item = g.items.find((i) => i.name === itemName);
    if (item?.standard) return item.standard;
  }
  return null;
}

function buildPricesAnswer() {
  const examples = [
    [findPrice('dermal-fillers', 'Lips 1 ml'), '1 ml lip filler'],
    [findPrice('profhilo', 'Face'), 'a Profhilo face treatment'],
    [findPrice('microneedling', 'Face', 'Standard'), 'standard facial microneedling'],
  ]
    .filter(([price]) => price)
    .map(([price, label]) => `${price} for ${label}`);

  let list = '';
  if (examples.length === 1) list = examples[0];
  else if (examples.length > 1) list = `${examples.slice(0, -1).join(', ')} and ${examples[examples.length - 1]}`;

  return [
    'Kensley Aesthetics publishes its treatment prices on the Prices page.',
    list ? `Examples include ${list}.` : '',
    'Prices include a complimentary consultation. Your final cost depends on your individual treatment plan, so please confirm it with the clinic before booking.',
  ].filter(Boolean).join(' ');
}

export const PRICES_FAQS = [
  {
    q: 'How much do aesthetic treatments cost at Kensley Aesthetics?',
    a: buildPricesAnswer(),
  },
];

/* ────────────────────────────────────────────────────────────
 * /skin-concerns — Q7, Q9
 * ──────────────────────────────────────────────────────────── */
export const SKIN_CONCERNS_FAQS = [
  // Q7
  {
    q: 'What treatments might help with acne scars or uneven skin texture?',
    a: 'The appropriate approach depends on the type and depth of scarring, your skin type and whether acne is still active. Options to discuss may include microneedling, RF microneedling, selected chemical peels or specialist dermatological treatment. No single procedure is suitable for every scar or skin type.',
  },
  // Q9
  {
    q: 'What skin treatments can I consider if I do not want injections?',
    a: 'If you prefer to avoid injections, you can ask about professional facials, LED light therapy, chemical peels, medical-grade skincare and selected device-based procedures. These options are not interchangeable, and some may still involve discomfort or recovery. The appropriate choice depends on your skin concerns and preferences.',
  },
];

/* ────────────────────────────────────────────────────────────
 * Treatment pages — merged into the FAQs that come from Sanity.
 * `replaces` lists older questions this one supersedes (matched
 * ignoring case and punctuation). Anything not matched is appended,
 * so new content is never lost if the Sanity wording changes.
 * ──────────────────────────────────────────────────────────── */
export const TREATMENT_FAQ_UPDATES = {
  // K-12 (Nov 2026 audit): balanced answers replacing absolute claims held in Sanity
  prp: [
    {
      q: 'Is PRP safe?',
      a: 'PRP uses a sample of your own blood, so an allergic reaction to the injected material is very unlikely. As with any injectable treatment, possible effects include bruising, swelling, redness and tenderness, and less commonly infection. Your clinician will check your suitability and explain the risks at your consultation.',
    },
  ],

  'hydro2-facial': [
    {
      q: 'Is there any downtime?',
      a: 'Most people return to their normal routine straight away, although some notice mild redness for a few hours afterwards. Your practitioner will give you aftercare advice suited to your skin.',
    },
  ],

  'led-light-therapy': [
    {
      q: 'Is LED light therapy safe?',
      a: 'LED light therapy is non-invasive and does not use UV light, and any side effects are usually mild and short-lived. It is not suitable for everyone, for example if you are sensitive to light or take certain medicines, so your practitioner will check your medical history first.',
    },
  ],

  // dermal-fillers: Q2 and Q10 were retired in Nov 2026 — the page now carries only the
  // FAQs from the Dermal Fillers content plan (src/data/dermalFillersContent.js / Sanity).


  'skin-boosters': [
    // Q3
    {
      q: 'What is a skin booster, and is it the same as skincare?',
      a: 'Skin boosters are injectable treatments intended to improve aspects of skin quality, often through hyaluronic-acid-based formulations. They are different from everyday skincare products applied to the skin. They also differ from dermal fillers used mainly to create volume or shape. The expected effects depend on the product and individual suitability.',
    },
    // Q5
    {
      q: 'What is the difference between a skin booster and dermal filler?',
      a: 'Skin boosters are generally used to address skin quality and hydration, while traditional dermal fillers are designed mainly to add volume or contour selected facial areas. Both can involve injectable hyaluronic-acid products, but they differ in formulation and intended use. Choosing between them requires an assessment of your actual concern.',
    },
  ],

  biostimulators: [
    // Q6
    {
      q: 'How do biostimulators compare with dermal fillers?',
      replaces: ['Are biostimulators the same as dermal fillers?', 'Are biostimulators the same as fillers?'],
      a: 'Traditional hyaluronic-acid dermal fillers usually aim to add volume or definition directly, while biostimulatory treatments are used to encourage tissue changes over time. The distinction is not absolute: individual products have different mechanisms, and some biostimulators also provide volume. Their safety profiles and reversibility can differ significantly.',
    },
  ],

  profhilo: [
    // Q4
    {
      q: 'What is the difference between Profhilo and polynucleotides?',
      a: 'Profhilo is a specific injectable hyaluronic-acid product used for skin-quality concerns, while polynucleotides are a different group of injectable compounds studied for skin appearance and tissue-related effects. Their formulations, evidence and intended uses differ. Neither can be considered universally better, and suitability depends on the individual and exact product.',
    },
  ],

  polynucleotides: [
    // Q12
    {
      q: 'Are polynucleotide injections suitable for the under-eye area?',
      replaces: ['Are they safe for the under-eye area?', 'Are polynucleotides suitable for the under-eye area?'],
      a: 'Some polynucleotide products are used in aesthetic practice around the eyes, but suitability depends on the specific formulation, treatment indication, anatomy and individual medical history. They are not an appropriate solution for every under-eye concern. A qualified practitioner must assess the area and explain the evidence, possible benefits and risks.',
    },
  ],

  'rf-microneedling': [
    // Q11
    {
      q: 'Are RF microneedling and HIFU completely safe?',
      a: 'No cosmetic procedure is completely risk-free. RF microneedling and HIFU use different technologies, and their risks depend on the device, treatment settings, area and practitioner. Both require a proper assessment. Some RF microneedling procedures have been associated with serious complications, so device-specific safety information matters.',
    },
  ],

  'chemical-peel': [
    // Q8
    {
      q: 'Can a chemical peel help with uneven skin tone or pigmentation?',
      a: 'Certain chemical peels may help improve some forms of uneven tone and superficial pigmentation, but their suitability depends on the cause of the pigmentation, skin type and peel strength. They are not appropriate for every pigment concern, and stronger peels carry greater risks and recovery requirements.',
    },
  ],

  'anti-wrinkle-treatments': [
    // K-21/K-12: avoid naming a prescription-only medicine brand in public content
    {
      q: 'Is this only about anti-wrinkle injections?',
      replaces: ['Is this just about Botox?'],
      a: 'No. Prescription-only injectable treatments are one option, but your consultation may also consider skincare, skin-boosting treatments or other approaches, depending on your concerns.',
    },
    // Q15 — replaces the generic "right treatment" question (that one now lives on /faq)
    {
      q: 'What happens during a consultation for lines and wrinkles?',
      replaces: ['How do I know which treatment is right for me?'],
      a: 'A consultation for lines and wrinkles should begin with a discussion of your concerns, medical history and expectations. A qualified healthcare professional can assess possible causes and explain relevant options, including skincare, procedures or no treatment. Any prescription-only treatment must be considered through an appropriate clinical prescribing process, not selected through an advertisement.',
    },
  ],
};

/* ────────────────────────────────────────────────────────────
 * Homepage — only the 6 common questions (Nov 2026: trimmed from 21;
 * treatment-specific questions stay on their own pages).
 * Text is read from the lists above so every page stays in sync.
 * `link` points to the page that covers the topic in more depth.
 * ──────────────────────────────────────────────────────────── */
const tf = (slug) => TREATMENT_FAQ_UPDATES[slug] || [];

const HOME_FAQ_ORDER = [
  [FAQ_PAGE_FAQS, 'How do I know which aesthetic treatment might suit my skin?', '/treatments', 'Explore our treatments'],
  [FAQ_PAGE_FAQS, 'How can I book a consultation at Kensley Aesthetics?'],
  [PRICES_FAQS, 'How much do aesthetic treatments cost at Kensley Aesthetics?', '/prices', 'See our prices'],
  [LOCATIONS_FAQS, 'Where is Kensley Aesthetics located in Newcastle?', '/locations/newcastle-upon-tyne', 'Finding the clinic'],
  [FAQ_PAGE_FAQS, 'How much recovery time should I allow after a skin treatment?'],
  [SKIN_CONCERNS_FAQS, 'What skin treatments can I consider if I do not want injections?', '/skin-concerns', 'Browse skin concerns'],
];

export const HOME_FAQS = HOME_FAQ_ORDER.map(([list, q, to, label]) => {
  const f = list.find((x) => x.q === q);
  if (!f) return null;
  return { q: f.q, a: f.a, link: to ? { to, label } : null };
}).filter(Boolean);

/** How many homepage questions show before "Show all questions". */
export const HOME_FAQS_FEATURED = 6;

/* ────────────────────────────────────────────────────────────
 * Helpers
 * ──────────────────────────────────────────────────────────── */
const normalise = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** Merge FAQ updates into an existing list: replace matches in place, append the rest. */
export function mergeFaqs(existing = [], updates = []) {
  const out = (existing || []).filter((f) => f && f.q).map((f) => ({ q: f.q, a: f.a }));
  for (const u of updates || []) {
    const targets = [u.q, ...[].concat(u.replaces || [])].map(normalise);
    const idx = out.findIndex((f) => targets.includes(normalise(f.q)));
    const item = { q: u.q, a: u.a };
    if (idx >= 0) out[idx] = item;
    else out.push(item);
  }
  return out;
}

/** FAQ list for a treatment page (Sanity / static FAQs + marketer updates). */
export function treatmentFaqs(slug, existing = []) {
  return mergeFaqs(existing, TREATMENT_FAQ_UPDATES[slug] || []);
}

/** FAQPage JSON-LD for server-side rendering in app/<page>/page.js. */
export function faqPageJsonLd(faqs = []) {
  const items = faqs.filter((f) => f && f.q && f.a);
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
