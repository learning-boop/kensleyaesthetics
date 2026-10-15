/**
 * Patch 6 mainTreatment documents in Sanity with updated SEO content
 * from the digital marketer's handoff document.
 *
 * Usage:
 *   SANITY_TOKEN=sk-... node scripts/patch-sanity-treatments.mjs
 *
 * Create a write token at:
 *   https://www.sanity.io/manage/project/puzajrus/api#tokens
 *   (needs Editor permissions)
 */

const PROJECT_ID = 'puzajrus';
const DATASET = 'production';
const API_VERSION = '2024-01-01';
const TOKEN = process.env.SANITY_TOKEN;

if (!TOKEN) {
  console.error('ERROR: Set SANITY_TOKEN environment variable first.');
  console.error('  SANITY_TOKEN=sk-... node scripts/patch-sanity-treatments.mjs');
  process.exit(1);
}

const patches = [
  {
    id: 'mainTreatment-anti-wrinkle-treatments',
    set: {
      label: 'Wrinkle Consultations',
      tagline: 'Your expressions tell your story. Let\u2019s talk about the lines that concern you.',
      description:
        'Fine lines and wrinkles are a natural part of ageing, but sometimes they can become more noticeable than we\u2019d like. At Kensley Aesthetics in Jesmond, we offer personalised consultations to assess facial lines, understand your concerns and discuss suitable treatment options, their limitations and potential risks.',
      seoTitle: 'Wrinkle Consultations Newcastle | Kensley',
      seoDescription:
        'Concerned about forehead lines or crow\u2019s feet? Explore personalised wrinkle consultations at Kensley Aesthetics in Jesmond, Newcastle.',
      benefits: [
        'Forehead lines',
        'Frown lines between the eyebrows',
        'Crow\u2019s feet around the eyes',
        'Fine lines around the mouth',
        'Other facial lines and changes in skin quality',
      ],
      faqs: [
        { _type: 'faq', _key: 'aw1', q: 'Will I still look like myself?', a: 'The aim of any consultation is to discuss options that respect your natural facial movement and expressions. Treatments are always tailored to your anatomy and preferences.' },
        { _type: 'faq', _key: 'aw2', q: 'How do I know which treatment is right for me?', a: 'That\u2019s exactly what the consultation is for. Your clinician will assess the specific lines, discuss the cause and explain the most appropriate options.' },
        { _type: 'faq', _key: 'aw3', q: 'Is this just about Botox?', a: 'No. While prescription-only injectable treatments are one option, your consultation may also consider skincare, skin-boosting treatments, or other approaches depending on your concerns.' },
        { _type: 'faq', _key: 'aw4', q: 'Will it hurt?', a: 'Any potential discomfort depends on the treatment discussed. Your clinician will explain what to expect, including pain management options, before any decisions are made.' },
        { _type: 'faq', _key: 'aw5', q: 'How long do results last?', a: 'This depends on the specific treatment, product, area treated and individual factors. Expected timelines will be discussed during your consultation.' },
      ],
    },
  },

  {
    id: 'main-treatment-profhilo',
    set: {
      label: 'Profhilo',
      tagline: 'When your skin feels less hydrated, it may benefit from more than topical products alone.',
      description:
        'Profhilo is an injectable treatment that uses a high concentration of hyaluronic acid to improve skin hydration, firmness and overall quality. At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, we assess your individual skin concerns before discussing whether Profhilo or an alternative approach may be suitable.',
      seoTitle: 'Profhilo Newcastle | Kensley Jesmond',
      seoDescription:
        'Considering Profhilo for skin hydration? Explore treatment options and book a consultation at Kensley Aesthetics in Jesmond, Newcastle.',
      faqs: [
        { _type: 'faq', _key: 'pr1', q: 'How is Profhilo different from dermal fillers?', a: 'Profhilo is primarily designed to improve skin hydration and quality. Traditional dermal fillers are commonly used to add volume or contour specific facial features. They serve different purposes.' },
        { _type: 'faq', _key: 'pr2', q: 'How many sessions are usually recommended?', a: 'An initial course typically involves two sessions approximately four weeks apart, but individual recommendations may vary following a clinical assessment.' },
        { _type: 'faq', _key: 'pr3', q: 'Is Profhilo painful?', a: 'Most patients describe mild discomfort during treatment. Your clinician can discuss options to manage any sensitivity.' },
        { _type: 'faq', _key: 'pr4', q: 'When will I see results?', a: 'Some patients notice an improvement in hydration relatively quickly, but full effects generally develop over several weeks as the skin responds.' },
        { _type: 'faq', _key: 'pr5', q: 'Are there any risks?', a: 'As with any injectable treatment, possible effects include bruising, swelling, tenderness and redness. Less common risks will be discussed during your consultation.' },
      ],
    },
  },

  {
    id: 'main-treatment-polynucleotides',
    set: {
      label: 'Polynucleotides',
      tagline: 'Some skin concerns respond better to treatments that work with your biology, not just on the surface.',
      description:
        'Polynucleotides are injectable treatments derived from purified DNA fragments that may support skin repair, hydration and overall quality. At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, we assess individual skin concerns including fine lines, crepey texture and under-eye changes before discussing whether polynucleotides may be appropriate.',
      seoTitle: 'Polynucleotides Newcastle | Kensley Jesmond',
      seoDescription:
        'Explore polynucleotide treatments for skin quality, hydration and under-eye concerns at Kensley Aesthetics in Jesmond, Newcastle.',
      faqs: [
        { _type: 'faq', _key: 'pn1', q: 'Are polynucleotides the same as Profhilo?', a: 'No. They are different products with different compositions and mechanisms. Your clinician can explain the distinctions and which may suit your concerns.' },
        { _type: 'faq', _key: 'pn2', q: 'Are they safe for the under-eye area?', a: 'Polynucleotides are commonly used in delicate areas including the under-eyes, but suitability depends on individual assessment. Your clinician will discuss the risks and benefits.' },
        { _type: 'faq', _key: 'pn3', q: 'How quickly will I see results?', a: 'Changes in skin quality generally develop gradually. Your clinician can explain the expected timeline for the specific product recommended.' },
        { _type: 'faq', _key: 'pn4', q: 'How many treatments are recommended?', a: 'A course of treatments is often suggested, but the number depends on your individual concerns and response. This will be discussed during your consultation.' },
        { _type: 'faq', _key: 'pn5', q: 'Are there side effects?', a: 'Possible effects include bruising, swelling, redness and tenderness. As with any injectable treatment, less common risks exist and will be explained beforehand.' },
      ],
    },
  },

  {
    id: 'mainTreatment-microneedling',
    set: {
      label: 'Microneedling',
      tagline: 'Fine lines, scars and uneven texture can improve when your skin is supported to repair itself.',
      description:
        'Microneedling is a treatment that uses fine needles to create controlled micro-channels in the skin, which may stimulate the skin\u2019s natural repair processes. At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, we assess your individual skin concerns before discussing whether microneedling or an alternative approach is appropriate.',
      seoTitle: 'Microneedling Newcastle | Kensley Aesthetics',
      seoDescription:
        'Explore microneedling for acne scars, fine lines and uneven texture at Kensley Aesthetics in Jesmond, Newcastle. Book your consultation.',
      faqs: [
        { _type: 'faq', _key: 'mn1', q: 'Does microneedling hurt?', a: 'Most patients experience mild discomfort. A topical anaesthetic is typically applied beforehand to reduce sensitivity.' },
        { _type: 'faq', _key: 'mn2', q: 'How many sessions are recommended?', a: 'The number of sessions depends on your individual skin concerns and goals. Your clinician will recommend a treatment plan during your consultation.' },
        { _type: 'faq', _key: 'mn3', q: 'What is the downtime?', a: 'Redness and mild sensitivity are common for one to three days. Your clinician will provide aftercare guidance.' },
        { _type: 'faq', _key: 'mn4', q: 'Is microneedling suitable for all skin types?', a: 'It can be suitable for a range of skin types, but individual assessment is important. Your clinician will discuss whether it is appropriate for you.' },
        { _type: 'faq', _key: 'mn5', q: 'Can microneedling be combined with other treatments?', a: 'Yes, in some cases it may be combined with treatments such as PRP or targeted serums. Your clinician will explain the options.' },
      ],
    },
  },

  {
    id: 'mainTreatment-biostimulators',
    set: {
      label: 'Biostimulators',
      tagline: 'Not every change in your face needs filler. Some concerns respond better to treatments that support your own collagen.',
      description:
        'Biostimulators are injectable treatments designed to stimulate collagen production gradually, rather than adding immediate volume in the way traditional dermal fillers do. Products such as Sculptra and Radiesse have different compositions, mechanisms and indications. At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, we assess individual concerns before discussing which product, if any, may be appropriate.',
      seoTitle: 'Biostimulators Newcastle | Sculptra & Radiesse',
      seoDescription:
        'Explore biostimulator treatments including Sculptra and Radiesse at Kensley Aesthetics in Jesmond, Newcastle. Book a consultation.',
      benefits: [
        'Selected areas of facial volume loss',
        'Changes in facial contours',
        'Reduced skin firmness',
        'Certain concerns involving skin quality',
        'Areas requiring gradual structural improvement',
      ],
      faqs: [
        { _type: 'faq', _key: 'bs1', q: 'Are biostimulators the same as dermal fillers?', a: 'Not exactly. Some biostimulators stimulate collagen gradually, while certain products also provide an immediate filling effect. Their properties differ from standard hyaluronic acid fillers.' },
        { _type: 'faq', _key: 'bs2', q: 'How quickly will I see results?', a: 'This depends on the product. Some effects may be visible soon after treatment, while collagen-related changes generally develop gradually.' },
        { _type: 'faq', _key: 'bs3', q: 'How long do results last?', a: 'Duration varies by product, treatment area and individual response. Your clinician can explain the evidence for the recommended product.' },
        { _type: 'faq', _key: 'bs4', q: 'Are Sculptra and Radiesse the same treatment?', a: 'No. They have different compositions, indications and treatment characteristics.' },
      ],
    },
  },

  {
    id: 'mainTreatment-skin-boosters',
    set: {
      label: 'Skin Boosters',
      tagline: 'When your skin feels thirsty, tired or less supple, it\u2019s worth understanding why.',
      description:
        'Skin boosters are injectable aesthetic treatments designed to improve skin hydration and quality. Many use hyaluronic acid, although formulations and treatment techniques differ. At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, we assess concerns such as dryness, fine lines and uneven texture before discussing suitable treatment options.',
      seoTitle: 'Skin Boosters Newcastle | Kensley Jesmond',
      seoDescription:
        'Explore skin boosters for hydration, fine lines and skin quality at Kensley Aesthetics in Jesmond, Newcastle. Book your consultation.',
      faqs: [
        { _type: 'faq', _key: 'sb1', q: 'Will skin boosters change my face shape?', a: 'Their primary purpose is generally to improve skin quality rather than create targeted facial contours. However, individual products differ and temporary swelling may occur.' },
        { _type: 'faq', _key: 'sb2', q: 'Are skin boosters suitable for dry skin?', a: 'They may improve aspects of skin hydration, but your clinician should also consider skin barrier problems and other potential causes of dryness.' },
        { _type: 'faq', _key: 'sb3', q: 'How many sessions are required?', a: 'The recommended course varies by product, skin concern and individual response.' },
        { _type: 'faq', _key: 'sb4', q: 'Are there side effects?', a: 'Possible effects include swelling, bruising, redness and tenderness. Injectable treatments also carry less common but potentially serious risks.' },
      ],
    },
  },
];

async function run() {
  const mutations = patches.map((p) => ({
    patch: {
      id: p.id,
      set: p.set,
    },
  }));

  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}`;

  console.log(`Patching ${patches.length} documents...`);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });

  const body = await res.json();

  if (!res.ok) {
    console.error('Sanity API error:', res.status, body);
    process.exit(1);
  }

  console.log('Success! Results:', JSON.stringify(body, null, 2));
  console.log('\nPatched documents:');
  patches.forEach((p) => console.log(`  - ${p.id} → ${p.set.seoTitle}`));
}

run();
