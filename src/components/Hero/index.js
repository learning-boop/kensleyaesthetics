import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__center">
        <h1 className="hero__title">Timeless Glow</h1>

        <div className="hero__scroll">
          <div className="hero__scroll-line">
            <span className="hero__scroll-dot" />
          </div>
          <svg className="hero__scroll-arrow" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="hero__scroll-tag">
            <span className="hero__scroll-tag-num">9+ Years</span>
            <span className="hero__scroll-tag-text">Trusted Expertise</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
