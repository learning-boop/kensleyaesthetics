import PricesView from './PricesView';

export const metadata = {
  title: 'Treatment Prices | Kensley Aesthetics Newcastle',
  description: 'Transparent pricing for all aesthetic treatments at Kensley Aesthetics, Newcastle. Anti-wrinkle, dermal fillers, Profhilo, PRP, microneedling and more.',
  alternates: { canonical: 'https://kensleyaesthetics.com/prices' },
  openGraph: {
    title: 'Treatment Prices | Kensley Aesthetics Newcastle',
    description: 'Transparent pricing for all aesthetic treatments at Kensley Aesthetics, Newcastle. Anti-wrinkle, dermal fillers, Profhilo, PRP, microneedling and more.',
    url: 'https://kensleyaesthetics.com/prices',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function PricesPage() {
  return <PricesView />;
}
