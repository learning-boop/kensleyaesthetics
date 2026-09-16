import { client } from '@/src/lib/sanityClient';
import TreatmentDetailClient from './TreatmentDetailClient';

const SITE_URL = 'https://kensleyaesthetics.com';

const META_QUERY = `*[_type == "treatment" && slug.current == $slug][0] {
  label, tagline, description, concern,
  "slug": slug.current,
  "image": image.asset->url,
  seoTitle, seoDescription,
  faqs[] { q, a }
}`;

async function getTreatment(slug) {
  return client.fetch(META_QUERY, { slug });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = await getTreatment(slug);

  if (!t) {
    return { title: 'Signature Programmes | Kensley Aesthetics' };
  }

  const title = t.seoTitle || `${t.label} | Kensley Aesthetics`;
  const description = (t.seoDescription || t.concern || t.tagline || t.description || '').slice(0, 160);
  const url = `${SITE_URL}/treatments/${slug}`;

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
      images: [t.image || `${SITE_URL}/logo512.png`],
    },
  };
}

export default async function TreatmentDetailPage({ params }) {
  const { slug } = await params;
  const t = await getTreatment(slug);

  const jsonLd = t ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/treatments/${slug}#service`,
        name: t.label,
        description: t.concern || t.tagline || t.description,
        url: `${SITE_URL}/treatments/${slug}`,
        provider: { '@id': `${SITE_URL}/#clinic` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Signature Programmes', item: `${SITE_URL}/treatments` },
          { '@type': 'ListItem', position: 3, name: t.label, item: `${SITE_URL}/treatments/${slug}` },
        ],
      },
      ...(t.faqs?.length ? [{
        '@type': 'FAQPage',
        mainEntity: t.faqs.filter(f => f?.q && f?.a).map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }] : []),
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
      <TreatmentDetailClient />
    </>
  );
}
