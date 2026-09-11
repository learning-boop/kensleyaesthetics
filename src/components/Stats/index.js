import './Stats.css';

const CREDENTIALS = [
  {
    number: '20+',
    label: 'Years of Clinical Experience',
    detail: 'Dr. Tiru Matla is a GMC-registered medical doctor with over two decades of clinical practice.',
  },
  {
    number: '10+',
    label: 'Years in Aesthetic Medicine',
    detail: 'More than a decade dedicated exclusively to advanced non-surgical and aesthetic procedures.',
  },
  {
    number: '1000s',
    label: 'of Procedures Performed',
    detail: 'Thousands of advanced aesthetic treatments carried out to the highest clinical standards.',
  },
  {
    number: 'GMC',
    label: 'Registered Medical Doctor',
    detail: 'Dr. Tiru Matla is a fully GMC-registered medical doctor, bringing genuine clinical expertise to every aesthetic treatment.',
  },
];

function Stats() {
  return (
    <section className="si-root">

      {/* ── Left: headline copy ── */}
      <div className="si-center">
        <span className="si-eyebrow">Why Choose Kensley Aesthetics</span>
        <h2 className="si-title">Under{' '}<br />Expert{' '}<br />Medical{' '}<br />Supervision</h2>
        <div className="si-divider" />
        <p className="si-subtitle">
          Every treatment at Kensley Aesthetics is conducted under the
          direct clinical oversight of <strong>Dr. Tiru Matla</strong> — a
          GMC-registered medical doctor with over 20 years of clinical
          experience and more than a decade specialising in aesthetic
          medicine. You are in the hands of a true expert.
        </p>
      </div>

      {/* ── Right: credentials grid ── */}
      <div className="si-right">
        {CREDENTIALS.map((c, i) => (
          <div key={i} className="si-cred">
            <span className="si-cred-number">{c.number}</span>
            <span className="si-cred-label">{c.label}</span>
            <p className="si-cred-detail">{c.detail}</p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Stats;
