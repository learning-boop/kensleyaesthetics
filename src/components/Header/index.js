import { useState } from 'react';
import TREATMENTS from '../../data/treatments';
import { PRIMARY_LINKS, SECONDARY_LINKS } from '../../data/links';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const close = () => { setOpen(false); setHovered(null); };

  return (
    <>
      {/* ── Fixed top bar ── */}
      <header className={`header ${open ? 'header--hidden' : ''}`}>
        <div className="header__accent-line" />
        <div className="header__bar">
          <button
            className="header__menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <span className="header__menu-label">Menu</span>
            <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>

          <a href="#top" className="header__logo">
            Creative Touch<span> Renova</span>
          </a>

          <a href="#contact" className="header__book">
            Book an Appointment
          </a>
        </div>
      </header>

      {/* ── Full-screen overlay ── */}
      <div
        className={`nav-overlay ${open ? 'nav-overlay--open' : ''}`}
        aria-modal="true"
        role="dialog"
        aria-hidden={!open}
      >
        {/* LEFT panel */}
        <div className="nav-overlay__left">

          <nav className="nav-overlay__primary">
            {TREATMENTS.map((t, i) => (
              <a
                key={t.num}
                href="#services"
                className={`nav-overlay__primary-link${hovered === t.num ? ' nav-overlay__primary-link--active' : ''}`}
                style={{ animationDelay: open ? `${i * 0.07}s` : '0s' }}
                onMouseEnter={() => setHovered(t.num)}
                onMouseLeave={() => setHovered(null)}
                onClick={close}
              >
                <span className="nav-overlay__primary-num">{t.num}</span>
                {t.label}
              </a>
            ))}
          </nav>

          <nav className="nav-overlay__secondary-nav">
            {PRIMARY_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-overlay__secondary-link"
                style={{ animationDelay: open ? `${0.38 + i * 0.05}s` : '0s' }}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-overlay__footer">
            <p className="nav-overlay__tagline">Refined to Perfection</p>
            <div className="nav-overlay__socials">
              <a href="#" onClick={close}>Instagram</a>
              <span className="nav-overlay__dot" />
              <a href="#" onClick={close}>Privacy Policy</a>
              <span className="nav-overlay__dot" />
              <a href="#" onClick={close}>Terms</a>
              <span className="nav-overlay__dot" />
              <a href="#contact" onClick={close}>Location</a>
            </div>
          </div>

        </div>

        {/* RIGHT panel */}
        <div className="nav-overlay__right">
          <button
            className="nav-overlay__close"
            onClick={close}
            aria-label="Close menu"
          >
            &#10005;
          </button>

          {TREATMENTS.map((t) => (
            <div
              key={t.num}
              className={`nav-overlay__treatment-img${hovered === t.num ? ' nav-overlay__treatment-img--visible' : ''}`}
            >
              <img src={t.image} alt={t.label} className="nav-overlay__treatment-photo" />
              <div className="nav-overlay__treatment-label">
                <span className="nav-overlay__treatment-img-num">{t.num}</span>
                <span className="nav-overlay__treatment-img-name">{t.label}</span>
              </div>
            </div>
          ))}

          <div className="nav-overlay__book-cta">
            Book an <br/> Appointment
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;
