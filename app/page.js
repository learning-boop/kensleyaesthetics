import HomeView from './HomeView';

export const metadata = {
  title: 'Aesthetic Clinic Newcastle | Non-Surgical Treatments | Kensley Aesthetics',
  description: "Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic. Expert non-surgical treatments: dermal fillers, anti-wrinkle injections, Profhilo, lip filler, jawline filler, RF microneedling and HIFU. GMC registered. Natural results.",
  alternates: { canonical: 'https://kensleyaesthetics.com/' },
  openGraph: {
    title: 'Aesthetic Clinic Newcastle | Non-Surgical Treatments | Kensley Aesthetics',
    description: "Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic. Expert non-surgical treatments: dermal fillers, anti-wrinkle injections, Profhilo, lip filler, jawline filler, RF microneedling and HIFU. GMC registered. Natural results.",
    url: 'https://kensleyaesthetics.com/',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Clinic Newcastle | Non-Surgical Treatments | Kensley Aesthetics',
    description: "Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic. Expert non-surgical treatments: dermal fillers, anti-wrinkle injections, Profhilo, lip filler, jawline filler, RF microneedling and HIFU. GMC registered. Natural results.",
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function HomePage() {
  return <HomeView />;
}
