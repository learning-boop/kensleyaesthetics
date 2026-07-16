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
        <span className="ep-eyebrow">The Elements of Excellence</span>
      </div>

      {/* ── Large heading — drifts with cursor, sits behind center image ── */}
      <motion.div className="ep-heading-wrap" style={{ x: headX, y: headY }}>
        <h2 className="ep-heading">
          The Finest Care<br />
          And Expert Touch
        </h2>
      </motion.div>

      {/* ── Bottom-left: small secondary image — counter-parallax ── */}
      {/* <motion.div className="ep-img-small-wrap" style={{ x: smallX, y: smallY }}>
        <img src={imgSmall} alt="Premium surgical instruments" className="ep-img-small" />
      </motion.div> */}

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
