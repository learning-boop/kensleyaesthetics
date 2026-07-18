import serviceImg from '../../data/images/service_img.png';
import './Stats.css';

function Stats() {
  return (
    <section className="si-root">

      {/* ── Left side: text content ── */}
      <div className="si-center">
        <span className="si-eyebrow">Trusted By Thousands</span>
        <h2 className="si-title">Where<br />Excellence<br />Meets<br />Care</h2>
        <div className="si-divider" />
        <p className="si-subtitle">We don't just treat skin —<br />we restore confidence.</p>
      </div>

      {/* ── Right side: full image cover ── */}
      <div className="si-right">
        <img
          src={serviceImg}
          alt="Treatment"
          className="si-img"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

    </section>
  );
}

export default Stats;
