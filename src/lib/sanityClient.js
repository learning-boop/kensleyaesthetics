import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'puzajrus',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
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
export const BLOG_POSTS_QUERY = `*[_type == "blogPost"] | order(featured desc, publishedAt desc) {
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
export const BLOG_POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  publishedAt,
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
  seo {
    metaTitle,
    metaDescription,
    "ogImage": ogImage.asset->url,
  }
}`

// Recent posts — for sidebar / homepage widget
export const RECENT_POSTS_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) [0..2] {
  "slug": slug.current,
  title,
  publishedAt,
  category,
  "coverImage": coverImage.asset->url,
  "coverImageAlt": coverImage.alt,
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
