import './Process.css';

const steps = [
  { num: '01', title: 'Consultation', text: 'We start by understanding your needs, preferences, and goals in a personal session.' },
  { num: '02', title: 'Planning',     text: 'Our team crafts a tailored plan with timelines, materials, and detailed approach.' },
  { num: '03', title: 'Execution',    text: 'Expert hands bring the plan to life with precision, care, and attention to detail.' },
  { num: '04', title: 'Final Review', text: 'We walk through the results together, ensuring every detail meets your expectations.' },
];

function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="process__head">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Our Simple<br />4-Step Process</h2>
          <p className="section-subtitle">
            From the first conversation to the final reveal — a seamless journey
            designed around you.
          </p>
        </div>

        <div className="process__steps">
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step__number">{s.num}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
