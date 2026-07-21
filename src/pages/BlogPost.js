import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { client, BLOG_POST_QUERY, RECENT_POSTS_QUERY } from '../lib/sanityClient';
import SeoHead from '../components/SeoHead';
import { SITE_URL } from '../components/SeoHead';
import CtaSection from '../components/CtaSection';
import './pages.css';
import './Blog.css';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

// ── Portable Text component map ───────────────────────────
// Maps Sanity block types / marks to styled elements
const portableTextComponents = {
  block: {
    normal:     ({ children }) => <p className="bp-p">{children}</p>,
    h2:         ({ children }) => <h2 className="bp-h2">{children}</h2>,
    h3:         ({ children }) => <h3 className="bp-h3">{children}</h3>,
    h4:         ({ children }) => <h4 className="bp-h4">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="bp-quote">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="bp-ul">{children}</ul>,
    number: ({ children }) => <ol className="bp-ol">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="bp-li">{children}</li>,
    number: ({ children }) => <li className="bp-li">{children}</li>,
  },
  marks: {
    strong:    ({ children }) => <strong>{children}</strong>,
    em:        ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : '_self'}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="bp-link"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => (
      <figure className="bp-figure">
        <img
          src={value?.asset?.url}
          alt={value?.alt || ''}
          className="bp-image"
          loading="lazy"
        />
        {value?.caption && <figcaption className="bp-caption">{value.caption}</figcaption>}
      </figure>
    ),
  },
};

// ── Recent post card (sidebar) ────────────────────────────
function RecentCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="bp-recent-card">
      {post.coverImage && (
        <img src={post.coverImage} alt={post.coverImageAlt || post.title} className="bp-recent-card__img" loading="lazy" />
      )}
      <div className="bp-recent-card__body">
        <span className="bp-recent-card__cat">{post.category}</span>
        <p className="bp-recent-card__title">{post.title}</p>
        <span className="bp-recent-card__date">{formatDate(post.publishedAt)}</span>
      </div>
    </Link>
  );
}

function BlogPost() {
  const { slug }     = useParams();
  const navigate     = useNavigate();
  const [post, setPost]       = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      client.fetch(BLOG_POST_QUERY, { slug }),
      client.fetch(RECENT_POSTS_QUERY),
    ]).then(([postData, recentData]) => {
      if (!postData) { navigate('/blog', { replace: true }); return; }
      setPost(postData);
      // Related = recent posts excluding the current one
      setRelated(recentData.filter(p => p.slug !== slug).slice(0, 2));
    }).finally(() => setLoading(false));
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="blog-loading" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p className="blog-loading__text">Loading article…</p>
      </div>
    );
  }

  if (!post) return null;

  // ── SEO values ───────────────────────────────────────────
  const seoTitle       = post.seo?.metaTitle       || post.title;
  const seoDescription = post.seo?.metaDescription || post.excerpt;
  const seoImage       = post.seo?.ogImage         || post.coverImage;
  const canonicalPath  = `/blog/${post.slug}`;

  // ── JSON-LD: BlogPosting schema ───────────────────────────
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:         post.title,
    description:      seoDescription,
    image:            seoImage,
    datePublished:    post.publishedAt,
    dateModified:     post.publishedAt,
    url:              `${SITE_URL}${canonicalPath}`,
    inLanguage:       'en-GB',
    author: {
      '@type': 'Organization',
      name:    'Kensley Aesthetics',
      url:     SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name:    'Kensley Aesthetics',
      url:     SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id':   `${SITE_URL}${canonicalPath}`,
    },
  };

  return (
    <>
      <SeoHead
        title={seoTitle}
        description={seoDescription}
        image={seoImage}
        path={canonicalPath}
        type="article"
        jsonLd={jsonLd}
      />

      {/* ── Cover hero ──────────────────────────────────── */}
      <div className="bp-hero">
        {post.coverImage && (
          <img
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            className="bp-hero__img"
          />
        )}
        <div className="bp-hero__overlay">
          <div className="container">
            <Link to="/blog" className="bp-back">← Back to Journal</Link>
            <span className="bp-hero__category">{post.category}</span>
            <h1 className="bp-hero__title">{post.title}</h1>
            <div className="bp-hero__meta">
              <span>{formatDate(post.publishedAt)}</span>
              {post.readingTime && (
                <>
                  <span className="bp-hero__dot">·</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Article + sidebar ───────────────────────────── */}
      <section className="page-section">
        <div className="container">
          <div className="bp-layout">

            {/* Article body */}
            <article className="bp-article">
              <p className="bp-excerpt">{post.excerpt}</p>
              <div className="bp-divider" />
              <div className="bp-body">
                {post.body && (
                  <PortableText value={post.body} components={portableTextComponents} />
                )}
              </div>

              {/* Tags / category footer */}
              <div className="bp-footer">
                <span className="bp-footer__label">Category</span>
                <Link to={`/blog?category=${post.category}`} className="bp-footer__tag">
                  {post.category}
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="bp-sidebar">

              {/* CTA card */}
              <div className="bp-sidebar__card bp-sidebar__card--cta">
                <p className="section-label">Ready to Start?</p>
                <h3 className="bp-sidebar__heading">Book a Consultation</h3>
                <p className="bp-sidebar__text">
                  Talk to our team about the treatments that are right for you.
                </p>
                <Link to="/book" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 24 }}>
                  Book Now
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bp-sidebar__card">
                  <p className="section-label" style={{ marginBottom: 20 }}>More Articles</p>
                  <div className="bp-recent-list">
                    {related.map(p => <RecentCard key={p.slug} post={p} />)}
                  </div>
                  <Link to="/blog" className="bp-sidebar__all-link">View all articles →</Link>
                </div>
              )}

            </aside>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

export default BlogPost;
