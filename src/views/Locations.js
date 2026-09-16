import { Link } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import { LOCATIONS } from '../data/locations';
import './Locations.css';

/* Group locations by region for the index page */
const REGION_ORDER = [
  'North East England',
  'Yorkshire',
  'North West England',
  'Scotland',
  'East Midlands',
  'West Midlands',
  'London',
  'South West England',
];

function groupByRegion(locations) {
  const map = {};
  for (const loc of locations) {
    if (!map[loc.region]) map[loc.region] = [];
    map[loc.region].push(loc);
  }
  // Sort within each region by distanceMiles
  for (const r of Object.keys(map)) {
    map[r].sort((a, b) => a.distanceMiles - b.distanceMiles);
  }
  return map;
}

const grouped = groupByRegion(LOCATIONS);

const orderedRegions = [
  ...REGION_ORDER.filter(r => grouped[r]),
  ...Object.keys(grouped).filter(r => !REGION_ORDER.includes(r)),
];

const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Kensley Aesthetics',
  url: 'https://kensleyaesthetics.com',
  description:
    'Doctor-led aesthetic clinic in Jesmond, Newcastle upon Tyne, serving clients from across the UK. Led by Dr. Tiru Matla — 20+ years of clinical experience.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jesmond',
    addressLocality: 'Newcastle upon Tyne',
    addressRegion: 'Tyne and Wear',
    addressCountry: 'GB',
  },
  telephone: '03334442013',
  areaServed: LOCATIONS.map(l => ({
    '@type': 'City',
    name: l.name,
  })),
  founder: {
    '@type': 'Physician',
    name: 'Dr. Tiru Matla',
    jobTitle: 'Founder & Medical Director',
  },
};

export default function Locations() {
  const { openDrawer } = useAppointment();

  return (
    <>
      <SeoHead
        title="Aesthetic Clinic Locations | Kensley Aesthetics — Newcastle"
        description={`Kensley Aesthetics serves clients from ${LOCATIONS.length} UK locations — from Newcastle and the North East to Edinburgh, Leeds, Manchester and London. Doctor-led treatments by Dr. Tiru Matla.`}
        path="/locations"
        jsonLd={LOCAL_BUSINESS_LD}
        breadcrumbs={[
          { name: 'Home',      path: '/' },
          { name: 'Locations', path: '/locations' },
        ]}
      />

      {/* Hero */}
      <section className="locs-hero">
        <p className="locs-hero__eyebrow">Kensley Aesthetics · Jesmond, Newcastle</p>
        <h1 className="locs-hero__title">
          We Serve Clients{' '}<br />Across the UK
        </h1>
        <p className="locs-hero__subtitle">
          Our doctor-led aesthetic clinic in Jesmond, Newcastle welcomes clients from {LOCATIONS.length} locations across England and Scotland. Find your nearest area below and book with Dr. Tiru Matla.
        </p>
      </section>

      {/* Location grid by region */}
      <main className="locs-body">
        <div className="locs-body__inner">
          {orderedRegions.map(region => (
            <section key={region} className="locs-region" aria-labelledby={`region-${region.replace(/\s+/g, '-').toLowerCase()}`}>
              <p className="locs-region__label">Region</p>
              <h2 className="locs-region__heading" id={`region-${region.replace(/\s+/g, '-').toLowerCase()}`}>
                {region}
              </h2>
              <div className="locs-region__grid">
                {grouped[region].map(loc => (
                  <Link
                    key={loc.slug}
                    to={`/locations/${loc.slug}`}
                    className="locs-card"
                    aria-label={`Aesthetic treatments for ${loc.name}`}
                  >
                    <span className="locs-card__name">{loc.name}</span>
                    <span className="locs-card__county">{loc.county}</span>
                    <span className="locs-card__arrow" aria-hidden="true">→</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="locs-cta" aria-label="Book a consultation">
        <h2 className="locs-cta__heading">
          Ready to Visit Us?
        </h2>
        <p className="locs-cta__sub">
          Our Jesmond, Newcastle clinic is open to clients from across the UK.
          Book online, call, or message us on WhatsApp — Dr. Matla will be in touch.
        </p>
        <div className="locs-cta__btns">
          <button className="locs-cta-btn locs-cta-btn--gold" onClick={openDrawer}>
            Book an Appointment
          </button>
          <a className="locs-cta-btn locs-cta-btn--ghost" href="tel:03334442013">
            Call Us
          </a>
          <a
            className="locs-cta-btn locs-cta-btn--ghost"
            href="https://wa.me/447920699154"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
