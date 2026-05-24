import './Stats.css';

const items = [
  { number: '500+', label: 'Projects Completed' },
  { number: '98%',  label: 'Client Satisfaction' },
  { number: '12',   label: 'Expert Specialists' },
  { number: '8+',   label: 'Years of Experience' },
];

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__inner">
          {items.map((item) => (
            <div className="stats__item" key={item.label}>
              <div className="stats__number">{item.number}</div>
              <div className="stats__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
