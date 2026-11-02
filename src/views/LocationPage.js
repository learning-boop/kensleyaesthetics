import { useParams, Link, Navigate } from 'react-router-dom';
import Image from 'next/image';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import { LOCATIONS_BY_SLUG } from '../data/locations';
import './LocationPage.css';

/* ── Clinic details (shared by every location page) ───────────── */
const CLINIC = {
  addressLines: ['Old Brewery Court', '156 Sandyford Rd', 'Jesmond, Newcastle upon Tyne', 'NE2 1XG'],
  phoneDisplay: '0333 057 0295',
  phoneHref: 'tel:+443330570295',
  email: 'kensleyclinic@gmail.com',
  mapUrl: 'https://maps.google.com/?q=Old+Brewery+Court,+156+Sandyford+Rd,+Jesmond,+Newcastle+upon+Tyne,+NE2+1XG',
};

/* ── Treatments listed on the page (not a sequence, so no numbering) ── */
const TREATMENTS = [
  { slug: 'anti-wrinkle-treatments', name: 'Wrinkle consultations', note: 'Personalised advice for lines and wrinkles' },
  { slug: 'dermal-fillers',          name: 'Dermal fillers',        note: 'Subtle volume and definition' },
  { slug: 'skin-boosters',           name: 'Skin boosters',         note: 'Hydration and overall skin quality' },
  { slug: 'profhilo',                name: 'Profhilo',              note: 'Hydration and firmness for face and neck' },
  { slug: 'polynucleotides',         name: 'Polynucleotides',       note: 'Skin quality, including the under-eye area' },
  { slug: 'microneedling',           name: 'Microneedling',         note: 'Texture, scarring and fine lines' },
  { slug: 'rf-microneedling',        name: 'RF microneedling',      note: 'Texture and mild skin laxity' },
  { slug: 'hifu',                    name: 'HIFU',                  note: 'Ultrasound treatment for mild laxity' },
];

export default function LocationPage() {
  const { slug } = useParams();
  const { openDrawer } = useAppointment();
  const loc = LOCATIONS_BY_SLUG[slug];

  /* 404 redirect for unknown slugs */
  if (!loc) return <Navigate to="/locations" replace />;

  const pageTitle   = `Aesthetic Treatments in ${loc.name} | Kensley Aesthetics`;
  const description = `Doctor-led aesthetic treatments for clients across ${loc.name}, at our clinic on Sandyford Road, Jesmond. Book a consultation with Kensley Aesthetics.`;
  const path        = `/locations/${loc.slug}`;

  const localBusinessLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'Kensley Aesthetics',
    url: 'https://kensleyaesthetics.com',
    description: `Doctor-led aesthetic clinic in Jesmond, Newcastle, serving clients from ${loc.name} and across ${loc.region}.`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Old Brewery Court, 156 Sandyford Rd',
      addressLocality: 'Jesmond, Newcastle upon Tyne',
      addressRegion: 'Tyne and Wear',
      postalCode: 'NE2 1XG',
      addressCountry: 'GB',
    },
    telephone: '+44 333 057 0295',
    areaServed: {
      '@type': 'City',
      name: loc.name,
    },
    founder: { '@id': 'https://kensleyaesthetics.com/#dr-tiru-matla' },
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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="lp-hero">
        <div className="lp-hero__text">
          <nav className="lp-crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/locations">Locations</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{loc.name}</span>
          </nav>

          <h1 className="lp-hero__title">{loc.heroHeadline}</h1>
          <p className="lp-hero__lead">{loc.intro}</p>

          <div className="lp-actions">
            <button type="button" className="lp-btn lp-btn--gold" onClick={openDrawer}>
              Book a consultation
            </button>
            <a className="lp-btn lp-btn--line-light" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="lp-hero__media">
          <Image
            src="/images/clinic/kensley-aesthetics-waiting-room-branded-wall-jesmond-50kb.jpeg"
            alt="The waiting room at Kensley Aesthetics in Jesmond, with the Kensley logo on the wall"
            className="lp-hero__img"
            width={1200}
            height={800}
            loading="eager"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* ── Close to home ────────────────────────────────────── */}
      <section className="lp-local" aria-labelledby="lp-local-title">
        <div className="lp-wrap lp-local__grid">
          <div className="lp-local__copy">
            <h2 className="lp-h2" id="lp-local-title">Close to home, wherever you are in Newcastle</h2>
            <p>{loc.body}</p>
            <p>
              Every appointment starts with time to talk. We listen to what you would like to
              change, explain your options honestly and agree a plan together before any
              treatment begins.
            </p>
          </div>

          {loc.nearbyAreas?.length > 0 && (
            <div className="lp-local__areas">
              <h3 className="lp-h3">Clients often visit us from</h3>
              <ul className="lp-areas">
                {loc.nearbyAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ── Finding the clinic ───────────────────────────────── */}
      <section className="lp-find" aria-labelledby="lp-find-title">
        <div className="lp-wrap lp-find__grid">
          <figure className="lp-find__figure">
            <Image
              src="/images/clinic/kensley-aesthetics-building-exterior-entrance-jesmond-50kb.jpeg"
              alt="The red-brick building at Old Brewery Court on Sandyford Road, home of Kensley Aesthetics"
              className="lp-find__img"
              width={1200}
              height={800}
              loading="lazy"
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <figcaption>Old Brewery Court, Sandyford Road</figcaption>
          </figure>

          <div className="lp-find__details">
            <h2 className="lp-h2" id="lp-find-title">Finding the clinic</h2>

            <address className="lp-address">
              Kensley Aesthetics<br />
              {CLINIC.addressLines.map((line, i) => (
                <span key={line}>{line}{i < CLINIC.addressLines.length - 1 && <br />}</span>
              ))}
            </address>

            <p className="lp-find__note">
              Jesmond Metro station is a short walk away, with good bus links nearby.
              If you are driving, please ask about parking when you book.
            </p>

            <ul className="lp-contact">
              <li>
                <a href={CLINIC.mapUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
              </li>
              <li>
                <a href={CLINIC.phoneHref}>{CLINIC.phoneDisplay}</a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Treatments ───────────────────────────────────────── */}
      <section className="lp-treat" aria-labelledby="lp-treat-title">
        <div className="lp-wrap">
          <div className="lp-treat__head">
            <h2 className="lp-h2 lp-h2--light" id="lp-treat-title">Treatments at our Jesmond clinic</h2>
            <p>
              Every treatment begins with a consultation, so we can recommend what suits your
              skin and the result you have in mind.
            </p>
          </div>

          <ul className="lp-treat__list">
            {TREATMENTS.map((t) => (
              <li key={t.slug}>
                <Link to={`/main-treatments/${t.slug}`} className="lp-treat__item">
                  <span className="lp-treat__name">{t.name}</span>
                  <span className="lp-treat__note">{t.note}</span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="lp-treat__more">
            <Link to="/treatments">View all treatments</Link>
            <Link to="/prices">See our prices</Link>
          </p>
        </div>
      </section>

      {/* ── Closing ──────────────────────────────────────────── */}
      <section className="lp-close" aria-labelledby="lp-close-title">
        <div className="lp-wrap lp-close__inner">
          <h2 className="lp-h2" id="lp-close-title">Start with a consultation</h2>
          <p>{loc.cta}</p>
          <div className="lp-actions lp-actions--center">
            <button type="button" className="lp-btn lp-btn--navy" onClick={openDrawer}>
              Book a consultation
            </button>
            <a className="lp-btn lp-btn--line-dark" href={CLINIC.phoneHref}>
              Call {CLINIC.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
