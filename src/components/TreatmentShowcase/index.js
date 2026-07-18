import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { client, MAIN_TREATMENTS_QUERY } from '../../lib/sanityClient';
import { useAppointment } from '../../context/AppointmentContext';
import './showcase.css';

const VARIANTS = ['v1', 'v2', 'v3', 'v4'];

// ─── Desktop: Brand + Book ─────────────────────────────────────────
function BrandBlock() {
  return (
    <Link to="/" className="ts-brand">
      <span className="ts-brand__eyebrow">Kensley Aesthetics</span>
      <span className="ts-brand__name">Kensley Aesthetics</span>
    </Link>
  );
}

function AppointmentButton() {
  const { openDrawer } = useAppointment();
  return (
    <button onClick={openDrawer} className="ts-appt-btn">
      Book an Appointment
      <span className="ts-appt-btn__arrow">→</span>
    </button>
  );
}

// ─── Progress dots ─────────────────────────────────────────────────
function ProgressDots({ activeIndex, onDotClick, count }) {
  return (
    <div className="ts-progress">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to treatment ${i + 1}`}
          className={`ts-prog-dot ${
            i === activeIndex ? 'ts-prog-dot--active' : 'ts-prog-dot--inactive'
          }`}
        />
      ))}
    </div>
  );
}

// ─── Image ─────────────────────────────────────────────────────────
function TreatmentImage({ treatment }) {
  return (
    <div className="ts-img-inner">
      <img
        src={treatment.image}
        alt={treatment.title}
        className="ts-treatment-img"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
    </div>
  );
}


function DesktopContent({ treatment }) {
  const words = treatment.title.split(' ');

  return (
    <div className="ts-desktop-content-inner">
      <div className="ts-title-wrap">
        {words.map((word, i) => (
          <span key={word + i} className="ts-title-word-row">
            <span style={{ display: 'block' }}>{word}</span>
          </span>
        ))}
      </div>

      <span className="ts-divider" />

      <p className="ts-description">{treatment.description}</p>

      <Link to={`/main-treatments/${treatment.slug}`} className="ts-explore-link">
        <span className="ts-explore-link__text">Explore Treatment</span>
        <span className="ts-explore-link__arrow">→</span>
      </Link>
    </div>
  );
}

// ─── Mobile swipe hint ─────────────────────────────────────────────
function SwipeHint({ visible }) {
  return (
    <div className={`ts-swipe-hint ${visible ? 'ts-swipe-hint--visible' : ''}`}>
      <div className="ts-swipe-hint__track">
        <span className="ts-swipe-hint__dot" />
      </div>
      <span className="ts-swipe-hint__label">swipe</span>
    </div>
  );
}

// ─── Mobile static content ─────────────────────────────────────────
function MobileContent({ treatment }) {
  return (
    <div className="ts-mobile-content">
      <h3 className="ts-mobile-title">{treatment.title}</h3>
      <span className="ts-divider" />
      <p className="ts-description">{treatment.description}</p>

      {/* {treatment.bullets.length > 0 && (
        <ul className="ts-bullets">
          {treatment.bullets.map((b) => (
            <li key={b} className="ts-bullet">
              <span className="ts-bullet__dot" />
              <span className="ts-bullet__text">{b}</span>
            </li>
          ))}
        </ul>
      )} */}

      <Link to={`/main-treatments/${treatment.slug}`} className="ts-explore-link">
        <span className="ts-explore-link__text">Explore Treatment</span>
        <span className="ts-explore-link__arrow">→</span>
      </Link>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────
function TreatmentShowcase() {
  const [treatments, setTreatments] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSwipeHint, setShowSwipeHint] = useState(false);

  const sectionRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  const targetLeftRef = useRef(0);
  const currentLeftRef = useRef(0);
  const rafRef = useRef(null);

  // Mobile auto-slide refs
  const autoSlideRef = useRef(null);
  const isProgrammaticRef = useRef(false);
  const userPausedRef = useRef(false);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    client.fetch(MAIN_TREATMENTS_QUERY).then((data) => {
      setTreatments(
        data.slice(0, 8).map((t, i) => ({
          id: i + 1,
          title: t.label,
          slug: t.slug,
          description: t.description || t.tagline || '',
          bullets: t.benefits || [],
          image: t.image || '',
          variant: VARIANTS[i % VARIANTS.length],
        }))
      );
    });
  }, []);

  // Mobile swipe hint — show when section enters view, hide on first swipe or after 2.5s
  useEffect(() => {
    if (window.innerWidth > 860) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSwipeHint(true);
          const timer = setTimeout(() => setShowSwipeHint(false), 2500);
          observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Desktop RAF smooth horizontal scroll
  useEffect(() => {
    const WEIGHT = 0.07;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      const track = desktopScrollRef.current;

      if (track && window.innerWidth > 860) {
        const diff = targetLeftRef.current - currentLeftRef.current;

        if (Math.abs(diff) > 0.25) {
          currentLeftRef.current = lerp(
            currentLeftRef.current,
            targetLeftRef.current,
            WEIGHT
          );
        } else {
          currentLeftRef.current = targetLeftRef.current;
        }

        track.scrollLeft = currentLeftRef.current;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Desktop vertical scroll → horizontal movement
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth <= 860) return;

      const wrapper = sectionRef.current;
      const track = desktopScrollRef.current;

      if (!wrapper || !track || treatments.length === 0) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;

      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      targetLeftRef.current = progress * (track.scrollWidth - track.clientWidth);

      // Fixed: use currentLeftRef for better animation sync
      const idx = Math.round(currentLeftRef.current / track.clientWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), treatments.length - 1));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [treatments.length]);

  // Mobile swipe tracking
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const handler = () => {
      if (treatments.length === 0) return;
      setShowSwipeHint(false);

      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), treatments.length - 1));

      // Pause auto-slide on manual swipe, resume after 5s
      if (!isProgrammaticRef.current) {
        userPausedRef.current = true;
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
          userPausedRef.current = false;
        }, 5000);
      }
    };

    el.addEventListener('scroll', handler, { passive: true });

    return () => el.removeEventListener('scroll', handler);
  }, [treatments.length]);

  const scrollToDesktopPanel = useCallback(
    (index) => {
      const wrapper = sectionRef.current;
      const track = desktopScrollRef.current;

      if (!wrapper || !track || treatments.length === 0) return;

      targetLeftRef.current = index * track.clientWidth;

      const scrollable = wrapper.offsetHeight - window.innerHeight;

      const progress =
        treatments.length > 1 ? index / (treatments.length - 1) : 0;

      window.scrollTo({
        top: wrapper.offsetTop + progress * scrollable,
        behavior: 'smooth',
      });
    },
    [treatments.length]
  );

  const scrollToMobilePanel = useCallback((index) => {
    const el = mobileScrollRef.current;
    if (!el) return;

    el.scrollTo({
      left: index * el.clientWidth,
      behavior: 'smooth',
    });
  }, []);

  // Mobile auto-slide (mobile only)
  useEffect(() => {
    if (window.innerWidth > 860 || treatments.length === 0) return;

    autoSlideRef.current = setInterval(() => {
      if (userPausedRef.current) return;

      setActiveIndex((prev) => {
        const next = (prev + 1) % treatments.length;
        isProgrammaticRef.current = true;
        scrollToMobilePanel(next);
        setTimeout(() => { isProgrammaticRef.current = false; }, 700);
        return next;
      });
    }, 3500);

    return () => {
      clearInterval(autoSlideRef.current);
      clearTimeout(resumeTimerRef.current);
    };
  }, [treatments.length, scrollToMobilePanel]);

  return (
    <section
      ref={sectionRef}
      className="ts-root"
      style={{
        '--showcase-height':
          treatments.length > 0 ? `${treatments.length * 80}vh` : '80vh',
      }}
    >
      {/* DESKTOP */}
      <div className="ts-desktop">
        <div className="ts-header">
          <BrandBlock />
          <AppointmentButton />
        </div>

        <div ref={desktopScrollRef} className="ts-scroll-track">
          {treatments.map((t, i) => (
            <div key={t.id} className={`ts-panel ts-panel--${t.variant}`}>
              <div className="ts-panel-content">
                <DesktopContent treatment={t} />
              </div>

              <div className="ts-panel-image">
                <TreatmentImage treatment={t} />
              </div>
            </div>
          ))}
        </div>

        <div className="ts-desktop-dots">
          <ProgressDots
            activeIndex={activeIndex}
            onDotClick={scrollToDesktopPanel}
            count={treatments.length}
          />
        </div>
      </div>

      {/* MOBILE */}
      <div className="ts-mobile-layout">
        <div className="ts-mobile-timer-bar">
          <div key={activeIndex} className="ts-mobile-timer-fill" />
        </div>

        <div ref={mobileScrollRef} className="ts-mobile-scroll-track">
          {treatments.map((t) => (
            <div key={t.id} className="ts-mobile-panel">
              <div className="ts-mobile-panel-image">
                <div className="ts-img-inner">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="ts-treatment-img"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              <div className="ts-mobile-panel-content">
                <MobileContent treatment={t} />
              </div>
            </div>
          ))}
        </div>

        <SwipeHint visible={showSwipeHint} />

        <div className="ts-mobile-dots">
          <ProgressDots
            activeIndex={activeIndex}
            onDotClick={scrollToMobilePanel}
            count={treatments.length}
          />
          <AppointmentButton />
        </div>
      </div>
    </section>
  );
}

export default TreatmentShowcase;


