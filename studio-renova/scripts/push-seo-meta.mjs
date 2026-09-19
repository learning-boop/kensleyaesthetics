import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skECACuhN7I6sfL9RkYv7W2lanykaSiNMhfDFGnT9bu1m2eMifzzhobTVILcxWA3pUTxJ22qfLc2AVEicgzMXF0bh8is2oCzx0e14oPczyNW8TRexoAYBDNk0AH0roku8024CayM9UCSnD296tSV0ai0TOEOAFYSVjAEcljplwn9V4URycOJ'
});

// Mapping from document labels to Sanity _id and the SEO data from the marketer's document
const seoUpdates = [
  {
    _id: 'mainTreatment-anti-wrinkle-treatments',
    label: 'Anti-Wrinkle Treatments',
    seoTitle: 'Anti-Wrinkle Injections Newcastle | Kensley Aesthetics',
    seoDescription: 'Natural-looking anti-wrinkle treatments in Jesmond, Newcastle upon Tyne. Smooth expression lines without losing movement. Doctor-led. Book a consultation today.',
  },
  {
    _id: 'mainTreatment-dermal-fillers',
    label: 'Dermal Fillers',
    seoTitle: 'Dermal Fillers Newcastle | Kensley Aesthetics',
    seoDescription: 'Hyaluronic acid dermal fillers in Newcastle upon Tyne. Restore volume, define features and improve facial balance with anatomy-led precision. Book today.',
  },
  {
    _id: 'mainTreatment-skin-boosters',
    label: 'Skin Boosters',
    seoTitle: 'Skin Boosters Newcastle | Kensley Aesthetics',
    seoDescription: 'Skin booster treatments in Jesmond, Newcastle upon Tyne. Deep injectable hydration for a lasting, natural glow and suppleness. Book your consultation.',
  },
  {
    _id: 'mainTreatment-regenerative-treatments',
    label: 'Regenerative Treatments',
    seoTitle: 'Regenerative Treatments Newcastle | Kensley Aesthetics',
    seoDescription: 'PRP, polynucleotides and exosome regenerative treatments in Newcastle upon Tyne to repair and rebuild skin naturally. Doctor-led clinic. Book today.',
  },
  {
    _id: 'mainTreatment-biostimulators',
    label: 'Biostimulators',
    seoTitle: 'Biostimulator Treatments Newcastle | Kensley Aesthetics',
    seoDescription: 'Collagen-stimulating biostimulator treatments in Jesmond, Newcastle upon Tyne, for deeper structural support and gradual rejuvenation. Book a consultation.',
  },
  {
    _id: 'mainTreatment-microneedling',
    label: 'Microneedling',
    seoTitle: 'Microneedling Newcastle | Kensley Aesthetics',
    seoDescription: 'Microneedling treatments in Newcastle upon Tyne using controlled micro-injuries to trigger collagen remodelling and improve skin texture. Book today.',
  },
  {
    _id: 'mainTreatment-rf-microneedling',
    label: 'RF Microneedling',
    seoTitle: 'RF Microneedling Newcastle | Kensley Aesthetics',
    seoDescription: 'RF microneedling in Jesmond, Newcastle upon Tyne, combining microneedling with radiofrequency energy for skin tightening. Doctor-led. Book a consultation.',
  },
  {
    _id: 'mainTreatment-hifu',
    label: 'HIFU',
    seoTitle: 'HIFU Newcastle | Non-Surgical Facelift | Kensley Aesthetics',
    seoDescription: 'HIFU ultrasound lifting for the face, jowls and neck in Newcastle upon Tyne. Non-surgical, no downtime. Doctor-led clinic. Book your consultation today.',
  },
  {
    _id: 'main-treatment-chemical-peel',
    label: 'Chemical Peel',
    seoTitle: 'Chemical Peels Newcastle | Kensley Aesthetics',
    seoDescription: 'Chemical peel treatments in Jesmond, Newcastle upon Tyne, to resurface and refresh skin, targeting texture and tone. Doctor-led clinic. Book today.',
  },
  {
    _id: 'main-treatment-hydro2-facial',
    label: '3D HydrO2 Facial',
    seoTitle: '3D HydrO2 Facial Newcastle | Kensley Aesthetics',
    seoDescription: '3D HydrO2 Facial in Newcastle upon Tyne, combining oxygen, hydration and ultrasound technology for advanced skin rejuvenation. Book your treatment today.',
  },
  {
    _id: 'main-treatment-mesotherapy',
    label: 'Mesotherapy',
    seoTitle: 'Mesotherapy Newcastle | Kensley Aesthetics',
    seoDescription: 'Mesotherapy treatments in Jesmond, Newcastle upon Tyne, delivering vitamins and active ingredients directly into the skin. Doctor-led. Book a consultation.',
  },
  {
    _id: 'main-treatment-led-light-therapy',
    label: 'LED Light Therapy',
    seoTitle: 'LED Light Therapy Newcastle | Kensley Aesthetics',
    seoDescription: 'LED light therapy in Newcastle upon Tyne using clinically proven wavelengths to calm, heal and rejuvenate skin. Doctor-led clinic. Book your session today.',
  },
  {
    _id: 'main-treatment-profhilo',
    label: 'Profhilo',
    seoTitle: 'Profhilo Newcastle | Kensley Aesthetics',
    seoDescription: 'Profhilo treatment in Jesmond, Newcastle upon Tyne. High-concentration hyaluronic acid that bio-remodels skin from within. Book your consultation today.',
  },
  {
    _id: 'main-treatment-prp',
    label: 'PRP (Platelet-Rich Plasma)',
    seoTitle: 'PRP Treatment Newcastle | Kensley Aesthetics',
    seoDescription: 'PRP treatment in Newcastle upon Tyne, using your own growth factors to regenerate and repair skin tissue naturally. Doctor-led clinic. Book today.',
  },
  {
    _id: 'main-treatment-polynucleotides',
    label: 'Polynucleotides',
    seoTitle: 'Polynucleotide Treatment Newcastle | Kensley Aesthetics',
    seoDescription: 'Polynucleotide treatment in Jesmond, Newcastle upon Tyne. DNA-repair molecules that deeply restore skin health and elasticity. Book a consultation today.',
  },
  {
    _id: 'main-treatment-medical-grade-skincare',
    label: 'Medical-Grade Skincare',
    seoTitle: 'Medical-Grade Skincare Newcastle | Kensley Aesthetics',
    seoDescription: 'Clinician-prescribed medical-grade skincare plans in Newcastle upon Tyne that support and extend your treatment results. Doctor-led clinic. Book today.',
  },
];

console.log('Updating SEO meta for', seoUpdates.length, 'mainTreatment documents...\n');

const results = await Promise.all(
  seoUpdates.map(({ _id, label, seoTitle, seoDescription }) =>
    client
      .patch(_id)
      .set({ seoTitle, seoDescription })
      .commit()
      .then(() => ({ _id, label, ok: true }))
      .catch(err => ({ _id, label, ok: false, error: err.message }))
  )
);

for (const r of results) {
  if (r.ok) {
    console.log(' ✓', r.label);
  } else {
    console.log(' ✗', r.label, '—', r.error);
  }
}

console.log('\nDone. Updated', results.filter(r => r.ok).length, 'of', results.length, 'documents.');
