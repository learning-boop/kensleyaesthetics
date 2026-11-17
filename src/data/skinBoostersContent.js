/**
 * Skin Boosters — page content (Nov 2026 SEO / AEO / GEO content plan,
 * "Kensley_Skin_Boosters_SEO_Updated_Newcastle_2026.docx").
 *
 * Single source of truth for:
 *   • the local preview, before anything is pushed (pages fall back to this
 *     file whenever Sanity has not received the new fields yet)
 *   • scripts/push-skin-boosters.mjs, which writes this content to Sanity
 *
 * Once pushed, Sanity wins: editors change the copy in Studio and the site
 * reads it from there. This file is then only a fallback.
 *
 * Exosomes is information-only (doc's legal/regulatory hold): its buttons
 * book a general skin-quality consultation, never an exosome procedure.
 *
 * Text format used in every `body` / `description` / `cardBody` field:
 *   - a blank line starts a new paragraph
 *   - lines starting with "- " become a bullet list
 *   - a line starting with "> " becomes a highlighted quote
 */

export const SKIN_BOOSTERS_SLUG = 'skin-boosters';
export const SKIN_BOOSTERS_MAIN_ID = 'mainTreatment-skin-boosters';

/* ── Main page: /main-treatments/skin-boosters ────────────────────── */
export const SKIN_BOOSTERS_MAIN = {
  label: 'Skin Boosters',
  image: 'https://cdn.sanity.io/images/puzajrus/production/08c2daa8a6f227fa507ec588ee50163553144cc2-500x500.png',
  seoTitle: 'Skin Boosters Newcastle | Skin Quality Options | Kensley',
  seoDescription: 'Explore skin boosters in Newcastle: Profhilo, SKINVIVE, NCTF 135, polynucleotides and exosome information. Compare options and consultations in Jesmond.',
  heroTitle: 'Skin Boosters in Newcastle upon Tyne',
  tagline: 'Skin Booster Consultations in Jesmond: Where to Begin',
  description: `Interested in improving the way your skin feels or looks, but unsure which skin booster to ask about? You may have come across Profhilo, SKINVIVE, NCTF 135, polynucleotides or exosomes and wondered whether these names describe the same thing.

They do not. They differ in composition, proposed mechanism, evidence, suitability and potential risks. At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, a skin-quality consultation starts with understanding your skin, medical history and expectations—not assuming every patient needs an injectable treatment.

You may be concerned about dryness, fine lines, texture or changes in skin appearance over time. Some of these concerns can be influenced by skincare habits, environmental exposure or medical conditions. A clinical discussion can help you identify what may be relevant before you decide what to do.`,
  heroCtaLabel: 'Book a Skin Booster Consultation',
  introSections: [
    {
      heading: 'What Are Skin Boosters and How Do They Differ?',
      body: `“Skin booster” is a broad aesthetic term rather than one single medical treatment. It is often used for products or approaches intended to address certain aspects of skin quality, such as hydration, surface smoothness or fine lines. Some products contain hyaluronic acid; others contain very different substances or are still being investigated.

Skin boosters are not interchangeable with a moisturiser, a facial treatment or a dermal filler used to change facial shape. Nor can they reliably correct every cause of pigmentation, wrinkles, scarring or skin laxity. Claims about deeper tissue repair, collagen production or “regeneration” need to be assessed against evidence for the exact product and procedure.`,
    },
    {
      heading: 'How Skin Hydration, Hyaluronic Acid and Texture Work',
      body: `Your skin has several layers. The outer barrier helps limit water loss and protect against irritation. Deeper layers contain collagen, elastin, other supporting components and a water-rich environment. Hyaluronic acid (HA) can bind water; in injectable products, its formulation and placement affect how it behaves within the skin. That does not mean every HA-based treatment works or lasts in the same way.

Polynucleotides are DNA-derived polymers, investigated for their possible influence on skin hydration and tissue responses. The clinical evidence is developing, but there are important gaps in understanding how consistently they work for different people.

Exosomes are small particles released by cells that carry biological signals. Interest in them has grown, but commercially sold “exosome” products differ considerably, and robust evidence for individual cosmetic products remains limited. Their regulatory status must be confirmed before any service is offered.`,
    },
    {
      heading: 'Which Skin Concerns Might Be Relevant?',
      body: `During a consultation you may wish to ask about skin dryness, dullness, uneven-looking texture, fine superficial lines, early changes in skin elasticity or concerns around delicate areas. Not every treatment is suitable for every skin concern, and some changes may have underlying medical or lifestyle causes.

For example, dark under-eye colour is not always caused by skin dehydration, and deeper folds do not necessarily respond to skin boosters. Active skin disease, allergies, previous procedures and the condition of your skin barrier can all change the advice you receive.`,
    },
  ],
  treatmentsHeading: 'Explore Five Skin Booster Topics in Newcastle',
  treatmentsIntro: 'The following five sections reflect Kensley\'s treatment menu. Each has its own educational page, with an individual assessment needed before treatment availability and suitability can be confirmed.',
  pageSections: [
    {
      heading: 'Skin Boosters vs Dermal Fillers: What Is the Difference?',
      body: `The distinction depends on the exact product. Many traditional dermal fillers are intended to add volume or contour to selected facial structures. Skin-quality treatments are often discussed for hydration or superficial texture instead. Yet some skin boosters also contain hyaluronic acid and involve injections, so the categories can overlap in everyday language.

If your main concern is lip shape, cheek projection or lower-face contour, you may find our Dermal Fillers information more relevant. If you are primarily interested in skin quality, a skin booster consultation may help clarify the options. There is no need to choose a product in advance.`,
      linkLabel: 'Explore Dermal Fillers',
      linkUrl: '/main-treatments/dermal-fillers',
    },
    {
      heading: 'What Happens at a Skin Booster Consultation in Jesmond?',
      body: `Your clinician should ask about your medical history, allergies, relevant medicines, pregnancy or breastfeeding where applicable, previous aesthetic procedures and what you are hoping to change. They should examine your skin and distinguish dryness, superficial lines, pigmentation, scarring, volume changes and active skin conditions where possible.

If a specific product is being considered, ask for its full name and manufacturer, intended route of administration, evidence for the proposed area, contraindications, potential adverse effects, total cost and follow-up plan. You should also understand how complications would be managed and have time to decide without pressure.`,
    },
    {
      heading: 'Skin Booster Recovery, Aftercare and Possible Risks',
      body: `The process differs considerably between the five topics on this page. For an injectable HA product, preparation, cleansing, consent and product-specific administration may be involved. Temporary injection marks, redness, swelling, small raised areas, tenderness or bruising can occur. These often settle but there is no fixed recovery time for everybody.

Other adverse effects can include infection, allergy, inflammation, nodules or delayed reactions. Rare vascular complications may occur with injectable gel products and require urgent recognition. Product-specific aftercare instructions are essential. A treatment using topical products or a skin-needling procedure has a different risk and recovery profile; never assume that all treatments described as “skin boosters” use the same technique.

Seek urgent medical attention for visual disturbance, severe or escalating pain, unusual skin colour changes or other concerning symptoms following an injectable procedure.`,
    },
    {
      heading: 'How Long Might Skin Booster Effects Last?',
      body: `There is no single duration that applies to every skin booster. The formulation, treatment site, technique, individual response and endpoint being assessed all matter. A change in how skin feels may not last as long as changes in another measured outcome, and published averages are not promises for an individual patient.

Some protocols may involve a series of appointments, but the number and spacing should come from the exact product's instructions and your clinician's assessment—not a universal “skin booster package”.`,
    },
    {
      heading: 'Skin Booster Prices in Newcastle',
      body: 'Costs depend on the specific product, treatment area, number of sessions and clinician. Ask for the full treatment quotation, including any review appointment and follow-up charges, before agreeing to proceed. Do not assume two products with similar advertising descriptions have the same price or treatment plan.',
      linkLabel: 'View Kensley Treatment Prices',
      linkUrl: '/prices',
    },
    {
      heading: 'Why Consider Kensley Aesthetics in Jesmond?',
      body: 'Kensley Aesthetics is a doctor-led aesthetic clinic based in Jesmond, Newcastle upon Tyne. A good consultation should identify who would assess you, who would perform any proposed procedure and how patient safety and follow-up are arranged. An appointment is an opportunity to make an informed choice—not a commitment to have treatment.',
      linkLabel: 'Learn More About Kensley Aesthetics',
      linkUrl: '/about',
    },
  ],
  faqHeading: 'Skin Boosters FAQs: Questions Before Booking',
  faqs: [
    {
      q: 'Which skin booster is best for me?',
      a: 'There is no universally best product. Your skin concern, medical history, treatment area, preferences and the evidence for the specific product all matter. An individual assessment can identify whether any of these options is appropriate.',
    },
    {
      q: 'Are skin boosters the same as dermal fillers?',
      a: 'Not always. Both categories may include hyaluronic acid injections, but a skin-quality product may be designed for hydration or texture rather than facial projection. The exact product, intended use and technique determine the distinction.',
    },
    {
      q: 'Do skin boosters make skin produce more collagen?',
      a: 'Some formulations are marketed with claims about collagen or tissue remodelling, but these claims should not be generalised to every product. Human clinical evidence varies and does not promise a particular response.',
    },
    {
      q: 'Can skin boosters remove wrinkles or acne scars?',
      a: 'They cannot be expected to remove all wrinkles or scars. Fine superficial lines or texture may respond differently from deeper folds and established scars. A consultation should assess the likely cause before recommending an approach.',
    },
    {
      q: 'Are skin boosters safe for sensitive skin?',
      a: 'Suitability depends on the product and the reason your skin is sensitive. Existing eczema, rosacea, allergies or active irritation may require different management. Never assume an injectable or cosmetic procedure is risk-free.',
    },
    {
      q: 'How many skin booster appointments will I need?',
      a: 'That depends on the particular product and treatment plan. Some approaches use one session with review; others are planned as a course. There is no standard number appropriate for everyone.',
    },
    {
      q: 'Is there downtime after skin booster treatment?',
      a: 'Temporary redness, swelling, bruising or small raised injection points are possible. Recovery varies with the treatment, site and individual. Plan around important events only after discussing likely recovery with your clinician.',
    },
    {
      q: 'Are exosomes the same as polynucleotides?',
      a: 'No. Exosomes are cell-released vesicles associated with biological signalling, while polynucleotides are DNA-derived polymers. Their evidence, formulation and UK regulatory considerations are different.',
    },
    {
      q: 'Can I book a consultation without choosing one of the five products?',
      a: 'Yes. You can discuss your skin concerns and ask which options, if any, may be relevant. You do not need to decide on a particular product before the appointment.',
    },
  ],
  ctaHeading: 'Book a Skin Booster Consultation in Jesmond, Newcastle',
  ctaBody: 'Whether your concern is dryness, texture or understanding the difference between these five approaches, a personalised assessment can help you decide what comes next.',
  ctaAddress: `Kensley Aesthetics
Old Brewery Court, 156 Sandyford Road
Jesmond, Newcastle upon Tyne, NE2 1XG`,
  ctaPhone: '0333 057 0295',
  ctaLabel: 'Book Your Consultation',
};

/* ── The 5 treatment pages: /main-treatments/skin-boosters/<slug> ──
 * `_id`      Sanity document id. Profhilo, Polynucleotides and Exosomes
 *            already exist (Profhilo's image is kept); SKINVIVE and NCTF 135
 *            are created.
 * `oldSlug`  slug before Nov 2026; the old URL 301-redirects to the new one.
 * `card*`    the row shown for this treatment on the main page.
 * `related`  slugs of related Skin Booster pages.
 */
export const SKIN_BOOSTERS_SUBS = [
  {
    _id: 'sub-treatment-skin-boosters-profhilo-skin-booster',
    oldSlug: 'profhilo-skin-booster',
    slug: 'profhilo-newcastle',
    num: 1,
    label: 'Profhilo',
    image: 'https://cdn.sanity.io/images/puzajrus/production/b25911a855032ccafc6172797bec6310770964e6-1536x1024.webp',
    cardTitle: 'Profhilo in Newcastle',
    cardBody: `Profhilo is a hyaluronic-acid-based injectable designed to address particular skin-quality concerns rather than build facial contours in the way a volumising filler might. Its formulation combines high- and low-molecular-weight HA in a hybrid complex. HA's water-binding properties may contribute to changes in hydration and skin appearance, while claims about tissue remodelling require careful interpretation of the product's clinical evidence.

People often ask whether it may be appropriate for early changes in skin texture or laxity. The answer depends on the skin, treatment area and individual goals. Profhilo cannot replace a facelift or reliably resolve significant loose skin, deep folds or pigmentation. An assessment should also cover injection-site effects, previous treatments and realistic expectations.`,
    cardLinkLabel: 'Explore Profhilo',
    seoTitle: 'Profhilo Newcastle | Hyaluronic Acid Skin Booster | Kensley',
    seoDescription: 'Considering Profhilo in Newcastle? Learn how hyaluronic acid may support skin quality, what to expect, suitability, risks and consultations in Jesmond.',
    heroTitle: 'Profhilo in Newcastle: Skin Hydration and Quality',
    tagline: 'Profhilo for Skin Hydration and Texture: What to Know',
    description: 'Perhaps your skin feels less hydrated than it used to, or you have noticed changes in texture and firmness. You may have heard about Profhilo and wondered whether it works like a normal dermal filler. It does not have the same main purpose as a filler used to change the shape of lips or cheeks. At Kensley Aesthetics in Jesmond, a consultation can help you explore whether it is relevant to your skin concerns and understand its limits.',
    heroCtaLabel: 'Book a Skin Quality Consultation',
    pageSections: [
      {
        heading: 'What Is Profhilo and How Does It Differ from Filler?',
        body: 'Profhilo is a branded injectable product made from hyaluronic acid (HA). Its formulation combines two different molecular-weight fractions of HA in hybrid complexes. It is generally discussed for skin quality and laxity rather than for building substantial facial volume. The product name refers to a specific formulation—not any injection that happens to contain HA. An appropriate clinician should confirm the exact product, packaging, indication and current instructions for use before treatment.',
      },
      {
        heading: 'How Does the Profhilo Hyaluronic Acid Formulation Work?',
        body: 'Hyaluronic acid can bind water within the tissues, which is one reason it is used in products intended to address hydration and the appearance of the skin. Profhilo\'s hybrid HA formulation is designed to spread through the treated tissue in a particular way. Marketing often refers to this as \'bioremodelling\'. That term should not be interpreted as proof that every patient\'s collagen or elastin will measurably increase. The visible outcome depends on the product, location, skin condition and individual response. Profhilo does not replace the skin\'s outer barrier care or undo the effects of sun exposure.',
      },
      {
        heading: 'Which Skin Concerns Might Profhilo Be Relevant For?',
        body: 'People commonly enquire about an overall change in how hydrated or supple their skin looks, fine surface texture and selected early changes in elasticity. A clinician must distinguish these concerns from deeper wrinkles, volume loss, facial folds, pigmentation and substantial skin laxity. Profhilo cannot remove deep folds, restore a pronounced cheek contour or deliver a surgical lifting effect. If dryness is caused by eczema, over-exfoliation or another skin condition, the first priority may be appropriate skin care or medical advice.',
      },
      {
        heading: 'Who May Be Suitable for Profhilo?',
        body: 'Suitability is assessed individually. Your clinician should ask about allergies, prior reactions to injectables, active skin infection or inflammation, current medicines, previous fillers and relevant medical conditions. Pregnancy or breastfeeding, immune-related illness and previous reactions may influence whether the product is appropriate; the product\'s current instructions must be consulted. Treatment may be deferred if the skin is inflamed or the expectations cannot realistically be met.',
      },
      {
        heading: 'What Happens at a Profhilo Consultation in Jesmond?',
        body: 'The consultation should include a review of your skin and the areas you would like to discuss, photographs only with consent, an explanation of why this product may or may not fit the concern, and a discussion of alternatives. Ask what changes are realistically expected, how outcome will be assessed and who would perform the injections. Your clinician should explain the exact product, treatment area, possible need for follow-up appointments, cost and arrangements if you experience a complication. You should not feel pressured to proceed on the day.',
      },
      {
        heading: 'Profhilo Treatment, Recovery and Aftercare',
        body: 'If treatment is suitable and you choose to proceed, the practitioner will explain the planned placement pattern and prepare the skin. The precise technique and any number or spacing of sessions must follow the product instructions and an individual clinical plan. You may notice temporary small raised injection points, redness, tenderness, bruising or swelling. These effects can vary in duration and do not necessarily mean the final skin appearance is established. Do not massage, use active products or return to strenuous activity based on generic online advice alone: follow your own practitioner\'s aftercare instructions.',
      },
      {
        heading: 'Profhilo Risks, Limitations and Alternatives',
        body: 'As with injectable aesthetic treatments, there are risks of infection, inflammation, nodules, persistent swelling, allergy or an unsatisfactory result. Uncommon but serious vascular complications require prompt medical assessment. The treatment cannot promise an age-related change, a specific level of skin tightening or a fixed duration. Alternatives might include an appropriate skincare routine, sun protection, treatment of active skin conditions or a different clinically suitable procedure. Declining treatment is also an option.',
      },
      {
        heading: 'How Long Might Profhilo Results Last and What Will It Cost?',
        body: 'Visible changes and their duration differ between patients and may be influenced by the formulation, treatment area and skin condition. A clinician should discuss the expected course without promising a set number of months. Kensley\'s published prices should be checked at booking; ask whether the quote includes any recommended second session, review appointment and follow-up care.',
      },
    ],
    faqHeading: 'Profhilo FAQs: Common Patient Questions',
    faqs: [
      {
        q: 'Is Profhilo a dermal filler?',
        a: 'It contains hyaluronic acid, but its intended emphasis is skin quality rather than building projection in the lips, cheeks or chin. Your clinician should explain its intended purpose for your specific concern.',
      },
      {
        q: 'Will Profhilo tighten loose skin?',
        a: 'Some patients explore it for certain skin-laxity concerns, but significant loose skin cannot be reliably corrected with an injectable skin-quality treatment. A surgical-style lifting effect should not be promised.',
      },
      {
        q: 'Does Profhilo boost collagen?',
        a: 'Laboratory findings and marketing discussions include tissue responses, but an individual increase in collagen cannot be promised. The clinical evidence for the precise claimed outcome should be considered.',
      },
      {
        q: 'How many Profhilo appointments will I need?',
        a: 'The recommended course depends on the product instructions and your clinician\'s assessment. Do not assume that a standard package is appropriate for everyone.',
      },
      {
        q: 'Will I have visible bumps after Profhilo?',
        a: 'Small raised points can occur after injections, along with redness, tenderness or bruising. Your practitioner should explain expected settling and when to get advice.',
      },
      {
        q: 'Can I have Profhilo if I have sensitive skin?',
        a: 'That depends on what is causing the sensitivity and your medical history. Active inflammation or infection may make treatment inappropriate at that time.',
      },
      {
        q: 'Can Profhilo be combined with other treatments?',
        a: 'Sometimes different treatments are discussed together, but timing and compatibility must be assessed for each product and procedure. Combining treatments does not automatically improve outcomes.',
      },
      {
        q: 'How is Profhilo different from SKINVIVE?',
        a: 'Both are HA-based products, but their formulations, intended placement and evidence are different. The choice is based on your concern and the exact product\'s intended use rather than a brand ranking.',
      },
    ],
    ctaHeading: 'Discuss Profhilo in Jesmond, Newcastle',
    ctaBody: 'If you are considering Profhilo or simply want to understand whether skin-quality treatment is relevant to you, arrange a consultation to discuss realistic options and risks.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to All Skin Boosters',
    related: ['skinvive-newcastle'],
  },
  {
    _id: 'sub-treatment-skin-boosters-skinvive',
    slug: 'skinvive-newcastle',
    num: 2,
    label: 'SKINVIVE',
    image: null,
    cardTitle: 'SKINVIVE in Newcastle',
    cardBody: `SKINVIVE by Juvéderm is a hyaluronic-acid injectable formulated for skin quality, often delivered as small amounts within the skin rather than used to build projection. Patients may be interested in skin smoothness, hydration or an uneven-looking surface. The product is different from a conventional dermal filler used to increase lip or cheek volume.

A consultation should establish the product's current UK instructions for use, the intended area, your history of allergies and whether your concern is likely to respond. It should also explain that skin texture cannot be made perfectly smooth and that injection-related effects and uncommon serious complications remain possible.`,
    cardLinkLabel: 'Explore SKINVIVE',
    seoTitle: 'SKINVIVE Newcastle | Skin Hydration & Texture | Kensley',
    seoDescription: 'Explore SKINVIVE in Newcastle. Understand its hyaluronic acid formulation, skin-texture concerns, recovery, risks and consultation options in Jesmond.',
    heroTitle: 'SKINVIVE in Newcastle: Skin Hydration and Texture',
    tagline: 'SKINVIVE for Skin Smoothness and Hydration',
    description: 'You may have seen SKINVIVE described as a treatment for skin hydration and wondered how it differs from a facial or traditional filler. If your main concern is the look of your skin\'s surface rather than changing facial shape, the distinction matters. At Kensley Aesthetics in Jesmond, Newcastle, a personalised consultation can help you understand what the product is designed to do, what it cannot do and whether it is suitable for you.',
    heroCtaLabel: 'Book a Skin Quality Consultation',
    pageSections: [
      {
        heading: 'What Is SKINVIVE by Juvéderm?',
        body: 'SKINVIVE by Juvéderm is a branded hyaluronic-acid injectable gel used for selected skin-quality indications. UK product information describes its use for hydration and the appearance of skin texture in specific areas, but the intended treatment site must be checked against the current UK instructions for use. It is administered within the skin in small amounts rather than designed primarily to create the projection of a cheek or lip filler. It is a distinct product: you should not assume another HA booster has equivalent evidence or effects.',
      },
      {
        heading: 'How Does SKINVIVE Work Within the Skin?',
        body: 'Hyaluronic acid attracts and binds water. SKINVIVE uses a cross-linked HA formulation intended to retain hydration in treated tissue and influence the appearance of skin smoothness. The exact depth and distribution of the gel matter. It does not act like a moisturiser applied to the surface, nor does it replace daily sun protection and barrier care. Better hydration may make skin look or feel different, but this is not the same as a promise of new collagen, removal of pores or correction of pigmentation.',
      },
      {
        heading: 'Which Skin Concerns Might SKINVIVE Help Assess?',
        body: 'People may ask about rough-looking texture, dullness, fine surface lines or skin that seems less hydrated. The cause must be assessed. Enlarged-looking pores, acne scarring, pigmentation and deep lines are different concerns and may not respond as expected to an HA injectable. A clinician should distinguish changes in skin quality from volume loss in the cheeks or under-eyes, and explain why treatment could be unsuitable.',
      },
      {
        heading: 'Who May Be Suitable for SKINVIVE?',
        body: 'Suitability depends on adult age, medical history, previous reactions, relevant medicines and the proposed area. Your practitioner should ask about allergies—including any allergy to ingredients such as lidocaine if present in the selected formulation—active infection, inflammatory skin conditions, prior fillers and previous cosmetic procedures. Pregnancy or breastfeeding and certain medical conditions may require deferral or an alternative plan in line with the current product instructions.',
      },
      {
        heading: 'What Happens at a SKINVIVE Consultation in Newcastle?',
        body: 'The clinician should assess the skin in the area of concern and explain the product\'s intended use, realistic benefits, limits, recovery and cost. It is useful to ask whether the outcome is measured as texture, hydration or a visible change in fine lines—these are not identical. You should know who will administer the product, what safety and aftercare arrangements are in place, and whether treatment is appropriate at all.',
      },
      {
        heading: 'SKINVIVE Treatment, Recovery and Aftercare',
        body: 'If recommended, the product is placed using a clinician-selected injection technique consistent with its UK instructions. People may experience small bumps at injection points, swelling, bruising, pain, redness, itching or firmness. These reactions may settle at different rates; any prolonged or worsening symptoms should be assessed. Avoid scheduling treatment just before an important event without discussing the expected recovery. Written aftercare and a point of contact for concerns should be provided.',
      },
      {
        heading: 'SKINVIVE Risks, Side Effects and Limitations',
        body: 'SKINVIVE is still an injectable gel and carries risks. These include infection, inflammatory reactions, delayed nodules, unevenness, allergy and unsatisfactory cosmetic changes. Accidental injection into a blood vessel can cause serious complications, potentially including tissue injury or visual problems. Prompt assessment is required for severe or increasing pain, unusual colour changes or visual symptoms. Results cannot be promised, and SKINVIVE should not be described as a permanent or risk-free way to \'fix\' skin.',
      },
      {
        heading: 'SKINVIVE Results, Follow-Up and Alternatives',
        body: 'Any duration reported in studies is an average in particular populations and treatment sites, not a promise for your skin. Maintenance decisions should follow review, product guidance and your priorities rather than automatic repeat booking. Depending on the underlying concern, the clinician may discuss barrier-focused skincare, appropriate topical products, sun protection, treatment of active skin conditions or other options. Ask for a written quotation and whether review care is included.',
      },
    ],
    faqHeading: 'SKINVIVE FAQs: Skin Texture, Safety and Recovery',
    faqs: [
      {
        q: 'Is SKINVIVE the same as lip or cheek filler?',
        a: 'No. SKINVIVE is an HA injectable intended primarily for skin-quality outcomes. Conventional volumising fillers are formulated and placed for contour or projection; the product\'s intended uses differ.',
      },
      {
        q: 'Does SKINVIVE add volume to the face?',
        a: 'It is not designed principally to add visible projection. However, it is still an injectable HA gel, and local swelling or an unwanted visible change is possible.',
      },
      {
        q: 'Can SKINVIVE improve dry-looking skin?',
        a: 'Hydration-related skin concerns may be relevant, but the cause of dryness matters. Skin-barrier problems, dermatitis or irritation may require skincare or medical treatment instead.',
      },
      {
        q: 'Can SKINVIVE help with acne scars?',
        a: 'It should not be assumed to correct established acne scars. Scar type and depth vary, and an assessment is needed to discuss evidence-based options.',
      },
      {
        q: 'How long does SKINVIVE last?',
        a: 'Duration depends on product instructions, treated area and individual response. Published study results should not be interpreted as a fixed duration for every patient.',
      },
      {
        q: 'Will SKINVIVE cause bumps or bruising?',
        a: 'Temporary injection-site bumps, bruising, swelling and tenderness can occur. Persistent, painful or unusual changes need professional assessment.',
      },
      {
        q: 'Does SKINVIVE improve the under-eye area?',
        a: 'Not every region is an intended treatment site. The under-eye area has particular anatomical risks. Your clinician must verify the current UK indications before considering it.',
      },
      {
        q: 'Can I combine SKINVIVE with Profhilo?',
        a: 'A clinician may discuss different products, but they are not automatically better together. Timing, intended area, product compatibility, risks and the purpose of each must be considered.',
      },
    ],
    ctaHeading: 'Discuss SKINVIVE at Kensley Aesthetics in Jesmond',
    ctaBody: 'If you are researching SKINVIVE in Newcastle, book a consultation to review your skin concerns and whether an HA skin-quality approach is suitable.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to All Skin Boosters',
    related: ['profhilo-newcastle', 'nctf-135-newcastle'],
  },
  {
    _id: 'sub-treatment-skin-boosters-nctf-135',
    slug: 'nctf-135-newcastle',
    num: 3,
    label: 'NCTF 135',
    image: null,
    cardTitle: 'NCTF 135 in Newcastle',
    cardBody: `NCTF is a family of skin-revitalisation formulations associated with hyaluronic acid and additional ingredients, including vitamins and amino acids. NCTF 135 and NCTF 135 HA are not identical formulations, so the exact product matters when discussing a proposed procedure and its evidence. Product names alone are not enough to establish what would be used.

A clinician may discuss this category when someone is interested in skin hydration, fine superficial lines or dull-looking texture. It is not a substitute for managing active skin disease, significant scarring or deeper structural concerns. Every ingredient and delivery method needs to be considered as part of the assessment.`,
    cardLinkLabel: 'Explore NCTF 135',
    seoTitle: 'NCTF 135 Newcastle | Ingredients & Skin Quality | Kensley',
    seoDescription: 'Researching NCTF 135 in Newcastle? Learn about the product variants, skin-quality concerns, recovery, limitations and Jesmond consultation options.',
    heroTitle: 'NCTF 135 in Newcastle: Ingredients and Skin Quality',
    tagline: 'NCTF 135 Ingredients and Skin Quality: What to Know',
    description: 'Some people look into NCTF 135 after reading about skin boosters containing hyaluronic acid, vitamins and amino acids. The most useful question is not simply whether it is \'good for glowing skin\'. It is which NCTF product is being discussed, what it is intended to do and whether it is suitable for your own skin. Kensley Aesthetics in Jesmond offers a consultation pathway for discussing skin-quality concerns before choosing a procedure.',
    heroCtaLabel: 'Book a Skin Quality Consultation',
    pageSections: [
      {
        heading: 'What Is NCTF 135?',
        body: 'NCTF is a range of professional skin-revitalisation products from FILLMED. NCTF 135 and NCTF 135 HA are separate formulations. Manufacturer information shows important differences in their hyaluronic-acid concentration. There is also an NCTF BOOST 135 HA product intended for topical cosmetic use rather than injection. Your practitioner must identify the exact product name, intended application method and current UK documentation. It would be misleading to treat these variants as one identical \'vitamin injection\'.',
      },
      {
        heading: 'What Is in NCTF 135 HA?',
        body: 'The NCTF 135 HA formulation contains non-crosslinked hyaluronic acid with a mixture of vitamins, amino acids, coenzymes, nucleic-acid-related ingredients, minerals and other constituents. The manufacturer\'s full ingredient list should be reviewed when considering allergies or sensitivity. It does not follow that every ingredient causes a measurable improvement when injected, or that the mixture can repair all types of skin damage. Claims should be supported by human evidence for the exact formulation and route used.',
      },
      {
        heading: 'How Might NCTF Formulations Work Beneath the Skin?',
        body: 'Non-crosslinked HA binds water and can influence local hydration and the appearance of superficial texture. The additional ingredients are included in the formulation because they participate in normal biological processes, but their presence alone does not establish that they will trigger more collagen or reverse ageing when delivered to the skin. Product placement, formulation, individual skin condition and the quality of clinical evidence matter. NCTF is not a substitute for treating an impaired skin barrier or an inflammatory skin condition.',
      },
      {
        heading: 'Which Skin Concerns Lead Patients to Ask About NCTF?',
        body: 'People often ask about dull-looking skin, dryness, fine superficial lines or early changes in texture. A consultation should check whether the issue is actually hydration-related. Deep folds, pigmentation, acne scarring, sagging caused by structural changes and active skin disease are different concerns and may need different advice. The clinician should explain what outcome is realistic for the specific product rather than promise universally brighter or younger-looking skin.',
      },
      {
        heading: 'NCTF 135 Suitability and Ingredient Considerations',
        body: 'Before any treatment, the clinician should review your medical history, allergies, prior reactions, medicines, active infections or skin irritation and past cosmetic procedures. Because NCTF formulations contain many ingredients, product-specific allergy and sensitivity checks are particularly important. The proposed route must be consistent with the correct product\'s regulatory documentation and intended use. Treatment may be deferred if there is inflammation, uncertainty about the product or unrealistic expectations.',
      },
      {
        heading: 'What Happens at an NCTF Consultation in Jesmond?',
        body: 'Ask whether the clinic is proposing NCTF 135, NCTF 135 HA or a topical version. The clinician should explain why that option is being considered, where it would be used and the evidence for the expected outcome. The discussion should include any proposed treatment course, recovery, possible adverse effects, alternatives and full cost. You should also know who will perform the procedure and what follow-up arrangements apply.',
      },
      {
        heading: 'NCTF 135 Procedure, Recovery and Aftercare',
        body: 'The process depends on the exact formulation and delivery method. If an injectable product is used, it should be prepared and administered by an appropriately trained professional under suitable infection-control standards. Temporary redness, needle marks, tenderness, small swellings and bruising can occur. A topical product, with or without another procedure, has a different recovery profile. Never assume that NCTF products are interchangeable or that a cosmetic topical product is suitable for injection.',
      },
      {
        heading: 'NCTF 135 Risks, Limitations and Alternatives',
        body: 'Possible adverse effects from injectable procedures include infection, inflammatory reactions, allergy, nodules, prolonged swelling and unsatisfactory cosmetic results. The risks are linked to both the substance and the procedure. Any serious or worsening symptom should be assessed urgently. Depending on the cause of your concern, alternatives may include daily barrier care, sun protection, appropriate topical treatment or managing a skin condition before considering cosmetic procedures. Ask for a realistic explanation of the evidence and the cost rather than a promise of \'complete rejuvenation\'.',
      },
    ],
    faqHeading: 'NCTF 135 FAQs: Ingredients, Recovery and Safety',
    faqs: [
      {
        q: 'Is NCTF 135 the same as NCTF 135 HA?',
        a: 'No. They are different manufacturer-listed formulations, including different concentrations of hyaluronic acid. The exact product should be confirmed before you consent.',
      },
      {
        q: 'Does NCTF 135 contain vitamins?',
        a: 'The NCTF 135 HA formulation includes HA and various vitamins, amino acids and other constituents. Confirm the specific formula and full ingredient list because NCTF variants differ.',
      },
      {
        q: 'Can NCTF 135 help with dull-looking skin?',
        a: 'It is investigated or marketed for selected skin-quality concerns, but the reason your skin looks dull matters. A clinician should explain the evidence for the product being proposed.',
      },
      {
        q: 'Is NCTF 135 suitable for under-eye skin?',
        a: 'This depends on the exact product\'s intended uses and the anatomy of the area. The under-eye region deserves careful risk assessment and should not be treated by default.',
      },
      {
        q: 'How many NCTF appointments are typical?',
        a: 'Manufacturer materials describe product-specific courses, but your treatment schedule must be individualised. Do not assume that a standard course or quantity is necessary.',
      },
      {
        q: 'Is there downtime after NCTF?',
        a: 'For injection-based procedures, temporary marks, redness, swelling and bruising can occur. Other delivery methods have different recovery profiles.',
      },
      {
        q: 'Does NCTF 135 replace a good skincare routine?',
        a: 'No. Sunscreen, suitable cleansing, moisturising and treatment of underlying skin conditions remain important regardless of cosmetic procedures.',
      },
      {
        q: 'Can NCTF 135 cause an allergic reaction?',
        a: 'Reactions are possible, and the formula contains several ingredients. Your clinician should review allergies and product-specific contraindications before considering treatment.',
      },
    ],
    ctaHeading: 'Discuss NCTF 135 in Newcastle',
    ctaBody: 'If you are interested in NCTF 135 or 135 HA, a consultation can help identify the correct product, explain its intended use and discuss whether it is appropriate for your skin.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to All Skin Boosters',
    related: ['profhilo-newcastle', 'skinvive-newcastle'],
  },
  {
    _id: 'sub-treatment-skin-boosters-polynucleotides',
    oldSlug: 'polynucleotides',
    slug: 'polynucleotides-newcastle',
    num: 4,
    label: 'Polynucleotides',
    image: null,
    cardTitle: 'Polynucleotides in Newcastle',
    cardBody: `Polynucleotides are DNA-derived polymers used in some aesthetic procedures and under investigation for skin-quality applications. They differ from HA fillers in structure and proposed effects. Early clinical research suggests potential changes in texture and elasticity in selected settings, but studies have often been small and treatment protocols vary.

Patients may be interested in fine lines, thin-looking skin or the appearance of delicate areas. A consultation should explain what the available evidence does—and does not—show, the specific product source, allergy considerations and whether the proposed area can be treated safely. Natural skin ageing cannot be stopped or reversed by one procedure.`,
    cardLinkLabel: 'Explore Polynucleotides',
    seoTitle: 'Polynucleotides Newcastle | Skin Quality Guide | Kensley',
    seoDescription: 'Considering polynucleotides in Newcastle? Explore DNA-derived products, emerging evidence, suitability, risks, recovery and consultations in Jesmond.',
    heroTitle: 'Polynucleotides in Newcastle: Skin Quality and Evidence',
    tagline: 'Polynucleotides for Skin Quality: What the Evidence Says',
    description: 'You may have heard polynucleotides described as an approach to improving skin quality or the delicate under-eye area. Perhaps you\'re curious because hyaluronic-acid treatments do not seem to match your concern. Before comparing products, it helps to understand what polynucleotides are, how they are proposed to work and where the clinical evidence is still developing. At Kensley Aesthetics in Jesmond, the decision should begin with an individual consultation.',
    heroCtaLabel: 'Book a Skin Quality Consultation',
    pageSections: [
      {
        heading: 'What Are Polynucleotides and How Do They Differ from PDRN?',
        body: 'Polynucleotides (PN) are long chains of nucleotides, the building blocks of DNA. Some aesthetic products contain PN or related polydeoxyribonucleotide (PDRN) preparations; these should not be treated as identical in concentration, molecular size or intended use. Many commercial products use purified material derived from fish, but the precise origin depends on the brand. A clinician should identify the proposed product, its source, regulatory documentation and intended route before recommending it.',
      },
      {
        heading: 'How Might Polynucleotides Work Beneath the Skin?',
        body: 'Polynucleotide preparations are studied for their interactions with tissue environments and wound-healing pathways. Some proposed mechanisms include water-binding support and biological signalling related to tissue responses. Much of the detailed mechanistic work comes from laboratory or small clinical studies. It would go beyond the evidence to say that an injection reliably \'regenerates\' new skin, repairs DNA, reverses ageing or creates a specific amount of collagen in every patient.',
      },
      {
        heading: 'What Does Current Research Say About Polynucleotides?',
        body: 'Research into PN and PDRN in aesthetic dermatology is developing. Systematic reviews have described promising findings for certain skin texture, fine-line or elasticity outcomes, but studies are often small, use different preparations and follow patients for limited periods. A 2026 review of randomised trials also highlighted the need for larger, better-standardised studies. The findings are not proof that every product, application area or course works equally well, and long-term comparative evidence is limited.',
      },
      {
        heading: 'Which Skin Concerns Might Be Discussed?',
        body: 'Patients may enquire about fine lines, fragile-looking skin, changes in texture or particular under-eye concerns. Not every dark circle is caused by thin skin, and pigmentation, hollowness, puffiness and vascular shadows require different assessment. The clinician should also consider whether the concern is primarily scarring, sun damage, an inflammatory skin condition or a change in facial structure. PN treatment cannot be expected to remove deep folds or replace surgery.',
      },
      {
        heading: 'Who May Be Suitable for Polynucleotides?',
        body: 'A clinician should review allergies, especially any relevant fish or marine-source allergies where applicable to the product; previous injectable reactions; medicines; medical conditions; active infection; and current skin irritation. A product\'s exact source and manufacturing process matter, and a fish allergy should not be dismissed or automatically interpreted in the same way for every brand. Pregnancy or breastfeeding and autoimmune or inflammatory conditions may need special consideration or deferral depending on the product instructions and clinical judgement.',
      },
      {
        heading: 'What Happens at a Polynucleotide Consultation in Jesmond?',
        body: 'The clinician should identify the precise PN or PDRN product, intended treatment site, any clinical evidence relevant to that site and likely limitations. Ask whether the proposed outcome is improved texture, a change in hydration or another measurable endpoint. Your consultation should cover pain management, number of appointments if indicated, risks, recovery, total costs, aftercare and how the clinician responds to complications. You should be able to take time before deciding.',
      },
      {
        heading: 'Polynucleotide Procedure, Recovery and Aftercare',
        body: 'Where an injectable product is clinically appropriate, the practitioner may use a method involving small placements in or beneath the skin, according to that product\'s instructions. Temporary raised points, swelling, tenderness, bruising or redness can occur, especially in delicate areas. The exact recovery differs between treatments and patients. Avoid interpreting immediate post-injection swelling as the final result. Follow written aftercare instructions and seek review if symptoms become severe or persist unexpectedly.',
      },
      {
        heading: 'Polynucleotide Risks, Limitations and Alternatives',
        body: 'Possible complications include allergy, infection, prolonged swelling, nodules, inflammation and an outcome that does not meet expectations. Risks depend on the product, route and anatomy, and the under-eye region merits particular caution. Because the evidence base is not yet fully standardised, no clinic should promise regeneration, permanent results or universal suitability. Depending on your concern, alternatives may include gentle skincare, management of an underlying skin condition, other evidence-based aesthetic options or no procedure.',
      },
    ],
    faqHeading: 'Polynucleotides FAQs: Evidence, Allergies and Results',
    faqs: [
      {
        q: 'Are polynucleotides the same as hyaluronic acid skin boosters?',
        a: 'No. Polynucleotides are DNA-derived polymers; hyaluronic acid is a different substance primarily known for its water-binding properties. The products and evidence differ.',
      },
      {
        q: 'Are polynucleotides made from salmon DNA?',
        a: 'Some commercial products derive purified material from fish, including salmon or trout, but the exact source depends on the brand. Ask your clinician for the specific product information.',
      },
      {
        q: 'Can I have polynucleotides if I have a fish allergy?',
        a: 'This requires careful discussion of the exact product\'s source, manufacturing, warnings and your allergy history. Do not proceed without appropriate clinical assessment.',
      },
      {
        q: 'Do polynucleotides improve under-eye dark circles?',
        a: 'They cannot address every cause of dark circles. Pigmentation, hollowing, allergy-related changes and puffiness may require different advice. Evidence is still emerging.',
      },
      {
        q: 'Do polynucleotides stimulate collagen?',
        a: 'Biological mechanisms are being studied, but a reliable increase in collagen or a specific visible change cannot be promised for an individual person.',
      },
      {
        q: 'How long do results last?',
        a: 'Long-term outcomes and ideal repeat schedules are not well established across all PN products. Your clinician should explain evidence for the exact product and concern.',
      },
      {
        q: 'Are polynucleotides painful?',
        a: 'Injectable procedures can cause discomfort. Your practitioner should explain the technique, any suitable comfort measures and expected recovery before consent.',
      },
      {
        q: 'Are polynucleotides suitable for everyone?',
        a: 'No. Allergy history, skin condition, medical circumstances, intended area and product documentation influence suitability. Some people may be better served by another approach or no treatment.',
      },
    ],
    ctaHeading: 'Discuss Polynucleotides in Newcastle',
    ctaBody: 'If you are comparing polynucleotides with other skin boosters in Newcastle, a clinician can help you understand the evidence, possible risks and whether a specific product makes sense for your concerns.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to All Skin Boosters',
    related: ['skinvive-newcastle', 'exosomes-newcastle'],
  },
  {
    _id: 'sub-treatment-skin-boosters-exosomes',
    oldSlug: 'exosomes',
    slug: 'exosomes-newcastle',
    num: 5,
    label: 'Exosomes',
    image: null,
    cardTitle: 'Exosomes: Information and Consultation in Newcastle',
    cardBody: `Exosomes are microscopic extracellular vesicles involved in communication between cells. They are being studied for medical and cosmetic applications, including certain aspects of skin appearance. However, “exosome facial” can describe different products and different routes of application; these should not be assumed to have the same evidence or regulatory status.

In particular, injectable exosome products marketed for cosmetic use do not have an established UK marketing authorisation. This page therefore provides information, questions to ask and a consultation pathway only—not an offer or recommendation for injectable exosome treatment. Kensley must confirm any specific topical product, its legal classification and intended use before advertising it as an available service.`,
    cardLinkLabel: 'Read About Exosomes and Skin',
    seoTitle: 'Exosomes for Skin Newcastle | Evidence & Safety | Kensley',
    seoDescription: 'Curious about exosome skin treatments in Newcastle? Understand the evidence, UK regulation, safety concerns and questions for a Jesmond consultation.',
    heroTitle: 'Exosomes for Skin in Newcastle: Evidence and Safety',
    tagline: 'Exosome Skin Treatments: Evidence and UK Safety',
    description: 'Exosomes are attracting attention in aesthetic skincare, often through claims about \'cell repair\' or \'regeneration\'. If you have seen these terms online, it is sensible to ask what is actually in the product, how it is applied and whether its proposed use is lawful and supported by reliable evidence in the UK. At Kensley Aesthetics in Jesmond, this page is educational information for a consultation, not an offer of injectable exosomes.',
    heroCtaLabel: 'Book a Skin Quality Consultation',
    pageSections: [
      {
        heading: 'What Are Exosomes in Skin Research?',
        body: 'Exosomes are very small extracellular vesicles released by cells. They contain or carry various biological components that can take part in cell-to-cell communication. In research settings, exosomes and other extracellular vesicles are being studied for many applications, including tissue responses and skin. A commercial product described as an \'exosome serum\' may be plant-derived, cell-derived, or use another complex formulation; it is not necessarily equivalent to the preparations described in a published clinical trial.',
      },
      {
        heading: 'How Do Exosomes Communicate with Cells?',
        body: 'The proposed scientific interest lies in signalling: vesicles can transport molecules involved in communication between cells. That does not mean that applying an exosome-labelled cosmetic reliably reaches the living dermis or triggers a predictable repair response. The route of use—on intact skin, following a procedure, or by injection—changes both the biological exposure and the regulatory and safety questions. Claims that exosomes \'reprogramme cells\', rebuild collagen or reverse ageing need robust product-specific human evidence.',
      },
      {
        heading: 'What Does Research Say About Exosomes for Skin?',
        body: 'A 2026 systematic review of human studies described encouraging short-term findings for some skin-quality outcomes, but also highlighted differences in the products used, study designs and follow-up. Many studies were not randomised. The evidence for one preparation should not be transferred to another product simply because both use the word \'exosome\'. Long-term safety, quality control and efficacy for widely marketed cosmetic formulations remain areas of uncertainty. This is a developing field rather than an established universal skin-repair treatment.',
      },
      {
        heading: 'Are Exosome Treatments Approved in the UK?',
        body: 'This is a central safety question. UK regulation depends on the product, its source, intended purpose, claims and route of administration. Current practitioner regulatory guidance reports no MHRA-authorised injectable exosome products for aesthetic use. Some cell-derived products may fall under medicines or advanced-therapy rules. Topical cosmetics follow a different regulatory framework, but being sold as a serum does not establish safety, legal compliance or proven benefit for every use. Kensley must obtain a documented product-specific regulatory assessment before presenting any exosome procedure as available.',
      },
      {
        heading: 'Exosomes and Microneedling: What Should Patients Know?',
        body: 'Some clinics describe topical exosome products applied in connection with microneedling. This is not the same as injection, but creating channels in the skin changes potential exposure. A cosmetic designed only for application to intact skin should not automatically be used on freshly needled skin. Your clinician should verify that the exact product is appropriate for the intended route, that infection-control and sterility requirements are met and that the proposed claims are supported. The risks of any skin-needling procedure must also be explained separately.',
      },
      {
        heading: 'Which Skin Concerns Are Linked to Exosome Claims?',
        body: 'Common enquiries involve skin texture, the appearance of fine lines, post-procedure recovery and general skin quality. The challenge is that these concerns have different causes and the marketed products have differing evidence. Exosomes cannot be assumed to remove scars, reverse photoageing, treat pigmentation disorders or cure a skin condition. If you have active inflammation, infection, eczema or another skin problem, an appropriate medical assessment may be more useful than an experimental cosmetic approach.',
      },
      {
        heading: 'What Happens at an Exosome Information Consultation?',
        body: 'Ask for the full product name, manufacturer, source material, batch and traceability information, written intended-use instructions and regulatory status in the UK. You should also ask whether the proposal involves topical application, microneedling or injection. A clinician should explain the available human evidence for that exact product, plausible benefits, uncertainty, allergy or infection risks, alternatives, aftercare and total costs. Do not accept promises of \'regeneration\' or of no side effects.',
      },
      {
        heading: 'Exosome Risks, Evidence Gaps and Alternatives',
        body: 'Risks depend on the formulation and application method. These may include irritation, allergy, contamination, infection, inflammatory reactions, delayed effects and risks from an accompanying procedure. Injection of an unlicensed or unsuitable product can raise substantial additional safety and legal concerns. Because standardisation and long-term evidence are limited, a consultation may conclude that exosome-based treatment is not appropriate or should not be offered. Depending on the concern, alternatives may include barrier-focused skincare, sun protection, clinically indicated treatment for a skin condition or another well-established aesthetic option.',
      },
    ],
    faqHeading: 'Exosomes FAQs: Safety, Regulation and Evidence',
    faqs: [
      {
        q: 'Are exosomes the same as stem cells?',
        a: 'No. Exosomes are extracellular vesicles released by cells; they are not living stem cells. Product sources and compositions vary.',
      },
      {
        q: 'Are exosome injections available for cosmetic use in the UK?',
        a: 'Current regulatory guidance does not identify an MHRA-authorised injectable exosome product for aesthetic use. Do not assume an injection is lawful or safe because it is promoted online.',
      },
      {
        q: 'Can exosome serums repair damaged skin?',
        a: 'That is too broad a claim. Evidence depends on the precise formulation and its tested use. Some research is promising, but reliable repair or regeneration cannot be promised.',
      },
      {
        q: 'Is an exosome facial the same as microneedling?',
        a: 'No. \'Exosome facial\' is not a standardised procedure name. Ask whether it involves topical application, a skin-needling procedure or something else, and whether the product is intended for that use.',
      },
      {
        q: 'Are plant-derived exosomes safer?',
        a: 'Source alone does not prove safety or effectiveness. Manufacturing quality, contamination controls, intended use and evidence are also important.',
      },
      {
        q: 'Can exosomes replace Profhilo or polynucleotides?',
        a: 'They are not equivalent products, and there is no sound basis for assuming one can replace another. Their composition, evidence, risks and legal status differ.',
      },
      {
        q: 'Do exosomes work for acne scars or pigmentation?',
        a: 'Not reliably established across commercially available formulations. The type and cause of scarring or pigmentation should be assessed before treatment decisions.',
      },
      {
        q: 'Can I book an exosome treatment at Kensley?',
        a: 'This page is for education and discussion only. Whether any specific product or procedure is offered must be confirmed after clinical, product and regulatory review. No injectable exosome service is offered through this page.',
      },
    ],
    ctaHeading: 'Discuss Exosome Skin Claims in Jesmond, Newcastle',
    ctaBody: 'If you have questions about exosome products or have seen claims online that you would like to understand, a skin-quality consultation can help you assess the evidence, risks and appropriate alternatives. It does not mean an exosome procedure will be offered.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to All Skin Boosters',
    related: ['polynucleotides-newcastle', 'profhilo-newcastle'],
  },
];

/* Existing sub-treatments NOT in the new content plan — left untouched (their URLs answer 410). */
export const SKIN_BOOSTERS_HIDDEN_IDS = [
  'sub-treatment-skin-boosters-klardie',
  'sub-treatment-skin-boosters-neofound',
  'sub-treatment-skin-boosters-prp-facials',
];
