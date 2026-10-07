import { client, SUB_TREATMENT_QUERY } from '@/src/lib/sanityClient';
import { STATIC_SUB_TREATMENTS } from '@/src/data/subTreatments';
import SubTreatmentDetailClient from './SubTreatmentDetailClient';

const SITE_URL = 'https://kensleyaesthetics.com';

export async function generateStaticParams() {
  const sanity = await client.fetch(`*[_type == "subTreatment"]{ "slug": slug.current, "parentSlug": parentTreatment->slug.current }`);
  const params = sanity.map((s) => ({ slug: s.parentSlug, subSlug: s.slug }));
  for (const [parentSlug, subs] of Object.entries(STATIC_SUB_TREATMENTS)) {
    for (const sub of subs) {
      if (!params.some((p) => p.slug === parentSlug && p.subSlug === sub.slug)) {
        params.push({ slug: parentSlug, subSlug: sub.slug });
      }
    }
  }
  return params;
}

async function getSubTreatment(slug, subSlug) {
  const data = await client.fetch(SUB_TREATMENT_QUERY, { slug, subSlug });
  if (data) return data;

  const staticList = STATIC_SUB_TREATMENTS[slug] || [];
  const staticItem = staticList.find(item => item.slug === subSlug);
  if (staticItem) {
    return {
      label: staticItem.name,
      slug: staticItem.slug,
      group: staticItem.title || null,
      tagline: staticItem.tagline || null,
      description: staticItem.description || null,
      image: null,
      seoTitle: staticItem.seoTitle || null,
      seoDescription: staticItem.seoDescription || null,
      introduction: staticItem.introduction || null,
      anaesthetic: staticItem.anaesthetic || null,
      longevity: staticItem.longevity || null,
      duration: staticItem.duration || null,
      downtime: staticItem.downtime || null,
      numSessions: staticItem.numSessions || null,
      resultsTimeline: staticItem.resultsTimeline || null,
      whatItHelps: staticItem.whatItHelps || null,
      howItWorks: staticItem.howItWorks || null,
      benefits: staticItem.benefits || [],
      preparation: staticItem.preparation || null,
      whatToExpect: staticItem.whatToExpect || null,
      durationAndSessions: staticItem.durationAndSessions || null,
      resultsAndTimeline: staticItem.resultsAndTimeline || null,
      recoveryAndDowntime: staticItem.recoveryAndDowntime || null,
      aftercare: staticItem.aftercare || null,
      suitability: staticItem.suitability || null,
      sideEffectsAndRisks: staticItem.sideEffectsAndRisks || null,
      whyKensley: staticItem.whyKensley || null,
      faqs: staticItem.faqs || [],
      relatedTreatments: staticItem.relatedTreatments || [],
      priceStandard: staticItem.priceStandard || null,
      priceIntro: staticItem.priceIntro || null,
      parentLabel: slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      parentSlug: slug,
    };
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { slug, subSlug } = await params;
  const t = await getSubTreatment(slug, subSlug);

  if (!t) {
    return { title: 'Coming Soon | Kensley Aesthetics', robots: { index: false } };
  }

  const title = t.seoTitle || `${t.label} Newcastle | Kensley Aesthetics`;
  const description = (t.seoDescription
    || (t.tagline
      ? `${t.tagline} — expert ${t.label} at Kensley Aesthetics in Newcastle.`
      : `Expert ${t.label} at Kensley Aesthetics. Doctor-led aesthetic clinic in Newcastle.`)
  ).slice(0, 160);
  const url = `${SITE_URL}/main-treatments/${slug}/${subSlug}`;

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

export default async function SubTreatmentDetailPage({ params }) {
  const { slug, subSlug } = await params;
  const t = await getSubTreatment(slug, subSlug);

  const parentLabel = t?.parentLabel || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const url = `${SITE_URL}/main-treatments/${slug}/${subSlug}`;

  const jsonLd = t ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        name: t.label,
        description: t.tagline || t.description,
        url,
        provider: {
          '@type': 'MedicalBusiness',
          name: 'Kensley Aesthetics',
          url: SITE_URL,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Treatments', item: `${SITE_URL}/treatments` },
          { '@type': 'ListItem', position: 3, name: parentLabel, item: `${SITE_URL}/main-treatments/${slug}` },
          { '@type': 'ListItem', position: 4, name: t.label, item: url },
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
      <SubTreatmentDetailClient initialTreatment={t} />
    </>
  );
}
