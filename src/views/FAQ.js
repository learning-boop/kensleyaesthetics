import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import './FAQ.css';

const faqs = [
  {
    category: 'Your Consultation',
    icon: '✨',
    items: [
      {
        q: 'What happens during a consultation?',
        a: 'Your consultation is a relaxed, no-pressure conversation. We’ll assess your skin, discuss your goals and recommend the most suitable treatments. There’s no obligation to book on the day.',
      },
      {
        q: 'How do I know which treatment is right for me?',
        a: 'Our team will assess your skin and concerns during your consultation and create a personalised plan. You can also browse our Skin Concerns page to explore treatments by concern.',
      },
      {
        q: 'Are your practitioners medically qualified?',
        a: 'Yes. All treatments at Kensley Aesthetics are performed or overseen by medically qualified practitioners with specialist training in aesthetic medicine.',
      },
    ],
  },
  {
    category: 'Treatments & Results',
    icon: '✶',
    items: [
      {
        q: 'Do the treatments hurt?',
        a: 'Discomfort is minimal. We use fine needles, topical numbing agents and a gentle technique to ensure your experience is as comfortable as possible.',
      },
      {
        q: 'How long do results last?',
        a: 'This varies by treatment. Relaxant injections typically last 3–4 months, dermal fillers 9–18 months, and skin-boosting treatments such as Profhilo typically last several months (commonly reviewed at around 6 months). Your practitioner will give you a realistic expectation during your consultation.',
      },
      {
        q: 'Can I combine treatments?',
        a: 'Absolutely. Many clients benefit from combining treatments for a more comprehensive result. Our Full Face Refresh is specifically designed as a combination protocol.',
      },
      {
        q: 'How soon will I see results?',
        a: 'Some treatments show immediate improvement, while others develop gradually over weeks as your skin responds. Your clinician will explain the expected timeline for your specific treatment.',
      },
    ],
  },
  {
    category: 'Booking & Practical',
    icon: '☆',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book directly through our contact page, or call us to speak with a member of our team. We offer both weekday and weekend appointments.',
      },
      {
        q: 'What should I do before my appointment?',
        a: 'Where possible, avoid over-the-counter blood-thinning medication such as ibuprofen or aspirin for 24–48 hours before treatment — but never stop prescribed medication without your doctor’s advice first. Stay hydrated and arrive with a clean face. We will provide full pre-treatment instructions when you book.',
      },
      {
        q: 'What aftercare do I need?',
        a: 'Aftercare varies by treatment, but generally we advise avoiding strenuous exercise, alcohol and direct sun exposure for 24 hours. Full aftercare instructions will be provided at your appointment.',
      },
      {
        q: 'What if I’m not happy with my result?',
        a: 'Your satisfaction is our priority. If you have any concerns about your results, please contact us and we will arrange a follow-up appointment to assess and advise.',
      },
    ],
  },
];

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

const allFaqs = faqs.flatMap(cat => cat.items);

function FAQ() {
  const [openKey, setOpenKey] = useState(null);
  const { openDrawer } = useAppointment();

  return (
    <>
      <SeoHead
        title="FAQs | Non-Surgical Aesthetic Treatments Newcastle"
        description="Answers to your most common questions about non-surgical aesthetic treatments at Kensley Aesthetics — dermal fillers, anti-wrinkle consultations, Profhilo, microneedling, HIFU and more. Doctor-led clinic in Newcastle."
        path="/faq"
        faqs={allFaqs}
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
