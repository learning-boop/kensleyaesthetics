import { useEffect } from 'react';

export const SITE_NAME = 'Kensley Aesthetics';
export const SITE_URL  = 'https://kensleyaesthetics.com';

/* ────────────────────────────────────────────────────────────
 * DOM helpers
 * ──────────────────────────────────────────────────────────── */
function upsertMeta(attr, name, content) {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (content == null || content === '') {
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

/* Normalise a path to the canonical form used site-wide. */
export function canonicalFor(path = '/') {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
  return `${SITE_URL}${clean || '/'}`;
}

/* Build a <title>. */
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
 * Handles client-side updates for title + description during
 * SPA navigation, plus page-level JSON-LD injection.
 * Canonical, OG, and Twitter tags are handled by Next.js
 * server metadata in each app/page.js file.
 * ──────────────────────────────────────────────────────────── */
export default function SeoHead({
  title,
  description,
  path = '/',
  noindex = false,
  jsonLd,
  faqs,
  breadcrumbs,
}) {
  const jsonLdKey = JSON.stringify(jsonLd || null);
  const faqsKey   = JSON.stringify(faqs || null);
  const crumbsKey = JSON.stringify(breadcrumbs || null);

  useEffect(() => {
    const pageTitle = buildTitle(title);
    const desc      = (description || '').trim().slice(0, 160);

    document.title = pageTitle;

    upsertMeta('name', 'description', desc);
    upsertMeta('name', 'robots', noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // JSON-LD
    upsertJsonLd('seo-jsonld',     JSON.parse(jsonLdKey));
    upsertJsonLd('seo-faq',        faqPageLd(JSON.parse(faqsKey) || []));
    upsertJsonLd('seo-breadcrumb', breadcrumbLd(JSON.parse(crumbsKey) || []));

    document.documentElement.setAttribute('data-seo-path', path.replace(/\/+$/, '') || '/');

    return () => {
      document.documentElement.removeAttribute('data-seo-path');
    };
  }, [title, description, path, noindex, jsonLdKey, faqsKey, crumbsKey]);

  return null;
}
