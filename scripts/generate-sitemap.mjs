/**
 * scripts/generate-sitemap.mjs
 * Writes public/sitemap.xml (and build/sitemap.xml if a build exists) from
 * every real route - Sanity treatments, sub-treatments, programmes and blog
 * posts plus the static pages. Replaces the hand-written sitemap that listed
 * a non-existent /contact, Title-Case blog slugs and only 8 of 16 treatments.
 *
 * package.json:  "prebuild": "node scripts/generate-sitemap.mjs"
 */
import fs from 'node:fs';
import { getAllRoutes, SITE_URL } from './routes.mjs';

const escapeXml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const today = new Date().toISOString().slice(0, 10);

const { sitemap } = await getAllRoutes();

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemap.map(r => [
    '  <url>',
    `    <loc>${escapeXml(SITE_URL + (r.path === '/' ? '/' : r.path))}</loc>`,
    `    <lastmod>${(r.lastmod || today).slice(0, 10)}</lastmod>`,
    `    <changefreq>${r.changefreq || 'monthly'}</changefreq>`,
    `    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
if (fs.existsSync('build')) fs.writeFileSync('build/sitemap.xml', xml);

console.log(`sitemap.xml written with ${sitemap.length} URLs`);
