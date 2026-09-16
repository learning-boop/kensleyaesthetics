import AboutView from './AboutView';

export const metadata = {
  title: 'About Us | GMC Registered Doctor-Led Aesthetic Clinic Newcastle | Kensley Aesthetics',
  description: 'Kensley Aesthetics is a GMC-registered, doctor-led aesthetic clinic in Newcastle. Over 20 years of medical experience, 10,000+ procedures performed. MBBS, MRCGP qualified. Honest counsel, natural results.',
  alternates: { canonical: 'https://kensleyaesthetics.com/about' },
  openGraph: {
    title: 'About Us | GMC Registered Doctor-Led Aesthetic Clinic Newcastle | Kensley Aesthetics',
    description: 'Kensley Aesthetics is a GMC-registered, doctor-led aesthetic clinic in Newcastle. Over 20 years of medical experience, 10,000+ procedures performed. MBBS, MRCGP qualified. Honest counsel, natural results.',
    url: 'https://kensleyaesthetics.com/about',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
