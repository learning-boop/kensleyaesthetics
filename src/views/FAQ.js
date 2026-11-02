import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import { FAQ_PAGE_CATEGORIES } from '../data/pageFaqs';
import './FAQ.css';

// Content lives in src/data/pageFaqs.js (shared with the FAQPage JSON-LD in app/faq/page.js)
const faqs = FAQ_PAGE_CATEGORIES;

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className={`fq-item ${isOpen ? 'fq-item--open' : ''}`}>
      <button className="fq-item__btn" onClick={onToggle} aria-expanded={isOpen}>
        <span className="fq-item__q">{q}</span>
        <span className="fq-item__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className={`fq-item__body ${isOpen ? 'fq-item__body--open' : ''}`}>
        <p className="fq-item__a">{a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openKey, setOpenKey] = useState(null);
  const { openDrawer } = useAppointment();

  return (
    <>
      <SeoHead
        title="Aesthetic Treatment FAQs | Kensley Aesthetics Newcastle"
        description="Answers to common questions about consultations, treatments, recovery, prices and booking at Kensley Aesthetics in Jesmond, Newcastle."
        path="/faq"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'FAQs', path: '/faq' },
        ]}
      />

      {/* Hero */}
      <section className="fq-hero">
        <div className="fq-hero__inner">
          <span className="fq-hero__label">Got Questions?</span>
          <h1 className="fq-hero__title">We’ve Got<br /><em>Answers</em></h1>
          <p className="fq-hero__sub">
            Everything you need to know before your first visit.
          </p>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="fq-body">
        <div className="fq-body__inner">
          {faqs.map((cat) => (
            <div className="fq-category" key={cat.category}>
              <div className="fq-category__header">
                <span className="fq-category__icon">{cat.icon}</span>
                <h2 className="fq-category__title">{cat.category}</h2>
              </div>
              <div className="fq-category__list">
                {cat.items.map((item) => {
                  const key = item.q;
                  return (
                    <FAQItem
                      key={key}
                      q={item.q}
                      a={item.a}
                      isOpen={openKey === key}
                      onToggle={() => setOpenKey(openKey === key ? null : key)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="fq-cta">
        <div className="fq-cta__inner">
          <div className="fq-cta__card">
            <h3 className="fq-cta__title">Still have questions?</h3>
            <p className="fq-cta__text">
              Our friendly team is happy to help. Get in touch and we’ll guide you through everything.
            </p>
            <div className="fq-cta__actions">
              <button className="fq-cta__btn fq-cta__btn--primary" onClick={openDrawer}>
                Book a Consultation
              </button>
              <Link to="/treatments" className="fq-cta__btn fq-cta__btn--outline">
                Browse Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
