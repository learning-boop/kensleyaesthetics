import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import { client, MAIN_TREATMENTS_QUERY } from '../lib/sanityClient';
import { sanityImg } from '../utils/sanityImage';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import './Treatments.css';

/* Treatments with their own detail pages */
const MAIN_TREATMENTS = [
  { num: '01', label: 'Anti-Wrinkle Consultations', slug: 'anti-wrinkle-treatments', sub: 'Explore personalised options for forehead lines, frown lines and other facial wrinkles, with clinical guidance tailored to you.' },
  { num: '02', label: 'Dermal Fillers',              slug: 'dermal-fillers',          sub: 'Restore selected areas of lost volume or enhance facial balance with a personalised, natural-looking approach.' },
  { num: '03', label: 'Skin Boosters',               slug: 'skin-boosters',           sub: 'Improve skin hydration and quality with injectable treatments selected for your individual skin concerns.' },
  { num: '04', label: 'Biostimulators',              slug: 'biostimulators',          sub: 'Discover collagen-stimulating treatments designed to support gradual changes in facial volume and skin quality.' },
  { num: '05', label: 'Microneedling',               slug: 'microneedling',           sub: 'Improve the appearance of acne scars, uneven texture and fine lines through controlled skin renewal.' },
  { num: '06', label: 'RF Microneedling',            slug: 'rf-microneedling',        sub: 'Combine microneedling with radiofrequency energy for selected texture and mild skin laxity concerns.' },
  { num: '07', label: 'HIFU',                        slug: 'hifu',                    sub: 'Explore ultrasound-based treatment options for selected concerns involving mild skin laxity.' },
];

/* Additional individual treatments — now have Sanity pages */
const EXTRA_TREATMENTS = [
  { num: '08', label: 'Chemical Peels',              slug: 'chemical-peel',            sub: 'Refresh uneven skin tone and texture with professionally selected exfoliating treatments.' },
  { num: '09', label: '3D HydrO2 Facial',           slug: 'hydro2-facial',            sub: 'Enjoy a personalised facial treatment focused on cleansing, exfoliation and skin hydration.' },
  { num: '10', label: 'Mesotherapy',                 slug: 'mesotherapy',              sub: 'Explore injectable skin treatments using selected formulations for individual skin quality concerns.' },
  { num: '11', label: 'LED Light Therapy',           slug: 'led-light-therapy',        sub: 'Discover non-invasive light-based treatments for selected skin concerns and skincare plans.' },
  { num: '12', label: 'Profhilo',                    slug: 'profhilo',                 sub: 'Support hydration, elasticity and smoother-looking skin with hyaluronic acid bioremodelling.' },
  { num: '13', label: 'PRP',                         slug: 'prp',                      sub: 'Explore platelet-rich plasma procedures and their potential role in selected skin concerns.' },
  { num: '14', label: 'Polynucleotides',             slug: 'polynucleotides',          sub: 'Learn about polynucleotide treatments for skin quality and delicate areas, including around the eyes.' },
  { num: '15', label: 'Medical-Grade Skincare',      slug: 'medical-grade-skincare',   sub: 'Build a personalised skincare routine guided by your skin type, concerns and treatment goals.' },
];

export default function Treatments() {
  const [sanityData, setSanityData] = useState([]);

  useEffect(() => {
    client.fetch(MAIN_TREATMENTS_QUERY).then(setSanityData);
  }, []);

  return (
    <>
      <SeoHead
        title="Aesthetic Treatments Newcastle | Kensley Aesthetics"
        description="Explore skin boosters, dermal fillers and aesthetic treatments at Kensley Aesthetics in Jesmond, Newcastle. Book a personalised consultation."
        path="/treatments"
      />

      {/* ── ALL 17 INDIVIDUAL TREATMENTS ─────────────────── */}
      <section className="tr-root tr-root--dark">
        <div className="tr-section-header tr-section-header--light">
          <h2 className="tr-section-title tr-section-title--light">Aesthetic Treatments in Newcastle upon Tyne</h2>
          <p className="tr-section-sub tr-section-sub--light">
            Natural-looking results. Personalised care. Confidence that feels like you.
          </p>
        </div>
        <div className="tr-grid">
          {/* 8 treatments with their own detail pages */}
          {MAIN_TREATMENTS.map((t) => {
            const extra = sanityData.find((s) => s.slug === t.slug) || {};
            return (
              <Link
                key={t.slug}
                to={`/main-treatments/${t.slug}`}
                className="tr-card tr-card--dark"
              >
                {extra.image && (
                  <div className="tr-card__img-wrap">
                    <Image src={sanityImg(extra.image, { width: 500 })} alt={t.label} className="tr-card__img" width={500} height={600} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                )}
                <div className="tr-card__body">
                  <span className="tr-card__num">{t.num}</span>
                  <h3 className="tr-card__title tr-card__title--light">{t.label}</h3>
                  <p className="tr-card__sub tr-card__sub--light">{extra.tagline || t.sub}</p>
                  <span className="tr-card__cta tr-card__cta--light">Explore →</span>
                </div>
              </Link>
            );
          })}

          {/* 9 additional individual treatments - navigate to their own pages */}
          {EXTRA_TREATMENTS.map((t) => {
            const extra = sanityData.find((s) => s.slug === t.slug) || {};
            return (
              <Link
                key={t.slug}
                to={`/main-treatments/${t.slug}`}
                className="tr-card tr-card--dark"
              >
                {extra.image && (
                  <div className="tr-card__img-wrap">
                    <Image src={sanityImg(extra.image, { width: 500 })} alt={t.label} className="tr-card__img" width={500} height={600} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                )}
                <div className="tr-card__body">
                  <span className="tr-card__num">{t.num}</span>
                  <h3 className="tr-card__title tr-card__title--light">{t.label}</h3>
                  <p className="tr-card__sub tr-card__sub--light">{extra.tagline || t.sub}</p>
                  <span className="tr-card__cta tr-card__cta--light">Explore →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
