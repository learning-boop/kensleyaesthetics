import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header       from './components/Header';
import Footer       from './components/Footer';
import ScrollToTop  from './components/ScrollToTop';
import Home         from './pages/Home';
import About        from './pages/About';
import Services     from './pages/Services';
import TreatmentDetail from './pages/TreatmentDetail';
import Gallery      from './pages/Gallery';
import SkinConcerns from './pages/SkinConcerns';
import Testimonials from './pages/Testimonials';
import FAQ          from './pages/FAQ';
import Contact      from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"                     element={<Home />} />
        <Route path="/about"                element={<About />} />
        <Route path="/services"             element={<Services />} />
        <Route path="/treatments/:slug"     element={<TreatmentDetail />} />
        <Route path="/gallery"              element={<Gallery />} />
        <Route path="/skin-concerns"        element={<SkinConcerns />} />
        <Route path="/testimonials"         element={<Testimonials />} />
        <Route path="/faq"                  element={<FAQ />} />
        <Route path="/contact"              element={<Contact />} />
        <Route path="*"                     element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
