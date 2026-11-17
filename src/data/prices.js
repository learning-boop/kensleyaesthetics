/**
 * Treatment price list — single source of truth.
 * Used by the Prices page and by the prices FAQ (src/data/pageFaqs.js),
 * so a price changed here updates both automatically.
 */

/* ── ALL TREATMENTS ──────────────────────────────────────── */
export const PRICE_TREATMENTS = [
  {
    id: 'anti-wrinkle',
    name: 'Anti-Wrinkle Consultations',
    intro: 'Every anti-wrinkle appointment starts with a consultation. Your practitioner will assess your concerns and medical history, explain your options and tell you honestly if treatment is not right for you.',
    groups: [
      {
        label: 'Women',
        items: [
          { name: 'One Area',    standard: '£150', intro: '£130' },
          { name: 'Two Areas',   standard: '£250', intro: '£220' },
          { name: 'Three Areas', standard: '£300', intro: '£270' },
        ],
      },
      {
        label: 'Men',
        items: [
          { name: 'One Area',    standard: '£199', intro: '£170' },
          { name: 'Two Areas',   standard: '£299', intro: '£260' },
          { name: 'Three Areas', standard: '£349', intro: '£310' },
        ],
      },
      {
        label: 'Advanced',
        items: [
          { name: 'Standard Anti-Wrinkle Areas', standard: '£150', intro: '£130' },
          { name: 'Neck Bands',                  standard: '£350', intro: '£300' },
          { name: 'Jaw Muscles (Masseter)',      standard: '£350', intro: '£300' },
          { name: 'Teeth Grinding',              standard: '£350', intro: '£300' },
          { name: 'Trapezius Muscles',           standard: '£500', intro: '£450' },
          { name: 'Migraine Treatment',          standard: '£600', intro: '£550' },
        ],
      },
    ],
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    intro: 'Dermal filler treatments for selected areas of the face, planned around your features after a full consultation.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Lips 1 ml',                  standard: '£349',      intro: '£299' },
          { name: 'Cheeks',                      standard: 'From £349', intro: 'From £299' },
          { name: 'Chin',                        standard: 'From £349', intro: 'From £299' },
          { name: 'Jawline',                     standard: 'From £349', intro: 'From £299' },
          { name: 'Nasolabial Folds',            standard: '£349',      intro: '£299' },
          { name: 'Marionette Lines',            standard: '£349',      intro: '£299' },
          { name: 'Upper Lip Lines',             standard: '£349',      intro: '£299' },
          { name: 'Temples',                     standard: '£349',      intro: '£299' },
          { name: 'Tear Trough',                 standard: '£399',      intro: '£349' },
          { name: 'Tear Trough + PRP',           standard: '£599',      intro: '£549' },
          { name: 'Non-Surgical Rhinoplasty',    standard: 'From £399', intro: 'From £349' },
          { name: 'Non-Surgical Facelift',       standard: 'From £949', intro: 'From £849' },
          { name: 'Dissolving Filler',           standard: 'From £249', intro: 'From £220' },
        ],
      },
    ],
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    intro: 'Microneedling uses very fine needles on the skin. Ask us in your consultation what it can and can\'t do for you.',
    groups: [
      {
        label: 'Standard',
        items: [
          { name: 'Face',                   standard: '£199', intro: '£170' },
          { name: 'Face (3 Sessions)',       standard: '£500', intro: '£425' },
          { name: 'Face & Neck',            standard: '£300', intro: '£260' },
          { name: 'Face & Neck (3 Sessions)',standard: '£750', intro: '£650' },
        ],
      },
      {
        label: 'With Calecim®',
        items: [
          { name: 'Face',                   standard: '£350',   intro: '£300' },
          { name: 'Face (3 Sessions)',       standard: '£900',   intro: '£775' },
          { name: 'Face & Neck',            standard: '£500',   intro: '£425' },
          { name: 'Face & Neck (3 Sessions)',standard: '£1,350', intro: '£1,150' },
        ],
      },
      {
        label: 'With PRP',
        items: [
          { name: 'Face',                   standard: '£500',   intro: '£425' },
          { name: 'Face (3 Sessions)',       standard: '£1,250', intro: '£1,075' },
          { name: 'Face & Neck',            standard: '£650',   intro: '£550' },
          { name: 'Face & Neck (3 Sessions)',standard: '£1,500', intro: '£1,275' },
        ],
      },
      {
        label: 'With Exosomes',
        items: [
          { name: 'Face',                   standard: '£500',   intro: '£425' },
          { name: 'Face (3 Sessions)',       standard: '£1,250', intro: '£1,075' },
          { name: 'Face & Neck',            standard: '£650',   intro: '£550' },
          { name: 'Face & Neck (3 Sessions)',standard: '£1,500', intro: '£1,275' },
        ],
      },
    ],
  },
  {
    id: 'profhilo',
    name: 'Profhilo',
    intro: 'Profhilo is an injectable hyaluronic acid treatment for skin hydration and quality. Your practitioner will explain what to expect at your consultation.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Face',                                    standard: '£299', intro: '£260' },
          { name: 'Hands',                                   standard: '£299', intro: '£260' },
          { name: 'Neck',                                    standard: '£299', intro: '£260' },
          { name: 'Décolletage',                             standard: '£299', intro: '£260' },
          { name: 'Course of 3 Treatments (3 × 2 ml)',       standard: '£799', intro: '£699' },
          { name: 'Face + Hands + Neck + Décolletage (4 × 2 ml)', standard: '£999', intro: '£875' },
        ],
      },
    ],
  },
  {
    id: 'prp',
    name: 'PRP (Platelet-Rich Plasma)',
    intro: 'PRP uses a small sample of your own blood, prepared and returned to the skin. Your practitioner will explain what to expect and the possible side effects.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Face',               standard: '£350', intro: '£300' },
          { name: 'Neck',               standard: '£350', intro: '£300' },
          { name: 'Hands',              standard: '£350', intro: '£300' },
          { name: 'Décolletage',        standard: '£350', intro: '£300' },
          { name: 'Face & Neck',        standard: '£500', intro: '£425' },
          { name: 'Tear Trough',        standard: '£399', intro: '£350' },
          { name: 'PRP + Microneedling',standard: '£500', intro: '£425' },
          { name: 'Hair Loss',          standard: '£350', intro: '£300' },
          { name: '3-Session Package',  standard: '£900', intro: '£775' },
        ],
      },
    ],
  },
  {
    id: 'polynucleotides',
    name: 'Polynucleotides',
    intro: 'Polynucleotides are injected into the skin to support skin quality. Your practitioner will explain what to expect and the possible side effects.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Face',                                    standard: '£299', intro: '£260' },
          { name: 'Eyes',                                    standard: '£299', intro: '£260' },
          { name: 'Neck',                                    standard: '£299', intro: '£260' },
          { name: 'Décolletage',                             standard: '£299', intro: '£260' },
          { name: 'Course of 3 Treatments',                  standard: '£799', intro: '£699' },
          { name: 'Face + Hands + Neck + Décolletage',       standard: '£999', intro: '£875' },
        ],
      },
    ],
  },
];
