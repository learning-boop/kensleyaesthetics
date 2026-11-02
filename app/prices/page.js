import PricesView from './PricesView';
import { PRICES_FAQS, faqPageJsonLd } from '@/src/data/pageFaqs';

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
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function PricesPage() {
  const faqLd = faqPageJsonLd(PRICES_FAQS);
  return (
    <>
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <PricesView />
    </>
  );
}
