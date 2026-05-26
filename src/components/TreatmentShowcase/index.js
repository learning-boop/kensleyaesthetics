import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './showcase.css';

const E = [0.76, 0, 0.24, 1];

// ─── Data ─────────────────────────────────────────────────────────
const TREATMENTS = [
  {
    id: 1, number: '01', title: 'Smooth Lines', slug: 'smooth-lines',
    description: 'Soften expression lines while keeping your natural movement and facial character.',
    bullets: ['Visible results within 3–5 days', 'No downtime required'],
    image: '/images/treatments/smooth-lines.jpg',
  },
  {
    id: 2, number: '02', title: 'Face Sculpt', slug: 'face-sculpt',
    description: 'Define facial structure with a refined focus on cheekbones, jawline, and balanced contours.',
    bullets: ['Immediate, long-lasting volume', 'Tailored to your bone structure'],
    image: '/images/treatments/face-sculpt.jpg',
  },
  {
    id: 3, number: '03', title: 'Skin Glow', slug: 'skin-glow',
    description: 'Restore luminosity, hydration, and a fresh healthy-looking complexion.',
    bullets: ['Deep hydration lasting weeks', 'Suitable for all skin types'],
    image: '/images/treatments/skin-glow.jpg',
  },
  {
    id: 4, number: '04', title: 'Collagen Restore', slug: 'collagen-restore',
    description: 'Support skin renewal and improve firmness, texture, and long-lasting radiance.',
    bullets: ['Stimulates natural collagen synthesis', 'Progressive improvement over weeks'],
    image: '/images/treatments/collagen-restore.jpg',
  },
  {
    id: 5, number: '05', title: 'Clear Skin', slug: 'clear-skin',
    description: 'Calm visible congestion and create a smoother, clearer, more balanced complexion.',
    bullets: ['Reduces active breakouts', 'Minimises post-acne marks'],
    image: '/images/treatments/clear-skin.jpg',
  },
  {
    id: 6, number: '06', title: 'Neck Renewal', slug: 'neck-renewal',
    description: 'Refine the neck and décolletage area with a smoother, lifted, elegant appearance.',
    bullets: ['Smooths horizontal bands', 'Tightens without surgery'],
    image: '/images/treatments/neck-renewal.jpg',
  },
  {
    id: 7, number: '07', title: 'Full Face Refresh', slug: 'full-face-refresh',
    description: 'A complete facial rejuvenation approach for balanced, natural-looking freshness.',
    bullets: ['Comprehensive anti-aging protocol', 'Cohesive, harmonious result'],
    image: '/images/treatments/full-face-refresh.jpg',
  },
  {
    id: 8, number: '08', title: 'Stay Youthful', slug: 'stay-youthful',
    description: 'Preventative aesthetic care designed to maintain freshness, confidence, and timeless beauty.',
    bullets: ['Prevents lines before they form', 'Personalised ongoing plan'],
    image: '/images/treatments/stay-youthful.jpg',
  },
];

// ─── BrandBlock ───────────────────────────────────────────────────
function BrandBlock() {
  return (
    <Link to="/" className="ts-brand">
      <span className="ts-brand__eyebrow">Creative Touch</span>
      <span className="ts-brand__name">Renova</span>
    </Link>
  );
}

// ─── AppointmentButton ────────────────────────────────────────────
function AppointmentButton() {
  return (
    <Link to="/contact" className="ts-appt-btn">
      Book an Appointment
      <span className="ts-appt-btn__arrow">→</span>
    </Link>
  );
}

// ─── Progress dots ────────────────────────────────────────────────
function ProgressDots({ activeIndex, onDotClick }) {
  return (
    <div className="ts-progress">
      {TREATMENTS.map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          aria-label={`Go to treatment ${i + 1}`}
          className={`ts-prog-dot ${i === activeIndex ? 'ts-prog-dot--active' : 'ts-prog-dot--inactive'}`}
        />
      ))}
    </div>
  );
}

// ─── Image block ──────────────────────────────────────────────────
function TreatmentImage({ treatment, scrollRef }) {
  return (
    <div className="ts-img-inner">
      {/* Placeholder always present behind image */}
      <div className="ts-img-placeholder">
        <span className="ts-img-placeholder__num">{treatment.number}</span>
        <span className="ts-img-placeholder__label">{treatment.title}</span>
      </div>
      {/* Real portrait image */}
      <motion.img
        src={treatment.image}
        alt={treatment.title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        initial={{ opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ root: scrollRef, amount: 0.5, once: true }}
        transition={{ duration: 1.4, ease: E }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      <div className="ts-img-blend" />
      <div className="ts-img-vignette" />
    </div>
  );
}

// ─── Content block — word-by-word reveal ──────────────────────────
function TreatmentContent({ treatment, scrollRef }) {
  const words = treatment.title.split(' ');

  return (
    <div>
      {/* Number tag */}
      <motion.span
        className="ts-number-tag"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef, amount: 0.6, once: true }}
        transition={{ duration: 0.7, ease: E, delay: 0.05 }}
      >
        {treatment.number}&ensp;&mdash;&ensp;Treatment
      </motion.span>

      {/* Title — each word slides up from masked row */}
      <div
        className="ts-title-wrap"
        style={{
          fontFamily: "'Cormorant', Georgia, serif",
          fontSize: 'clamp(50px, 7.5vw, 100px)',
          fontWeight: 300,
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: 'var(--sc-text)',
        }}
      >
        {words.map((word, i) => (
          <span key={word + i} className="ts-title-word-row">
            <motion.span
              style={{ display: 'block' }}
              initial={{ y: '108%' }}
              whileInView={{ y: '0%' }}
              viewport={{ root: scrollRef, amount: 0.6, once: true }}
              transition={{ duration: 1.1, ease: E, delay: 0.12 + i * 0.1 }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>

      {/* Gold divider */}
      <motion.span
        className="ts-divider"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ root: scrollRef, amount: 0.6, once: true }}
        transition={{ duration: 1.0, ease: E, delay: 0.3 }}
      />

      {/* Description */}
      <motion.p
        className="ts-description"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef, amount: 0.6, once: true }}
        transition={{ duration: 0.9, ease: E, delay: 0.34 }}
      >
        {treatment.description}
      </motion.p>

      {/* Bullets */}
      <motion.ul
        className="ts-bullets"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef, amount: 0.6, once: true }}
        transition={{ duration: 0.8, ease: E, delay: 0.44 }}
      >
        {treatment.bullets.map((b) => (
          <li key={b} className="ts-bullet">
            <span className="ts-bullet__dot" />
            <span className="ts-bullet__text">{b}</span>
          </li>
        ))}
      </motion.ul>

      {/* Explore link */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ root: scrollRef, amount: 0.6, once: true }}
        transition={{ duration: 0.7, ease: E, delay: 0.54 }}
      >
        <Link to={`/treatments/${treatment.slug}`} className="ts-explore-link">
          <span className="ts-explore-link__text">Explore Treatment</span>
          <motion.span
            className="ts-explore-link__arrow"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
    </div>
  );
}

// ─── Main TreatmentShowcase ───────────────────────────────────────
function TreatmentShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef       = useRef(null);
  const desktopScrollRef = useRef(null);
  const mobileScrollRef  = useRef(null);

  // Lerp state — target set by scroll, current chased by RAF
  const targetLeftRef  = useRef(0);
  const currentLeftRef = useRef(0);
  const rafRef         = useRef(null);

  // RAF lerp loop — runs continuously on desktop, gives the "weight"
  useEffect(() => {
    const WEIGHT = 0.07; // lower = heavier / more lag
    const lerp   = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      const track = desktopScrollRef.current;
      if (track && window.innerWidth > 860) {
        const diff = targetLeftRef.current - currentLeftRef.current;
        if (Math.abs(diff) > 0.25) {
          currentLeftRef.current = lerp(currentLeftRef.current, targetLeftRef.current, WEIGHT);
        } else {
          currentLeftRef.current = targetLeftRef.current;
        }
        track.scrollLeft = currentLeftRef.current;

        const idx = Math.round(currentLeftRef.current / track.clientWidth);
        setActiveIndex((prev) => {
          const next = Math.min(Math.max(idx, 0), TREATMENTS.length - 1);
          return prev === next ? prev : next;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Window vertical scroll → update target only (RAF handles the actual move)
  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth <= 860) return;
      const wrapper = sectionRef.current;
      const track   = desktopScrollRef.current;
      if (!wrapper || !track) return;

      const rect       = wrapper.getBoundingClientRect();
      const scrollable = wrapper.offsetHeight - window.innerHeight;
      const progress   = Math.max(0, Math.min(1, -rect.top / scrollable));
      targetLeftRef.current = progress * (track.scrollWidth - track.clientWidth);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile — track active panel from swipe scroll
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const handler = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), TREATMENTS.length - 1));
    };
    el.addEventListener('scroll', handler, { passive: true });
    return () => el.removeEventListener('scroll', handler);
  }, []);

  // Desktop dot click — jump target & scroll window in sync
  const scrollToDesktopPanel = useCallback((index) => {
    const wrapper = sectionRef.current;
    const track   = desktopScrollRef.current;
    if (!wrapper || !track) return;
    // Snap target so the lerp eases to the panel
    targetLeftRef.current = index * track.clientWidth;
    // Also move the window so the sticky section stays correctly positioned
    const scrollable = wrapper.offsetHeight - window.innerHeight;
    const progress   = index / (TREATMENTS.length - 1);
    window.scrollTo({ top: wrapper.offsetTop + progress * scrollable, behavior: 'smooth' });
  }, []);

  // Mobile dot click — scroll the track directly
  const scrollTo = useCallback((ref, index) => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: 'smooth' });
  }, []);

  return (
    /* Height = N panels × 100 vh so the section occupies enough scroll distance */
    <section ref={sectionRef} className="ts-root" style={{ height: `${TREATMENTS.length * 100}vh` }}>

      {/* ════ DESKTOP ════════════════════════════════════════════ */}
      <div className="ts-desktop">

        {/* Row 1: header */}
        <div className="ts-header">
          <BrandBlock />
          <AppointmentButton />
        </div>

        {/* Row 2: horizontal scroll — one panel per treatment */}
        <div ref={desktopScrollRef} className="ts-scroll-track">
          {TREATMENTS.map((t) => (
            <div key={t.id} className="ts-panel">

              {/* Left — content */}
              <div className="ts-panel-content">
                <TreatmentContent treatment={t} scrollRef={desktopScrollRef} />
              </div>

              {/* Right — image */}
              <div className="ts-panel-image">
                <TreatmentImage treatment={t} scrollRef={desktopScrollRef} />
              </div>

            </div>
          ))}
        </div>

        {/* Row 3: footer — progress + counter + scroll hint */}
        <div className="ts-footer-bar">
          <ProgressDots
            activeIndex={activeIndex}
            onDotClick={scrollToDesktopPanel}
          />

          <span className="ts-scroll-hint">
            <span className="ts-scroll-hint__line" />
            Scroll to explore
          </span>

          <div className="ts-counter">
            <motion.span
              key={activeIndex}
              className="ts-counter__cur"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: E }}
            >
              {String(activeIndex + 1).padStart(2, '0')}
            </motion.span>
            <span className="ts-counter__sep" />
            <span className="ts-counter__tot">
              {String(TREATMENTS.length).padStart(2, '0')}
            </span>
          </div>
        </div>

      </div>

      {/* ════ MOBILE ═════════════════════════════════════════════ */}
      <div className="ts-mobile-layout">

        {/* Brand + book */}
        <div className="ts-mobile-header">
          <BrandBlock />
          <AppointmentButton />
        </div>

        {/* Horizontal scroll — same snap behavior */}
        <div ref={mobileScrollRef} className="ts-mobile-scroll-track">
          {TREATMENTS.map((t) => (
            <div key={t.id} className="ts-mobile-panel">

              {/* Image top */}
              <div className="ts-mobile-panel-image">
                <TreatmentImage treatment={t} scrollRef={mobileScrollRef} />
              </div>

              {/* Content below */}
              <div className="ts-mobile-panel-content">
                <TreatmentContent treatment={t} scrollRef={mobileScrollRef} />
              </div>

            </div>
          ))}
        </div>

        {/* Mobile footer */}
        <div className="ts-mobile-footer">
          <ProgressDots
            activeIndex={activeIndex}
            onDotClick={(i) => scrollTo(mobileScrollRef, i)}
          />
          <div className="ts-counter">
            <span className="ts-counter__cur">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="ts-counter__sep" />
            <span className="ts-counter__tot">{String(TREATMENTS.length).padStart(2, '0')}</span>
          </div>
        </div>

      </div>

    </section>
  );
}

export default TreatmentShowcase;
