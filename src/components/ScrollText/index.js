import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import drMatlaImg from '../../data/images/drmatla.png';
import './ScrollText.css';

const TRUST_CARDS = [
  {
    title: 'Founded by Dr. Tiru Matla',
    body: 'Clinical direction and treatment standards established by an experienced medical and aesthetic practitioner.',
  },
  {
    title: 'Dedicated to Facial Aesthetics',
    body: 'Treatments planned around facial balance, skin quality and natural-looking improvement.',
  },
  {
    title: 'One Clinical Standard',
    body: 'Treatment options with Dr. Matla or an experienced Kensley Medical Aesthetic Clinician.',
  },
];

function ScrollText() {
  const navigate = useNavigate();

  return (
    <section className="brand-story">
      {/* Left — image */}
      <div className="brand-story__image-col">
        <img
          src={drMatlaImg}
          alt="Dr. Tiru Matla — Kensley Aesthetics founder"
          className="brand-story__image"
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
          Kensley Aesthetics is the next chapter in Dr. Tiru Matla's approach to medical aesthetics.
          Created as a dedicated face-focused clinic, Kensley combines his established clinical experience
          and treatment philosophy with a carefully selected team of medical aesthetic clinicians.
        </p>
        <p className="brand-story__body">
          Every patient receives the same commitment to safety, personalised planning and natural-looking
          results — whether they choose treatment with Dr. Matla or a member of the Kensley clinical team.
        </p>

        {/* Trust cards */}
        <div className="brand-story__cards">
          {TRUST_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              className="brand-story__card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="brand-story__card-title">{card.title}</span>
              <p className="brand-story__card-body">{card.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="brand-story__actions">
          <button className="brand-story__btn brand-story__btn--primary" onClick={() => navigate('/about')}>
            Meet Our Founder
          </button>
          <button className="brand-story__btn brand-story__btn--ghost" onClick={() => navigate('/about')}>
            Meet the Kensley Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default ScrollText;
