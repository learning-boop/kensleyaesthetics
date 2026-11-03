import HomeView from './HomeView';
import { client, MAIN_TREATMENTS_QUERY } from '@/src/lib/sanityClient';

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
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Clinic Newcastle upon Tyne | Kensley Aesthetics',
    description: 'Doctor-led aesthetic clinic in Jesmond, Newcastle upon Tyne. Anti-wrinkle treatments, dermal fillers, skin boosters and more. Book your consultation today.',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

// Treatments are fetched at build time so the homepage cards are in the HTML.
export default async function HomePage() {
  let treatments = null;
  try {
    treatments = await client.fetch(MAIN_TREATMENTS_QUERY);
  } catch {
    treatments = null; // cards fall back to loading in the browser
  }
  return <HomeView initialTreatments={treatments} />;
}
