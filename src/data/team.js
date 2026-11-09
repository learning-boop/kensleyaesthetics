/**
 * Kensley Aesthetics practitioners — About page "Meet the team".
 * Bios supplied by the clinic (Nov 2026), lightly edited for consistency.
 *
 * PHOTOS: /public/images/team/<slug>.webp — 640×800 (4:5), cropped from the
 * clinic's own team photos in /images/kensley-real/. `photoRound` is a
 * 600×600 head-and-shoulders crop used for the round photos on the About
 * page (Nov 2026). Set `photo: null` to
 * show the empty frame with the person's initials instead.
 *
 * QUALIFICATION: shown under each photo on the homepage only. The About
 * page shows no qualification row and keeps Experience and bios focused on
 * aesthetics, without earlier careers (client direction, Nov 2026).
 *
 * aboutOnly: true keeps a profile on the About page only (not on the
 * homepage slider or the Black Friday page).
 *
 * REGISTRATION: add the professional register and number when the clinic
 * confirms them (GDC for dentists, NMC for nurses, GPhC for pharmacists),
 * e.g. registration: { body: 'GDC', number: '123456' }. Left out until known.
 */

export const TEAM = [
  {
    slug: 'dr-matla',
    name: 'Dr Matla',
    role: 'Founder & Clinical Lead',
    qualification: 'MBBS, MRCGP, DFSRH, PGCert Aesthetics & Cosmetic Medicine',
    aboutOnly: true,
    photo: '/images/team/dr-matla.webp',
    photoRound: '/images/team/dr-matla-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Over 20 years as a GMC-registered GP, with more than a decade in aesthetic medicine' },
      { label: 'Focus', value: 'Dermal fillers and biostimulators, and clinical oversight of the team' },
    ],
    bio: [
      'I’m Dr Matla, a GMC-registered GP and the founder and clinical lead of Kensley Aesthetics. I have over 20 years of clinical experience, more than a decade of it in aesthetic medicine, and hold a postgraduate certificate in Aesthetics and Cosmetic Medicine.',
      'In clinic, my main focus is dermal fillers and biostimulators. I am a certified trainer for GeneFill DX and HYAcorp body fillers, and I oversee clinical standards across the team so that every treatment at Kensley follows the same careful approach to assessment and safety.',
      'My background in general practice means I look at the whole person, including medical history and medication, before recommending any treatment. I believe in building genuine trust with patients: explaining the options clearly, being honest about what treatment can achieve and recommending less when less is right.',
    ],
  },
  {
    slug: 'dr-mariyam-durrani',
    name: 'Dr Mariyam Durrani',
    role: 'Facial Aesthetics Practitioner',
    qualification: 'Dentist',
    photo: '/images/team/dr-mariyam-durrani.webp',
    photoRound: '/images/team/dr-mariyam-durrani-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Around four years in facial aesthetics, with advanced training through a year-long Mediject Academy mentorship' },
      { label: 'Focus', value: 'Full-face balancing, dermal fillers, anti-wrinkle treatments, skin boosters, polynucleotides, microneedling and chemical peels' },
    ],
    bio: [
      'I have around four years of experience in facial aesthetics and have completed advanced training, including a year-long mentorship with Mediject Academy.',
      'My main focus is full-face balancing and rejuvenation, using treatments such as dermal fillers, anti-wrinkle treatments, skin boosters and polynucleotides. I also offer microneedling and chemical peels to support skin quality.',
      'I love the combination of science, creativity and getting to know people. I have a keen appreciation of how the smile and surrounding facial features work together, and I use that understanding to help patients feel more confident while still looking like themselves.',
      'I also love exploring innovative treatments and understanding the science behind how they work, so I can bring evidence-led options into clinic and help my patients achieve the best possible results.',
      'I look at the face as a whole, taking time to understand each patient’s features, concerns and goals. My approach is thoughtful and gradual, with a focus on balance, proportion and skin quality. I’m honest about what treatment can achieve and will advise against it if I don’t feel it is appropriate.',
      'I’m approachable, down to earth and happy to answer questions. I want patients to feel comfortable telling me what concerns them, without feeling judged or pressured into treatment. Consultations are a chance for us to get to know each other and build a plan that feels right for them.',
    ],
  },
  {
    slug: 'dr-pamela-inglis',
    name: 'Dr Pamela Inglis',
    role: 'Aesthetic Practitioner',
    qualification: 'Registered Nurse & Independent Prescriber',
    photo: '/images/team/dr-pamela-inglis.webp',
    photoRound: '/images/team/dr-pamela-inglis-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Advanced Aesthetic Practitioner with many years of clinical experience' },
      { label: 'Focus', value: 'Natural-looking results and healthy ageing' },
    ],
    bio: [
      'I’m Dr Pamela Inglis, an advanced aesthetic practitioner. With many years of clinical experience and a background in teaching, I bring a strong foundation of clinical knowledge, care and professionalism to my practice.',
      'My approach is personalised, with a focus on natural-looking results that help people feel more confident in their appearance. I take time to understand each person’s goals, assess their suitability for treatment and explain the options, helping them feel informed and comfortable throughout their care.',
      'I am passionate about aesthetics and the positive impact it can have on a person’s confidence and wellbeing. I focus on promoting healthy ageing and maintaining a fresh appearance while enhancing each individual’s natural features. I love making a genuine difference to people’s lives, helping them feel confident, refreshed and the very best version of themselves.',
    ],
  },
  {
    slug: 'sophia-azam',
    name: 'Sophia Azam',
    role: 'Aesthetic Practitioner',
    qualification: 'Pharmacist Independent Prescriber',
    photo: '/images/team/sophia-azam.webp',
    photoRound: '/images/team/sophia-azam-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: '2 years of experience in aesthetic medicine' },
      { label: 'Focus', value: 'Individual treatment plans for subtle, natural-looking results' },
    ],
    bio: [
      'I have 2 years of experience in aesthetic medicine, and I trained for two years under Dr Matla, our founder and clinical lead. That training shaped the careful, consultation-led approach I bring to every treatment.',
      'I combine my clinical knowledge with a patient-centred approach to aesthetic treatments. I am passionate about understanding each patient’s concerns and developing individual treatment plans that support subtle, natural-looking results.',
    ],
  },
  {
    slug: 'jacquelyn-foggin',
    name: 'Jacquelyn Foggin',
    role: 'Aesthetic Practitioner',
    qualification: 'Registered Nurse',
    photo: '/images/team/jacquelyn-foggin.webp',
    photoRound: '/images/team/jacquelyn-foggin-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Advanced Aesthetic Practitioner since 2020, with over 39 years in healthcare' },
      { label: 'Focus', value: 'Anti-wrinkle treatments, dermal fillers and peels' },
    ],
    bio: [
      'I am Jacquelyn Foggin, an advanced aesthetic practitioner with over 39 years of experience in healthcare and a passion for aesthetics, which I have been practising since 2020. I undertook my aesthetic training with Dr Matla and Dr Inglis.',
      'I specialise in anti-wrinkle treatments, dermal fillers and peels, and I love being able to make a positive difference to people’s confidence and self-esteem.',
      'What I enjoy most about aesthetic medicine is helping people feel happier and more confident in their own skin. I believe the best results are those that enhance your natural features rather than change the way you look.',
      'My approach is always personalised. I take time to listen to each patient’s individual needs, offer honest professional advice and make sure treatments are tailored to achieve subtle, natural-looking results. I believe in enhancing, never overdoing.',
      'I would describe myself as friendly, professional and enthusiastic, with a keen eye for detail. I want every patient to feel comfortable, listened to and confident that they are in good hands.',
      'My aim is simple: to help you look and feel like the very best version of yourself, while always keeping you looking naturally you.',
    ],
  },
];
