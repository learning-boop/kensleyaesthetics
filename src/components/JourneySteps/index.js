import { useState, useRef, useEffect } from 'react';


import './JourneySteps.css';

// ── Step data ────────────────────────────────────────────────────────
const STEPS = [
  {
    title: 'Schedule Your Consultation',
    desc: "Get in touch online or by phone to book your consultation. We'll find a time that works for you.",
  },
  {
    title: 'Your Consultation',
    desc: "Meet with your clinician to discuss your goals, concerns and medical history. We'll recommend the best options for you.",
  },
  {
    title: 'Your Personalised Treatment Plan',
    desc: 'Receive a tailored plan designed around your needs, including the recommended treatments, expected results and costs.',
  },
  {
    title: 'Preparing for Treatment',
    desc: "We'll send you simple pre-treatment guidelines to follow so you're fully prepared for your appointment.",
  },
  {
    title: 'Arriving at the Clinic',
    desc: "You'll be welcomed by our team, made comfortable and talked through everything before we begin.",
  },
  {
    title: 'Your Treatment',
    desc: 'Your clinician carries out the treatment with care and precision, keeping you informed and comfortable throughout.',
  },
  {
    title: 'Aftercare and Follow-Up',
    desc: "You'll receive clear aftercare advice and a follow-up appointment to check your results and answer any questions.",
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
          <p className="js-step-desc">{step.desc}</p>
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
        <p>7 steps toward</p>
        <p>your transformation</p>
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
