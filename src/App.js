import './App.css';
import Header       from './components/Header';
import Hero         from './components/Hero';
import ScrollText   from './components/ScrollText';
import Stats        from './components/Stats';
import About        from './components/About';
import Services     from './components/Services';
import Process      from './components/Process';
import Pillars      from './components/Pillars';
import Testimonials from './components/Testimonials';
import CtaSection   from './components/CtaSection';
import Footer       from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ScrollText />
      <Stats />
      <About />
      <Services />
      <Process />
      <Pillars />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
