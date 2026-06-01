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
    image: '/assets/smooth_lines.png',
    variant: 'v1',
  },
  {
    id: 2, number: '02', title: 'Face Sculpt', slug: 'face-sculpt',
    description: 'Define facial structure with a refined focus on cheekbones, jawline, and balanced contours.',
    bullets: ['Immediate, long-lasting volume', 'Tailored to your bone structure'],
    image: '/assets/face_sculpt.png',
    variant: 'v2',
  },
  {
    id: 3, number: '03', title: 'Skin Glow', slug: 'skin-glow',
    description: 'Restore luminosity, hydration, and a fresh healthy-looking complexion.',
    bullets: ['Deep hydration lasting weeks', 'Suitable for all skin types'],
    image: '/assets/skin_glow.png',
    variant: 'v3',
  },
  {
    id: 4, number: '04', title: 'Collagen Restore', slug: 'collagen-restore',
    description: 'Support skin renewal and improve firmness, texture, and long-lasting radiance.',
    bullets: ['Stimulates natural collagen synthesis', 'Progressive improvement over weeks'],
    image: '/assets/collagen_restore.png',
    variant: 'v4',
  },
  {
    id: 5, number: '05', title: 'Clear Skin', slug: 'clear-skin',
    description: 'Calm visible congestion and create a smoother, clearer, more balanced complexion.',
    bullets: ['Reduces active breakouts', 'Minimises post-acne marks'],
    image: '/assets/clear_skin.png',
    variant: 'v1',
  },
  {
    id: 6, number: '06', title: 'Neck Renewal', slug: 'neck-renewal',
    description: 'Refine the neck and décolletage area with a smoother, lifted, elegant appearance.',
    bullets: ['Smooths horizontal bands', 'Tightens without surgery'],
    image: '/assets/neck_renewal.png',
    variant: 'v2',
  },
  {
    id: 7, number: '07', title: 'Full Face Refresh', slug: 'full-face-refresh',
    description: 'A complete facial rejuvenation approach for balanced, natural-looking freshness.',
    bullets: ['Comprehensive anti-aging protocol', 'Cohesive, harmonious result'],
    image: '/assets/full_face_refresh.png',
    variant: 'v3',
  },
  {
    id: 8, number: '08', title: 'Stay Youthful', slug: 'stay-youthful',
    description: 'Preventative aesthetic care designed to maintain freshness, confidence, and timeless beauty.',
    bullets: ['Prevents lines before they form', 'Personalised ongoing plan'],
    image: '/assets/stay_youthful.png',
    variant: 'v4',
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
function TreatmentImage({ treatment, isActive }) {
  return (
    <div className="ts-img-inner">
      <motion.img
        src={treatment.image}
        alt={treatment.title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center' }}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.06 }}
        transition={{ duration: 1.0, ease: E }}
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
    </div>
  );
}

// ─── Variants — shared across all content elements ────────────────
const fadeUp = {
  hidden: (delay = 0) => ({ opacity: 0, y: 18, transition: { duration: 0.2, ease: E } }),
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease: E, delay } }),
};

const wordReveal = {
  hidden: (delay = 0) => ({ y: '108%', transition: { duration: 0.2, ease: E } }),
  visible: (delay = 0) => ({ y: '0%', transition: { duration: 1.0, ease: E, delay } }),
};

const scaleIn = {
  hidden: { scaleX: 0, transition: { duration: 0.2 } },
  visible: { scaleX: 1, transition: { duration: 0.9, ease: E, delay: 0.18 } },
};

// ─── Content block — word-by-word reveal ──────────────────────────
function TreatmentContent({ treatment, isActive }) {
  const words = treatment.title.split(' ');
  const state = isActive ? 'visible' : 'hidden';

  return (
    <div>
      {/* Number tag */}
      <motion.span
        className="ts-number-tag"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate={state}
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
              custom={0.06 + i * 0.08}
              variants={wordReveal}
              initial="hidden"
              animate={state}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </div>

      {/* Gold divider */}
      <motion.span
        className="ts-divider"
        variants={scaleIn}
        initial="hidden"
        animate={state}
      />

      {/* Description */}
      <motion.p
        className="ts-description"
        custom={0.22}
        variants={fadeUp}
        initial="hidden"
        animate={state}
      >
        {treatment.description}
      </motion.p>

      {/* Bullets */}
      <motion.ul
        className="ts-bullets"
        custom={0.3}
        variants={fadeUp}
        initial="hidden"
        animate={state}
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
        custom={0.38}
        variants={fadeUp}
        initial="hidden"
        animate={state}
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

      // Update activeIndex from intent immediately — no lerp lag on animation trigger
      const targetIdx = Math.round(targetLeftRef.current / track.clientWidth);
      setActiveIndex(Math.min(Math.max(targetIdx, 0), TREATMENTS.length - 1));
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
          {TREATMENTS.map((t, i) => (
            <div key={t.id} className={`ts-panel ts-panel--${t.variant}`}>

              {/* Left — content */}
              <div className="ts-panel-content">
                <TreatmentContent treatment={t} isActive={i === activeIndex} />
              </div>

              {/* Right — image */}
              <div className="ts-panel-image">
                <TreatmentImage treatment={t} isActive={i === activeIndex} />
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
          {TREATMENTS.map((t, i) => (
            <div key={t.id} className="ts-mobile-panel">

              {/* Image top */}
              <div className="ts-mobile-panel-image">
                <TreatmentImage treatment={t} isActive={i === activeIndex} />
              </div>

              {/* Content below */}
              <div className="ts-mobile-panel-content">
                <TreatmentContent treatment={t} isActive={i === activeIndex} />
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
