import { useState } from 'react';
import { Link } from 'react-router-dom';
import faqImgTop    from '../../data/images/nine.png';
import faqImgBottom from '../../data/images/ten.png';
import './HomeFaqSection.css';

const FAQS = [
  {
    q: 'How safe are our aesthetic treatments?',
    a: 'All our treatments are non-surgical, clinically approved, and performed exclusively by trained specialists. A thorough consultation is completed before every procedure to ensure your safety and suitability.',
  },
  {
    q: 'Which treatment is right for my skin concern?',
    a: 'During your personalised consultation, our specialists assess your skin, listen to your goals, and recommend the most suitable treatment or combination tailored to your unique needs.',
  },
  {
    q: 'Can I combine treatments in one appointment?',
    a: 'Yes — many of our treatments complement each other beautifully. Your specialist will design a bespoke plan, advising on safe combinations and the ideal sequencing for the best results.',
  },
  {
    q: 'How long do I need after my treatment?',
    a: 'Most treatments require no downtime at all. You can return to your daily activities immediately. Some treatments may cause minor redness or swelling for a few hours.',
  },
  {
    q: 'What is the typical recovery time?',
    a: 'Recovery varies by treatment. Injectable treatments may cause minor swelling or bruising for 24–48 hours, which resolves naturally. Skin treatments typically have no visible recovery period.',
  },
  {
    q: 'Are packages or discounts available?',
    a: 'We offer tailored multi-treatment packages aligned to your goals. Ask about our loyalty programme and seasonal promotions when you book your consultation.',
  },
  {
    q: 'What are the contraindications for aesthetic treatments?',
    a: 'Contraindications vary by treatment. Generally we advise against treatment during pregnancy, with certain active skin conditions, or while on specific medications. A full assessment is completed at consultation.',
  },
];

function FaqCard({ faq, index, expanded, onToggle, tall }) {
  const isOpen = expanded === index;
  return (
    <div
      className={`hfaq-card${isOpen ? ' expanded' : ''}${tall ? ' hfaq-tall' : ''}`}
      onClick={() => onToggle(isOpen ? null : index)}
    >
      <p className="hfaq-card-q">{faq.q}</p>
      <p className="hfaq-card-a">{faq.a}</p>
      <div className="hfaq-plus-btn" aria-hidden="true">+</div>
    </div>
  );
}

export default function HomeFaqSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="hfaq-section">

      {/* ── Header: giant FAQ title + top image ── */}
      <div className="hfaq-header">
        <div className="hfaq-title-col">
          <div className="hfaq-faq-letters">
            <span>F</span>
            <span>A</span>
            <span className="hfaq-q-wrap">
              Q
              <div className="hfaq-q-circle" />
            </span>
          </div>
        </div>
        <div className="hfaq-top-img-col">
          <img src={faqImgTop} alt="Expert aesthetic care" />
        </div>
      </div>

      {/* ── Card grid ── */}
      <div className="hfaq-grid">

        {/* Rows 1 & 2 — 6 regular cards */}
        {FAQS.slice(0, 6).map((faq, i) => (
          <FaqCard
            key={i}
            faq={faq}
            index={i}
            expanded={expanded}
            onToggle={setExpanded}
          />
        ))}

        {/* Row 3 col 1 — bottom image */}
        <div className="hfaq-grid-img">
          <img src={faqImgBottom} alt="Precision treatment tools" />
        </div>

        {/* Row 3 col 2 — last FAQ card */}
        <FaqCard
          faq={FAQS[6]}
          index={6}
          expanded={expanded}
          onToggle={setExpanded}
          tall
        />

        {/* Row 3 col 3 — Show All Answers */}
        <Link to="/faq" className="hfaq-show-all" style={{ textDecoration: 'none' }}>
          <p className="hfaq-show-all-label">
            Show<br />All Answers
          </p>
          <div className="hfaq-show-all-circle">+</div>
        </Link>

      </div>
    </section>
  );
}
