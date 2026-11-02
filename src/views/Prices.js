import { useState } from 'react';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import { PRICE_TREATMENTS as TREATMENTS } from '../data/prices';
import PageFaq from '../components/PageFaq';
import { PRICES_FAQS } from '../data/pageFaqs';
import './Prices.css';

/* ── Price card component ────────────────────────────────── */
function PriceTreatmentCard({ treatment }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const { openDrawer } = useAppointment();

  const group = treatment.groups[activeGroup];

  return (
    <article className="price-card">
      {/* Header */}
      <div className="price-card__header">
        <span className="price-card__label">Treatment Pricing</span>
        <h2 className="price-card__name">{treatment.name}</h2>
        <p className="price-card__intro">{treatment.intro}</p>
      </div>

      {/* Group tabs — only if more than one group */}
      {treatment.groups.length > 1 && (
        <div className="price-card__tabs">
          {treatment.groups.map((g, i) => (
            <button
              key={g.label}
              className={`price-card__tab ${activeGroup === i ? 'price-card__tab--active' : ''}`}
              onClick={() => setActiveGroup(i)}
            >
              {g.label}
            </button>
          ))}
        </div>
      )}

      {/* Price table */}
      <div className="price-card__table">
        <div className="price-card__row price-card__row--head">
          <span className="price-card__item-name">Treatment</span>
          <span className="price-card__price-col">Price</span>
        </div>
        {group.items.map((item, i) => (
          <div key={i} className="price-card__row">
            <span className="price-card__item-name">{item.name}</span>
            <span className="price-card__price-col price-card__price-col--standard">{item.standard}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="price-card__footer">
        <p className="price-card__note">
          All prices include a complimentary consultation. A patch test is required 48 hours prior to treatment.
        </p>
        <button className="price-card__cta" onClick={openDrawer}>
          Schedule Your Consultation
        </button>
      </div>
    </article>
  );
}

/* ── Page ────────────────────────────────────────────────── */
function Prices() {
  return (
    <>
      <SeoHead
        title="Treatment Prices | Kensley Aesthetics Newcastle"
        description="Transparent pricing for all aesthetic treatments at Kensley Aesthetics, Newcastle. Anti-wrinkle, dermal fillers, Profhilo, PRP, microneedling and more."
        path="/prices"
      />

      {/* Hero */}
      <section className="prices-hero">
        <div className="prices-hero__inner">
          <span className="prices-hero__label">Kensley Aesthetics</span>
          <h1 className="prices-hero__title">Treatment<br /><em>Prices</em></h1>
          <p className="prices-hero__sub">
            Transparent, straightforward pricing — because clarity is part of the care.
          </p>
        </div>
        <div className="prices-hero__bar" aria-hidden="true" />
      </section>

      {/* Notice */}
      <div className="prices-notice">
        <span className="prices-notice__text">
          All treatments performed by Dr Tiru Matla.&nbsp;·&nbsp;
          <strong>Free consultations available.</strong>
        </span>
      </div>

      {/* All treatment cards */}
      <section className="prices-body">
        {TREATMENTS.map((t) => (
          <PriceTreatmentCard key={t.id} treatment={t} />
        ))}
      </section>

      {/* FAQ — Q13 (AEO/GEO handoff); schema rendered in app/prices/page.js */}
      <PageFaq
        id="prices-faq"
        eyebrow="Pricing Questions"
        title="Treatment Costs Explained"
        faqs={PRICES_FAQS}
      />
    </>
  );
}

export default Prices;
