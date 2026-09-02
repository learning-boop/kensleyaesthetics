import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';

/**
 * 404 page.
 *
 * Replaces `<Route path="*" element={<Home />} />`, which returned the full
 * homepage (with a 200 status) for every unknown URL - a classic soft-404 that
 * makes every typo and every old/incorrect link (e.g. /contact from the sitemap)
 * look like a duplicate of the homepage to Google.
 *
 * App.js:  <Route path="*" element={<NotFound />} />
 *
 * A static SPA can't return a real 404 status, so we do the next best thing:
 * distinct content + <meta name="robots" content="noindex"> + no canonical.
 * Google treats that correctly as "not a page".
 */
const POPULAR = [
  { label: 'All Treatments',          href: '/treatments' },
  { label: 'Dermal Fillers',          href: '/main-treatments/dermal-fillers' },
  { label: 'Anti-Wrinkle Treatments', href: '/main-treatments/anti-wrinkle-treatments' },
  { label: 'Skin Boosters',           href: '/main-treatments/skin-boosters' },
  { label: 'Prices',                  href: '/prices' },
  { label: 'Before & After',          href: '/gallery' },
  { label: 'About Dr Tiru Matla',     href: '/about' },
  { label: 'Blog',                    href: '/blog' },
];

export default function NotFound() {
  return (
    <main className="page-section" style={{ minHeight: '60vh', padding: '6rem 1.5rem', textAlign: 'center' }}>
      <SeoHead title="Page Not Found" description="That page doesn't exist." path="/404" noindex />

      <p style={{ letterSpacing: '.2em', textTransform: 'uppercase', fontSize: '.75rem', opacity: .6 }}>Error 404</p>
      <h1 style={{ margin: '.5rem 0 1rem' }}>We couldn't find that page</h1>
      <p style={{ maxWidth: 520, margin: '0 auto 2rem' }}>
        The link may be out of date, or the page may have moved. Here are the pages people
        visit most - or call us on <a href="tel:03334442013">0333 444 2013</a>.
      </p>

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '.75rem', justifyContent: 'center' }}>
        {POPULAR.map((p) => (
          <li key={p.href}>
            <Link to={p.href} className="mtd-btn mtd-btn--ghost">{p.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
