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
              <a href="#" className="footer__social-link">in</a>
              <a href="#" className="footer__social-link">ig</a>
              <a href="#" className="footer__social-link">fb</a>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__links">
              <li><a href="#">Service One</a></li>
              <li><a href="#">Service Two</a></li>
              <li><a href="#">Service Three</a></li>
              <li><a href="#">Service Four</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Process</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links">
              <li><a href="#">info@creativetouchrenova.com</a></li>
              <li><a href="#">+1 (000) 000-0000</a></li>
              <li><a href="#">Location, City</a></li>
              <li><a href="#contact">Book a Visit</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Creative Touch Renova. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
