import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import PageFaq from '../components/PageFaq';
import { useAppointment } from '../context/AppointmentContext';
import { HERO_PROMO } from '../data/heroPromo';
import { TEAM } from '../data/team';
import {
  WINTER_EDIT,
  WINTER_EDIT_FAQS,
  isWinterEditLive,
  gbp,
  maxSavingPercent,
} from '../data/winterEdit';
import './WinterEdit.css';

const STEPS = [
  {
    title: 'Book a consultation',
    text: 'Choose a time online or call 0333 057 0295. Your consultation is complimentary.',
  },
  {
    title: 'Your plan',
    text: 'We look at your skin, medical history and goals, and tell you honestly whether an offer treatment is right for you.',
  },
  {
    title: 'Treatment and aftercare',
    text: 'If it suits you, we book your treatment and talk you through what to expect and how to care for your skin afterwards.',
  },
];

function OfferRow({ item }) {
  return (
    <li className="we-item">
      <div className="we-item__main">
        <Link to={item.href} className="we-item__name">{item.name}</Link>
        {item.note && <span className="we-item__note">{item.note}</span>}
      </div>
      <div className="we-item__price">
        <span className="we-item__was">
          <span className="we-sr">Standard price </span>
          <del>{gbp(item.was)}</del>
        </span>
        <span className="we-item__now">
          <span className="we-sr">Winter Edit price </span>
          {gbp(item.now)}
        </span>
        <span className="we-item__save">Save {gbp(item.was - item.now)}</span>
      </div>
    </li>
  );
}

export default function WinterEdit({ initialEnded = false }) {
  const { openDrawer } = useAppointment();
  const [ended, setEnded] = useState(initialEnded);
  const hero = HERO_PROMO.image;
  const img = WINTER_EDIT.images;

  useEffect(() => {
    if (!isWinterEditLive()) setEnded(true);
  }, []);

  return (
    <>
      <SeoHead
        title="The Winter Edit: Seasonal Skin Offers | Kensley Aesthetics"
        description={`Seasonal prices on selected skin treatments at Kensley Aesthetics, Jesmond, Newcastle, until ${WINTER_EDIT.endLabel}. Each starts with a free consultation.`}
        path="/winter-edit"
      />

      {/* ── Hero (same image as the homepage banner) ── */}
      <section className="we-hero" aria-labelledby="we-title">
        <picture className="we-hero__media">
          <source
            media="(max-width: 860px)"
            srcSet={`${hero.mobile720} 720w, ${hero.mobile} 941w`}
            sizes="100vw"
          />
          <img
            src={hero.desktop}
            srcSet={`${hero.desktop1280} 1280w, ${hero.desktop} 1672w`}
            sizes="100vw"
            alt=""
            className="we-hero__img"
            width={1672}
            height={941}
            fetchPriority="high"
          />
        </picture>
        <div className="we-hero__shade" aria-hidden="true" />

        <div className="we-hero__inner">
          <p className="we-eyebrow">Seasonal offers at Kensley</p>
          <h1 className="we-hero__title" id="we-title">
            The Winter <em>Edit</em>
          </h1>
          {ended ? (
            <p className="we-hero__lead">
              The Winter Edit has now ended. Thank you to everyone who joined us. Our current
              prices are on the price list, and every treatment still starts with a
              complimentary consultation.
            </p>
          ) : (
            <>
              <p className="we-hero__offer">
                Up to <strong>{maxSavingPercent()}% off</strong> selected skin treatments
              </p>
              <p className="we-hero__lead">
                Seasonal prices on eleven of our most-requested treatments, until{' '}
                {WINTER_EDIT.endLabel}. Every treatment starts with a consultation, so we can
                check it suits you.
              </p>
            </>
          )}
          <div className="we-actions">
            <button type="button" className="we-btn we-btn--gold" onClick={openDrawer}>
              Book a consultation
            </button>
            {ended ? (
              <Link to="/prices" className="we-btn we-btn--light">View our prices</Link>
            ) : (
              <a href="#offers" className="we-btn we-btn--light">See the offers</a>
            )}
          </div>
        </div>
      </section>

      {/* ── Offers ── */}
      {!ended && (
        <section className="we-offers" id="offers" aria-labelledby="we-offers-title">
          <div className="we-inner">
            <header className="we-head">
              <h2 className="we-title" id="we-offers-title">The offers</h2>
              <p className="we-intro">
                Every treatment includes a complimentary consultation. Offers end{' '}
                {WINTER_EDIT.endLabel}.
              </p>
            </header>

            {WINTER_EDIT.groups.map((group) => (
              <div className="we-group" key={group.title}>
                <div className="we-group__media">
                  <img
                    src={group.image}
                    alt=""
                    className="we-group__img"
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    style={{ '--focus': group.focus }}
                  />
                  <h3 className="we-group__title">{group.title}</h3>
                </div>
                <ul className="we-list">
                  {group.items.map((item) => (
                    <OfferRow key={`${item.name}-${item.note}`} item={item} />
                  ))}
                </ul>
              </div>
            ))}

            <p className="we-offers__foot">
              Looking for something else? <Link to="/prices">See our full price list</Link>.
            </p>
          </div>
        </section>
      )}

      {/* ── How it works ── */}
      <section className="we-steps" aria-labelledby="we-steps-title">
        <picture className="we-steps__media">
          <img
            src={img.lounge}
            srcSet={`${img.lounge1280} 1280w, ${img.lounge} 1672w`}
            sizes="100vw"
            alt=""
            className="we-steps__img"
            width={1672}
            height={941}
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="we-steps__shade" aria-hidden="true" />
        <div className="we-inner we-steps__inner">
          <div className="we-steps__panel">
            <h2 className="we-title we-title--light" id="we-steps-title">How it works</h2>
            <ol className="we-steps__list">
              {STEPS.map((s, i) => (
                <li className="we-step" key={s.title}>
                  <span className="we-step__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="we-step__title">{s.title}</h3>
                    <p className="we-step__text">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="we-team" aria-labelledby="we-team-title">
        <div className="we-inner we-team__inner">
          <div className="we-team__copy">
            <h2 className="we-title" id="we-team-title">Who will look after you</h2>
            <p className="we-intro">
              Your treatment is carried out by one of our qualified healthcare professionals,
              each with further training in aesthetic medicine, at our clinic in Jesmond,
              Newcastle.
            </p>
            <Link to="/about" className="we-link">Meet the team</Link>
          </div>
          <ul className="we-team__grid">
            {TEAM.filter((p) => p.photo).map((p) => (
              <li className="we-team__person" key={p.slug}>
                <img
                  src={p.photo}
                  alt={`${p.name}, ${p.role} at Kensley Aesthetics`}
                  className="we-team__img"
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
                <span className="we-team__name">{p.name}</span>
                <span className="we-team__role">{p.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQs (FAQPage schema is rendered server-side in app/winter-edit/page.js) ── */}
      {!ended && (
        <PageFaq
          id="winter-edit-faq"
          eyebrow="The Winter Edit"
          title="Your questions"
          faqs={WINTER_EDIT_FAQS}
        />
      )}

      {/* ── Terms ── */}
      {!ended && (
        <section className="we-terms" aria-labelledby="we-terms-title">
          <div className="we-inner">
            <h2 className="we-terms__title" id="we-terms-title">Offer terms</h2>
            <ul className="we-terms__list">
              {WINTER_EDIT.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Closing call to action ── */}
      <section className="we-cta" aria-labelledby="we-cta-title">
        <picture className="we-cta__media">
          <img
            src={img.cta}
            srcSet={`${img.cta1280} 1280w, ${img.cta} 1914w`}
            sizes="100vw"
            alt=""
            className="we-cta__img"
            width={1914}
            height={822}
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="we-inner we-cta__inner">
          <h2 className="we-cta__title" id="we-cta-title">Start with a consultation</h2>
          <p className="we-cta__text">
            Book a complimentary consultation at our Jesmond clinic, or call us on{' '}
            <a href="tel:+443330570295">0333 057 0295</a>.
          </p>
          <button type="button" className="we-btn we-btn--gold" onClick={openDrawer}>
            Book a consultation
          </button>
        </div>
      </section>
    </>
  );
}
