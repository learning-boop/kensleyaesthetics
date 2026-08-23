/**
 * scripts/prerender.mjs
 * ─────────────────────────────────────────────────────────────────────────
 * Turns the CRA build (an empty <div id="root">) into real static HTML for
 * every route, with the per-page <title>, meta description, canonical,
 * Open Graph tags and JSON-LD already in the <head>.
 *
 * Why: Google currently receives "You need to enable JavaScript to run this
 * app." plus the HOMEPAGE canonical on every URL. Nothing else is indexable.
 *
 * Output
 *   build/200.html                         <- untouched SPA shell for unknown routes
 *   build/index.html                       <- prerendered "/"
 *   build/about/index.html  + about.html   <- prerendered "/about" (both forms, host-agnostic)
 *   build/main-treatments/dermal-fillers/lips-1ml/index.html  ... etc.
 *
 * Install:  npm i -D puppeteer
 * Run:      npm run build   (package.json "postbuild": "node scripts/prerender.mjs")
 *
 * Amplify: Chrome needs system libs - see amplify.yml notes in the audit. If
 * that is painful, run this in GitHub Actions and deploy the build/ folder.
 * ─────────────────────────────────────────────────────────────────────────
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import puppeteer from 'puppeteer';
import { getAllRoutes } from './routes.mjs';

const BUILD_DIR   = path.resolve('build');
const PORT        = Number(process.env.PRERENDER_PORT || 5055);
const ORIGIN      = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = Number(process.env.PRERENDER_CONCURRENCY || 4);
const ROUTE_TIMEOUT_MS = 45_000;

/* Third-party hosts to block while snapshotting: faster, no fake analytics hits,
 * and their injected DOM (chat widget etc.) never gets baked into the HTML. */
const BLOCKED_HOSTS = [
  'googletagmanager.com', 'google-analytics.com', 'doubleclick.net',
  'clarity.ms', 'facebook.net', 'facebook.com',
  'elfsightcdn.com', 'elfsight.com', 'mylucidfocus.com',
];

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css',
  '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.mp4': 'video/mp4',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.map': 'application/json',
};

/* Tiny static server: real file if it exists, otherwise the SPA shell */
function startServer(shellHtml) {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      const filePath = path.join(BUILD_DIR, urlPath);
      if (filePath.startsWith(BUILD_DIR) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
        return;
      }
      res.writeHead(200, { 'Content-Type': MIME['.html'] });
      res.end(shellHtml);
    });
    server.listen(PORT, '127.0.0.1', () => resolve(server));
  });
}

/* Scroll through the page so framer-motion whileInView sections fire and
 * their inline opacity:0 / transform styles are gone before we snapshot. */
async function autoScroll(page) {
  await page.evaluate(async () => {
    const step = 600;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
}

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 900 });
  await page.setUserAgent('Mozilla/5.0 (compatible; KensleyPrerender/1.0; +https://kensleyaesthetics.com)');
  await page.evaluateOnNewDocument(() => { window.__PRERENDER__ = true; });
  await page.setRequestInterception(true);
  page.on('request', req => {
    const host = new URL(req.url()).hostname;
    if (BLOCKED_HOSTS.some(h => host.endsWith(h))) return req.abort();
    req.continue();
  });

  try {
    await page.goto(ORIGIN + route, { waitUntil: 'networkidle0', timeout: ROUTE_TIMEOUT_MS });

    // Wait until SeoHead has applied the head for THIS route (see SeoHead/index.js)
    await page.waitForFunction(
      p => document.documentElement.getAttribute('data-seo-path') === p,
      { timeout: 15_000 },
      route === '/' ? '/' : route.replace(/\/+$/, ''),
    ).catch(() => console.warn(`   ${route}: SeoHead marker not found - check the page calls <SeoHead path="${route}">`));

    // Give Sanity-driven sections a beat, then settle animations
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 10_000 }).catch(() => {});
    await autoScroll(page);
    await page.waitForNetworkIdle({ idleTime: 300, timeout: 5_000 }).catch(() => {});

    // Clean-up inside the page before serialising
    await page.evaluate(() => {
      // Remove any leftover "hidden until scrolled" inline styles
      document.querySelectorAll('[style*="opacity: 0"], [style*="opacity:0"]').forEach(el => {
        el.style.opacity = ''; el.style.transform = '';
      });
      // Don't bake the booking drawer / mobile menu open-state into the HTML
      document.documentElement.removeAttribute('data-seo-path');
    });

    const html = await page.content();
    const text = await page.evaluate(() => document.getElementById('root')?.innerText?.length || 0);
    return { html, textLength: text };
  } finally {
    await page.close();
  }
}

function writeRoute(route, html) {
  if (route === '/') {
    fs.writeFileSync(path.join(BUILD_DIR, 'index.html'), html);
    return;
  }
  const rel = route.replace(/^\//, '');
  const dir = path.join(BUILD_DIR, rel);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html); // /about/ and Amplify/Apache dir index
  fs.writeFileSync(path.join(BUILD_DIR, `${rel}.html`), html); // /about via clean-URL hosts
}

/* main */
const shellPath = path.join(BUILD_DIR, 'index.html');
if (!fs.existsSync(shellPath)) { console.error('build/index.html not found - run `react-scripts build` first'); process.exit(1); }

const shellHtml = fs.readFileSync(shellPath, 'utf8');
fs.writeFileSync(path.join(BUILD_DIR, '200.html'), shellHtml); // SPA fallback for unknown URLs

const { all: routes } = await getAllRoutes();
console.log(`Prerendering ${routes.length} routes ...`);

const server  = await startServer(shellHtml);
const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] });

const queue = [...routes];
const failures = [];
let done = 0;

async function worker() {
  while (queue.length) {
    const { path: route } = queue.shift();
    try {
      const { html, textLength } = await renderRoute(browser, route);
      writeRoute(route, html);
      done++;
      const flag = textLength < 400 ? '  (warning: very little text - did Sanity return data?)' : '';
      console.log(`   done: ${route}  (${textLength} chars)${flag}`);
    } catch (err) {
      failures.push({ route, err: err.message });
      console.error(`   failed: ${route}: ${err.message}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
await browser.close();
server.close();

console.log(`\n${done}/${routes.length} routes prerendered${failures.length ? `, ${failures.length} failed` : ''}`);
if (failures.length) {
  failures.forEach(f => console.log(`   - ${f.route}: ${f.err}`));
  process.exit(1);
}
