import { useNavigate } from 'react-router-dom';
import { useTreatments } from '../context/TreatmentsContext';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import './TreatmentPlan.css';

export default function TreatmentPlan() {
  const { treatments } = useTreatments();
  const navigate = useNavigate();

  return (
    <>
      <SeoHead
        title="Treatment Plans | Kensley Aesthetics"
        description="Explore our curated signature treatment programmes — personalised packages designed to restore, refresh and refine."
        path="/treatment-plan"
      />
      <PageHero label="Signature Programmes" title="Treatment Plans" />

      <section className="tp-root">
        <div className="tp-grid">
          {treatments.map((t, i) => (
            <div
              key={t.slug}
              className="tp-card"
              onClick={() => navigate(`/treatments/${t.slug}`)}
            >
              {t.image && (
                <div className="tp-card__img-wrap">
                  <img src={t.image} alt={t.label} className="tp-card__img" />
                </div>
              )}
              <div className="tp-card__body">
                <span className="tp-card__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="tp-card__title">{t.label}</h3>
                {t.tagline && <p className="tp-card__sub">{t.tagline}</p>}
                <span className="tp-card__cta">View Programme →</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
