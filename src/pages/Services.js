import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import QuickContact from '../components/QuickContact';
import SeoHead from '../components/SeoHead';
import './pages.css';
import './Training.css';

const COURSES = [
  {
    num: '01',
    title: 'Foundation Injectables Certificate',
    duration: '2 Days',
    level: 'Beginner',
    description:
      'A comprehensive introduction to facial anatomy, safe injection techniques, and botulinum toxin protocols. Designed for medical practitioners and nurses entering the world of aesthetics.',
    includes: [
      'Live model supervised practice',
      'Full anatomy study materials',
      'Certificate of completion',
      '3-month post-course mentorship',
    ],
    price: 'From £895',
  },
  {
    num: '02',
    title: 'Advanced Botulinum Toxin Masterclass',
    duration: '1 Day',
    level: 'Intermediate',
    description:
      'Deep-dive into advanced injection patterns, dose optimisation, and managing complex presentations. For practitioners already performing basic toxin treatments who want to refine and expand.',
    includes: [
      'Advanced facial mapping techniques',
      'Complication recognition & management',
      'Case study review with clinical expert',
      'Live clinic observation session',
    ],
    price: 'From £595',
  },
  {
    num: '03',
    title: 'Dermal Filler Diploma',
    duration: '3 Days',
    level: 'Beginner – Advanced',
    description:
      'Master hyaluronic acid filler placement across all facial zones — from lips and cheeks to jawline and tear trough. The most comprehensive filler programme we offer, built for lasting clinical confidence.',
    includes: [
      'Multi-zone filler techniques',
      'Vascular anatomy & emergency protocols',
      'Cannula training & blunt-tip technique',
      'Dissolution & reversal procedures',
      'Accredited certificate & insurance recognition',
    ],
    price: 'From £1,295',
  },
  {
    num: '04',
    title: 'Combination Aesthetics Programme',
    duration: '5 Days',
    level: 'All Levels',
    description:
      'Our most complete offering — combining toxin, fillers, skin-boosters, and chemical peels into a single intensive programme. The full foundation for a thriving aesthetic practice.',
    includes: [
      'All Foundation & Diploma content',
      'Chemical peel protocols',
      'Business setup & pricing guidance',
      'Ongoing mentorship access',
      'Fully accredited diploma',
    ],
    price: 'From £2,200',
  },
  {
    num: '05',
    title: 'Skin Booster & Bio-Stimulator Masterclass',
    duration: '1 Day',
    level: 'Intermediate',
    description:
      'Specialise in Profhilo, Polynucleotides, and next-generation skin-booster protocols. Precise placement for maximum dermal hydration, collagen stimulation, and visible skin quality improvement.',
    includes: [
      'Profhilo BAP technique',
      'Polynucleotide (PDRN) injection protocols',
      'Patient assessment & product selection',
      'Combination treatment planning',
    ],
    price: 'From £495',
  },
  {
    num: '06',
    title: 'The Business of Aesthetics',
    duration: '1 Day',
    level: 'All Levels',
    description:
      'Everything you need to launch, grow, and position your aesthetic clinic. From pricing strategy and client retention to social media, photography, and brand building — the commercial side of a successful practice.',
    includes: [
      'Clinic setup checklist & legal compliance',
      'Pricing strategy & package design',
      'Social media & content frameworks',
      'Client consultation & retention systems',
    ],
    price: 'From £395',
  },
];

const WHY_ITEMS = [
  {
    num: '01',
    title: 'Taught by Active Practitioners',
    text: 'Every course is led by specialists who perform these treatments in clinic daily — not educators working from theory alone.',
  },
  {
    num: '02',
    title: 'Intimate Group Sizes',
    text: 'Maximum 6 delegates per course ensures personal attention, meaningful practice time, and a genuine mentorship environment.',
  },
  {
    num: '03',
    title: 'Accredited & Insurable',
    text: 'Our programmes are recognised by leading aesthetic insurance providers so your qualification immediately supports your practice.',
  },
  {
    num: '04',
    title: 'Ongoing Mentorship',
    text: 'Training doesn\'t end in the classroom. Every graduate receives continued access to our clinical team for post-course guidance.',
  },
];

const STEPS = [
  { num: '01', title: 'Enquire', text: 'Contact us to discuss which course suits your background, experience level, and clinical goals.' },
  { num: '02', title: 'Reserve Your Place', text: 'Secure your spot with a deposit. Cohorts are small and fill quickly — early booking is advised.' },
  { num: '03', title: 'Attend & Practice', text: 'Immerse yourself in hands-on clinical training with live models under expert supervision.' },
  { num: '04', title: 'Graduate & Grow', text: 'Leave with your accredited certificate, course materials, and access to ongoing mentorship support.' },
];

export default function Services() {
  const [openCourse, setOpenCourse] = useState(null);

  return (
    <>
      <SeoHead
        title="Aesthetics Training Courses Newcastle | Professional Education"
        description="Professional aesthetics training courses for medical practitioners. Foundation injectables, dermal fillers, advanced techniques and more — delivered by Kensley Aesthetics experts in Newcastle."
        path="/training"
      />
      <PageHero
        label="Professional Education"
        title={<>Advanced Aesthetic<br />Training Programmes</>}
        subtitle="Industry-leading courses for medical practitioners who demand excellence — in technique, safety, and results."
      />

      {/* ── EDITORIAL STATEMENT ─────────────────────────────── */}
      <section className="tr-intro">
        <span className="tr-intro__label">Kensley Aesthetics — Education</span>
        <h2 className="tr-intro__statement">
          We don't just<br />practise aesthetics.<br />
          <em>We teach it.</em>
        </h2>
        <p className="tr-intro__body">
          Kensley Aesthetics offers a curated suite of professional training programmes for
          doctors, nurses, and aesthetic practitioners. Our courses fuse cutting-edge clinical
          technique with deep anatomical knowledge — delivered by specialists who perform these
          treatments every single day. Whether you are stepping into aesthetics for the first time
          or expanding an established practice, our programmes are built around one goal: lasting
          clinical confidence.
        </p>
      </section>

      {/* ── COURSES ─────────────────────────────────────────── */}
      <section className="tr-courses">
        <div className="tr-courses__top">
          <h2 className="tr-courses__heading">OUR COURSES</h2>
          <p className="tr-courses__sub">Six programmes. One standard of excellence.</p>
        </div>

        <div className="tr-courses__list">
          {COURSES.map((c, i) => (
            <div className="tr-course" key={i}>
              <button
                className="tr-course__header"
                onClick={() => setOpenCourse(openCourse === i ? null : i)}
              >
                <span className="tr-course__num">{c.num}</span>
                <span className="tr-course__title">{c.title}</span>
                <div className="tr-course__meta">
                  <span className="tr-course__level">{c.level}</span>
                  <span className="tr-course__duration">{c.duration}</span>
                  <span className="tr-course__price">{c.price}</span>
                  <span className="tr-course__toggle">{openCourse === i ? '−' : '+'}</span>
                </div>
              </button>

              <div className={`tr-course__body${openCourse === i ? ' tr-course__body--open' : ''}`}>
                <p className="tr-course__desc">{c.description}</p>
                <ul className="tr-course__includes">
                  {c.includes.map((item, j) => (
                    <li key={j} className="tr-course__include-item">
                      <span className="tr-course__include-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/book" className="tr-course__cta">
                  Enquire About This Course →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY TRAIN WITH US ────────────────────────────────── */}
      <section className="tr-why">
        <div className="tr-why__inner">
          <span className="tr-why__label">Why Choose Us</span>
          <h2 className="tr-why__heading">THE KENSLEY AESTHETICS<br />DIFFERENCE</h2>
          <div className="tr-why__grid">
            {WHY_ITEMS.map((w, i) => (
              <div className="tr-why__card" key={i}>
                <span className="tr-why__card-num">{w.num}</span>
                <h3 className="tr-why__card-title">{w.title}</h3>
                <p className="tr-why__card-text">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="tr-process">
        <h2 className="tr-process__heading">HOW IT WORKS</h2>
        <div className="tr-process__steps">
          {STEPS.map((s, i) => (
            <div className="tr-process__step" key={i}>
              <span className="tr-process__step-num">{s.num}</span>
              <h3 className="tr-process__step-title">{s.title}</h3>
              <p className="tr-process__step-text">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCTOR / QUICK CONTACT ───────────────────────────── */}
      <QuickContact />
    </>
  );
}
