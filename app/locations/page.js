import LocationsView from './LocationsView';
import { LOCATIONS_FAQS, faqPageJsonLd } from '@/src/data/pageFaqs';

export const metadata = {
  title: 'Visit Our Clinic in Jesmond | Kensley Aesthetics',
  description: 'Find Kensley Aesthetics at Old Brewery Court, 156 Sandyford Rd, Jesmond, Newcastle NE2 1XG. Book a consultation online or call 0333 057 0295.',
  alternates: { canonical: 'https://kensleyaesthetics.com/locations' },
  openGraph: {
    title: 'Visit Our Clinic in Jesmond | Kensley Aesthetics',
    description: 'Find Kensley Aesthetics at Old Brewery Court, 156 Sandyford Rd, Jesmond, Newcastle NE2 1XG. Book a consultation online or call 0333 057 0295.',
    url: 'https://kensleyaesthetics.com/locations',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function LocationsPage() {
  const faqLd = faqPageJsonLd(LOCATIONS_FAQS);
  return (
    <>
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <LocationsView />
    </>
  );
}
