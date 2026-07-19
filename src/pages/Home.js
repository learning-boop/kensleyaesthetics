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
  url: 'https://kensleyaesthetics.co.uk',
  email: 'hello@kensleyaesthetics.co.uk',
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
  hasMap: 'https://kensleyaesthetics.co.uk/contact',
};

function Home() {
  return (
    <>
      <SeoHead
        title="Aesthetic Clinic Newcastle | Non-Surgical Treatments"
        description="Kensley Aesthetics — expert non-surgical aesthetic treatments including dermal fillers, anti-wrinkle injections, Profhilo, skin boosters, RF microneedling and HIFU in Newcastle."
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
