/**
 * Static fallback data for main treatment pages that don't yet have
 * a Sanity document. Used by MainTreatmentDetail when Sanity returns null.
 * Once a Sanity document is created for a treatment, this data is ignored.
 */

export const STATIC_MAIN_TREATMENTS = {

  'chemical-peel': {
    label: 'Chemical Peel',
    slug: 'chemical-peel',
    tagline: 'Professional skin resurfacing for a clearer, brighter complexion.',
    description: 'Our medical-grade chemical peels are precisely selected and applied by our clinical team to resurface the skin, improve tone, texture, and clarity — delivering results that go far beyond anything available at a beauty salon.',
    benefits: [
      'Visibly improves skin tone and texture',
      'Reduces pigmentation, sun damage, and uneven skin colour',
      'Stimulates collagen and accelerates cell turnover',
      'Suitable for a range of skin types and concerns',
      'Minimal downtime with progressive, lasting results',
    ],
  },

  '3d-hydro2-facial': {
    label: '3D HydrO2 Facial',
    slug: '3d-hydro2-facial',
    tagline: 'Advanced multi-step facial for deep cleansing, hydration, and instant glow.',
    description: 'The 3D HydrO2 Facial is an advanced treatment combining deep cleansing, exfoliation, oxygenation, and intensive hydration. Suitable for all skin types, it delivers an immediate, visible improvement in skin radiance and texture with zero downtime.',
    benefits: [
      'Deep pore cleansing and exfoliation',
      'Intense skin hydration with medical-grade serums',
      'Oxygen infusion for a radiant, healthy glow',
      'Suitable for all skin types including sensitive skin',
      'Zero downtime — perfect before a special event',
    ],
  },

  'mesotherapy': {
    label: 'Mesotherapy',
    slug: 'mesotherapy',
    tagline: 'Bespoke vitamin microinjections delivered directly where your skin needs them.',
    description: 'Mesotherapy involves a series of microinjections delivering a bespoke cocktail of vitamins, minerals, amino acids, and hyaluronic acid directly into the skin. It addresses dullness, dehydration, and early signs of ageing for a visibly refreshed and luminous complexion.',
    benefits: [
      'Delivers active ingredients precisely where needed',
      'Improves skin hydration, glow, and texture',
      'Reduces the appearance of fine lines and dullness',
      'Bespoke formulas tailored to your skin concerns',
      'Progressive results with a course of treatments',
    ],
  },

  'led-light-therapy': {
    label: 'LED Light Therapy',
    slug: 'led-light-therapy',
    tagline: 'Clinically proven light wavelengths to calm, heal, and rejuvenate the skin.',
    description: 'LED Light Therapy uses specific wavelengths of light to target different skin concerns. Red light stimulates collagen production, near-infrared promotes healing, and blue light targets acne-causing bacteria — making it a versatile, non-invasive treatment suitable for almost everyone.',
    benefits: [
      'Stimulates collagen and elastin production',
      'Reduces redness, inflammation, and sensitivity',
      'Effective for acne-prone and congested skin',
      'Pain-free treatment with zero downtime',
      'Enhances results of other aesthetic treatments when combined',
    ],
  },

  'profhilo': {
    label: 'Profhilo',
    slug: 'profhilo',
    tagline: 'The gold-standard bio-remodelling treatment for hydration and skin quality.',
    description: 'Profhilo is one of the most innovative injectable treatments available — a high-concentration, ultra-pure hyaluronic acid that spreads beneath the skin to deeply hydrate, firm, and bio-remodel tissue. It stimulates four different types of collagen and elastin for transformative skin quality results.',
    benefits: [
      'Deep, lasting skin hydration and plumpness',
      'Stimulates multiple collagen and elastin types',
      'Improves skin laxity and overall skin quality',
      'Natural-looking results with no filler effect',
      'Suitable for face, neck, hands, and décolletage',
    ],
  },

  'prp': {
    label: 'PRP – Platelet-Rich Plasma',
    slug: 'prp',
    tagline: 'Harness your body\'s own healing power for natural skin regeneration.',
    description: 'Platelet-Rich Plasma (PRP) therapy uses a concentrated sample of your own blood plasma, rich in growth factors, to stimulate natural collagen production, improve skin quality, and accelerate tissue repair. It is effective for facial rejuvenation, under-eye concerns, and hair loss.',
    benefits: [
      '100% natural — uses your own growth factors',
      'Stimulates collagen and elastin production',
      'Effective for skin rejuvenation and hair regrowth',
      'Improves skin tone, texture, and radiance',
      'Minimal downtime, safe for most skin types',
    ],
  },

  'polynucleotides': {
    label: 'Polynucleotides',
    slug: 'polynucleotides',
    tagline: 'DNA-repair molecules that deeply restore skin health and elasticity.',
    description: 'Polynucleotides (PDRN) are biocompatible molecules derived from purified DNA that stimulate cellular repair, regeneration, and hydration at a deep level. They are highly effective for improving skin quality, reducing fine lines, and restoring elasticity — even in delicate areas like the under-eyes.',
    benefits: [
      'Deep cellular repair and skin regeneration',
      'Improves skin elasticity, tone, and hydration',
      'Highly effective for delicate areas including eyes',
      'Biocompatible with excellent safety profile',
      'Complements other regenerative treatments',
    ],
  },

  'medical-grade-skincare': {
    label: 'Medical-Grade Skincare',
    slug: 'medical-grade-skincare',
    tagline: 'Clinician-prescribed homecare plans that support and extend your results.',
    description: 'Medical-grade skincare goes far beyond what is available over the counter. Our clinical team prescribes bespoke skincare plans using pharmaceutical-grade formulations — including prescription retinoids, growth factors, and skin-identical ingredients — to address your specific concerns and maintain the results of your in-clinic treatments.',
    benefits: [
      'Pharmaceutical-grade formulations proven to work',
      'Bespoke plans prescribed by our clinical team',
      'Extends and enhances in-clinic treatment results',
      'Targets specific concerns including ageing, pigmentation, and acne',
      'Available for all skin types',
    ],
  },
};
