import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Image from 'next/image';
import { client } from '../lib/sanityClient';
import { useAppointment } from '../context/AppointmentContext';
import { sanityImg } from '../utils/sanityImage';
import SeoHead from '../components/SeoHead';
import { TREATMENT_KEYWORDS } from '../data/keywords';
import { STATIC_SUB_TREATMENTS } from '../data/subTreatments';
import { STATIC_MAIN_TREATMENTS } from '../data/mainTreatments';
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
  subTreatments[]-> {
    "slug": slug.current,
    "title": group,
    "name": label,
    description,
    tagline,
    "image": image.asset->url,
    duration,
    priceStandard,
    priceIntro,
  }
}`;

function MainTreatmentDetail({ initialTreatment = null }) {
  const { slug } = useParams();
  const { openDrawer } = useAppointment();

  const [treatment, setTreatment] = useState(initialTreatment);
  const [loading, setLoading]     = useState(!initialTreatment);
  const [openFaq, setOpenFaq]     = useState(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slideDir, setSlideDir]       = useState('right');

  useEffect(() => {
    if (initialTreatment) return;
    client.fetch(QUERY, { slug })
      .then(data => {
        if (data) {
          if (!data.subTreatments || data.subTreatments.length === 0) {
            data.subTreatments = STATIC_SUB_TREATMENTS[slug] || [];
          }
        } else {
          const staticMain = STATIC_MAIN_TREATMENTS[slug];
          if (staticMain) {
            data = {
              ...staticMain,
              image: null,
              image_second: null,
              reviews: [],
              faqs: [],
              ideal: null,
              subTreatments: STATIC_SUB_TREATMENTS[slug] || [],
            };
          }
        }
        setTreatment(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug, initialTreatment]);

  if (loading) return null;
  if (!treatment) return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <SeoHead title="Coming Soon" description="This treatment page is being prepared." path={`/main-treatments/${slug}`} noindex />
      <p style={{ fontFamily: 'Cormorant, Georgia, serif', fontSize: 22, letterSpacing: 2, color: 'var(--color-primary)' }}>
        Content coming soon
      </p>
      <p style={{ fontSize: 13, color: 'var(--color-primary)', opacity: 0.6 }}>
        This treatment page is being prepared. Check back shortly.
      </p>
      <Link to="/treatments" style={{ fontSize: 13, color: 'var(--color-primary)' }}>
        View All Treatments
      </Link>
    </div>
  );

  const reviews = treatment.reviews || [];
  const prevReview = () => { setSlideDir('left');  setReviewIndex(i => (i - 1 + reviews.length) % reviews.length); };
  const nextReview = () => { setSlideDir('right'); setReviewIndex(i => (i + 1) % reviews.length); };

  const seoDescription = treatment.tagline
    ? `${treatment.tagline} — ${TREATMENT_KEYWORDS[slug] || 'non-surgical aesthetic treatment'} at Kensley Aesthetics in Newcastle.`
    : `Expert ${treatment.label} at Kensley Aesthetics. ${TREATMENT_KEYWORDS[slug] || 'Non-surgical aesthetic treatments'} in Newcastle.`;

  // Derive lowest intro price across sub-treatments for schema + glance block
  const priceFrom = treatment.subTreatments
    ?.map(s => s.priceIntro || s.priceStandard)
    .filter(Boolean)
    .sort((a, b) => a - b)[0];

  return (
    <>
      <SeoHead
        title={`${treatment.label} Newcastle | Kensley Aesthetics`}
        description={seoDescription.slice(0, 160)}
        image={treatment.image}
        path={`/main-treatments/${slug}`}
        faqs={treatment.faqs}
        breadcrumbs={[
          { name: 'Home',           path: '/' },
          { name: 'Treatments',     path: '/treatments' },
          { name: treatment.label,  path: `/main-treatments/${slug}` },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              '@id': `https://kensleyaesthetics.com/main-treatments/${slug}#service`,
              name: `${treatment.label} Newcastle`,
              description: treatment.tagline || treatment.description,
              url: `https://kensleyaesthetics.com/main-treatments/${slug}`,
              provider: { '@id': 'https://kensleyaesthetics.com/#clinic' },
              areaServed: [
                { '@type': 'City', name: 'Newcastle upon Tyne' },
                { '@type': 'AdministrativeArea', name: 'North East England' },
              ],
              performer: { '@id': 'https://kensleyaesthetics.com/#dr-tiru-matla' },
              ...(priceFrom && {
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'GBP',
                  price: priceFrom,
                  availability: 'https://schema.org/InStock',
                },
              }),
            },
          ],
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
              Schedule Your Consultation
            </button>
          </div>
        </div>
        <div className="mtd-hero__image-wrap">
          {treatment.image && (
            <Image src={sanityImg(treatment.image, { width: 800 })} alt={treatment.label} className="mtd-hero__image" width={800} height={1000} sizes="(max-width: 768px) 100vw, 50vw" />
          )}
        </div>
      </section>

      {/* ── SECOND IMAGE + DESCRIPTION SPLIT ────────────── */}
      {treatment.image_second && (
        <section className="mtd-split">
          <div className="mtd-split__img-wrap">
            <Image src={sanityImg(treatment.image_second, { width: 700 })} alt={treatment.label} className="mtd-split__img" width={700} height={875} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="mtd-split__content">
            <span className="mtd-split__eyebrow">About This Treatment</span>
            <h2 className="mtd-split__title">{treatment.label}</h2>
            <p className="mtd-split__body">{treatment.description}</p>
            <button className="mtd-btn mtd-btn--dark" onClick={openDrawer}>
              Schedule Your Consultation
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
              role="img"
              aria-label={`${treatment.label} before and after result ${reviewIndex + 1}`}
              style={{ backgroundImage: `url(${sanityImg(reviews[reviewIndex], { width: 1000 })})` }}
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

    </>
  );
}

export default MainTreatmentDetail;
