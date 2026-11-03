import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { Link } from 'react-router-dom';
import { client, MAIN_TREATMENTS_QUERY } from '../../lib/sanityClient';
import { sanityImg } from '../../utils/sanityImage';
import { useAppointment } from '../../context/AppointmentContext';
import './showcase.css';

/* Homepage treatments — simple card grid (replaced the horizontal scroller, Nov 2026).
   Shows the first 8 main treatments in Sanity order. */
const MAX_CARDS = 8;

export function toShowcaseCards(data = []) {
  return (data || [])
    .filter((t) => t && t.slug && t.slug !== 'regenerative-treatments')
    .slice(0, MAX_CARDS)
    .map((t) => ({
      slug: t.slug,
      title: t.label,
      summary: t.tagline || t.description || '',
      image: t.image || '',
    }));
}

function TreatmentCard({ t }) {
  const img = sanityImg(t.image, { width: 640 });
  return (
    <li className="tc-card">
      <Link to={`/main-treatments/${t.slug}`} className="tc-card__link">
        <div className="tc-card__media">
          {img && (
            <NextImage
              src={img}
              alt={t.title}
              className="tc-card__img"
              width={640}
              height={640}
              loading="lazy"
              sizes="(max-width: 860px) 50vw, 25vw"
            />
          )}
        </div>
        <div className="tc-card__body">
          <h3 className="tc-card__title">{t.title}</h3>
          {t.summary && <p className="tc-card__summary">{t.summary}</p>}
          <span className="tc-card__more">Explore treatment</span>
        </div>
      </Link>
    </li>
  );
}

function TreatmentShowcase({ initialTreatments = null }) {
  const { openDrawer } = useAppointment();
  const [cards, setCards] = useState(() => toShowcaseCards(initialTreatments || []));

  useEffect(() => {
    if (initialTreatments && initialTreatments.length) return; // rendered at build time
    client
      .fetch(MAIN_TREATMENTS_QUERY)
      .then((data) => setCards(toShowcaseCards(data)))
      .catch((err) => console.error('TreatmentShowcase fetch error:', err));
  }, [initialTreatments]);

  return (
    <section className="tc-section" aria-labelledby="tc-title">
      <div className="tc-inner">
        <div className="tc-head">
          <div>
            <h2 className="tc-title" id="tc-title">Our treatments</h2>
            <p className="tc-intro">
              Non-surgical treatments for the face and skin, each starting with a consultation
              at our clinic in Jesmond, Newcastle.
            </p>
          </div>
          <div className="tc-head__actions">
            <Link to="/treatments" className="tc-btn tc-btn--line">View all treatments</Link>
            <button type="button" className="tc-btn tc-btn--navy" onClick={openDrawer}>
              Book a consultation
            </button>
          </div>
        </div>

        <ul className="tc-grid">
          {cards.map((t) => (
            <TreatmentCard key={t.slug} t={t} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TreatmentShowcase;
