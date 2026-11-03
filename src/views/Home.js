import Hero                from '../components/Hero';
import TreatmentShowcase   from '../components/TreatmentShowcase';
import JourneySteps        from '../components/JourneySteps';
import ClinicShowcase      from '../components/ClinicShowcase';
import { TeamSplit }       from '../components/TeamSection';
import HomeFaq             from '../components/HomeFaq';

function Home({ initialTreatments }) {
  return (
    <>
      <Hero />
      <TreatmentShowcase initialTreatments={initialTreatments} />
      <TeamSplit />
      <JourneySteps />
      <ClinicShowcase />
      <HomeFaq />
    </>
  );
}

export default Home;
