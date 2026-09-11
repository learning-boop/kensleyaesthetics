import { useParams, Link, Navigate } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import QuickContact from '../components/QuickContact';
import { LOCATIONS_BY_SLUG } from '../data/locations';
import drMatlaImg from '../data/images/drmatla.webp';
import { EmailLink } from '../utils/obfuscateEmail';
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.12 1.524 5.854L0 24l6.302-1.494A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.034-1.385l-.36-.214-3.735.885.918-3.645-.235-.374A9.818 9.818 0 1 1 12 21.818z" />
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
    telephone: '03334442013',
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
        <p className="lp-hero__subtitle">
          Doctor-led aesthetic treatments by Dr. Tiru Matla — serving {loc.name} and surrounding areas from our Jesmond, Newcastle clinic.
        </p>
      </section>

      {/* ── CTA bar ── */}
      <div className="lp-cta-bar" role="complementary" aria-label="Contact options">
        <div className="lp-cta-bar__inner">
          <button className="lp-cta-btn lp-cta-btn--primary" onClick={openDrawer}>
            <CalendarIcon />
            Book an Appointment
          </button>
          <a className="lp-cta-btn lp-cta-btn--outline" href="tel:03334442013">
            <PhoneIcon />
            Call Us
          </a>
          <a
            className="lp-cta-btn lp-cta-btn--outline"
            href="https://wa.me/447920699154"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            WhatsApp
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
            <img
              src={drMatlaImg}
              alt="Dr. Tiru Matla — Founder of Kensley Aesthetics"
              className="lp-doctor__photo"
              loading="lazy"
              width="400"
              height="500"
            />
            <div className="lp-doctor__photo-accent" aria-hidden="true" />
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
            <ul className="lp-doctor__credentials" aria-label="Dr. Matla's credentials">
              <li>GMC-registered medical doctor</li>
              <li>20+ years of clinical experience</li>
              <li>10+ years specialising in aesthetic medicine</li>
              <li>Commitment to natural, proportionate results</li>
              <li>Personalised treatment plans for every client</li>
            </ul>
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

      {/* ── Nearby areas ── */}
      {loc.nearbyAreas && loc.nearbyAreas.length > 0 && (
        <section className="lp-nearby" aria-label="Areas we serve">
          <div className="lp-nearby__inner">
            <p className="lp-section-label">Areas Served</p>
            <h2 className="lp-section-heading" style={{ fontSize: '1.5rem' }}>
              Serving {loc.name} &amp; Surrounding Areas
            </h2>
            <div className="lp-nearby__tags" role="list" aria-label="Nearby areas">
              <div className="lp-nearby__tag" role="listitem">{loc.name}</div>
              {loc.nearbyAreas.map(area => (
                <div key={area} className="lp-nearby__tag" role="listitem">{area}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contact ── */}
      <section className="lp-contact" aria-label="Contact Kensley Aesthetics">
        <div className="lp-contact__inner">
          <div>
            <p className="lp-doctor__eyebrow">Get in Touch</p>
            <h2 className="lp-contact__heading">
              Ready to Visit Us from {loc.name}?
            </h2>
            <p className="lp-contact__text">
              Our Jesmond, Newcastle clinic is welcoming new clients from {loc.name} and
              the surrounding area. Reach us by phone, WhatsApp, or our online booking system —
              whichever is easiest for you.
            </p>
            <div className="lp-contact__links">
              <a href="tel:03334442013" className="lp-contact__link">
                <PhoneIcon />
                Call: 0333 444 2013
              </a>
              <a
                href="https://wa.me/447920699154"
                target="_blank"
                rel="noopener noreferrer"
                className="lp-contact__link"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
              <EmailLink user="kensleyclinic" domain="gmail.com" className="lp-contact__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                kensleyclinic&#8203;@gmail.com
              </EmailLink>
            </div>
            <button
              className="lp-cta-btn lp-cta-btn--primary"
              onClick={openDrawer}
              style={{ marginTop: '2rem' }}
            >
              <CalendarIcon />
              Book an Appointment
            </button>
            <div className="lp-bottom-cta">
              <p>
                "Every client who walks through our door — whether from {loc.name} or across the world — receives the same standard of care, the same time, and the same dedication to their natural beauty."
              </p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', opacity: 0.5, fontStyle: 'normal', fontFamily: 'var(--font-sans)' }}>
                — Dr. Tiru Matla, Founder, Kensley Aesthetics
              </p>
            </div>
          </div>

          {/* Reuse the existing QuickContact form */}
          <div>
            <QuickContact />
          </div>
        </div>
      </section>
    </>
  );
}
