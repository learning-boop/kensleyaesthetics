import GalleryView from './GalleryView';
import { client, BEFORE_AFTER_QUERY } from '@/src/lib/sanityClient';

export const metadata = {
  title: 'Before & After Results | Kensley Aesthetics Newcastle',
  description: 'Before and after photos of treatments at Kensley Aesthetics in Jesmond, Newcastle. Individual results vary, and your clinician will explain what to expect.',
  alternates: { canonical: 'https://kensleyaesthetics.com/gallery' },
  openGraph: {
    title: 'Before & After Results | Kensley Aesthetics Newcastle',
    description: 'Before and after photos of treatments at Kensley Aesthetics in Jesmond, Newcastle. Individual results vary, and your clinician will explain what to expect.',
    url: 'https://kensleyaesthetics.com/gallery',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

// Before/after items are fetched at build time so they are in the pre-rendered HTML.
export default async function GalleryPage() {
  let items = null;
  try {
    items = await client.fetch(BEFORE_AFTER_QUERY);
  } catch {
    items = null; // fall back to fetching in the browser
  }
  return <GalleryView initialItems={items} />;
}
