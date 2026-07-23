import './CtaSection.css';

function CtaSection() {
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <p className="section-label">Ready to Begin?</p>
        <h2 className="section-title">
          Let's Create Something<br />Beautiful Together
        </h2>
        <p className="section-subtitle">
          Book your personal consultation today and take the first step toward
          the transformation you deserve.
        </p>
        <div className="cta-section__actions">
          <a href="#contact" className="btn-primary">Book a Consultation</a>
          {/* <a href="#contact" className="btn-outline">Contact Us</a> */}
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
