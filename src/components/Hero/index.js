import { useNavigate } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
import './Hero.css';

const TRUST_POINTS = [
  'Founded by Dr. Tiru Matla',
  'Over 20 years of medical experience',
  'Personalised face-focused treatment plans',
  'Natural-looking results',
  'Comprehensive clinical aftercare',
];

function Hero() {
  const navigate = useNavigate();
  const { openDrawer } = useAppointment();

  return (
    <section className="hero">
      {/* Left — content */}
      <div className="hero__content">
        <span className="hero__eyebrow">The New Face of Dr. Matla's Aesthetic Expertise</span>
        <h1 className="hero__title">
          Doctor-Led Facial<br />
          Aesthetics, <em>Refined</em><br />
          <em>Around You</em>
        </h1>
        <p className="hero__sub">
          Founded by Dr. Tiru Matla, Kensley Aesthetics brings established medical expertise,
          personalised facial treatment planning and natural-looking results together under a
          dedicated new brand.
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={openDrawer}>
            Book a Consultation
          </button>
          <button className="hero__btn hero__btn--ghost" onClick={() => navigate('/about')}>
            Meet Dr. Matla &amp; the Kensley Team
          </button>
        </div>

        {/* Trust points */}
        <ul className="hero__trust">
          {TRUST_POINTS.map((point) => (
            <li key={point} className="hero__trust-item">
              <span className="hero__trust-dot" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-line">
            <span className="hero__scroll-dot" />
          </div>
          <div className="hero__scroll-tag">
            <span className="hero__scroll-tag-num">20+ Years</span>
            <span className="hero__scroll-tag-text">Medical Experience</span>
          </div>
        </div>
      </div>

      {/* Right — image */}
      <div className="hero__image-wrap">
        <img
          src="/assets/stay_youthful.png"
          alt="Doctor-led facial aesthetics — Kensley Aesthetics"
          className="hero__image"
        />
      </div>
    </section>
  );
}

export default Hero;
