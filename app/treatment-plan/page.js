import TreatmentPlanView from './TreatmentPlanView';

export const metadata = {
  title: 'Treatment Plans | Kensley Aesthetics',
  description: 'Explore our curated signature treatment programmes — personalised packages designed to restore, refresh and refine.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kensleyaesthetics.com/treatment-plan' },
  openGraph: {
    title: 'Treatment Plans | Kensley Aesthetics',
    description: 'Explore our curated signature treatment programmes — personalised packages designed to restore, refresh and refine.',
    url: 'https://kensleyaesthetics.com/treatment-plan',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function TreatmentPlanPage() {
  return <TreatmentPlanView />;
}
