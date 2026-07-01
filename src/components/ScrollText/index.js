import { motion } from 'framer-motion';
import './ScrollText.css';

const WORDS = ['Medical', 'Precision'];

function ScrollText() {
  return (
    <section className="scroll-text">
      <div className="scroll-text__sticky">

        {/* Layer 1 — giant background text */}
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

        {/* Layer 2 — doctor image, centered, overlaps the text */}
        <motion.div
          className="scroll-text__img-wrap"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/assets/doctor_renove.png"
            alt="Dr. Sophia Renova"
            className="scroll-text__doctor-img"
          />
        </motion.div>

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