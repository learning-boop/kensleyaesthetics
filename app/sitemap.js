import { LOCATIONS } from '@/src/data/locations';

const SITE_URL = 'https://kensleyaesthetics.com';

const SIGNATURE_SLUGS = [
  'smooth-lines', 'face-sculpt', 'skin-glow', 'collagen-restore',
  'clear-skin', 'neck-renewal', 'full-face-refresh', 'stay-youthful',
];

const MAIN_TREATMENT_SLUGS = [
  'anti-wrinkle-treatments', 'dermal-fillers', 'skin-boosters',
  'regenerative-treatments', 'biostimulators', 'microneedling',
  'rf-microneedling', 'hifu',
];

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/treatments`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/training`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/skin-concerns`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/testimonials`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/prices`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/book`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/treatment-plan`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/locations`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const treatmentPages = SIGNATURE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/treatments/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: now,
  }));

  const mainTreatmentPages = MAIN_TREATMENT_SLUGS.map((slug) => ({
    url: `${SITE_URL}/main-treatments/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
    lastModified: now,
  }));

  const locationPages = LOCATIONS.map((loc) => ({
    url: `${SITE_URL}/locations/${loc.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: now,
  }));

  return [...staticPages, ...treatmentPages, ...mainTreatmentPages, ...locationPages];
}
