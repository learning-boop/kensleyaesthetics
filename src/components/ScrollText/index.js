import Image from 'next/image';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const drMatlaImg = '/images/drmatla.png';
import './ScrollText.css';

function ScrollText() {
  const navigate = useNavigate();

  return (
    <section className="brand-story">
      {/* Left — image */}
      <div className="brand-story__image-col">
        <Image
          src={drMatlaImg}
          alt="Dr. Tiru Matla — Kensley Aesthetics founder"
          className="brand-story__image"
          width={600}
          height={750}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Right — content */}
      <div className="brand-story__content">
        <span className="brand-story__label">About Kensley Aesthetics</span>

        <motion.h2
          className="brand-story__heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          A New Brand, Built on<br />
          <em>Established Expertise</em>
        </motion.h2>

        <p className="brand-story__body">
          Kensley Aesthetics is a dedicated face-focused clinic founded by Dr. Tiru Matla,
          combining established clinical experience with a carefully selected team of medical
          aesthetic clinicians — delivering personalised, natural-looking results.
        </p>

        {/* Buttons */}
        <div className="brand-story__actions">
          <button className="brand-story__btn brand-story__btn--primary" onClick={() => navigate('/about')}>
            About Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default ScrollText;
