import { useNavigate } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();
  const { openDrawer } = useAppointment();

  return (
    <section className="hero">
      {/* Left — content */}
      <div className="hero__content">
        <span className="hero__eyebrow">Kensley Aesthetics</span>
        <h1 className="hero__title">
          Timeless<br />
          <em>Glow</em>
        </h1>
        <p className="hero__sub">
          Expert non-surgical treatments crafted to restore,
          refine and reveal your most radiant self.
        </p>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={openDrawer}>
            Book Appointment
          </button>
          <button className="hero__btn hero__btn--ghost" onClick={() => navigate('/treatments')}>
            Explore Treatments
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-line">
            <span className="hero__scroll-dot" />
          </div>
          <div className="hero__scroll-tag">
            <span className="hero__scroll-tag-num">9+ Years</span>
            <span className="hero__scroll-tag-text">Trusted Expertise</span>
          </div>
        </div>
      </div>

      {/* Right — image */}
      <div className="hero__image-wrap">
        <img
          src="/assets/stay_youthful.png"
          alt="Stay Youthful — Kensley Aesthetics"
          className="hero__image"
        />
      </div>
    </section>
  );
}

export default Hero;
