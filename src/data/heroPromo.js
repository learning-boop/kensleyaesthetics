/**
 * Homepage hero — second slide (seasonal offer).
 *
 * Turn the slide off with `enabled: false`. It also hides itself
 * automatically once the Winter Edit end date has passed
 * (dates live in src/data/winterEdit.js, the single source of truth).
 *
 * ASA / CAP rules for cosmetic-treatment offers:
 *  - no "Black Friday", urgency wording or countdowns
 *  - never name or advertise prescription-only medicines (e.g. Botox)
 *  - "up to 50%" must apply to a fair share of the offers, not one item
 *  - keep the closing date visible in `terms`
 */
import { WINTER_EDIT } from './winterEdit';

export const HERO_PROMO = {
  enabled: true,
  endsAt: WINTER_EDIT.endsAt,

  eyebrow: 'Seasonal offers at Kensley',
  title: 'The Winter',
  titleAccent: 'Edit',
  offer: { lead: 'Up to', highlight: '50% off', rest: 'selected treatments' },
  text: 'Considered treatments for the season ahead, each starting with a consultation.',

  // A `to` makes a link; no `to` opens booking.
  primary: { label: 'Explore the offers', to: '/winter-edit' },
  secondary: { label: 'Book a consultation' },

  terms: `Offers end ${WINTER_EDIT.endLabel}. Selected treatments only, subject to consultation and suitability.`,

  image: {
    desktop: '/images/promo/kensley-winter-edit-desktop.webp', // 1672 × 941
    desktop1280: '/images/promo/kensley-winter-edit-desktop-1280.webp',
    mobile: '/images/promo/kensley-winter-edit-mobile.webp', // 941 × 1672
    mobile720: '/images/promo/kensley-winter-edit-mobile-720.webp',
  },

  // Label for the slide dot (screen readers)
  label: 'Winter Edit offer',
};

/** True while the promo is switched on and its end date has not passed. */
export function isPromoLive(promo = HERO_PROMO, now = Date.now()) {
  if (!promo || !promo.enabled) return false;
  const end = promo.endsAt ? Date.parse(promo.endsAt) : NaN;
  return Number.isNaN(end) || now <= end;
}
