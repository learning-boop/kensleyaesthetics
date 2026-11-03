import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
import { HERO_PROMO, isPromoLive } from '../../data/heroPromo';
import './Hero.css';

const SLIDE_MS = 7000;

function PromoButton({ cta, className, onBook }) {
  if (!cta) return null;
  if (cta.to) {
    return <Link to={cta.to} className={className}>{cta.label}</Link>;
  }
  return (
    <button type="button" className={className} onClick={onBook}>
      {cta.label}
    </button>
  );
}

/* Slide 2 — seasonal offer. The words are live text over a text-free image. */
function PromoSlide({ promo, onBook }) {
  const img = promo.image;
  return (
    <div className="hero-promo">
      <picture className="hero-promo__media">
        <source
          media="(max-width: 860px)"
          srcSet={`${img.mobile720} 720w, ${img.mobile} 941w`}
          sizes="100vw"
        />
        <img
          src={img.desktop}
          srcSet={`${img.desktop1280} 1280w, ${img.desktop} 1672w`}
          sizes="100vw"
          alt=""
          className="hero-promo__img"
          width={1672}
          height={941}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </picture>
      <div className="hero-promo__shade" aria-hidden="true" />

      <div className="hero-promo__content">
        <p className="hero-promo__eyebrow">{promo.eyebrow}</p>
        <h2 className="hero-promo__title">
          {promo.title} <em>{promo.titleAccent}</em>
        </h2>
        <p className="hero-promo__offer">
          {promo.offer.lead} <strong>{promo.offer.highlight}</strong> {promo.offer.rest}
        </p>
        <p className="hero-promo__text">{promo.text}</p>
        <div className="hero__actions">
          <PromoButton cta={promo.primary} className="hero__btn hero__btn--gold" onBook={onBook} />
          <PromoButton cta={promo.secondary} className="hero__btn hero__btn--light" onBook={onBook} />
        </div>
        <p className="hero-promo__terms">{promo.terms}</p>
      </div>
    </div>
  );
}

function Hero() {
  const navigate = useNavigate();
  const { openDrawer } = useAppointment();
  const videoRef = useRef(null);
  const touchX = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Slider state
  const [showPromo, setShowPromo] = useState(Boolean(HERO_PROMO.enabled));
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false); // pause button
  const [holding, setHolding] = useState(false); // hover / keyboard focus

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

  // Hide the offer slide once its end date has passed
  useEffect(() => {
    if (!isPromoLive(HERO_PROMO)) {
      setShowPromo(false);
      setActive(0);
    }
  }, []);

  // No automatic movement for people who ask for reduced motion
  useEffect(() => {
    if (prefersReducedMotion) setPaused(true);
  }, [prefersReducedMotion]);

  const count = showPromo ? 2 : 1;
  const isSlider = count > 1;

  // Autoplay
  useEffect(() => {
    if (!isSlider || paused || holding) return undefined;
    const id = setTimeout(() => setActive((a) => (a + 1) % count), SLIDE_MS);
    return () => clearTimeout(id);
  }, [active, count, isSlider, paused, holding]);

  // Only play the clinic video while its slide is showing
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active === 0) {
      const p = v.play && v.play();
      if (p && p.catch) p.catch(() => {});
    } else if (v.pause) {
      v.pause();
    }
  }, [active]);

  const go = (i) => setActive(((i % count) + count) % count);

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchX.current === null || !isSlider) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
  };

  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setHolding(false);
  };

  const videoSrc = isMobile
    ? '/video/hero-loop-mobile-kensley-aesthetics.mp4'
    : '/video/hero-loop-desktop-kensley-aesthetics.mp4';
  const posterSrc = isMobile
    ? '/video/posters/hero-loop-mobile-kensley-aesthetics-poster.webp'
    : '/video/posters/hero-loop-desktop-kensley-aesthetics-poster.webp';

  const slideProps = (i, label) =>
    isSlider
      ? {
          role: 'group',
          'aria-roledescription': 'slide',
          'aria-label': `${i + 1} of ${count}: ${label}`,
          inert: active !== i ? true : undefined,
        }
      : {};

  const classes = ['hero', isSlider ? 'hero--slider' : '', active === 1 ? 'hero--dark' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={classes}
      aria-roledescription={isSlider ? 'carousel' : undefined}
      aria-label={isSlider ? 'Highlights' : undefined}
      onMouseEnter={() => setHolding(true)}
      onMouseLeave={() => setHolding(false)}
      onFocus={() => setHolding(true)}
      onBlur={onBlur}
    >
      <div className="hero__track" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {/* Slide 1 — welcome + clinic video */}
        <div
          className={`hero__slide hero__slide--main${active === 0 ? ' is-active' : ''}`}
          {...slideProps(0, 'Welcome')}
        >
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
        </div>

        {/* Slide 2 — seasonal offer */}
        {showPromo && (
          <div
            className={`hero__slide hero__slide--promo${active === 1 ? ' is-active' : ''}`}
            {...slideProps(1, HERO_PROMO.label)}
          >
            <PromoSlide promo={HERO_PROMO} onBook={openDrawer} />
          </div>
        )}
      </div>

      {isSlider && (
        <div className="hero__controls">
          <button
            type="button"
            className="hero__pause"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}
          >
            {paused ? (
              <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 1l7 4-7 4z" /></svg>
            ) : (
              <svg viewBox="0 0 10 10" aria-hidden="true"><path d="M2 1h2v8H2zM6 1h2v8H6z" /></svg>
            )}
          </button>
          <div className="hero__dots">
            {['Welcome', HERO_PROMO.label].map((label, i) => (
              <button
                key={label}
                type="button"
                className={`hero__dot${active === i ? ' is-active' : ''}`}
                aria-label={`Show slide ${i + 1}: ${label}`}
                aria-current={active === i ? 'true' : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
