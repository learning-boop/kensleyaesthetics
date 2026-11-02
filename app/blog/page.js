import BlogView from './BlogView';
import { client, BLOG_POSTS_QUERY } from '@/src/lib/sanityClient';

export const metadata = {
  title: 'Skincare & Aesthetics Journal | Kensley Aesthetics',
  description: 'Guides to non-surgical treatments, skincare and aftercare from Kensley Aesthetics, a doctor-led aesthetic clinic in Jesmond, Newcastle.',
  alternates: { canonical: 'https://kensleyaesthetics.com/blog' },
  openGraph: {
    title: 'Skincare & Aesthetics Journal | Kensley Aesthetics',
    description: 'Guides to non-surgical treatments, skincare and aftercare from Kensley Aesthetics, a doctor-led aesthetic clinic in Jesmond, Newcastle.',
    url: 'https://kensleyaesthetics.com/blog',
    siteName: 'Kensley Aesthetics',
    locale: 'en_GB',
    type: 'website',
    images: ['https://kensleyaesthetics.com/og/kensley-aesthetics-share.jpg'],
  },
};

// Posts are fetched at build time so the list is in the pre-rendered HTML
// (crawlers previously saw only "Loading articles…").
export default async function BlogPage() {
  let posts = null;
  try {
    posts = await client.fetch(BLOG_POSTS_QUERY);
  } catch {
    posts = null; // fall back to fetching in the browser
  }
  return <BlogView initialPosts={posts} />;
}
