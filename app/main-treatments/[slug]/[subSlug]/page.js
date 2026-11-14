/**
 * Sub-treatment pages: /main-treatments/<treatment>/<sub-treatment>
 *
 * Sub-treatment pages were removed site-wide in Nov 2026. They are built
 * again ONLY for the treatments in SUB_PAGE_PARENTS (src/data/richTreatments.js)
 * — currently Dermal Fillers. Every other /main-treatments/<x>/<y> URL is not
 * built and still answers 410 Gone (public/.htaccess).
 */
import { client, SUB_TREATMENT_QUERY } from '@/src/lib/sanityClient';
import { getSubPageParams } from '@/src/lib/subPages';
import { hasSubPages, isRich, localSub } from '@/src/data/richTreatments';
import SubTreatmentDetailClient from './SubTreatmentDetailClient';

const SITE_URL = 'https://kensleyaesthetics.com';

export const dynamicParams = false;

export async function generateStaticParams() {
  return getSubPageParams();
}

async function getSubTreatment(slug, subSlug) {
  if (!hasSubPages(slug)) return null;
  let data = null;
  try {
    data = await client.fetch(SUB_TREATMENT_QUERY, { slug, subSlug });
  } catch {
    /* Sanity unreachable — local content below */
  }
  if (isRich(data)) return data;

  // Not pushed to Sanity yet: local content (keeps a Sanity image if there is one).
  const local = localSub(slug, subSlug);
  if (local) return { ...local, image: data?.image || local.image || null };
  return null;
}

export async function generateMetadata({ params }) {
  const { slug, subSlug } = await params;
  const t = await getSubTreatment(slug, subSlug);

  if (!t) {
    return { title: 'Coming Soon | Kensley Aesthetics', robots: { index: false } };
  }

  const title = t.seoTitle || `${t.label} Newcastle | Kensley Aesthetics`;
  const description = (t.seoDescription || t.tagline || `${t.label} at Kensley Aesthetics in Jesmond, Newcastle.`).slice(0, 160);
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
      images: [t.image || `${SITE_URL}/og/kensley-aesthetics-share.jpg`],
    },
  };
}

export default async function SubTreatmentDetailPage({ params }) {
  const { slug, subSlug } = await params;
  const t = await getSubTreatment(slug, subSlug);

  const parentLabel = t?.parentLabel || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  const url = `${SITE_URL}/main-treatments/${slug}/${subSlug}`;

  const graph = t ? [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: t.heroTitle || `${t.label} Newcastle`,
      description: t.seoDescription || t.tagline,
      url,
      provider: { '@id': `${SITE_URL}/#clinic` },
      areaServed: [
        { '@type': 'City', name: 'Newcastle upon Tyne' },
        { '@type': 'AdministrativeArea', name: 'North East England' },
      ],
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
  ] : [];

  if (t?.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: t.faqs.filter(f => f?.q && f?.a).map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return (
    <>
      {graph.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
        />
      )}
      <SubTreatmentDetailClient initialTreatment={t} />
    </>
  );
}
