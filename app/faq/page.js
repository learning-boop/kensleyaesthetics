import FAQView from './FAQView';

export const metadata = {
  title: 'FAQs | Non-Surgical Aesthetic Treatments Newcastle | Kensley Aesthetics',
  description: 'Answers to your most common questions about non-surgical aesthetic treatments at Kensley Aesthetics — dermal fillers, anti-wrinkle injections, Profhilo, microneedling, HIFU and more. Doctor-led clinic in Newcastle.',
  alternates: { canonical: 'https://kensleyaesthetics.com/faq' },
  openGraph: {
    title: 'FAQs | Non-Surgical Aesthetic Treatments Newcastle | Kensley Aesthetics',
    description: 'Answers to your most common questions about non-surgical aesthetic treatments at Kensley Aesthetics — dermal fillers, anti-wrinkle injections, Profhilo, microneedling, HIFU and more. Doctor-led clinic in Newcastle.',
    url: 'https://kensleyaesthetics.com/faq',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function FAQPage() {
  return <FAQView />;
}
