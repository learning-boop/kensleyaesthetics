import BookView from './BookView';

export const metadata = {
  title: 'Book an Appointment | Kensley Aesthetics Newcastle',
  description: 'Book your aesthetic consultation or treatment at Kensley Aesthetics in Jesmond, Newcastle. Doctor-led care, bespoke treatment plans.',
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://kensleyaesthetics.com/book' },
  openGraph: {
    title: 'Book an Appointment | Kensley Aesthetics Newcastle',
    description: 'Book your aesthetic consultation or treatment at Kensley Aesthetics in Jesmond, Newcastle. Doctor-led care, bespoke treatment plans.',
    url: 'https://kensleyaesthetics.com/book',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

export default function BookPage() {
  return <BookView />;
}
