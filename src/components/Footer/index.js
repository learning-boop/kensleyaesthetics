import { Link } from 'react-router-dom';
import TREATMENTS from '../../data/treatments';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              Creative <span>Touch</span> Renova
            </div>
            <p className="footer__tagline">
              Artistry meets expertise. Every project, a masterpiece crafted
              just for you.
            </p>
            <div className="footer__social">
              <span className="footer__social-link">in</span>
              <span className="footer__social-link">ig</span>
              <span className="footer__social-link">fb</span>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Treatments</h4>
            <ul className="footer__links">
              {TREATMENTS.slice(0, 4).map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`}>{t.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">All Treatments</Link></li>
              <li><Link to="/gallery">Before &amp; After</Link></li>
              <li><Link to="/skin-concerns">Skin Concerns</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li><a href="mailto:hello@creativetouchrenova.com">hello@creativetouchrenova.com</a></li>
              <li><a href="tel:+442000000000">+44 (0) 20 0000 0000</a></li>
              <li>London, United Kingdom</li>
              <li><Link to="/contact">Book an Appointment</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Creative Touch Renova. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/faq">Privacy Policy</Link>
            <Link to="/faq">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
