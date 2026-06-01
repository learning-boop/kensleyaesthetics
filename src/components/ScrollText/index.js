import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ScrollText.css';

const WORDS = ['Medical', 'Precision'];

function ScrollText() {
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);

  // Parallax — image drifts upward as section scrolls out
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgParallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imgWrapRef.current;
    if (!section || !imgWrap) return;

    const words = section.querySelectorAll('.scroll-text__word');
    const n = words.length;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      // progress: 0 = sticky just locked, 1 = sticky about to unlock
      const scrollable = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

      // ── Text reveal: each word sweeps in sequentially ──
      words.forEach((word, i) => {
        // spread reveals evenly across the first 60% of scroll
        const start = (i / n) * 0.6;
        const end   = start + 0.38;
        const p     = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        word.style.opacity   = p;
        word.style.transform = `translateY(${(1 - p) * 28}px)`;
      });

      // ── Image reveal: begins at 40% scroll progress ──
      // 0.4 → 0.72 maps to opacity 0 → 1, with a slight upward drift on entry
      const imgP = Math.max(0, Math.min(1, (progress - 0.4) / 0.32));
      imgWrap.style.opacity   = imgP;
      imgWrap.style.transform = `translateY(${(1 - imgP) * 22}px)`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount for correct initial state
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="scroll-text" ref={sectionRef}>
      <div className="scroll-text__sticky">

        {/* Layer 1 — giant background text */}
        <div className="scroll-text__bg" aria-hidden="true">
          {WORDS.map((word, i) => (
            <span key={i} className="scroll-text__word">{word}</span>
          ))}
        </div>

        {/* Layer 2 — doctor image, centered, overlaps the text */}
        <div ref={imgWrapRef} className="scroll-text__img-wrap">
          <motion.img
            src="/assets/doctor_renove.png"
            alt="Dr. Sophia Renova"
            className="scroll-text__doctor-img"
            style={{ y: imgParallaxY }}
          />
        </div>

        {/* Layer 3 — small description, bottom-left */}
        <p className="scroll-text__para">
          Precision meets artistry<br />in every treatment<br />we deliver.
        </p>

        {/* Layer 3 — label, top-right */}
        <span className="scroll-text__label">
          Refined<br />Through Years
        </span>

      </div>
    </section>
  );
}

export default ScrollText;