import TreatmentPlanView from './TreatmentPlanView';

export const metadata = {
  title: 'Treatment Plans | Kensley Aesthetics',
  description: 'Explore our curated signature treatment programmes — personalised packages designed to restore, refresh and refine.',
  alternates: { canonical: 'https://kensleyaesthetics.com/treatment-plan' },
  openGraph: {
    title: 'Treatment Plans | Kensley Aesthetics',
    description: 'Explore our curated signature treatment programmes — personalised packages designed to restore, refresh and refine.',
    url: 'https://kensleyaesthetics.com/treatment-plan',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function TreatmentPlanPage() {
  return <TreatmentPlanView />;
}
