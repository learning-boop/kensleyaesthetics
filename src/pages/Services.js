import { Link } from 'react-router-dom';
import TREATMENTS from '../data/treatments';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import './pages.css';

function Services() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title={<>Our Treatments<br />&amp; Services</>}
        subtitle="A curated collection of advanced aesthetic treatments, each designed to deliver natural, lasting results."
      />

      <section className="page-section">
        <div className="container">
          <div className="services-page-grid">
            {TREATMENTS.map((t) => (
              <Link to={`/treatments/${t.slug}`} className="services-page-card" key={t.num}>
                <div className="services-page-card__image">
                  <div className="page-image-placeholder">Treatment Image</div>
                </div>
                <div className="services-page-card__body">
                  <span className="services-page-card__num">{t.num}</span>
                  <h3 className="services-page-card__title">{t.label}</h3>
                  <p className="services-page-card__tagline">{t.tagline}</p>
                  <span className="services-page-card__link">Explore Treatment &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container page-centered">
          <p className="section-label">Not Sure Where to Start?</p>
          <h2 className="section-title">Book a Consultation</h2>
          <p className="page-body-text" style={{ maxWidth: 500, margin: '24px auto 40px' }}>
            Our practitioners will assess your skin, discuss your goals, and recommend the ideal treatment plan for you.
          </p>
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default Services;
