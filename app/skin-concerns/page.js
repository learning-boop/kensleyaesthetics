import SkinConcernsView from './SkinConcernsView';
import { SKIN_CONCERNS_FAQS, faqPageJsonLd } from '@/src/data/pageFaqs';

export const metadata = {
  title: 'Skin Concerns & Treatment Options | Kensley Aesthetics',
  description: 'Explore treatment options by skin concern, from fine lines and volume loss to pigmentation and acne scarring, at Kensley Aesthetics in Jesmond, Newcastle.',
  alternates: { canonical: 'https://kensleyaesthetics.com/skin-concerns' },
  openGraph: {
    title: 'Skin Concerns & Treatment Options | Kensley Aesthetics',
    description: 'Explore treatment options by skin concern, from fine lines and volume loss to pigmentation and acne scarring, at Kensley Aesthetics in Jesmond, Newcastle.',
    url: 'https://kensleyaesthetics.com/skin-concerns',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function SkinConcernsPage() {
  const faqLd = faqPageJsonLd(SKIN_CONCERNS_FAQS);
  return (
    <>
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <SkinConcernsView />
    </>
  );
}
