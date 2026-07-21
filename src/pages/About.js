import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SeoHead from '../components/SeoHead';
import './About.css';

const stats = [
  { num: '20+',     label: 'Years of Medical\nExperience' },
  { num: '10+',     label: 'Years in Aesthetic\nMedicine' },
  { num: '10,000+', label: 'Aesthetic Procedures\nPerformed' },
  { num: 'GMC',     label: 'Registered\nDoctor-Led Clinic' },
];

const credentials = [
  'GMC Registered Doctor-Led Clinic',
  'MBBS, MRCGP, DFSRH',
  'PGCert Aesthetics & Cosmetic Medicine',
  'Hyacorp Body Filler Trainer',
  'Genefill DX Trainer',
  'Advanced Aesthetic Medicine Practice',
  'Founder & Clinical Director — Kensley Aesthetics',
];

const whyItems = [
  {
    q: 'GMC Registered Doctor-Led Care',
    a: 'Every treatment at Kensley Aesthetics is performed personally by a fully GMC-registered doctor with over 20 years of clinical experience. You are never treated by a non-medical practitioner.',
  },
  {
    q: '10,000+ Aesthetic Procedures Performed',
    a: 'With over 10,000 aesthetic procedures carried out, we bring a depth and breadth of clinical experience that is exceptional in aesthetic medicine.',
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

  return (
    <>
      <SeoHead
        title="About Us | Kensley Aesthetics Newcastle"
        description="Kensley Aesthetics is a GMC-registered, doctor-led aesthetic clinic in Jesmond, Newcastle. Over 20 years of medical experience and 10,000+ procedures performed."
        path="/about"
      />

      <PageHero
        label="About the Clinic"
        title={<>Kensley<br />Aesthetics</>}
        subtitle="GMC Registered · Doctor-Led · Jesmond, Newcastle"
      />

      {/* ── PROFILE ──────────────────────────────────────────── */}
      <section className="ab-profile">
        <div className="ab-profile__content-col">
          <span className="ab-eyebrow">GMC Registered Clinic</span>
          <h2 className="ab-profile__name">Kensley<br />Aesthetics</h2>
          <p className="ab-profile__role">
            Doctor-Led Aesthetic Clinic<br />
            Jesmond, Newcastle upon Tyne
          </p>
          <div className="ab-divider" />
          <blockquote className="ab-profile__quote">
            "Our aim is to deliver natural, safe and effective treatments that help
            patients look refreshed, feel confident and achieve their aesthetic
            goals with complete trust and peace of mind."
          </blockquote>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <section className="ab-stats-band">
        {stats.map((s) => (
          <div className="ab-stats-band__item" key={s.num}>
            <span className="ab-stats-band__num">{s.num}</span>
            <span className="ab-stats-band__label">
              {s.label.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </span>
          </div>
        ))}
      </section>

      {/* ── CREDENTIALS ──────────────────────────────────────── */}
      <section className="ab-credentials">
        <div className="ab-credentials__inner">
          <div className="ab-credentials__left">
            <span className="ab-eyebrow ab-eyebrow--dark">Qualifications</span>
            <h2 className="ab-credentials__title">Credentials<br />&amp; Training</h2>
            <p className="ab-credentials__desc">
              Our clinic is led by a doctor with extensive clinical qualifications, recognised
              as an advanced trainer and educator in aesthetic medicine
              across the United Kingdom.
            </p>
          </div>
          <div className="ab-credentials__right">
            <div className="ab-credentials__grid">
              {credentials.map((c, i) => (
                <div className="ab-credentials__card" key={i}>
                  <span className="ab-credentials__card-num">0{i + 1}</span>
                  <p className="ab-credentials__card-text">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BIOGRAPHY ────────────────────────────────────────── */}
      <section className="ab-bio">
        <div className="ab-bio__inner">
          <div className="ab-bio__content-col">
            <span className="ab-eyebrow">About Us</span>
            <h2 className="ab-bio__title">About the<br />Clinic</h2>
            <div className="ab-divider" />
            <p className="ab-bio__text">
              Kensley Aesthetics is a doctor-led aesthetic clinic based in Jesmond, Newcastle upon Tyne.
              Our clinical director brings over 20 years of medical experience and more than 10 years
              dedicated exclusively to advanced aesthetic medicine, with over 10,000 aesthetic procedures
              performed.
            </p>
            <p className="ab-bio__text">
              We are a Hyacorp Body Filler Trainer clinic and Genefill DX Trainer clinic — reflecting
              our commitment to innovation, education and excellence in advanced aesthetic medicine.
            </p>
            <p className="ab-bio__text">
              Kensley Aesthetics operates to the highest standards of patient safety and
              clinical governance, providing bespoke, doctor-led care tailored to each individual
              client's goals and anatomy.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────────── */}
      <section className="ab-why">
        <div className="ab-why__inner">
          <div className="ab-why__header">
            <span className="ab-eyebrow ab-eyebrow--gold">Why Choose Us</span>
            <h2 className="ab-why__title">Why Choose<br />Kensley Aesthetics</h2>
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

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="ab-cta">
        <div className="ab-cta__content-col">
          <span className="ab-eyebrow ab-eyebrow--gold">Ready to Begin</span>
          <h2 className="ab-cta__title">Book a<br />Consultation</h2>
          <p className="ab-cta__text">
            Begin your journey with a personalised consultation at Kensley Aesthetics.
            Discuss your goals, understand your options, and receive an honest,
            expert recommendation.
          </p>
          <Link to="/book" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}

export default About;
