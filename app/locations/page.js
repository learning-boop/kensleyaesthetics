import LocationsView from './LocationsView';

export const metadata = {
  title: 'Aesthetic Clinic Locations | Kensley Aesthetics — Newcastle',
  description: 'Kensley Aesthetics serves clients from 50 UK locations — from Newcastle and the North East to Edinburgh, Leeds, Manchester and London. Doctor-led treatments by Dr. Tiru Matla.',
  alternates: { canonical: 'https://kensleyaesthetics.com/locations' },
  openGraph: {
    title: 'Aesthetic Clinic Locations | Kensley Aesthetics — Newcastle',
    description: 'Kensley Aesthetics serves clients from 50 UK locations — from Newcastle and the North East to Edinburgh, Leeds, Manchester and London. Doctor-led treatments by Dr. Tiru Matla.',
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
