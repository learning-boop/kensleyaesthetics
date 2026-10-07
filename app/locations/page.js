import LocationsView from './LocationsView';

export const metadata = {
  title: 'Aesthetic Clinic Location | Kensley Aesthetics — Jesmond, Newcastle',
  description: 'Visit Kensley Aesthetics in Jesmond, Newcastle upon Tyne. Doctor-led aesthetic treatments by Dr. Tiru Matla — anti-wrinkle, dermal fillers, Profhilo, HIFU & more.',
  alternates: { canonical: 'https://kensleyaesthetics.com/locations' },
  openGraph: {
    title: 'Aesthetic Clinic Location | Kensley Aesthetics — Jesmond, Newcastle',
    description: 'Visit Kensley Aesthetics in Jesmond, Newcastle upon Tyne. Doctor-led aesthetic treatments by Dr. Tiru Matla — anti-wrinkle, dermal fillers, Profhilo, HIFU & more.',
    url: 'https://kensleyaesthetics.com/locations',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function LocationsPage() {
  return <LocationsView />;
}
