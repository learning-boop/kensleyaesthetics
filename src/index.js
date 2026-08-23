
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import './tailwind.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * After `scripts/prerender.mjs` runs, every route ships as real HTML.
 * If the root already has server-rendered children, hydrate instead of
 * re-rendering from scratch so the pre-rendered content is never blanked.
 *
 * NOTE: pages that fetch from Sanity in useEffect start with `loading = true`
 * and render `null` on the first client render, which does not match the
 * pre-rendered markup. React 19 recovers by client-rendering (you'll see a
 * hydration warning in dev). That is acceptable for SEO purposes - Google has
 * already received the static HTML - but the long-term fix is to fetch Sanity
 * data at build time (see the audit, Phase 2b). Until then you can keep
 * `createRoot` behaviour by setting PRERENDER_HYDRATE=false.
 */
const shouldHydrate =
  container.hasChildNodes() && process.env.REACT_APP_PRERENDER_HYDRATE !== 'false';

if (shouldHydrate) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}

reportWebVitals();
