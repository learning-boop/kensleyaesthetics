import { motion } from 'framer-motion';
import './ScrollText.css';

const WORDS = ['Medical', 'Precision'];

function ScrollText() {
  return (
    <section className="scroll-text">
      <div className="scroll-text__sticky">

        {/* Left — content */}
        <div className="scroll-text__content">
          <span className="scroll-text__label">
            Refined<br />Through Years
          </span>

          <div className="scroll-text__bg" aria-hidden="true">
            {WORDS.map((word, i) => (
              <motion.span
                key={i}
                className="scroll-text__word"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.18, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <p className="scroll-text__para">
            Precision meets artistry<br />in every treatment<br />we deliver.
          </p>
        </div>


</div>
    </section>
  );
}

export default ScrollText;