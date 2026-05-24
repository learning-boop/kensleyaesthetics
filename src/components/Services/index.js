import './Services.css';

const services = [
  { num: '01', title: 'Service One',   text: 'A short description of this service. What it offers, who it is for, and the key benefits clients can expect.' },
  { num: '02', title: 'Service Two',   text: 'A short description of this service. What it offers, who it is for, and the key benefits clients can expect.' },
  { num: '03', title: 'Service Three', text: 'A short description of this service. What it offers, who it is for, and the key benefits clients can expect.' },
  { num: '04', title: 'Service Four',  text: 'A short description of this service. What it offers, who it is for, and the key benefits clients can expect.' },
  { num: '05', title: 'Service Five',  text: 'A short description of this service. What it offers, who it is for, and the key benefits clients can expect.' },
  { num: '06', title: 'Service Six',   text: 'A short description of this service. What it offers, who it is for, and the key benefits clients can expect.' },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <div>
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Our Core<br />Services</h2>
          </div>
          <a href="#contact" className="btn-outline">View All Services</a>
        </div>

        <div className="services__grid">
          {services.map((s) => (
            <div className="service-card" key={s.num}>
              <div className="service-card__number">{s.num}</div>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__text">{s.text}</p>
              <span className="service-card__link">Learn More &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
