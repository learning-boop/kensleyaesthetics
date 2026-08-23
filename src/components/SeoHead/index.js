import { useEffect } from 'react';

export const SITE_NAME = 'Kensley Aesthetics';
export const SITE_URL  = 'https://kensleyaesthetics.com';

/* ────────────────────────────────────────────────────────────
 * DOM helpers
 * ──────────────────────────────────────────────────────────── */
function upsertMeta(attr, name, content) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (content == null || content === '') {
    // Remove stale tags (e.g. og:image left over from the previous route)
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!href) { if (el) el.remove(); return; }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!data) { if (el) el.remove(); return; }
  if (!el) {
    el = document.createElement('script');
    el.id   = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/* Normalise a path to the canonical form used site-wide:
 * no trailing slash (except the homepage), no query string, no hash. */
export function canonicalFor(path = '/') {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
  return `${SITE_URL}${clean || '/'}`;
}

/* Build a <title>. If the page already includes the brand, don't add it again
 * ("Lip Fillers Newcastle | Kensley Aesthetics | Kensley Aesthetics" was live). */
export function buildTitle(title) {
  if (!title) return `${SITE_NAME} | Doctor-Led Aesthetic Clinic, Jesmond, Newcastle`;
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

/* ────────────────────────────────────────────────────────────
 * JSON-LD builders (used by pages that pass faqs / breadcrumbs)
 * ──────────────────────────────────────────────────────────── */
export function faqPageLd(faqs = []) {
  const items = faqs.filter(f => f && f.q && f.a);
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbLd(crumbs = []) {
  // crumbs: [{ name: 'Treatments', path: '/treatments' }, ...]
  if (!crumbs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: canonicalFor(c.path),
    })),
  };
}

/* ────────────────────────────────────────────────────────────
 * <SeoHead />
 *
 *   <SeoHead
 *     title="Lip Fillers Newcastle"
 *     description="..."
 *     path="/main-treatments/dermal-fillers/lips-1ml"
 *     image="https://cdn.sanity.io/..."
 *     type="article"                    // optional, default "website"
 *     noindex                           // optional - 404, booking, thank-you pages
 *     jsonLd={{...}}                    // optional page-level schema
 *     faqs={[{ q, a }]}                // optional -> FAQPage schema
 *     breadcrumbs={[{ name, path }]}   // optional -> BreadcrumbList schema
 *   />
 *
 * NOTE: `keywords` has been dropped - Google has ignored the keywords meta tag since 2009.
 * ──────────────────────────────────────────────────────────── */
export default function SeoHead({
  title,
  description,
  image,
  path = '/',
  type = 'website',
  noindex = false,
  jsonLd,
  faqs,
  breadcrumbs,
  publishedTime,
  modifiedTime,
}) {
  // Stringify complex props so the effect only re-runs when content changes,
  // not on every render (inline object literals are new references each render).
  const jsonLdKey = JSON.stringify(jsonLd || null);
  const faqsKey   = JSON.stringify(faqs || null);
  const crumbsKey = JSON.stringify(breadcrumbs || null);

  useEffect(() => {
    const pageTitle = buildTitle(title);
    const canonical = canonicalFor(path);
    const desc      = (description || '').trim().slice(0, 160);

    document.title = pageTitle;

    upsertMeta('name', 'description', desc);
    upsertMeta('name', 'robots', noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    upsertLink('canonical', noindex ? null : canonical);

    // Open Graph
    upsertMeta('property', 'og:site_name',   SITE_NAME);
    upsertMeta('property', 'og:locale',      'en_GB');
    upsertMeta('property', 'og:type',        type);
    upsertMeta('property', 'og:title',       pageTitle);
    upsertMeta('property', 'og:description', desc);
    upsertMeta('property', 'og:url',         canonical);
    upsertMeta('property', 'og:image',       image || `${SITE_URL}/logo512.png`);
    upsertMeta('property', 'article:published_time', type === 'article' ? publishedTime : null);
    upsertMeta('property', 'article:modified_time',  type === 'article' ? modifiedTime  : null);

    // Twitter
    upsertMeta('name', 'twitter:card',        'summary_large_image');
    upsertMeta('name', 'twitter:title',       pageTitle);
    upsertMeta('name', 'twitter:description', desc);
    upsertMeta('name', 'twitter:image',       image || `${SITE_URL}/logo512.png`);

    // JSON-LD (page-level). Organisation/Physician schema lives statically in index.html.
    upsertJsonLd('seo-jsonld',     JSON.parse(jsonLdKey));
    upsertJsonLd('seo-faq',        faqPageLd(JSON.parse(faqsKey) || []));
    upsertJsonLd('seo-breadcrumb', breadcrumbLd(JSON.parse(crumbsKey) || []));

    // Marker used by scripts/prerender.mjs to know the head for THIS route is final.
    document.documentElement.setAttribute('data-seo-path', path.replace(/\/+$/, '') || '/');

    return () => {
      document.documentElement.removeAttribute('data-seo-path');
    };
  }, [title, description, image, path, type, noindex, jsonLdKey, faqsKey, crumbsKey, publishedTime, modifiedTime]);

  return null;
}
