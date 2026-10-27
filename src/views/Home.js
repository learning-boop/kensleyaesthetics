import Hero                from '../components/Hero';
import ScrollText          from '../components/ScrollText';
import TreatmentShowcase   from '../components/TreatmentShowcase';
import JourneySteps        from '../components/JourneySteps';
import ClinicShowcase      from '../components/ClinicShowcase';
import { TeamSplit }       from '../components/TeamSection';

function Home() {
  return (
    <>
      <Hero />
      <TreatmentShowcase />
      <ScrollText />
      <TeamSplit />
      <JourneySteps />
      <ClinicShowcase />
    </>
  );
}

export default Home;
