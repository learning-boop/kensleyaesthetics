import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SeoHead from '../components/SeoHead';
import './pages.css';

const faqs = [
  {
    category: 'General',
    items: [
      {
        q: 'What happens during a consultation?',
        a: 'Your consultation is a relaxed, no-pressure conversation. We\'ll assess your skin, discuss your goals, and recommend the most suitable treatments. There\'s no obligation to book on the day.',
      },
      {
        q: 'Are your practitioners medically qualified?',
        a: 'Yes. All treatments at Kensley Aesthetics are performed or overseen by medically qualified practitioners with specialist training in aesthetic medicine.',
      },
      {
        q: 'How do I know which treatment is right for me?',
        a: 'Our team will assess your skin and concerns during your consultation and create a personalised plan. You can also browse our Skin Concerns page to explore treatments by concern.',
      },
    ],
  },
  {
    category: 'Treatments',
    items: [
      {
        q: 'Do the treatments hurt?',
        a: 'Discomfort is minimal. We use fine needles, topical numbing agents, and a gentle technique to ensure your experience is as comfortable as possible.',
      },
      {
        q: 'How long do results last?',
        a: 'This varies by treatment. Relaxant injections typically last 3–4 months, dermal fillers 9–18 months, and skin-boosting treatments such as Profhilo typically last several months (commonly reviewed at around 6 months). Your practitioner will give you a realistic expectation during your consultation.',
      },
      {
        q: 'Is there any downtime after treatment?',
        a: 'Most of our treatments require little to no downtime. Some clients experience mild redness or swelling that resolves within a few hours to days. We will advise you on what to expect before your appointment.',
      },
      {
        q: 'Can I combine treatments?',
        a: 'Absolutely. Many clients benefit from combining treatments for a more comprehensive result. Our Full Face Refresh is specifically designed as a combination protocol.',
      },
    ],
  },
  {
    category: 'Booking & Aftercare',
    items: [
      {
        q: 'How do I book an appointment?',
        a: 'You can book directly through our contact page, or call us to speak with a member of our team. We offer both weekday and weekend appointments.',
      },
      {
        q: 'What should I do before my appointment?',
        a: 'Where possible, avoid over-the-counter blood-thinning medication such as ibuprofen or aspirin for 24–48 hours before treatment — but never stop prescribed medication without your doctor\'s advice first. Stay hydrated and arrive with a clean face. We will provide full pre-treatment instructions when you book.',
      },
      {
        q: 'What aftercare do I need?',
        a: 'Aftercare varies by treatment, but generally we advise avoiding strenuous exercise, alcohol, and direct sun exposure for 24 hours. Full aftercare instructions will be provided at your appointment.',
      },
      {
        q: 'What if I am not happy with my result?',
        a: 'Your satisfaction is our priority. If you have any concerns about your results, please contact us and we will arrange a follow-up appointment to assess and advise.',
      },
    ],
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-item__icon">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="faq-item__answer">{a}</p>}
    </div>
  );
}

function FAQ() {
  return (
    <>
      <SeoHead
        title="FAQs | Non-Surgical Aesthetic Treatments Newcastle"
        description="Answers to your most common questions about non-surgical aesthetic treatments at Kensley Aesthetics — dermal fillers, anti-wrinkle injections, Profhilo, microneedling, HIFU and more."
        path="/faq"
      />
      <PageHero
        label="FAQ"
        title={<>Frequently Asked<br />Questions</>}
        subtitle="Everything you need to know before your first appointment."
      />

      <section className="page-section">
        <div className="container">
          <div className="faq-layout">
            <div className="faq-categories">
              {faqs.map((cat) => (
                <div className="faq-category" key={cat.category}>
                  <h2 className="faq-category__title">{cat.category}</h2>
                  <div className="faq-list">
                    {cat.items.map((item) => (
                      <FAQItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <aside className="faq-sidebar">
              <div className="faq-sidebar__card">
                <p className="section-label">Still Have Questions?</p>
                <h3 className="faq-sidebar__title">Talk to Our Team</h3>
                <p className="faq-sidebar__text">
                  Our friendly team is happy to answer any questions before you book.
                </p>
                <Link to="/book" className="btn-primary" style={{ marginTop: 24 }}>
                  Get in Touch
                </Link>
              </div>
              <div className="faq-sidebar__card" style={{ marginTop: 24 }}>
                <p className="section-label">Ready to Begin?</p>
                <h3 className="faq-sidebar__title">Browse Treatments</h3>
                <p className="faq-sidebar__text">
                  Explore our full range of treatments and find the right one for your skin.
                </p>
                <Link to="/treatments" className="btn-outline" style={{ marginTop: 24 }}>
                  View All Treatments
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default FAQ;
