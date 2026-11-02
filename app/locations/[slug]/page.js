import { LOCATIONS, LOCATIONS_BY_SLUG } from '@/src/data/locations';
import LocationPageClient from './LocationPageClient';

const SITE_URL = 'https://kensleyaesthetics.com';

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = LOCATIONS_BY_SLUG[slug];

  if (!loc) {
    return { title: 'Locations | Kensley Aesthetics' };
  }

  const title = `Aesthetic Treatments in ${loc.name} | Kensley Aesthetics`;
  const description = `Doctor-led aesthetic treatments for clients across ${loc.name}, at our clinic on Sandyford Road, Jesmond. Book a consultation with Kensley Aesthetics.`.slice(0, 160);
  const url = `${SITE_URL}/locations/${loc.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Kensley Aesthetics',
      locale: 'en_GB',
      type: 'website',
      images: [`${SITE_URL}/og/kensley-aesthetics-share.jpg`],
    },
  };
}

export default async function LocationDetailPage({ params }) {
  const { slug } = await params;
  const loc = LOCATIONS_BY_SLUG[slug];

  const jsonLd = loc ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalBusiness',
        name: 'Kensley Aesthetics',
        url: SITE_URL,
        description: `Doctor-led aesthetic clinic in Jesmond, Newcastle, serving clients from ${loc.name} and across ${loc.region}.`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Old Brewery Court, 156 Sandyford Rd',
          addressLocality: 'Jesmond, Newcastle upon Tyne',
          addressRegion: 'Tyne and Wear',
          postalCode: 'NE2 1XG',
          addressCountry: 'GB',
        },
        telephone: '+44 333 057 0295',
        areaServed: { '@type': 'City', name: loc.name },
        founder: { '@id': `${SITE_URL}/#dr-tiru-matla` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${SITE_URL}/locations` },
          { '@type': 'ListItem', position: 3, name: loc.name, item: `${SITE_URL}/locations/${loc.slug}` },
        ],
      },
    ],
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <LocationPageClient />
    </>
  );
}
