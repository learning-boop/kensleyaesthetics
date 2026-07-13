import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTreatments } from '../../context/TreatmentsContext';
import { useAppointment } from '../../context/AppointmentContext';
import { client, MAIN_TREATMENTS_QUERY } from '../../lib/sanityClient';
import './Header.css';

const MAIN_TREATMENTS = [
  { num: '01', label: 'Anti-Wrinkle Treatments', href: '/main-treatments/anti-wrinkle-treatments' },
  { num: '02', label: 'Dermal Fillers',           href: '/main-treatments/dermal-fillers' },
  { num: '03', label: 'Skin Boosters',            href: '/main-treatments/skin-boosters' },
  { num: '04', label: 'Regenerative Treatments',  href: '/main-treatments/regenerative-treatments' },
  { num: '05', label: 'Biostimulators',           href: '/main-treatments/biostimulators' },
  { num: '06', label: 'Microneedling',            href: '/main-treatments/microneedling' },
  { num: '07', label: 'RF Microneedling',         href: '/main-treatments/rf-microneedling' },
  { num: '08', label: 'HIFU',                     href: '/main-treatments/hifu' },
]

const BOTTOM_NAV = [
  { label: 'Home',           href: '/' },
  { label: 'About',          href: '/about' },
  { label: 'Training',       href: '/training' },
  { label: 'Before & After', href: '/gallery' },
  { label: 'Contact',        href: '/contact' },
]

function Header() {
  const [open, setOpen]             = useState(false);
  const [activeMain, setActiveMain] = useState(null);
  const [activePkg, setActivePkg]   = useState(null);
  const [mainTreatments, setMainTreatments] = useState([]);
  const navigate                    = useNavigate();
  const { treatments }              = useTreatments();
  const { openDrawer }              = useAppointment();

  useEffect(() => {
    client.fetch(MAIN_TREATMENTS_QUERY).then(setMainTreatments);
  }, []);

  const close = () => { setOpen(false); setActiveMain(null); setActivePkg(null); };
  const go    = (href) => { close(); navigate(href); };

  // Right panel image: main treatment hover → mainTreatment image
  //                    package hover        → signature package image
  //                    default              → hero model
  const panelImage =
    activeMain !== null && mainTreatments[activeMain]?.image
      ? mainTreatments[activeMain].image
      : activePkg !== null && treatments[activePkg]?.image
        ? treatments[activePkg].image
        : '/assets/home_model.png';

  return (
    <>
      {/* ── Fixed top bar ─────────────────────────────────────── */}
      <header className={`header ${open ? 'header--hidden' : ''}`}>
        <div className="header__accent-line" />
        <div className="header__bar">
          <button className="header__menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
            <span className="header__menu-label">Menu</span>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          <Link to="/" className="header__logo" onClick={close}>
            <img src="/assets/renova_logo_withoutbg.png" alt="Kensley Aesthetics" className="header__logo-img" />
          </Link>
          <button className="header__book" onClick={() => { close(); openDrawer(); }}>
            Book an Appointment
          </button>
        </div>
      </header>

      {/* ── Full-screen overlay ───────────────────────────────── */}
      <div
        className={`nav-overlay ${open ? 'nav-overlay--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >

        {/* ── LEFT: Main Treatments ── */}
        <div className="nav-overlay__left">

          <div className="nav-overlay__logo">
            <img src="/assets/renova_logo_withoutbg.png" alt="Kensley Aesthetics" className="nav-overlay__logo-img" />
          </div>

          <div className="nav-overlay__section">
            <p className="nav-overlay__section-label">Main Treatments</p>
            <nav className="nav-overlay__main-list">
              {MAIN_TREATMENTS.map((t, i) => (
                <button
                  key={t.num}
                  className={`nav-overlay__main-item${activeMain === i ? ' nav-overlay__main-item--active' : ''}`}
                  style={{ animationDelay: open ? `${i * 0.055}s` : '0s' }}
                  onMouseEnter={() => setActiveMain(i)}
                  onMouseLeave={() => setActiveMain(null)}
                  onClick={() => go(t.href)}
                >
                  <span className="nav-overlay__main-num">{t.num}</span>
                  <span className="nav-overlay__main-label">{t.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <nav className="nav-overlay__bottom-nav">
            {BOTTOM_NAV.map((link) => (
              <button key={link.label} className="nav-overlay__bottom-link" onClick={() => go(link.href)}>
                {link.label}
              </button>
            ))}
          </nav>

        </div>

        {/* ── MIDDLE: Signature Programmes ── */}
        <div className="nav-overlay__middle">

          <div className="nav-overlay__section nav-overlay__section--packages">
            <p className="nav-overlay__section-label">Signature Programmes</p>
            <nav className="nav-overlay__pkg-list">
              {treatments.map((t, i) => (
                <button
                  key={t.slug}
                  className="nav-overlay__pkg-item"
                  style={{ animationDelay: open ? `${0.08 + i * 0.055}s` : '0s' }}
                  onMouseEnter={() => setActivePkg(i)}
                  onMouseLeave={() => setActivePkg(null)}
                  onClick={() => go(`/treatments/${t.slug}`)}
                >
                  <span className="nav-overlay__pkg-num">{t.num}</span>
                  <span className="nav-overlay__pkg-content">
                    <span className="nav-overlay__pkg-title">{t.label}</span>
                    <span className="nav-overlay__pkg-sub">{t.tagline}</span>
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <button className="nav-overlay__book-btn" onClick={() => go('/contact')}>
            Book an Appointment <span className="nav-overlay__book-arrow">→</span>
          </button>

        </div>

          <button className="nav-overlay__close" onClick={close} aria-label="Close menu">
            ✕
          </button>

        {/* ── Mobile scroll hint ── */}
        <div className="nav-scroll-hint" aria-hidden="true">
          <span className="nav-scroll-hint__text">Scroll to see all options</span>
          <span className="nav-scroll-hint__arrow">↓</span>
        </div>
        {/* ── RIGHT: Image panel ── */}
        <div className="nav-overlay__image-panel">
          <img
            src={panelImage}
            alt="Treatment"
            className="nav-overlay__panel-img"
          />
        </div>

        {/* ── FOOTER BAR ── */}
        <div className="nav-overlay__footer-bar">
          <span className="nav-overlay__footer-tagline">Regenerate. Restore. Refined.</span>
          <div className="nav-overlay__footer-links">
            <button onClick={close}>Instagram</button>
            <span className="nav-overlay__footer-dot">·</span>
            <button onClick={() => go('/privacy-policy')}>Privacy Policy</button>
            <span className="nav-overlay__footer-dot">·</span>
            <button onClick={() => go('/terms')}>Terms</button>
            <span className="nav-overlay__footer-dot">·</span>
            <button onClick={() => go('/contact')}>Location</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;
