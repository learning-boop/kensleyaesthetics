import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TreatmentsProvider } from './context/TreatmentsContext';
import { AppointmentProvider } from './context/AppointmentContext';
import AppointmentDrawer from './components/AppointmentDrawer';
import './App.css';
import Header       from './components/Header';
import Footer       from './components/Footer';
import ScrollToTop  from './components/ScrollToTop';
import Home         from './pages/Home';
import About        from './pages/About';
import Services     from './pages/Services';
import TreatmentDetail from './pages/TreatmentDetail';
import MainTreatmentDetail from './pages/MainTreatmentDetail';
import Gallery      from './pages/Gallery';
import SkinConcerns from './pages/SkinConcerns';
import Testimonials from './pages/Testimonials';
import FAQ          from './pages/FAQ';
import PrivacyPolicy    from './pages/PrivacyPolicy';
import TermsConditions  from './pages/TermsConditions';
import ChatWidget       from './components/ChatWidget';
import Blog             from './pages/Blog';
import BlogPost         from './pages/BlogPost';
import Treatments       from './pages/Treatments';
import TreatmentPlan    from './pages/TreatmentPlan';
import BookAppointment  from './pages/BookAppointment';

function App() {
  return (
    <TreatmentsProvider>
    <BrowserRouter>
      <AppointmentProvider>
      <AppointmentDrawer />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"                     element={<Home />} />
        <Route path="/about"                element={<About />} />
        <Route path="/training"             element={<Services />} />
        <Route path="/treatments/:slug"      element={<TreatmentDetail />} />
        <Route path="/main-treatments/:slug" element={<MainTreatmentDetail />} />
        <Route path="/gallery"              element={<Gallery />} />
        <Route path="/skin-concerns"        element={<SkinConcerns />} />
        <Route path="/testimonials"          element={<Testimonials />} />
        <Route path="/faq"                  element={<FAQ />} />
        <Route path="/book"                 element={<BookAppointment />} />
        <Route path="/treatments"            element={<Treatments />} />
        <Route path="/treatment-plan"        element={<TreatmentPlan />} />
        <Route path="/blog"                 element={<Blog />} />
        <Route path="/blog/:slug"           element={<BlogPost />} />
        <Route path="/privacy-policy"       element={<PrivacyPolicy />} />
        <Route path="/terms"                element={<TermsConditions />} />
        <Route path="*"                     element={<Home />} />
      </Routes>
      <Footer />
      <ChatWidget />
      </AppointmentProvider>
    </BrowserRouter>
    </TreatmentsProvider>
  );
}

export default App;
