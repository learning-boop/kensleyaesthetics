import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useTreatments } from '../context/TreatmentsContext';
import { useAppointment } from '../context/AppointmentContext';
import QuickContact from '../components/QuickContact';
import SeoHead from '../components/SeoHead';
import './pages.css';
import './TreatmentDetail.css';
import './PackageDetail.css';

function TreatmentDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { treatments, loading } = useTreatments();
  const { openDrawer } = useAppointment();
  const treatment = treatments.find((t) => t.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slideDir, setSlideDir] = useState('right');

  if (loading) return null;
  if (!treatment) return <Navigate to="/" replace />;

  const reviews = treatment.reviews || [];
  const steps = treatment.steps || [];
  const faqs = treatment.faqs || [];
  const ctaLabel = treatment.ctaLabel || 'Book a Consultation';

  const prevReview = () => { setSlideDir('left');  setReviewIndex(i => (i - 1 + reviews.length) % reviews.length); };
  const nextReview = () => { setSlideDir('right'); setReviewIndex(i => (i + 1) % reviews.length); };

  const seoTitle = treatment.seoTitle || `${treatment.label} Newcastle | Kensley Aesthetics`;
  const seoDesc  = treatment.seoDescription ||
    (treatment.concern
      ? `${treatment.label} — ${treatment.concern} Expert non-surgical plan at Kensley Aesthetics, Newcastle.`
      : `${treatment.tagline || ''} — Kensley Aesthetics treatment programme in Newcastle.`
    );

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDesc.slice(0, 160)}
        image={treatment.image}
        path={`/treatments/${slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: treatment.label,
          description: treatment.concern || treatment.tagline || treatment.description,
          url: `https://kensleyaesthetics.com/treatments/${slug}`,
          provider: { '@type': 'MedicalBusiness', name: 'Kensley Aesthetics', url: 'https://kensleyaesthetics.com' },
        }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pkg-hero">
        <div className="pkg-hero__content">
          <span className="pkg-hero__eyebrow">Signature Programme</span>
          <h1 className="pkg-hero__title">{treatment.label}</h1>
          {treatment.concern && (
            <p className="pkg-hero__concern">{treatment.concern}</p>
          )}
          {treatment.description && (
            <p className="pkg-hero__desc">{treatment.description}</p>
          )}
          <button className="pkg-btn pkg-btn--dark" onClick={openDrawer}>
            {ctaLabel}
          </button>
        </div>
        <div className="pkg-hero__image-wrap">
          {treatment.image && (
            <img src={treatment.image} alt={treatment.label} className="pkg-hero__image" />
          )}
        </div>
      </section>

      {/* ── TREATMENT STEPS ──────────────────────────────────── */}
      {steps.length > 0 && (
        <section className="pkg-steps">
          <div className="pkg-steps__inner">
            <div className="pkg-steps__header">
              <span className="pkg-steps__eyebrow">How It Works</span>
              <h2 className="pkg-steps__title">Your Treatment Journey</h2>
              <p className="pkg-steps__disclaimer">
                This is a typical treatment pathway. Your exact plan is personalised at a face-to-face consultation — not every treatment is suitable for every person.
              </p>
            </div>
            <div className="pkg-steps__list">
              {steps.map((step, i) => (
                <div className="pkg-step" key={i}>
                  <div className="pkg-step__num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="pkg-step__body">
                    <h3 className="pkg-step__title">{step.stepTitle}</h3>
                    {step.stepDescription && (
                      <p className="pkg-step__desc">{step.stepDescription}</p>
                    )}
                    {step.treatments && step.treatments.length > 0 && (
                      <ul className="pkg-step__treatments">
                        {step.treatments.map((t, j) => (
                          <li key={j} className="pkg-step__treatment">
                            {t.mainTreatmentSlug ? (
                              <button
                                className="pkg-step__treatment-link"
                                onClick={() => navigate(`/main-treatments/${t.mainTreatmentSlug}`)}
                              >
                                {t.name} →
                              </button>
                            ) : (
                              <span className="pkg-step__treatment-name">{t.name}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance caveat */}
            {treatment.caveatLine && (
              <p className="pkg-steps__caveat">{treatment.caveatLine}</p>
            )}

            <button className="pkg-btn pkg-btn--dark pkg-steps__cta" onClick={openDrawer}>
              {ctaLabel}
            </button>
          </div>
        </section>
      )}

      {/* ── SECOND IMAGE + DESCRIPTION ───────────────────────── */}
      {treatment.image_second && (
        <section className="pkg-split">
          <div className="pkg-split__img-wrap">
            <img src={treatment.image_second} alt={treatment.label} className="pkg-split__img" />
          </div>
          <div className="pkg-split__content">
            <span className="pkg-split__eyebrow">About This Programme</span>
            <h2 className="pkg-split__title">{treatment.label}</h2>
            <p className="pkg-split__body">{treatment.description}</p>
            <button className="pkg-btn pkg-btn--ghost" onClick={openDrawer}>
              {ctaLabel}
            </button>
          </div>
        </section>
      )}

      {/* ── BEFORE / AFTER ───────────────────────────────────── */}
      {reviews.length > 0 && (
        <section className="pkg-ba">
          <div className="pkg-ba__header">
            <span className="pkg-ba__eyebrow">Results</span>
            <h2 className="pkg-ba__title">Before &amp; After</h2>
          </div>
          <div className="pkg-ba__viewer">
            <div
              key={reviewIndex}
              className={`pkg-ba__img td-ba__img-lg--slide-${slideDir}`}
              style={{ backgroundImage: `url(${reviews[reviewIndex]})` }}
            />
            {reviews.length > 1 && (
              <div className="pkg-ba__nav">
                <button className="pkg-ba__nav-btn" onClick={prevReview} aria-label="Previous">←</button>
                <span className="pkg-ba__count">{reviewIndex + 1} / {reviews.length}</span>
                <button className="pkg-ba__nav-btn" onClick={nextReview} aria-label="Next">→</button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section className="pkg-faq">
          <div className="pkg-faq__inner">
            <div className="pkg-faq__header">
              <span className="pkg-faq__eyebrow">Common Questions</span>
              <h2 className="pkg-faq__title">Frequently Asked</h2>
            </div>
            <div className="pkg-faq__list">
              {faqs.map((faq, i) => (
                <div className="pkg-faq__item" key={i}>
                  <button
                    className="pkg-faq__btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="pkg-faq__q">{faq.q}</span>
                    <span className={`pkg-faq__toggle ${openFaq === i ? 'pkg-faq__toggle--open' : ''}`}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`pkg-faq__answer ${openFaq === i ? 'pkg-faq__answer--open' : ''}`}>
                    <p className="pkg-faq__answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <QuickContact />
    </>
  );
}

export default TreatmentDetail;
