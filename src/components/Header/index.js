import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppointment } from '../../context/AppointmentContext';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home',           href: '/' },
  { label: 'Treatment',      href: '/treatments' },
  { label: 'Treatment Plan', href: '/treatment-plan' },
  { label: 'Before & After', href: '/gallery' },
  { label: 'About',          href: '/about' },
  { label: 'Blogs',          href: '/blog' },
  { label: 'FAQs',           href: '/faq' },
  { label: 'Contact Us',     href: '/contact' },
  { label: 'Training',       href: '/training' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { openDrawer } = useAppointment();

  const go = (href) => { setMobileOpen(false); navigate(href); };

  return (
    <>
      <header className="header">
        <div className="header__accent-line" />
        <div className="header__bar">

          {/* Logo — left corner */}
          <Link to="/" className="header__logo" onClick={() => setMobileOpen(false)}>
            <img src="/assets/renova_logo_withoutbg.png" alt="Kensley Aesthetics" className="header__logo-img" />
          </Link>

          {/* Desktop nav links */}
          <nav className="header__nav">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className="header__nav-link"
                onClick={() => navigate(link.href)}
              >
                {link.label}
              </button>
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
            <button key={link.href} className="header__mobile-link" onClick={() => go(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>
        <button className="header__mobile-book" onClick={() => { setMobileOpen(false); openDrawer(); }}>
          Book an Appointment
        </button>
      </div>
    </>
  );
}

export default Header;
