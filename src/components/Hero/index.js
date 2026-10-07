import Image from 'next/image';
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
        <h1 className="hero__title">
          Natural-Looking Results<br />
          by Experienced <em>Medical</em><br />
          <em>Professionals</em>
        </h1>
        <div className="hero__actions">
          <button className="hero__btn hero__btn--primary" onClick={openDrawer}>
            Schedule Your Consultation
          </button>
          <button className="hero__btn hero__btn--ghost" onClick={() => navigate('/about')}>
            About Kensley Aesthetics
          </button>
        </div>
      </div>

      {/* Right — image */}
      <div className="hero__image-wrap">
        <Image
          src="/assets/stay_youthful.png"
          alt="Doctor-led facial aesthetics — Kensley Aesthetics"
          className="hero__image"
          width={700}
          height={900}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}

export default Hero;
