import './PageHero.css';

function PageHero({ label, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        {label && <p className="section-label">{label}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
      <div className="page-hero__line" />
    </section>
  );
}

export default PageHero;
