import { useRef, useEffect } from 'react';
import './ScrollText.css';

const WORDS = ['Medical', 'Precision'];

function ScrollText() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const words = section.querySelectorAll('.scroll-text__word');
    const n = words.length;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      // 0 = section top at viewport top, 1 = section bottom at viewport bottom
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

      words.forEach((word, i) => {
        const threshold = i / n;
        const p = Math.max(0, Math.min(1, (progress - threshold) / (1 / n)));
        word.style.opacity = p;
        word.style.transform = `translateY(${(1 - p) * 40}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="scroll-text" ref={sectionRef}>
      <div className="scroll-text__sticky">
        <div className="scroll-text__inner">
          {WORDS.map((word, i) => (
            <span key={i} className="scroll-text__word">
              {word}
            </span>
          ))}
        </div>

        <p className="scroll-text__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Precision meets artistry in every treatment we deliver.
        </p>
      </div>
    </section>
  );
}

export default ScrollText;
