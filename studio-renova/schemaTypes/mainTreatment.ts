import { defineType, defineField, defineArrayMember } from 'sanity'

export const mainTreatment = defineType({
  name: 'mainTreatment',
  title: 'Main Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'num',
      title: 'Number',
      type: 'string',
      description: 'Display number e.g. 01, 02',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Treatment Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'label', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 8,
      description: 'Intro text in the hero. Blank line = new paragraph (the first paragraph is shown as the lead).',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'image_second',
      title: 'Secondary Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'reviews',
      title: 'Before & After Images',
      type: 'array',
      of: [defineArrayMember({ type: 'image', options: { hotspot: true } })],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'ideal',
      title: 'Ideal For',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faq',
          fields: [
            defineField({ name: 'q', title: 'Question', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'a', title: 'Answer', type: 'text', rows: 3, validation: Rule => Rule.required() }),
          ],
          preview: { select: { title: 'q' } },
        }),
      ],
    }),
    defineField({
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'priceItem',
          fields: [
            defineField({ name: 'name', title: 'Service Name', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'price', title: 'Price', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'originalPrice', title: 'Original Price (if discounted)', type: 'string' }),
            defineField({ name: 'discount', title: 'Discount Label (e.g. 20% OFF)', type: 'string' }),
          ],
          preview: { select: { title: 'name', subtitle: 'price' } },
        }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom page title for search engines. Max 60 characters.',
      validation: Rule => Rule.max(70).warning('Aim for under 70 characters for best SERP display'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'Custom meta description. Max 160 characters.',
      validation: Rule => Rule.max(160).warning('Aim for under 160 characters'),
    }),
    // ── Long-form page (used by treatments with sub-treatment pages, e.g. Dermal Fillers) ──
    // When "Content Sections" is filled in, the page uses the long-form layout:
    // hero → intro sections → treatment rows → content sections → FAQs → closing CTA.
    defineField({
      name: 'heroTitle',
      title: 'Page Heading (H1)',
      type: 'string',
      description: 'e.g. "Dermal Fillers in Newcastle upon Tyne". Falls back to the treatment name.',
    }),
    defineField({
      name: 'heroCtaLabel',
      title: 'Hero Button Label',
      type: 'string',
      description: 'e.g. "Book a Dermal Filler Consultation"',
    }),
    defineField({
      name: 'introSections',
      title: 'Intro Sections (before the treatment list)',
      type: 'array',
      of: [defineArrayMember({ type: 'pageSection' })],
    }),
    defineField({
      name: 'treatmentsHeading',
      title: 'Treatment List Heading',
      type: 'string',
      description: 'e.g. "Explore Our Dermal Filler Treatments". The list itself comes from "Sub-Treatments" below (in that order).',
    }),
    defineField({
      name: 'treatmentsIntro',
      title: 'Treatment List Intro',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pageSections',
      title: 'Content Sections (after the treatment list)',
      type: 'array',
      of: [defineArrayMember({ type: 'pageSection' })],
    }),
    defineField({
      name: 'faqHeading',
      title: 'FAQ Heading',
      type: 'string',
      description: 'e.g. "Frequently Asked Questions About Dermal Fillers"',
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Closing CTA Heading',
      type: 'string',
    }),
    defineField({
      name: 'ctaBody',
      title: 'Closing CTA Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'ctaAddress',
      title: 'Closing CTA Address',
      type: 'text',
      rows: 3,
      description: 'One line per row. The first line is shown as the clinic name.',
    }),
    defineField({
      name: 'ctaPhone',
      title: 'Closing CTA Telephone',
      type: 'string',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Closing CTA Button Label',
      type: 'string',
    }),
    defineField({
      name: 'subTreatments',
      title: 'Sub-Treatments',
      type: 'array',
      description: 'Reference individual sub-treatment documents. Create them in the Sub-Treatments section first.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'subTreatment' }],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'tagline', media: 'image' },
  },
  orderings: [
    {
      title: 'Treatment Number',
      name: 'numAsc',
      by: [{ field: 'num', direction: 'asc' }],
    },
  ],
})
