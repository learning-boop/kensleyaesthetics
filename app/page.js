import HomeView from './HomeView';

export const metadata = {
  title: 'Aesthetic Clinic Newcastle upon Tyne | Kensley Aesthetics',
  description: 'Doctor-led aesthetic clinic in Jesmond, Newcastle upon Tyne. Anti-wrinkle treatments, dermal fillers, skin boosters and more. Book your consultation today.',
  alternates: { canonical: 'https://kensleyaesthetics.com/' },
  openGraph: {
    title: 'Aesthetic Clinic Newcastle upon Tyne | Kensley Aesthetics',
    description: 'Doctor-led aesthetic clinic in Jesmond, Newcastle upon Tyne. Anti-wrinkle treatments, dermal fillers, skin boosters and more. Book your consultation today.',
    url: 'https://kensleyaesthetics.com/',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Clinic Newcastle upon Tyne | Kensley Aesthetics',
    description: 'Doctor-led aesthetic clinic in Jesmond, Newcastle upon Tyne. Anti-wrinkle treatments, dermal fillers, skin boosters and more. Book your consultation today.',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function HomePage() {
  return <HomeView />;
}
