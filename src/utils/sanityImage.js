/**
 * Append Sanity CDN image transform parameters.
 * Requests WebP format and optional width for responsive sizing.
 *
 * @param {string} url  — Sanity CDN image URL
 * @param {object} opts — { width, height, quality, fit }
 * @returns {string}
 */
export function sanityImg(url, { width, height, quality = 80, fit } = {}) {
  if (!url || !url.includes('cdn.sanity.io')) return url;

  const sep = url.includes('?') ? '&' : '?';
  const params = [`fm=webp`, `q=${quality}`];
  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  if (fit) params.push(`fit=${fit}`);

  return `${url}${sep}${params.join('&')}`;
}

/**
 * Build a srcSet string for Sanity CDN images at multiple widths.
 *
 * @param {string} url    — base Sanity CDN URL
 * @param {number[]} widths — breakpoint widths (default: [400, 800, 1200])
 * @returns {string}  srcSet value
 */
/**
 * Shape of a Sanity image, read from its asset URL (e.g. "...-1122x1402.png").
 * Returns CSS custom properties so a frame can match the picture exactly,
 * or undefined when the size isn't in the URL (the CSS fallback shape is used).
 *
 * @param {string} url — Sanity CDN image URL
 * @returns {object|undefined} { '--lf-media-ratio': '1122 / 1402', '--lf-media-ar': 0.8 }
 */
export function sanityRatioStyle(url) {
  const m = typeof url === 'string' && url.match(/-(\d+)x(\d+)\.[a-z]+(?:\?|$)/i);
  if (!m) return undefined;
  const w = Number(m[1]);
  const h = Number(m[2]);
  if (!w || !h) return undefined;
  return { '--lf-media-ratio': `${w} / ${h}`, '--lf-media-ar': (w / h).toFixed(4) };
}

export function sanitySrcSet(url, widths = [400, 800, 1200]) {
  if (!url || !url.includes('cdn.sanity.io')) return undefined;

  return widths
    .map(w => `${sanityImg(url, { width: w })} ${w}w`)
    .join(', ');
}
