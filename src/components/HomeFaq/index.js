import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HOME_FAQS, HOME_FAQS_FEATURED } from '../../data/pageFaqs';
import { useAppointment } from '../../context/AppointmentContext';
import './HomeFaq.css';

/* Homepage FAQ — the digital marketer's 21 AEO / GEO questions (Nov 2026).
   Every answer is in the pre-rendered HTML; the first few show by default.
   No FAQPage JSON-LD here: each question is already marked up once, on the
   page listed at the top of src/data/pageFaqs.js. */

const num = (i) => String(i + 1).padStart(2, '0');

export default function HomeFaq() {
  const { openDrawer } = useAppointment();
  const [open, setOpen] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const items = HOME_FAQS;
  if (!items.length) return null;
  const hasMore = items.length > HOME_FAQS_FEATURED;

  const toggleAll = () => {
    if (showAll && open !== null && open >= HOME_FAQS_FEATURED) setOpen(null);
    setShowAll((v) => !v);
  };

  return (
    <section className="hf-section" aria-labelledby="hf-title">
      <div className="hf-inner">
        <div className="hf-aside">
          <h2 className="hf-title" id="hf-title">Your questions, answered</h2>
          <p className="hf-intro">
            Straightforward answers to the questions we hear most, from choosing a treatment
            to recovery and risks. If yours isn&rsquo;t here, ask us at your consultation.
          </p>
          <div className="hf-actions">
            <button type="button" className="hf-btn" onClick={openDrawer}>
              Book a consultation
            </button>
            <Link to="/faq" className="hf-link">Visit our FAQ page</Link>
          </div>
        </div>

        <div className="hf-main">
          <ul className="hf-list" id="hf-list">
            {items.map((f, i) => {
              const isOpen = open === i;
              const isExtra = i >= HOME_FAQS_FEATURED;
              const classes = [
                'hf-item',
                isOpen ? 'is-open' : '',
                isExtra && !showAll ? 'hf-item--more' : '',
              ].filter(Boolean).join(' ');
              return (
                <li className={classes} key={f.q}>
                  <h3 className="hf-q-wrap">
                    <button
                      type="button"
                      id={`hf-q-${i}`}
                      className="hf-q-btn"
                      aria-expanded={isOpen}
                      aria-controls={`hf-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                    >
                      <span className="hf-num" aria-hidden="true">{num(i)}</span>
                      <span className="hf-q">{f.q}</span>
                      <span className="hf-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="hf-panel" id={`hf-a-${i}`}>
                    <div className="hf-panel__inner">
                      <div className="hf-panel__body">
                        <p className="hf-a">{f.a}</p>
                        {f.link && (
                          <Link to={f.link.to} className="hf-more">{f.link.label}</Link>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {hasMore && (
            <button
              type="button"
              className="hf-toggle"
              aria-expanded={showAll}
              aria-controls="hf-list"
              onClick={toggleAll}
            >
              {showAll ? 'Show fewer questions' : `Show all ${items.length} questions`}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
