import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, BEFORE_AFTER_QUERY } from '../lib/sanityClient';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SeoHead from '../components/SeoHead';
import './pages.css';

function Gallery() {
  const [items, setItems]         = useState([]);
  const [loading, setLoading]     = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    client.fetch(BEFORE_AFTER_QUERY)
      .then((data) => { setItems(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  // Build category list dynamically from data
  const categories = ['All', ...Array.from(new Set(items.map((i) => i.category))).filter(Boolean)];

  const filtered = activeCategory === 'All'
    ? items
    : items.filter((i) => i.category === activeCategory);

  return (
    <>
      <SeoHead
        title="Before &amp; After Gallery | Real Patient Results"
        description="View real before and after results from Kensley Aesthetics — dermal fillers, lip fillers, Profhilo, RF microneedling, HIFU, jawline filler, tear trough filler and more."
        path="/gallery"
      />
      <PageHero
        label="Before & After"
        title={<>Real Results,<br />Real Clients</>}
        subtitle="Authentic transformations achieved by our team. Every result is unique — just like every client."
      />

      <section className="page-section">
        <div className="container">

          {/* Category filter */}
          <div className="gallery-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`gallery-category-btn ${activeCategory === cat ? 'gallery-category-btn--active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Loading */}
          {loading && (
            <div className="gallery-loading">
              <span className="gallery-loading__text">Loading gallery…</span>
            </div>
          )}

          {/* Empty state */}
          {!loading && filtered.length === 0 && (
            <div className="gallery-empty">
              <p>No results yet for this category.</p>
            </div>
          )}

          {/* Grid */}
          {!loading && filtered.length > 0 && (
            <div className="gallery-grid">
              {filtered.map((item, i) => (
                <div className="gallery-item" key={`${item.rank}-${i}`}>
                  <div className="gallery-item__images">
                    <div className="gallery-item__before">
                      {item.beforeImage ? (
                        <img
                          src={item.beforeImage}
                          alt={`${item.label} — before`}
                          className="gallery-item__img"
                        />
                      ) : (
                        <div className="page-image-placeholder">Before</div>
                      )}
                      <span className="gallery-item__badge">Before</span>
                    </div>
                    <div className="gallery-item__after">
                      {item.afterImage ? (
                        <img
                          src={item.afterImage}
                          alt={`${item.label} — after`}
                          className="gallery-item__img"
                        />
                      ) : (
                        <div className="page-image-placeholder">After</div>
                      )}
                      <span className="gallery-item__badge">After</span>
                    </div>
                  </div>
                  <div className="gallery-item__info">
                    <span className="gallery-item__label">{item.label}</span>
                    {item.treatmentSlug && (
                      <Link
                        to={`/main-treatments/${item.treatmentSlug}`}
                        className="gallery-item__treatment"
                      >
                        {item.treatmentLabel || item.category} &rarr;
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container page-centered">
          <p className="section-label">Your Turn</p>
          <h2 className="section-title">Start Your Transformation</h2>
          <p className="page-body-text" style={{ maxWidth: 480, margin: '24px auto 40px' }}>
            Book a consultation and let our experts design a personalised plan for your best results.
          </p>
          <Link to="/book" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default Gallery;
