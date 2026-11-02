import { useState } from 'react';
import './PageFaq.css';

/**
 * Accordion FAQ block for content pages (Locations, Prices, Skin Concerns).
 * Answers stay in the DOM when closed, so they are in the pre-rendered HTML
 * that search engines and AI crawlers read. The matching FAQPage JSON-LD is
 * rendered server-side in each app/<page>/page.js from the same data.
 */
export default function PageFaq({ eyebrow = 'Common Questions', title = 'Frequently Asked Questions', faqs = [], id }) {
  const [open, setOpen] = useState(null);
  const items = faqs.filter((f) => f && f.q && f.a);
  if (!items.length) return null;

  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section className="pfaq" id={id} aria-labelledby={headingId}>
      <div className="pfaq__inner">
        <div className="pfaq__header">
          <span className="pfaq__eyebrow">{eyebrow}</span>
          <h2 className="pfaq__title" id={headingId}>{title}</h2>
        </div>
        <div className="pfaq__list">
          {items.map((f, i) => {
            const isOpen = open === i;
            const panelId = `${id || 'pfaq'}-panel-${i}`;
            return (
              <div className={`pfaq__item ${isOpen ? 'pfaq__item--open' : ''}`} key={f.q}>
                <h3 className="pfaq__q-wrap">
                  <button
                    type="button"
                    className="pfaq__btn"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="pfaq__q">{f.q}</span>
                    <span className="pfaq__icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div id={panelId} className={`pfaq__body ${isOpen ? 'pfaq__body--open' : ''}`}>
                  <p className="pfaq__a">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
