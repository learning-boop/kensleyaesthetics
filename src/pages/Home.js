import Hero                from '../components/Hero';
import ScrollText          from '../components/ScrollText';
import TreatmentShowcase   from '../components/TreatmentShowcase';
import Stats               from '../components/Stats';
import BeforeAfter         from '../components/BeforeAfter';
import ExpertSection       from '../components/ExpertSection';
import About               from '../components/About';
import Services            from '../components/Services';
import Process             from '../components/Process';
import Pillars             from '../components/Pillars';
import Testimonials        from '../components/Testimonials';
import CtaSection          from '../components/CtaSection';
import QuickContact        from '../components/QuickContact';
import HomeFaqSection      from '../components/HomeFaqSection';
import JourneySteps        from '../components/JourneySteps';

function Home() {
  return (
    <>
      <Hero />
      <ScrollText />
      <TreatmentShowcase />
      <Stats />
      <BeforeAfter />
      <ExpertSection />
      <JourneySteps />
      <QuickContact />
    </>
  );
}

export default Home;
