import { Link } from 'react-router-dom';
import './Stats.css';

function Stats() {
  return (
    <section className="si-root">

      {/* ── Left half: image covers its outer 50%, dark bg on inner 50% ── */}
      <div className="si-left">
        <div className="si-left-img">
          <img
            src="/images/treatments/collagen-restore.jpg"
            alt="Treatment"
            className="si-img"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="si-img-placeholder" />
        </div>
        <div className="si-left-bg" />
      </div>

      {/* ── Gap is handled by CSS gap property ── */}

      {/* ── Right half: full image cover ── */}
      <div className="si-right">
        <img
          src="/images/treatments/face-sculpt.jpg"
          alt="Treatment"
          className="si-img"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="si-img-placeholder" />
        {/* Left-edge vignette so the center text stays legible */}
        <div className="si-right-vignette" />
      </div>

      {/* ── Services text — absolutely centered over the full section ── */}
      <div className="si-center">
        <span className="si-eyebrow">What We Offer</span>
        <h2 className="si-title">Our<br />Services</h2>
        <div className="si-divider" />
        <Link to="/services" className="si-link">
          Explore All Services
          <span className="si-link-arrow">→</span>
        </Link>
      </div>

    </section>
  );
}

export default Stats;
