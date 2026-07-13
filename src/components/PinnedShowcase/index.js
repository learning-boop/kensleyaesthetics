import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useAppointment } from '../../context/AppointmentContext';
import './PinnedShowcase.css';

const easeOut = [0.22, 1, 0.36, 1];

export default function PinnedShowcase({ items, treatmentSlug }) {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const n = items.length;
  const { openDrawer } = useAppointment();

  const { scrollYProgress } = useScroll({ target: wrapperRef });
  const stepProgress = useTransform(scrollYProgress, (v) => (v * n) % 1);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActiveIndex(Math.min(Math.floor(v * n), n - 1));
  });

  const t = items[activeIndex];
  const cur = String(activeIndex + 1).padStart(2, '0');
  const total = String(n).padStart(2, '0');

  return (
    <div ref={wrapperRef} className="ps-wrapper" style={{ height: `${n * 100}vh` }}>
      <div className="ps-sticky">

        {/* ── LEFT: content panel ── */}
        <div className="ps-left">

          {/* counter */}
          <div className="ps-counter">
            <span className="ps-counter__cur">{cur}</span>
            <span className="ps-counter__sep" />
            <span className="ps-counter__total">{total}</span>
          </div>

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

          <span className="ps-divider" />

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

          {/* CTA */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`cta-${activeIndex}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.35, ease: easeOut, delay: 0.14 }}
            >
              <button className="ps-cta" onClick={openDrawer}>
                Book Consultation
                <span className="ps-cta__arrow">→</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── RIGHT: treatment index panel (no image) ── */}
        <div className="ps-right">

          {/* large watermark number */}
          <AnimatePresence mode="wait">
            <motion.span
              key={`wm-${activeIndex}`}
              className="ps-watermark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              {cur}
            </motion.span>
          </AnimatePresence>

          {/* index list of all sub-treatments */}
          <ul className="ps-index">
            {items.map((item, i) => (
              <li
                key={i}
                className={`ps-index__item ${i === activeIndex ? 'ps-index__item--active' : ''}`}
              >
                <span className="ps-index__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="ps-index__name">{item.name}</span>
                {i === activeIndex && (
                  <motion.span
                    className="ps-index__bar"
                    layoutId="ps-active-bar"
                    transition={{ duration: 0.4, ease: easeOut }}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* step progress bar */}
          <div className="ps-progress-track">
            <motion.div
              className="ps-progress-fill"
              style={{ scaleX: stepProgress, transformOrigin: 'left' }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
