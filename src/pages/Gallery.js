import { Link } from 'react-router-dom';
import TREATMENTS from '../data/treatments';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import './pages.css';

const categories = ['All', 'Face Sculpt', 'Smooth Lines', 'Skin Glow', 'Clear Skin'];

const items = [
  { id: 1, category: 'Smooth Lines', label: 'Forehead Lines', treatment: 'Smooth Lines' },
  { id: 2, category: 'Face Sculpt', label: 'Cheek Contouring', treatment: 'Face Sculpt' },
  { id: 3, category: 'Skin Glow', label: 'Full Glow Protocol', treatment: 'Skin Glow' },
  { id: 4, category: 'Clear Skin', label: 'Acne Clearance', treatment: 'Clear Skin' },
  { id: 5, category: 'Face Sculpt', label: 'Jawline Definition', treatment: 'Face Sculpt' },
  { id: 6, category: 'Smooth Lines', label: 'Crow\'s Feet', treatment: 'Smooth Lines' },
  { id: 7, category: 'Skin Glow', label: 'Hydration Boost', treatment: 'Skin Glow' },
  { id: 8, category: 'Face Sculpt', label: 'Lip Enhancement', treatment: 'Face Sculpt' },
];

function Gallery() {
  return (
    <>
      <PageHero
        label="Before & After"
        title={<>Real Results,<br />Real Clients</>}
        subtitle="Authentic transformations achieved by our team. Every result is unique — just like every client."
      />

      <section className="page-section">
        <div className="container">
          <div className="gallery-categories">
            {categories.map((cat) => (
              <button key={cat} className="gallery-category-btn">{cat}</button>
            ))}
          </div>

          <div className="gallery-grid">
            {items.map((item) => (
              <div className="gallery-item" key={item.id}>
                <div className="gallery-item__images">
                  <div className="gallery-item__before">
                    <div className="page-image-placeholder">Before</div>
                    <span className="gallery-item__badge">Before</span>
                  </div>
                  <div className="gallery-item__after">
                    <div className="page-image-placeholder">After</div>
                    <span className="gallery-item__badge">After</span>
                  </div>
                </div>
                <div className="gallery-item__info">
                  <span className="gallery-item__label">{item.label}</span>
                  <Link to={`/treatments/${TREATMENTS.find(t => t.label === item.treatment)?.slug}`} className="gallery-item__treatment">
                    {item.treatment} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container page-centered">
          <p className="section-label">Your Turn</p>
          <h2 className="section-title">Start Your Transformation</h2>
          <p className="page-body-text" style={{ maxWidth: 480, margin: '24px auto 40px' }}>
            Book a consultation and let our experts design a personalised plan for your best results.
          </p>
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default Gallery;
