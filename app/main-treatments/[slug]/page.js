import { client } from '@/src/lib/sanityClient';
import { STATIC_MAIN_TREATMENTS } from '@/src/data/mainTreatments';
import { STATIC_SUB_TREATMENTS } from '@/src/data/subTreatments';
import { TREATMENT_KEYWORDS } from '@/src/data/keywords';
import MainTreatmentDetailClient from './MainTreatmentDetailClient';

const SITE_URL = 'https://kensleyaesthetics.com';

const META_QUERY = `*[_type == "mainTreatment" && slug.current == $slug][0] {
  label, tagline, description, "slug": slug.current,
  "image": image.asset->url,
  faqs[] { q, a },
  subTreatments[]-> { priceIntro, priceStandard }
}`;

async function getTreatment(slug) {
  const data = await client.fetch(META_QUERY, { slug });
  if (data) {
    if (!data.subTreatments || data.subTreatments.length === 0) {
      data.subTreatments = STATIC_SUB_TREATMENTS[slug] || [];
    }
    return data;
  }
  const staticMain = STATIC_MAIN_TREATMENTS[slug];
  if (staticMain) {
    return {
      ...staticMain,
      image: null,
      faqs: [],
      subTreatments: STATIC_SUB_TREATMENTS[slug] || [],
    };
  }
  return null;
}

function buildDescription(treatment, slug) {
  const kw = TREATMENT_KEYWORDS[slug] || 'non-surgical aesthetic treatment';
  return (treatment.tagline
    ? `${treatment.tagline} — ${kw} at Kensley Aesthetics in Newcastle.`
    : `Expert ${treatment.label} at Kensley Aesthetics. ${TREATMENT_KEYWORDS[slug] || 'Non-surgical aesthetic treatments'} in Newcastle.`
  ).slice(0, 160);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const t = await getTreatment(slug);

  if (!t) {
    return { title: 'Coming Soon | Kensley Aesthetics', robots: { index: false } };
  }

  const desc = buildDescription(t, slug);
  const title = `${t.label} Newcastle | Kensley Aesthetics`;
  const url = `${SITE_URL}/main-treatments/${slug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: 'Kensley Aesthetics',
      locale: 'en_GB',
      type: 'website',
      images: [t.image || `${SITE_URL}/logo512.png`],
    },
  };
}

export default async function MainTreatmentDetailPage({ params }) {
  const { slug } = await params;
  const t = await getTreatment(slug);

  const jsonLd = t ? buildJsonLd(t, slug) : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <MainTreatmentDetailClient />
    </>
  );
}

function buildJsonLd(treatment, slug) {
  const url = `${SITE_URL}/main-treatments/${slug}`;
  const priceFrom = treatment.subTreatments
    ?.map(s => s.priceIntro || s.priceStandard)
    .filter(Boolean)
    .sort((a, b) => a - b)[0];

  const graph = [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `${treatment.label} Newcastle`,
      description: treatment.tagline || treatment.description,
      url,
      provider: { '@id': `${SITE_URL}/#clinic` },
      areaServed: [
        { '@type': 'City', name: 'Newcastle upon Tyne' },
        { '@type': 'AdministrativeArea', name: 'North East England' },
      ],
      performer: { '@id': `${SITE_URL}/#dr-tiru-matla` },
      ...(priceFrom && {
        offers: {
          '@type': 'Offer',
          priceCurrency: 'GBP',
          price: priceFrom,
          availability: 'https://schema.org/InStock',
        },
      }),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Treatments', item: `${SITE_URL}/treatments` },
        { '@type': 'ListItem', position: 3, name: treatment.label, item: url },
      ],
    },
  ];

  if (treatment.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: treatment.faqs.filter(f => f?.q && f?.a).map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
