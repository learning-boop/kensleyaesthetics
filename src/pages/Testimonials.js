import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SeoHead from '../components/SeoHead';
import './pages.css';

const testimonials = [
  {
    name: 'Isabella M.',
    location: 'Newcastle',
    treatment: 'Face Sculpt',
    rating: 5,
    quote: 'I was nervous about fillers, but the team made me feel completely at ease. The result is so natural — I look like the best version of myself, not like someone who\'s had work done.',
  },
  {
    name: 'Charlotte R.',
    location: 'Newcastle',
    treatment: 'Smooth Lines',
    rating: 5,
    quote: 'I\'ve tried other clinics before but nothing compares to the care and expertise here. My forehead lines have softened beautifully and I still look like me.',
  },
  {
    name: 'Amelia K.',
    location: 'Newcastle',
    treatment: 'Skin Glow',
    rating: 5,
    quote: 'Three days after my Skin Glow treatment, people started asking what I\'d changed. My skin has never looked this luminous. I\'m completely converted.',
  },
  {
    name: 'Sophie T.',
    location: 'Newcastle',
    treatment: 'Collagen Restore',
    rating: 5,
    quote: 'Six weeks in and the difference is remarkable. My skin feels firmer and looks so much healthier. I wish I\'d started this sooner.',
  },
  {
    name: 'Natasha B.',
    location: 'Newcastle',
    treatment: 'Full Face Refresh',
    rating: 5,
    quote: 'The Full Face Refresh was exactly what I needed. The team created a cohesive plan that addressed everything I was concerned about. The results exceeded my expectations.',
  },
  {
    name: 'Emma L.',
    location: 'Newcastle',
    treatment: 'Clear Skin',
    rating: 5,
    quote: 'After years of struggling with my skin, I finally feel confident without makeup. The Clear Skin protocol genuinely changed my life. Thank you.',
  },
];

function StarRating({ count }) {
  return (
    <div className="testimonial-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="testimonial-star">&#9733;</span>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <>
      <SeoHead
        title="Client Testimonials | Real Stories from Kensley Aesthetics"
        description="Read real client stories and reviews from Kensley Aesthetics. Discover what our patients say about their dermal filler, anti-wrinkle, Profhilo and skin rejuvenation results."
        path="/testimonials"
      />
      <PageHero
        label="Client Stories"
        title={<>Words from<br />Our Clients</>}
        subtitle="Real experiences from real people. Every transformation is a story we're proud to tell."
      />

      <section className="page-section">
        <div className="container">
          <div className="testimonials-page-grid">
            {testimonials.map((t) => (
              <div className="testimonial-page-card" key={t.name}>
                <StarRating count={t.rating} />
                <p className="testimonial-page-card__quote">"{t.quote}"</p>
                <div className="testimonial-page-card__footer">
                  <span className="testimonial-page-card__name">{t.name}</span>
                  <span className="testimonial-page-card__meta">{t.location} &middot; {t.treatment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container page-centered">
          <p className="section-label">Join Our Clients</p>
          <h2 className="section-title">Begin Your Story</h2>
          <p className="page-body-text" style={{ maxWidth: 480, margin: '24px auto 40px' }}>
            Book a consultation and take the first step towards your best skin.
          </p>
          <Link to="/book" className="btn-primary">Book an Appointment</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default Testimonials;
