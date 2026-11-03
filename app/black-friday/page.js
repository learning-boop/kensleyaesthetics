import BlackFridayView from './BlackFridayView';
import { WINTER_EDIT_FAQS, isWinterEditLive } from '@/src/data/winterEdit';
import { faqPageJsonLd } from '@/src/data/pageFaqs';

const SITE_URL = 'https://kensleyaesthetics.com';
const URL = `${SITE_URL}/black-friday`;
const TITLE = 'Black Friday Skin Treatment Offers | Kensley Aesthetics Newcastle';
const DESCRIPTION = 'Black Friday prices on selected skin treatments at Kensley Aesthetics in Jesmond, Newcastle. Every treatment starts with a free consultation.';
const OG_IMAGE = `${SITE_URL}/og/kensley-winter-edit-share.jpg`;

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Black Friday at Kensley', item: URL },
  ],
};

export default function WinterEditPage() {
  // Checked at build time; the page re-checks in the browser as well.
  const ended = !isWinterEditLive();
  const faqLd = ended ? null : faqPageJsonLd(WINTER_EDIT_FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}
      <BlackFridayView initialEnded={ended} />
    </>
  );
}
