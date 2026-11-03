import { useState } from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import TeamProfiles from '../components/TeamProfiles';
import { useAppointment } from '../context/AppointmentContext';
import './About.css';

const whyItems = [
  {
    q: 'Qualified Healthcare Professionals',
    a: 'Your treatment is carried out by one of our qualified healthcare professionals, each with further training in aesthetic medicine. Every treatment starts with a full consultation and an assessment of your suitability.',
  },
  {
    q: 'Bespoke Plans, Not Templates',
    a: 'We take time at every consultation to understand your individual goals, anatomy and skin concerns before recommending any treatment. Your plan is built around you — never a standard protocol.',
  },
  {
    q: 'Honest Counsel & Meticulous Detail',
    a: 'We are known for meticulous attention to detail and honest counsel. If a treatment is not right for you or will not achieve what you hope, we will tell you clearly and recommend an alternative.',
  },
  {
    q: 'Advanced Training & Expertise',
    a: 'Our clinical team hold advanced qualifications in aesthetic medicine, including recognised trainer status in dermal fillers and regenerative treatments — ensuring you receive the highest standard of care.',
  },
  {
    q: 'A Practice Built on Trust',
    a: 'Kensley Aesthetics was built on the principle that patients deserve complete transparency, safety and expertise. We operate to the highest clinical governance standards in everything we do.',
  },
];

function About() {
  const [openItem, setOpenItem] = useState(null);
  const { openDrawer } = useAppointment();

  return (
    <>
      <SeoHead
        title="About Kensley Aesthetics | Aesthetic Clinic in Jesmond"
        description="Kensley Aesthetics is a doctor-led aesthetic clinic in Jesmond, Newcastle, founded by Dr Matla. Personal consultations and natural-looking results."
        path="/about"
      />

      <PageHero
        label="About the Clinic"
        title={<>Kensley{' '}<br />Aesthetics</>}
        subtitle="Doctor-Led · Jesmond, Newcastle"
      />

      {/* ── INTRO (client brief Nov 2026: founder mentioned once, briefly) ── */}
      <section className="ab-intro" aria-labelledby="ab-intro-lead">
        <div className="ab-intro__inner">
          <h2 className="ab-intro__lead" id="ab-intro-lead">
            Beauty refined.<br />
            Confidence restored.
          </h2>

          <div className="ab-intro__body">
            <figure className="ab-intro__figure">
              <Image
                src="/images/kensley-real/kensley-aesthetics-consultation-room-jesmond-newcastle.webp"
                alt="A patient in consultation with a practitioner in the oak-panelled consultation room at Kensley Aesthetics, Jesmond"
                className="ab-intro__img"
                width={1200}
                height={800}
                loading="eager"
                sizes="(max-width: 900px) 100vw, 58vw"
              />
              <figcaption className="ab-intro__caption">Our consultation room on Sandyford Road, Jesmond</figcaption>
            </figure>

            <div className="ab-intro__text">
              <p>
                Kensley Aesthetics is a doctor-led face and skin clinic in Jesmond, Newcastle.
                We focus on subtle, well-judged treatment: the kind of change people notice as
                &ldquo;you look well&rdquo;, rather than &ldquo;what have you had done&rdquo;.
              </p>
              <p>
                Every plan begins with an unhurried consultation. We take time to understand your
                concerns and medical history, assess your skin and facial structure, and explain
                your options honestly, including when doing less is the better choice.
              </p>
              <p className="ab-intro__founder">
                Kensley Aesthetics was founded by Dr Matla. As Founder and Clinical Lead,
                Dr Matla oversees a dedicated team of qualified medical aesthetic practitioners
                who deliver personalised treatments with a strong focus on patient safety,
                clinical excellence and natural-looking results.
              </p>
            </div>
          </div>

          <ul className="ab-intro__commitments">
            <li>
              <h3>Time to talk first</h3>
              <p>Every treatment starts with a consultation, with time for your questions and no pressure to book on the day.</p>
            </li>
            <li>
              <h3>Natural, never overdone</h3>
              <p>We aim for subtle, balanced results that respect your features and the way your face moves.</p>
            </li>
            <li>
              <h3>Care after your visit</h3>
              <p>Clear aftercare advice and a follow-up appointment to review your results and answer any questions.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* ── MEET THE TEAM (profiles; photos added later in src/data/team.js) ── */}
      <TeamProfiles />

      {/* ── WHY CHOOSE ───────────────────────────────────────────── */}
      <section className="ab-why">
        <div className="ab-why__inner">
          <div className="ab-why__header">
            <span className="ab-eyebrow ab-eyebrow--gold">Why Choose Us</span>
            <h2 className="ab-why__title">Why Choose{' '}<br />Kensley Aesthetics</h2>
          </div>
          <div className="ab-why__accordion">
            {whyItems.map((item, i) => (
              <div className="ab-why__item" key={i}>
                <button
                  className="ab-why__item-btn"
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                  aria-expanded={openItem === i}
                >
                  <span>{item.q}</span>
                  <span className="ab-why__item-icon">{openItem === i ? '−' : '+'}</span>
                </button>
                <div className={`ab-why__item-body${openItem === i ? ' ab-why__item-body--open' : ''}`}>
                  <p className="ab-why__item-text">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMER CARE ────────────────────────────────────────── */}
      <section className="ab-care">
        <div className="ab-care__img-col">
          <Image
            src="/images/kensley-real/practitioner-patient-consultation-kensley-aesthetics.webp"
            alt="Kensley Aesthetics practitioner during patient consultation, Newcastle clinic"
            className="ab-care__img"
            loading="lazy"
            width={600}
            height={750}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="ab-care__content-col">
          <span className="ab-eyebrow ab-eyebrow--dark">We're Here for You</span>
          <h2 className="ab-care__title">Exceptional{' '}<br />Care &amp; Support</h2>
          <div className="ab-divider" />
          <p className="ab-care__text">
            From your very first enquiry through to post-treatment follow-up,
            our dedicated customer care team is on hand to answer your questions,
            guide you through your options and make every step of your journey
            as comfortable as possible.
          </p>
          <p className="ab-care__text">
            Prefer to book over the phone? Our team is available to take your call,
            discuss your concerns and secure your appointment directly — no forms,
            no waiting, just a friendly conversation.
          </p>
          <div className="ab-care__actions">
            <a href="tel:+443330570295" className="ab-care__call-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.19 12.9 19.79 19.79 0 0 1 1.08 4.18 2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.99 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call 0333 057 0295
            </a>
            <button className="ab-care__book-btn" onClick={openDrawer}>
              Book Online
            </button>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
