
import React from 'react';
import { createRoot } from 'react-dom/client';
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
 * Google receives the fully-rendered static HTML for SEO.
 *
 * We always use createRoot (not hydrateRoot) because pages that fetch from
 * Sanity in useEffect start with `loading = true` / empty state on the first
 * client render, which doesn't match the pre-rendered markup. hydrateRoot
 * causes React error #418 (text content mismatch) in production. createRoot
 * simply replaces the pre-rendered content — the brief flash is imperceptible
 * and SEO is unaffected since bots already have the static HTML.
 */
createRoot(container).render(app);

reportWebVitals();
