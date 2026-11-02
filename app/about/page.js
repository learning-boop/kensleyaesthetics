import AboutView from './AboutView';

export const metadata = {
  title: 'About Kensley Aesthetics | Aesthetic Clinic in Jesmond',
  description: 'Kensley Aesthetics is a doctor-led aesthetic clinic in Jesmond, Newcastle, founded by Dr Tiru Matla. Personal consultations and natural-looking results.',
  alternates: { canonical: 'https://kensleyaesthetics.com/about' },
  openGraph: {
    title: 'About Kensley Aesthetics | Aesthetic Clinic in Jesmond',
    description: 'Kensley Aesthetics is a doctor-led aesthetic clinic in Jesmond, Newcastle, founded by Dr Tiru Matla. Personal consultations and natural-looking results.',
    url: 'https://kensleyaesthetics.com/about',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
