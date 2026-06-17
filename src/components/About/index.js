import './About.css';

const pillars = [
  { icon: '✦', text: 'Aesthetic Excellence' },
  { icon: '✦', text: 'Personalised Approach' },
  { icon: '✦', text: 'Premium Materials' },
  { icon: '✦', text: 'Lasting Results' },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__image-wrap">
            <div className="about__image-placeholder">Image</div>
            <div className="about__accent" />
          </div>

          <div className="about__content">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title">
              Beauty Begins<br />with Expert Hands
            </h2>
            <p className="section-subtitle" style={{ marginBottom: 40 }}>
              At Creative Touch, we merge artistry with expertise to deliver
              results that speak for themselves. Every project is a collaboration —
              your vision, our craftsmanship.
            </p>

            <div className="about__pillars">
              {pillars.map((p) => (
                <div className="pillar" key={p.text}>
                  <div className="pillar__icon">{p.icon}</div>
                  <span className="pillar__text">{p.text}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="btn-primary">Discover Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
