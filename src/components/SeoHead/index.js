import { useEffect } from 'react';

const SITE_NAME = 'Kensley Aesthetics';
const SITE_URL  = 'https://kensleyaesthetics.co.uk';

function setMeta(attr, name, content) {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
}

function setCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * SeoHead — sets document title, meta description, keywords, Open Graph,
 * Twitter Card, canonical URL, and optional JSON-LD structured data.
 *
 * Usage:
 *   <SeoHead
 *     title="Post title"
 *     description="Short summary"
 *     keywords="keyword one, keyword two"
 *     image="https://cdn.sanity.io/..."
 *     path="/blog/my-post"
 *     type="article"
 *     jsonLd={{ "@type": "BlogPosting", ... }}
 *   />
 */
function SeoHead({ title, description, keywords, image, path, type = 'website', jsonLd }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

    // ── Document title ────────────────────────────────────
    document.title = pageTitle;

    // ── Standard meta ─────────────────────────────────────
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    // ── Open Graph ────────────────────────────────────────
    setMeta('property', 'og:site_name',   SITE_NAME);
    setMeta('property', 'og:type',        type);
    setMeta('property', 'og:title',       pageTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url',         canonical);
    if (image) setMeta('property', 'og:image', image);

    // ── Twitter Card ──────────────────────────────────────
    setMeta('name', 'twitter:card',        image ? 'summary_large_image' : 'summary');
    setMeta('name', 'twitter:title',       pageTitle);
    setMeta('name', 'twitter:description', description);
    if (image) setMeta('name', 'twitter:image', image);

    // ── Canonical ─────────────────────────────────────────
    setCanonical(canonical);

    // ── JSON-LD structured data ───────────────────────────
    if (jsonLd) {
      let script = document.getElementById('seo-jsonld');
      if (!script) {
        script = document.createElement('script');
        script.id   = 'seo-jsonld';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const script = document.getElementById('seo-jsonld');
      if (script) script.remove();
    };
  }, [title, description, keywords, image, path, type, jsonLd]);

  return null;
}

export default SeoHead;
export { SITE_URL, SITE_NAME };
