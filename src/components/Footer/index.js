import { Link } from 'react-router-dom';
import { useTreatments } from '../../context/TreatmentsContext';
import './Footer.css';

const MAIN_TREATMENTS = [
  { label: 'Anti-Wrinkle Treatments', href: '/main-treatments/anti-wrinkle-treatments' },
  { label: 'Dermal Fillers',           href: '/main-treatments/dermal-fillers' },
  { label: 'Skin Boosters',            href: '/main-treatments/skin-boosters' },
  { label: 'Regenerative Treatments',  href: '/main-treatments/regenerative-treatments' },
  { label: 'Biostimulators',           href: '/main-treatments/biostimulators' },
  { label: 'Microneedling',            href: '/main-treatments/microneedling' },
  { label: 'RF Microneedling',         href: '/main-treatments/rf-microneedling' },
  { label: 'HIFU',                     href: '/main-treatments/hifu' },
];

function Footer() {
  const { treatments } = useTreatments();
  return (
    <footer className="ft-root">
      <div className="ft-inner">

        {/* ── Brand display ── */}
        <div className="ft-brand-block">
          <h2 className="ft-brand-name">Kensley Aesthetics</h2>
          <p className="ft-brand-tagline">
            Artistry meets expertise &mdash; every treatment, a masterpiece crafted just for you
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Four columns ── */}
        <div className="ft-cols">

          <div className="ft-col">
            <h4 className="ft-col-heading">Main Treatments</h4>
            <ul className="ft-col-links">
              {MAIN_TREATMENTS.map((t) => (
                <li key={t.href}>
                  <Link to={t.href}>{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-heading">Signature Programmes</h4>
            <ul className="ft-col-links">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`}>{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-heading">Pages</h4>
            <ul className="ft-col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/treatments">Treatment</Link></li>
              <li><Link to="/gallery">Before &amp; After</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blogs</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/training">Training</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-heading">Contact</h4>
            <ul className="ft-col-links">
              <li><a href="mailto:hello@kensleyaesthetics.co.uk">hello@kensleyaesthetics.co.uk</a></li>
              <li><a href="tel:07906991540">07906 99154</a></li>
              <li>Newcastle upon Tyne, United Kingdom</li>
            </ul>
            <Link to="/contact" className="ft-book-btn">Book an Appointment</Link>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">

          <div className="ft-social">
            <a href="https://www.instagram.com/kensleyaesthetics/" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591977870031" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@kensleyaesthetics" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/kensleyaesthetics" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCXApmZZivbQBNgQymp9dE6w" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <div className="ft-copy-block">
            <p className="ft-copy">
              &copy; {new Date().getFullYear()} Kensley Aesthetics
            </p>
            <p className="ft-credit">
              Design &amp; Development &amp; SEO by{' '}
              <a href="https://creatorstouchglobal.com" target="_blank" rel="noopener noreferrer">
                Creator Touch
              </a>
            </p>
          </div>

          <div className="ft-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
