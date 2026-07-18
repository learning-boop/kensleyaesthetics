/**
 * push-extra-treatments.mjs
 *
 * Creates the 9 additional individual treatments as mainTreatment documents
 * in Sanity so they can be edited in the Studio and have their own pages.
 *
 * Run: node studio-renova/scripts/push-extra-treatments.mjs
 */

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'puzajrus',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: 'skECACuhN7I6sfL9RkYv7W2lanykaSiNMhfDFGnT9bu1m2eMifzzhobTVILcxWA3pUTxJ22qfLc2AVEicgzMXF0bh8is2oCzx0e14oPczyNW8TRexoAYBDNk0AH0roku8024CayM9UCSnD296tSV0ai0TOEOAFYSVjAEcljplwn9V4URycOJ',
  useCdn: false,
})

const treatments = [
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-chemical-peel',
    num:   '09',
    label: 'Chemical Peel',
    slug:  { _type: 'slug', current: 'chemical-peel' },
    tagline: 'Resurface and refresh the skin surface, targeting texture and tone.',
    description:
      'Chemical peels use carefully selected acids to remove dead skin cells and encourage fresh, healthy skin to surface. They can improve texture, uneven tone, mild pigmentation, fine lines and dullness.\n\nPeel strength is chosen to match your skin type and concern — from gentle superficial peels to deeper medical-grade options. Multiple sessions are typically recommended for progressive results.',
    benefits: [
      'Resurfaces and smooths skin texture',
      'Reduces the appearance of uneven tone and mild pigmentation',
      'Stimulates fresh cell turnover',
      'Can be tailored to all skin types with appropriate assessment',
      'Works well alongside other treatments in a skin plan',
    ],
    ideal: 'Ideal for clients with dull, uneven or textured skin, mild pigmentation, fine lines or anyone wanting a regular skin refresh treatment.',
    faqs: [
      { _key: 'faq-cp-1', q: 'Will my skin peel visibly?', a: 'This depends on the depth of peel chosen. Superficial peels may cause minimal visible peeling, while deeper peels can result in more noticeable shedding over several days. Your practitioner will explain what to expect.' },
      { _key: 'faq-cp-2', q: 'How many sessions will I need?', a: 'A course of 4–6 sessions is typical for best results, usually spaced 3–4 weeks apart. Maintenance peels can be done less frequently to sustain results.' },
      { _key: 'faq-cp-3', q: 'Is SPF required after a peel?', a: 'Yes — SPF is essential after any chemical peel. Freshly treated skin is more sensitive to UV, and sun exposure can trigger pigmentation or compromise your results.' },
      { _key: 'faq-cp-4', q: 'Can peels be combined with other treatments?', a: 'Yes, peels are often used alongside other treatments in a skin plan. Surface treatments and injectable treatments are always scheduled on separate visits.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-hydro2-facial',
    num:   '10',
    label: '3D HydrO2 Facial',
    slug:  { _type: 'slug', current: 'hydro2-facial' },
    tagline: 'Advanced facial combining oxygen, hydration and ultrasound technology.',
    description:
      'The 3D HydrO2 Facial is a multi-step advanced facial combining oxygen infusion, deep hydration and ultrasound technology to cleanse, exfoliate, extract and nourish the skin in a single session.\n\nSuitable for most skin types, it delivers an immediate glow with no downtime — making it a popular choice before events or as part of an ongoing skin health plan.',
    benefits: [
      'Combines cleansing, exfoliation, hydration and infusion in one session',
      'Suitable for most skin types with no downtime',
      'Immediate radiance and improved skin texture',
      'Prepares skin to receive other treatments more effectively',
      'Works well as a regular maintenance treatment',
    ],
    ideal: 'Ideal for clients wanting an instant glow, improved skin hydration and a relaxing treatment with no downtime.',
    faqs: [
      { _key: 'faq-h2-1', q: 'Is there any downtime?', a: 'No. The 3D HydrO2 Facial is designed for no downtime. Most clients notice an immediate improvement in radiance and skin feel.' },
      { _key: 'faq-h2-2', q: 'How often can I have this treatment?', a: 'It can be performed monthly as part of a regular skin maintenance routine, or more frequently in the lead-up to an event.' },
      { _key: 'faq-h2-3', q: 'Can it be combined with other treatments?', a: 'Yes. It works well alongside injectable treatments and is often used in the same plan as skin boosters or peels — though not on the same day as injectables.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-mesotherapy',
    num:   '11',
    label: 'Mesotherapy',
    slug:  { _type: 'slug', current: 'mesotherapy' },
    tagline: 'Microinjections delivering vitamins and actives directly into the skin.',
    description:
      'Mesotherapy involves a series of tiny microinjections that deliver a customised cocktail of vitamins, minerals, amino acids and hyaluronic acid directly into the skin. This targets specific concerns at the cellular level — improving hydration, radiance, fine lines and overall skin health.\n\nThe treatment is highly customisable and can be tailored to your specific skin concern and goals.',
    benefits: [
      'Delivers active ingredients precisely where the skin needs them',
      'Improves hydration, glow and fine line appearance',
      'Highly customisable to individual skin concerns',
      'Minimal downtime — small marks settle quickly',
      'Suitable for face, neck and décolletage',
    ],
    ideal: 'Ideal for clients wanting to improve skin radiance, hydration and fine lines with a targeted, customised approach.',
    faqs: [
      { _key: 'faq-mt-1', q: 'Does mesotherapy hurt?', a: 'A fine needle is used for the microinjections. Discomfort is generally minimal, and topical numbing can be applied beforehand if needed.' },
      { _key: 'faq-mt-2', q: 'How many sessions are recommended?', a: 'A course of 3–6 sessions is typical, spaced 2–4 weeks apart. Maintenance sessions can be done every few months to sustain results.' },
      { _key: 'faq-mt-3', q: 'What areas can be treated?', a: 'Mesotherapy can be used on the face, neck, décolletage and hands. Your practitioner will recommend the most suitable areas based on your goals.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-led-light-therapy',
    num:   '12',
    label: 'LED Light Therapy',
    slug:  { _type: 'slug', current: 'led-light-therapy' },
    tagline: 'Clinically proven light wavelengths to calm, heal and rejuvenate.',
    description:
      'LED light therapy uses specific wavelengths of light to stimulate cellular activity in the skin. Different wavelengths target different concerns — red light supports collagen production and skin repair, while blue light targets acne-causing bacteria.\n\nIt is a non-invasive, painless treatment with no downtime. It works well as a standalone maintenance treatment or added onto other treatments to support healing and enhance results.',
    benefits: [
      'Supports collagen production and skin repair (red light)',
      'Targets acne-causing bacteria (blue light)',
      'Non-invasive and painless — no downtime',
      'Can be added to any appointment to enhance results',
      'Suitable for sensitive skin and all skin types',
    ],
    ideal: 'Ideal for clients managing acne, post-treatment recovery, general skin health maintenance or anyone wanting a gentle, relaxing skin treatment.',
    faqs: [
      { _key: 'faq-led-1', q: 'Is LED light therapy safe?', a: 'Yes. LED light therapy is non-invasive, uses no UV light and is safe for all skin types. It is often used on sensitive or post-treatment skin.' },
      { _key: 'faq-led-2', q: 'How many sessions do I need?', a: 'It can be used as a one-off add-on or as a standalone course. Regular sessions (weekly or monthly) provide the most sustained results.' },
      { _key: 'faq-led-3', q: 'Can it be combined with other treatments?', a: 'Yes — LED therapy is one of the most versatile treatments to combine. It can be added after peels, microneedling or injectable sessions to support healing.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-thread-lift',
    num:   '13',
    label: 'Thread Lift',
    slug:  { _type: 'slug', current: 'thread-lift' },
    tagline: 'PDO or Aptos threads to physically lift sagging skin without surgery.',
    description:
      'A thread lift uses dissolvable threads (PDO or Aptos) inserted beneath the skin to physically lift and reposition sagging tissue. The threads also stimulate a collagen response as they dissolve, supporting longer-term skin quality improvement.\n\nIt is a minimally invasive alternative to surgical lifting, typically performed under local anaesthetic. Suitability is assessed face-to-face — results vary by individual and the degree of laxity present.',
    benefits: [
      'Physically lifts and repositions sagging skin',
      'Stimulates collagen as threads dissolve over time',
      'Minimally invasive — performed under local anaesthetic',
      'Visible lift with results that continue to improve',
      'Works well alongside HIFU in a staged lifting plan',
    ],
    ideal: 'Ideal for clients with mild to moderate skin sagging or laxity who want a more defined lift than energy-based treatments alone can provide.',
    faqs: [
      { _key: 'faq-tl-1', q: 'How long does a thread lift last?', a: 'Most clients see results lasting 1–2 years, though this varies by individual, the threads used and how the skin responds. A review appointment is scheduled after treatment to assess results.' },
      { _key: 'faq-tl-2', q: 'Is there downtime?', a: 'There may be some mild swelling, bruising or tenderness in the days following treatment. Most clients return to normal activities within a few days.' },
      { _key: 'faq-tl-3', q: 'Can thread lift be combined with fillers or HIFU?', a: 'Yes — thread lift is often used as part of a staged plan alongside HIFU or dermal fillers. The order and timing of treatments is planned at consultation for safety and best results.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-profhilo',
    num:   '14',
    label: 'Profhilo',
    slug:  { _type: 'slug', current: 'profhilo' },
    tagline: 'High-concentration hyaluronic acid that bio-remodels skin from within.',
    description:
      'Profhilo is one of the highest concentrations of hyaluronic acid available as an injectable. Unlike dermal fillers, it does not add volume or shape — instead it spreads through the skin tissue to deeply hydrate and stimulate collagen and elastin production, improving skin quality, laxity and glow.\n\nIt is injected at five specific points on each side of the face using the BAP (Bio Aesthetic Points) technique. A standard course is two sessions, one month apart, with maintenance sessions typically every 6 months.',
    benefits: [
      'Deeply hydrates and bio-remodels skin from within',
      'Improves skin laxity, texture and glow',
      'Does not add volume — improves quality, not shape',
      'Minimal injection points — five per side using the BAP technique',
      'Standard course of two sessions, one month apart',
    ],
    ideal: 'Ideal for clients with skin laxity, dehydration, crepey texture or anyone wanting to improve overall skin quality and radiance.',
    faqs: [
      { _key: 'faq-pf-1', q: 'How is Profhilo different from a skin booster?', a: 'Profhilo has an exceptionally high hyaluronic acid concentration and is specifically designed to bio-remodel tissue — improving both hydration and the production of collagen and elastin. While some skin boosters also improve hydration, Profhilo\'s mechanism and concentration is distinct.' },
      { _key: 'faq-pf-2', q: 'How many sessions do I need?', a: 'The standard course is two sessions, one month apart. Maintenance is typically recommended every 6 months to sustain results.' },
      { _key: 'faq-pf-3', q: 'Can Profhilo be used on the neck and body?', a: 'Yes. Profhilo is commonly used on the neck, décolletage, hands and knees as well as the face.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-prp',
    num:   '15',
    label: 'PRP (Platelet-Rich Plasma)',
    slug:  { _type: 'slug', current: 'prp' },
    tagline: 'Your own growth factors used to regenerate and repair skin tissue.',
    description:
      'PRP (Platelet-Rich Plasma) uses your own blood to support skin regeneration. A small blood sample is taken, processed to concentrate the growth factors, and then reintroduced into the skin — either via microinjections or combined with microneedling.\n\nThe concentrated growth factors stimulate collagen production, support tissue repair and improve overall skin quality. It is one of the most natural regenerative treatments available.',
    benefits: [
      'Uses your own biology — no synthetic fillers or foreign materials',
      'Stimulates collagen and supports tissue repair',
      'Improves skin texture, tone and overall quality',
      'Can be combined with microneedling for enhanced results',
      'Suitable for face, neck, under-eye area and scalp (hair loss)',
    ],
    ideal: 'Ideal for clients wanting a natural regenerative approach to skin repair, collagen stimulation, acne scarring, or hair loss.',
    faqs: [
      { _key: 'faq-prp-1', q: 'Is PRP safe?', a: 'Yes. Because PRP uses your own blood, there is no risk of allergic reaction. It is one of the most natural treatments available.' },
      { _key: 'faq-prp-2', q: 'How many sessions are needed?', a: 'A course of 3 sessions is typically recommended, spaced 4–6 weeks apart, followed by annual maintenance.' },
      { _key: 'faq-prp-3', q: 'Can PRP be combined with microneedling?', a: 'Yes — PRP is commonly combined with microneedling. The microneedling channels allow the growth factors to penetrate more deeply into the skin, enhancing the regenerative effect.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-polynucleotides',
    num:   '16',
    label: 'Polynucleotides',
    slug:  { _type: 'slug', current: 'polynucleotides' },
    tagline: 'DNA-repair molecules that deeply restore skin health and elasticity.',
    description:
      'Polynucleotides (PDRN/PN) are injectable molecules derived from highly purified salmon or trout DNA. They work by activating skin cell receptors that drive repair, regeneration and new tissue formation — improving skin quality, elasticity, hydration and thickness.\n\nThey are particularly effective for delicate areas such as the under-eye, neck and hands, and are often used as part of a skin repair or scar-reduction plan.',
    benefits: [
      'Activates repair and regeneration at a cellular level',
      'Improves skin elasticity, thickness and hydration',
      'Particularly effective for the under-eye, neck and delicate areas',
      'Supports scar reduction and skin repair post-treatment',
      'Well tolerated with minimal downtime',
    ],
    ideal: 'Ideal for clients with skin laxity, crepey or thin skin, dark circles, acne scarring or anyone wanting deep cellular skin repair.',
    faqs: [
      { _key: 'faq-pn-1', q: 'What is the difference between polynucleotides and PRP?', a: 'Both are regenerative treatments, but they work differently. PRP uses your own platelet growth factors, while polynucleotides are pharmaceutical-grade DNA molecules that directly activate cellular repair receptors. Both can be used in a skin plan, often targeting different aspects of repair.' },
      { _key: 'faq-pn-2', q: 'How many sessions are recommended?', a: 'A course of 2–3 sessions is typical, spaced 2–4 weeks apart. Results continue to improve as the skin repairs and regenerates.' },
      { _key: 'faq-pn-3', q: 'Are polynucleotides suitable for the under-eye area?', a: 'Yes. Polynucleotides are one of the preferred options for the under-eye area, particularly for thin, crepey or darkened skin. Suitability is confirmed at your face-to-face consultation.' },
    ],
  },
  {
    _type: 'mainTreatment',
    _id:   'main-treatment-medical-grade-skincare',
    num:   '17',
    label: 'Medical-Grade Skincare',
    slug:  { _type: 'slug', current: 'medical-grade-skincare' },
    tagline: 'Clinician-prescribed homecare plans that support and extend results.',
    description:
      'Medical-grade skincare uses clinician-prescribed formulations with active ingredients at concentrations not available over the counter. A personalised homecare plan is built around your specific skin concern and the treatments you are receiving — ensuring your skin is prepared, supported and maintained between clinic visits.\n\nIt is not optional in many treatment plans — particularly for pigmentation, acne and post-treatment recovery, where homecare is an essential part of the result.',
    benefits: [
      'Active ingredients at concentrations not available in retail products',
      'Personalised to your skin concern and treatment plan',
      'Prepares skin for treatment and supports recovery',
      'Extends and protects in-clinic results',
      'Essential for pigmentation and acne plans — not just an optional add-on',
    ],
    ideal: 'Ideal for any client undergoing treatment who wants to maximise and maintain results, or for those seeking a clinician-guided daily routine.',
    faqs: [
      { _key: 'faq-sk-1', q: 'Do I need medical-grade skincare alongside my treatment?', a: 'For many treatment plans — particularly pigmentation, acne and post-treatment recovery — homecare is a required part of the plan, not optional. Your practitioner will advise what is needed for your specific programme.' },
      { _key: 'faq-sk-2', q: 'Is it more expensive than pharmacy skincare?', a: 'Medical-grade products typically cost more than over-the-counter alternatives, but they contain active ingredients at higher concentrations that are clinically shown to make a difference. Your plan will focus on what your skin actually needs.' },
      { _key: 'faq-sk-3', q: 'Will I be recommended a full skincare routine?', a: 'Your homecare plan will be kept practical and focused. Most clients start with a targeted routine of 2–4 products and build from there.' },
    ],
  },
]

async function run() {
  console.log('🚀 Pushing 9 extra individual treatments to Sanity...\n')

  const transaction = client.transaction()
  for (const doc of treatments) {
    transaction.createOrReplace(doc)
  }
  await transaction.commit()

  console.log(`✅ Pushed ${treatments.length} treatments:`)
  treatments.forEach(t => console.log(`   • ${t.label} (${t.slug.current})`))
  console.log('\n✨ Done! All treatments are now editable in Sanity Studio under "Main Treatment".')
  console.log('   Upload images for each in the Studio to complete the pages.')
}

run().catch(err => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
