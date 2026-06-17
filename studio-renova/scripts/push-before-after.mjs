import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skECACuhN7I6sfL9RkYv7W2lanykaSiNMhfDFGnT9bu1m2eMifzzhobTVILcxWA3pUTxJ22qfLc2AVEicgzMXF0bh8is2oCzx0e14oPczyNW8TRexoAYBDNk0AH0roku8024CayM9UCSnD296tSV0ai0TOEOAFYSVjAEcljplwn9V4URycOJ'
});

const items = [
  {
    _id: 'beforeAfter-01',
    _type: 'beforeAfter',
    rank: 1,
    label: 'Forehead Lines',
    category: 'Anti-Wrinkle Treatments',
    treatment: { _type: 'reference', _ref: 'mainTreatment-anti-wrinkle-treatments' },
  },
  {
    _id: 'beforeAfter-02',
    _type: 'beforeAfter',
    rank: 2,
    label: 'Lip Enhancement',
    category: 'Dermal Fillers',
    treatment: { _type: 'reference', _ref: 'mainTreatment-dermal-fillers' },
  },
  {
    _id: 'beforeAfter-03',
    _type: 'beforeAfter',
    rank: 3,
    label: 'Cheek Contouring',
    category: 'Dermal Fillers',
    treatment: { _type: 'reference', _ref: 'mainTreatment-dermal-fillers' },
  },
  {
    _id: 'beforeAfter-04',
    _type: 'beforeAfter',
    rank: 4,
    label: 'Skin Radiance Boost',
    category: 'Skin Boosters',
    treatment: { _type: 'reference', _ref: 'mainTreatment-skin-boosters' },
  },
  {
    _id: 'beforeAfter-05',
    _type: 'beforeAfter',
    rank: 5,
    label: 'Skin Renewal',
    category: 'Regenerative Treatments',
    treatment: { _type: 'reference', _ref: 'mainTreatment-regenerative-treatments' },
  },
  {
    _id: 'beforeAfter-06',
    _type: 'beforeAfter',
    rank: 6,
    label: 'Collagen Restoration',
    category: 'Biostimulators',
    treatment: { _type: 'reference', _ref: 'mainTreatment-biostimulators' },
  },
  {
    _id: 'beforeAfter-07',
    _type: 'beforeAfter',
    rank: 7,
    label: 'Acne Scar Reduction',
    category: 'Microneedling',
    treatment: { _type: 'reference', _ref: 'mainTreatment-microneedling' },
  },
  {
    _id: 'beforeAfter-08',
    _type: 'beforeAfter',
    rank: 8,
    label: 'Skin Tightening',
    category: 'RF Microneedling',
    treatment: { _type: 'reference', _ref: 'mainTreatment-rf-microneedling' },
  },
  {
    _id: 'beforeAfter-09',
    _type: 'beforeAfter',
    rank: 9,
    label: 'Non-Surgical Lift',
    category: 'HIFU',
    treatment: { _type: 'reference', _ref: 'mainTreatment-hifu' },
  },
];

const results = await Promise.all(items.map(item => client.createOrReplace(item)));
console.log('Created/updated', results.length, 'beforeAfter documents:');
results.forEach(r => console.log(' ✓', r._id, '|', r.label, '—', r.category));
