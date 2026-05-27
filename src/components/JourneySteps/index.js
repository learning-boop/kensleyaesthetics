import { useState, useRef, useEffect } from 'react';

import imgOne   from '../../data/images/one.jpg';
import imgTwo   from '../../data/images/two.png';
import imgThree from '../../data/images/three.jpg';
import imgFour  from '../../data/images/four.png';
import imgFive  from '../../data/images/five.png';
import imgSix   from '../../data/images/six.webp';
import imgEight from '../../data/images/eight.jpg';

import './JourneySteps.css';

// ── Step data ────────────────────────────────────────────────────────
const STEPS = [
  {
    title: 'Consultation',
    image: imgOne,
    desc: 'Our specialist carefully listens to your goals and discusses any contraindications. Together you arrive at personalised solutions that enhance your natural beauty — every stage is thoroughly explained, from preparation to aftercare.',
  },
  {
    title: 'Preparation for Treatment',
    image: imgTwo,
    desc: 'A tailored treatment plan is designed specifically for you, selecting the optimal products, protocols, and techniques to achieve your aesthetic goals safely and with precision.',
  },
  {
    title: 'Arrival at the Clinic',
    image: imgThree,
    desc: 'Upon arrival you are warmly welcomed and prepared for your treatment. Our team ensures your complete comfort and addresses any final questions before your session begins.',
  },
  {
    title: 'Marking',
    image: imgFour,
    desc: 'Precise preparation and marking are completed to guide the treatment. Every detail is carefully mapped before the procedure begins, ensuring a balanced and harmonious outcome.',
  },
  {
    title: 'Treatment',
    image: imgFive,
    desc: 'Your specialist performs the treatment with precision and artistry, using only premium clinically approved products and techniques selected for your individual needs.',
  },
  {
    title: 'Immediately After',
    image: imgSix,
    desc: 'You receive detailed aftercare instructions and are monitored until fully comfortable. Our team remains available for any questions or concerns in the hours following your treatment.',
  },
  {
    title: 'Recovery',
    image: imgEight,
    desc: 'Most treatments require minimal to no downtime. We schedule a follow-up to review your results, answer any questions, and ensure your complete satisfaction with the outcome.',
  },
];

// ── Single step row ──────────────────────────────────────────────────
function StepItem({ step, isOpen, onToggle }) {
  const titleRef = useRef(null);

  // Reset wipe when step opens
  useEffect(() => {
    if (isOpen && titleRef.current) {
      titleRef.current.style.setProperty('--cx', '0%');
    }
  }, [isOpen]);

  const handleMouseMove = (e) => {
    if (isOpen) return;
    const el = titleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct  = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    el.style.setProperty('--cx', `${pct}%`);
  };

  const handleMouseLeave = () => {
    if (isOpen) return;
    if (titleRef.current) titleRef.current.style.setProperty('--cx', '0%');
  };

  return (
    <div className={`js-step${isOpen ? ' js-step--open' : ''}`}>
      <button
        className="js-step-header"
        onClick={onToggle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-expanded={isOpen}
      >
        <span ref={titleRef} className="js-step-title">
          {step.title}
        </span>
        <span className="js-step-toggle" aria-hidden="true">
          {isOpen ? '\u2212' : '+'}
        </span>
      </button>

      {/* Expanded content */}
      <div className="js-step-body" aria-hidden={!isOpen}>
        {isOpen && (
          <>
            <div className="js-step-img-wrap">
              <img src={step.image} alt={step.title} />
            </div>
            <p className="js-step-desc">{step.desc}</p>
          </>
        )}
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────
export default function JourneySteps() {
  const [openIndex, setOpenIndex] = useState(0); // CONSULTATION open by default

  return (
    <section className="js-section">
      {/* Eyebrow */}
      <div className="js-eyebrow">
        <p>7 Steps Toward</p>
        <p>Your Transformation</p>
      </div>

      {/* Steps */}
      <div className="js-list">
        {STEPS.map((step, i) => (
          <StepItem
            key={i}
            step={step}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
