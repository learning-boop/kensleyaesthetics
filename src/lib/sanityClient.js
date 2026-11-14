import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export const MAIN_TREATMENTS_QUERY = `*[_type == "mainTreatment"] | order(num asc) {
  num,
  "slug": slug.current,
  label,
  tagline,
  description,
  "image": image.asset->url,
  benefits
}`

export const BEFORE_AFTER_QUERY = `*[_type == "beforeAfter"] | order(rank asc) {
  rank,
  label,
  category,
  "beforeImage": beforeImage.asset->url,
  "afterImage": afterImage.asset->url,
  "treatmentSlug": treatment->slug.current,
  "treatmentLabel": treatment->label,
}`

// ── Blog ──────────────────────────────────────────────────
// All published posts — list view (no body to keep payload small)
export const BLOG_POSTS_QUERY = `*[_type == "blogPost" && publishedAt <= now()] | order(featured desc, publishedAt desc) {
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  category,
  featured,
  readingTime,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
}`

// Single post — full detail
export const BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug && publishedAt <= now()][0] {
  title,
  "slug": slug.current,
  publishedAt,
  _updatedAt,
  category,
  readingTime,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
  excerpt,
  body[] {
    ...,
    _type == "image" => {
      ...,
      "asset": asset->{ url, metadata { dimensions } },
    }
  },
  faqHeading,
  faqs[] { _key, q, a },
  seo {
    metaTitle,
    metaDescription,
    "ogImage": ogImage.asset->url,
  }
}`

// Recent posts — for sidebar / homepage widget
export const RECENT_POSTS_QUERY = `*[_type == "blogPost" && publishedAt <= now()] | order(publishedAt desc) [0..4] {
  "slug": slug.current,
  title,
  publishedAt,
  category,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
}`

// ── Main treatment detail page ───────────────────────────
// Shared by app/main-treatments/[slug]/page.js and src/views/MainTreatmentDetail.js.
// The long-form fields (heroTitle … ctaLabel) are used by treatments in
// SUB_PAGE_PARENTS (src/data/richTreatments.js); other treatments ignore them.
const PAGE_SECTION = `{ heading, body, linkLabel, linkUrl }`

export const MAIN_TREATMENT_DETAIL_QUERY = `*[_type == "mainTreatment" && slug.current == $slug][0] {
  num,
  "slug": slug.current,
  label,
  tagline,
  description,
  "image": image.asset->url,
  "image_second": image_second.asset->url,
  "reviews": reviews[].asset->url,
  benefits,
  ideal,
  faqs[] { q, a },
  seoTitle,
  seoDescription,
  heroTitle,
  heroCtaLabel,
  introSections[] ${PAGE_SECTION},
  treatmentsHeading,
  treatmentsIntro,
  pageSections[] ${PAGE_SECTION},
  faqHeading,
  ctaHeading,
  ctaBody,
  ctaAddress,
  ctaPhone,
  ctaLabel,
  subTreatments[]-> {
    "slug": slug.current,
    "title": group,
    "name": label,
    description,
    tagline,
    "image": image.asset->url,
    duration,
    priceStandard,
    priceIntro,
    cardTitle,
    cardBody,
    cardLinkLabel,
  }
}`

// ── Sub-Treatment ─────────────────────────────────────────
// Single sub-treatment detail page — matched by its own slug + parent slug
export const SUB_TREATMENT_QUERY = `*[_type == "subTreatment" && slug.current == $subSlug && parentTreatment->slug.current == $slug][0] {
  label,
  "slug": slug.current,
  group,
  num,
  tagline,
  description,
  whatItTreats,
  howItWorks,
  whatToExpect,
  ideal,
  benefits,
  duration,
  downtime,
  resultsTimeline,
  numSessions,
  priceStandard,
  priceIntro,
  "image": image.asset->url,
  "image_second": image_second.asset->url,
  "reviews": reviews[].asset->url,
  introduction,
  anaesthetic,
  longevity,
  whatItHelps,
  preparation,
  durationAndSessions,
  resultsAndTimeline,
  recoveryAndDowntime,
  aftercare,
  suitability,
  sideEffectsAndRisks,
  whyKensley,
  heroTitle,
  heroCtaLabel,
  pageSections[] ${PAGE_SECTION},
  faqHeading,
  ctaHeading,
  ctaBody,
  ctaLabel,
  backLinkLabel,
  "relatedTreatments": relatedTreatments[]-> {
    "slug": slug.current,
    "name": label,
    "title": group,
    "parentSlug": parentTreatment->slug.current,
  },
  faqs[] { q, a },
  seoTitle,
  seoDescription,
  "parentLabel": parentTreatment->label,
  "parentSlug": parentTreatment->slug.current,
  "parentNum": parentTreatment->num,
}`

// All sub-treatments for a given parent — used to build navigation/listing
export const SUB_TREATMENTS_BY_PARENT_QUERY = `*[_type == "subTreatment" && parentTreatment->slug.current == $slug] | order(num asc) {
  label,
  "slug": slug.current,
  group,
  num,
  tagline,
  "image": image.asset->url,
  priceStandard,
  priceIntro,
  duration,
  downtime,
}`

export const TREATMENTS_QUERY = `*[_type == "treatment"] | order(num asc) {
  num,
  "slug": slug.current,
  label,
  tagline,
  description,
  concern,
  "image": image.asset->url,
  "image_second": image_second.asset->url,
  "reviews": reviews[].asset->url,
  benefits,
  ideal,
  prices[] { name, price },
  steps[] {
    stepTitle,
    stepDescription,
    treatments[] { name, mainTreatmentSlug }
  },
  caveatLine,
  ctaLabel,
  seoTitle,
  seoDescription,
  faqs[] { q, a },
  subTreatments[] {
    title,
    name,
    description,
    "image": image.asset->url
  }
}`
