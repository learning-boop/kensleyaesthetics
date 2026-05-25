import { useParams, Link, Navigate } from 'react-router-dom';
import TREATMENTS from '../data/treatments';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import './pages.css';

function TreatmentDetail() {
  const { slug } = useParams();
  const treatment = TREATMENTS.find((t) => t.slug === slug);

  if (!treatment) return <Navigate to="/services" replace />;

  const currentIndex = TREATMENTS.indexOf(treatment);
  const prev = TREATMENTS[currentIndex - 1] || null;
  const next = TREATMENTS[currentIndex + 1] || null;

  return (
    <>
      <PageHero
        label={`Treatment ${treatment.num}`}
        title={treatment.label}
        subtitle={treatment.tagline}
      />

      <section className="page-section">
        <div className="container">
          <div className="page-two-col">
            <div className="page-two-col__text">
              <p className="section-label">About This Treatment</p>
              <h2 className="section-title" style={{ marginBottom: 32 }}>What It Does</h2>
              <p className="page-body-text">{treatment.description}</p>
              <p className="page-body-text" style={{ marginTop: 24 }}>{treatment.ideal}</p>
            </div>
            <div className="page-two-col__image">
              <div className="page-image-placeholder page-image-placeholder--tall">Treatment Image</div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container">
          <p className="section-label">What to Expect</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Key Benefits</h2>
          <div className="treatment-benefits">
            {treatment.benefits.map((b, i) => (
              <div className="treatment-benefit" key={i}>
                <span className="treatment-benefit__icon">✦</span>
                <span className="treatment-benefit__text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-centered">
          <p className="section-label">Ready to Transform?</p>
          <h2 className="section-title">Book Your {treatment.label} Treatment</h2>
          <p className="page-body-text" style={{ maxWidth: 480, margin: '24px auto 40px' }}>
            Schedule a consultation with our team to discuss your goals and create a personalised plan.
          </p>
          <Link to="/contact" className="btn-primary">Book an Appointment</Link>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container">
          <p className="section-label">Explore More</p>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Other Treatments</h2>
          <div className="treatment-nav">
            {prev && (
              <Link to={`/treatments/${prev.slug}`} className="treatment-nav__card treatment-nav__card--prev">
                <span className="treatment-nav__direction">&larr; Previous</span>
                <span className="treatment-nav__num">{prev.num}</span>
                <span className="treatment-nav__name">{prev.label}</span>
              </Link>
            )}
            {next && (
              <Link to={`/treatments/${next.slug}`} className="treatment-nav__card treatment-nav__card--next">
                <span className="treatment-nav__direction">Next &rarr;</span>
                <span className="treatment-nav__num">{next.num}</span>
                <span className="treatment-nav__name">{next.label}</span>
              </Link>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services" className="btn-outline">View All Treatments</Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default TreatmentDetail;
