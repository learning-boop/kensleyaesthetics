import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import imgMain  from '../../data/images/six.webp';   // large center — gloved hand + tweezers
import imgSmall from '../../data/images/seven.png';  // bottom-left  — gold scissors
import './ExpertSection.css';

function ExpertSection() {
  const ref    = useRef(null);

  // Raw mouse offset from section centre (–0.5 → +0.5)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring smoothing — gives the "floating" weighted feel
  const smoothX = useSpring(rawX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(rawY, { stiffness: 60, damping: 18 });

  // Large image — closest layer, moves most
  const mainX = useTransform(smoothX, v => v * 42);
  const mainY = useTransform(smoothY, v => v * 32);

  // Small image — further layer, opposite direction
  const smallX = useTransform(smoothX, v => v * -20);
  const smallY = useTransform(smoothY, v => v * -16);

  // Heading — barely-there drift, same direction as main image
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

      {/* ── Top bar: eyebrow label + arrow buttons ── */}
      <div className="ep-topbar">
        <span className="ep-eyebrow">The Elements of Excellence</span>
        <div className="ep-arrows">
          <button className="ep-arrow" aria-label="Previous">&#8592;</button>
          <button className="ep-arrow" aria-label="Next">&#8594;</button>
        </div>
      </div>

      {/* ── Large heading — drifts with cursor, sits behind center image ── */}
      <motion.div className="ep-heading-wrap" style={{ x: headX, y: headY }}>
        <h2 className="ep-heading">
          The Finest Care<br />
          And Expert Touch
        </h2>
      </motion.div>

      {/* ── Center tall image — primary parallax layer ── */}
      <motion.div className="ep-img-main-wrap" style={{ x: mainX, y: mainY }}>
        <img src={imgMain} alt="Precision aesthetic instrument" className="ep-img-main" />
      </motion.div>

      {/* ── Bottom-left: small secondary image — counter-parallax ── */}
      <motion.div className="ep-img-small-wrap" style={{ x: smallX, y: smallY }}>
        <img src={imgSmall} alt="Premium surgical instruments" className="ep-img-small" />
      </motion.div>

      {/* ── Bottom-right: body text ── */}
      <div className="ep-body-wrap">
        <p className="ep-body">
          Our specialists personally curate the most advanced aesthetic
          protocols available. Every technique is selected for precision,
          safety, and seamless results — care that leaves no trace, only
          a more confident, radiant you.
        </p>
      </div>

    </section>
  );
}

export default ExpertSection;
