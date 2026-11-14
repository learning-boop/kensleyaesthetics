/**
 * Anti-Wrinkle Consultations — page content (Nov 2026 SEO / AEO / GEO content plan).
 *
 * Single source of truth for:
 *   • the local preview, before anything is pushed (pages fall back to this
 *     file whenever Sanity has not received the new fields yet)
 *   • scripts/push-anti-wrinkle.mjs, which writes this content to Sanity
 *
 * Once pushed, Sanity wins: editors change the copy in Studio and the site
 * reads it from there. This file is then only a fallback.
 *
 * Text format used in every `body` / `description` / `cardBody` field:
 *   - a blank line starts a new paragraph
 *   - lines starting with "- " become a bullet list
 *   - a line starting with "> " becomes a highlighted quote
 */

export const ANTI_WRINKLE_SLUG = 'anti-wrinkle-treatments';
export const ANTI_WRINKLE_MAIN_ID = 'mainTreatment-anti-wrinkle-treatments';

/* ── Main page: /main-treatments/anti-wrinkle-treatments ───────────── */
export const ANTI_WRINKLE_MAIN = {
  label: 'Anti-Wrinkle Consultations',
  image: 'https://cdn.sanity.io/images/puzajrus/production/303dec2217535d5e640728a61155dd72458404ed-500x500.png',

  seoTitle: 'Anti-Wrinkle Consultations Newcastle | Kensley Aesthetics',
  seoDescription:
    'Explore consultations for facial lines and wrinkles in Newcastle. Discuss your concerns, options and suitability at Kensley Aesthetics in Jesmond.',

  heroTitle: 'Anti-Wrinkle Consultations in Newcastle upon Tyne',
  tagline: 'Understand Your Options for Lines, Wrinkles and Facial Expression',
  description: `Thinking about lines or wrinkles but unsure which type of advice to seek? Perhaps you have noticed a crease between your eyebrows, lines across your forehead or changes around your eyes when you smile. You might know exactly what you would like to discuss, or you may simply want a qualified opinion.

At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, the starting point is a consultation about your concerns, medical history and expectations. A consultation does not commit you to a cosmetic procedure or a particular medicine. Some lines are part of natural expression; others are influenced by skin changes, sun exposure or ageing. Not every concern needs treatment.`,
  heroCtaLabel: 'Book an Anti-Wrinkle Consultation',

  introSections: [
    {
      heading: 'Understanding Facial Lines and Wrinkles',
      body: `Lines can appear for different reasons. Some become visible when facial muscles move, such as during smiling, raising your eyebrows or frowning. Others may remain visible when the face is relaxed, particularly as the skin changes with age.

Sun exposure, genetics, skin quality, facial anatomy and everyday expressions can all contribute. A fine line caused mainly by dry skin may call for different advice from a deeper fold related to changes in facial structure. This is why an individual assessment matters more than choosing a procedure from a list.`,
    },
    {
      heading: 'What Can an Anti-Wrinkle Consultation Help You Understand?',
      body: `A consultation can help you understand the type of lines you are noticing, the role of facial movement and skin quality, and the range of appropriate options. Depending on your circumstances, these may include skincare, sun protection, non-prescription skin treatments, medical assessment or no treatment.

Your practitioner should explain what is realistically possible, what may not change, relevant risks and the limits of each approach. Natural facial movement is normal, and an entirely line-free face is neither necessary nor a guaranteed treatment outcome.`,
    },
    {
      heading: 'A Personal Approach to Facial Expression',
      body: 'One of the most common concerns is whether a cosmetic procedure might change the way someone looks when they talk or smile. It is reasonable to ask how an approach could affect expression, symmetry and comfort. Any proposed medical intervention should be discussed individually, including uncertainties and the possibility of an unwanted result. You should feel able to decline treatment or seek another opinion.',
    },
  ],

  treatmentsHeading: 'Explore the 11 Areas We Can Discuss',
  treatmentsIntro:
    'The following are concern-led information pages, not a promise that a particular injectable or prescription-only treatment is available. Each page explains what may contribute to the concern, what should be assessed and the questions to raise with a clinician.',

  pageSections: [
    {
      heading: 'Which Consultation Is Right for Me?',
      body: 'You do not need to select an area or decide on a procedure in advance. If several concerns seem related, a clinician can assess them together. The most useful starting point is explaining what you have noticed, how long it has been present and what you hope to understand or change. Sometimes the best outcome of the appointment is reassurance, skincare advice or referral rather than a cosmetic intervention.',
    },
    {
      heading: 'What Happens During an Anti-Wrinkle Consultation?',
      body: `Your clinician should ask about your medical history, allergies, relevant medicines, previous cosmetic procedures and any health conditions that might affect suitability. They may assess facial expression and skin changes, or examine jaw, neck or sweating concerns as appropriate.

You should have time to discuss possible options, alternatives, costs where relevant, risks, aftercare and follow-up arrangements. If prescription-only treatment is ever considered after a proper clinical assessment, the prescriber must determine suitability, explain the medicine and whether its use is licensed for the proposed indication, and obtain informed consent. Booking a consultation does not guarantee that any treatment will be offered.`,
    },
    {
      heading: 'Recovery, Aftercare and Possible Risks',
      body: `Recovery depends entirely on the option ultimately chosen. Some people leave with advice only; others may discuss skincare or a non-prescription procedure. Medical treatments, where clinically appropriate, have their own possible side effects and complications. These must be explained before any decision and not treated as minor merely because a procedure is non-surgical.

Depending on the medical intervention, risks may include bruising, discomfort, asymmetry or unwanted temporary changes in muscle function. Some interventions in the neck or jaw require particular attention to speech, chewing or swallowing. Seek urgent medical help for unexpected breathing or swallowing difficulty after any medical procedure. Your clinician should give you specific written guidance if treatment is undertaken.`,
    },
    {
      heading: 'Are There Alternatives to Injectable Procedures?',
      body: 'Yes. The choice depends on what is causing the concern. For skin-related lines, advice may involve consistent sun protection, skincare or a discussion of selected skin treatments. For a gummy smile, dental assessment may be more appropriate. For jaw pain, a dentist or GP may be the first step. For excessive sweating, pharmacy treatments and medical investigation may be relevant. Doing nothing is also a valid decision.',
    },
    {
      heading: 'Consultation Fees and Treatment Costs in Newcastle',
      body: 'The cost of an appointment and any later treatment should be clarified with the clinic before booking. Costs may differ depending on whether the concern is cosmetic, dental or medical and which professional is best placed to assess it. Do not assume a particular treatment, prescription or package is included in a consultation. Ask for clear information about consultation fees, follow-up and any referral.',
      linkLabel: 'View Consultation Prices',
      linkUrl: '/prices',
    },
    {
      heading: 'Why Consider Kensley Aesthetics?',
      body: 'Kensley Aesthetics is a doctor-led aesthetics clinic in Jesmond, Newcastle upon Tyne. Choosing a clinic involves more than a treatment list: you should understand who will assess you, their qualifications and experience, what care is available afterwards, and when they would recommend an alternative or referral. Read more on the About Kensley Aesthetics page.',
      linkLabel: 'Learn About Kensley Aesthetics',
      linkUrl: '/about',
    },
  ],

  faqHeading: 'Frequently Asked Questions About Anti-Wrinkle Consultations',
  faqs: [
    {
      q: 'Can I book a consultation without deciding on a procedure?',
      a: 'Yes. You can discuss your concerns and learn whether any intervention is appropriate. The appointment may end with advice only, with no treatment recommended.',
    },
    {
      q: 'Are all facial lines caused by muscle movement?',
      a: 'No. Expressions can contribute to some lines, while ageing, sun exposure, skin texture, facial structure and other factors also play a role. Your clinician should assess the likely causes.',
    },
    {
      q: 'Will treatment stop me looking like myself?',
      a: 'Any procedure that changes muscle activity or skin appearance can affect how a feature looks. The potential effects, limitations and risks should be discussed before you decide. No particular appearance can be guaranteed.',
    },
    {
      q: 'Are all the concerns listed on this page treated with the same medicine?',
      a: 'No. These concerns have different underlying causes and may call for skincare, dental or medical assessment, other care or no treatment. Prescription-only options, if relevant, require an individual prescriber assessment and may be licensed for some indications but not others.',
    },
    {
      q: 'What if I have jaw pain, neck pain or excessive sweating rather than a cosmetic concern?',
      a: 'Tell the clinic when booking. Medical or dental assessment may be more appropriate, especially for new or persistent symptoms. The clinic should confirm whether the concern falls within its scope or whether referral is needed.',
    },
    {
      q: 'How much does an anti-wrinkle consultation cost in Newcastle?',
      a: 'Ask Kensley to confirm its current consultation fee and what is included. Any proposed intervention and its full cost should only be discussed after a suitable assessment.',
    },
    {
      q: 'Can I have a consultation if I am worried about previous treatment?',
      a: 'Yes, explain what you have had and when, including the product if known. The clinician will need to decide whether they can assess your concern or whether you require advice from the original provider or another specialist.',
    },
  ],

  ctaHeading: 'Book an Anti-Wrinkle Consultation in Jesmond, Newcastle',
  ctaBody:
    'Whether you have questions about a particular line, facial movement or another concern listed here, a consultation is an opportunity to receive information and decide on sensible next steps without pressure.',
  ctaAddress: `Kensley Aesthetics
Old Brewery Court, 156 Sandyford Road
Jesmond, Newcastle upon Tyne, NE2 1XG`,
  ctaPhone: '0333 057 0295',
  ctaLabel: 'Book Your Consultation',
};

/* ── The 11 consultation pages: /main-treatments/anti-wrinkle-treatments/<slug> ──
 * `_id`      Sanity document id. Some already exist in Sanity
 *            (their images are kept); new ones are created.
 * `oldSlug`  slug before Nov 2026; the old URL 301-redirects to the new one.
 * `card*`    the row shown for this treatment on the main page.
 * `related`  slugs of related consultation pages.
 */

export const ANTI_WRINKLE_SUBS = [
  /* 1 ─ Frown Lines ──────────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-frown-lines',
    slug: 'frown-lines',
    num: 1,
    label: 'Frown Lines',
    image: null,

    cardTitle: 'Frown Lines — Between the Eyebrows',
    cardBody: 'Vertical lines between the eyebrows often become more noticeable when you concentrate, squint or frown. For some people, the lines are only visible during expression; for others, they are present even when the face is relaxed. A consultation considers how the area moves, what changes you have noticed and whether the concern is primarily about muscle movement, the skin or both.',
    cardLinkLabel: 'Explore Frown Line Consultations',

    seoTitle: 'Frown Line Consultation Newcastle | Kensley Aesthetics',
    seoDescription:
      'Concerned about frown lines between your eyebrows? Explore causes, options, risks and a personalised consultation at Kensley Aesthetics in Jesmond.',
    heroTitle: 'Frown Line Consultation in Newcastle upon Tyne',
    tagline: 'Understanding the Lines Between Your Eyebrows',
    description: `Have you noticed two lines appearing between your eyebrows when you concentrate or frown? Some people call them '11 lines'. You may only see them while making an expression, or they may have become visible while your face is relaxed. Both patterns are common.

At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, a consultation can help you understand what is contributing to the lines without assuming that an injectable treatment is necessary.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Causes Frown Lines?',
        body: `Frown lines, also called glabellar lines, form in the region between the eyebrows. The muscles used to draw the eyebrows together can create temporary folds in the overlying skin. With time, some lines become more noticeable at rest. Skin elasticity, sun exposure, genetics and natural facial anatomy also matter.

A line seen during an expression is not the same as a deep crease visible all the time. Your clinician should make that distinction before discussing any possible approach.`,
      },
      {
        heading: 'Why Might Someone Seek Advice?',
        body: `Some people want to understand whether their resting expression appears different from how they feel. Others simply wish to ask whether their lines are related to movement or skin changes. There is no medical need to change normal frown lines. Your preferences are relevant, but any intervention should have a realistic purpose and acceptable risk.

Your practitioner should consider how the forehead and eyebrows work together. Treating one area in isolation may affect the way another area moves.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `You may be asked to frown, relax and raise your eyebrows so the clinician can observe movement and brow position. Your previous cosmetic procedures, medical history, medicines, allergies and expectations should be reviewed.

You should be told what is likely to change, what may remain, whether your concern is appropriate for a cosmetic service, and how possible complications would be managed.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: 'An initial conversation may cover skin protection, suitable skincare, non-prescription skin treatments and whether no intervention is sensible. Deep lines that are present at rest may not respond like movement-related lines. If a prescription medicine is considered only after assessment, a qualified prescriber must explain its specific licensed indication, any off-label status, possible side effects and alternative choices.',
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'If a medical intervention is eventually chosen, the risks and recovery depend on the exact procedure. For procedures affecting the upper face, clinically relevant issues can include temporary redness or bruising, headache, unwanted changes in brow or eyelid position, and asymmetry. The clinician should give you product-specific information and clear aftercare arrangements. Any unusual or significant symptoms require prompt professional advice.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Are frown lines normal?',
        a: 'Yes. Lines between the eyebrows commonly appear with normal facial expression. Their depth varies with skin, anatomy, age and how the muscles move.',
      },
      {
        q: 'Why can I see my frown lines even when I am not frowning?',
        a: 'Repeated movement and changes in the skin can make a crease visible at rest. An assessment can help explain whether it is mainly a skin or movement concern.',
      },
      {
        q: 'Can I keep a natural expression if I explore treatment?',
        a: 'Your preferences should be discussed with the clinician, including the possibility of a change you do not like. No particular degree of movement or cosmetic result can be promised.',
      },
      {
        q: 'Are frown lines and forehead lines the same?',
        a: 'No. Frown lines are typically between the eyebrows; forehead lines run across the forehead and often show when the brows lift. They are related but distinct concerns.',
      },
      {
        q: 'Can I ask questions without agreeing to a procedure?',
        a: 'Yes. A consultation is for information and clinical assessment. You can decide not to proceed, or take time to consider the advice.',
      },
    ],
    ctaHeading: 'Discuss Frown Lines — Between the Eyebrows at Kensley Aesthetics',
    ctaBody:
      'Whether the lines are new or long-standing, an assessment can help you understand the options, limits and risks before deciding what is right for you.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['forehead-lines', 'crows-feet'],
  },

  /* 2 ─ Forehead Lines ───────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-forehead-lines',
    slug: 'forehead-lines',
    num: 2,
    label: 'Forehead Lines',
    image: null,

    cardTitle: 'Forehead Lines',
    cardBody: 'Horizontal forehead lines often appear when the eyebrows lift. Their appearance also depends on skin quality, brow position and natural facial movement. A forehead consultation should consider the relationship between the forehead and eyebrows, rather than examining the lines in isolation. Maintaining natural expression and avoiding unintended changes in brow position are important topics to discuss.',
    cardLinkLabel: 'Explore Forehead Line Consultations',

    seoTitle: 'Forehead Lines Consultation Newcastle | Kensley',
    seoDescription:
      'Noticed horizontal forehead lines? Understand facial movement, brow position, options and consultation guidance at Kensley Aesthetics in Jesmond, Newcastle.',
    heroTitle: 'Forehead Line Consultation in Newcastle upon Tyne',
    tagline: 'Understanding Horizontal Lines Across the Forehead',
    description: `You may notice horizontal lines when you raise your eyebrows, look surprised or speak expressively. For some people they fade when the face rests; for others they remain faintly visible. Forehead lines are a normal part of facial movement, not a sign that something is wrong.

If you would like advice, Kensley Aesthetics in Jesmond, Newcastle can provide a starting point for discussing how these lines relate to your skin and expressions.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'How Do Forehead Lines Develop?',
        body: `Forehead lines generally reflect the way the forehead muscle lifts the eyebrows. As skin changes with age, expression lines can become more noticeable. Sun exposure, skin thickness, genetics and habitual movements may contribute.

Your brow position matters: some people recruit the forehead muscle to help keep their brows raised. Any assessment should account for that natural function rather than concentrating only on the horizontal lines.`,
      },
      {
        heading: 'What Might You Want to Understand?',
        body: `You might be curious about lines that show in photographs, a crease that remains at rest or how your eyebrows sit. These are not necessarily the same concern. A good consultation explores how much movement you would want to preserve and whether the lines themselves, brow position or skin quality are most relevant.

There is no one-size-fits-all solution and a completely smooth forehead is not a suitable or guaranteed goal for everyone.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `The clinician may observe your face at rest and while you raise and lower your eyebrows, frown and close your eyes. They should review your medical history, earlier procedures and expectations, as well as any previous eyelid or brow problems.

The discussion should cover why an intervention might be unsuitable, how outcomes could vary and what questions you should ask before consenting to any procedure.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: `For skin-related concerns, the clinician may discuss daily sun protection, moisturising, appropriate skincare and relevant non-prescription procedures. Where brow heaviness, eyelid changes or other functional problems are present, another professional assessment may be appropriate. No treatment is always a valid choice.

If a medical intervention is considered later, it requires a specific assessment, a clear explanation of its status and an opportunity to reflect.`,
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'Aftercare and recovery depend on the option chosen. Possible concerns following some upper-face procedures include discomfort, bruising, headache, temporary eyelid or brow droop and an unwanted change in expression. Any recommendation should explain how brow position could be affected and what help is available if you are unhappy or experience unexpected symptoms.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why do forehead lines appear when I raise my eyebrows?',
        a: 'The forehead muscle lifts the brows and folds the skin as part of normal expression. Skin changes may make those folds more visible.',
      },
      {
        q: 'Do forehead lines always mean I need treatment?',
        a: 'No. Forehead lines are normal. A consultation can explain your options, including skincare advice or leaving the lines as they are.',
      },
      {
        q: 'Could a cosmetic procedure change my eyebrow position?',
        a: 'Some procedures that affect facial movement can change brow or eyelid appearance. Your clinician should assess that risk and explain it clearly before consent.',
      },
      {
        q: 'Can forehead lines be reduced without injections?',
        a: 'Some skin-related concerns may be managed with skincare or selected non-prescription treatments. The suitability and potential benefits depend on the cause of the lines.',
      },
      {
        q: 'Should I discuss frown lines at the same appointment?',
        a: 'Yes. Forehead movement and frowning involve related areas, so assessing both may help the clinician understand your expressions more fully.',
      },
    ],
    ctaHeading: 'Discuss Forehead Lines at Kensley Aesthetics',
    ctaBody:
      'A discussion about forehead lines should help you understand your own facial movement and the choices available, not pressure you to change it.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['frown-lines', 'crows-feet'],
  },

  /* 3 ─ Crow's Feet ──────────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-crows-feet',
    slug: 'crows-feet',
    num: 3,
    label: 'Crow\'s Feet',
    image: null,

    cardTitle: 'Crow\'s Feet — Around the Eyes',
    cardBody: 'Lines at the outer corners of the eyes commonly appear with smiling and squinting. They are a normal feature of facial expression and may become more noticeable over time. A consultation can help distinguish movement-related lines from skin texture, dryness and sun-related changes, while discussing the delicate anatomy around the eyes.',
    cardLinkLabel: 'Explore Crow\'s Feet Consultations',

    seoTitle: 'Crow’s Feet Consultation Newcastle | Kensley Aesthetics',
    seoDescription:
      'Explore advice for crow’s feet around the eyes in Newcastle. Understand smile lines, skin changes, possible risks and consultations in Jesmond.',
    heroTitle: 'Crow’s Feet Consultation in Newcastle upon Tyne',
    tagline: 'Understanding Smile Lines at the Outer Corners of Your Eyes',
    description: `Crow's feet are the small lines that fan out from the outer corners of the eyes when you smile or squint. They can be part of a warm, familiar expression. Sometimes they become visible at rest, too.

If you want to understand these changes, a consultation at Kensley Aesthetics in Jesmond, Newcastle upon Tyne, should begin by identifying what contributes to the lines and what you would or would not want to change.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'Why Do Crow’s Feet Develop?',
        body: `The skin around the eyes is thin and moves frequently. Smiling, squinting, sun exposure and natural changes in skin elasticity can all influence the appearance of lines. Dryness or texture changes may make the area seem more lined, even when muscle movement is not the main concern.

The lines themselves are common and do not require treatment.`,
      },
      {
        heading: 'What Can a Consultation Clarify?',
        body: `You may wish to know whether the lines are mainly visible when you smile or whether they reflect skin changes while your face is relaxed. Those distinctions help shape sensible advice.

The clinician should also ask what matters to you about your expression. Preserving a comfortable, natural smile is an important consideration for many people, and no specific aesthetic outcome can be guaranteed.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `An assessment may involve looking at the eye area while you smile, squint and relax, alongside a review of medical history, previous cosmetic procedures, eye symptoms, medicines and allergies.

Mention any previous eyelid issues, dry eyes or difficulty closing your eyes. The clinician can explain whether the concern is appropriate for an aesthetics consultation or whether another professional should assess it.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: `Broad-spectrum sun protection, eye-area skincare and addressing dryness may be relevant for certain skin concerns. Selected skin-quality procedures may also be discussed when appropriate. Because the eye area is delicate, advice must be individual. Treatment is not necessary simply because lines appear when you smile.

Any medical option considered after assessment requires a discussion of realistic limitations and alternatives.`,
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'The risks of a chosen intervention depend on the method and the individual. Around the eyes, particular considerations include temporary discomfort or bruising, asymmetry, eyelid changes, unwanted effects on eye closure and eye discomfort. The clinician should explain warning signs and aftercare, especially if you already have eye-related symptoms.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Are crow’s feet the same as under-eye wrinkles?',
        a: 'Not exactly. Crow\'s feet usually fan out from the outer corners of the eyes; under-eye lines can relate to a different combination of skin texture and movement.',
      },
      {
        q: 'Will smiling always create lines around my eyes?',
        a: 'Often, yes. Smiling naturally activates muscles around the eyes. Visible lines during expression are normal and do not automatically call for treatment.',
      },
      {
        q: 'Can sun exposure make crow’s feet more noticeable?',
        a: 'Yes. Sun exposure affects skin quality over time. Consistent sun protection can be part of advice for preventing further sun-related changes.',
      },
      {
        q: 'Does the area need special care?',
        a: 'Yes. The skin and structures around the eyes are delicate, so any medical or cosmetic procedure requires careful assessment and specific risk information.',
      },
      {
        q: 'Can I discuss crow’s feet and forehead lines together?',
        a: 'Yes. Both concerns may be assessed during the same consultation, while keeping their anatomy and possible approaches distinct.',
      },
    ],
    ctaHeading: 'Discuss Crow’s Feet — Around the Eyes at Kensley Aesthetics',
    ctaBody:
      'If you are curious about lines around your eyes, a consultation can help distinguish natural expression from concerns where skincare or further assessment may be relevant.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['forehead-lines', 'frown-lines'],
  },

  /* 4 ─ Bunny Lines ──────────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-bunny-lines',
    slug: 'bunny-lines',
    num: 4,
    label: 'Bunny Lines',
    image: null,

    cardTitle: 'Bunny Lines — On the Nose',
    cardBody: 'Bunny lines are small creases that can appear across the sides or bridge of the nose when you smile or scrunch your face. They vary widely between people and usually do not require medical attention. If they are something you would like to understand, an assessment can consider your natural expressions and whether a cosmetic approach would offer a meaningful benefit.',
    cardLinkLabel: 'Explore Bunny Line Consultations',

    seoTitle: 'Bunny Lines Consultation Newcastle | Kensley',
    seoDescription:
      'Wondering about lines on the sides of your nose? Learn why bunny lines appear and what to discuss at a consultation in Jesmond, Newcastle.',
    heroTitle: 'Bunny Line Consultation in Newcastle upon Tyne',
    tagline: 'A Closer Look at Small Lines Across the Nose',
    description: `When you smile or scrunch your nose, you might see small diagonal lines on either side of the bridge. These are often called bunny lines. They are an ordinary part of expression, although they can become more noticeable for some people.

At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, a consultation can help you understand these lines without assuming they require a medical procedure.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Are Bunny Lines?',
        body: `Bunny lines are creases that form around the upper sides of the nose when nearby facial muscles move. The pattern differs between people; some show lines only while smiling, while others notice a faint mark when relaxed. Genetics, skin quality and normal expression all influence their appearance.

Not every visible nose crease is a bunny line. A clinician should examine the precise location and how it changes with movement.`,
      },
      {
        heading: 'Why Might Someone Ask About Them?',
        body: `You might have noticed the lines in photographs or become curious after reading about facial wrinkle treatments. Their presence does not mean anything is wrong. A consultation can clarify whether the concern is movement-related or whether skin texture is more important.

The clinician should not assume that a specific intervention is suitable because the area is small. Changes near the nose may also affect the way a smile looks.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `Your clinician may ask you to scrunch your nose, smile and relax, and will consider neighbouring facial muscles as well as previous cosmetic treatment. Relevant health history, medicines and your personal expectations should be reviewed.

Ask about possible changes to expression, the likelihood of a noticeable benefit and whether simply leaving the lines alone is a reasonable choice.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: `If the main issue is surface skin quality, skincare and sun protection may be worth discussing. For movement-related lines, an assessment should explain the limits of available approaches; no treatment is an entirely reasonable outcome.

Not every approach discussed online is licensed for this particular concern, and a clinician must verify the status and evidence of any medical option before considering it.`,
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'Even a small facial area has nearby muscles that influence expression. An intervention might result in temporary tenderness or bruising, asymmetry or an undesired change in facial movement, depending on the procedure. All relevant risks, treatment limitations and aftercare should be discussed before you decide.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why do lines appear when I wrinkle my nose?',
        a: 'They are usually caused by normal movement of muscles around the nose. Their appearance depends on individual facial anatomy and skin.',
      },
      {
        q: 'Are bunny lines a sign of ageing?',
        a: 'Not necessarily. They can appear from a young age as part of normal expression, although skin changes can make them more visible.',
      },
      {
        q: 'Can I treat only the bunny lines?',
        a: 'A clinician should examine the surrounding facial movement before recommending any approach. A small visible area is not always an isolated concern.',
      },
      {
        q: 'Can bunny lines go away with skincare?',
        a: 'Skincare may help some surface-texture concerns, but it will not necessarily change movement-related lines. Outcomes vary.',
      },
      {
        q: 'Is a consultation worthwhile if the lines are mild?',
        a: 'It can be, if you have questions. You may simply receive reassurance and advice without any treatment being recommended.',
      },
    ],
    ctaHeading: 'Discuss Bunny Lines — On the Nose at Kensley Aesthetics',
    ctaBody:
      'You do not need to change a natural expression to ask questions about it. A consultation can help you understand your particular concern.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['crows-feet', 'frown-lines'],
  },

  /* 5 ─ Gummy Smile ──────────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-gummy-smile',
    slug: 'gummy-smile',
    num: 5,
    label: 'Gummy Smile',
    image: null,

    cardTitle: 'Gummy Smile',
    cardBody: 'A gummy smile describes a smile that shows more of the upper gum than someone prefers. The amount of gum visible can be influenced by lip movement, gum levels, tooth proportions or the position of the upper jaw. Because these causes differ, an individual assessment — sometimes involving a dentist — is more useful than assuming one cosmetic procedure will work for everyone.',
    cardLinkLabel: 'Explore Gummy Smile Consultations',

    seoTitle: 'Gummy Smile Consultation Newcastle | Kensley',
    seoDescription:
      'Concerned about how much gum shows when you smile? Explore dental and lip-related causes, assessment options and consultations in Jesmond, Newcastle.',
    heroTitle: 'Gummy Smile Consultation in Newcastle upon Tyne',
    tagline: 'Understanding Why More Gum May Show When You Smile',
    description: `Smiles come in many shapes. Some naturally reveal more of the upper gum than others. If you have questions about your smile, the important step is to understand why it looks the way it does — not to assume there is one cosmetic fix.

Kensley Aesthetics in Jesmond, Newcastle upon Tyne, can be a starting point for discussing your concern, with dental referral if that is more appropriate.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Is a Gummy Smile?',
        body: `'Gummy smile' is a descriptive term, not a diagnosis. It usually means that more upper gum is visible during smiling than a person would prefer. The amount seen can depend on upper-lip movement and length, gum and tooth proportions, jaw position and other anatomical factors.

Some of these causes are primarily dental or orthodontic. Identifying the cause is important because different approaches address different problems.`,
      },
      {
        heading: 'What Questions Can a Consultation Answer?',
        body: `Someone may be happy with the shape of their teeth but curious about upper-lip movement; another person may wonder whether their gums or teeth affect the appearance of their smile. It is important not to treat those concerns as interchangeable.

Your clinician should listen to what matters to you and explain whether a dental examination, observation or another assessment would be more useful than a cosmetic procedure.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `An assessment may include viewing your smile at rest and during a broad smile, considering upper-lip movement and asking about your dental history. You should disclose previous dental work, orthodontic treatment, facial procedures and relevant medical conditions.

If gum levels, teeth or jaw position may be involved, referral to a dentist or appropriate specialist is often essential before discussing any other approach.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: 'Depending on the cause, options may involve dental or orthodontic advice, periodontal assessment, reassurance or no treatment. Some approaches discussed online are not licensed for this indication when they involve prescription-only medicines; that does not mean they are suitable or available at Kensley. A qualified clinician must assess the evidence, risks and legal status of any proposed option individually.',
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'The risks and recovery depend on the assessment outcome and any subsequent procedure. Around the mouth, treatments that alter muscular activity may affect smiling, speech, lip control or symmetry. Dental and surgical approaches have their own risks. Your clinician should discuss the relevant alternatives and possible unwanted effects before any decision is made.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Is a gummy smile a medical problem?',
        a: 'Usually it is simply a variation in the way a person smiles. A professional assessment may help if you have cosmetic concerns or dental symptoms.',
      },
      {
        q: 'Could my teeth or gums be the cause?',
        a: 'Yes. Tooth size, gum position and the relationship of the upper jaw and lip can influence how much gum is visible.',
      },
      {
        q: 'Should I see a dentist first?',
        a: 'A dentist is often an appropriate first point of contact, especially if the concern involves gum levels, tooth proportions or your bite.',
      },
      {
        q: 'Will a cosmetic procedure always reduce gum show?',
        a: 'No. The result depends on the underlying cause and the chosen approach; some people are not suitable for cosmetic intervention.',
      },
      {
        q: 'Can I discuss a gummy smile alongside lip concerns?',
        a: 'Yes, but the causes differ. An assessment should avoid assuming that changing lip volume would address the amount of gum shown.',
      },
    ],
    ctaHeading: 'Discuss Gummy Smile at Kensley Aesthetics',
    ctaBody:
      'A thoughtful consultation should help you understand the reason for your smile\'s appearance and whether the next step is reassurance, dental advice or another assessment.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['downturned-mouth-corners', 'chin-dimpling'],
  },

  /* 6 ─ Chin Dimpling ────────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-pebble-chin',
    oldSlug: 'pebble-chin',
    slug: 'chin-dimpling',
    num: 6,
    label: 'Chin Dimpling',
    image: null,

    cardTitle: 'Chin Dimpling',
    cardBody: 'Small dimples or an orange-peel texture on the chin may become noticeable when the lower face moves. The appearance can be influenced by the chin\'s muscle activity, the skin and underlying structure. Your clinician should examine the area at rest and during expression and explain the differences between skin-related and movement-related concerns.',
    cardLinkLabel: 'Explore Chin Dimpling Consultations',

    seoTitle: 'Chin Dimpling Consultation Newcastle | Kensley',
    seoDescription:
      'Explore the causes of chin dimpling or orange-peel skin and what to ask at a personalised consultation in Jesmond, Newcastle.',
    heroTitle: 'Chin Dimpling Consultation in Newcastle upon Tyne',
    tagline: 'Understanding an Uneven or Orange-Peel Chin Texture',
    description: `You might notice tiny dimples on your chin when you purse your lips, speak or bring your lower lip upwards. This is often described as an orange-peel chin appearance. It may be subtle and visible only with certain expressions.

If it concerns you, a consultation at Kensley Aesthetics in Jesmond, Newcastle, can help clarify which tissues contribute and whether any action is worthwhile.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'Why Does Chin Dimpling Happen?',
        body: `The skin over the chin is closely related to the underlying mentalis muscle and the shape of the chin itself. Natural movement can bunch the skin into fine dimples; skin texture, previous procedures and anatomical differences may also influence the appearance.

A dimple that appears during expression should not automatically be treated as a skin condition, just as an uneven chin surface is not always caused by muscle movement.`,
      },
      {
        heading: 'What Would an Assessment Consider?',
        body: `A clinician may examine the area with the lips relaxed and during movement, including how the chin relates to the lower lip and surrounding facial features. Some patients are concerned about texture, while others ask about the appearance of the chin in profile. These are different questions that may need different advice.

A normal amount of chin movement is not something that must be corrected.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `The clinician should review any previous chin filler or facial procedures, dental concerns, medication and relevant medical history. Explain whether the dimpling is new, long-standing or associated with discomfort.

Ask what is causing the appearance, whether a non-prescription skin approach could help and what the limits would be of any more invasive option.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: 'If surface texture or skin condition is the main concern, skincare or a selected skin-quality treatment may be discussed. Structural chin concerns may require a different assessment. A proposed medical procedure must be considered only after reviewing its evidence, safety, licence status and the alternatives, including no treatment.',
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'Interventions affecting the muscles around the chin and mouth can potentially alter lower-lip movement, expression or symmetry. Some procedures can also cause tenderness, bruising or other complications. The exact risks are procedure-dependent and must be explained by the clinician who would provide it.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why does my chin look dimpled when I speak?',
        a: 'Movement of the muscle beneath the chin skin can create small folds. The pattern varies naturally between people.',
      },
      {
        q: 'Is chin dimpling the same as a recessed chin?',
        a: 'No. Dimpling concerns the skin\'s surface and movement; a recessed chin describes the position or projection of the chin and may have different causes.',
      },
      {
        q: 'Can skincare improve an orange-peel chin?',
        a: 'Skincare may help some skin-texture concerns, but it may not change movement-related dimpling. An assessment can help distinguish the two.',
      },
      {
        q: 'Could treatment affect how my mouth moves?',
        a: 'Some medical procedures around the chin and lower lip may affect movement or symmetry. The practitioner must explain those risks clearly.',
      },
      {
        q: 'Do I need a chin procedure to discuss the concern?',
        a: 'No. A consultation may result in explanation, reassurance, skincare advice or a recommendation not to proceed.',
      },
    ],
    ctaHeading: 'Discuss Chin Dimpling at Kensley Aesthetics',
    ctaBody:
      'Your chin is part of normal expression. The aim of an appointment is to understand your concern and choose whether any further action is justified.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['downturned-mouth-corners', 'gummy-smile'],
  },

  /* 7 ─ Downturned Mouth Corners ─────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-downturned-mouth-corners',
    slug: 'downturned-mouth-corners',
    num: 7,
    label: 'Downturned Mouth Corners',
    image: null,

    cardTitle: 'Downturned Corners of the Mouth',
    cardBody: 'The corners of the mouth naturally sit at different angles from person to person. Their appearance may be influenced by facial expression, lower-face tissues, skin changes and the muscles around the mouth. An assessment can help identify what contributes to your concern; changing one muscle or adding volume is not automatically the most suitable answer.',
    cardLinkLabel: 'Explore Mouth Corner Consultations',

    seoTitle: 'Downturned Mouth Corners Newcastle | Consultation',
    seoDescription:
      'Learn why the corners of the mouth may turn down and explore natural expression, lower-face changes, alternatives and consultations in Newcastle.',
    heroTitle: 'Mouth Corner Consultation in Newcastle upon Tyne',
    tagline: 'Understanding the Shape of the Corners of Your Mouth',
    description: `The corners of the mouth may point slightly downwards even when you feel happy or relaxed. Sometimes this is simply part of your natural facial shape; sometimes the appearance changes over time.

If you are curious about why your mouth sits a certain way, Kensley Aesthetics in Jesmond, Newcastle upon Tyne, can help you begin with an individual discussion rather than choosing a treatment first.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Makes Mouth Corners Look Downturned?',
        body: `The appearance of the mouth corners reflects several interacting factors: the muscles used in expression, the position of the lips, skin laxity, facial volume and the tissues around the chin and lower face. Lines extending beneath the corners may also be marionette lines.

A downward angle is not itself a medical condition. Understanding the particular cause matters because a volume-related fold is different from a movement-related concern.`,
      },
      {
        heading: 'What Do Patients Usually Want to Understand?',
        body: `Some people are interested in the way their mouth looks at rest; others notice a change in photographs or want to know whether nearby folds contribute. Your practitioner should explore what you have noticed, when it started and whether it changes when you smile.

The goal of assessment is not to promise a permanently lifted smile. Natural expressions are complex and no outcome can be guaranteed.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `The clinician may assess your mouth at rest, while speaking and while smiling, as well as the surrounding skin and lower-face contours. Previous cosmetic procedures, any facial nerve or dental concerns and current medicines should be discussed.

If a new droop has appeared suddenly, particularly on one side, this is a medical concern and requires urgent assessment rather than a cosmetic consultation.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: 'Depending on the cause, options may include observing the area, skincare, assessment of marionette folds or a suitable non-prescription procedure. Some people may be referred to a dentist or doctor if a structural or neurological concern is suspected. There is no single option for every mouth shape, and no treatment is sometimes the best advice.',
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'Medical procedures around the mouth require care because this region affects speaking, eating, smiling and lip control. Potential unwanted effects can include asymmetry, altered smile movement, difficulty keeping the lips in their usual position, bruising or discomfort, depending on the approach. Your clinician must discuss specific risks and aftercare before a decision.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why do my mouth corners turn down even when I am not sad?',
        a: 'Their resting position depends on natural facial anatomy, muscles, skin and surrounding tissues. It is not a reliable indicator of mood.',
      },
      {
        q: 'Are downturned mouth corners the same as marionette lines?',
        a: 'No. Mouth-corner position describes the angle of the lips, while marionette lines are folds that extend downwards from the corners.',
      },
      {
        q: 'Can a consultation tell whether the concern is muscular or volume-related?',
        a: 'It can help. The practitioner should assess facial movement and the lower-face tissues before discussing any options.',
      },
      {
        q: 'Could a cosmetic procedure change my smile?',
        a: 'Yes, procedures around the mouth can affect expression. Potential benefits and unwanted effects should be explained before consent.',
      },
      {
        q: 'What if one side of my mouth has suddenly dropped?',
        a: 'Seek urgent medical advice rather than booking a routine aesthetics consultation, especially if you also have speech, arm or other neurological symptoms.',
      },
    ],
    ctaHeading: 'Discuss Downturned Corners of the Mouth at Kensley Aesthetics',
    ctaBody:
      'An appointment can help you understand the structures behind a concern and whether taking any further step would be appropriate.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['chin-dimpling', 'gummy-smile'],
  },

  /* 8 ─ Masseter and Jaw Muscles ─────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-jawline-slimming',
    oldSlug: 'jawline-slimming',
    slug: 'masseter-jaw-muscles',
    num: 8,
    label: 'Masseter and Jaw Muscles',
    image: 'https://cdn.sanity.io/images/puzajrus/production/8486755794f52275a292e2063c5214db72f5a805-1536x1024.webp',

    cardTitle: 'Jaw Muscles — Masseter',
    cardBody: 'The masseter muscles help with chewing and can influence the shape of the lower face. Some people ask about prominent jaw muscles; others seek advice about clenching or jaw discomfort. These are different concerns. Pain, restricted opening, tooth wear and teeth grinding may need dental or medical assessment, not simply cosmetic advice.',
    cardLinkLabel: 'Explore Masseter and Jaw Muscle Consultations',

    seoTitle: 'Masseter Jaw Muscle Consultation Newcastle | Kensley',
    seoDescription:
      'Concerned about jaw muscle prominence, clenching or tension? Understand common causes, dental assessment and consultation options in Newcastle.',
    heroTitle: 'Masseter and Jaw Muscle Consultation in Newcastle',
    tagline: 'Understanding Jaw Shape, Clenching and Muscle Tension',
    description: `The jaw muscles play a vital part in eating and speaking. Some people notice that the lower face looks broader when they clench; others are more concerned about tension, teeth grinding or discomfort near the jaw joint. These situations may overlap, but they should not be treated as the same problem.

If you are seeking advice in Newcastle, the first step is to establish whether your concern is cosmetic, dental or medical.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Are the Masseter Muscles?',
        body: `The masseters are large chewing muscles located at the sides of the lower jaw. Their size and activity vary naturally. A prominent lower-face shape can also relate to bone structure, facial fat and other tissues, not just muscle.

Clenching and grinding may sometimes contribute to jaw discomfort or tooth wear, but those symptoms can have several causes. Identifying them may require a dentist or GP assessment.`,
      },
      {
        heading: 'Why Is the Distinction Important?',
        body: `Someone interested in facial shape may have no medical symptoms. A person with pain, a clicking jaw or restricted opening may need assessment for a temporomandibular disorder, dental issues or another condition. Treating muscle appearance does not automatically resolve pain or grinding.

The consultation should consider jaw function, not simply facial width or photographic appearance.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `You may be asked about clenching, grinding, headaches, tooth wear, jaw clicking and any difficulty chewing or opening your mouth. A clinician should take a relevant medical history and consider dental referral where appropriate.

Mention previous jaw or dental treatment, night-time symptoms and any changes in bite. A clear explanation of who is best qualified to assess the concern is part of good care.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: `For possible bruxism or jaw pain, dental assessment, a suitable mouth guard, physiotherapy advice and addressing contributing habits or stress may be more appropriate than a cosmetic procedure. For facial-shape concerns, the clinician should discuss realistic limitations and whether no intervention is the best choice.

Certain uses of prescription medicines sometimes discussed online may be off-label. They are not automatically suitable or available and require independent prescriber review.`,
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'Jaw-related medical procedures can have risks affecting chewing strength, bite comfort, facial symmetry or nearby tissues. Other possible side effects depend on the intervention and may include tenderness or bruising. Persistent pain, locking, difficulty opening the mouth or dental problems should prompt assessment by an appropriate healthcare professional.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Is a wide jaw always caused by large masseter muscles?',
        a: 'No. Bone structure, facial fat and other tissues influence jaw shape. Assessment is needed to identify the main factors.',
      },
      {
        q: 'Can masseter-related treatment cure teeth grinding?',
        a: 'No cure should be promised. Grinding has multiple potential causes and often needs dental assessment and management.',
      },
      {
        q: 'Should I see a dentist if my jaw clicks or hurts?',
        a: 'Often, yes. Jaw pain, clicking, restricted opening or tooth wear are reasons to seek dental or medical advice rather than assume a cosmetic solution.',
      },
      {
        q: 'Could altering a jaw muscle affect chewing?',
        a: 'Some medical interventions affecting chewing muscles may change chewing strength or comfort. These risks must be discussed before any decision.',
      },
      {
        q: 'Can I discuss jaw shape without being treated?',
        a: 'Yes. A consultation can provide information about anatomy, suitable referrals and whether any procedure would be justified.',
      },
    ],
    ctaHeading: 'Discuss Jaw Muscles — Masseter at Kensley Aesthetics',
    ctaBody:
      'The safest starting point is identifying whether your concern is about facial anatomy, jaw function or both — and involving the right clinician.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['chin-dimpling', 'neck-bands'],
  },

  /* 9 ─ Neck Bands ───────────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-nefertiti-lift',
    oldSlug: 'nefertiti-lift',
    slug: 'neck-bands',
    num: 9,
    label: 'Neck Bands',
    image: 'https://cdn.sanity.io/images/puzajrus/production/5d280878beb0b3d5808066843a4c9eda325103c5-1536x1024.webp',

    cardTitle: 'Neck Bands',
    cardBody: 'Vertical neck bands may become more visible during certain facial or neck movements. Skin laxity and changes in the underlying tissues can also affect neck appearance. A consultation can help distinguish muscular prominence from other neck concerns and explain why not every type of neck line responds to the same approach.',
    cardLinkLabel: 'Explore Neck Band Consultations',

    seoTitle: 'Neck Band Consultation Newcastle | Kensley Aesthetics',
    seoDescription:
      'Noticed visible neck bands or vertical neck lines? Explore possible causes, skin changes, risks and consultation options in Jesmond, Newcastle.',
    heroTitle: 'Neck Band Consultation in Newcastle upon Tyne',
    tagline: 'Understanding Vertical Bands and Changes in the Neck',
    description: `You may notice vertical bands on your neck when speaking, turning your head or tensing particular muscles. For some people, the bands are a long-standing feature; for others, they become more visible with age.

A consultation at Kensley Aesthetics in Jesmond, Newcastle, should start by understanding whether you are seeing movement-related bands, skin changes or another neck concern.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Are Neck Bands?',
        body: `Vertical neck bands can reflect the activity or prominence of the platysma muscle, a thin sheet of muscle across the front and sides of the neck. Skin laxity, posture and changes in neck tissues can also influence the appearance. Horizontal creases are a different pattern and do not necessarily have the same cause.

Neck appearance varies naturally, and visible bands do not automatically need treatment.`,
      },
      {
        heading: 'What Can a Consultation Clarify?',
        body: `Your clinician may assess the neck at rest and during gentle facial movement to understand where bands appear. They should distinguish muscular prominence from loose skin, fat distribution, scarring or other skin concerns.

A medical or cosmetic approach suitable for one component may not affect the others. Patients should be given realistic information about which changes are unlikely to respond.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `The assessment should include relevant medical history, neck surgery or previous procedures, swallowing or voice symptoms, medicines and expectations. If you have a new neck lump, unusual swelling, persistent pain or swallowing problems, seek medical assessment rather than a routine aesthetics appointment.

Ask how any proposed intervention might affect normal neck function and how complications would be managed.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: 'Possible advice may involve skin protection, skincare, appropriate non-prescription skin treatments, specialist review or no intervention. The clinician should explain how neck bands differ from skin laxity. The licensing status of any medicine varies by product and indication and must be confirmed by a prescriber; an online description is not a recommendation for a particular medicine.',
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'The neck contains important muscles and structures involved in speaking and swallowing. Medical interventions in this region need particularly careful assessment. Depending on the procedure, risks may include bruising, discomfort, temporary changes in muscle function, swallowing or voice difficulties and asymmetry. New difficulty breathing or swallowing after a procedure requires urgent medical attention.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why do vertical bands appear when I tense my neck?',
        a: 'The platysma muscle and other neck tissues can become more visible during movement. That does not necessarily indicate a medical problem.',
      },
      {
        q: 'Are neck bands the same as loose neck skin?',
        a: 'No. Muscle prominence and skin laxity are different factors, although both may affect neck appearance.',
      },
      {
        q: 'Can a procedure remove every neck line?',
        a: 'No. Different lines have different causes, and no treatment can guarantee a completely smooth neck.',
      },
      {
        q: 'What risks should I ask about for neck procedures?',
        a: 'Discuss any possible effects on swallowing, voice, normal neck movement, symmetry, aftercare and the need for urgent medical review.',
      },
      {
        q: 'Should I see a doctor for a new neck lump or swallowing problem?',
        a: 'Yes. New swelling, a lump, persistent pain or swallowing difficulty needs medical assessment before cosmetic concerns are considered.',
      },
    ],
    ctaHeading: 'Discuss Neck Bands at Kensley Aesthetics',
    ctaBody:
      'A careful neck assessment should consider movement, skin and safety together, including the possibility that no aesthetic procedure is appropriate.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['forehead-lines', 'trapezius-muscles'],
  },

  /* 10 ─ Underarm Sweating ────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-underarm-sweating',
    slug: 'underarm-sweating',
    num: 10,
    label: 'Underarm Sweating',
    image: null,

    cardTitle: 'Underarm Sweating',
    cardBody: 'Excessive underarm sweating can affect clothing choices, comfort and daily life. It may occur without an obvious cause or be linked to medicines or an underlying health condition. A medical assessment can help establish whether this is primary hyperhidrosis and whether measures such as stronger antiperspirants, pharmacist advice or specialist referral are appropriate.',
    cardLinkLabel: 'Explore Underarm Sweating Consultations',

    seoTitle: 'Underarm Sweating Consultation Newcastle | Kensley',
    seoDescription:
      'Experiencing excessive underarm sweating? Learn about possible causes, pharmacy options, GP assessment and consultation advice in Newcastle.',
    heroTitle: 'Excessive Underarm Sweating Consultation in Newcastle',
    tagline: 'Understanding Underarm Sweating That Affects Daily Life',
    description: `Sweating is a normal way for the body to regulate temperature. But if your underarms sweat heavily even when you are cool or resting, you may be wondering whether there is a medical explanation. The concern is often called axillary hyperhidrosis.

A discussion about excessive sweating should focus on understanding the cause and whether you need a GP, pharmacist, dermatologist or another suitable professional, rather than starting with a particular procedure.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Is Excessive Underarm Sweating?',
        body: `Hyperhidrosis is sweating beyond what the body needs for cooling. It can affect just the underarms or several body areas. Some people have had it for years without another clear cause; in others it may be linked to medication, hormonal changes or a health condition.

New sweating, sweating at night or symptoms affecting the whole body may call for a medical check. A cosmetic clinic is not a substitute for investigating these possibilities.`,
      },
      {
        heading: 'When Might It Be Worth Seeking Advice?',
        body: `If sweating affects everyday clothing, comfort, work or social activities, it is reasonable to ask for help. It is also worth seeking a GP assessment if symptoms have lasted for months, are worsening, happen during the night, or are accompanied by other new symptoms.

The goal of an assessment is to identify an appropriate course of care, not to guarantee that sweating can be eliminated.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `A clinician should ask when the sweating began, which areas are affected, whether it happens during sleep, what medicines you take and what you have already tried. They may discuss personal and family history or advise further testing through your GP.

Be clear if you have not yet tried pharmacy treatments or if sweating is sudden and unusual. The appropriate specialist pathway depends on the findings.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: `The NHS recommends practical measures and pharmacy products such as stronger antiperspirants. For persistent symptoms, a GP can consider the need for investigation or specialist referral. Other specialist options depend on the cause and your health.

Some medicines have a licensed indication for severe primary underarm hyperhidrosis after topical measures have not helped, but that does not mean every patient is suitable or that a particular treatment is offered by Kensley.`,
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'Different approaches have different side effects and limitations. If any prescription-based intervention is later considered, a clinician must discuss the indication, evidence, possible discomfort, local reactions, potential muscle weakness and relevant wider risks, along with follow-up care. You should not begin or stop medicine on the basis of a website article.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Why do my underarms sweat when I am not hot?',
        a: 'Some people experience primary hyperhidrosis, but medicine side effects and health conditions can also contribute. A clinician can help investigate the pattern.',
      },
      {
        q: 'Should I try a stronger antiperspirant first?',
        a: 'A pharmacist can advise about stronger antiperspirants and practical steps. Persistent or severe symptoms may warrant GP assessment.',
      },
      {
        q: 'Can stress make sweating worse?',
        a: 'Stress can increase sweating for some people, but it is not the only possible cause. Persistent symptoms deserve an individual review.',
      },
      {
        q: 'What if I sweat heavily at night?',
        a: 'Night sweats or new generalised sweating should be discussed with your GP, particularly if accompanied by other symptoms.',
      },
      {
        q: 'Does every aesthetics clinic assess hyperhidrosis?',
        a: 'No. Confirm the clinic\'s scope before booking. A GP or dermatologist may be a more appropriate starting point depending on your symptoms.',
      },
    ],
    ctaHeading: 'Discuss Underarm Sweating at Kensley Aesthetics',
    ctaBody:
      'If excessive sweating is affecting your routine, the most useful next step is a proper assessment of its cause and the appropriate range of care.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['neck-bands'],
  },

  /* 11 ─ Trapezius Muscles ────────────────────────────────────── */
  {
    _id: 'sub-treatment-anti-wrinkle-treatments-traptox',
    oldSlug: 'traptox',
    slug: 'trapezius-muscles',
    num: 11,
    label: 'Trapezius Muscles',
    image: 'https://cdn.sanity.io/images/puzajrus/production/e4820d4b58b6c4990bc75f8edc91f771fae2b8b9-1536x1024.webp',

    cardTitle: 'Trapezius Muscles',
    cardBody: 'The trapezius muscles run across the upper shoulders and neck. People sometimes ask about shoulder shape, while others are concerned about tightness, discomfort or postural problems. Those concerns should not be treated as the same issue. A responsible assessment considers health, muscle function and whether a GP, physiotherapist or another specialist is the better first point of contact.',
    cardLinkLabel: 'Explore Trapezius Muscle Consultations',

    seoTitle: 'Trapezius Muscle Consultation Newcastle | Kensley',
    seoDescription:
      'Questions about upper shoulder muscles, posture or trapezius shape? Learn what an assessment should consider and when to seek medical advice in Newcastle.',
    heroTitle: 'Trapezius Muscle Consultation in Newcastle upon Tyne',
    tagline: 'Understanding Upper-Shoulder Shape, Movement and Tension',
    description: `The trapezius muscles extend across the upper back, shoulders and neck. People may notice them for different reasons: the shape of the upper shoulders, an athletic build, tightness after desk work or discomfort during movement. These are different concerns with different possible causes.

If you are seeking advice in Newcastle, a professional assessment should prioritise normal muscle function and health rather than assume a cosmetic procedure is the answer.`,
    heroCtaLabel: 'Book a Consultation',
    pageSections: [
      {
        heading: 'What Do the Trapezius Muscles Do?',
        body: `The trapezius muscles help move and stabilise the shoulder blades, support neck posture and contribute to arm movement. Their size and shape vary with genetics, activity, work demands and anatomy. Upper-shoulder discomfort may arise from posture, overuse, stress, injury or other conditions.

Muscular prominence is not itself a medical problem, and reducing muscle size does not necessarily solve pain or improve posture.`,
      },
      {
        heading: 'Why Might You Want an Assessment?',
        body: `Some people are interested in shoulder proportions; others report soreness, headaches, restricted movement or persistent tension. The clinician should clarify which concern is most important and whether a GP or physiotherapist is the appropriate provider.

It is particularly important not to make aesthetic decisions that could compromise useful shoulder or neck function.`,
      },
      {
        heading: 'What Happens During a Consultation?',
        body: `A responsible review may include your symptoms, work and exercise habits, prior injuries, medications and relevant medical history. If you have pain, weakness, tingling, restricted motion or neurological symptoms, assessment by a suitable medical or musculoskeletal professional is important.

The clinician should explain whether the query is within their scope, what further investigation might be needed and whether a referral is preferable to cosmetic intervention.`,
      },
      {
        heading: 'Options, Alternatives and Realistic Expectations',
        body: `Depending on the cause, GP advice, physiotherapy, exercise modification, ergonomic changes or treating an underlying condition may be useful. Aesthetic procedures are not proven substitutes for diagnosing or treating musculoskeletal pain.

Some prescription-based approaches discussed online for altering trapezius appearance are outside established cosmetic indications and require particular scrutiny of the evidence, off-label status, risks and practitioner competence. They should not be promoted as routine services.`,
      },
      {
        heading: 'Recovery, Aftercare and Possible Risks',
        body: 'An intervention affecting shoulder or neck muscles may risk unwanted weakness, altered shoulder movement, discomfort or other complications. The neck and shoulder region also requires care regarding posture and function. New or progressive weakness, neurological symptoms or severe pain require appropriate medical attention. Treatment availability must be confirmed before any web page suggests that a procedure is offered.',
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Are prominent trapezius muscles unhealthy?',
        a: 'No. Muscle size and shape vary naturally, and can reflect exercise or anatomy. Aesthetic preferences alone do not imply a medical problem.',
      },
      {
        q: 'Can changing trapezius size fix neck or shoulder pain?',
        a: 'Not reliably. Pain may have several causes and usually needs proper medical or physiotherapy assessment rather than a cosmetic approach.',
      },
      {
        q: 'Should I see a physiotherapist for upper-shoulder tension?',
        a: 'Often that is appropriate, particularly if symptoms relate to posture, movement, work or exercise. Your GP can advise when further investigation is needed.',
      },
      {
        q: 'Could a muscle-directed procedure affect shoulder strength?',
        a: 'Potentially, yes. Risks to useful muscle function must be considered and explained by a qualified clinician.',
      },
      {
        q: 'Does Kensley offer treatment for this muscle?',
        a: 'Service availability has to be confirmed directly with the clinic. A consultation or referral may be more appropriate than an aesthetic procedure.',
      },
    ],
    ctaHeading: 'Discuss Trapezius Muscles at Kensley Aesthetics',
    ctaBody:
      'An informed decision about the upper shoulders begins with understanding muscle function, health and whether a referral is the most appropriate next step.',
    ctaLabel: 'Book Your Consultation',
    backLinkLabel: 'Back to Anti-Wrinkle Consultations',
    related: ['neck-bands', 'masseter-jaw-muscles'],
  },

];

/* Existing sub-treatments NOT in the new content plan — left untouched. */
export const ANTI_WRINKLE_HIDDEN_IDS = [
  'sub-treatment-anti-wrinkle-treatments-women-one-area',
  'sub-treatment-anti-wrinkle-treatments-women-two-areas',
  'sub-treatment-anti-wrinkle-treatments-women-three-areas',
  'sub-treatment-anti-wrinkle-treatments-men-one-area',
  'sub-treatment-anti-wrinkle-treatments-men-two-areas',
  'sub-treatment-anti-wrinkle-treatments-men-three-areas',
  'sub-treatment-anti-wrinkle-treatments-glabellar-lines',
  'sub-treatment-anti-wrinkle-treatments-eyebrow-lift',
  'sub-treatment-anti-wrinkle-treatments-teeth-grinding',
  'sub-treatment-anti-wrinkle-treatments-migraine-treatment',
];
