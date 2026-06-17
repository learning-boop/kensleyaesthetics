import { Link } from 'react-router-dom';
import { useTreatments } from '../../context/TreatmentsContext';
import './Footer.css';

function Footer() {
  const { treatments } = useTreatments();
  return (
    <footer className="ft-root">
      <div className="ft-inner">

        {/* ── Brand display ── */}
        <div className="ft-brand-block">
          <h2 className="ft-brand-name"> Renova
          </h2>
          <p className="ft-brand-tagline">
            Artistry meets expertise &mdash; every treatment, a masterpiece crafted just for you
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Three columns ── */}
        <div className="ft-cols">

          <div className="ft-col">
            <h4 className="ft-col-heading">Treatments</h4>
            <ul className="ft-col-links">
              {treatments.slice(0, 4).map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`}>{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-heading">Company</h4>
            <ul className="ft-col-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">All Treatments</Link></li>
              <li><Link to="/gallery">Before &amp; After</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4 className="ft-col-heading">Contact</h4>
            <ul className="ft-col-links">
              <li><a href="mailto:hello@creativetouchrenova.com">hello@creativetouchrenova.com</a></li>
              <li><a href="tel:+442000000000">+44 (0) 20 0000 0000</a></li>
              <li>London, United Kingdom</li>
            </ul>
            <Link to="/contact" className="ft-book-btn">Book an Appointment</Link>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">

          <div className="ft-social">
            <a href="#" className="ft-social-icon" aria-label="LinkedIn">in</a>
            <a href="#" className="ft-social-icon" aria-label="Instagram">ig</a>
            <a href="#" className="ft-social-icon" aria-label="Facebook">fb</a>
          </div>

          <p className="ft-copy">
            &copy; {new Date().getFullYear()} Creative Touch
          </p>

          <div className="ft-legal">
            <Link to="/faq">Privacy Policy</Link>
            <Link to="/faq">Terms</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
