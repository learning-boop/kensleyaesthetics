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
 * REGISTRATION: add the professional register and number when the clinic
 * confirms them (GDC for dentists, NMC for nurses, GPhC for pharmacists),
 * e.g. registration: { body: 'GDC', number: '123456' }. Left out until known.
 */

export const TEAM = [
  {
    slug: 'dr-mariyam-durrani',
    name: 'Dr Mariyam Durrani',
    role: 'Facial Aesthetics Practitioner',
    photo: '/images/team/dr-mariyam-durrani.webp',
    photoRound: '/images/team/dr-mariyam-durrani-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Experience in facial aesthetics' },
      { label: 'Focus', value: 'Full-face balancing, dermal fillers, anti-wrinkle treatments, skin boosters, polynucleotides, microneedling and chemical peels' },
    ],
    bio: [
      'I have experience in facial aesthetics, including further training through a year-long mentorship with Mediject Academy.',
      'My main focus is full-face balancing and rejuvenation, using treatments such as dermal fillers, anti-wrinkle treatments, skin boosters and polynucleotides. I also offer microneedling and chemical peels to support skin quality.',
      'I love the combination of science, creativity and getting to know people. I enjoy helping patients feel more confident while still looking like themselves.',
      'I also love exploring innovative treatments and understanding the science behind how they work, so I can bring evidence-led options into clinic and help my patients achieve the best possible results.',
      `I look at the face as a whole, taking time to understand each patient's features, concerns and goals. My approach is thoughtful and gradual, with a focus on balance, proportion and skin quality. I'm honest about what treatment can achieve and will advise against it if I don't feel it is appropriate.`,
      `I'm approachable, down to earth and happy to answer questions. I want patients to feel comfortable telling me what concerns them, without feeling judged or pressured into treatment. Consultations are a chance for us to get to know each other and build a plan that feels right for them.`,
    ],
  },
  {
    slug: 'dr-pamela-inglis',
    name: 'Dr Pamela Inglis',
    role: 'Aesthetic Practitioner',
    photo: '/images/team/dr-pamela-inglis.webp',
    photoRound: '/images/team/dr-pamela-inglis-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Experience in aesthetics' },
      { label: 'Focus', value: 'Natural-looking results and healthy ageing' },
    ],
    bio: [
      `I'm Dr Pamela Inglis, an aesthetic practitioner. I bring a strong foundation of clinical knowledge, care and professionalism to my practice.`,
      `My approach is personalised, with a focus on natural-looking results that help people feel more confident in their appearance. I take time to understand each person's goals, assess their suitability for treatment and explain the options, helping them feel informed and comfortable throughout their care.`,
      `I am passionate about aesthetics and the positive impact it can have on a person's confidence and wellbeing. I focus on promoting healthy ageing and maintaining a fresh appearance while enhancing each individual's natural features. I love making a genuine difference to people's lives, helping them feel confident, refreshed and the very best version of themselves.`,
    ],
  },
  {
    slug: 'sophia-azam',
    name: 'Sophia Azam',
    role: 'Aesthetic Practitioner',
    photo: '/images/team/sophia-azam.webp',
    photoRound: '/images/team/sophia-azam-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Experience in aesthetics' },
      { label: 'Focus', value: 'Individual treatment plans for subtle, natural-looking results' },
    ],
    bio: [
      'I am an aesthetic practitioner with experience in aesthetics.',
      `I combine my clinical knowledge with a patient-centred approach to aesthetic treatments. I am passionate about understanding each patient's concerns and developing individual treatment plans that support subtle, natural-looking results.`,
    ],
  },
  {
    slug: 'jacquelyn-foggin',
    name: 'Jacquelyn Foggin',
    role: 'Aesthetic Practitioner',
    photo: '/images/team/jacquelyn-foggin.webp',
    photoRound: '/images/team/jacquelyn-foggin-round.webp',
    registration: null,
    facts: [
      { label: 'Experience', value: 'Experience in aesthetics' },
      { label: 'Focus', value: 'Anti-wrinkle treatments, dermal fillers and peels' },
    ],
    bio: [
      'I am Jacquelyn Foggin, an aesthetic practitioner with a passion for aesthetics. I undertook my aesthetic training with Dr Matla and Dr Inglis.',
      `I specialise in anti-wrinkle treatments, dermal fillers and peels, and I love being able to make a positive difference to people's confidence and self-esteem.`,
      'What I enjoy most about aesthetic medicine is helping people feel happier and more confident in their own skin. I believe the best results are those that enhance your natural features rather than change the way you look.',
      `My approach is always personalised. I take time to listen to each patient's individual needs, offer honest professional advice and make sure treatments are tailored to achieve subtle, natural-looking results. I believe in enhancing, never overdoing.`,
      'I would describe myself as friendly, professional and enthusiastic, with a keen eye for detail. I want every patient to feel comfortable, listened to and confident that they are in good hands.',
      'My aim is simple: to help you look and feel like the very best version of yourself, while always keeping you looking naturally you.',
    ],
  },
];
