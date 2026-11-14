/**
 * Dermal Fillers — page content (Nov 2026 SEO / AEO / GEO content plan).
 *
 * Single source of truth for:
 *   • the local preview, before anything is pushed (pages fall back to this
 *     file whenever Sanity has not received the new fields yet)
 *   • scripts/push-dermal-fillers.mjs, which writes this content to Sanity
 *
 * Once pushed, Sanity wins: editors change the copy in Studio and the site
 * reads it from there. This file is then only a fallback.
 *
 * Text format used in every `body` / `description` / `cardBody` field:
 *   - a blank line starts a new paragraph
 *   - lines starting with "- " become a bullet list
 *   - a line starting with "> " becomes a highlighted quote
 */

export const DERMAL_FILLERS_SLUG = 'dermal-fillers';
export const DERMAL_FILLERS_MAIN_ID = 'mainTreatment-dermal-fillers';

/* ── Main page: /main-treatments/dermal-fillers ───────────────────── */
export const DERMAL_FILLERS_MAIN = {
  label: 'Dermal Fillers',
  image: 'https://cdn.sanity.io/images/puzajrus/production/7206ff09600ea94ce979ad66570147d21a58b438-500x500.png',

  seoTitle: 'Dermal Fillers Newcastle & Jesmond | Kensley Aesthetics',
  seoDescription:
    'Explore dermal fillers in Newcastle at Kensley Aesthetics, Jesmond. Learn about lip, cheek, chin and jawline fillers, suitability, risks and consultations.',

  heroTitle: 'Dermal Fillers in Newcastle upon Tyne',
  tagline: 'Explore Natural-Looking Facial Enhancement at Kensley Aesthetics',
  description: `Thinking about dermal fillers but unsure which treatment is right for you?

Perhaps you're interested in adding a little definition to your lips, restoring volume to your cheeks or understanding how different facial features work together.

At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, we believe the best place to begin is with an honest conversation about your goals.

Dermal fillers can be used to enhance certain facial contours, restore lost volume and soften the appearance of selected lines. Every face is different, and not every concern needs filler.

Our approach starts with understanding your features, medical history and expectations before discussing whether treatment may be suitable.`,
  heroCtaLabel: 'Book a Dermal Filler Consultation',

  introSections: [
    {
      heading: 'What Are Dermal Fillers?',
      body: `Dermal fillers are injectable treatments used to add volume or definition to selected areas of the face.

Many temporary dermal fillers are made using hyaluronic acid, a substance also found naturally in the body. These fillers are placed beneath the skin to support particular facial contours or address volume changes.

Dermal fillers are commonly considered for the lips, cheeks, chin, jawline and certain facial folds. They can also be used in more specialised areas, although these require additional assessment because the anatomy and risks differ.

The appropriate product, treatment area and amount depend on your facial anatomy, medical history and the outcome you hope to achieve.`,
    },
    {
      heading: 'What Can Dermal Fillers Help With?',
      body: `People explore dermal fillers for different reasons.

Some want to restore facial volume that has changed over time. Others may wish to explore subtle improvements in lip definition, facial proportions or the appearance of lines around the mouth.

Common areas of interest include:

- Lip shape and definition.
- Cheek volume and contour.
- Chin projection and facial profile.
- Jawline definition.
- Nasolabial folds and marionette lines.
- Facial balancing.
- Selected under-eye, nose and temple concerns.

Not every concern is caused by a lack of volume. During your consultation, your practitioner should assess whether fillers are appropriate or whether a different approach, including no treatment, may be more suitable.`,
    },
    {
      heading: 'Understanding Natural-Looking Dermal Filler Results',
      body: `One of the most common questions patients ask is:

> "Will I still look like myself?"

This is an important part of any dermal filler consultation.

A carefully planned treatment considers your existing features, facial proportions and expressions rather than following the same look for everyone.

For some patients, this may mean exploring a small amount of volume in one area. For others, it may mean discussing how several facial features relate to one another.

However, natural-looking results cannot be guaranteed. The outcome depends on anatomy, product choice, treatment technique, healing and individual response.

You should feel comfortable discussing your preferences and concerns before making any decision.`,
    },
  ],

  treatmentsHeading: 'Explore Our Dermal Filler Treatments',
  treatmentsIntro:
    'Discover the different areas where dermal fillers may be considered. Each treatment has its own purpose, suitability requirements and potential risks.',

  pageSections: [
    {
      heading: 'Which Dermal Filler Treatment Is Right for Me?',
      body: `You do not need to decide which filler treatment you want before booking a consultation.

You may know exactly which area you would like to discuss, or you may simply have a question about your facial features.

Your practitioner can assess the concern, explain possible options and help you understand whether filler is likely to meet your expectations.

The most suitable approach depends on your anatomy, health, individual goals and willingness to accept the risks involved.

Sometimes, choosing not to have treatment is the appropriate outcome.`,
    },
    {
      heading: 'What Happens During a Dermal Filler Consultation?',
      body: `Your consultation is an opportunity to ask questions and receive advice based on your individual circumstances.

Your practitioner should discuss your medical history, previous cosmetic treatments, medications, allergies and any relevant health concerns.

They should also examine the area you are interested in and explain the available options, expected limitations, aftercare and potential complications.

If dermal fillers are considered suitable, you can discuss the proposed treatment plan, products, costs and follow-up arrangements.

You should have time to consider the information without pressure to proceed.`,
    },
    {
      heading: 'What Happens During Dermal Filler Treatment?',
      body: `If you decide to proceed following an appropriate assessment and informed consent, your practitioner will explain the planned procedure.

The treatment area is prepared, and the selected filler is placed using an appropriate clinical technique.

You may experience discomfort, pressure or tenderness during the procedure. The exact process depends on the treatment area and individual plan.

Your practitioner should provide written aftercare information and explain how to contact the clinic if you experience any problems.`,
    },
    {
      heading: 'Recovery, Aftercare and Possible Side Effects',
      body: `Swelling, tenderness, redness and bruising can occur following dermal filler treatment.

The degree of swelling and recovery varies by treatment area and individual response.

Less common complications can include infection, lumps, persistent swelling, filler migration and unwanted changes in appearance.

Rare but serious complications can occur if filler affects a blood vessel. These may include tissue injury and visual complications.

Severe or increasing pain, unusual skin whitening or discolouration, or any visual disturbance requires urgent medical attention.

Your practitioner should explain the specific risks and provide emergency contact and aftercare arrangements before treatment.`,
    },
    {
      heading: 'How Long Do Dermal Fillers Last?',
      body: `Dermal fillers are not permanent when a temporary product is used, but the duration varies considerably.

How long an effect remains visible depends on the product, area treated, amount used, individual metabolism and other factors.

Some patients may notice changes over several months, while others may retain visible effects for longer.

Your practitioner should explain reasonable expectations for the specific product and treatment area rather than promise a fixed duration.`,
    },
    {
      heading: 'Dermal Filler Prices in Newcastle',
      body: `Dermal filler prices vary depending on the area, practitioner, amount of product required and complexity of treatment.

At Kensley Aesthetics, you can explore the clinic's published treatment pricing before arranging your consultation.

Your practitioner should confirm the total cost of any proposed treatment, including relevant follow-up charges, before you decide to proceed.`,
      linkLabel: 'View Dermal Filler Prices',
      linkUrl: '/prices',
    },
    {
      heading: 'Why Consider Kensley Aesthetics?',
      body: `Choosing a clinic is about more than selecting a treatment from a list.

You should know who will assess you, who would perform your treatment and what qualifications, experience and complication-management arrangements they have.

Kensley Aesthetics is based in Jesmond, Newcastle upon Tyne, and offers a consultation pathway for patients considering facial aesthetic treatments.

We encourage you to ask questions, understand your options and make an informed decision.`,
      linkLabel: 'Learn About Kensley Aesthetics',
      linkUrl: '/about',
    },
  ],

  faqHeading: 'Frequently Asked Questions About Dermal Fillers',
  faqs: [
    {
      q: 'Do dermal fillers look natural?',
      a: 'Dermal fillers can create subtle changes, but natural-looking results depend on facial anatomy, product choice, practitioner technique and individual response. No particular appearance can be guaranteed.',
    },
    {
      q: 'Are dermal fillers suitable for everyone?',
      a: 'No. Suitability depends on your age, medical history, anatomy, treatment goals and other factors. An assessment is needed before treatment can be recommended.',
    },
    {
      q: 'Can dermal fillers be dissolved?',
      a: 'Certain hyaluronic acid fillers can be treated with hyaluronidase, but dissolving treatment has its own risks and cannot guarantee a complete reversal of every effect or complication.',
    },
    {
      q: 'How long do dermal fillers last?',
      a: 'Duration varies by product, treatment area and individual factors. Your practitioner can explain the expected range for the specific treatment being considered.',
    },
    {
      q: 'What are the risks of dermal fillers?',
      a: 'Common side effects include swelling, tenderness and bruising. Other complications can include infection, nodules and vascular injury. Rare serious complications may involve skin damage or visual impairment.',
    },
    {
      q: 'How much do dermal fillers cost in Newcastle?',
      a: 'Prices depend on the area, product, practitioner and treatment plan. Visit our published prices page and discuss the full cost during your consultation.',
    },
    {
      q: 'Can I book a consultation without choosing a treatment first?',
      a: 'Yes. A consultation is an appropriate starting point if you are unsure which treatment may suit your concerns or whether fillers are appropriate at all.',
    },
  ],

  ctaHeading: 'Book a Dermal Filler Consultation in Jesmond, Newcastle',
  ctaBody:
    'Whether you have a specific treatment in mind or simply want to understand your options, a consultation can help you make an informed decision.',
  ctaAddress: `Kensley Aesthetics
Old Brewery Court, 156 Sandyford Road
Jesmond, Newcastle upon Tyne, NE2 1XG`,
  ctaPhone: '0333 057 0295',
  ctaLabel: 'Book Your Consultation',
};

/* ── The 10 treatment pages: /main-treatments/dermal-fillers/<slug> ──
 * `_id`      Sanity document id. The first nine already exist in Sanity
 *            (their images are kept); Facial Balancing is new.
 * `oldSlug`  slug before Nov 2026; the old URL 301-redirects to the new one.
 * `card*`    the row shown for this treatment on the main Dermal Fillers page.
 * `related`  slugs of related treatment pages (Part 3, rule 3 of the plan).
 */
const IMG = 'https://cdn.sanity.io/images/puzajrus/production/';

export const DERMAL_FILLERS_SUBS = [
  /* 1 ─ Lip Fillers ─────────────────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-lips-1ml',
    oldSlug: 'lips-1ml',
    slug: 'lip-fillers',
    num: 1,
    label: 'Lip Fillers',
    image: `${IMG}b898a91e3973a6777b7637819cfeea3eb7a9d33f-1536x1024.webp`,

    cardTitle: 'Lip Fillers in Newcastle',
    cardBody: `Lip fillers are often considered by people who would like to explore changes to lip definition, shape or volume.

For some patients, the main concern is a less-defined lip border. Others may notice differences between the upper and lower lip or feel that their lip proportions have changed over time.

Lip filler treatment can be planned around your existing facial features rather than a particular trend or standard lip shape.

At Kensley Aesthetics, a consultation would consider your natural lip anatomy, movement, facial proportions and preferred outcome. Your practitioner should also explain swelling, bruising, possible complications and the limitations of treatment.`,
    cardLinkLabel: 'Explore Lip Fillers',

    seoTitle: 'Lip Fillers Newcastle | Natural Lip Enhancement | Kensley',
    seoDescription:
      'Considering lip fillers in Newcastle? Learn about lip shape, definition, swelling, suitability and risks at Kensley Aesthetics in Jesmond.',
    heroTitle: 'Lip Fillers in Newcastle upon Tyne',
    tagline: 'Your Lips, Your Shape, Your Choice',
    description: `Thinking about lip fillers but worried about looking overdone?

You may want a little more definition around your lip border, a subtle change in volume or a better understanding of your natural lip proportions.

Lip filler treatment is not about giving everyone the same lips. It should begin with understanding what you like about your existing features and what you would prefer to change, if anything.

At Kensley Aesthetics in Jesmond, Newcastle upon Tyne, you can arrange a consultation to discuss your options.`,
    heroCtaLabel: 'Book a Lip Filler Consultation',
    pageSections: [
      {
        heading: 'What Are Lip Fillers?',
        body: `Lip fillers are injectable treatments that can add volume or definition to selected parts of the lips.

Hyaluronic acid fillers may be used to alter the appearance of the upper or lower lip, define the lip border or address certain differences in proportion.

The appropriate approach depends on the lips' natural anatomy and movement, existing volume, previous treatments and individual goals.`,
      },
      {
        heading: 'What Can Lip Fillers Help With?',
        body: `People explore lip fillers for different reasons.

Some are interested in the definition of their Cupid's bow or lip border. Others may notice differences in the appearance of their upper and lower lip or wish to discuss age-related volume changes.

Your practitioner should assess your lips both at rest and while speaking or smiling.

Perfect symmetry is not always possible or desirable. The objective is to understand whether a proposed change could suit your features and expectations.`,
      },
      {
        heading: 'What Happens at a Lip Filler Consultation?',
        body: `Your consultation should include a discussion of your medical history, previous filler treatments, any history of cold sores and your desired outcome.

Your practitioner should explain the proposed product, amount, limitations, risks, likely recovery and total cost.

The amount of filler needed cannot be decided from an online photograph alone.

You should also have an opportunity to ask whether no treatment or a different approach might be more appropriate.`,
      },
      {
        heading: 'Treatment, Recovery and Aftercare',
        body: `If you decide to proceed, your practitioner will explain the procedure and obtain informed consent.

Following lip filler treatment, swelling and bruising are common. Lips may temporarily look fuller or less even while swelling settles.

Other possible complications include lumps, infection, filler migration and vascular injury.

Your practitioner should provide aftercare instructions and explain which symptoms require urgent medical advice.

The final appearance should not be judged immediately after treatment.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Will lip fillers make my lips look unnatural?',
        a: 'Not necessarily, but no appearance can be guaranteed. The outcome depends on your anatomy, product choice, amount used, treatment technique and healing.',
      },
      {
        q: 'How much lip filler will I need?',
        a: 'There is no standard amount suitable for everyone. Your practitioner should assess your lips and discuss whether treatment is appropriate before recommending a quantity.',
      },
      {
        q: 'How long do lip fillers last?',
        a: 'The visible effect varies by product, treatment area and individual factors. Your practitioner can explain the expected duration for your proposed treatment.',
      },
      {
        q: 'Can lip fillers move outside the lip border?',
        a: 'Filler migration can occur. Previous treatment history, product choice, technique and individual response should be considered during assessment.',
      },
      {
        q: 'How much do lip fillers cost at Kensley Aesthetics?',
        a: 'Visit our treatment prices page for current pricing. The full cost and any follow-up charges should be explained before treatment.',
      },
    ],
    ctaHeading: 'Discuss Lip Fillers at Kensley Aesthetics',
    ctaBody:
      "Whether you're exploring lip fillers for the first time or have questions about previous treatment, a consultation is an opportunity to receive personalised information.",
    ctaLabel: 'Book a Lip Filler Consultation',
    backLinkLabel: 'Back to All Dermal Filler Treatments',
    related: [],
  },

  /* 2 ─ Cheek Fillers ───────────────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-cheeks',
    oldSlug: 'cheeks',
    slug: 'cheek-fillers',
    num: 2,
    label: 'Cheek Fillers',
    image: `${IMG}63dc784c967ccbdadbd4925092aa84810981cae0-1536x1024.webp`,

    cardTitle: 'Cheek Fillers in Newcastle',
    cardBody: `Have you noticed changes in the shape or fullness of your cheeks?

Cheek fillers are sometimes considered to address volume changes in the mid-face or to explore a different cheek contour.

As facial volume and soft tissues change over time, the cheeks may appear less full. However, the appearance of the mid-face also depends on bone structure, skin and surrounding tissues.

A cheek filler consultation should look at your face as a whole, including your natural proportions and how the cheeks relate to the under-eye and lower-face areas.

Treatment may be appropriate for some people, but additional cheek volume is not always the right answer.`,
    cardLinkLabel: 'Explore Cheek Fillers',

    seoTitle: 'Cheek Fillers Newcastle | Mid-Face Volume | Kensley',
    seoDescription:
      'Explore cheek fillers in Newcastle, including facial proportions, mid-face volume, suitability, risks and consultation options in Jesmond.',
    heroTitle: 'Cheek Fillers in Newcastle upon Tyne',
    tagline: 'Understanding Cheek Volume and Facial Contours',
    description: `Have your cheeks always had a softer shape, or have you noticed changes in their fullness over time?

Your cheeks play an important part in the proportions of your face. Their appearance is influenced by bone structure, facial fat, skin and surrounding tissues.

Some people explore cheek fillers because they would like to understand whether adding volume to the mid-face could address a particular concern.

At Kensley Aesthetics in Jesmond, a consultation can help you explore the possibilities without assuming that filler is the right choice.`,
    pageSections: [
      {
        heading: 'What Are Cheek Fillers?',
        body: `Cheek fillers are injectable treatments used to add volume in selected areas of the mid-face.

Hyaluronic acid fillers may be used to support a particular cheek contour or address selected volume changes.

However, adding volume does not produce the same outcome for every patient, and cheek fillers are not a substitute for a surgical facelift.

The treatment plan must consider your existing facial shape and the surrounding tissues.`,
      },
      {
        heading: 'Why Do People Consider Cheek Fillers?',
        body: `Some people naturally have less prominent cheek contours. Others notice that their mid-face looks different as they get older.

Patients may wish to discuss volume changes, cheek definition or the relationship between the cheeks and lower eyelids.

It is important to understand the cause of the concern. If skin laxity or another structural factor is mainly responsible, cheek filler may not provide the change someone expects.

A facial assessment helps distinguish between these possibilities.`,
      },
      {
        heading: 'What Happens During the Consultation?',
        body: `Your practitioner should examine your facial proportions, skin, cheek structure and previous treatment history.

They should discuss the areas that could be considered for treatment, realistic outcomes, potential alternatives and the risks associated with the procedure.

A good consultation also considers whether adding volume might make the face appear fuller than intended.`,
      },
      {
        heading: 'Treatment and Recovery',
        body: `If cheek fillers are appropriate, your practitioner will explain how the selected product would be placed and what to expect.

Swelling, tenderness and bruising are possible after treatment.

Other risks include asymmetry, lumps, infection and vascular complications, which can occasionally be serious.

Aftercare and follow-up instructions should be provided.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can cheek fillers make my face look more lifted?',
        a: 'Adding mid-face volume may alter the appearance of the cheek contour in selected patients, but fillers do not reproduce the effects of a surgical lift.',
      },
      {
        q: 'Do cheek fillers help with under-eye hollows?',
        a: 'The cheek and under-eye areas are related anatomically. However, not every under-eye concern is caused by cheek volume loss. An assessment is needed.',
      },
      {
        q: 'How long do cheek fillers last?',
        a: 'The duration varies according to the product, placement and individual factors. Your practitioner should explain the likely range for your treatment.',
      },
      {
        q: 'Will cheek fillers make my face look bigger?',
        a: 'Additional volume may change how full the face appears. Your consultation should include an honest discussion of this possibility and whether treatment suits your preferences.',
      },
    ],
    ctaHeading: 'Explore Cheek Filler Options',
    ctaBody:
      'Find out whether cheek fillers may be relevant to your concerns through a personalised consultation in Jesmond, Newcastle.',
    ctaLabel: 'Book a Consultation',
    backLinkLabel: 'Back to Dermal Fillers in Newcastle',
    related: ['tear-trough-fillers'],
  },

  /* 3 ─ Chin Fillers ────────────────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-chin',
    oldSlug: 'chin',
    slug: 'chin-fillers',
    num: 3,
    label: 'Chin Fillers',
    image: `${IMG}711c28e0c90401de2adc6828cbfbc4ad7e995d01-1536x1024.webp`,

    cardTitle: 'Chin Fillers in Newcastle',
    cardBody: `Your chin plays an important role in how your face looks from the front and side.

Some people explore chin fillers because they would like to understand their facial profile, chin projection or the relationship between their chin, lips and jawline.

Hyaluronic acid filler can sometimes be used to add volume in carefully selected areas of the chin.

During a consultation, your practitioner should assess your existing facial structure and explain what filler may or may not achieve.

Chin fillers cannot replace surgical treatment for significant structural or bite-related concerns, and treatment suitability depends on your anatomy and individual circumstances.`,
    cardLinkLabel: 'Explore Chin Fillers',

    seoTitle: 'Chin Fillers Newcastle | Chin & Profile | Kensley',
    seoDescription:
      'Learn about chin fillers in Newcastle, including chin projection, profile, suitability, realistic results and treatment risks at Kensley Aesthetics.',
    heroTitle: 'Chin Fillers in Newcastle upon Tyne',
    tagline: 'Thinking About Your Chin or Side Profile?',
    description: `Sometimes a small feature can influence how we see the overall proportions of our face.

For some patients, that feature is the chin.

You may be interested in your side profile, the relationship between your chin and lips or how your chin contributes to the appearance of your lower face.

At Kensley Aesthetics, you can discuss these concerns without needing to decide on treatment beforehand.`,
    pageSections: [
      {
        heading: 'What Are Chin Fillers?',
        body: `Chin fillers use injectable dermal filler to add volume in selected areas of the chin.

In suitable patients, treatment may change the appearance of chin projection or contour.

However, the chin is supported by bone, muscle and soft tissues. Fillers cannot correct every structural concern and do not replace surgery where significant skeletal changes are required.`,
      },
      {
        heading: 'What Can Chin Fillers Address?',
        body: `Some people naturally have a less prominent chin. Others wish to explore facial profile or proportion concerns.

A consultation should examine the chin from the front and side, including how it relates to the nose, lips and jawline.

The practitioner should also consider whether a concern involves dental or skeletal relationships that would be better assessed by another specialist.`,
      },
      {
        heading: 'What Happens During the Consultation?',
        body: `Your practitioner should discuss what you would like to achieve and examine the structure of your chin and lower face.

They should explain whether filler could produce a suitable change, what limitations exist and whether treatment is appropriate.

The proposed amount of filler should be based on assessment, not a fixed package or standard facial measurement.`,
      },
      {
        heading: 'Treatment, Aftercare and Risks',
        body: `Chin filler treatment may cause temporary swelling, bruising or tenderness.

Other complications can include unevenness, infection, lumps and vascular injury.

You should receive clear aftercare instructions, information about possible complications and guidance on when to seek help.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can chin fillers improve my side profile?',
        a: 'Chin fillers may alter the appearance of projection or contour in suitable patients. The outcome depends on your existing anatomy and cannot be guaranteed.',
      },
      {
        q: 'Are chin fillers the same as jawline fillers?',
        a: 'No. Chin fillers focus on the chin, while jawline fillers address selected areas along the lower jaw. Both affect facial proportions differently.',
      },
      {
        q: 'Can chin fillers correct an overbite or underbite?',
        a: 'No. Dermal fillers cannot correct the underlying bite or jaw relationship. Dental or specialist assessment may be needed for those concerns.',
      },
      {
        q: 'How long do chin fillers last?',
        a: 'The visible duration depends on the selected product, treatment technique and individual response.',
      },
    ],
    ctaHeading: 'Explore Your Chin Filler Options',
    ctaBody:
      'A consultation can help you understand the role of chin projection in your facial proportions and whether filler is appropriate.',
    ctaLabel: 'Book a Consultation',
    backLinkLabel: 'Back to Dermal Fillers',
    related: ['jawline-fillers', 'facial-balancing'],
  },

  /* 4 ─ Jawline Fillers ─────────────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-jawline',
    oldSlug: 'jawline',
    slug: 'jawline-fillers',
    num: 4,
    label: 'Jawline Fillers',
    image: `${IMG}f3da1f06a122040e0977c8188847bace8526450d-1536x1024.webp`,

    cardTitle: 'Jawline Fillers in Newcastle',
    cardBody: `A defined jawline can mean different things to different people.

Some patients are interested in understanding whether filler could add contour to a particular part of the lower face. Others may notice changes in facial volume or definition over time.

Jawline fillers may be considered to add volume or definition in selected areas, but they cannot address every cause of a less-defined jawline.

Skin laxity, facial fat, muscle and bone structure all contribute to the appearance of the lower face.

A personalised assessment helps determine whether jawline filler may be appropriate and what results would be realistic.`,
    cardLinkLabel: 'Explore Jawline Fillers',

    seoTitle: 'Jawline Fillers Newcastle | Facial Definition | Kensley',
    seoDescription:
      'Considering jawline fillers in Newcastle? Understand jawline definition, suitability, limitations, risks and consultation options at Kensley Aesthetics.',
    heroTitle: 'Jawline Fillers in Newcastle upon Tyne',
    tagline: 'Explore Lower-Face Definition That Suits You',
    description: `A jawline can be naturally soft, angular, rounded or somewhere in between.

There is no single jaw shape that suits everyone.

Some people explore jawline fillers because they would like to understand whether selected changes to the lower-face contour could complement their existing features.

At Kensley Aesthetics in Jesmond, the starting point is an individual assessment of your face, rather than following a particular trend.`,
    pageSections: [
      {
        heading: 'What Are Jawline Fillers?',
        body: `Jawline fillers are injectable treatments used to add volume or definition along selected parts of the jaw.

The appearance of the lower face is influenced by bone structure, skin, soft tissue and muscle.

In suitable patients, dermal filler may change the appearance of the jaw contour. However, it does not remove fat, correct significant skin laxity or reproduce the effects of surgery.`,
      },
      {
        heading: 'Who Might Consider Jawline Fillers?',
        body: `People may explore treatment because their lower-face definition has changed with age or because they are interested in particular facial proportions.

Some want to discuss the angle of their jaw, while others are interested in the relationship between their jawline and chin.

The practitioner should understand the specific concern before deciding whether filler could be useful.

More product does not automatically produce a better outcome.`,
      },
      {
        heading: 'Consultation and Treatment Planning',
        body: `Your practitioner should examine your jawline from different angles and review your medical and treatment history.

The assessment should consider skin laxity, tissue distribution, facial proportions and realistic limitations.

If filler is unlikely to produce the desired outcome, that should be explained before any decision is made.`,
      },
      {
        heading: 'Recovery and Possible Risks',
        body: `Temporary swelling, tenderness and bruising may follow jawline filler treatment.

Other possible complications include irregularities, lumps, infection and vascular injury.

Your practitioner should explain the recovery process, aftercare and warning signs that require urgent attention.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can jawline filler give me a sharper jawline?',
        a: 'It may add definition in selected patients, but the result depends on your anatomy and cannot be guaranteed.',
      },
      {
        q: 'Can jawline fillers remove a double chin?',
        a: 'No. Fillers do not remove fat beneath the chin. The cause of the concern should be assessed before treatment options are discussed.',
      },
      {
        q: 'Do I need chin and jawline fillers together?',
        a: 'Not necessarily. These are different treatment areas. A consultation should determine whether one, both or neither is appropriate.',
      },
      {
        q: 'Is jawline filler suitable for men and women?',
        a: 'Suitability depends on individual anatomy and treatment goals rather than gender alone.',
      },
    ],
    ctaHeading: 'Discuss Jawline Fillers in Jesmond',
    ctaBody:
      'Explore your options through a consultation focused on your facial features, expectations and safety.',
    ctaLabel: 'Book a Consultation',
    backLinkLabel: 'Back to All Dermal Filler Treatments',
    related: ['chin-fillers'],
  },

  /* 5 ─ Nasolabial Fold Fillers ─────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-nasolabial-folds',
    oldSlug: 'nasolabial-folds',
    slug: 'nasolabial-fold-fillers',
    num: 5,
    label: 'Nasolabial Fold Fillers',
    image: `${IMG}6c598772e5cc79b5ac484b64b0578ec7786e1503-1536x1024.webp`,

    cardTitle: 'Nasolabial Fold Fillers in Newcastle',
    cardBody: `Nasolabial folds are the lines that run from the sides of the nose towards the corners of the mouth.

These folds are a normal part of facial anatomy. They can become more noticeable because of natural facial movement, volume changes and the way facial tissues develop over time.

Some patients consider dermal fillers to soften the appearance of these folds.

However, adding filler directly into the fold is not always the most suitable option. The surrounding cheek and mid-face areas may also need assessment.

Your practitioner should explain the possible benefits, limitations and risks before recommending any treatment.`,
    cardLinkLabel: 'Explore Nasolabial Fold Fillers',

    seoTitle: 'Nasolabial Fold Fillers Newcastle | Kensley Aesthetics',
    seoDescription:
      'Understand nasolabial folds, what makes them more noticeable, when filler may help and what to expect at a consultation in Jesmond, Newcastle.',
    heroTitle: 'Nasolabial Fold Fillers in Newcastle',
    tagline: 'Understanding the Lines Around Your Nose and Mouth',
    description: `Have you noticed that the lines beside your nose look more noticeable when you smile or when your face is at rest?

These are known as nasolabial folds.

They are a normal part of facial anatomy, although their depth and appearance vary between people.

If you are considering treatment, it is worth understanding what contributes to these folds before deciding whether dermal filler is appropriate.`,
    pageSections: [
      {
        heading: 'What Are Nasolabial Folds?',
        body: `Nasolabial folds extend from the sides of the nose towards the corners of the mouth.

Their appearance is influenced by facial expressions, skin, underlying tissues and changes in facial volume.

Some people have visible folds from a young age, while others notice them becoming more prominent over time.

Having nasolabial folds does not mean that treatment is necessary.`,
      },
      {
        heading: 'Can Dermal Fillers Help Nasolabial Folds?',
        body: `In suitable patients, hyaluronic acid filler may soften the appearance of selected folds.

However, the location where the fold is visible is not always the only area that needs assessment.

Changes in cheek volume and surrounding tissue support can influence the way a fold looks.

This is why directly placing filler into the line may not always be the best approach.`,
      },
      {
        heading: 'What Happens at Your Consultation?',
        body: `Your practitioner should assess the fold at rest and during facial movement.

They should consider the surrounding cheek and mid-face areas, your medical history and previous filler treatment.

The consultation should explain what may be achievable, the risk of adding unwanted fullness and whether alternatives should be considered.`,
      },
      {
        heading: 'Treatment, Recovery and Safety',
        body: `Swelling, bruising and tenderness may occur after filler treatment.

Other risks include lumps, infection, asymmetry and vascular complications.

Your practitioner should explain the risks relevant to this facial area and give you clear aftercare instructions.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can nasolabial folds disappear completely?',
        a: 'A complete removal of the folds should not be promised. They are part of normal facial anatomy, and any improvement depends on the cause and treatment suitability.',
      },
      {
        q: 'Are smile lines and nasolabial folds the same thing?',
        a: 'The terms are often used together. Nasolabial folds are the creases running from the sides of the nose towards the mouth corners.',
      },
      {
        q: 'Will cheek filler be better than filling the fold directly?',
        a: 'It depends on your anatomy. The cheek and mid-face areas can influence the appearance of these folds, but there is no single correct approach for every patient.',
      },
      {
        q: 'Do I need treatment if my folds show when I smile?',
        a: 'No. Visible folds during facial movement are normal. Whether to consider any procedure is a personal decision that should follow an appropriate assessment.',
      },
    ],
    ctaHeading: 'Discuss Nasolabial Fold Treatment',
    ctaBody:
      'If you would like to understand your options for lines around the nose and mouth, arrange a consultation at Kensley Aesthetics.',
    ctaLabel: 'Book a Consultation',
    backLinkLabel: 'Back to Dermal Fillers in Newcastle',
    related: ['cheek-fillers', 'marionette-line-fillers'],
  },

  /* 6 ─ Marionette Line Fillers ─────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-marionette-lines',
    oldSlug: 'marionette-lines',
    slug: 'marionette-line-fillers',
    num: 6,
    label: 'Marionette Line Fillers',
    image: `${IMG}cb9edbb2189a5e99c048a387c0b08678f7599e8a-1536x1024.webp`,

    cardTitle: 'Marionette Line Fillers in Newcastle',
    cardBody: `Marionette lines are the lines that extend downwards from the corners of the mouth towards the chin.

For some people, these lines become more noticeable over time as facial volume, skin and supporting tissues change.

Dermal fillers may be considered for selected marionette lines, particularly where loss of volume contributes to their appearance.

However, deeper folds and changes associated with skin laxity may not respond adequately to filler alone.

A consultation should assess the area around your mouth, chin and lower face before discussing treatment options.

The aim is to understand what is causing the concern rather than simply treating the visible line.`,
    cardLinkLabel: 'Explore Marionette Line Fillers',

    seoTitle: 'Marionette Line Fillers Newcastle | Kensley Aesthetics',
    seoDescription:
      'Explore marionette line fillers in Newcastle. Understand lines around the mouth, treatment suitability, risks and consultation options in Jesmond.',
    heroTitle: 'Marionette Line Fillers in Newcastle',
    tagline: 'Understanding Lines Around the Corners of Your Mouth',
    description: `Have you noticed lines extending downwards from the corners of your mouth?

These are called marionette lines.

They are a common part of facial ageing and can also be influenced by natural facial structure, expressions and the way soft tissues are supported.

Some people explore dermal fillers to understand whether the appearance of these lines could be softened.

At Kensley Aesthetics in Jesmond, the first step is understanding your individual concerns.`,
    pageSections: [
      {
        heading: 'What Are Marionette Lines?',
        body: `Marionette lines are creases that run downwards from the corners of the mouth towards the chin.

They can become more noticeable as skin elasticity, facial volume and lower-face tissues change.

The depth and appearance of the lines vary from person to person.

Not all marionette lines are caused by a lack of volume, so filler is not always the most suitable option.`,
      },
      {
        heading: 'How Might Dermal Fillers Help?',
        body: `Hyaluronic acid fillers may be considered to add volume to selected areas around the mouth and lower face.

In suitable patients, this may soften the appearance of certain lines.

However, where skin laxity or changes in tissue position are the main concern, filler alone may have limited benefit.

An individual assessment is necessary before recommending treatment.`,
      },
      {
        heading: 'Consultation and Treatment Planning',
        body: `Your practitioner should examine the corners of your mouth, chin and lower-face structure.

They should discuss your expectations, medical history, previous treatment and any alternatives.

The aim is to determine whether adding volume is appropriate rather than automatically filling every visible line.`,
      },
      {
        heading: 'Recovery and Risks',
        body: `Possible side effects include swelling, bruising, tenderness and temporary irregularities.

Other complications can include infection, lumps and vascular injury.

The potential benefits, limitations, recovery and appropriate aftercare should be explained before treatment.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can marionette line fillers lift the corners of my mouth?',
        a: 'Filler may alter the appearance of selected areas around the mouth, but it cannot reliably lift all downward-pointing mouth corners or correct every cause.',
      },
      {
        q: 'Are marionette lines the same as nasolabial folds?',
        a: 'No. Nasolabial folds extend from the sides of the nose towards the mouth. Marionette lines extend downwards from the mouth corners.',
      },
      {
        q: 'Can I treat marionette lines without filler?',
        a: 'Depending on the cause of the concern, your practitioner may discuss alternatives or recommend no treatment.',
      },
      {
        q: 'How long might treatment results last?',
        a: 'Duration varies according to product, placement and individual response. Your practitioner should explain the expected range.',
      },
    ],
    ctaHeading: 'Explore Your Options',
    ctaBody:
      'If lines around your mouth are something you would like to discuss, arrange a personalised consultation.',
    ctaLabel: 'Book a Consultation',
    backLinkLabel: 'Back to Dermal Fillers in Newcastle',
    related: ['nasolabial-fold-fillers'],
  },

  /* 7 ─ Facial Balancing (new — no image yet; add one in Studio) ─── */
  {
    _id: 'sub-treatment-dermal-fillers-facial-balancing',
    oldSlug: null,
    slug: 'facial-balancing',
    num: 7,
    label: 'Facial Balancing',
    image: null,

    cardTitle: 'Facial Balancing in Newcastle',
    cardBody: `Sometimes the question is not about one feature. It is about how your facial features look together.

Facial balancing is an assessment-led approach that considers the relationship between areas such as the cheeks, lips, chin and jawline.

For example, someone who is thinking about chin filler may benefit from understanding how their chin relates to their overall profile before making a decision.

Facial balancing does not automatically mean treating several areas.

A consultation may identify one area worth discussing, several possible options or no need for filler at all.

At Kensley Aesthetics, the focus should be on creating a treatment plan that reflects your own features and preferences rather than following a standard formula.`,
    cardLinkLabel: 'Explore Facial Balancing',

    seoTitle: 'Facial Balancing Newcastle | Kensley Aesthetics',
    seoDescription:
      'Discover an individual approach to facial balancing in Newcastle. Explore facial proportions, dermal filler options and personalised consultations in Jesmond.',
    heroTitle: 'Facial Balancing in Newcastle upon Tyne',
    tagline: "It's Not About Changing Your Face. It's About Understanding It.",
    description: `Have you ever wondered why one feature can look different depending on the rest of your face?

The way we see our facial features is influenced by their relationship with one another.

Your lips, cheeks, nose, chin and jawline all contribute to your overall facial proportions.

Facial balancing is an assessment-led approach to understanding these relationships and exploring whether any aesthetic treatment could be appropriate.`,
    pageSections: [
      {
        heading: 'What Is Facial Balancing?',
        body: `Facial balancing considers facial proportions from different angles rather than focusing on one feature in isolation.

For example, a person interested in chin filler may want to understand how chin projection relates to their lips and jawline.

Someone considering cheek fillers may wish to explore the relationship between cheek volume and the lower face.

Facial balancing does not mean everyone needs multiple filler treatments.

Sometimes an assessment may lead to discussing one area. At other times, no treatment may be recommended.`,
      },
      {
        heading: 'How Does a Facial Balancing Consultation Work?',
        body: `The practitioner should examine your facial features at rest and during expression.

They should listen to your preferences and discuss your existing proportions, previous treatments and medical history.

If dermal fillers are considered, the practitioner should explain the purpose of each proposed area, including the limitations and risks.

The number of treatment areas and amount of product should never be decided by a standard package alone.`,
      },
      {
        heading: 'What Can Facial Balancing Realistically Achieve?',
        body: `In suitable patients, carefully selected filler treatment may alter particular facial contours.

However, fillers do not correct all structural differences, and facial symmetry cannot be guaranteed.

There is also no universal ideal facial proportion.

The objective is to help you make an informed decision based on your features and expectations.`,
      },
      {
        heading: 'Safety and Aftercare',
        body: `The risks depend on the specific treatment areas involved.

Common side effects may include bruising and swelling, while more serious complications can include infection or vascular injury.

Your practitioner should discuss the risks of each proposed procedure separately.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Does facial balancing involve several filler treatments?',
        a: 'Not necessarily. It is an approach to assessment and planning. One area, several areas or no treatment may be appropriate.',
      },
      {
        q: 'Can facial balancing make my face perfectly symmetrical?',
        a: 'No. Natural facial asymmetry is common, and perfect symmetry should not be promised.',
      },
      {
        q: 'Is facial balancing only for women?',
        a: 'No. Assessment of facial proportions is relevant to adults of any gender.',
      },
      {
        q: 'How much does facial balancing cost?',
        a: 'The cost depends on the treatments, if any, that are recommended. A full written quotation should be provided before you decide to proceed.',
      },
    ],
    ctaHeading: 'Explore Facial Balancing at Kensley Aesthetics',
    ctaBody:
      'A consultation can help you understand your facial proportions and make an informed decision about possible treatments.',
    ctaLabel: 'Book a Facial Balancing Consultation',
    backLinkLabel: 'Explore All Dermal Filler Treatments',
    related: ['chin-fillers', 'jawline-fillers', 'cheek-fillers', 'lip-fillers'],
  },

  /* 8 ─ Non-Surgical Rhinoplasty ────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-non-surgical-rhinoplasty',
    oldSlug: null,
    slug: 'non-surgical-rhinoplasty',
    num: 8,
    label: 'Non-Surgical Rhinoplasty',
    image: `${IMG}d9bfc4fd287ddd50eef9f88a20a64f2da5a7af5f-1536x1024.webp`,

    cardTitle: 'Non-Surgical Rhinoplasty in Newcastle',
    cardBody: `Non-surgical rhinoplasty, sometimes called nose filler treatment, uses dermal filler to change the appearance of selected parts of the nose without surgery.

Some people explore this treatment because they are interested in the appearance of their nasal bridge or profile.

However, nose fillers cannot make the nose physically smaller, correct breathing problems or achieve all the changes possible through surgery.

The nose also has complex blood vessels, and filler treatment in this area carries particularly serious risks, including vascular injury, skin damage and, rarely, loss of vision.

A specialist assessment and careful discussion of alternatives are essential. Not everyone is suitable.`,
    cardLinkLabel: 'Learn About Non-Surgical Rhinoplasty',

    seoTitle: 'Non-Surgical Rhinoplasty Newcastle | Kensley Aesthetics',
    seoDescription:
      'Understand nose fillers in Newcastle, including what non-surgical rhinoplasty can and cannot achieve, suitability, serious risks and consultation requirements.',
    heroTitle: 'Non-Surgical Rhinoplasty in Newcastle',
    tagline: 'Exploring Changes to Your Nose Without Surgery',
    description: `Your nose is one of the features that contributes to your facial profile.

Some people consider non-surgical rhinoplasty because they would like to understand whether selected changes to their nasal contour might be possible without an operation.

However, nose fillers are not suitable for everyone and require particularly careful assessment because of the blood vessels in this area.`,
    pageSections: [
      {
        heading: 'What Is Non-Surgical Rhinoplasty?',
        body: `Non-surgical rhinoplasty uses injectable dermal filler to change the appearance of selected parts of the nose.

In some carefully selected cases, filler may be used to alter the appearance of a contour irregularity or part of the nasal profile.

The procedure adds volume. It cannot physically make the nose smaller or correct internal structural or breathing problems.

It also cannot achieve all the changes possible through surgical rhinoplasty.`,
      },
      {
        heading: 'Who Might Be Suitable?',
        body: `Suitability depends on nasal anatomy, the precise concern, previous surgery or filler treatment, medical history and a detailed risk assessment.

People with concerns involving breathing, significant structural differences or certain previous procedures may need assessment by an appropriate medical specialist instead.

A practitioner should explain when non-surgical treatment is unsuitable.`,
      },
      {
        heading: 'Understanding the Risks of Nose Fillers',
        body: `The nose has important blood vessels connected to the facial and eye circulation.

Accidental interference with blood supply can cause serious complications, including skin injury and, rarely, permanent vision loss.

These risks are important even though the procedure does not involve surgery.

The practitioner must have appropriate training, anatomical knowledge and arrangements for managing complications.`,
      },
      {
        heading: 'Consultation and Aftercare',
        body: `Before considering treatment, you should receive an explanation of the potential benefits, limitations, alternatives and serious risks.

The consultation should cover your medical history, previous nasal procedures and expectations.

If treatment is considered appropriate, you should receive a clear explanation of the procedure, aftercare and urgent warning signs.

Any visual disturbance or suspected vascular complication requires immediate medical attention.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can nose fillers make my nose smaller?',
        a: "No. Dermal fillers add volume. They may change how particular contours appear, but they do not physically reduce the nose's size.",
      },
      {
        q: 'Is non-surgical rhinoplasty safer than surgery?',
        a: 'It has different risks, including rare but potentially severe vascular complications. It should not be described as universally safer than surgery.',
      },
      {
        q: 'Can nose fillers improve breathing?',
        a: 'No. Filler is not a treatment for functional nasal obstruction. Breathing difficulties should be assessed by an appropriate clinician.',
      },
      {
        q: 'How long do nose fillers last?',
        a: 'Duration varies according to product, anatomy and individual response. A fixed result duration cannot be guaranteed.',
      },
      {
        q: 'Does every aesthetics clinic offer nose fillers?',
        a: "No. Because of the risks and specialised expertise required, patients should confirm a clinic's service availability, practitioner competence and emergency arrangements.",
      },
    ],
    ctaHeading: 'Discuss Your Concerns',
    ctaBody:
      'If you are considering changes to your nasal profile, a suitable professional assessment can help you understand the options and risks before deciding what to do next.',
    ctaLabel: 'Arrange a Consultation',
    backLinkLabel: 'Back to Dermal Fillers',
    related: [],
  },

  /* 9 ─ Tear Trough Fillers ─────────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-tear-trough',
    oldSlug: 'tear-trough',
    slug: 'tear-trough-fillers',
    num: 9,
    label: 'Tear Trough Fillers',
    image: `${IMG}a3bc8d52498f5bb56e39d543391ba4e2517a5b5d-1536x1024.webp`,

    cardTitle: 'Tear Trough Fillers in Newcastle',
    cardBody: `The tear trough is the area between the lower eyelid and upper cheek.

Some people have a natural hollow beneath their eyes. Others notice changes in this area over time that create shadows or make the under-eye contour more noticeable.

Tear trough filler may be considered for carefully selected patients with certain volume-related concerns.

However, dark circles can also be caused by pigmentation, skin thickness, allergies or other factors. Filler will not address every cause.

The under-eye area is delicate, and complications can include prolonged swelling, visible filler, irregularities and vascular injury.

A detailed assessment is particularly important before considering this treatment.`,
    cardLinkLabel: 'Explore Tear Trough Fillers',

    seoTitle: 'Tear Trough Fillers Newcastle | Under-Eye Treatment',
    seoDescription:
      'Considering tear trough fillers in Newcastle? Learn about under-eye hollows, dark circles, suitability, limitations and risks at Kensley Aesthetics.',
    heroTitle: 'Tear Trough Fillers in Newcastle upon Tyne',
    tagline: 'Understanding Hollows and Shadows Beneath Your Eyes',
    description: `Do you notice a shadow beneath your eyes even when you feel well rested?

The under-eye area can look different because of natural facial anatomy, skin thickness, pigmentation, puffiness or changes in volume.

Some people explore tear trough filler because they have a visible hollow between the lower eyelid and cheek.

However, not every under-eye concern is caused by a lack of volume.`,
    pageSections: [
      {
        heading: 'What Are Tear Trough Fillers?',
        body: `Tear trough fillers are injectable treatments that may be used to address selected volume-related concerns beneath the eyes.

The tear trough is a delicate area where skin and underlying tissues can be relatively thin.

This means small changes in volume may be noticeable, and inappropriate treatment can produce unwanted effects.

An assessment is essential before deciding whether dermal filler is suitable.`,
      },
      {
        heading: 'What Causes Dark Circles and Under-Eye Hollows?',
        body: `Under-eye shadows can develop for several reasons.

These include natural bone structure, hollowing, pigmentation, thin skin, visible blood vessels and changes in the surrounding tissues.

Puffiness or fluid retention may also affect the appearance of the lower eyelids.

Filler does not correct all these causes and can worsen some types of under-eye swelling.`,
      },
      {
        heading: 'What Happens During the Consultation?',
        body: `Your practitioner should examine your under-eye anatomy, skin, cheek structure and any history of swelling, allergies or previous fillers.

They should discuss whether the concern is related to volume or another factor.

Where the anatomy suggests a higher chance of prolonged swelling or an unsatisfactory outcome, filler may not be recommended.`,
      },
      {
        heading: 'Treatment Risks and Recovery',
        body: `The under-eye area requires additional care because of its delicate anatomy.

Possible side effects include bruising, tenderness and swelling.

Other complications can include persistent puffiness, visible filler, a bluish appearance, lumps, infection and vascular injury.

Rare vascular complications can be serious, including visual impairment.

Your practitioner should explain the risks, aftercare and emergency arrangements before treatment.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can tear trough fillers remove dark circles?',
        a: 'Not always. Fillers may help selected volume-related hollows, but pigmentation, allergies and other causes of dark circles may not respond.',
      },
      {
        q: 'Can tear trough fillers make under-eye bags worse?',
        a: 'They can contribute to unwanted puffiness or swelling in some patients. This is one reason careful suitability assessment is essential.',
      },
      {
        q: 'Are tear trough fillers suitable for everyone?',
        a: 'No. Under-eye anatomy, medical history, skin quality and the cause of the concern all influence suitability.',
      },
      {
        q: 'How long do tear trough fillers last?',
        a: 'Visible duration varies between patients and products. Filler may remain in the tissues longer than expected, even when the visible effect changes.',
      },
      {
        q: 'Can cheek fillers be an alternative?',
        a: 'Sometimes the relationship between the cheeks and lower eyelids is relevant. However, the appropriate option depends on the cause of the concern.',
      },
    ],
    ctaHeading: 'Understanding Your Under-Eye Treatment Options',
    ctaBody:
      'If you are concerned about under-eye hollows or shadows, begin with an assessment rather than choosing an injectable treatment before your appointment.',
    ctaLabel: 'Book a Consultation',
    backLinkLabel: 'Back to Dermal Fillers in Newcastle',
    related: ['cheek-fillers'],
  },

  /* 10 ─ Temple Fillers ─────────────────────────────────────────── */
  {
    _id: 'sub-treatment-dermal-fillers-temples',
    oldSlug: 'temples',
    slug: 'temple-fillers',
    num: 10,
    label: 'Temple Fillers',
    image: `${IMG}5187b44fdee77471ee5187015e82a9cd1d6a7ff3-1536x1024.webp`,

    cardTitle: 'Temple Fillers in Newcastle',
    cardBody: `The temples are the areas at the sides of the forehead, between the outer eye region and the hairline.

Some people naturally have hollow temples, while others notice changes in temple volume over time.

Dermal fillers may sometimes be considered to address selected volume-related concerns in this area.

However, temple anatomy includes important blood vessels and other structures, making careful practitioner assessment and specialised knowledge essential.

Treatment is not appropriate for everyone, and patients should understand the potential risks, alternatives and limitations.`,
    cardLinkLabel: 'Explore Temple Fillers',

    seoTitle: 'Temple Fillers Newcastle | Temple Volume | Kensley',
    seoDescription:
      'Explore temple fillers in Newcastle, including temple hollowing, facial proportions, suitability, important safety considerations and consultations.',
    heroTitle: 'Temple Fillers in Newcastle upon Tyne',
    tagline: 'Understanding Changes Around the Temples',
    description: `Have you noticed that the area between your forehead and cheekbones looks different over time?

The temples are an important part of facial contour, although they are not always the first area people think about when exploring dermal fillers.

Some people naturally have more hollow temples, while others develop changes in volume over time.

A consultation can help you understand whether this is simply part of your facial anatomy or whether there is an appropriate treatment option to consider.`,
    pageSections: [
      {
        heading: 'What Are Temple Fillers?',
        body: `Temple fillers are injectable treatments sometimes used to add volume in selected areas at the sides of the forehead.

In suitable patients, they may change the appearance of temple hollowing and how the upper face relates to the cheekbones.

However, the temple is an anatomically complex area.

Treatment requires careful patient selection, appropriate expertise and an understanding of the surrounding blood vessels and nerves.`,
      },
      {
        heading: 'Why Do Temples Become Hollow?',
        body: `Temple appearance varies naturally between individuals.

Changes can also occur with age as facial fat, supporting tissues and other structures change.

A hollow appearance is not necessarily a medical problem or a reason to seek treatment.

If the concern is new, unusual or associated with other symptoms, medical assessment may be appropriate before considering a cosmetic procedure.`,
      },
      {
        heading: 'What Happens During a Temple Filler Consultation?',
        body: `Your practitioner should examine the upper face and consider the relationship between the temples, forehead and cheeks.

They should review your medical history, previous procedures and expectations.

The consultation should explain what treatment might realistically achieve, any alternatives and why the area requires particular caution.`,
      },
      {
        heading: 'Treatment, Aftercare and Risks',
        body: `Possible side effects include swelling, tenderness and bruising.

More serious complications can occur if filler affects blood vessels, potentially causing skin injury or visual complications.

A suitable practitioner must be prepared to recognise and manage complications promptly.

You should receive clear written aftercare and emergency instructions.`,
      },
    ],
    faqHeading: 'Frequently Asked Questions',
    faqs: [
      {
        q: 'Can temple fillers help with hollow temples?',
        a: 'They may add volume in selected patients, but suitability depends on anatomy, medical history and a detailed assessment.',
      },
      {
        q: 'Are temple fillers the same as cheek fillers?',
        a: 'No. They address different areas of the face, with different anatomy, treatment considerations and risks.',
      },
      {
        q: 'Are temple fillers suitable for everyone?',
        a: 'No. The temple area has important blood vessels and other structures. Not every patient is suitable for filler treatment there.',
      },
      {
        q: 'Will temple fillers make my face look younger?',
        a: 'A particular appearance or age-related result cannot be guaranteed. The potential outcome depends on the individual and proposed treatment.',
      },
      {
        q: 'How long do temple fillers last?',
        a: 'The duration varies with the product, treatment technique and individual response. Your practitioner should explain the expected range.',
      },
    ],
    ctaHeading: 'Explore Your Consultation Options',
    ctaBody:
      'If temple hollowing is something you would like to understand, seek advice from a suitably trained practitioner who can explain both the possibilities and the risks.',
    ctaLabel: 'Arrange a Consultation',
    backLinkLabel: 'Back to Dermal Fillers in Newcastle',
    related: ['cheek-fillers'],
  },
];

/* Sub-treatments that stay in Sanity, untouched, but are no longer shown
 * on the Dermal Fillers page and get no page of their own. */
export const DERMAL_FILLERS_HIDDEN_IDS = [
  'sub-treatment-dermal-fillers-upper-lip-lines',
  'sub-treatment-dermal-fillers-tear-trough-prp',
  'sub-treatment-dermal-fillers-non-surgical-facelift',
  'sub-treatment-dermal-fillers-dissolving-filler',
];

/* Old URL slug → new URL slug (used for the 301s in public/.htaccess). */
export const DERMAL_FILLERS_REDIRECTS = Object.fromEntries(
  DERMAL_FILLERS_SUBS.filter((s) => s.oldSlug && s.oldSlug !== s.slug).map((s) => [s.oldSlug, s.slug]),
);
