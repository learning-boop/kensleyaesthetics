import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, BLOG_POSTS_QUERY } from '../lib/sanityClient';
import PageHero from '../components/PageHero';
import CtaSection from '../components/CtaSection';
import SeoHead from '../components/SeoHead';
import './pages.css';
import './Blog.css';

const CATEGORIES = ['All', 'Skin Tips', 'Treatments', 'Aftercare', 'Client Stories', 'News'];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function PostCard({ post, featured = false }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`blog-card${featured ? ' blog-card--featured' : ''}`}
    >
      <div className="blog-card__image-wrap">
        {post.coverImage
          ? <img src={post.coverImage} alt={post.coverImageAlt || post.title} className="blog-card__image" loading="lazy" />
          : <div className="blog-card__image-placeholder" />
        }
        <span className="blog-card__category">{post.category}</span>
      </div>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__date">{formatDate(post.publishedAt)}</span>
          {post.readingTime && (
            <>
              <span className="blog-card__dot">·</span>
              <span className="blog-card__read-time">{post.readingTime} min read</span>
            </>
          )}
        </div>
        <h2 className="blog-card__title">{post.title}</h2>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <span className="blog-card__link">Read Article →</span>
      </div>
    </Link>
  );
}

function Blog() {
  const [posts, setPosts]           = useState([]);
  const [loading, setLoading]       = useState(true);
  const [activeCategory, setActive] = useState('All');

  useEffect(() => {
    client.fetch(BLOG_POSTS_QUERY)
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory);

  const featuredPost = filtered.find(p => p.featured) || filtered[0];
  const remaining    = featured => filtered.filter(p => p !== featured);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Kensley Aesthetics Journal',
    description: 'Expert skin and aesthetic advice from the Kensley Aesthetics team.',
    url: 'https://kensleyaesthetics.co.uk/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Kensley Aesthetics',
      url: 'https://kensleyaesthetics.co.uk',
    },
  };

  return (
    <>
      <SeoHead
        title="Aesthetics & Skincare Journal | Expert Advice Newcastle"
        description="Expert guides on non-surgical aesthetic treatments, skincare tips, aftercare advice and real results from Kensley Aesthetics — Newcastle's leading doctor-led aesthetic clinic."
        keywords="aesthetics blog Newcastle, skincare tips Newcastle, dermal filler guide, anti-wrinkle treatment advice, lip filler guide Newcastle, jawline filler guide, non-surgical facelift guide, aesthetic aftercare tips"
        path="/blog"
        jsonLd={jsonLd}
      />

      <PageHero
        label="The Journal"
        title={<>Skin, Beauty &<br />Expert Advice</>}
        subtitle="Insights from the Kensley Aesthetics team — treatments, aftercare, and the science of beautiful skin."
      />

      <section className="page-section">
        <div className="container">

          {/* Category filter */}
          <div className="blog-filters" role="tablist" aria-label="Filter by category">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`blog-filter-btn${activeCategory === cat ? ' blog-filter-btn--active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading && (
            <div className="blog-loading">
              <p className="blog-loading__text">Loading articles…</p>
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="blog-empty">
              <p>No articles in this category yet. Check back soon.</p>
            </div>
          )}

          {!loading && filtered.length > 0 && (
            <>
              {/* Featured / hero post */}
              {featuredPost && (
                <div className="blog-featured">
                  <PostCard post={featuredPost} featured />
                </div>
              )}

              {/* Grid of remaining posts */}
              {remaining(featuredPost).length > 0 && (
                <div className="blog-grid">
                  {remaining(featuredPost).map(post => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default Blog;
