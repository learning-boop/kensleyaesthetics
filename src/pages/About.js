import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import './pages.css';

const values = [
  { num: '01', title: 'Artistry First', text: 'We approach every face as a canvas, blending medical precision with an artist\'s eye for beauty and proportion.' },
  { num: '02', title: 'Your Vision', text: 'Every treatment plan begins with listening. We collaborate closely with you to understand your goals before recommending any treatment.' },
  { num: '03', title: 'Lasting Results', text: 'We favour techniques that age gracefully, building long-term skin health and natural enhancement over time.' },
  { num: '04', title: 'Continued Care', text: 'Our relationship doesn\'t end after treatment. Ongoing support, follow-ups, and personalised advice are part of every experience.' },
];

const team = [
  { name: 'Dr. Sophia Renova', role: 'Founder & Lead Practitioner', bio: 'With over 15 years in aesthetic medicine, Sophia combines clinical excellence with a refined artistic sensibility. She is dedicated to natural-looking results that honour each client\'s unique beauty.' },
  { name: 'Elena Marchetti', role: 'Senior Aesthetic Therapist', bio: 'Elena specialises in advanced skin treatments and holistic skin health. Her calm, meticulous approach ensures every client feels at ease throughout their experience.' },
];

function About() {
  return (
    <>
      <PageHero
        label="Who We Are"
        title={<>Beauty Begins<br />with Expert Hands</>}
        subtitle="At Creative Touch Renova, we merge artistry with expertise to deliver results that speak for themselves."
      />

      <section className="page-section">
        <div className="container">
          <div className="page-two-col">
            <div className="page-two-col__text">
              <p className="section-label">Our Story</p>
              <h2 className="section-title">A Clinic Built on<br />Trust &amp; Craft</h2>
              <p className="page-body-text">
                Creative Touch Renova was founded on a simple belief: that aesthetic medicine should
                enhance who you already are, not change you into someone else. We combine the precision
                of medical science with a genuine passion for beauty to deliver treatments that feel
                authentically right for each individual client.
              </p>
              <p className="page-body-text">
                Our boutique clinic offers a calm, private environment where you can speak openly and
                be treated with care, skill, and respect. No pressure. No one-size-fits-all protocols.
                Just expert guidance and exceptional results.
              </p>
            </div>
            <div className="page-two-col__image">
              <div className="page-image-placeholder">Clinic Image</div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container">
          <p className="section-label">What We Stand For</p>
          <h2 className="section-title" style={{ marginBottom: 60 }}>Our Values</h2>
          <div className="page-values-grid">
            {values.map((v) => (
              <div className="page-value-card" key={v.num}>
                <span className="page-value-card__num">{v.num}</span>
                <h3 className="page-value-card__title">{v.title}</h3>
                <p className="page-value-card__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <p className="section-label">Our Team</p>
          <h2 className="section-title" style={{ marginBottom: 60 }}>Meet the Experts</h2>
          <div className="page-team-grid">
            {team.map((member) => (
              <div className="page-team-card" key={member.name}>
                <div className="page-image-placeholder page-image-placeholder--tall">Photo</div>
                <h3 className="page-team-card__name">{member.name}</h3>
                <p className="page-team-card__role">{member.role}</p>
                <p className="page-team-card__bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container page-centered">
          <p className="section-label">Ready to Begin?</p>
          <h2 className="section-title">Your Journey Starts Here</h2>
          <p className="page-body-text" style={{ maxWidth: 500, margin: '24px auto 40px' }}>
            Book a complimentary consultation and discover what Creative Touch Renova can do for you.
          </p>
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default About;
