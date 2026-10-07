import { Link } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import { LOCATIONS } from '../data/locations';
import './Locations.css';

const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Kensley Aesthetics',
  url: 'https://kensleyaesthetics.com',
  description:
    'Doctor-led aesthetic clinic in Jesmond, Newcastle upon Tyne. Led by Dr. Tiru Matla — 20+ years of clinical experience.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Old Brewery Court, 156 Sandyford Rd',
    addressLocality: 'Jesmond, Newcastle upon Tyne',
    addressRegion: 'Tyne and Wear',
    postalCode: 'NE2 1XG',
    addressCountry: 'GB',
  },
  telephone: '3330570295',
  areaServed: [
    { '@type': 'City', name: 'Newcastle upon Tyne' },
    { '@type': 'Place', name: 'Jesmond' },
  ],
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
        title="Aesthetic Clinic Location | Kensley Aesthetics — Jesmond, Newcastle"
        description="Visit Kensley Aesthetics in Jesmond, Newcastle upon Tyne. Doctor-led aesthetic treatments by Dr. Tiru Matla."
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
          Visit Our Clinic{' '}<br />in Jesmond, Newcastle
        </h1>
        <p className="locs-hero__subtitle">
          Our doctor-led aesthetic clinic is located in the heart of Jesmond, Newcastle upon Tyne. Book a consultation with Dr. Tiru Matla today.
        </p>
      </section>

      {/* Location card */}
      <main className="locs-body">
        <div className="locs-body__inner">
          <section className="locs-region" aria-labelledby="region-newcastle">
            <p className="locs-region__label">Our Clinic</p>
            <h2 className="locs-region__heading" id="region-newcastle">
              Jesmond, Newcastle upon Tyne
            </h2>
            <div className="locs-region__grid">
              {LOCATIONS.map(loc => (
                <Link
                  key={loc.slug}
                  to={`/locations/${loc.slug}`}
                  className="locs-card"
                  aria-label={`Aesthetic treatments in ${loc.name}`}
                >
                  <span className="locs-card__name">{loc.name}</span>
                  <span className="locs-card__county">{loc.county}</span>
                  <span className="locs-card__arrow" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Bottom CTA */}
      <section className="locs-cta" aria-label="Book a consultation">
        <h2 className="locs-cta__heading">
          Ready to Visit Us?
        </h2>
        <p className="locs-cta__sub">
          Our Jesmond clinic is located at Old Brewery Court, 156 Sandyford Rd, Newcastle upon Tyne, NE2 1XG.
          Book online, call, or message us on WhatsApp — Dr. Matla will be in touch.
        </p>
        <div className="locs-cta__btns">
          <button className="locs-cta-btn locs-cta-btn--gold" onClick={openDrawer}>
            Schedule Your Consultation
          </button>
          <a className="locs-cta-btn locs-cta-btn--ghost" href="tel:3330570295">
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
