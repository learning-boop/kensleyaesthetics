/**
 * push-packages-v2.mjs
 *
 * Replaces the 8 old signature programmes with the 8 new consolidated
 * concern-led packages from the Treatment Journey Packages document.
 *
 * Run: node studio-renova/scripts/push-packages-v2.mjs
 *
 * COMPLIANCE RULES (baked into every package):
 *  - No "anti-wrinkle injections", "Botox" or botulinum toxin brand names
 *  - Every package has the personalised-at-consultation disclaimer
 *  - No guarantee language ("will remove", "permanent", "guaranteed results")
 *  - Every CTA = "Book a Consultation"
 *  - No before/after photos on steps involving injectables
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'puzajrus',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: 'skECACuhN7I6sfL9RkYv7W2lanykaSiNMhfDFGnT9bu1m2eMifzzhobTVILcxWA3pUTxJ22qfLc2AVEicgzMXF0bh8is2oCzx0e14oPczyNW8TRexoAYBDNk0AH0roku8024CayM9UCSnD296tSV0ai0TOEOAFYSVjAEcljplwn9V4URycOJ',
  useCdn: false,
})

/* ─────────────────────────────────────────────────────────────
   PACKAGE DATA
   ───────────────────────────────────────────────────────────── */
const packages = [

  /* ── PACKAGE 1 — Glow & Hydrate ───────────────────────────── */
  {
    _type: 'treatment',
    _id:   'treatment-skin-glow',          // reuses existing doc ID
    num:   '01',
    label: 'Glow & Hydrate',
    slug:  { _type: 'slug', current: 'glow-and-hydrate' },
    tagline: 'Restore radiance and deeply hydrate tired, dull skin.',
    concern: 'Dull, dry, tired-looking skin. "I want glowing skin."',
    description:
      'For skin that looks dull, dry or tired. We begin by refreshing the surface with a chemical peel or 3D HydrO2 Facial, then deeply hydrate from within using injectable skin boosters or mesotherapy. LED light therapy keeps your results glowing between visits.\n\nSessions are spaced apart for safety and best results — surface treatments and injectable boosters are never done on the same day. Most skin boosters need a short course of two or more sessions.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Treatments are spaced 1–2 weeks apart; your practitioner will set your exact schedule.',
    seoTitle: 'Dull Skin Treatment Newcastle | Glow & Hydrate Plan — Kensley Aesthetics',
    seoDescription: 'Refresh dull, tired skin with our Glow & Hydrate package — chemical peels, skin boosters and LED therapy. Personalised plan at Kensley Aesthetics, Newcastle.',
    benefits: [
      'Resurfaces and deeply hydrates in a staged plan',
      'Improves radiance, glow and skin smoothness',
      'Suitable for tired, dehydrated or dull-looking skin',
      'Treatments spaced safely for best results',
      'Works well as a standalone plan or alongside other treatments',
    ],
    steps: [
      {
        _key: 'step-gh-1',
        stepTitle: 'Step 1 — Resurface & Prep',
        stepDescription: 'We begin by refreshing the skin surface, removing dead cells and priming the skin to receive hydration more effectively. This is always done before injectable treatments.\n\n⏱ Timing: This is your first appointment. Book 1–2 weeks before your next step.',
        treatments: [
          { _key: 'tl-gh-1a', name: 'Chemical Peel', mainTreatmentSlug: '' },
          { _key: 'tl-gh-1b', name: '3D HydrO2 Facial', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-gh-2',
        stepTitle: 'Step 2 — Deep Hydration',
        stepDescription: 'Once the skin surface has been refreshed, we deliver deep hydration from within using injectable skin boosters or mesotherapy. Most skin boosters work best as a course of two or more sessions.\n\n⏱ Timing: Start 1–2 weeks after Step 1. Surface treatments and injectable boosters are never done on the same day.',
        treatments: [
          { _key: 'tl-gh-2a', name: 'Skin Boosters (e.g. Profhilo)', mainTreatmentSlug: 'skin-boosters' },
          { _key: 'tl-gh-2b', name: 'Mesotherapy', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-gh-3',
        stepTitle: 'Step 3 — Ongoing Maintenance',
        stepDescription: 'LED light therapy supports skin health and keeps results glowing between sessions. It can be added to any visit and works well alongside other treatments.\n\n⏱ Timing: Ongoing — can be added at any appointment or used as a standalone maintenance session.',
        treatments: [
          { _key: 'tl-gh-3a', name: 'LED Light Therapy', mainTreatmentSlug: '' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-gh-1', q: 'Can surface treatments and injections be done on the same day?', a: 'No. Surface treatments and injectable boosters are always scheduled on separate visits for safety and to protect your results.' },
      { _key: 'faq-gh-2', q: 'How many skin booster sessions will I need?', a: 'Most skin boosters work best as a course of two or more sessions. Your practitioner will recommend a plan based on your skin and goals.' },
      { _key: 'faq-gh-3', q: 'Can I have this done before an event?', a: 'Yes, but injectable treatments should be planned with enough time for any redness or small marks to settle before the event. Discuss timing at your consultation.' },
      { _key: 'faq-gh-4', q: 'Is this suitable for sensitive skin?', a: 'Treatment strength and homecare will be adjusted to suit your skin. Sensitive skin is assessed before any treatment is selected.' },
    ],
    ideal: 'Ideal for anyone with dull, dehydrated, tired-looking or uneven skin who wants improved radiance and lasting hydration.',
  },

  /* ── PACKAGE 2 — Clear Skin (Acne & Acne Scars) ──────────── */
  {
    _type: 'treatment',
    _id:   'treatment-clear-skin',
    num:   '02',
    label: 'Clear Skin',
    slug:  { _type: 'slug', current: 'clear-skin' },
    tagline: 'A two-phase approach to clearer, smoother skin.',
    concern: 'Active acne, breakouts, and acne scarring.',
    description:
      'A two-phase approach: first we calm active breakouts with medical-grade skincare, gentle chemical peels and LED therapy. Only once your skin is settled do we move to scar treatment with microneedling or RF microneedling, supported by regenerative treatments such as PRP, polynucleotides or exosomes to accelerate healing.\n\nThe order matters — needling over active acne can spread bacteria and make breakouts worse, so we never skip phase one.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Microneedling is only performed after active acne is controlled — this is assessed at your consultation.',
    seoTitle: 'Acne & Acne Scar Treatment Newcastle | Clear Skin Plan — Kensley Aesthetics',
    seoDescription: 'Two-phase acne and acne scar treatment in Newcastle. Medical skincare, chemical peels, microneedling and regenerative support. Kensley Aesthetics.',
    benefits: [
      'Phase 1 calms and controls active acne first',
      'Phase 2 targets scarring once skin is settled',
      'Regenerative treatments support skin repair and healing',
      'Medically guided plan with homecare support',
      'Suitable for active acne, post-acne marks and textural scarring',
    ],
    steps: [
      {
        _key: 'step-cs-1',
        stepTitle: 'Phase 1 — Calm & Control (Weeks 1–6+)',
        stepDescription: 'Before any needling or resurfacing, active acne must be controlled. We use a combination of medical-grade skincare, chemical peels and LED therapy to settle breakouts and reduce inflammation. This phase is non-negotiable — treating scar tissue while acne is active can worsen breakouts and cause new damage.\n\n⏱ Timing: This phase typically runs for 4–8 weeks, or until your skin is consistently clear and settled. Duration is assessed at each visit.',
        treatments: [
          { _key: 'tl-cs-1a', name: 'Medical-Grade Skincare Plan', mainTreatmentSlug: '' },
          { _key: 'tl-cs-1b', name: 'Chemical Peels', mainTreatmentSlug: '' },
          { _key: 'tl-cs-1c', name: 'LED Light Therapy', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-cs-2',
        stepTitle: 'Phase 2 — Scar Treatment (Only Once Acne is Controlled)',
        stepDescription: 'Once active breakouts are consistently under control, we introduce collagen-stimulating treatments to improve texture, depth and the appearance of scarring. Sessions are spaced apart to allow the skin to repair between treatments.\n\n⏱ Timing: Sessions spaced 4–6 weeks apart. Typically a course of 3–6 sessions depending on scar severity.',
        treatments: [
          { _key: 'tl-cs-2a', name: 'Microneedling', mainTreatmentSlug: 'microneedling' },
          { _key: 'tl-cs-2b', name: 'RF Microneedling', mainTreatmentSlug: 'rf-microneedling' },
        ],
      },
      {
        _key: 'step-cs-3',
        stepTitle: 'Phase 3 — Regenerative Boost',
        stepDescription: 'Regenerative treatments are added alongside scar treatment to accelerate skin repair, support healing and improve overall skin quality. These can be combined with microneedling or scheduled in separate sessions.\n\n⏱ Timing: Introduced alongside or between scar treatment sessions, as recommended at consultation.',
        treatments: [
          { _key: 'tl-cs-3a', name: 'PRP (Platelet-Rich Plasma)', mainTreatmentSlug: 'regenerative-treatments' },
          { _key: 'tl-cs-3b', name: 'Polynucleotides', mainTreatmentSlug: 'regenerative-treatments' },
          { _key: 'tl-cs-3c', name: 'Exosomes', mainTreatmentSlug: 'regenerative-treatments' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-cs-1', q: 'Why does the order matter so much?', a: 'Needling over active acne can spread bacteria and make breakouts worse. Phase 1 is non-negotiable — we only introduce scar treatment once your skin is consistently clear.' },
      { _key: 'faq-cs-2', q: 'How long does Phase 1 take?', a: 'Phase 1 typically runs for 4–8 weeks, depending on how quickly your skin responds. Progress is assessed at each visit.' },
      { _key: 'faq-cs-3', q: 'How many scar treatment sessions will I need?', a: 'Most clients see meaningful improvement over a course of 3–6 sessions, spaced 4–6 weeks apart. Results build gradually as the skin repairs and regenerates.' },
      { _key: 'faq-cs-4', q: 'Is this suitable for all skin tones?', a: 'Yes, with appropriate assessment. Treatment settings and product choices are adjusted based on your skin type to support safe and effective results.' },
    ],
    ideal: 'Ideal for clients with active acne, post-acne marks, textural scarring or anyone wanting a medically guided plan for clearer skin.',
  },

  /* ── PACKAGE 3 — Even & Bright (Pigmentation) ─────────────── */
  {
    _type: 'treatment',
    _id:   'treatment-even-and-bright',    // new document
    num:   '03',
    label: 'Even & Bright',
    slug:  { _type: 'slug', current: 'even-and-bright' },
    tagline: 'Patience, the right order and consistent care for visibly brighter skin.',
    concern: 'Dark spots, sun damage, melasma, uneven skin tone.',
    description:
      'Pigmentation needs patience and the right order. We start with medical-grade skincare and strict daily SPF — without sun protection, no pigmentation treatment holds. A course of chemical peels then gradually lifts dark spots, supported by HydrO2 facials or LED therapy. For suitable skin types, targeted microneedling may be added.\n\nNote for deeper skin tones: some treatments can worsen pigmentation if used incorrectly. Our practitioners assess your skin type first and choose conservative settings where needed.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Daily SPF is essential throughout this plan. Microneedling is only used where clinically appropriate for your skin type.',
    seoTitle: 'Pigmentation Treatment Newcastle | Even & Bright Plan — Kensley Aesthetics',
    seoDescription: 'Target dark spots, sun damage and uneven skin tone with our Even & Bright plan. Medical skincare, peels and brightening treatments in Newcastle.',
    benefits: [
      'Targets dark spots, sun damage and melasma',
      'Builds on a foundation of medical skincare and SPF',
      'Chemical peels gradually lift pigmentation over time',
      'LED therapy and HydrO2 facials support and brighten between peels',
      'Assessed for all skin tones with conservative settings where needed',
    ],
    steps: [
      {
        _key: 'step-eb-1',
        stepTitle: 'Step 1 — Foundation (Ongoing from Day 1)',
        stepDescription: 'No pigmentation treatment will hold without a proper foundation. We start with a medical-grade skincare plan including a high-SPF sunscreen worn every day, regardless of weather. This step is non-negotiable and runs throughout the entire plan.\n\n⏱ Timing: Starts immediately at your first consultation. Continue throughout the full programme.',
        treatments: [
          { _key: 'tl-eb-1a', name: 'Medical-Grade Skincare Plan', mainTreatmentSlug: '' },
          { _key: 'tl-eb-1b', name: 'Daily SPF Protection', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-eb-2',
        stepTitle: 'Step 2 — Gradual Pigmentation Lifting (Monthly)',
        stepDescription: 'A course of chemical peels gradually lifts pigmentation from the skin surface. Results build over multiple sessions — rushing the process or skipping the skincare foundation can cause pigmentation to rebound.\n\n⏱ Timing: Peels are typically spaced 3–4 weeks apart. A course of 4–6 peels is common, depending on the type and depth of pigmentation.',
        treatments: [
          { _key: 'tl-eb-2a', name: 'Chemical Peels', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-eb-3',
        stepTitle: 'Step 3 — Brighten & Support (Between Peels)',
        stepDescription: 'Between peel sessions, brightening treatments maintain skin health and support an even skin tone. These can be added at any visit and work well alongside your at-home routine.\n\n⏱ Timing: Can be performed between peel sessions, typically every 2–4 weeks.',
        treatments: [
          { _key: 'tl-eb-3a', name: '3D HydrO2 Facial', mainTreatmentSlug: '' },
          { _key: 'tl-eb-3b', name: 'LED Light Therapy', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-eb-4',
        stepTitle: 'Step 4 — Targeted Microneedling (Selected Cases Only)',
        stepDescription: 'For certain skin types and pigmentation patterns, targeted microneedling may be added to the plan. This is assessed individually — it is not appropriate for all skin types or all forms of pigmentation, and is only used where clinically safe.\n\n⏱ Timing: Introduced later in the plan, only where suitable. Sessions spaced 4–6 weeks apart.',
        treatments: [
          { _key: 'tl-eb-4a', name: 'Microneedling (selected cases only)', mainTreatmentSlug: 'microneedling' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-eb-1', q: 'Why does SPF matter so much for pigmentation?', a: 'UV exposure is the main trigger for most forms of pigmentation. Without daily SPF, even the best in-clinic treatments will not hold — the pigmentation will return. SPF is non-negotiable throughout this plan.' },
      { _key: 'faq-eb-2', q: 'How many peel sessions will I need?', a: 'Most clients see meaningful improvement over a course of 4–6 peels, typically spaced 3–4 weeks apart. Results build gradually with each session.' },
      { _key: 'faq-eb-3', q: 'Is this suitable for darker skin tones?', a: 'Yes, with careful assessment. Our practitioners select treatments and settings based on your skin type. Some treatments carry a higher risk of worsening pigmentation in deeper skin tones, so conservative approaches are always chosen first.' },
      { _key: 'faq-eb-4', q: 'How long does the full plan take?', a: 'Most clients follow this plan over 3–6 months, depending on the type, depth and cause of their pigmentation. Maintenance visits are often recommended to sustain results.' },
    ],
    ideal: 'Ideal for clients with dark spots, sun damage, melasma, post-inflammatory pigmentation or uneven skin tone.',
  },

  /* ── PACKAGE 4 — Firm & Lift (Collagen & Tightening) ─────── */
  {
    _type: 'treatment',
    _id:   'treatment-collagen-restore',   // reuses existing doc ID
    num:   '04',
    label: 'Firm & Lift',
    slug:  { _type: 'slug', current: 'firm-and-lift' },
    tagline: 'Rebuild firmness on multiple levels — collagen, repair and structure.',
    concern: 'Early skin laxity, loss of firmness — "my skin feels loose or thin."',
    description:
      'Collagen naturally declines from our mid-20s. This plan rebuilds it on multiple levels: microneedling or RF microneedling stimulates collagen at the skin\'s surface, regenerative treatments (PRP, polynucleotides or exosomes) support repair from within, and — where suitable — collagen-stimulating injectables (biostimulators) provide deeper structural support.\n\nThe right combination and order depends on your skin. Your practitioner builds this with you at consultation. Treatments are spaced across separate visits.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Treatments are combined and scheduled at consultation; they are not performed in a single visit.',
    seoTitle: 'Skin Tightening Newcastle | Firm & Lift Collagen Plan — Kensley Aesthetics',
    seoDescription: 'Rebuild skin firmness and collagen with our Firm & Lift plan — microneedling, RF microneedling, regenerative treatments and biostimulators in Newcastle.',
    benefits: [
      'Stimulates collagen production at multiple levels',
      'Improves skin firmness, texture and elasticity',
      'Regenerative treatments support repair from within',
      'Biostimulators add structural support where appropriate',
      'Results build gradually — natural and long-lasting',
    ],
    steps: [
      {
        _key: 'step-fl-1',
        stepTitle: 'Step 1 — Collagen Stimulation at the Surface',
        stepDescription: 'The first layer of treatment targets the skin\'s surface using controlled collagen-stimulating technology. Results build progressively over a course of sessions as the skin repairs and regenerates.\n\n⏱ Timing: Sessions spaced 4–6 weeks apart. A course of 3–6 sessions is typical, depending on the degree of laxity and skin type.',
        treatments: [
          { _key: 'tl-fl-1a', name: 'Microneedling', mainTreatmentSlug: 'microneedling' },
          { _key: 'tl-fl-1b', name: 'RF Microneedling', mainTreatmentSlug: 'rf-microneedling' },
        ],
      },
      {
        _key: 'step-fl-2',
        stepTitle: 'Step 2 — Regenerative Support',
        stepDescription: 'Regenerative treatments work alongside surface collagen stimulation to support repair from within. They can be combined with microneedling sessions or scheduled separately, depending on your plan.\n\n⏱ Timing: Introduced alongside or after Step 1 sessions. Timing is personalised at consultation.',
        treatments: [
          { _key: 'tl-fl-2a', name: 'PRP (Platelet-Rich Plasma)', mainTreatmentSlug: 'regenerative-treatments' },
          { _key: 'tl-fl-2b', name: 'Polynucleotides', mainTreatmentSlug: 'regenerative-treatments' },
          { _key: 'tl-fl-2c', name: 'Exosomes', mainTreatmentSlug: 'regenerative-treatments' },
        ],
      },
      {
        _key: 'step-fl-3',
        stepTitle: 'Step 3 — Deeper Structural Support (Where Suitable)',
        stepDescription: 'For clients where deeper structural support is appropriate, collagen-stimulating injectables (biostimulators) can be added to the plan. Suitability is assessed at consultation — not every client will need or be suitable for this step.\n\n⏱ Timing: Introduced once surface treatment is underway. Spaced at least 4 weeks from other injectable sessions.',
        treatments: [
          { _key: 'tl-fl-3a', name: 'Biostimulators (Collagen-Stimulating Injectables)', mainTreatmentSlug: 'biostimulators' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-fl-1', q: 'How quickly will I see results?', a: 'Collagen-focused treatments build progressively. Some clients notice an initial improvement, but the full effect develops over 6–12 weeks as the skin repairs and strengthens.' },
      { _key: 'faq-fl-2', q: 'Is RF microneedling better than standard microneedling?', a: 'Both have a role. RF microneedling adds radiofrequency energy which can support deeper tightening, while standard microneedling is effective for texture and collagen at the surface. Your practitioner will recommend the right option for your skin.' },
      { _key: 'faq-fl-3', q: 'Can all three steps be done in the same visit?', a: 'No — treatments are spaced across separate visits for safety and to allow the skin to respond and repair between sessions.' },
      { _key: 'faq-fl-4', q: 'Is this suitable for acne scarring?', a: 'Microneedling and RF microneedling can help improve certain types of acne scarring. Suitability is assessed at consultation, and active acne must be controlled first.' },
    ],
    ideal: 'Ideal for clients noticing early laxity, loss of firmness, thinning skin, fine lines, acne scarring or reduced skin bounce.',
  },

  /* ── PACKAGE 5 — Sculpt & Define ─────────────────────────── */
  {
    _type: 'treatment',
    _id:   'treatment-face-sculpt',        // reuses existing doc ID
    num:   '05',
    label: 'Sculpt & Define',
    slug:  { _type: 'slug', current: 'sculpt-and-define' },
    tagline: 'Balance your features with proportion-led contouring.',
    concern: 'Facial balance — chin, jawline, cheeks, lips, profile. "I want a sharper jawline or more balanced profile."',
    description:
      'Facial definition is about proportion, not volume. Using dermal fillers, we enhance and balance features such as the chin, jawline and cheeks — always working with your natural structure. Additional injectable options may be discussed at your consultation. We finish with skin boosters so the skin itself matches the new definition.\n\nAll treatment plans are built face-to-face with your practitioner, based on your facial anatomy and goals.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Results are gradual and natural — we build definition over planned sessions, never in one oversized step.',
    seoTitle: 'Facial Contouring Newcastle | Sculpt & Define Plan — Kensley Aesthetics',
    seoDescription: 'Define your jawline, chin and cheeks with proportion-led facial contouring at Kensley Aesthetics. Dermal fillers and skin boosters in Newcastle.',
    benefits: [
      'Enhances facial balance, chin projection and jawline definition',
      'Always works with your natural structure — never against it',
      'Skin boosters finish the plan with improved skin quality',
      'Results planned and built gradually over sessions',
      'Suitable injectable options discussed at face-to-face consultation',
    ],
    steps: [
      {
        _key: 'step-sd-1',
        stepTitle: 'Step 1 — Structure & Contour',
        stepDescription: 'Dermal fillers are placed to restore or enhance facial structure across the areas agreed at consultation — typically the chin, jawline, cheeks or lips. The approach is always proportion-led, working with your natural anatomy rather than adding volume for its own sake.\n\n⏱ Timing: Your first treatment session. Allow 2–4 weeks to settle before assessing results. A review appointment is usually scheduled 4 weeks after.',
        treatments: [
          { _key: 'tl-sd-1a', name: 'Dermal Fillers (Chin, Jawline, Cheeks, Lips)', mainTreatmentSlug: 'dermal-fillers' },
        ],
      },
      {
        _key: 'step-sd-2',
        stepTitle: 'Step 2 — Consultation-Led Injectable Options',
        stepDescription: 'Additional injectable options that may be suitable for your goals will be discussed at your face-to-face consultation. Suitable injectable options are always discussed in person — never online or in advance.\n\n⏱ Timing: Discussed and planned at your consultation. Scheduled separately from Step 1 where appropriate.',
        treatments: [
          { _key: 'tl-sd-2a', name: 'Suitable injectable options — discussed at consultation', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-sd-3',
        stepTitle: 'Step 3 — Skin Quality Finish',
        stepDescription: 'Once facial structure has been enhanced, skin boosters help the skin itself match the new definition — improving texture, glow and hydration so the result looks and feels complete.\n\n⏱ Timing: Typically 2–4 weeks after structural treatment has settled. Can be repeated every 3–6 months for ongoing maintenance.',
        treatments: [
          { _key: 'tl-sd-3a', name: 'Skin Boosters', mainTreatmentSlug: 'skin-boosters' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-sd-1', q: 'Will the result look natural?', a: 'The aim is to improve proportion and balance, not to create an obvious or over-filled result. We work with your facial anatomy and natural structure at every stage.' },
      { _key: 'faq-sd-2', q: 'How long do results last?', a: 'Duration depends on the area treated, the product used and individual factors. Many facial filler results can last from several months to over a year. This is discussed in detail at your consultation.' },
      { _key: 'faq-sd-3', q: 'Can I add more definition in a second session?', a: 'Yes. We often build results gradually across two or more sessions rather than placing everything at once. This gives a more natural and controlled outcome.' },
      { _key: 'faq-sd-4', q: 'What injectable options will be discussed at consultation?', a: 'Suitable injectable options relevant to your goals and facial anatomy will be discussed in person at your face-to-face consultation. These options cannot be confirmed in advance.' },
    ],
    ideal: 'Ideal for clients wanting chin projection, jawline definition, cheek enhancement, lip shape or overall facial balance improvement.',
  },

  /* ── PACKAGE 6 — Non-Surgical Lift ───────────────────────── */
  {
    _type: 'treatment',
    _id:   'treatment-full-face-refresh',  // reuses existing doc ID
    num:   '06',
    label: 'Non-Surgical Lift',
    slug:  { _type: 'slug', current: 'non-surgical-lift' },
    tagline: 'Lift, support and refine — without going under the knife.',
    concern: 'Sagging, jowls, loss of lift — without surgery.',
    description:
      'Our answer to sagging and jowls without surgery. We always lift first — using HIFU ultrasound or a thread lift — because energy-based lifting performed over fresh filler can break the filler down. Once the lift has settled (usually 4–6 weeks), dermal fillers or biostimulators add structural support where needed, and skin boosters or polynucleotides complete the result.\n\nThis is a staged plan over several weeks — the order and timing exist for your safety and to protect your results.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'HIFU/threads and fillers are performed in separate, spaced sessions — the sequence is planned by your practitioner. Results can help improve the appearance of sagging and jowls; this is not equivalent to surgical facelift results.',
    seoTitle: 'Non-Surgical Facelift Newcastle | Non-Surgical Lift Plan — Kensley Aesthetics',
    seoDescription: 'Address sagging and jowls without surgery. HIFU, thread lift, dermal fillers and skin boosters in a staged plan at Kensley Aesthetics, Newcastle.',
    benefits: [
      'Addresses sagging and jowls without surgery',
      'HIFU or thread lift always performed first — a safety requirement',
      'Dermal fillers or biostimulators add structural support after the lift settles',
      'Skin boosters complete the result with improved skin quality',
      'Staged plan with sessions spaced for safety',
    ],
    steps: [
      {
        _key: 'step-nl-1',
        stepTitle: 'Step 1 — Lift First (The Order is a Safety Requirement)',
        stepDescription: 'We always create the lift before adding any injectable volume. Energy-based treatments (HIFU) or thread lifts performed over fresh filler can break the filler down and compromise your results. Starting with the lift is non-negotiable.\n\n⏱ Timing: This is your first treatment session. Allow 4–6 weeks for the lift to settle before moving to Step 2.',
        treatments: [
          { _key: 'tl-nl-1a', name: 'HIFU Ultrasound Lifting', mainTreatmentSlug: 'hifu' },
          { _key: 'tl-nl-1b', name: 'Thread Lift (PDO or Aptos)', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-nl-2',
        stepTitle: 'Step 2 — Structural Support (4–6 Weeks After Step 1)',
        stepDescription: 'Once the lift has settled, we add structural support where needed using dermal fillers or biostimulators. This step is not required for every client — suitability is assessed at your review appointment after Step 1.\n\n⏱ Timing: Performed 4–6 weeks after Step 1. This gap is a safety requirement, not a preference.',
        treatments: [
          { _key: 'tl-nl-2a', name: 'Dermal Fillers', mainTreatmentSlug: 'dermal-fillers' },
          { _key: 'tl-nl-2b', name: 'Biostimulators (Collagen-Stimulating Injectables)', mainTreatmentSlug: 'biostimulators' },
        ],
      },
      {
        _key: 'step-nl-3',
        stepTitle: 'Step 3 — Skin Quality Finish',
        stepDescription: 'The final step focuses on the skin itself — improving texture, hydration and glow so the surface quality matches the lift and structural work beneath.\n\n⏱ Timing: Introduced after Step 2 has settled, typically 2–4 weeks later. Can be repeated every 3–6 months for maintenance.',
        treatments: [
          { _key: 'tl-nl-3a', name: 'Skin Boosters', mainTreatmentSlug: 'skin-boosters' },
          { _key: 'tl-nl-3b', name: 'Polynucleotides', mainTreatmentSlug: 'regenerative-treatments' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-nl-1', q: 'Why must the lift always come first?', a: 'Energy-based lifting treatments (such as HIFU) performed over fresh filler can break the filler down and damage your results. Lifting first is a clinical safety requirement, not just a preference.' },
      { _key: 'faq-nl-2', q: 'How long does the full plan take?', a: 'The full plan typically runs over 8–12 weeks from first to last session, with gaps built in for safety and optimal results.' },
      { _key: 'faq-nl-3', q: 'Do I need all three steps?', a: 'Not necessarily. The full plan is built at consultation based on your goals, facial structure and suitability. Some clients may only need one or two of the steps.' },
      { _key: 'faq-nl-4', q: 'Is this as effective as a surgical facelift?', a: 'Non-surgical approaches can help improve the appearance of sagging and jowls, but results are different from surgery and will vary by individual. Your practitioner will discuss realistic expectations at your consultation.' },
    ],
    ideal: 'Ideal for clients noticing sagging, jowls or loss of facial lift who want a non-surgical staged plan.',
  },

  /* ── PACKAGE 7 — Under-Eye Refresh ───────────────────────── */
  {
    _type: 'treatment',
    _id:   'treatment-under-eye-refresh',  // new document
    num:   '07',
    label: 'Under-Eye Refresh',
    slug:  { _type: 'slug', current: 'under-eye-refresh' },
    tagline: 'Two causes, two solutions — assessed and personalised for you.',
    concern: 'Dark circles, hollows, tired-looking eyes.',
    description:
      'Tired eyes have two different causes — and two different answers. If your under-eye area has lost volume (hollowing), tear trough filler may be suitable. If the issue is skin quality — thin, crepey or darkened skin — regenerative treatments like polynucleotides or PRP are usually the better route.\n\nThe under-eye area is delicate, and not everyone is suitable for filler here. Your practitioner will assess you in person and recommend one pathway — we never stack every treatment together.',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Suitability for tear trough filler is assessed face-to-face; people with under-eye bags, festoons or very thin skin are often better suited to alternatives.',
    seoTitle: 'Tear Trough & Under-Eye Treatment Newcastle | Under-Eye Refresh — Kensley Aesthetics',
    seoDescription: 'Address dark circles, hollows and tired-looking eyes with our Under-Eye Refresh plan. Personalised assessment at Kensley Aesthetics, Newcastle.',
    benefits: [
      'Two distinct pathways based on your specific under-eye concern',
      'Tear trough filler for hollowing and volume loss',
      'Polynucleotides or PRP for skin quality and dark circles',
      'Never stacking multiple treatments — one assessed pathway per client',
      'Delicate area treated by experienced practitioners only',
    ],
    steps: [
      {
        _key: 'step-ue-1',
        stepTitle: 'Step 1 — Assessment (Always First)',
        stepDescription: 'The under-eye area is one of the most delicate areas to treat. Before any treatment is recommended, your practitioner will assess the specific cause of your concern — whether it is volume loss (hollowing), skin quality (thin or darkened skin), or a combination. Only one pathway is recommended per client.\n\n⏱ Timing: This happens at your face-to-face consultation before any treatment is planned.',
        treatments: [
          { _key: 'tl-ue-1a', name: 'In-Person Assessment — Tear Trough Suitability Check', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-ue-2',
        stepTitle: 'Pathway A — Volume Loss (Hollowing)',
        stepDescription: 'If the main concern is hollowing or loss of volume beneath the eye, tear trough filler may be the appropriate pathway. Not everyone is suitable — under-eye bags, festoons or very thin skin are usually better served by alternatives. Suitability is confirmed at assessment.\n\n⏱ Timing: Single session. A review is scheduled 4–6 weeks later to assess results.',
        treatments: [
          { _key: 'tl-ue-2a', name: 'Tear Trough Dermal Filler', mainTreatmentSlug: 'dermal-fillers' },
        ],
      },
      {
        _key: 'step-ue-3',
        stepTitle: 'Pathway B — Skin Quality (Crepey, Thin or Dark Skin)',
        stepDescription: 'If the concern is skin quality — thin, crepey or darkened under-eye skin — regenerative treatments are usually the better and safer option. These work by improving skin thickness, hydration and repair. A course of sessions is typically recommended.\n\n⏱ Timing: Sessions spaced 4–6 weeks apart. A course of 2–3 sessions is common.',
        treatments: [
          { _key: 'tl-ue-3a', name: 'Polynucleotides', mainTreatmentSlug: 'regenerative-treatments' },
          { _key: 'tl-ue-3b', name: 'PRP (Platelet-Rich Plasma)', mainTreatmentSlug: 'regenerative-treatments' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-ue-1', q: 'How do I know which pathway is right for me?', a: 'This is assessed at your face-to-face consultation. Your practitioner will examine the under-eye area in person and recommend one specific pathway — not a combination of both.' },
      { _key: 'faq-ue-2', q: 'Is tear trough filler safe?', a: 'Tear trough filler can be appropriate for suitable candidates, but the under-eye area carries specific risks. Suitability is assessed carefully before any treatment is recommended. Clients with under-eye bags, festoons or very thin skin are often better suited to alternatives.' },
      { _key: 'faq-ue-3', q: 'Can dark circles be fully removed?', a: 'Dark circles have multiple causes, including genetics, pigmentation, blood vessels and volume loss. Treatments can help improve their appearance, but results vary by individual and cause. No treatment can guarantee complete removal.' },
      { _key: 'faq-ue-4', q: 'How many regenerative treatment sessions will I need?', a: 'A course of 2–3 sessions is typical, spaced 4–6 weeks apart. Results build gradually as the skin repairs and thickens.' },
    ],
    ideal: 'Ideal for clients with dark circles, under-eye hollowing, tired-looking eyes, thin under-eye skin or crepey texture in the under-eye area.',
  },

  /* ── PACKAGE 8 — Neck & Décolletage Renewal ──────────────── */
  {
    _type: 'treatment',
    _id:   'treatment-neck-renewal',       // reuses existing doc ID
    num:   '08',
    label: 'Neck & Décolletage Renewal',
    slug:  { _type: 'slug', current: 'neck-renewal' },
    tagline: 'Tighten, hydrate and maintain — for a neck and chest that match your face.',
    concern: 'Crepey neck, "tech neck" lines, sun-damaged chest.',
    description:
      'The neck and chest age faster than the face — the skin is thinner and often forgotten in skincare. We tighten first with HIFU, RF microneedling or threads, then remodel and deeply hydrate the skin with Profhilo, skin boosters or polynucleotides. A simple maintenance routine keeps the results.\n\n("Décolletage" simply means the chest and neckline area.)',
    ctaLabel: 'Book a Consultation',
    caveatLine: 'Tightening and injectable sessions are spaced apart; a typical plan runs over 8–12 weeks.',
    seoTitle: 'Neck & Chest Rejuvenation Newcastle | Neck & Décolletage Renewal — Kensley Aesthetics',
    seoDescription: 'Tighten and rejuvenate the neck and chest with HIFU, RF microneedling, skin boosters and polynucleotides at Kensley Aesthetics, Newcastle.',
    benefits: [
      'Targets crepey neck skin, tech neck lines and sun-damaged chest',
      'Tightening always performed first — before injectable hydration',
      'Skin boosters and polynucleotides remodel and deeply hydrate',
      'LED and medical skincare maintain results between sessions',
      'Plan runs over 8–12 weeks with sessions safely spaced',
    ],
    steps: [
      {
        _key: 'step-nd-1',
        stepTitle: 'Step 1 — Tighten First',
        stepDescription: 'The first priority for the neck is tightening loose or crepey skin. Energy-based or thread treatments create the lift and tightening foundation before hydration treatments are introduced. As with the Non-Surgical Lift plan, tightening always comes before injectable sessions.\n\n⏱ Timing: Your first session. Allow 2–4 weeks before introducing injectable hydration treatments.',
        treatments: [
          { _key: 'tl-nd-1a', name: 'HIFU (Neck & Jaw)', mainTreatmentSlug: 'hifu' },
          { _key: 'tl-nd-1b', name: 'RF Microneedling (Neck)', mainTreatmentSlug: 'rf-microneedling' },
          { _key: 'tl-nd-1c', name: 'Thread Lift (Neck)', mainTreatmentSlug: '' },
        ],
      },
      {
        _key: 'step-nd-2',
        stepTitle: 'Step 2 — Remodel & Deeply Hydrate (2–4 Weeks After Step 1)',
        stepDescription: 'Once tightening has been established, we introduce injectable skin-quality treatments to remodel and deeply hydrate the neck and chest skin. These treatments improve crepey texture, skin thickness and overall appearance.\n\n⏱ Timing: Introduced 2–4 weeks after tightening. Most skin boosters require a course of 2+ sessions, typically spaced 4 weeks apart.',
        treatments: [
          { _key: 'tl-nd-2a', name: 'Profhilo (Neck)', mainTreatmentSlug: 'skin-boosters' },
          { _key: 'tl-nd-2b', name: 'Skin Boosters', mainTreatmentSlug: 'skin-boosters' },
          { _key: 'tl-nd-2c', name: 'Polynucleotides', mainTreatmentSlug: 'regenerative-treatments' },
        ],
      },
      {
        _key: 'step-nd-3',
        stepTitle: 'Step 3 — Maintenance (Ongoing)',
        stepDescription: 'A consistent maintenance routine helps sustain results and keep the skin healthy between treatment sessions. LED therapy can be added at any visit, and a medical-grade skincare routine provides daily support.\n\n⏱ Timing: Ongoing between and after the main treatment sessions.',
        treatments: [
          { _key: 'tl-nd-3a', name: 'LED Light Therapy', mainTreatmentSlug: '' },
          { _key: 'tl-nd-3b', name: 'Medical-Grade Skincare', mainTreatmentSlug: '' },
        ],
      },
    ],
    faqs: [
      { _key: 'faq-nd-1', q: 'Why does the neck age faster than the face?', a: 'Neck skin is thinner than facial skin and receives less daily skincare attention. It is also more exposed to UV and often shows the earliest signs of laxity and crepey texture.' },
      { _key: 'faq-nd-2', q: 'Can the chest (décolletage) also be treated?', a: 'Yes. The chest is treated alongside the neck in this plan. Crepey texture, fine lines and sun-related changes on the upper chest respond well to skin-quality and tightening treatments.' },
      { _key: 'faq-nd-3', q: 'How long does the full plan take?', a: 'A typical plan runs over 8–12 weeks, with tightening and injectable sessions scheduled at separate appointments.' },
      { _key: 'faq-nd-4', q: 'Do I need to treat my face as well as my neck?', a: 'Not necessarily, but many clients find that treating the face and neck together creates a more consistent and natural-looking result. This can be discussed at your consultation.' },
    ],
    ideal: 'Ideal for clients with crepey neck skin, horizontal neck lines, tech neck, sagging below the jawline, or sun-damaged décolletage.',
  },

]

/* ─────────────────────────────────────────────────────────────
   DOCUMENTS TO DELETE (retired packages)
   ───────────────────────────────────────────────────────────── */
const idsToDelete = [
  'treatment-smooth-lines',
  'treatment-stay-youthful',
]

/* ─────────────────────────────────────────────────────────────
   RUNNER
   ───────────────────────────────────────────────────────────── */
async function run() {
  console.log('🚀 Starting package data push to Sanity...\n')

  // Create or replace all 8 packages
  const transaction = client.transaction()
  for (const doc of packages) {
    transaction.createOrReplace(doc)
  }
  await transaction.commit()
  console.log(`✅ Pushed ${packages.length} packages to Sanity:`)
  packages.forEach(p => console.log(`   • ${p.label} (${p.slug.current})`))

  // Delete retired packages
  console.log('\n🗑  Deleting retired packages...')
  for (const id of idsToDelete) {
    try {
      await client.delete(id)
      console.log(`   • Deleted: ${id}`)
    } catch (err) {
      console.warn(`   ⚠ Could not delete ${id}: ${err.message} (may not exist)`)
    }
  }

  console.log('\n✨ Done! All 8 packages are now live in Sanity.')
  console.log('\nNext steps:')
  console.log('  1. Upload images for the 2 new packages (even-and-bright, under-eye-refresh) in Sanity Studio')
  console.log('  2. Re-add slug redirects in App.js once you verify all 8 packages display correctly')
  console.log('  3. The new slugs are:')
  packages.forEach(p => console.log(`     /treatments/${p.slug.current}`))
}

run().catch(err => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
