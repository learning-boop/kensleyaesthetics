import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../../data/images/one.webp';
import img2 from '../../data/images/two.webp';
import img3 from '../../data/images/three.webp';
import img4 from '../../data/images/four.webp';
import img5 from '../../data/images/five.webp';
import './BeforeAfter.css';

function BeforeAfter() {
  const ref = useRef(null);

  // Track scroll progress through the section (start when bottom enters, end when top leaves)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Each image has a unique parallax speed & direction — creates depth
  const y1 = useTransform(scrollYProgress, [0, 1], [90,  -110]); // top-left  — fast upward
  const y2 = useTransform(scrollYProgress, [0, 1], [40,  -70]);  // top-right — moderate
  const y3 = useTransform(scrollYProgress, [0, 1], [-60, 100]);  // center    — drifts down (opposite)
  const y4 = useTransform(scrollYProgress, [0, 1], [120, -150]); // lower-right — fastest
  const y5 = useTransform(scrollYProgress, [0, 1], [-30, 80]);   // lower-left  — slow downward

  return (
    <section ref={ref} className="ba-root">

      {/* ── Watermark title — images float across it ── */}
      <div className="ba-headline" aria-label="Before and After">
        <span className="ba-hl-word ba-hl-filled">Before</span>
        <span className="ba-hl-word ba-hl-outline">&amp;&nbsp;After</span>
      </div>

      {/* ── Readable label — top center ── */}
      <div className="ba-label-block">
        <span className="ba-eyebrow">Real Results</span>
        <p className="ba-sub">Visible transformations. Every treatment, every client.</p>
      </div>

      {/* ── Desktop: scattered parallax cards ── */}
      <div className="ba-cards">
        <motion.div className="ba-card ba-card--1" style={{ y: y1 }}>
          <img src={img1} alt="Anti-wrinkle treatment before and after – Kensley Aesthetics Newcastle" width="400" height="500" loading="lazy" />
        </motion.div>
        <motion.div className="ba-card ba-card--2" style={{ y: y2 }}>
          <img src={img2} alt="Lip filler before and after – Kensley Aesthetics Newcastle" width="400" height="500" loading="lazy" />
        </motion.div>
        <motion.div className="ba-card ba-card--3" style={{ y: y3 }}>
          <img src={img3} alt="Dermal filler cheek enhancement before and after – Kensley Aesthetics Newcastle" width="400" height="500" loading="lazy" />
        </motion.div>
        <motion.div className="ba-card ba-card--4" style={{ y: y4 }}>
          <img src={img4} alt="Profhilo skin booster before and after – Kensley Aesthetics Newcastle" width="400" height="500" loading="lazy" />
        </motion.div>
        <motion.div className="ba-card ba-card--5" style={{ y: y5 }}>
          <img src={img5} alt="RF microneedling skin rejuvenation before and after – Kensley Aesthetics Newcastle" width="400" height="500" loading="lazy" />
        </motion.div>
      </div>

      {/* ── Mobile: plain carousel — no Framer Motion so no transform conflicts ── */}
      <div className="ba-mobile-track">
        {[
          { img: img1, alt: 'Anti-wrinkle treatment before and after – Kensley Aesthetics Newcastle' },
          { img: img2, alt: 'Lip filler before and after – Kensley Aesthetics Newcastle' },
          { img: img3, alt: 'Dermal filler cheek enhancement before and after – Kensley Aesthetics Newcastle' },
          { img: img4, alt: 'Profhilo skin booster before and after – Kensley Aesthetics Newcastle' },
          { img: img5, alt: 'RF microneedling skin rejuvenation before and after – Kensley Aesthetics Newcastle' },
        ].map(({ img, alt }, i) => (
          <div key={i} className="ba-mobile-card">
            <img src={img} alt={alt} width="400" height="500" loading="lazy" />
          </div>
        ))}
      </div>

      {/* ── Bottom CTA strip ── */}
      <div className="ba-footer">
        <span className="ba-footer-line" />
        <a href="/gallery" className="ba-cta">View Full Gallery &nbsp;→</a>
        <span className="ba-footer-line" />
      </div>

    </section>
  );
}

export default BeforeAfter;
