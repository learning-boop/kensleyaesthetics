import FAQView from './FAQView';
import { FAQ_PAGE_FAQS, faqPageJsonLd } from '@/src/data/pageFaqs';

export const metadata = {
  title: 'Aesthetic Treatment FAQs | Kensley Aesthetics Newcastle',
  description: 'Answers to common questions about consultations, treatments, recovery, prices and booking at Kensley Aesthetics in Jesmond, Newcastle.',
  alternates: { canonical: 'https://kensleyaesthetics.com/faq' },
  openGraph: {
    title: 'Aesthetic Treatment FAQs | Kensley Aesthetics Newcastle',
    description: 'Answers to common questions about consultations, treatments, recovery, prices and booking at Kensley Aesthetics in Jesmond, Newcastle.',
    url: 'https://kensleyaesthetics.com/faq',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function FAQPage() {
  const faqLd = faqPageJsonLd(FAQ_PAGE_FAQS);
  return (
    <>
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <FAQView />
    </>
  );
}
