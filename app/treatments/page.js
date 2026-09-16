import TreatmentsView from './TreatmentsView';

export const metadata = {
  title: 'Treatments | Kensley Aesthetics',
  description: 'Explore our full range of advanced aesthetic treatments including anti-wrinkle, dermal fillers, skin boosters and more.',
  alternates: { canonical: 'https://kensleyaesthetics.com/treatments' },
  openGraph: {
    title: 'Treatments | Kensley Aesthetics',
    description: 'Explore our full range of advanced aesthetic treatments including anti-wrinkle, dermal fillers, skin boosters and more.',
    url: 'https://kensleyaesthetics.com/treatments',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function TreatmentsPage() {
  return <TreatmentsView />;
}
