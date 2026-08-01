import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import imgSmall from '../../data/images/seven.png';
import './ExpertSection.css';

function ExpertSection() {
  const ref = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const smoothX = useSpring(rawX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 18 });

  // Small image — counter-parallax
  const smallX = useTransform(smoothX, v => v * -20);
  const smallY = useTransform(smoothY, v => v * -16);

  // Heading — barely-there drift
  const headX = useTransform(smoothX, v => v * 10);
  const headY = useTransform(smoothY, v => v * 8);

  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width  - 0.5);
    rawY.set((e.clientY - r.top)  / r.height - 0.5);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      ref={ref}
      className="ep-root"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >

      {/* ── Top bar: eyebrow label ── */}
      <div className="ep-topbar">
        <span className="ep-eyebrow">Founded by Dr. Tiru Matla</span>
      </div>

      {/* ── Large heading — drifts with cursor ── */}
      <motion.div className="ep-heading-wrap" style={{ x: headX, y: headY }}>
        <h2 className="ep-heading">
          20 years<br />
          of clinical<br />
          excellence
        </h2>
      </motion.div>

      {/* ── Bottom-right: body text ── */}
      <div className="ep-body-wrap">
        <p className="ep-body">
          Kensley Aesthetics was founded by Dr. Tiru Matla — a medical doctor
          with over 20 years of clinical experience and more than a decade
          specialising in aesthetic medicine. Dr. Matla personally oversees
          clinical standards at Kensley Aesthetics, ensuring every treatment
          meets the highest level of care.
        </p>
      </div>

    </section>
  );
}

export default ExpertSection;
