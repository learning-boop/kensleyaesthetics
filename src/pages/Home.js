import Hero                from '../components/Hero';
import ScrollText          from '../components/ScrollText';
import BookingPopup        from '../components/BookingPopup';
import TreatmentShowcase   from '../components/TreatmentShowcase';
import Stats               from '../components/Stats';
import BeforeAfter         from '../components/BeforeAfter';
import ExpertSection       from '../components/ExpertSection';
// import About               from '../components/About';
// import Services            from '../components/Services';
// import Process             from '../components/Process';
// import Pillars             from '../components/Pillars';
// import Testimonials        from '../components/Testimonials';
// import CtaSection          from '../components/CtaSection';
import QuickContact        from '../components/QuickContact';
import HomeFaqSection      from '../components/HomeFaqSection';
import JourneySteps        from '../components/JourneySteps';
import SeoHead             from '../components/SeoHead';

const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Kensley Aesthetics',
  url: 'https://kensleyaesthetics.com',
  email: 'hello@kensleyaesthetics.com',
  description: 'Premium aesthetic clinic offering expert non-surgical treatments including dermal fillers, anti-wrinkle injections, Profhilo, skin boosters, RF microneedling and HIFU in Newcastle.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Newcastle upon Tyne',
    addressCountry: 'GB',
  },
  sameAs: [
    'https://www.instagram.com/kensleyaesthetics',
    'https://www.facebook.com/profile.php?id=61591977870031',
    'https://www.tiktok.com/@kensleyaesthetics',
  ],
  hasMap: 'https://kensleyaesthetics.com/book',
};

function Home() {
  return (
    <>
      <SeoHead
        title="Aesthetic Clinic Newcastle | Non-Surgical Treatments"
        description="Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic. Expert non-surgical treatments: dermal fillers, anti-wrinkle injections, Profhilo, lip filler, jawline filler, RF microneedling and HIFU. GMC registered. Natural results."
        keywords="aesthetic clinic Newcastle, dermal fillers Newcastle, anti-wrinkle injections Newcastle, lip filler Newcastle, jawline filler Newcastle, Profhilo Newcastle, RF microneedling Newcastle, HIFU Newcastle, skin boosters Newcastle, non-surgical facelift Newcastle, GMC registered aesthetic clinic Newcastle, doctor-led aesthetics Newcastle"
        path="/"
        jsonLd={LOCAL_BUSINESS_LD}
      />
      <Hero />
      {/* <BookingPopup /> */}
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
