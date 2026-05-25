import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TREATMENTS from '../../data/treatments';
import { PRIMARY_LINKS } from '../../data/links';
import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const close = () => { setOpen(false); setHovered(null); };

  const handleNavClick = (href) => {
    close();
    navigate(href);
  };

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

          <Link to="/" className="header__logo" onClick={close}>
            Creative Touch<span> Renova</span>
          </Link>

          <Link to="/contact" className="header__book" onClick={close}>
            Book an Appointment
          </Link>
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
              <button
                key={t.num}
                className={`nav-overlay__primary-link${hovered === t.num ? ' nav-overlay__primary-link--active' : ''}`}
                style={{ animationDelay: open ? `${i * 0.07}s` : '0s' }}
                onMouseEnter={() => setHovered(t.num)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleNavClick(`/treatments/${t.slug}`)}
              >
                <span className="nav-overlay__primary-num">{t.num}</span>
                {t.label}
              </button>
            ))}
          </nav>

          <nav className="nav-overlay__secondary-nav">
            {PRIMARY_LINKS.map((link, i) => (
              <button
                key={link.label}
                className="nav-overlay__secondary-link"
                style={{ animationDelay: open ? `${0.38 + i * 0.05}s` : '0s' }}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="nav-overlay__footer">
            <p className="nav-overlay__tagline">Refined to Perfection</p>
            <div className="nav-overlay__socials">
              <button onClick={close}>Instagram</button>
              <span className="nav-overlay__dot" />
              <button onClick={() => handleNavClick('/faq')}>Privacy Policy</button>
              <span className="nav-overlay__dot" />
              <button onClick={() => handleNavClick('/faq')}>Terms</button>
              <span className="nav-overlay__dot" />
              <button onClick={() => handleNavClick('/contact')}>Location</button>
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

          <div className="nav-overlay__book-cta" onClick={() => handleNavClick('/contact')}>
            Book an <br/> Appointment
          </div>
        </div>

      </div>
    </>
  );
}

export default Header;
