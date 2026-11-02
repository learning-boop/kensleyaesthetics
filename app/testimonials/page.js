import TestimonialsView from './TestimonialsView';

export const metadata = {
  title: 'Client Reviews | Kensley Aesthetics Newcastle',
  description: 'Read what clients say about their experience at Kensley Aesthetics, a doctor-led aesthetic clinic in Jesmond, Newcastle.',
  alternates: { canonical: 'https://kensleyaesthetics.com/testimonials' },
  openGraph: {
    title: 'Client Reviews | Kensley Aesthetics Newcastle',
    description: 'Read what clients say about their experience at Kensley Aesthetics, a doctor-led aesthetic clinic in Jesmond, Newcastle.',
    url: 'https://kensleyaesthetics.com/testimonials',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
