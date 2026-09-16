import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import './NotFound.css';

const POPULAR = [
  { label: 'Home',                    href: '/',           primary: true },
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
    <main className="nf-root">
      <SeoHead title="Page Not Found | Kensley Aesthetics" description="That page doesn't exist." path="/404" noindex />

      <p className="nf-eyebrow">Error 404</p>
      <h1 className="nf-title">We couldn't find that page</h1>
      <div className="nf-divider" />
      <p className="nf-body">
        The link may be out of date, or the page may have moved. Here are the pages
        people visit most — or call us on{' '}
        <a href="tel:03334442013">0333 444 2013</a>.
      </p>

      <ul className="nf-links">
        {POPULAR.map((p) => (
          <li key={p.href}>
            <Link to={p.href} className={`nf-link${p.primary ? ' nf-link--home' : ''}`}>
              {p.label}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
