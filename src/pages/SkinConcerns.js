import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SeoHead from '../components/SeoHead';
import './pages.css';

const concerns = [
  {
    title: 'Wrinkles & Fine Lines',
    description: 'Expression lines, forehead creases, and crow\'s feet softened with precision relaxant treatments.',
    treatments: [{ label: 'Smooth Lines', slug: 'smooth-lines' }, { label: 'Full Face Refresh', slug: 'full-face-refresh' }],
  },
  {
    title: 'Loss of Volume',
    description: 'Restore youthful plumpness and define contours with expertly placed dermal fillers.',
    treatments: [{ label: 'Face Sculpt', slug: 'face-sculpt' }, { label: 'Full Face Refresh', slug: 'full-face-refresh' }],
  },
  {
    title: 'Dull or Dehydrated Skin',
    description: 'Deeply nourish and illuminate the skin from within for a luminous, healthy glow.',
    treatments: [{ label: 'Skin Glow', slug: 'skin-glow' }, { label: 'Collagen Restore', slug: 'collagen-restore' }],
  },
  {
    title: 'Skin Laxity & Sagging',
    description: 'Tighten and firm the skin using bio-stimulating treatments that rebuild your skin\'s foundation.',
    treatments: [{ label: 'Collagen Restore', slug: 'collagen-restore' }, { label: 'Neck Renewal', slug: 'neck-renewal' }],
  },
  {
    title: 'Acne & Blemishes',
    description: 'Target breakouts at their source, reduce post-acne marks, and restore a clear, even complexion.',
    treatments: [{ label: 'Clear Skin', slug: 'clear-skin' }],
  },
  {
    title: 'Neck & Décolletage Aging',
    description: 'Smooth bands, tighten loose skin, and improve texture across the neck and chest.',
    treatments: [{ label: 'Neck Renewal', slug: 'neck-renewal' }],
  },
  {
    title: 'Overall Aging Concerns',
    description: 'A comprehensive protocol addressing multiple signs of aging in a single, cohesive plan.',
    treatments: [{ label: 'Full Face Refresh', slug: 'full-face-refresh' }, { label: 'Stay Youthful', slug: 'stay-youthful' }],
  },
  {
    title: 'Preventative & Maintenance',
    description: 'Get ahead of aging with a proactive programme designed to keep your skin at its best for years to come.',
    treatments: [{ label: 'Stay Youthful', slug: 'stay-youthful' }],
  },
];

function SkinConcerns() {
  return (
    <>
      <SeoHead
        title="Skin Concerns | Find Your Ideal Treatment"
        description="Not sure which treatment is right for you? Explore our skin concerns guide — from fine lines and wrinkles to loss of volume, sagging skin, under eye bags and more at Kensley Aesthetics."
        path="/skin-concerns"
      />
      <PageHero
        label="Find Your Treatment"
        title={<>Your Skin Concern,<br />Our Solution</>}
        subtitle="Not sure which treatment is right for you? Browse by concern and find the perfect match."
      />

      <section className="page-section">
        <div className="container">
          <div className="concerns-grid">
            {concerns.map((concern) => (
              <div className="concern-card" key={concern.title}>
                <h3 className="concern-card__title">{concern.title}</h3>
                <p className="concern-card__desc">{concern.description}</p>
                <div className="concern-card__treatments">
                  {concern.treatments.map((t) => (
                    <Link key={t.slug} to={`/treatments/${t.slug}`} className="concern-card__tag">
                      {t.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section--tinted">
        <div className="container page-centered">
          <p className="section-label">Still Unsure?</p>
          <h2 className="section-title">Talk to Our Experts</h2>
          <p className="page-body-text" style={{ maxWidth: 480, margin: '24px auto 40px' }}>
            Book a complimentary consultation and let us assess your skin and recommend the right path forward.
          </p>
          <Link to="/contact" className="btn-primary">Book a Consultation</Link>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default SkinConcerns;
