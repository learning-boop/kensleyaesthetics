import { Link } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
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
  const { openDrawer } = useAppointment();

  return (
    <footer className="ft-root">
      <div className="ft-inner">

        {/* ── Brand display ── */}
        <div className="ft-brand-block">
          <h2 className="ft-brand-name">Kensley Aesthetics</h2>
          <p className="ft-brand-tagline">
            Beauty Refined &nbsp;&middot;&nbsp; Confidence Restored
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
            <h4 className="ft-col-heading">Pages</h4>
            <ul className="ft-col-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/gallery">Before &amp; After</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/locations">Locations</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-heading">Contact</h4>
            <ul className="ft-col-links">
              <li><a href="mailto:hello@kensleyaesthetics.com">hello@kensleyaesthetics.com</a></li>
              <li><a href="tel:03334442013">0333 444 2013</a></li>
              <li>Old Brewery Court, 156 Sandyford Rd,<br />Jesmond, Newcastle upon Tyne, NE2 1XG</li>
            </ul>
            <button onClick={openDrawer} className="ft-book-btn">Book an Appointment</button>
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
            <a href="https://wa.me/447920699154" target="_blank" rel="noopener noreferrer" className="ft-social-icon" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.12 1.524 5.854L0 24l6.302-1.494A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.034-1.385l-.36-.214-3.735.885.918-3.645-.235-.374A9.818 9.818 0 1 1 12 21.818z" />
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
