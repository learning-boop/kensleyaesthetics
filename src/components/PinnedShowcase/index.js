import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { sanityImg } from '../../utils/sanityImage';
import { useAppointment } from '../../context/AppointmentContext';
import './PinnedShowcase.css';

const easeOut = [0.22, 1, 0.36, 1];

const FEATURES = [
  { icon: '✦', label: 'Natural Results' },
  { icon: '◎', label: 'No Downtime' },
  { icon: '⚕', label: 'Doctor Led Care' },
];

export default function PinnedShowcase({ items, treatmentSlug }) {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = items.length;
  const { openDrawer } = useAppointment();

  const scrollToItem = (i) => {
    const el = wrapperRef.current;
    if (!el) return;
    window.scrollTo({ top: el.offsetTop + (i / n) * el.offsetHeight, behavior: 'smooth' });
  };

  const navPrev = () => scrollToItem(Math.max(0, activeIndex - 1));
  const navNext = () => scrollToItem(Math.min(n - 1, activeIndex + 1));

  const { scrollYProgress } = useScroll({ target: wrapperRef });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActiveIndex(Math.min(Math.floor(v * n), n - 1));
  });

  const t = items[activeIndex];
  const cur = String(activeIndex + 1).padStart(2, '0');
  const total = String(n).padStart(2, '0');

  return (
    <>
    <div ref={wrapperRef} className="ps-wrapper" style={{ height: `${n * 100}vh` }}>
      <div className="ps-sticky">

        {/* ── LEFT: content panel ── */}
        <div className="ps-left">

          {/* gold label */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`tagline-${activeIndex}`}
              className="ps-tagline"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              {t.title}
            </motion.span>
          </AnimatePresence>

          {/* main heading */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={`name-${activeIndex}`}
              className="ps-title"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.04 }}
            >
              {t.name}
            </motion.h2>
          </AnimatePresence>

          {/* description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeIndex}`}
              className="ps-desc"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: easeOut, delay: 0.1 }}
            >
              {t.description}
            </motion.p>
          </AnimatePresence>

          {/* Feature badges */}
          <div className="ps-features">
            {FEATURES.map((f) => (
              <div key={f.label} className="ps-feature">
                <span className="ps-feature__icon">{f.icon}</span>
                <span className="ps-feature__label">{f.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="ps-actions">
            <button className="ps-book-btn" onClick={openDrawer}>
              Book a Consultation
              <span className="ps-book-btn__arrow">→</span>
            </button>

            {t.slug && treatmentSlug && (
              <Link
                className="ps-learn-link"
                to={`/main-treatments/${treatmentSlug}/${t.slug}`}
              >
                Learn More
              </Link>
            )}
          </div>
        </div>

        {/* ── RIGHT: floating explore card ── */}
        <div className="ps-card">
          <div className="ps-card__header">
            <span className="ps-card__title">Explore Treatments</span>
            <div className="ps-card__nav">
              <button
                className="ps-card__nav-btn"
                onClick={navPrev}
                disabled={activeIndex === 0}
                aria-label="Previous treatment"
              >
                ←
              </button>
              <button
                className="ps-card__nav-btn"
                onClick={navNext}
                disabled={activeIndex === n - 1}
                aria-label="Next treatment"
              >
                →
              </button>
            </div>
          </div>

          <div className="ps-card__counter">
            <span className="ps-card__cur">{cur}</span>
            <span className="ps-card__sep">/</span>
            <span className="ps-card__total">{total}</span>
          </div>

          <ul className="ps-card__list">
            {items.map((item, i) => (
              <li
                key={i}
                className={`ps-card__item ${i === activeIndex ? 'ps-card__item--active' : ''}`}
                onClick={() => scrollToItem(i)}
              >
                <span className="ps-card__item-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="ps-card__item-name">{item.name}</span>
                {item.image && (
                  <img
                    src={sanityImg(item.image, { width: 80 })}
                    alt={item.name}
                    className="ps-card__item-thumb"
                    width="36"
                    height="36"
                    loading="lazy"
                  />
                )}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </div>

    {/* Crawlable sub-treatment list — hidden visually but fully indexable */}
    {treatmentSlug && items.some(item => item.slug) && (
      <ul style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
        {items.filter(item => item.slug).map((item) => (
          <li key={item.slug}>
            <Link to={`/main-treatments/${treatmentSlug}/${item.slug}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    )}
    </>
  );
}
