import GalleryView from './GalleryView';

export const metadata = {
  title: 'Before & After Gallery | Real Patient Results Newcastle | Kensley Aesthetics',
  description: 'View real before and after results from Kensley Aesthetics Newcastle — dermal fillers, lip fillers, Profhilo, RF microneedling, HIFU, jawline filler, cheek filler and tear trough filler. Genuine patient photos.',
  alternates: { canonical: 'https://kensleyaesthetics.com/gallery' },
  openGraph: {
    title: 'Before & After Gallery | Real Patient Results Newcastle | Kensley Aesthetics',
    description: 'View real before and after results from Kensley Aesthetics Newcastle — dermal fillers, lip fillers, Profhilo, RF microneedling, HIFU, jawline filler, cheek filler and tear trough filler. Genuine patient photos.',
    url: 'https://kensleyaesthetics.com/gallery',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}
