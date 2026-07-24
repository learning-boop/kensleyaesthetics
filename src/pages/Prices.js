import { useState } from 'react';
import { useAppointment } from '../context/AppointmentContext';
import SeoHead from '../components/SeoHead';
import './Prices.css';

/* ── ALL TREATMENTS ──────────────────────────────────────── */
const TREATMENTS = [
  {
    id: 'anti-wrinkle',
    name: 'Anti-Wrinkle Treatments',
    intro: 'Expertly administered anti-wrinkle injections to smooth expression lines and restore a naturally refreshed appearance.',
    groups: [
      {
        label: 'Women',
        items: [
          { name: 'One Area',    standard: '£150', intro: '£130' },
          { name: 'Two Areas',   standard: '£250', intro: '£220' },
          { name: 'Three Areas', standard: '£300', intro: '£270' },
        ],
      },
      {
        label: 'Men',
        items: [
          { name: 'One Area',    standard: '£199', intro: '£170' },
          { name: 'Two Areas',   standard: '£299', intro: '£260' },
          { name: 'Three Areas', standard: '£349', intro: '£310' },
        ],
      },
      {
        label: 'Advanced',
        items: [
          { name: 'Standard Anti-Wrinkle Areas', standard: '£150', intro: '£130' },
          { name: 'Nefertiti Lift',              standard: '£350', intro: '£300' },
          { name: 'Jawline Slimming',            standard: '£350', intro: '£300' },
          { name: 'Teeth Grinding',              standard: '£350', intro: '£300' },
          { name: 'TrapTox',                     standard: '£500', intro: '£450' },
          { name: 'Migraine Treatment',          standard: '£600', intro: '£550' },
        ],
      },
    ],
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    intro: 'Premium dermal filler treatments to restore volume, define features and achieve natural-looking facial harmony.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Lips 1 ml',                  standard: '£349',      intro: '£299' },
          { name: 'Cheeks',                      standard: 'From £349', intro: 'From £299' },
          { name: 'Chin',                        standard: 'From £349', intro: 'From £299' },
          { name: 'Jawline',                     standard: 'From £349', intro: 'From £299' },
          { name: 'Nasolabial Folds',            standard: '£349',      intro: '£299' },
          { name: 'Marionette Lines',            standard: '£349',      intro: '£299' },
          { name: 'Upper Lip Lines',             standard: '£349',      intro: '£299' },
          { name: 'Temples',                     standard: '£349',      intro: '£299' },
          { name: 'Tear Trough',                 standard: '£399',      intro: '£349' },
          { name: 'Tear Trough + PRP',           standard: '£599',      intro: '£549' },
          { name: 'Non-Surgical Rhinoplasty',    standard: 'From £399', intro: 'From £349' },
          { name: 'Non-Surgical Facelift',       standard: 'From £949', intro: 'From £849' },
          { name: 'Dissolving Filler',           standard: 'From £249', intro: 'From £220' },
        ],
      },
    ],
  },
  {
    id: 'microneedling',
    name: 'Microneedling',
    intro: 'Precision microneedling to stimulate collagen production, refine skin texture and address a wide range of skin concerns.',
    groups: [
      {
        label: 'Standard',
        items: [
          { name: 'Face',                   standard: '£199', intro: '£170' },
          { name: 'Face (3 Sessions)',       standard: '£500', intro: '£425' },
          { name: 'Face & Neck',            standard: '£300', intro: '£260' },
          { name: 'Face & Neck (3 Sessions)',standard: '£750', intro: '£650' },
        ],
      },
      {
        label: 'With Calecim®',
        items: [
          { name: 'Face',                   standard: '£350',   intro: '£300' },
          { name: 'Face (3 Sessions)',       standard: '£900',   intro: '£775' },
          { name: 'Face & Neck',            standard: '£500',   intro: '£425' },
          { name: 'Face & Neck (3 Sessions)',standard: '£1,350', intro: '£1,150' },
        ],
      },
      {
        label: 'With PRP',
        items: [
          { name: 'Face',                   standard: '£500',   intro: '£425' },
          { name: 'Face (3 Sessions)',       standard: '£1,250', intro: '£1,075' },
          { name: 'Face & Neck',            standard: '£650',   intro: '£550' },
          { name: 'Face & Neck (3 Sessions)',standard: '£1,500', intro: '£1,275' },
        ],
      },
      {
        label: 'With Exosomes',
        items: [
          { name: 'Face',                   standard: '£500',   intro: '£425' },
          { name: 'Face (3 Sessions)',       standard: '£1,250', intro: '£1,075' },
          { name: 'Face & Neck',            standard: '£650',   intro: '£550' },
          { name: 'Face & Neck (3 Sessions)',standard: '£1,500', intro: '£1,275' },
        ],
      },
    ],
  },
  {
    id: 'profhilo',
    name: 'Profhilo',
    intro: 'One of the highest concentrations of hyaluronic acid available — Profhilo remodels skin from within, improving tone, texture and hydration.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Face',                                    standard: '£299', intro: '£260' },
          { name: 'Hands',                                   standard: '£299', intro: '£260' },
          { name: 'Neck',                                    standard: '£299', intro: '£260' },
          { name: 'Décolletage',                             standard: '£299', intro: '£260' },
          { name: 'Course of 3 Treatments (3 × 2 ml)',       standard: '£799', intro: '£699' },
          { name: 'Face + Hands + Neck + Décolletage (4 × 2 ml)', standard: '£999', intro: '£875' },
        ],
      },
    ],
  },
  {
    id: 'prp',
    name: 'PRP (Platelet-Rich Plasma)',
    intro: 'Harnessing your body\'s own growth factors to stimulate collagen, accelerate healing and deliver natural skin regeneration.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Face',               standard: '£350', intro: '£300' },
          { name: 'Neck',               standard: '£350', intro: '£300' },
          { name: 'Hands',              standard: '£350', intro: '£300' },
          { name: 'Décolletage',        standard: '£350', intro: '£300' },
          { name: 'Face & Neck',        standard: '£500', intro: '£425' },
          { name: 'Tear Trough',        standard: '£399', intro: '£350' },
          { name: 'PRP + Microneedling',standard: '£500', intro: '£425' },
          { name: 'Hair Loss',          standard: '£350', intro: '£300' },
          { name: '3-Session Package',  standard: '£900', intro: '£775' },
        ],
      },
    ],
  },
  {
    id: 'polynucleotides',
    name: 'Polynucleotides',
    intro: 'Cutting-edge DNA-based regenerative treatment that deeply repairs, hydrates and rejuvenates skin at a cellular level.',
    groups: [
      {
        label: 'All Areas',
        items: [
          { name: 'Face',                                    standard: '£299', intro: '£260' },
          { name: 'Eyes',                                    standard: '£299', intro: '£260' },
          { name: 'Neck',                                    standard: '£299', intro: '£260' },
          { name: 'Décolletage',                             standard: '£299', intro: '£260' },
          { name: 'Course of 3 Treatments',                  standard: '£799', intro: '£699' },
          { name: 'Face + Hands + Neck + Décolletage',       standard: '£999', intro: '£875' },
        ],
      },
    ],
  },
];

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
          <span className="price-card__price-col">Standard</span>
          <span className="price-card__price-col">Introductory</span>
        </div>
        {group.items.map((item, i) => (
          <div key={i} className="price-card__row">
            <span className="price-card__item-name">{item.name}</span>
            <span className="price-card__price-col price-card__price-col--standard">{item.standard}</span>
            <span className="price-card__price-col price-card__price-col--intro">{item.intro}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="price-card__footer">
        <p className="price-card__note">
          All prices include a complimentary consultation. A patch test is required 48 hours prior to treatment.
        </p>
        <button className="price-card__cta" onClick={openDrawer}>
          Book a Consultation
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
          Prices shown as <strong>Standard</strong> and <strong>Introductory</strong>.
          All treatments are carried out by qualified medical professionals.
          &nbsp;·&nbsp; <strong>Free consultations available.</strong>
        </span>
      </div>

      {/* All treatment cards */}
      <section className="prices-body">
        {TREATMENTS.map((t) => (
          <PriceTreatmentCard key={t.id} treatment={t} />
        ))}
      </section>
    </>
  );
}

export default Prices;
