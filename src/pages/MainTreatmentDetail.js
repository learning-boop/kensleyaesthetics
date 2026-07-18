import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { client } from '../lib/sanityClient';
import { useTreatments } from '../context/TreatmentsContext';
import { useAppointment } from '../context/AppointmentContext';
import PinnedShowcase from '../components/PinnedShowcase';
import QuickContact from '../components/QuickContact';
import SeoHead from '../components/SeoHead';
import { TREATMENT_KEYWORDS } from '../data/keywords';
import './pages.css';
import './TreatmentDetail.css';
import './MainTreatmentDetail.css';

const QUERY = `*[_type == "mainTreatment" && slug.current == $slug][0] {
  num,
  "slug": slug.current,
  label,
  tagline,
  description,
  "image": image.asset->url,
  "image_second": image_second.asset->url,
  "reviews": reviews[].asset->url,
  benefits,
  ideal,
  faqs[] { q, a },
  subTreatments[] {
    title,
    name,
    description,
    "image": image.asset->url
  }
}`;

/* Map each main treatment slug → related package slugs (new consolidated packages) */
const RELATED_MAP = {
  'anti-wrinkle-treatments':  ['sculpt-and-define', 'non-surgical-lift'],
  'dermal-fillers':           ['sculpt-and-define', 'non-surgical-lift', 'under-eye-refresh'],
  'skin-boosters':            ['glow-and-hydrate', 'sculpt-and-define', 'neck-renewal'],
  'regenerative-treatments':  ['firm-and-lift', 'clear-skin', 'non-surgical-lift'],
  'biostimulators':           ['firm-and-lift', 'non-surgical-lift'],
  'microneedling':            ['clear-skin', 'even-and-bright', 'firm-and-lift'],
  'rf-microneedling':         ['clear-skin', 'firm-and-lift', 'neck-renewal'],
  'hifu':                     ['non-surgical-lift', 'neck-renewal'],
};

function MainTreatmentDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openDrawer } = useAppointment();
  const { treatments: packages } = useTreatments();

  const [treatment, setTreatment] = useState(null);
  const [loading, setLoading]     = useState(true);
  const [openFaq, setOpenFaq]     = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slideDir, setSlideDir]       = useState('right');

  useEffect(() => {
    client.fetch(QUERY, { slug })
      .then(data => { setTreatment(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return null;
  if (!treatment) return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <p style={{ fontFamily: 'Cormorant, Georgia, serif', fontSize: 22, letterSpacing: 2, color: 'var(--color-primary)' }}>
        Content coming soon
      </p>
      <p style={{ fontSize: 13, color: 'var(--color-primary)', opacity: 0.6 }}>
        This treatment page is being prepared. Check back shortly.
      </p>
    </div>
  );

  const reviews = treatment.reviews || [];
  const prevReview = () => { setSlideDir('left');  setReviewIndex(i => (i - 1 + reviews.length) % reviews.length); };
  const nextReview = () => { setSlideDir('right'); setReviewIndex(i => (i + 1) % reviews.length); };

  const relatedSlugs = RELATED_MAP[slug] || [];
  const relatedPackages = packages.filter(p => relatedSlugs.includes(p.slug));

  const seoDescription = treatment.tagline
    ? `${treatment.tagline} — ${TREATMENT_KEYWORDS[slug] || 'non-surgical aesthetic treatment'} at Kensley Aesthetics in Newcastle.`
    : `Expert ${treatment.label} at Kensley Aesthetics. ${TREATMENT_KEYWORDS[slug] || 'Non-surgical aesthetic treatments'} in Newcastle.`;

  return (
    <>
      <SeoHead
        title={`${treatment.label} Newcastle | Kensley Aesthetics`}
        description={seoDescription.slice(0, 160)}
        image={treatment.image}
        path={`/main-treatments/${slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: treatment.label,
          description: treatment.tagline || treatment.description,
          url: `https://kensleyaesthetics.co.uk/main-treatments/${slug}`,
          provider: {
            '@type': 'MedicalBusiness',
            name: 'Kensley Aesthetics',
            url: 'https://kensleyaesthetics.co.uk',
          },
        }}
      />

      {/* ── HERO: split layout ───────────────────────────── */}
      <section className="mtd-hero">
        <div className="mtd-hero__content">
          <span className="mtd-hero__eyebrow">Kensley Aesthetics</span>
          <h1 className="mtd-hero__title">{treatment.label}</h1>
          {treatment.tagline && (
            <p className="mtd-hero__tagline">{treatment.tagline}</p>
          )}
          {treatment.description && (
            <p className="mtd-hero__desc">{treatment.description}</p>
          )}
          <div className="mtd-hero__actions">
            <button className="mtd-btn mtd-btn--dark" onClick={openDrawer}>
              Book Appointment
            </button>
            <button className="mtd-btn mtd-btn--ghost" onClick={() => navigate('/treatments')}>
              All Treatments
            </button>
          </div>
        </div>
        <div className="mtd-hero__image-wrap">
          {treatment.image && (
            <img src={treatment.image} alt={treatment.label} className="mtd-hero__image" />
          )}
        </div>
      </section>

      {/* ── BENEFITS STRIP ──────────────────────────────── */}
      {treatment.benefits && treatment.benefits.length > 0 && (
        <section className="mtd-benefits">
          <span className="mtd-benefits__label">Key Benefits</span>
          <ul className="mtd-benefits__list">
            {treatment.benefits.map((b, i) => (
              <li key={i} className="mtd-benefits__item">
                <span className="mtd-benefits__dot" />
                {b}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ── PINNED SUB-TREATMENTS ───────────────────────── */}
      {treatment.subTreatments && treatment.subTreatments.length > 0 && (
        <PinnedShowcase
          items={treatment.subTreatments}
          treatmentSlug={treatment.slug}
          fallbackImage={treatment.image}
        />
      )}

      {/* ── SECOND IMAGE + DESCRIPTION SPLIT ────────────── */}
      {treatment.image_second && (
        <section className="mtd-split">
          <div className="mtd-split__img-wrap">
            <img src={treatment.image_second} alt={treatment.label} className="mtd-split__img" />
          </div>
          <div className="mtd-split__content">
            <span className="mtd-split__eyebrow">About This Treatment</span>
            <h2 className="mtd-split__title">{treatment.label}</h2>
            <p className="mtd-split__body">{treatment.description}</p>
            <button className="mtd-btn mtd-btn--dark" onClick={openDrawer}>
              Book a Consultation
            </button>
          </div>
        </section>
      )}

      {/* ── FAQ ACCORDION ───────────────────────────────── */}
      {treatment.faqs && treatment.faqs.length > 0 && (
        <section className="mtd-faq">
          <div className="mtd-faq__inner">
            <div className="mtd-faq__header">
              <span className="mtd-faq__eyebrow">Common Questions</span>
              <h2 className="mtd-faq__title">Frequently Asked</h2>
            </div>
            <div className="mtd-faq__list">
              {treatment.faqs.map((faq, i) => (
                <div className="mtd-faq__item" key={i}>
                  <button
                    className="mtd-faq__btn"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="mtd-faq__q">{faq.q}</span>
                    <span className={`mtd-faq__toggle ${openFaq === i ? 'mtd-faq__toggle--open' : ''}`}>
                      {openFaq === i ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`mtd-faq__answer ${openFaq === i ? 'mtd-faq__answer--open' : ''}`}>
                    <p className="mtd-faq__answer-text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── BEFORE / AFTER ──────────────────────────────── */}
      {reviews.length > 0 && (
        <section className="mtd-ba">
          <div className="mtd-ba__header">
            <span className="mtd-ba__eyebrow">Results</span>
            <h2 className="mtd-ba__title">Before &amp; After</h2>
          </div>
          <div className="mtd-ba__viewer">
            <div
              key={reviewIndex}
              className={`mtd-ba__img td-ba__img-lg--slide-${slideDir}`}
              style={{ backgroundImage: `url(${reviews[reviewIndex]})` }}
            />
            {reviews.length > 1 && (
              <div className="mtd-ba__nav">
                <button className="mtd-ba__nav-btn" onClick={prevReview} aria-label="Previous">←</button>
                <span className="mtd-ba__count">{reviewIndex + 1} / {reviews.length}</span>
                <button className="mtd-ba__nav-btn" onClick={nextReview} aria-label="Next">→</button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── RELATED PACKAGES — hidden until client confirms ── */}
      {/* {relatedPackages.length > 0 && (
        <section className="mtd-related">
          ...
        </section>
      )} */}

      {/* ── QUICK CONTACT ───────────────────────────────── */}
      <QuickContact />
    </>
  );
}

export default MainTreatmentDetail;
