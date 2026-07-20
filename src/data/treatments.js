import smoothLinesImg from './images/treatment/smoothlines_one.png';
import foreheadlines from './images/sub-treatments/smooth-lines/forehead-lines.png';
import frownlines from './images/sub-treatments/smooth-lines/frown-lines.png';
import crowsfeet from './images/sub-treatments/smooth-lines/crows-feet.png';
import bunnylines from './images/sub-treatments/smooth-lines/bunny-lines.png';
import gummysmile from './images/sub-treatments/smooth-lines/gummy-smile.png';
import lipflip from './images/sub-treatments/smooth-lines/lip-flip.png';
import pebblechin from './images/sub-treatments/smooth-lines/pebble-chin.png';
import browlift from './images/sub-treatments/smooth-lines/brow-lift.png';
import masseterbotox from './images/sub-treatments/smooth-lines/masseter-botox.png';
import traptox from './images/sub-treatments/smooth-lines/traptox.png';
import migrainebotox from './images/sub-treatments/smooth-lines/migraine-botox.png';
import hyperhidrosis from './images/sub-treatments/smooth-lines/hyperhidrosis.png';
import review_one from './images/sub-treatments/smooth-lines/review_one.jpg';
import review_two from './images/sub-treatments/smooth-lines/review_two.webp';
import review_three from './images/sub-treatments/smooth-lines/review_three.jpg';
import review_four from './images/sub-treatments/smooth-lines/review_four.jpg';
import smoothLinesImg_two   from './images/sub-treatments/main_img.png';

import dermalfillers from './images/sub-treatments/face-sculpt/dermal-fillers.png';
import cheekfillers from './images/sub-treatments/face-sculpt/cheek-fillers.png';
import jawlinefiller from './images/sub-treatments/face-sculpt/jawline-filler.png';
import chinfiller from './images/sub-treatments/face-sculpt/chin-filler.png';
import lipfillers from './images/sub-treatments/face-sculpt/lip-fillers.png';
import teartroughfiller from './images/sub-treatments/face-sculpt/tear-trough-filler.png';
import nonsurgicalnose from './images/sub-treatments/face-sculpt/non-surgical-nose.png';
import templefiller from './images/sub-treatments/face-sculpt/temple-filler.png';
import nasolabialfiller from './images/sub-treatments/face-sculpt/nasolabial-filler.png'; 
import marionettefiller from './images/sub-treatments/face-sculpt/marionette-filler.png';
import verticaliplines from './images/sub-treatments/face-sculpt/vertical-lip-lines.png';
import fillerdissolving from './images/sub-treatments/face-sculpt/filler-dissolving.png';
import facialbalancing from './images/sub-treatments/face-sculpt/facial-balancing.png';
import main_img_two from './images/sub-treatments/main_img_two.png';


import skinboosters from './images/sub-treatments/skin-glow/skin-boosters.png';
import profhilo from './images/sub-treatments/skin-glow/profhilo.png';
import polynucleotides from './images/sub-treatments/skin-glow/polynucleotides.png';
import mesotherapy from './images/sub-treatments/skin-glow/mesotherapy.png';
import prpfacial from './images/sub-treatments/skin-glow/prp-facial.png';
import hydro2facial from './images/sub-treatments/skin-glow/hydro2-facial.png';
// import ledtherapy from './images/sub-treatments/skin-glow/led-therapy.png';

const TREATMENTS = [
  {
    num: '01',
    label: 'Smooth Lines',
    slug: 'smooth-lines',
    image: smoothLinesImg,
    image_second: smoothLinesImg_two,
    reviews: [review_one, review_two, review_three, review_four],
    tagline: 'Soften expression lines while keeping natural facial movement.',
    description:
      'Smooth Lines is designed for expression-led wrinkles caused by repeated facial movement. It helps soften forehead creases, frown lines, crow’s feet, bunny lines, gummy smile, jaw tension and smaller muscle-related concerns while keeping the face fresh, balanced and natural-looking. The aim is not to freeze the face, but to relax overactive muscles so the skin appears smoother and more rested.',
    benefits: [
      'Softens dynamic wrinkles and expression lines',
      'Helps prevent deeper lines from forming',
      'Creates a fresher, well-rested appearance',
      'Minimal downtime and quick appointment time',
      'Can be tailored from subtle prevention to stronger correction',
    ],
    ideal:
      'Ideal for clients who notice forehead lines, frown lines, crow’s feet, gummy smile, jaw tension, neck bands, excessive sweating or early signs of ageing caused by repeated movement.',
    faqs: [
      {
        q: 'What areas can Smooth Lines treat?',
        a: 'Common areas include forehead lines, frown lines, crow’s feet, bunny lines, gummy smile, pebble chin, lip flip, brow lift, neck bands, jaw slimming, masseter treatment, Traptox, migraine-related muscle tension and excessive sweating.',
      },
      {
        q: 'Will I look frozen?',
        a: 'The treatment can be planned conservatively so natural expression is maintained. The goal is a smoother, fresher look rather than a stiff or over-treated appearance.',
      },
      {
        q: 'How soon can I see results?',
        a: 'Softening usually begins within a few days, with the full effect commonly reviewed around two weeks after treatment.',
      },
      {
        q: 'How long can results last?',
        a: 'Results commonly last around 3 to 4 months, although this can vary depending on the area treated, dose, metabolism and muscle strength.',
      },
      {
        q: 'Is there downtime?',
        a: 'Downtime is minimal. Clients are usually advised to avoid strenuous exercise, alcohol, lying flat and rubbing the area for the first 24 hours.',
      },
    ],
    prices: [
      { name: 'Anti-wrinkle consultation', price: 'Consultation required' },
      { name: 'Single expression area', price: 'From clinic pricing' },
      { name: 'Two expression areas', price: 'From clinic pricing' },
      { name: 'Three expression areas', price: 'From clinic pricing' },
      { name: 'Lip flip / gummy smile / bunny lines', price: 'From clinic pricing' },
      { name: 'Jaw slimming / masseter / teeth grinding', price: 'From clinic pricing' },
      { name: 'Neck Botox / Nefertiti lift', price: 'From clinic pricing' },
      { name: 'Hyperhidrosis / excessive sweating', price: 'From clinic pricing' },
    ],
    subTreatments: [
      {
        title: 'Forehead Lines',
        name: 'Smooth Upper-Face Creases',
        description:
          'Targets horizontal forehead lines caused by repeated eyebrow movement for a softer, calmer upper face.',
        image: foreheadlines,
      },
      {
        title: 'Frown Lines',
        name: 'Relax the 11 Lines',
        description:
          'Softens vertical lines between the brows to reduce a tired, tense or angry-looking expression.',
        image: frownlines,
      },
      {
        title: 'Crow’s Feet',
        name: 'Brighten the Eye Area',
        description:
          'Relaxes fine smile lines around the outer eyes while keeping your expression natural.',
        image: crowsfeet,
      },
      {
        title: 'Bunny Lines',
        name: 'Smooth Nose Wrinkles',
        description:
          'Treats small lines that appear on the nose when smiling, laughing or scrunching the face.',
        image: bunnylines,
      },
      {
        title: 'Gummy Smile',
        name: 'Balance Smile Display',
        description:
          'Relaxes the upper lip lift to reduce excessive gum show and create a softer smile balance.',
        image: gummysmile,
      },
      {
        title: 'Lip Flip',
        name: 'Subtle Upper-Lip Definition',
        description:
          'Relaxes the upper lip border so the lip gently rolls outward without adding filler volume.',
        image: lipflip,
      },
      {
        title: 'Pebble Chin',
        name: 'Refine Chin Texture',
        description:
          'Softens dimpling or orange-peel texture in the chin caused by overactive muscle contraction.',
        image: pebblechin,
      },
      {
        title: 'Brow Lift',
        name: 'Open and Lift the Eyes',
        description:
          'Uses precise placement to give a subtle lifted brow effect and brighter-looking eye area.',
        image: browlift,
      },
      {
        title: 'Masseter Botox',
        name: 'Jaw Slimming and Teeth Grinding',
        description:
          'Relaxes strong jaw muscles to soften a square lower face and help with clenching or grinding.',
        image: masseterbotox,
      },
      {
        title: 'Traptox',
        name: 'Neck and Shoulder Slimming',
        description:
          'Targets the trapezius muscle to soften shoulder bulk and create a more elegant neck-to-shoulder line.',
        image: traptox,
      },
      {
        title: 'Migraine Botox',
        name: 'Muscle Tension Support',
        description:
          'A specialist treatment option for clients where muscle tension contributes to headache or migraine patterns.',
        image: migrainebotox,
      },
      {
        title: 'Hyperhidrosis',
        name: 'Excessive Sweating Treatment',
        description:
          'Reduces overactive sweating in areas such as the underarms for improved comfort and confidence.',
        image: hyperhidrosis,
      },
    ],
  },

  {
    num: '02',
    label: 'Face Sculpt',
    slug: 'face-sculpt',
    image: '/assets/face_sculpt.png',
    image_second: main_img_two,
    reviews: [review_one, review_two, review_three, review_four],
    tagline: 'Define, balance and enhance facial structure with natural-looking contour.',
    description:
      'Face Sculpt focuses on facial proportion, structure and definition. It includes dermal fillers, facial balancing and profile contouring to restore lost support, enhance cheekbones, refine the jawline, improve chin projection and refresh areas that appear hollow or tired. Every treatment should be anatomy-led so the result looks elegant, balanced and not overdone.',
    benefits: [
      'Restores volume where the face has lost support',
      'Defines cheekbones, chin and jawline',
      'Improves side profile and facial balance',
      'Can refresh tired under-eyes and soften folds',
      'Results can be subtle, natural and tailored',
    ],
    ideal:
      'Ideal for clients wanting cheek definition, jawline contouring, chin projection, lip enhancement, tear trough correction, nose reshaping or full facial balancing.',
    faqs: [
      {
        q: 'Is Face Sculpt the same as filler?',
        a: 'Filler is one of the main treatment methods used within Face Sculpt, but this category can also include facial balancing, profile correction and combination contouring plans.',
      },
      {
        q: 'Which filler areas are included?',
        a: 'Cheek filler, chin filler, jawline filler, lip filler, tear trough filler, non-surgical nose filler, temple filler, nasolabial folds, marionette lines and filler dissolving can all sit inside Face Sculpt.',
      },
      {
        q: 'Will the result look obvious?',
        a: 'The best results are designed around natural proportions. A good plan enhances structure without making the face look heavy or overfilled.',
      },
      {
        q: 'Can filler be dissolved?',
        a: 'Most hyaluronic acid dermal fillers can be dissolved if clinically appropriate. This should only be performed after consultation by a trained medical practitioner.',
      },
      {
        q: 'How long can results last?',
        a: 'Duration depends on the product, area and individual metabolism. Many facial filler results can last several months to over a year.',
      },
    ],
    prices: [
      { name: 'Dermal filler consultation', price: 'Consultation required' },
      { name: 'Cheek filler', price: 'From clinic pricing' },
      { name: 'Jawline filler', price: 'From clinic pricing' },
      { name: 'Chin filler', price: 'From clinic pricing' },
      { name: 'Lip filler', price: 'From clinic pricing' },
      { name: 'Tear trough filler', price: 'From clinic pricing' },
      { name: 'Non-surgical nose filler', price: 'From clinic pricing' },
      { name: 'Full facial balancing', price: 'Bespoke quote' },
    ],
    subTreatments: [
      {
        title: 'Dermal Fillers',
        name: 'Volume and Structure',
        description:
          'Restores lost facial support and enhances contours using carefully placed injectable filler.',
        image: dermalfillers,
      },
      {
        title: 'Cheek Fillers',
        name: 'Lift and Define',
        description:
          'Adds or restores cheekbone support to create a lifted, youthful and more sculpted mid-face.',
        image: cheekfillers,
      },
      {
        title: 'Jawline Filler',
        name: 'Sharper Lower-Face Definition',
        description:
          'Defines the jawline and improves the transition between face and neck for a cleaner profile.',
        image: jawlinefiller,
      },
      {
        title: 'Chin Filler',
        name: 'Profile Balance',
        description:
          'Improves chin projection and facial symmetry, especially when balancing the side profile.',
        image: chinfiller,
      },
      {
        title: 'Lip Fillers',
        name: 'Shape, Hydration and Volume',
        description:
          'Enhances lip shape, border and hydration with a natural-looking approach to volume.',
        image: lipfillers,
      },
      {
        title: 'Tear Trough Filler',
        name: 'Under-Eye Refresh',
        description:
          'Softens hollowness beneath the eyes for a less tired and more rested appearance.',
        image: teartroughfiller,
      },
      {
        title: 'Non-Surgical Nose Job',
        name: 'Profile Refinement',
        description:
          'Uses filler to improve nose symmetry, smooth bumps or refine the bridge and tip profile without surgery.',
        image: nonsurgicalnose,
      },
      {
        title: 'Temple Filler',
        name: 'Restore Upper-Face Support',
        description:
          'Replaces hollowing in the temples to improve balance and support around the eyes and upper face.',
        image: templefiller,
      },
      {
        title: 'Nasolabial Fold Filler',
        name: 'Soften Smile Lines',
        description:
          'Reduces the depth of folds running from the nose to the mouth for a softer lower mid-face.',
        image: nasolabialfiller,
      },
      {
        title: 'Marionette Line Filler',
        name: 'Lift Mouth Corners',
        description:
          'Softens lines from the mouth corners toward the chin and helps reduce a downturned expression.',
        image: marionettefiller,
      },
      {
        title: 'Vertical Lip Line Filler',
        name: 'Smooth Lip Lines',
        description:
          'Softens fine lines around the mouth while maintaining a natural lip shape.',
        image: verticaliplines,
      },
      {
        title: 'Filler Dissolving',
        name: 'Correction and Safety',
        description:
          'Used when suitable to dissolve unwanted hyaluronic acid filler before correction or re-treatment.',
        image: fillerdissolving,
      },
      {
        title: 'Facial Balancing',
        name: 'Harmony Across the Face',
        description:
          'Combines selected filler areas to improve proportion, symmetry and overall facial harmony.',
        image: facialbalancing,
      },
    ],
  },
  {
    num: '03',
    label: 'Skin Glow',
    slug: 'skin-glow',
    image: '/assets/skin_glow.png',
    tagline: 'Hydrate, brighten and refresh tired-looking skin from within.',
    description:
      'Skin Glow focuses on hydration, radiance and skin quality. It brings together treatments such as skin boosters, Profhilo, polynucleotides, mesotherapy, PRP facial, HydrO2 facial, LED light therapy and glow-focused skin plans. This category is perfect for clients who want fresher, brighter and healthier-looking skin without changing facial shape.',
    benefits: [
      'Improves hydration and radiance',
      'Refreshes dull, tired or dehydrated skin',
      'Supports smoother skin texture',
      'Can be used before events or as maintenance',
      'Works well alongside other treatments',
    ],
    ideal:
      'Ideal for clients with dullness, dehydration, tired-looking skin, fine surface lines, uneven texture or anyone wanting a healthy glow.',
    faqs: [
      {
        q: 'What is Skin Glow best for?',
        a: 'It is best for improving hydration, freshness, radiance, skin smoothness and overall healthy-looking skin quality.',
      },
      {
        q: 'Is this the same as a facial?',
        a: 'Some options are facial-based, such as HydrO2 and LED, while others are injectable skin-quality treatments such as Profhilo, skin boosters, PRP, mesotherapy and polynucleotides.',
      },
      {
        q: 'Can Skin Glow be done before an event?',
        a: 'Yes, but injectable treatments should be planned with enough time for any redness or small marks to settle before the event.',
      },
      {
        q: 'How many sessions are needed?',
        a: 'Some clients see improvement after one session, while longer-lasting skin quality improvement often works best as a course.',
      },
      {
        q: 'Does Skin Glow add volume?',
        a: 'Most Skin Glow treatments are designed to improve skin quality rather than reshape the face or add obvious volume.',
      },
    ],
    prices: [
      { name: 'Skin booster consultation', price: 'Consultation required' },
      { name: 'Skin boosters', price: 'From clinic pricing' },
      { name: 'Profhilo', price: 'From clinic pricing' },
      { name: 'Polynucleotides', price: 'From clinic pricing' },
      { name: 'Mesotherapy', price: 'From clinic pricing' },
      { name: 'PRP facial', price: 'From clinic pricing' },
      { name: 'HydrO2 facial', price: 'From clinic pricing' },
      { name: 'LED light therapy', price: 'From clinic pricing' },
    ],
    subTreatments: [
      {
        title: 'Skin Boosters',
        name: 'Hydration and Radiance',
        description:
          'Injectable skin hydration treatments that improve glow, elasticity and surface smoothness.',
        image: skinboosters,
      },
      {
        title: 'Profhilo',
        name: 'Bio-Remodelling Glow',
        description:
          'A skin-quality treatment designed to hydrate and remodel the skin for improved firmness and radiance.',
        image: profhilo,
      },
      {
        title: 'Polynucleotides',
        name: 'Regenerative Skin Quality',
        description:
          'Supports skin repair, hydration and resilience for a healthier and more refreshed appearance.',
        image: polynucleotides,
      },
      {
        title: 'Mesotherapy',
        name: 'Vitamin Skin Infusion',
        description:
          'Uses micro-injections of skin-supporting ingredients to improve brightness and hydration.',
        image: mesotherapy,
      },
      {
        title: 'PRP Facial',
        name: 'Natural Regeneration',
        description:
          'Uses platelet-rich plasma to support skin renewal, glow and collagen activity.',
        image: prpfacial,
      },
      {
        title: '3D HydrO2 Facial',
        name: 'Deep Cleanse and Glow',
        description:
          'A multi-step facial treatment that cleanses, hydrates and refreshes the skin surface.',
        image: hydro2facial,
      },
      // {
      //   title: 'LED Light Therapy',
      //   name: 'Calm and Boost',
      //   description:
      //     'Supports skin recovery, glow and calmness using targeted light therapy.',
      //   image: ledtherapy,
      // },
      {
        title: 'Pre-Event Glow',
        name: 'Fresh Skin Before Occasions',
        description:
          'A glow-focused treatment plan designed to refresh the skin before weddings, events or photography.',
        image: '/images/sub-treatments/skin-glow/pre-event-glow.jpg',
      },
    ],
  },

  {
    num: '04',
    label: 'Collagen Restore',
    slug: 'collagen-restore',
    image: '/assets/collagen_restore.png',
    tagline: 'Stimulate firmness, elasticity and long-term skin renewal.',
    description:
      'Collagen Restore focuses on treatments that help stimulate the skin’s own repair and support systems. It includes RF microneedling, microneedling, HIFU, biostimulating fillers, Radiesse, polynucleotides, PRP, exosomes and collagen-focused skin tightening. This category is ideal for clients who want firmer, smoother and more resilient skin over time.',
    benefits: [
      'Supports natural collagen production',
      'Improves firmness and elasticity',
      'Helps with texture, laxity and fine lines',
      'Results can build gradually over time',
      'Can be combined with glow and lifting treatments',
    ],
    ideal:
      'Ideal for clients noticing early laxity, thinning skin, fine lines, uneven texture, acne scarring, loss of firmness or reduced skin bounce.',
    faqs: [
      {
        q: 'Is Collagen Restore immediate?',
        a: 'Some treatments give an initial improvement, but collagen-focused treatments often work progressively over weeks as the skin repairs and strengthens.',
      },
      {
        q: 'Which treatments belong here?',
        a: 'RF microneedling, microneedling, HIFU, Radiesse, biostimulating fillers, polynucleotides, PRP, exosomes and skin tightening treatments all fit here.',
      },
      {
        q: 'Is this good for acne scarring?',
        a: 'Yes. Microneedling and RF microneedling can be suitable for improving texture and certain types of acne scarring after assessment.',
      },
      {
        q: 'Can it be combined with filler?',
        a: 'Yes. Filler can restore structure, while collagen treatments improve skin quality. The right sequence should be planned at consultation.',
      },
      {
        q: 'Who is this best for?',
        a: 'It is suitable for clients who want gradual, natural-looking improvement in skin strength, texture and firmness.',
      },
    ],
    prices: [
      { name: 'Collagen consultation', price: 'Consultation required' },
      { name: 'Microneedling', price: 'From clinic pricing' },
      { name: 'RF microneedling', price: 'From clinic pricing' },
      { name: 'HIFU', price: 'From clinic pricing' },
      { name: 'Polynucleotides', price: 'From clinic pricing' },
      { name: 'PRP treatment', price: 'From clinic pricing' },
      { name: 'Radiesse / biostimulator', price: 'From clinic pricing' },
      { name: 'Exosomes treatment', price: 'From clinic pricing' },
    ],
    subTreatments: [
      {
        title: 'Microneedling',
        name: 'Texture and Collagen Support',
        description:
          'Creates controlled micro-channels to encourage skin repair, smoother texture and collagen renewal.',
        image: '/images/sub-treatments/collagen-restore/microneedling.jpg',
      },
      {
        title: 'RF Microneedling',
        name: 'Firmness and Tightening',
        description:
          'Combines microneedling with radiofrequency energy to support tightening, texture improvement and collagen stimulation.',
        image: '/images/sub-treatments/collagen-restore/rf-microneedling.jpg',
      },
      {
        title: 'HIFU',
        name: 'Non-Surgical Tightening',
        description:
          'Uses focused ultrasound energy to support deeper skin tightening and lifting without surgery.',
        image: '/images/sub-treatments/collagen-restore/hifu.jpg',
      },
      {
        title: 'Radiesse',
        name: 'Biostimulating Support',
        description:
          'A collagen-stimulating injectable option used to improve structure, firmness and skin quality.',
        image: '/images/sub-treatments/collagen-restore/radiesse.jpg',
      },
      {
        title: 'Polynucleotides',
        name: 'Repair and Regeneration',
        description:
          'Supports skin repair, hydration and resilience through regenerative injectable treatment.',
        image: '/images/sub-treatments/collagen-restore/polynucleotides.jpg',
      },
      {
        title: 'PRP',
        name: 'Natural Collagen Activation',
        description:
          'Uses platelet-rich plasma to support skin repair, renewal and collagen activity.',
        image: '/images/sub-treatments/collagen-restore/prp.jpg',
      },
      {
        title: 'Exosomes',
        name: 'Advanced Skin Renewal',
        description:
          'A regenerative skin treatment option designed to support repair, texture and skin health.',
        image: '/images/sub-treatments/collagen-restore/exosomes.jpg',
      },
      {
        title: 'Skin Tightening',
        name: 'Firm and Lift',
        description:
          'A personalised plan using tightening technologies and injectables to improve laxity and firmness.',
        image: '/images/sub-treatments/collagen-restore/skin-tightening.jpg',
      },
    ],
  },

  {
    num: '05',
    label: 'Clear Skin',
    slug: 'clear-skin',
    image: '/assets/clear_skin.png',
    tagline: 'Target breakouts, marks, pores and uneven skin texture.',
    description:
      'Clear Skin is designed for acne, congestion, scarring, pigmentation, enlarged pores, redness and uneven texture. It can include chemical peels, microneedling, RF microneedling, HydrO2 facial, LED therapy and medical skincare plans. The aim is not only to treat active concerns, but also to improve long-term skin clarity and confidence.',
    benefits: [
      'Helps reduce congestion and active breakouts',
      'Improves the look of acne marks and texture',
      'Supports clearer, smoother-looking skin',
      'Can target pores, pigmentation and redness',
      'Works well with home skincare plans',
    ],
    ideal:
      'Ideal for clients struggling with acne, post-acne marks, pigmentation, enlarged pores, rough texture, oiliness, congestion or dull uneven skin.',
    faqs: [
      {
        q: 'What concerns can Clear Skin treat?',
        a: 'Clear Skin can support acne, acne scarring, pigmentation, dark spots, enlarged pores, uneven texture, congestion and redness.',
      },
      {
        q: 'Will I need a course?',
        a: 'Many skin concerns improve best with a course of treatments and a personalised homecare plan.',
      },
      {
        q: 'Can acne scars improve?',
        a: 'Yes. Treatments such as microneedling and RF microneedling can help improve texture and certain acne scars over time.',
      },
      {
        q: 'Can peels help pigmentation?',
        a: 'Chemical peels and medical skincare can support brighter, more even-looking skin when planned correctly.',
      },
      {
        q: 'Is this suitable for sensitive skin?',
        a: 'Sensitive skin should be assessed first. The treatment strength and homecare should be adjusted to protect the skin barrier.',
      },
    ],
    prices: [
      { name: 'Clear skin consultation', price: 'Consultation required' },
      { name: 'Chemical peel', price: 'From clinic pricing' },
      { name: 'Microneedling', price: 'From clinic pricing' },
      { name: 'RF microneedling', price: 'From clinic pricing' },
      { name: 'HydrO2 facial', price: 'From clinic pricing' },
      { name: 'LED light therapy', price: 'From clinic pricing' },
      { name: 'Acne programme', price: 'Bespoke quote' },
      { name: 'Pigmentation programme', price: 'Bespoke quote' },
    ],
    subTreatments: [
      {
        title: 'Acne Treatment',
        name: 'Breakout Control',
        description:
          'A tailored plan to reduce active breakouts, congestion and oil imbalance.',
        image: '/images/sub-treatments/clear-skin/acne-treatment.jpg',
      },
      {
        title: 'Acne Scarring',
        name: 'Texture Repair',
        description:
          'Uses collagen-supporting treatments to improve the appearance of post-acne texture and scars.',
        image: '/images/sub-treatments/clear-skin/acne-scarring.jpg',
      },
      {
        title: 'Chemical Peels',
        name: 'Resurface and Brighten',
        description:
          'Professional peels help exfoliate, brighten and refresh congested or uneven skin.',
        image: '/images/sub-treatments/clear-skin/chemical-peels.jpg',
      },
      {
        title: 'Pigmentation Treatment',
        name: 'Even Skin Tone',
        description:
          'Targets dark spots, sun damage and post-inflammatory pigmentation with clinic and homecare support.',
        image: '/images/sub-treatments/clear-skin/pigmentation.jpg',
      },
      {
        title: 'Pore Refinement',
        name: 'Smoother Skin Texture',
        description:
          'Helps reduce the appearance of enlarged pores and rough texture.',
        image: '/images/sub-treatments/clear-skin/pore-refinement.jpg',
      },
      {
        title: 'HydrO2 Facial',
        name: 'Deep Cleanse and Refresh',
        description:
          'Cleanses, hydrates and refreshes congested skin while supporting a clearer complexion.',
        image: '/images/sub-treatments/clear-skin/hydro2-facial.jpg',
      },
      {
        title: 'LED Therapy',
        name: 'Calm and Support',
        description:
          'Supports calmer-looking skin and recovery as part of a clear skin programme.',
        image: '/images/sub-treatments/clear-skin/led-therapy.jpg',
      },
      {
        title: 'Medical Skincare',
        name: 'Homecare for Results',
        description:
          'A personalised skincare routine to maintain results and support long-term skin clarity.',
        image: '/images/sub-treatments/clear-skin/medical-skincare.jpg',
      },
    ],
  },

  {
    num: '06',
    label: 'Neck Renewal',
    slug: 'neck-renewal',
    image: '/assets/neck_renewal.png',
    tagline: 'Smooth, tighten and refresh the neck and décolletage.',
    description:
      'Neck Renewal focuses on the neck, jawline-to-neck transition and décolletage. It can include neck Botox, Nefertiti lift, neck lines treatment, neck bands, HIFU neck, Profhilo neck, PRP neck, microneedling and RF microneedling. This category is important because the neck often shows ageing earlier than the face.',
    benefits: [
      'Softens neck bands and horizontal lines',
      'Improves crepey texture and hydration',
      'Supports tighter, firmer-looking neck skin',
      'Can improve jawline-to-neck definition',
      'Extends rejuvenation beyond the face',
    ],
    ideal:
      'Ideal for clients noticing neck lines, platysmal bands, loose skin, crepey texture, décolletage ageing or reduced definition below the jawline.',
    faqs: [
      {
        q: 'What causes neck bands?',
        a: 'Neck bands are commonly linked to the platysma muscle becoming more visible over time. Relaxant treatment can help soften the appearance.',
      },
      {
        q: 'Can the neck be treated without surgery?',
        a: 'Yes. Options may include injectables, skin boosters, HIFU, microneedling and RF microneedling.',
      },
      {
        q: 'Can the décolletage be treated?',
        a: 'Yes. The chest area can be treated for crepey texture, fine lines and skin quality using suitable skin treatments.',
      },
      {
        q: 'Does neck treatment need a course?',
        a: 'Texture and tightening treatments often work best as a course, while muscle-related bands may be maintained every few months.',
      },
      {
        q: 'Can Neck Renewal be combined with Full Face Refresh?',
        a: 'Yes. Combining face and neck treatment gives a more complete and natural rejuvenation.',
      },
    ],
    prices: [
      { name: 'Neck consultation', price: 'Consultation required' },
      { name: 'Neck Botox / neck bands', price: 'From clinic pricing' },
      { name: 'Nefertiti lift', price: 'From clinic pricing' },
      { name: 'Profhilo neck', price: 'From clinic pricing' },
      { name: 'PRP neck', price: 'From clinic pricing' },
      { name: 'HIFU neck', price: 'From clinic pricing' },
    ],
    subTreatments: [
      {
        title: 'Neck Botox',
        name: 'Smooth Neck Bands',
        description:
          'Relaxes visible neck bands for a smoother and more refined neck appearance.',
        image: '/images/sub-treatments/neck-renewal/neck-botox.jpg',
      },
      {
        title: 'Nefertiti Lift',
        name: 'Jawline and Neck Definition',
        description:
          'Uses targeted relaxant placement to improve the look of the jawline and upper neck.',
        image: '/images/sub-treatments/neck-renewal/nefertiti-lift.jpg',
      },
      {
        title: 'Neck Lines',
        name: 'Horizontal Line Softening',
        description:
          'Targets necklace lines and creases using suitable injectable or skin-quality treatments.',
        image: '/images/sub-treatments/neck-renewal/neck-lines.jpg',
      },
      {
        title: 'HIFU Neck',
        name: 'Non-Surgical Tightening',
        description:
          'Supports firmer, tighter-looking neck skin using focused ultrasound energy.',
        image: '/images/sub-treatments/neck-renewal/hifu-neck.jpg',
      },
      {
        title: 'Profhilo Neck',
        name: 'Hydration and Firmness',
        description:
          'Improves hydration, firmness and crepey texture across the neck area.',
        image: '/images/sub-treatments/neck-renewal/profhilo-neck.jpg',
      },
      {
        title: 'PRP Neck',
        name: 'Regenerative Neck Refresh',
        description:
          'Uses platelet-rich plasma to support skin repair and renewal in the neck area.',
        image: '/images/sub-treatments/neck-renewal/prp-neck.jpg',
      },
      {
        title: 'RF Microneedling Neck',
        name: 'Texture and Tightening',
        description:
          'Targets laxity, texture and collagen support in the neck using radiofrequency microneedling.',
        image: '/images/sub-treatments/neck-renewal/rf-microneedling-neck.jpg',
      },
      {
        title: 'Décolletage Refresh',
        name: 'Chest Skin Rejuvenation',
        description:
          'Improves crepey texture, fine lines and sun-related ageing on the upper chest.',
        image: '/images/sub-treatments/neck-renewal/decolletage-refresh.jpg',
      },
    ],
  },

  {
    num: '07',
    label: 'Full Face Refresh',
    slug: 'full-face-refresh',
    image: '/assets/full_face_refresh.png',
    tagline: 'A complete facial rejuvenation plan tailored to your features.',
    description:
      'Full Face Refresh is a complete rejuvenation category for clients who need more than one treatment area addressed. It can combine anti-wrinkle injections, dermal fillers, facial balancing, non-surgical facelift, HIFU, skin boosters, Profhilo, PRP, microneedling, RF microneedling and HydrO2 facial. The goal is a cohesive, natural-looking result across the whole face.',
    benefits: [
      'Addresses multiple concerns in one plan',
      'Combines structure, skin quality and lifting',
      'Creates balanced and natural-looking rejuvenation',
      'Can include face, neck and skin treatments',
      'Tailored after detailed consultation',
    ],
    ideal:
      'Ideal for clients wanting a complete refresh, facial balancing, lifting, volume restoration, skin quality improvement or a non-surgical age-management plan.',
    faqs: [
      {
        q: 'What is included in Full Face Refresh?',
        a: 'It can include a combination of anti-wrinkle injections, dermal fillers, skin boosters, PRP, HIFU, microneedling, RF microneedling and facial treatments depending on the client.',
      },
      {
        q: 'Is this done in one appointment?',
        a: 'Some treatments can be combined, but many full-face plans are staged over multiple visits for safety, comfort and better results.',
      },
      {
        q: 'Is this the same as a non-surgical facelift?',
        a: 'A non-surgical facelift can be part of Full Face Refresh, but this category is broader and can also include skin, collagen and maintenance treatments.',
      },
      {
        q: 'Will the result look natural?',
        a: 'The aim is to refresh and balance the face without making it look over-treated.',
      },
      {
        q: 'Is consultation required?',
        a: 'Yes. A full-face plan should always start with assessment, priorities and a staged treatment strategy.',
      },
    ],
    prices: [
      { name: 'Full face consultation', price: 'Consultation required' },
      { name: 'Essential refresh plan', price: 'Bespoke quote' },
      { name: 'Signature full face refresh', price: 'Bespoke quote' },
      { name: 'Premium rejuvenation plan', price: 'Bespoke quote' },
      { name: 'Non-surgical facelift plan', price: 'Bespoke quote' },
      { name: 'HIFU face and neck plan', price: 'From clinic pricing' },
      { name: 'Add-on neck and décolletage', price: 'From clinic pricing' },
    ],
    subTreatments: [
      {
        title: 'Non-Surgical Facelift',
        name: 'Lift Without Surgery',
        description:
          'A personalised plan combining lifting, contouring and skin-quality treatments without surgical downtime.',
        image: '/images/sub-treatments/full-face-refresh/non-surgical-facelift.jpg',
      },
      {
        title: 'Full Face Dermal Filler',
        name: 'Restore and Balance',
        description:
          'Uses filler across selected areas to restore support, improve harmony and refresh the face.',
        image: '/images/sub-treatments/full-face-refresh/full-face-filler.jpg',
      },
      {
        title: 'Facial Balancing',
        name: 'Complete Proportion Planning',
        description:
          'Looks at the whole face rather than one isolated area to create a balanced result.',
        image: '/images/sub-treatments/full-face-refresh/facial-balancing.jpg',
      },
      {
        title: 'HIFU Facelift',
        name: 'Energy-Based Lifting',
        description:
          'Uses ultrasound energy to support firming and lifting of the face and neck.',
        image: '/images/sub-treatments/full-face-refresh/hifu-facelift.jpg',
      },
      {
        title: 'Skin Booster Add-On',
        name: 'Glow and Quality',
        description:
          'Improves hydration and surface radiance as part of a full-face rejuvenation plan.',
        image: '/images/sub-treatments/full-face-refresh/skin-booster-addon.jpg',
      },
      {
        title: 'PRP Facial Add-On',
        name: 'Regenerative Refresh',
        description:
          'Supports natural skin renewal and collagen activity as part of a complete refresh.',
        image: '/images/sub-treatments/full-face-refresh/prp-facial-addon.jpg',
      },
      {
        title: 'Microneedling / RF Microneedling',
        name: 'Texture and Collagen',
        description:
          'Improves skin texture, pores, scarring and firmness within a full-face plan.',
        image: '/images/sub-treatments/full-face-refresh/microneedling-rf.jpg',
      },
    ],
  },

  {
    num: '08',
    label: 'Stay Youthful',
    slug: 'stay-youthful',
    image: '/assets/stay_youthful.png',
    tagline: 'A proactive maintenance plan for graceful, natural ageing.',
    description:
      'Stay Youthful is a preventative and maintenance category for clients who want to preserve their skin and facial freshness over time. It includes preventative anti-wrinkle, baby Botox, skin booster maintenance, Profhilo maintenance, polynucleotides, PRP, microneedling, HydrO2 facial, LED therapy and skincare planning. This category works well for younger clients and long-term maintenance clients.',
    benefits: [
      'Helps prevent deeper signs of ageing',
      'Maintains consistent skin quality',
      'Supports natural, subtle results over time',
      'Creates a long-term treatment plan',
      'Encourages prevention instead of correction only',
    ],
    ideal:
      'Ideal for clients in their late 20s and beyond, or anyone wanting subtle maintenance, healthy ageing, glow, prevention and long-term skin confidence.',
    faqs: [
      {
        q: 'Is this for younger clients?',
        a: 'Yes. Stay Youthful is useful for prevention, but it can also support mature clients who want ongoing maintenance.',
      },
      {
        q: 'What treatments are included?',
        a: 'Preventative anti-wrinkle, baby Botox, skin boosters, Profhilo, polynucleotides, PRP, microneedling, LED, HydrO2 and skincare plans can all sit here.',
      },
      {
        q: 'How often are treatments needed?',
        a: 'Most maintenance plans are reviewed every few months, but the exact schedule depends on the client’s skin and goals.',
      },
      {
        q: 'Will it change my face?',
        a: 'The focus is preservation, freshness and skin quality rather than dramatic change.',
      },
      {
        q: 'Can this be a membership or package?',
        a: 'Yes. This category is ideal for seasonal glow plans, annual maintenance plans or long-term skin programmes.',
      },
    ],
    prices: [
      { name: 'Maintenance consultation', price: 'Consultation required' },
      { name: 'Preventative anti-wrinkle', price: 'From clinic pricing' },
      { name: 'Baby Botox', price: 'From clinic pricing' },
      { name: 'Quarterly skin booster', price: 'From clinic pricing' },
      { name: 'Profhilo maintenance', price: 'From clinic pricing' },
      { name: 'Seasonal glow treatment', price: 'From clinic pricing' },
      { name: 'Annual maintenance plan', price: 'Bespoke quote' },
      { name: 'Long-term skin plan', price: 'Bespoke quote' },
    ],
    subTreatments: [
      {
        title: 'Preventative Anti-Wrinkle',
        name: 'Early Line Prevention',
        description:
          'Light relaxant treatment designed to soften movement before deeper lines become established.',
        image: '/images/sub-treatments/stay-youthful/preventative-anti-wrinkle.jpg',
      },
      {
        title: 'Baby Botox',
        name: 'Ultra-Subtle Freshness',
        description:
          'A lighter approach to muscle relaxation for clients wanting very natural-looking prevention.',
        image: '/images/sub-treatments/stay-youthful/baby-botox.jpg',
      },
      {
        title: 'Skin Booster Maintenance',
        name: 'Hydration All Year',
        description:
          'Regular hydration-focused treatments to maintain glow, bounce and skin freshness.',
        image: '/images/sub-treatments/stay-youthful/skin-booster-maintenance.jpg',
      },
      {
        title: 'Profhilo Maintenance',
        name: 'Firmness and Glow',
        description:
          'Maintains skin hydration and firmness as part of a long-term healthy ageing plan.',
        image: '/images/sub-treatments/stay-youthful/profhilo-maintenance.jpg',
      },
      {
        title: 'Polynucleotide Maintenance',
        name: 'Repair and Resilience',
        description:
          'Supports ongoing skin repair and quality for clients focused on prevention and regeneration.',
        image: '/images/sub-treatments/stay-youthful/polynucleotide-maintenance.jpg',
      },
      {
        title: 'PRP Maintenance',
        name: 'Natural Skin Renewal',
        description:
          'Uses regenerative support to maintain skin quality, glow and collagen activity.',
        image: '/images/sub-treatments/stay-youthful/prp-maintenance.jpg',
      },
      {
        title: 'Seasonal Glow',
        name: 'Fresh Skin Every Season',
        description:
          'A glow-focused treatment timed around seasonal skin changes, events or maintenance goals.',
        image: '/images/sub-treatments/stay-youthful/seasonal-glow.jpg',
      },
      {
        title: 'Annual Skin Plan',
        name: 'Long-Term Ageing Strategy',
        description:
          'A structured yearly plan combining prevention, skin quality and maintenance treatments.',
        image: '/images/sub-treatments/stay-youthful/annual-skin-plan.jpg',
      },
    ],
  },

  // {
  //   num: '09',
  //   label: 'Body Sculpt',
  //   slug: 'body-sculpt',
  //   image: '/assets/body_sculpt.png',
  //   tagline: 'Shape, contour and refine the body without surgery.',
  //   description:
  //     'Body Sculpt covers non-surgical body contouring, fat reduction, body tightening, buttock enhancement, hip dip correction, laser hair removal and body confidence treatments. It includes fat-dissolving injections, fat freezing, cryolipolysis, RF body tightening, cavitation, shockwave, Lanluma butt lift, hip dip filler, PDO body thread lift and weight-loss support where suitable.',
  //   benefits: [
  //     'Improves body shape and contour',
  //     'Targets stubborn localised fat pockets',
  //     'Supports firmer, smoother-looking body skin',
  //     'Includes non-surgical buttock and hip treatments',
  //     'Creates a clear body treatment pathway on the website',
  //   ],
  //   ideal:
  //     'Ideal for clients wanting non-surgical body contouring, fat reduction, body tightening, buttock enhancement, hip dip correction, laser hair removal or body confidence treatments.',
  //   faqs: [
  //     {
  //       q: 'Why should Body Sculpt be a separate category?',
  //       a: 'Body treatments are very different from face treatments and should be easy for users to find without searching through facial categories.',
  //     },
  //     {
  //       q: 'What treatments belong here?',
  //       a: 'Fat-dissolving injections, fat freezing, cryolipolysis, RF body tightening, cavitation, shockwave, Lanluma butt lift, hip dip filler, PDO body threads, laser hair removal and weight-loss support.',
  //     },
  //     {
  //       q: 'Are body results instant?',
  //       a: 'Some treatments create gradual improvement over weeks, especially fat reduction, collagen stimulation and body tightening.',
  //     },
  //     {
  //       q: 'Can body treatments be combined?',
  //       a: 'Yes. Body contouring plans often combine fat reduction, tightening and skin texture treatments for a better outcome.',
  //     },
  //     {
  //       q: 'Is consultation needed?',
  //       a: 'Yes. Body treatments should be planned after assessment of the treatment area, suitability and expected outcome.',
  //     },
  //   ],
  //   prices: [
  //     { name: 'Body consultation', price: 'Consultation required' },
  //     { name: 'Fat-dissolving injections', price: 'From clinic pricing' },
  //     { name: 'Fat freezing / cryolipolysis', price: 'From clinic pricing' },
  //     { name: 'RF body tightening', price: 'From clinic pricing' },
  //     { name: 'Cavitation / shockwave', price: 'From clinic pricing' },
  //     { name: 'Lanluma butt lift', price: 'From clinic pricing' },
  //     { name: 'Hip dip filler', price: 'From clinic pricing' },
  //     { name: 'Laser hair removal', price: 'From clinic pricing' },
  //   ],
  //   subTreatments: [
  //     {
  //       title: 'Fat-Dissolving Injections',
  //       name: 'Target Stubborn Fat',
  //       description:
  //         'Targets small, stubborn fat pockets that do not respond easily to diet or exercise.',
  //       image: '/images/sub-treatments/body-sculpt/fat-dissolving.jpg',
  //     },
  //     {
  //       title: 'Fat Freezing',
  //       name: 'Non-Surgical Fat Reduction',
  //       description:
  //         'Uses controlled cooling to support gradual reduction of localised fat cells.',
  //       image: '/images/sub-treatments/body-sculpt/fat-freezing.jpg',
  //     },
  //     {
  //       title: 'Cryolipolysis',
  //       name: 'Body Contour Refinement',
  //       description:
  //         'A fat-freezing technology option used for non-surgical body contouring.',
  //       image: '/images/sub-treatments/body-sculpt/cryolipolysis.jpg',
  //     },
  //     {
  //       title: 'RF Body Tightening',
  //       name: 'Firm and Smooth',
  //       description:
  //         'Uses radiofrequency energy to support firmer, tighter-looking body skin.',
  //       image: '/images/sub-treatments/body-sculpt/rf-body-tightening.jpg',
  //     },
  //     {
  //       title: 'Cavitation',
  //       name: 'Contour Support',
  //       description:
  //         'A body contouring treatment often used as part of a fat reduction programme.',
  //       image: '/images/sub-treatments/body-sculpt/cavitation.jpg',
  //     },
  //     {
  //       title: 'Shockwave',
  //       name: 'Texture and Circulation Support',
  //       description:
  //         'Often combined with other body treatments to support smoother-looking skin texture.',
  //       image: '/images/sub-treatments/body-sculpt/shockwave.jpg',
  //     },
  //     {
  //       title: 'Lanluma Butt Lift',
  //       name: 'Collagen-Based Volume',
  //       description:
  //         'A non-surgical buttock enhancement treatment designed to stimulate collagen and improve shape.',
  //       image: '/images/sub-treatments/body-sculpt/lanluma-butt-lift.jpg',
  //     },
  //     {
  //       title: 'Hip Dip Filler',
  //       name: 'Smooth Body Silhouette',
  //       description:
  //         'Uses filler to soften hip dips and improve body contour balance.',
  //       image: '/images/sub-treatments/body-sculpt/hip-dip-filler.jpg',
  //     },
  //     {
  //       title: 'PDO Body Thread Lift',
  //       name: 'Body Skin Support',
  //       description:
  //         'Uses body threads to support selected areas where lifting or tightening is needed.',
  //       image: '/images/sub-treatments/body-sculpt/pdo-body-threads.jpg',
  //     },
  //     {
  //       title: 'Laser Hair Removal',
  //       name: 'Smooth Skin Treatment',
  //       description:
  //         'Reduces unwanted hair growth using laser technology across selected body areas.',
  //       image: '/images/sub-treatments/body-sculpt/laser-hair-removal.jpg',
  //     },
  //     {
  //       title: 'Weight Loss Programme',
  //       name: 'Body Confidence Support',
  //       description:
  //         'A structured programme for clients seeking additional weight and body-shape support.',
  //       image: '/images/sub-treatments/body-sculpt/weight-loss.jpg',
  //     },
  //   ],
  // },

  // {
  //   num: '10',
  //   label: 'Hair Restore',
  //   slug: 'hair-restore',
  //   image: '/assets/hair_restore.png',
  //   tagline: 'Support thinning hair, scalp health and natural hair density.',
  //   description:
  //     'Hair Restore is focused on hair loss, thinning hair and scalp regeneration. It can include PRP hair loss treatment, microneedling with PRP, stem cell growth factor treatment, scalp rejuvenation and male or female hair density support. This category is important because hair loss clients usually search directly for hair treatments, not general aesthetics.',
  //   benefits: [
  //     'Supports scalp health and hair density',
  //     'Creates a clear pathway for hair loss clients',
  //     'Suitable for male and female hair thinning concerns',
  //     'Can use regenerative treatment options',
  //     'Works best as a planned course where suitable',
  //   ],
  //   ideal:
  //     'Ideal for clients experiencing hair thinning, reduced density, early hair loss, scalp concerns or clients looking for regenerative hair support.',
  //   faqs: [
  //     {
  //       q: 'What treatments belong in Hair Restore?',
  //       a: 'PRP hair loss treatment, microneedling with PRP, stem cell growth factor treatment, scalp rejuvenation and hair density support.',
  //     },
  //     {
  //       q: 'Is PRP used for hair loss?',
  //       a: 'Yes. PRP is commonly used as a regenerative treatment option to support scalp and hair density in suitable clients.',
  //     },
  //     {
  //       q: 'Does hair treatment need a course?',
  //       a: 'Hair restoration treatments usually work best as a course, with maintenance depending on the client’s response and goals.',
  //     },
  //     {
  //       q: 'Is it only for men?',
  //       a: 'No. Hair Restore can support both male and female hair thinning concerns after consultation.',
  //     },
  //     {
  //       q: 'When can results appear?',
  //       a: 'Hair results are gradual and may take several months to become visible because hair growth cycles take time.',
  //     },
  //   ],
  //   prices: [
  //     { name: 'Hair loss consultation', price: 'Consultation required' },
  //     { name: 'PRP hair loss treatment', price: 'From clinic pricing' },
  //     { name: 'Microneedling and PRP for hair loss', price: 'From clinic pricing' },
  //     { name: 'Stem cell growth factor for hair loss', price: 'From clinic pricing' },
  //     { name: 'Hair restoration course', price: 'Bespoke quote' },
  //     { name: 'Maintenance session', price: 'From clinic pricing' },
  //   ],
  //   subTreatments: [
  //     {
  //       title: 'PRP Hair Loss',
  //       name: 'Regenerative Hair Support',
  //       description:
  //         'Uses platelet-rich plasma to support scalp health and natural hair density in suitable clients.',
  //       image: '/images/sub-treatments/hair-restore/prp-hair-loss.jpg',
  //     },
  //     {
  //       title: 'Microneedling with PRP',
  //       name: 'Scalp Stimulation',
  //       description:
  //         'Combines microneedling with PRP to support scalp activity and hair restoration plans.',
  //       image: '/images/sub-treatments/hair-restore/microneedling-prp.jpg',
  //     },
  //     {
  //       title: 'Stem Cell Growth Factor',
  //       name: 'Advanced Hair Support',
  //       description:
  //         'A specialist regenerative option designed to support hair density and scalp health.',
  //       image: '/images/sub-treatments/hair-restore/stem-cell-growth.jpg',
  //     },
  //     {
  //       title: 'Male Hair Loss',
  //       name: 'Men’s Hair Density Plan',
  //       description:
  //         'A tailored plan for male-pattern thinning or reduced density after consultation.',
  //       image: '/images/sub-treatments/hair-restore/male-hair-loss.jpg',
  //     },
  //     {
  //       title: 'Female Hair Loss',
  //       name: 'Women’s Hair Support',
  //       description:
  //         'A tailored approach for women experiencing thinning, shedding or reduced density.',
  //       image: '/images/sub-treatments/hair-restore/female-hair-loss.jpg',
  //     },
  //     {
  //       title: 'Scalp Rejuvenation',
  //       name: 'Healthy Scalp Foundation',
  //       description:
  //         'Supports scalp quality as part of a wider hair restoration programme.',
  //       image: '/images/sub-treatments/hair-restore/scalp-rejuvenation.jpg',
  //     },
  //   ],
  // },

  // {
  //   num: '11',
  //   label: 'Men’s Aesthetics',
  //   slug: 'mens-aesthetics',
  //   image: '/assets/mens_aesthetics.png',
  //   tagline: 'Subtle, masculine treatments for face, skin, hair and body confidence.',
  //   description:
  //     'Men’s Aesthetics gives male clients a clear path to treatments designed around masculine facial structure and common male concerns. It can include Botox for men, facial fillers, jawline enhancement, hair loss treatment, microneedling, Profhilo for men, PRP facials, fat-dissolving injections, PRP Shot, Scrotox and male skin plans.',
  //   benefits: [
  //     'Keeps male treatments easy to find',
  //     'Supports masculine facial balance and definition',
  //     'Covers hair, skin, body and intimate wellness concerns',
  //     'Encourages subtle, confidence-led results',
  //     'Improves website navigation for male clients',
  //   ],
  //   ideal:
  //     'Ideal for male clients seeking natural anti-ageing, jawline definition, hair loss support, skin quality improvement, body contouring or men’s wellness treatments.',
  //   faqs: [
  //     {
  //       q: 'Why create a Men’s Aesthetics category?',
  //       a: 'Men often search differently and may want reassurance that treatments are tailored to masculine anatomy and subtle results.',
  //     },
  //     {
  //       q: 'What treatments belong here?',
  //       a: 'Botox for men, facial fillers for men, hair loss treatment, microneedling, Profhilo, PRP facials, fat-dissolving injections, PRP Shot, Scrotox and jawline enhancement.',
  //     },
  //     {
  //       q: 'Will treatments look obvious?',
  //       a: 'The goal is usually subtle improvement: looking sharper, fresher and more rested without looking treated.',
  //     },
  //     {
  //       q: 'Can men’s treatments overlap with other categories?',
  //       a: 'Yes. The same treatment can appear in Men’s Aesthetics and also inside Smooth Lines, Face Sculpt, Hair Restore or Clear Skin.',
  //     },
  //     {
  //       q: 'Should PRP Shot and Scrotox be listed publicly?',
  //       a: 'Yes, if the clinic offers them, but use clear, professional language and place details on dedicated pages.',
  //     },
  //   ],
  //   prices: [
  //     { name: 'Men’s consultation', price: 'Consultation required' },
  //     { name: 'Botox for men', price: 'From clinic pricing' },
  //     { name: 'Facial fillers for men', price: 'From clinic pricing' },
  //     { name: 'Hair loss treatment', price: 'From clinic pricing' },
  //     { name: 'Microneedling for men', price: 'From clinic pricing' },
  //     { name: 'Profhilo / PRP facial for men', price: 'From clinic pricing' },
  //     { name: 'PRP Shot', price: 'From clinic pricing' },
  //     { name: 'Scrotox', price: 'From clinic pricing' },
  //   ],
  //   subTreatments: [
  //     {
  //       title: 'Botox for Men',
  //       name: 'Natural, Rested Look',
  //       description:
  //         'Softens expression lines while preserving masculine expression and facial character.',
  //       image: '/images/sub-treatments/mens-aesthetics/botox-for-men.jpg',
  //     },
  //     {
  //       title: 'Facial Fillers for Men',
  //       name: 'Structure and Definition',
  //       description:
  //         'Enhances facial balance, volume and definition with a male-focused approach.',
  //       image: '/images/sub-treatments/mens-aesthetics/facial-fillers-men.jpg',
  //     },
  //     {
  //       title: 'Jawline Enhancement',
  //       name: 'Sharper Lower Face',
  //       description:
  //         'Defines the jawline and chin to improve masculine facial structure and profile.',
  //       image: '/images/sub-treatments/mens-aesthetics/jawline-enhancement.jpg',
  //     },
  //     {
  //       title: 'Hair Loss Treatment',
  //       name: 'Density and Scalp Support',
  //       description:
  //         'Supports male hair thinning using regenerative treatment options such as PRP.',
  //       image: '/images/sub-treatments/mens-aesthetics/hair-loss-treatment.jpg',
  //     },
  //     {
  //       title: 'Microneedling for Men',
  //       name: 'Texture and Scar Improvement',
  //       description:
  //         'Improves skin texture, pores and scarring while supporting collagen production.',
  //       image: '/images/sub-treatments/mens-aesthetics/microneedling-men.jpg',
  //     },
  //     {
  //       title: 'Profhilo for Men',
  //       name: 'Hydration and Skin Quality',
  //       description:
  //         'Improves skin quality without changing facial shape or adding obvious volume.',
  //       image: '/images/sub-treatments/mens-aesthetics/profhilo-men.jpg',
  //     },
  //     {
  //       title: 'PRP Shot',
  //       name: 'Men’s Wellness Treatment',
  //       description:
  //         'A specialist PRP-based treatment option for male sexual wellness concerns.',
  //       image: '/images/sub-treatments/mens-aesthetics/prp-shot.jpg',
  //     },
  //     {
  //       title: 'Scrotox',
  //       name: 'Men’s Intimate Aesthetic Treatment',
  //       description:
  //         'A specialist men’s treatment that should be explained professionally on a dedicated page.',
  //       image: '/images/sub-treatments/mens-aesthetics/scrotox.jpg',
  //     },
  //   ],
  // },

  // {
  //   num: '12',
  //   label: 'Advanced Skincare',
  //   slug: 'advanced-skincare',
  //   image: '/assets/advanced_skincare.png',
  //   tagline: 'Professional skincare plans for long-term skin health and correction.',
  //   description:
  //     'Advanced Skincare is the home for consultations, medical-grade skincare, homecare routines and long-term plans for acne, pigmentation, anti-ageing, redness, barrier repair and maintenance. This category bridges the gap between in-clinic treatments and daily skincare, making results more consistent and sustainable.',
  //   benefits: [
  //     'Supports long-term skin health',
  //     'Improves maintenance between clinic treatments',
  //     'Targets acne, pigmentation and ageing concerns',
  //     'Creates a clear skincare consultation pathway',
  //     'Helps clients choose products safely and correctly',
  //   ],
  //   ideal:
  //     'Ideal for clients wanting professional help with skincare routines, acne control, pigmentation, ageing prevention, sensitivity, barrier repair or post-treatment maintenance.',
  //   faqs: [
  //     {
  //       q: 'Why should skincare be separate from Clear Skin?',
  //       a: 'Clear Skin is concern-led, while Advanced Skincare covers long-term homecare, product planning and skin health across all concerns.',
  //     },
  //     {
  //       q: 'What should be included here?',
  //       a: 'Skin consultation, medical-grade skincare, acne skincare, pigmentation skincare, anti-ageing skincare, barrier repair, brightening plans and maintenance plans.',
  //     },
  //     {
  //       q: 'Can skincare improve treatment results?',
  //       a: 'Yes. The right homecare can prepare the skin, improve results and help maintain outcomes after clinic treatments.',
  //     },
  //     {
  //       q: 'Is this only for problem skin?',
  //       a: 'No. It is also useful for prevention, maintenance, glow, hydration and healthy ageing.',
  //     },
  //     {
  //       q: 'Should product brands be listed?',
  //       a: 'Only list brands that the clinic genuinely stocks or prescribes. Keep the category brand-flexible if stock changes.',
  //     },
  //   ],
  //   prices: [
  //     { name: 'Skin consultation', price: 'Consultation required' },
  //     { name: 'Personalised skincare plan', price: 'Bespoke quote' },
  //     { name: 'Acne skincare plan', price: 'Bespoke quote' },
  //     { name: 'Pigmentation skincare plan', price: 'Bespoke quote' },
  //     { name: 'Anti-ageing skincare plan', price: 'Bespoke quote' },
  //     { name: 'Barrier repair plan', price: 'Bespoke quote' },
  //     { name: 'Post-treatment maintenance plan', price: 'Bespoke quote' },
  //   ],
  //   subTreatments: [
  //     {
  //       title: 'Skin Consultation',
  //       name: 'Understand Your Skin',
  //       description:
  //         'A professional assessment to identify skin type, concerns and the best treatment pathway.',
  //       image: '/images/sub-treatments/advanced-skincare/skin-consultation.jpg',
  //     },
  //     {
  //       title: 'Medical-Grade Skincare',
  //       name: 'Clinic-Led Homecare',
  //       description:
  //         'Professional skincare selected to support results and target specific concerns.',
  //       image: '/images/sub-treatments/advanced-skincare/medical-skincare.jpg',
  //     },
  //     {
  //       title: 'Acne Skincare',
  //       name: 'Breakout Control at Home',
  //       description:
  //         'A structured routine to reduce congestion, oil imbalance and recurring breakouts.',
  //       image: '/images/sub-treatments/advanced-skincare/acne-skincare.jpg',
  //     },
  //     {
  //       title: 'Pigmentation Skincare',
  //       name: 'Brighten Uneven Tone',
  //       description:
  //         'Targets dark spots, sun damage and post-inflammatory pigmentation with a guided routine.',
  //       image: '/images/sub-treatments/advanced-skincare/pigmentation-skincare.jpg',
  //     },
  //     {
  //       title: 'Anti-Ageing Skincare',
  //       name: 'Protect and Maintain',
  //       description:
  //         'Supports collagen, hydration and daily skin protection as part of a long-term ageing plan.',
  //       image: '/images/sub-treatments/advanced-skincare/anti-ageing-skincare.jpg',
  //     },
  //     {
  //       title: 'Barrier Repair',
  //       name: 'Calm and Strengthen',
  //       description:
  //         'A routine focused on sensitivity, dryness, redness and damaged skin barrier support.',
  //       image: '/images/sub-treatments/advanced-skincare/barrier-repair.jpg',
  //     },
  //     {
  //       title: 'Maintenance Plan',
  //       name: 'Keep Results Lasting',
  //       description:
  //         'A homecare strategy designed to protect and extend your in-clinic treatment results.',
  //       image: '/images/sub-treatments/advanced-skincare/maintenance-plan.jpg',
  //     },
  //   ],
  // },
];

export default TREATMENTS;