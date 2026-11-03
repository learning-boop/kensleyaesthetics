/**
 * Homepage hero — Black Friday slide (shown FIRST while the offer runs).
 *
 * Turn the slide off with `enabled: false`. It also hides itself
 * automatically once the offer's end date has passed
 * (`endsAt` in src/data/winterEdit.js — used internally only, never shown).
 *
 * Wording reminders for cosmetic-treatment offers (ASA / CAP):
 *  - no urgency wording or countdown timers ("hurry", "today only")
 *  - never name or advertise prescription-only medicines (e.g. Botox)
 *  - "up to 50%" must apply to a fair share of the offers, not one item
 */
import { WINTER_EDIT } from './winterEdit';

export const HERO_PROMO = {
  enabled: true,
  endsAt: WINTER_EDIT.endsAt,

  eyebrow: '', // small line above the title; left empty on purpose
  title: 'Black Friday',
  titleAccent: 'at Kensley',
  offer: { lead: 'Up to', highlight: '50% off', rest: 'selected treatments' },
  text: 'Considered treatments for the season ahead, each starting with a consultation.',

  // A `to` makes a link; no `to` opens booking.
  primary: { label: 'Explore the offers', to: '/black-friday' },
  secondary: { label: 'Book a consultation' },

  terms: '', // no small print on the banner (clinic's decision)

  image: {
    desktop: '/images/promo/kensley-winter-edit-desktop.webp', // 1672 × 941
    desktop1280: '/images/promo/kensley-winter-edit-desktop-1280.webp',
    mobile: '/images/promo/kensley-winter-edit-mobile.webp', // 941 × 1672
    mobile720: '/images/promo/kensley-winter-edit-mobile-720.webp',
  },

  // Label for the slide dot (screen readers)
  label: 'Black Friday offers',
};

/** True while the promo is switched on and its end date has not passed. */
export function isPromoLive(promo = HERO_PROMO, now = Date.now()) {
  if (!promo || !promo.enabled) return false;
  const end = promo.endsAt ? Date.parse(promo.endsAt) : NaN;
  return Number.isNaN(end) || now <= end;
}
