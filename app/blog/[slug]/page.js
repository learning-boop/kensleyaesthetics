import { client, BLOG_POST_QUERY, RECENT_POSTS_QUERY } from '@/src/lib/sanityClient';
import BlogPostClient from './BlogPostClient';

const SITE_URL = 'https://kensleyaesthetics.com';

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await client.fetch(BLOG_POST_QUERY, { slug });

  if (!post) {
    return { title: 'Blog | Kensley Aesthetics' };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = (post.seo?.metaDescription || post.excerpt || '').slice(0, 160);
  const image = post.seo?.ogImage || post.coverImage;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: `${title} | Kensley Aesthetics`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Kensley Aesthetics',
      locale: 'en_GB',
      type: 'article',
      images: image ? [image] : [`${SITE_URL}/logo512.png`],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt || post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    client.fetch(BLOG_POST_QUERY, { slug }),
    client.fetch(RECENT_POSTS_QUERY),
  ]);

  const related = recentPosts
    ? recentPosts.filter(p => p.slug !== slug).slice(0, 2)
    : [];

  const jsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt,
    image: post.seo?.ogImage || post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: 'en-GB',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#dr-tiru-matla`,
      name: 'Dr Tiru Matla',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#clinic`,
      name: 'Kensley Aesthetics',
      url: SITE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostClient initialPost={post} initialRelated={related} />
    </>
  );
}
