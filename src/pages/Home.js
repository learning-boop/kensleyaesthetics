import Hero                from '../components/Hero';
import ScrollText          from '../components/ScrollText';
import TreatmentShowcase   from '../components/TreatmentShowcase';
import Stats               from '../components/Stats';
import About               from '../components/About';
import Services            from '../components/Services';
import Process             from '../components/Process';
import Pillars             from '../components/Pillars';
import Testimonials        from '../components/Testimonials';
import CtaSection          from '../components/CtaSection';

function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <TreatmentShowcase />
      <Stats />
      <About />
      <Services />
      <Process />
      <Pillars />
      <Testimonials />
      <CtaSection />
    </>
  );
}

export default Home;
