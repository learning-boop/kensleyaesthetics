import BlogView from './BlogView';

export const metadata = {
  title: 'Aesthetics & Skincare Journal | Expert Advice Newcastle | Kensley Aesthetics',
  description: "Expert guides on non-surgical aesthetic treatments, skincare tips, aftercare advice and real results from Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic.",
  alternates: { canonical: 'https://kensleyaesthetics.com/blog' },
  openGraph: {
    title: 'Aesthetics & Skincare Journal | Expert Advice Newcastle | Kensley Aesthetics',
    description: "Expert guides on non-surgical aesthetic treatments, skincare tips, aftercare advice and real results from Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic.",
    url: 'https://kensleyaesthetics.com/blog',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/logo512.png'],
  },
};

export default function BlogPage() {
  return <BlogView />;
}
