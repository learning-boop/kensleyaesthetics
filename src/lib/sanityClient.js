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

export const TREATMENTS_QUERY = `*[_type == "treatment"] | order(num asc) {
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
  prices[] { name, price },
  subTreatments[] {
    title,
    name,
    description,
    "image": image.asset->url
  }
}`
