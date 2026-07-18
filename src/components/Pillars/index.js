import { IconAward, IconHeart, IconShield, IconLeaf, IconStar, IconUsers } from '../../icons';
import './Pillars.css';

const cards = [
  { icon: <IconAward />, title: 'Proven Expertise',    text: 'Our specialists bring years of hands-on experience and continuous professional development to every project.' },
  { icon: <IconHeart />, title: 'Client-First Care',   text: 'We listen deeply, communicate clearly, and keep you involved at every stage of the process.' },
  { icon: <IconShield />, title: 'Quality Guaranteed', text: 'We use only premium materials and industry-leading techniques, backed by our satisfaction guarantee.' },
  { icon: <IconLeaf />,  title: 'Sustainable Choices', text: 'Environmentally conscious practices and materials are at the core of how we work.' },
  { icon: <IconStar />,  title: 'Bespoke Results',     text: 'No two clients are the same. Every solution is crafted specifically for you and your unique needs.' },
  { icon: <IconUsers />, title: 'Ongoing Support',     text: 'Our relationship does not end at completion — we are here to support you every step of the way.' },
];

function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <div className="pillars__head">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-title">The Kensley Aesthetics<br />Difference</h2>
          <p className="section-subtitle">
            Six reasons our clients return — and recommend us to everyone they know.
          </p>
        </div>

        <div className="pillars__grid">
          {cards.map((c) => (
            <div className="pillar-card" key={c.title}>
              <div className="pillar-card__icon">{c.icon}</div>
              <h3 className="pillar-card__title">{c.title}</h3>
              <p className="pillar-card__text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
