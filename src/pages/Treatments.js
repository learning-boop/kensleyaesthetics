import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client, MAIN_TREATMENTS_QUERY } from '../lib/sanityClient';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import './Treatments.css';

/* Treatments with their own detail pages */
const MAIN_TREATMENTS = [
  { num: '01', label: 'Anti-Wrinkle Treatments', slug: 'anti-wrinkle-treatments', sub: 'Smooth expression lines and prevent new ones forming.' },
  { num: '02', label: 'Dermal Fillers',           slug: 'dermal-fillers',          sub: 'Restore volume, define features and improve facial balance.' },
  { num: '03', label: 'Skin Boosters',            slug: 'skin-boosters',           sub: 'Deep injectable hydration for lasting glow and suppleness.' },
  { num: '04', label: 'Regenerative Treatments',  slug: 'regenerative-treatments', sub: 'PRP, polynucleotides and exosomes to repair and rebuild skin.' },
  { num: '05', label: 'Biostimulators',           slug: 'biostimulators',          sub: 'Collagen-stimulating injectables for deeper structural support.' },
  { num: '06', label: 'Microneedling',            slug: 'microneedling',           sub: 'Controlled micro-injuries that trigger collagen remodelling.' },
  { num: '07', label: 'RF Microneedling',         slug: 'rf-microneedling',        sub: 'Microneedling enhanced with radiofrequency energy for tightening.' },
  { num: '08', label: 'HIFU',                     slug: 'hifu',                    sub: 'Ultrasound lifting for the face, jowls and neck — no downtime.' },
];

/* Additional individual treatments — now have Sanity pages */
const EXTRA_TREATMENTS = [
  { num: '09', label: 'Chemical Peel',              slug: 'chemical-peel',            sub: 'Resurface and refresh the skin surface, targeting texture and tone.' },
  { num: '10', label: '3D HydrO2 Facial',           slug: 'hydro2-facial',            sub: 'Advanced facial combining oxygen, hydration and ultrasound technology.' },
  { num: '11', label: 'Mesotherapy',                slug: 'mesotherapy',              sub: 'Microinjections delivering vitamins and actives directly into the skin.' },
  { num: '12', label: 'LED Light Therapy',          slug: 'led-light-therapy',        sub: 'Clinically proven light wavelengths to calm, heal and rejuvenate.' },
  { num: '13', label: 'Profhilo',                   slug: 'profhilo',                 sub: 'High-concentration hyaluronic acid that bio-remodels skin from within.' },
  { num: '14', label: 'PRP (Platelet-Rich Plasma)', slug: 'prp',                      sub: 'Your own growth factors used to regenerate and repair skin tissue.' },
  { num: '15', label: 'Polynucleotides',            slug: 'polynucleotides',          sub: 'DNA-repair molecules that deeply restore skin health and elasticity.' },
  { num: '16', label: 'Medical-Grade Skincare',     slug: 'medical-grade-skincare',   sub: 'Clinician-prescribed homecare plans that support and extend results.' },
];

export default function Treatments() {
  const [sanityData, setSanityData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client.fetch(MAIN_TREATMENTS_QUERY).then(setSanityData);
  }, []);

  return (
    <>
      <SeoHead
        title="Treatments | Kensley Aesthetics"
        description="Explore our full range of advanced aesthetic treatments including anti-wrinkle, dermal fillers, skin boosters and more."
        path="/treatments"
      />
      <PageHero label="What We Offer" title="Our Treatments" />

      {/* ── ALL 17 INDIVIDUAL TREATMENTS ─────────────────── */}
      <section className="tr-root tr-root--dark">
        <div className="tr-section-header tr-section-header--light">
          <span className="tr-section-eyebrow">What We Offer</span>
          <h2 className="tr-section-title tr-section-title--light">All Treatments</h2>
          <p className="tr-section-sub tr-section-sub--light">
            Every treatment we offer — each can be taken standalone or combined as part of a personalised plan.
          </p>
        </div>
        <div className="tr-grid">
          {/* 8 treatments with their own detail pages */}
          {MAIN_TREATMENTS.map((t) => {
            const extra = sanityData.find((s) => s.slug === t.slug) || {};
            return (
              <div
                key={t.slug}
                className="tr-card tr-card--dark"
                onClick={() => navigate(`/main-treatments/${t.slug}`)}
              >
                {extra.image && (
                  <div className="tr-card__img-wrap">
                    <img src={extra.image} alt={t.label} className="tr-card__img" />
                  </div>
                )}
                <div className="tr-card__body">
                  <span className="tr-card__num">{t.num}</span>
                  <h3 className="tr-card__title tr-card__title--light">{t.label}</h3>
                  <p className="tr-card__sub tr-card__sub--light">{extra.tagline || t.sub}</p>
                  <span className="tr-card__cta tr-card__cta--light">Explore →</span>
                </div>
              </div>
            );
          })}

          {/* 9 additional individual treatments — navigate to their own pages */}
          {EXTRA_TREATMENTS.map((t) => {
            const extra = sanityData.find((s) => s.slug === t.slug) || {};
            return (
              <div
                key={t.slug}
                className="tr-card tr-card--dark"
                onClick={() => navigate(`/main-treatments/${t.slug}`)}
              >
                {extra.image && (
                  <div className="tr-card__img-wrap">
                    <img src={extra.image} alt={t.label} className="tr-card__img" />
                  </div>
                )}
                <div className="tr-card__body">
                  <span className="tr-card__num">{t.num}</span>
                  <h3 className="tr-card__title tr-card__title--light">{t.label}</h3>
                  <p className="tr-card__sub tr-card__sub--light">{extra.tagline || t.sub}</p>
                  <span className="tr-card__cta tr-card__cta--light">Explore →</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
