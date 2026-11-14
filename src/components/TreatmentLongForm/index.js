/**
 * Building blocks for the long-form treatment pages
 * (main treatment + sub-treatment pages listed in SUB_PAGE_PARENTS).
 * Styles: ./TreatmentLongForm.css (prefix lf-).
 */
import Image from 'next/image';
import { Link } from 'react-router-dom';
import RichText from '../RichText';
import { sanityImg } from '../../utils/sanityImage';
import { subTreatmentPath } from '../../data/richTreatments';
import './TreatmentLongForm.css';

/* Booking goes to /book (same as the site's appointment buttons), as a real link. */
export function BookLink({ label, className = 'lf-btn lf-btn--dark' }) {
  return <Link to="/book" className={className}>{label || 'Book a Consultation'}</Link>;
}

/* Image, or a quiet placeholder when no image has been uploaded yet. */
export function TreatmentMedia({ image, alt, num, label, width = 960, height = 640, priority = false, className = '' }) {
  if (image) {
    return (
      <Image
        src={sanityImg(image, { width })}
        alt={alt || label || ''}
        width={width}
        height={height}
        className={`lf-media__img ${className}`}
        {...(priority ? { priority: true } : { loading: 'lazy' })}
        sizes="(max-width: 860px) 100vw, 50vw"
      />
    );
  }
  return (
    <span className={`lf-media__placeholder ${className}`} role="img" aria-label={alt || label || ''}>
      {num && <span className="lf-media__placeholder-num">{num}</span>}
      {label && <span className="lf-media__placeholder-label">{label}</span>}
    </span>
  );
}

/* Heading on the left, text on the right; alternating background. */
export function LongFormSections({ sections = [], offset = 0 }) {
  const items = (sections || []).filter((s) => s && (s.heading || s.body));
  return items.map((s, i) => (
    <section key={`${s.heading}-${i}`} className={`lf-section${(i + offset) % 2 ? ' lf-section--alt' : ''}`}>
      <div className="lf-section__inner">
        <div className="lf-section__head">
          <span className="lf-section__rule" aria-hidden="true" />
          {s.heading && <h2 className="lf-section__title">{s.heading}</h2>}
        </div>
        <div className="lf-section__body">
          <RichText text={s.body} className="rt lf-rich" />
          {s.linkLabel && s.linkUrl && (
            <Link to={s.linkUrl} className="lf-btn lf-btn--ghost lf-section__link">{s.linkLabel}</Link>
          )}
        </div>
      </div>
    </section>
  ));
}

/* One row per sub-treatment: image on one side, content on the other, alternating. */
export function TreatmentRows({ parentSlug, heading, intro, items = [] }) {
  if (!items.length) return null;
  return (
    <section className="lf-rows" id="treatments" aria-labelledby="lf-rows-title">
      <header className="lf-rows__header">
        {heading && <h2 id="lf-rows-title" className="lf-rows__title">{heading}</h2>}
        {intro && <p className="lf-rows__intro">{intro}</p>}
      </header>

      <ol className="lf-rows__list">
        {items.map((s, i) => {
          const href = subTreatmentPath(parentSlug, s.slug);
          const num = String(i + 1).padStart(2, '0');
          const title = s.cardTitle || s.name;
          return (
            <li key={s.slug} className={`lf-row${i % 2 ? ' lf-row--reverse' : ''}`}>
              <Link to={href} className="lf-row__media" tabIndex={-1} aria-hidden="true">
                <TreatmentMedia image={s.image} alt={title} num={num} label={s.name} />
              </Link>
              <div className="lf-row__content">
                <span className="lf-row__num">{num}</span>
                <h3 className="lf-row__title">
                  <Link to={href}>{title}</Link>
                </h3>
                <RichText text={s.cardBody || s.tagline} className="rt lf-rich lf-row__body" />
                <Link to={href} className="lf-btn lf-btn--dark">{s.cardLinkLabel || `Explore ${s.name}`}</Link>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

/* Closing call to action (dark band). */
export function ClosingCta({ heading, body, address, phone, label, back }) {
  if (!heading && !body) return null;
  const tel = phone ? `+44${phone.replace(/\D/g, '').replace(/^0/, '')}` : null;
  return (
    <section className="lf-cta">
      <div className="lf-cta__inner">
        {heading && <h2 className="lf-cta__title">{heading}</h2>}
        {body && <p className="lf-cta__body">{body}</p>}
        {(address || phone) && (
          <address className="lf-cta__address">
            {address && address.split('\n').filter(Boolean).map((line, i) => (
              <span key={i} className={i === 0 ? 'lf-cta__clinic' : undefined}>{line}</span>
            ))}
            {phone && (
              <span className="lf-cta__phone">
                Telephone: <a href={`tel:${tel}`}>{phone}</a>
              </span>
            )}
          </address>
        )}
        <div className="lf-cta__actions">
          <BookLink label={label} className="lf-btn lf-btn--gold" />
          {back && back.to && (
            <Link to={back.to} className="lf-btn lf-btn--outline-light">{back.label}</Link>
          )}
        </div>
      </div>
    </section>
  );
}
