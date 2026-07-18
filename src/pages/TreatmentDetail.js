import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTreatments } from '../context/TreatmentsContext';
import PinnedShowcase from '../components/PinnedShowcase';
import QuickContact from '../components/QuickContact';
import SeoHead from '../components/SeoHead';
import { TREATMENT_KEYWORDS } from '../data/keywords';
import './pages.css';
import './TreatmentDetail.css';

function TreatmentDetail() {
  const { slug } = useParams();
  const { treatments, loading } = useTreatments();
  const treatment = treatments.find((t) => t.slug === slug);
  const [openFaq, setOpenFaq] = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slideDir, setSlideDir] = useState('right');

  if (loading) return null;
  if (!treatment) return <Navigate to="/" replace />;

  const reviews = treatment.reviews || [];
  const prevReview = () => {
    setSlideDir('left');
    setReviewIndex(i => (i - 1 + reviews.length) % reviews.length);
  };
  const nextReview = () => {
    setSlideDir('right');
    setReviewIndex(i => (i + 1) % reviews.length);
  };

  const isLight = true;

  const seoDescription = treatment.tagline
    ? `${treatment.tagline} — Kensley Aesthetics signature programme in Newcastle. ${TREATMENT_KEYWORDS[slug] || ''}.`
    : `Discover the ${treatment.label} programme at Kensley Aesthetics. Expert non-surgical aesthetic treatment in Newcastle.`;

  return (
    <>
      <SeoHead
        title={`${treatment.label} | Signature Programme`}
        description={seoDescription.slice(0, 160)}
        image={treatment.image}
        path={`/treatments/${slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: treatment.label,
          description: treatment.tagline || treatment.description,
          url: `https://kensleyaesthetics.co.uk/treatments/${slug}`,
          provider: {
            '@type': 'MedicalBusiness',
            name: 'Kensley Aesthetics',
            url: 'https://kensleyaesthetics.co.uk',
          },
        }}
      />
      {/* ── CINEMATIC HERO ───────────────────────────────── */}
      <section className={`td-hero${isLight ? ' td-hero--light' : ''}`}>
        {/* background image */}
        <div
          className="td-hero__bg"
          style={{ backgroundImage: `url(${treatment.image})` }}
        />
        {/* overlay */}
        <div className="td-hero__overlay" />

        {/* large treatment name */}
        <h1 className="td-hero__title">{treatment.label}</h1>

        {/* centred tagline */}
        <span className="td-hero__tagline">{treatment.tagline}</span>

        {/* bottom-right description */}
        <p className="td-hero__desc">{treatment.description}</p>

        {/* bottom-left scroll indicator */}
        <div className="td-hero__scroll">
          <span className="td-hero__scroll-arrow">↓</span>
        </div>
      </section>

      {/* ── EXPLORE ALL TREATMENTS (pinned showcase) ─────── */}
      <PinnedShowcase items={treatment.subTreatments} treatmentSlug={treatment.slug} fallbackImage={treatment.image} />

      {/* Services section */}
      <section>
        <div className="td-service-container">
          <h1 className='td-service'>Services</h1>
          <div className="td-service-links">
            {treatment.faqs.map((faq, i) => (
              <div className="td-faq-item" key={i}>
                <button
                  className="td-faq-btn"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {/* <span className="td-faq-num">{String(i + 1).padStart(2, '0')}</span> */}
                  <span className="td-faq-q">{faq.q}</span>
                  <span className="td-faq-toggle">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                <div className={`td-faq-answer${openFaq === i ? ' td-faq-answer--open' : ''}`}>
                  <p className="td-faq-answer-text">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── EDITORIAL: WHAT SHOULD PERFECT [TREATMENT] LOOK LIKE? ── */}
      <section className="td-editorial">
        {/* "WHAT SHOULD" — behind image */}
        <h2 className="td-editorial__hl td-editorial__hl--1">WHAT SHOULD</h2>

        {/* "PERFECT [treatment]" — behind image */}
        <h2 className="td-editorial__hl td-editorial__hl--2">
          PERFECT {treatment.label}
        </h2>

        {/* Centre image placeholder */}
        <div className="td-editorial__img" style={{ backgroundImage: `url(${treatment.image_second})` }} />

        {/* "LOOK LIKE?" — in front of image */}
        <h2 className="td-editorial__hl td-editorial__hl--3">LOOK LIKE?</h2>

        {/* Read more CTA */}
        <div className="td-editorial__cta">
          <span className="td-editorial__cta-text">READ MORE</span>
          <div className="td-editorial__cta-circle" />
        </div>

        {/* Quote block — lower left */}
        <div className="td-editorial__quote">
          <span className="td-editorial__quote-mark">"</span>
          <p className="td-editorial__quote-text">{treatment.description}</p>
        </div>
      </section>

      {/* ── BEFORE / AFTER ─────────────────────────────────────── */}
      {treatment.reviews && treatment.reviews.length > 0 && (
      <section className="td-ba">
        <h2 className="td-ba__heading">BEFORE/AFTER</h2>

        {/* Main image — single before/after photo, slides on nav */}
        <div className="td-ba__main-pair">
          <div
            key={reviewIndex}
            className={`td-ba__img-lg td-ba__img-lg--slide-${slideDir}`}
            style={{ backgroundImage: `url(${reviews[reviewIndex]})` }}
          />
        </div>

        {/* Secondary — preview of next image */}
        {reviews.length > 1 && (
          <div className="td-ba__secondary-pair">
            <div
              className="td-ba__img-sm"
              style={{ backgroundImage: `url(${reviews[(reviewIndex + 1) % reviews.length]})` }}
            />
          </div>
        )}

        {/* Navigation arrows */}
        <div className="td-ba__nav">
          <button className="td-ba__nav-btn" onClick={prevReview} aria-label="Previous">←</button>
          <button className="td-ba__nav-btn" onClick={nextReview} aria-label="Next">→</button>
        </div>

        {/* More photos circle CTA */}
        <div className="td-ba__more">
          <span className="td-ba__more-text">MORE PHOTOS</span>
        </div>
      </section>
      )}

      {/* ── PRICES ─────────────────────────────────────────────── */}
      <section className="td-prices">
        <h2 className="td-prices__heading">PRICES</h2>
        <div className="td-prices__list">
          {treatment.prices.map((item, i) => (
            <div className="td-prices__row" key={i}>
              <span className="td-prices__name">{item.name}</span>
              <div className="td-prices__right">
                {item.originalPrice && (
                  <span className="td-prices__original">{item.originalPrice}</span>
                )}
                {item.discount && (
                  <span className="td-prices__badge">{item.discount}</span>
                )}
                <span className="td-prices__amount">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCTOR / QUICK CONTACT ─────────────────────────────── */}
      <QuickContact />
    </>
  );
}

export default TreatmentDetail;
