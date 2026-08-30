import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'Treatments',   href: '/treatments' },
  { label: 'Prices',       href: '/prices' },
  { label: 'Results',      href: '/gallery' },
  { label: 'Reviews',      href: '/testimonials' },
  { label: 'About',        href: '/about' },
  { label: 'Blog',         href: '/blog' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDrawer } = useAppointment();

  return (
    <>
      <header className="header">
        {/* Founder endorsement bar */}
        <div className="header__endorsement">
          <span className="header__endorsement-left">
            A new face-focused aesthetics clinic, founded and clinically led by Dr. Tiru Matla
          </span>
          <span className="header__endorsement-right">
            20+ Years Medical Experience&nbsp;&nbsp;·&nbsp;&nbsp;Doctor-Led Care&nbsp;&nbsp;·&nbsp;&nbsp;Newcastle
          </span>
        </div>

        <div className="header__accent-line" />

        <div className="header__bar">

          {/* Logo — left corner */}
          <Link to="/" className="header__logo" onClick={() => setMobileOpen(false)}>
            <img src="/assets/renova_logo_withoutbg.png" alt="Kensley Aesthetics" className="header__logo-img" />
            <span className="header__logo-sub">Founded by Dr. Tiru Matla</span>
          </Link>

          {/* Desktop nav links */}
          <nav className="header__nav">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} to={link.href} className="header__nav-link">
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="header__actions">
            <button className="header__book" onClick={() => { setMobileOpen(false); openDrawer(); }}>
              Book
            </button>
            <button
              className="header__mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <span className={`header__ham ${mobileOpen ? 'header__ham--open' : ''}`} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile slide-down menu */}
      <div className={`header__mobile-menu ${mobileOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.href} className="header__mobile-link" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="header__mobile-book" onClick={() => { setMobileOpen(false); openDrawer(); }}>
          Book a Consultation
        </button>
      </div>

      {/* Sticky mobile bottom CTA — always visible on mobile */}
      <div className="header__sticky-cta">
        <a href="tel:+447920699154" className="header__sticky-call-btn">
          <svg className="header__sticky-call-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call Us Today
        </a>
        <button className="header__sticky-cta-btn" onClick={openDrawer}>
          Book a Consultation
        </button>
      </div>
    </>
  );
}

export default Header;
