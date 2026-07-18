import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client, MAIN_TREATMENTS_QUERY } from '../lib/sanityClient';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import './Treatments.css';

const MAIN_TREATMENTS = [
  { num: '01', label: 'Anti-Wrinkle Treatments', slug: 'anti-wrinkle-treatments' },
  { num: '02', label: 'Dermal Fillers',           slug: 'dermal-fillers' },
  { num: '03', label: 'Skin Boosters',            slug: 'skin-boosters' },
  { num: '04', label: 'Regenerative Treatments',  slug: 'regenerative-treatments' },
  { num: '05', label: 'Biostimulators',           slug: 'biostimulators' },
  { num: '06', label: 'Microneedling',            slug: 'microneedling' },
  { num: '07', label: 'RF Microneedling',         slug: 'rf-microneedling' },
  { num: '08', label: 'HIFU',                     slug: 'hifu' },
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

      <section className="tr-root">
        <div className="tr-grid">
          {MAIN_TREATMENTS.map((t) => {
            const extra = sanityData.find((s) => s.slug === t.slug) || {};
            return (
              <div
                key={t.slug}
                className="tr-card"
                onClick={() => navigate(`/main-treatments/${t.slug}`)}
              >
                {extra.image && (
                  <div className="tr-card__img-wrap">
                    <img src={extra.image} alt={t.label} className="tr-card__img" />
                  </div>
                )}
                <div className="tr-card__body">
                  <span className="tr-card__num">{t.num}</span>
                  <h3 className="tr-card__title">{t.label}</h3>
                  {extra.tagline && <p className="tr-card__sub">{extra.tagline}</p>}
                  <span className="tr-card__cta">Explore →</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
