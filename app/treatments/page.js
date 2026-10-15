import TreatmentsView from './TreatmentsView';

export const metadata = {
  title: 'Aesthetic Treatments Newcastle | Kensley Aesthetics',
  description: 'Explore skin boosters, dermal fillers and aesthetic treatments at Kensley Aesthetics in Jesmond, Newcastle. Book a personalised consultation.',
  alternates: { canonical: 'https://kensleyaesthetics.com/treatments' },
  openGraph: {
    title: 'Aesthetic Treatments Newcastle | Kensley Aesthetics',
    description: 'Explore skin boosters, dermal fillers and aesthetic treatments at Kensley Aesthetics in Jesmond, Newcastle. Book a personalised consultation.',
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
