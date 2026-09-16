import TestimonialsView from './TestimonialsView';

export const metadata = {
  title: 'Client Testimonials | Real Reviews | Kensley Aesthetics Newcastle',
  description: 'Read verified client reviews and real stories from Kensley Aesthetics Newcastle. Discover what patients say about their dermal filler, anti-wrinkle, Profhilo, lip filler and skin rejuvenation results.',
  alternates: { canonical: 'https://kensleyaesthetics.com/testimonials' },
  openGraph: {
    title: 'Client Testimonials | Real Reviews | Kensley Aesthetics Newcastle',
    description: 'Read verified client reviews and real stories from Kensley Aesthetics Newcastle. Discover what patients say about their dermal filler, anti-wrinkle, Profhilo, lip filler and skin rejuvenation results.',
    url: 'https://kensleyaesthetics.com/testimonials',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
