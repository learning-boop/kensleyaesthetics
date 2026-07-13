import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import './About.css';

import drOne   from '../data/images/about/drmatla_one.png';
import drTwo   from '../data/images/about/drmatla_two.png';
import drThree from '../data/images/about/drmatla_three.png';
import imgOne   from '../data/images/about/one.png';
import imgTwo   from '../data/images/about/seven.png';
import imgThree from '../data/images/about/three.png';
import imgFour  from '../data/images/about/four.png';
import imgFive  from '../data/images/about/five.png';
import imgSix   from '../data/images/about/six.png';

const stats = [
  { num: '9+',     desc: 'Years of Expertise\n& Development' },
  { num: '9+',     desc: 'Years of\nPractice' },
  { num: '3',      desc: 'Advanced\nCertifications' },
  { num: '20+',    desc: 'Specialised Training\nCourses' },
  { num: '2,800+', desc: 'Satisfied\nClients' },
  { num: '1',      desc: 'Boutique\nClinic' },
];

const credentials = [
  'Certified by the British College of Aesthetic Medicine',
  'Member of the British Association of Cosmetic Nurses',
  'Advanced Dermal Filler & Toxin Specialist',
  'Speaker at Aesthetic Medicine Conferences',
  'Graduate of Advanced Skincare Programmes Worldwide',
  'Committed to Ongoing Professional Development',
];

const principles = [
  { num: '01', title: 'Artistry First',    text: 'We approach every face as a canvas, blending medical precision with an artist\'s eye for beauty and natural proportion.' },
  { num: '02', title: 'Your Vision',       text: 'Every treatment plan begins with listening. We collaborate with you to understand your goals before anything else.' },
  { num: '03', title: 'Lasting Results',   text: 'We favour techniques that age gracefully, building long-term skin health and natural enhancement over time.' },
  { num: '04', title: 'Continued Care',    text: 'Our relationship doesn\'t end after treatment. Ongoing support and follow-ups are part of every experience.' },
];

const whyItems = [
  { q: 'A Personalised Approach for Every Client',    a: 'We begin every consultation by listening. Your goals, your face, your skin — every plan is built around you, never a template.' },
  { q: 'Expertise in Natural-Looking Results',        a: 'Our philosophy is to enhance what makes you unique, not alter it. Subtlety and precision are the hallmarks of every treatment.' },
  { q: 'Advanced, Safe Techniques Only',              a: 'We use only clinically proven, gold-standard methods. Safety is never compromised, and every procedure is backed by evidence.' },
  { q: 'Ongoing Post-Treatment Support',              a: 'Our relationship does not end when you leave the clinic. Follow-up care and ongoing guidance are built into every client journey.' },
  { q: 'A Private, Boutique Environment',             a: 'We offer a calm, discreet space where you can speak openly and be treated with the highest level of personal care.' },
  { q: 'Results That Complement Your Natural Beauty', a: 'We believe the best aesthetic work is the kind no one else notices — except you, when you see yourself in the mirror.' },
];

function About() {
  const [openItem, setOpenItem] = useState(null);

  /* ── HERO: opposite-direction slow parallax ─────────────── */
  const { scrollY } = useScroll();
  const heroPhotoY = useTransform(scrollY, [0, 900], [0, -220]);
  const quoteImgY  = useTransform(scrollY, [0, 900], [0,  220]);

  /* ── STAT HERO: scroll-triggered zoom in/out ────────────── */
  const statRef = useRef(null);
  const { scrollYProgress: statProg } = useScroll({ target: statRef, offset: ['start end', 'end start'] });
  const statScale = useTransform(statProg, [0, 0.5, 1], [1.0, 1.4, 1.0]);

  /* ── STATS: parallax on side image ─────────────────────── */
  const statsRef = useRef(null);
  const { scrollYProgress: statsProg } = useScroll({ target: statsRef, offset: ['start end', 'end start'] });
  const statsImgY = useTransform(statsProg, [0, 1], [140, -140]);

  /* ── EXPERIENCE: scroll-reveal parallax ────────────────── */
  const expRef = useRef(null);
  const { scrollYProgress: expProg } = useScroll({ target: expRef, offset: ['start end', 'end start'] });
  const expImgY     = useTransform(expProg, [0, 1], [180, -180]);
  const expOpacity  = useTransform(expProg, [0, 0.2, 1], [0, 1, 1]);

  /* ── PHILOSOPHY: cinematic editorial ───────────────────── */
  const philoRef = useRef(null);
  const { scrollYProgress: philoProg } = useScroll({ target: philoRef, offset: ['start end', 'end start'] });
  const philoScale  = useTransform(philoProg, [0, 0.5, 1], [1.0, 1.28, 1.0]);
  const philoImgY   = useTransform(philoProg, [0, 1], [120, -120]);
  const philoInsetY = useTransform(philoProg, [0, 1], [-100, 100]);

  /* ── WHY CHOOSE: opposite-direction parallax ────────────── */
  const whyRef = useRef(null);
  const { scrollYProgress: whyProg } = useScroll({ target: whyRef, offset: ['start end', 'end start'] });
  const whyLeftY  = useTransform(whyProg, [0, 1], [180, -180]);
  const whyRightY = useTransform(whyProg, [0, 1], [-180, 180]);

  /* ── CTA: cinematic zoom ────────────────────────────────── */
  const ctaRef = useRef(null);
  const { scrollYProgress: ctaProg } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] });
  const ctaScale = useTransform(ctaProg, [0, 0.5, 1], [1.0, 1.3, 1.0]);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="ab-hero-wrap">
        <section className="ab-hero">
          <div className="ab-hero__name-bg">DR. MATLA</div>
          <span className="ab-hero__role">Aesthetic<br />Practitioner</span>
          <div className="ab-hero__photo-wrap">
            <motion.img
              src={drOne}
              alt="Kensley Aesthetics Practitioner"
              className="ab-hero__photo"
              style={{ y: heroPhotoY }}
            />
          </div>
        </section>

        {/* ── QUOTE ────────────────────────────────────────── */}
        <section className="ab-quote">
          <div className="ab-quote__inner">
            <div className="ab-quote__left">
              <span className="ab-quote__marks">"</span>
              <p className="ab-quote__text">
                There is no limit to beauty.<br />
                These words speak of artistry, but also<br />
                of expertise. For over 15 years, I have been<br />
                perfecting my craft to reveal your natural<br />
                beauty in perfect harmony.
              </p>
            </div>
            <motion.img
              src={imgTwo}
              alt="Aesthetic treatment"
              className="ab-quote__img"
              style={{ y: quoteImgY }}
            />
          </div>
        </section>
      </div>

      {/* ── FEATURED STAT ────────────────────────────────── */}
      <section className="ab-stat-hero" ref={statRef}>
        <span className="ab-stat-hero__label">Clients<br />Transformed</span>
        <span className="ab-stat-hero__number">2,800<sup>+</sup></span>
        <div className="ab-stat-hero__photo-wrap">
          <motion.img
            src={imgOne}
            alt="Dr. Sophia in clinic"
            className="ab-stat-hero__photo"
            style={{ scale: statScale }}
          />
        </div>
      </section>

      {/* ── STATS GRID ───────────────────────────────────── */}
      <section className="ab-stats" ref={statsRef}>
        <div className="ab-stats__inner">
          <div className="ab-stats__img-wrap">
            <motion.img
              src={imgSix}
              alt="Expert hands"
              className="ab-stats__img ab-stats__img--parallax"
              style={{ y: statsImgY }}
            />
          </div>
          <div className="ab-stats__grid">
            {stats.map((s) => (
              <div className="ab-stats__item" key={s.desc}>
                <div className="ab-stats__num">{s.num}</div>
                <div className="ab-stats__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────── */}
      <section className="ab-experience" ref={expRef}>
        <div className="ab-experience__inner">
          <span className="ab-experience__vert-text">Expertise &amp; Artistry</span>
          <div className="ab-experience__photo-wrap">
            <motion.img
              src={drTwo}
              alt="Kensley Aesthetics Practitioner"
              className="ab-experience__photo"
              style={{ y: expImgY, opacity: expOpacity }}
            />
          </div>
          <div className="ab-experience__cards">
            {credentials.map((c, i) => (
              <div className="ab-experience__card" key={i}>
                <p className="ab-experience__card-text">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────── */}
      <section className="ab-philosophy" ref={philoRef}>
        <div className="ab-philosophy__inner">
          <div className="ab-philosophy__header">
            <h2 className="ab-philosophy__title">Our<br />Philosophy</h2>
            <div className="ab-philosophy__subtitle-block">
              <span className="ab-philosophy__subtitle-label">Of an expert practitioner</span>
              <p className="ab-philosophy__subtitle">
                Meet Your Beauty Goals<br />
                With Artistry &amp; Care
              </p>
            </div>
          </div>

          <div className="ab-philosophy__content">
            <div className="ab-philosophy__quote-block">
              <span className="ab-philosophy__quote-marks">"</span>
              <p className="ab-philosophy__quote-text">
                I use only safe, effective, and personalised techniques for each client.
                Before any treatment, I spend time understanding your goals to ensure
                the outcome feels authentically right for you.
                These results can be truly transformative.
              </p>
              {/* <div className="ab-philosophy__principles">
                {principles.map((p) => (
                  <div className="ab-philosophy__principle" key={p.num}>
                    <span className="ab-philosophy__principle-num">{p.num}</span>
                    <h3 className="ab-philosophy__principle-title">{p.title}</h3>
                    <p className="ab-philosophy__principle-text">{p.text}</p>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="ab-philosophy__images">
              <div className="ab-philosophy__img-main-wrap">
                <motion.img
                  src={imgTwo}
                  alt="Treatment"
                  className="ab-philosophy__img-main"
                  style={{ scale: philoScale, y: philoImgY }}
                />
              </div>
              <motion.img
                src={imgFour}
                alt="Natural beauty"
                className="ab-philosophy__img-inset"
                style={{ y: philoInsetY }}
              />
              <div className="ab-philosophy__deco-bar" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────────── */}
      <section className="ab-why" ref={whyRef}>
        {/* split image row */}
        <div className="ab-why__split">
          <div className="ab-why__split-left">
            <p className="ab-why__split-quote">
              Each practitioner sees beauty through their own lens
              and may focus on specific areas of expertise.
              These insights will help you choose
              a clinic you can trust with your beauty and health.
            </p>
            <div className="ab-why__split-img-wrap">
              <motion.img
                src={imgThree}
                alt="Treatment"
                className="ab-why__split-img"
                style={{ y: whyLeftY }}
              />
            </div>
          </div>
          <div className="ab-why__split-right">
            <motion.img
              src={imgFive}
              alt="Natural beauty"
              className="ab-why__split-photo"
              style={{ y: whyRightY }}
            />
          </div>
        </div>

        {/* accordion row */}
        <div className="ab-why__accordion-section">
          <div className="ab-why__accordion-inner">
            <h2 className="ab-why__accordion-title">
              Why Choose Kensley Aesthetics
            </h2>
            <div className="ab-why__items">
              {whyItems.map((item, i) => (
                <div className="ab-why__item" key={i}>
                  <button
                    className="ab-why__item-btn"
                    onClick={() => setOpenItem(openItem === i ? null : i)}
                  >
                    {item.q.toUpperCase()}
                    <span className="ab-why__item-icon">{openItem === i ? '−' : '+'}</span>
                  </button>
                  <div className={`ab-why__item-content${openItem === i ? ' ab-why__item-content--open' : ''}`}>
                    <p className="ab-why__item-text">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOK A VISIT CTA ─────────────────────────────── */}
      <section className="ab-cta" ref={ctaRef}>
        <div className="ab-cta__img-wrap">
          <motion.img
            src={drThree}
            alt="Kensley Aesthetics Practitioner"
            className="ab-cta__img"
            style={{ scale: ctaScale }}
          />
        </div>
        <div className="ab-cta__right">
          <h2 className="ab-cta__title">Book<br />A Visit</h2>
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}

export default About;
