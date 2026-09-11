import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { client, SUB_TREATMENT_QUERY } from '../lib/sanityClient';
import { useAppointment } from '../context/AppointmentContext';
import { sanityImg } from '../utils/sanityImage';
import { STATIC_SUB_TREATMENTS } from '../data/subTreatments';
import SeoHead from '../components/SeoHead';
import QuickContact from '../components/QuickContact';
import './TreatmentDetail.css';
import './SubTreatmentDetail.css';

function SubTreatmentDetail() {
  const { slug, subSlug }     = useParams();
  const { openDrawer }         = useAppointment();

  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading]     = useState(true);
  const [openFaq, setOpenFaq]         = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [activeTab, setActiveTab]     = useState(0);
  const tabBarRef                     = useRef(null);

  useEffect(() => {
    setLoading(true);
    client.fetch(SUB_TREATMENT_QUERY, { slug, subSlug })
      .then(data => {
        if (data) {
          setTreatment(data);
        } else {
          // Fall back to static data when Sanity document doesn't exist yet
          const staticList = STATIC_SUB_TREATMENTS[slug] || [];
          const staticItem = staticList.find(item => item.slug === subSlug);
          if (staticItem) {
            setTreatment({
              label: staticItem.name,
              slug: staticItem.slug,
              group: staticItem.title,
              tagline: staticItem.tagline || null,
              description: staticItem.description || null,
              seoTitle: staticItem.seoTitle || null,
              seoDescription: staticItem.seoDescription || null,
              introduction: staticItem.introduction || null,
              anaesthetic: staticItem.anaesthetic || null,
              longevity: staticItem.longevity || null,
              duration: staticItem.duration || null,
              downtime: staticItem.downtime || null,
              numSessions: staticItem.numSessions || null,
              resultsTimeline: staticItem.resultsTimeline || null,
              whatItHelps: staticItem.whatItHelps || null,
              howItWorks: staticItem.howItWorks || null,
              benefits: staticItem.benefits || [],
              preparation: staticItem.preparation || null,
              whatToExpect: staticItem.whatToExpect || null,
              durationAndSessions: staticItem.durationAndSessions || null,
              resultsAndTimeline: staticItem.resultsAndTimeline || null,
              recoveryAndDowntime: staticItem.recoveryAndDowntime || null,
              aftercare: staticItem.aftercare || null,
              suitability: staticItem.suitability || null,
              sideEffectsAndRisks: staticItem.sideEffectsAndRisks || null,
              whyKensley: staticItem.whyKensley || null,
              faqs: staticItem.faqs || [],
              relatedTreatments: staticItem.relatedTreatments || [],
              priceStandard: staticItem.priceStandard || null,
              priceIntro: staticItem.priceIntro || null,
              heroImage: staticItem.heroImage || null,
              parentLabel: null,
              parentSlug: slug,
            });
          }
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, subSlug]);

  if (loading) return null;

  if (!treatment) return (
    <div className="std-coming-soon">
      <SeoHead title="Coming Soon" description="This treatment page is being prepared." path={`/main-treatments/${slug}/${subSlug}`} noindex />
      <span className="std-coming-soon__eyebrow">Kensley Aesthetics</span>
      <p className="std-coming-soon__text">This treatment page is being prepared.</p>
      <Link className="std-coming-soon__back" to={`/main-treatments/${slug}`}>
        Back to Treatment
      </Link>
    </div>
  );

  const reviews    = treatment.reviews || [];
  const prevReview = () => setReviewIndex(i => (i - 1 + reviews.length) % reviews.length);
  const nextReview = () => setReviewIndex(i => (i + 1) % reviews.length);

  // Fallback display label for parent when Sanity parentLabel isn't available
  const parentLabel = treatment.parentLabel || slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  const seoTitle = treatment.seoTitle
    || `${treatment.label} Newcastle | Kensley Aesthetics`;
  const seoDesc = treatment.seoDescription
    || (treatment.tagline
      ? `${treatment.tagline} — expert ${treatment.label} at Kensley Aesthetics in Newcastle.`
      : `Expert ${treatment.label} at Kensley Aesthetics. Doctor-led aesthetic clinic in Newcastle.`);

  // Build journey tabs from whichever fields exist
  const journeyTabs = [
    { key: 'preparation',        label: 'Preparation',    eyebrow: 'Before Your Visit',       content: treatment.preparation },
    { key: 'whatToExpect',       label: 'During',         eyebrow: 'Your Appointment',        content: treatment.whatToExpect },
    { key: 'durationAndSessions',label: 'Duration',       eyebrow: 'Appointments & Courses',  content: treatment.durationAndSessions },
    { key: 'resultsAndTimeline', label: 'Results',        eyebrow: 'What to Expect',          content: treatment.resultsAndTimeline },
    { key: 'recoveryAndDowntime',label: 'Recovery',       eyebrow: 'After Treatment',         content: treatment.recoveryAndDowntime },
    { key: 'aftercare',          label: 'Aftercare',      eyebrow: 'Post-Treatment Care',     content: treatment.aftercare },
  ].filter(t => t.content);

  const handleTabClick = (i) => {
    setActiveTab(i);
    // Scroll active tab button into view inside the tab bar
    if (tabBarRef.current) {
      const btn = tabBarRef.current.querySelectorAll('.std-journey__tab')[i];
      if (btn) btn.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDesc.slice(0, 160)}
        image={treatment.image || treatment.heroImage}
        path={`/main-treatments/${slug}/${subSlug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: treatment.label,
          description: treatment.tagline || treatment.description,
          url: `https://kensleyaesthetics.com/main-treatments/${slug}/${subSlug}`,
          provider: {
            '@type': 'MedicalBusiness',
            name: 'Kensley Aesthetics',
            url: 'https://kensleyaesthetics.com',
          },
        }}
      />

      {/* ── BREADCRUMB ───────────────────────────────────── */}
      <nav className="std-breadcrumb">
        <Link to="/treatments" className="std-breadcrumb__link">Treatments</Link>
        <span className="std-breadcrumb__sep">›</span>
        <Link to={`/main-treatments/${slug}`} className="std-breadcrumb__link">{parentLabel}</Link>
        <span className="std-breadcrumb__sep">›</span>
        <span className="std-breadcrumb__current">{treatment.label}</span>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="std-hero">
        <div className="std-hero__content">
          {treatment.group && <span className="std-hero__eyebrow">{treatment.group}</span>}
          <h1 className="std-hero__title">{treatment.label}</h1>
          {treatment.tagline && <p className="std-hero__tagline">{treatment.tagline}</p>}
          {treatment.description && <p className="std-hero__desc">{treatment.description}</p>}
          <div className="std-hero__actions">
            <button className="std-btn std-btn--gold" onClick={openDrawer}>Book Consultation</button>
            <Link className="std-btn std-btn--ghost" to={`/main-treatments/${slug}`}>
              {parentLabel}
            </Link>
          </div>
        </div>
        {(treatment.image || treatment.heroImage) && (
          <div className="std-hero__image-wrap">
            <img src={sanityImg(treatment.image || treatment.heroImage, { width: 800 })} alt={treatment.label} className="std-hero__image" width="800" height="1000" />
          </div>
        )}
      </section>

      {/* ── TREATMENT AT A GLANCE ────────────────────────── */}
      {(treatment.duration || treatment.anaesthetic || treatment.downtime || treatment.numSessions || treatment.resultsTimeline || treatment.longevity) && (
        <section className="std-glance">
          <p className="std-glance__heading">At a Glance</p>
          <div className="std-glance__strip">
            {[
              { label: 'Duration',     value: treatment.duration },
              { label: 'Anaesthetic',  value: treatment.anaesthetic },
              { label: 'Downtime',     value: treatment.downtime },
              { label: 'Sessions',     value: treatment.numSessions },
              { label: 'Results From', value: treatment.resultsTimeline },
              { label: 'Longevity',    value: treatment.longevity },
            ].filter(i => i.value).map((item, i) => (
              <div key={i} className="std-glance__chip">
                <span className="std-glance__chip-label">{item.label}</span>
                <span className="std-glance__chip-value">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── INTRODUCTION ─────────────────────────────────── */}
      {treatment.introduction && (
        <section className="std-intro">
          <div className="std-intro__inner">
            <span className="std-intro__mark">"</span>
            <p className="std-intro__text">{treatment.introduction}</p>
            <span className="std-intro__line" />
            <span className="std-intro__eyebrow">About This Treatment</span>
          </div>
        </section>
      )}

      {/* ── WHAT IT HELPS ────────────────────────────────── */}
      {treatment.whatItHelps && (
        <section className="std-helps">
          <div className="std-helps__inner">
            <div className="std-helps__accent" />
            <div className="std-helps__content">
              <span className="std-eyebrow">Concerns &amp; Conditions</span>
              <h2 className="std-h2">What This Treatment Can Help With</h2>
              <p className="std-body">{treatment.whatItHelps}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      {treatment.howItWorks && (
        <section className="std-how">
          <div className="std-how__inner">
            <span className="std-how__bg-num">01</span>
            <div className="std-how__content">
              <span className="std-eyebrow">The Science</span>
              <h2 className="std-h2">How Does It Work?</h2>
              <p className="std-body">{treatment.howItWorks}</p>
            </div>
          </div>
        </section>
      )}

      {/* ── BENEFITS ─────────────────────────────────────── */}
      {treatment.benefits && treatment.benefits.length > 0 && (
        <section className="std-benefits">
          <div className="std-benefits__header">
            <span className="std-eyebrow">Key Benefits</span>
            <h2 className="std-h2">Why Choose This Treatment</h2>
          </div>
          <ul className="std-benefits__grid">
            {treatment.benefits.map((b, i) => (
              <li key={i} className="std-benefits__card">
                <span className="std-benefits__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="std-benefits__text">{b}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── JOURNEY (tabbed: Preparation → Aftercare) ────── */}
      {journeyTabs.length > 0 && (
        <section className="std-journey">
          <div className="std-journey__header">
            <span className="std-eyebrow">Your Treatment Journey</span>
            <h2 className="std-h2">Step by Step</h2>
          </div>
          <div className="std-journey__tabbar" ref={tabBarRef}>
            {journeyTabs.map((tab, i) => (
              <button
                key={tab.key}
                className={`std-journey__tab${activeTab === i ? ' std-journey__tab--active' : ''}`}
                onClick={() => handleTabClick(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="std-journey__panel">
            <span className="std-eyebrow">{journeyTabs[activeTab].eyebrow}</span>
            <p className="std-journey__body">{journeyTabs[activeTab].content}</p>
          </div>
        </section>
      )}

      {/* ── SUITABILITY ──────────────────────────────────── */}
      {(treatment.suitability || treatment.ideal) && (
        <section className="std-ideal">
          <div className="std-ideal__inner">
            <span className="std-ideal__eyebrow">Is This Right for You?</span>
            <h2 className="std-ideal__title">Suitability</h2>
            <p className="std-ideal__body">{treatment.suitability || treatment.ideal}</p>
            <button className="std-btn std-btn--gold" onClick={openDrawer}>Book a Consultation</button>
          </div>
        </section>
      )}

      {/* ── SIDE EFFECTS AND RISKS ───────────────────────── */}
      {treatment.sideEffectsAndRisks && (
        <section className="std-risks">
          <div className="std-risks__inner">
            <span className="std-eyebrow">Safety Information</span>
            <h2 className="std-h2">Possible Side Effects &amp; Risks</h2>
            <p className="std-body" style={{ whiteSpace: 'pre-line' }}>{treatment.sideEffectsAndRisks}</p>
          </div>
        </section>
      )}

      {/* ── BEFORE / AFTER ───────────────────────────────── */}
      {reviews.length > 0 && (
        <section className="std-ba">
          <div className="std-ba__header">
            <span className="std-ba__eyebrow">Results</span>
            <h2 className="std-ba__title">Before &amp; After</h2>
          </div>
          <div className="std-ba__viewer">
            <div key={reviewIndex} className="std-ba__img" role="img" aria-label={`${treatment.label} before and after result ${reviewIndex + 1}`} style={{ backgroundImage: `url(${sanityImg(reviews[reviewIndex], { width: 1000 })})` }} />
            {reviews.length > 1 && (
              <div className="std-ba__nav">
                <button className="std-ba__nav-btn" onClick={prevReview} aria-label="Previous">←</button>
                <span className="std-ba__count">{reviewIndex + 1} / {reviews.length}</span>
                <button className="std-ba__nav-btn" onClick={nextReview} aria-label="Next">→</button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── WHY KENSLEY ──────────────────────────────────── */}
      {treatment.whyKensley && (
        <section className="std-why">
          <div className="std-why__inner">
            <span className="std-why__eyebrow">Doctor-Led Aesthetics</span>
            <h2 className="std-why__title">Why Kensley Aesthetics?</h2>
            <p className="std-why__body">{treatment.whyKensley}</p>
            <button className="std-btn std-btn--gold" onClick={openDrawer}>Book a Consultation</button>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────── */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section className="std-faq">
          <div className="std-faq__inner">
            <span className="std-faq__eyebrow">Common Questions</span>
            <h2 className="std-faq__title">Frequently Asked</h2>
            <div className="std-faq__list">
              {treatment.faqs.map((faq, i) => (
                <div className="std-faq__item" key={i}>
                  <button
                    className="std-faq__btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="std-faq__q">{faq.q}</span>
                    <span className="std-faq__toggle">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className={`std-faq__answer${openFaq === i ? ' std-faq__answer--open' : ''}`}>
                    <p className="std-faq__answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* ── RELATED TREATMENTS ───────────────────────────── */}
      {treatment.relatedTreatments && treatment.relatedTreatments.length > 0 && (
        <section className="std-related">
          <div className="std-related__inner">
            <span className="std-related__eyebrow">You May Also Consider</span>
            <h2 className="std-related__title">Related Treatments</h2>
            <div className="std-related__grid">
              {treatment.relatedTreatments.map((rt, i) => (
                <Link key={i} to={`/main-treatments/${rt.parentSlug}/${rt.slug}`} className="std-related__card">
                  <span className="std-related__group">{rt.title}</span>
                  <span className="std-related__name">{rt.name}</span>
                  <span className="std-related__arrow">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BACK TO PARENT ───────────────────────────────── */}
      <section className="std-back">
        <div className="std-back__inner">
          <span className="std-back__eyebrow">{parentLabel}</span>
          <h2 className="std-back__title">Explore More {parentLabel} Treatments</h2>
          <Link className="std-btn std-btn--ghost" to={`/main-treatments/${slug}`}>
            View All {parentLabel} →
          </Link>
        </div>
      </section>

      <QuickContact />
    </>
  );
}

export default SubTreatmentDetail;
