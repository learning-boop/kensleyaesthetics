import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
import './Hero.css';

function Hero() {
  const navigate = useNavigate();
  const { openDrawer } = useAppointment();
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 860px)');
    const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsMobile(mql.matches);
    setPrefersReducedMotion(motionMql.matches);

    const onResize = (e) => setIsMobile(e.matches);
    const onMotion = (e) => setPrefersReducedMotion(e.matches);

    mql.addEventListener('change', onResize);
    motionMql.addEventListener('change', onMotion);

    return () => {
      mql.removeEventListener('change', onResize);
      motionMql.removeEventListener('change', onMotion);
    };
  }, []);

  const videoSrc = isMobile
    ? '/video/hero-loop-mobile-kensley-aesthetics.mp4'
    : '/video/hero-loop-desktop-kensley-aesthetics.mp4';
  const posterSrc = isMobile
    ? '/video/posters/hero-loop-mobile-kensley-aesthetics-poster.webp'
    : '/video/posters/hero-loop-desktop-kensley-aesthetics-poster.webp';

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

      {/* Right — video or poster */}
      <div className="hero__image-wrap">
        {prefersReducedMotion ? (
          <img
            src={posterSrc}
            alt="Kensley Aesthetics reception at Jesmond, Newcastle"
            className="hero__poster"
            width={isMobile ? 720 : 1280}
            height={isMobile ? 1280 : 720}
            fetchPriority="high"
          />
        ) : (
          <video
            ref={videoRef}
            key={videoSrc}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
}

export default Hero;
