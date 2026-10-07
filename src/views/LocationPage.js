import { useParams, Link, Navigate } from 'react-router-dom';
import Image from 'next/image';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import { LOCATIONS_BY_SLUG } from '../data/locations';
const drMatlaImg = '/images/drmatla.png';
import './LocationPage.css';

/* ── Treatment cards ─────────────────────────── */
const TREATMENTS = [
  { slug: 'anti-wrinkle-treatments', num: '01', name: 'Anti-Wrinkle Treatments', tagline: 'Smooth expression lines naturally' },
  { slug: 'dermal-fillers',          num: '02', name: 'Dermal Fillers',           tagline: 'Sculpt, define & restore volume' },
  { slug: 'skin-boosters',           num: '03', name: 'Skin Boosters',            tagline: 'Deep hydration & lasting radiance' },
  { slug: 'regenerative-treatments', num: '04', name: 'Regenerative Treatments',  tagline: 'PRP, exosomes & polynucleotides' },
  { slug: 'biostimulators',          num: '05', name: 'Biostimulators',           tagline: 'Stimulate collagen from within' },
  { slug: 'microneedling',           num: '06', name: 'Microneedling',            tagline: 'Resurface & rejuvenate your skin' },
  { slug: 'rf-microneedling',        num: '07', name: 'RF Microneedling',         tagline: 'Tighten, lift & smooth' },
  { slug: 'hifu',                    num: '08', name: 'HIFU',                     tagline: 'Non-surgical face lift' },
];

/* ── Icon SVGs ───────────────────────────────── */
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

/* ── Page ────────────────────────────────────── */
export default function LocationPage() {
  const { slug } = useParams();
  const { openDrawer } = useAppointment();
  const loc = LOCATIONS_BY_SLUG[slug];

  /* 404 redirect for unknown slugs */
  if (!loc) return <Navigate to="/locations" replace />;

  const pageTitle   = `Aesthetic Treatments in ${loc.name} | Kensley Aesthetics`;
  const description = `Doctor-led aesthetic treatments serving ${loc.name} (${loc.county}). Visit Kensley Aesthetics in Jesmond, Newcastle — led by Dr. Tiru Matla with 20+ years of clinical experience. Anti-wrinkle, fillers, Profhilo, HIFU & more.`;
  const path        = `/locations/${loc.slug}`;

  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Kensley Aesthetics',
    url: 'https://kensleyaesthetics.com',
    description: `Doctor-led aesthetic clinic in Jesmond, Newcastle, serving clients from ${loc.name} and across ${loc.region}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jesmond',
      addressLocality: 'Newcastle upon Tyne',
      addressRegion: 'Tyne and Wear',
      addressCountry: 'GB',
    },
    telephone: '3330570295',
    areaServed: {
      '@type': 'City',
      name: loc.name,
    },
    founder: {
      '@type': 'Physician',
      name: 'Dr. Tiru Matla',
      jobTitle: 'Founder & Medical Director',
    },
    sameAs: [
      'https://www.instagram.com/kensleyaesthetics',
      'https://www.facebook.com/profile.php?id=61591977870031',
    ],
  };

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={description}
        path={path}
        jsonLd={localBusinessLd}
        breadcrumbs={[
          { name: 'Home',      path: '/' },
          { name: 'Locations', path: '/locations' },
          { name: loc.name,    path },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="lp-breadcrumb" aria-label="Breadcrumb">
        <div className="lp-breadcrumb__inner">
          <Link to="/">Home</Link>
          <span className="lp-breadcrumb__sep">›</span>
          <Link to="/locations">Locations</Link>
          <span className="lp-breadcrumb__sep">›</span>
          <span>{loc.name}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="lp-hero">
        <p className="lp-hero__eyebrow">
          {loc.council} · {loc.region}
        </p>
        <h1 className="lp-hero__title">{loc.heroHeadline}</h1>
      </section>

      {/* ── CTA bar ── */}
      <div className="lp-cta-bar" role="complementary" aria-label="Contact options">
        <div className="lp-cta-bar__inner">
          <button className="lp-cta-btn lp-cta-btn--primary" onClick={openDrawer}>
            <CalendarIcon />
            Schedule Your Consultation
          </button>
          <a className="lp-cta-btn lp-cta-btn--outline" href="tel:3330570295">
            <PhoneIcon />
            Call Us
          </a>
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="lp-intro" aria-label={`About our service in ${loc.name}`}>
        <div className="lp-intro__inner">
          <div>
            <p className="lp-intro__label">Serving {loc.name}</p>
            <h2 className="lp-intro__heading">
              Premium Aesthetic Medicine for {loc.name} &amp; Beyond
            </h2>
          </div>
          <div className="lp-intro__body">
            <p>{loc.intro}</p>
            <p>{loc.body}</p>
            <p style={{ fontStyle: 'italic', opacity: 0.75 }}>{loc.cta}</p>
          </div>
        </div>
      </section>

      {/* ── Dr Matla ── */}
      <section className="lp-doctor" aria-label="About Dr. Tiru Matla">
        <div className="lp-doctor__inner">
          <div className="lp-doctor__photo-wrap">
            <Image
              src={drMatlaImg}
              alt="Dr. Tiru Matla — Founder of Kensley Aesthetics"
              className="lp-doctor__photo"
              loading="lazy"
              width={400}
              height={500}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
          <div>
            <p className="lp-doctor__eyebrow">Meet Your Expert</p>
            <h2 className="lp-doctor__name">Dr. Tiru Matla<br /><em style={{ fontWeight: 300, fontSize: '0.75em' }}>Founder &amp; Medical Director</em></h2>
            <p className="lp-doctor__bio">
              Dr. Tiru Matla is a GMC-registered medical doctor with over 20 years of clinical experience,
              including more than a decade specialising in aesthetic medicine. He founded Kensley Aesthetics
              with a single ambition: to deliver results that look completely natural and feel genuinely
              transformative — guided always by clinical rigour, not trend.
            </p>
            <p className="lp-doctor__bio">
              For {loc.name} clients visiting our Jesmond clinic, Dr. Matla provides a thorough, unhurried
              consultation — understanding your concerns, your facial anatomy, and your goals before
              recommending any treatment. Safety and suitability always come first.
            </p>
          </div>
        </div>
      </section>

      {/* ── Treatments ── */}
      <section className="lp-treatments" aria-label="Our treatments">
        <div className="lp-treatments__inner">
          <p className="lp-section-label">What We Offer</p>
          <h2 className="lp-section-heading">
            Non-Surgical Aesthetic Treatments
          </h2>
          <div className="lp-treatments__grid">
            {TREATMENTS.map(t => (
              <Link
                key={t.slug}
                to={`/main-treatments/${t.slug}`}
                className="lp-treatment-card"
              >
                <span className="lp-treatment-card__num">{t.num}</span>
                <span className="lp-treatment-card__name">{t.name}</span>
                <span className="lp-treatment-card__tagline">{t.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
