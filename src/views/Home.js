import Hero                from '../components/Hero';
import ScrollText          from '../components/ScrollText';
import TreatmentShowcase   from '../components/TreatmentShowcase';
import BeforeAfter         from '../components/BeforeAfter';
import JourneySteps        from '../components/JourneySteps';
import ClinicShowcase      from '../components/ClinicShowcase';
import { TeamSplit }       from '../components/TeamSection';
import SeoHead             from '../components/SeoHead';

const LOCAL_BUSINESS_LD = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Kensley Aesthetics',
  url: 'https://kensleyaesthetics.com',
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
      <TreatmentShowcase />
      <ScrollText />
      <BeforeAfter />
      <TeamSplit />
      <JourneySteps />
      <ClinicShowcase />
    </>
  );
}

export default Home;
