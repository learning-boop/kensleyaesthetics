import { defineType, defineField, defineArrayMember } from 'sanity'

export const treatment = defineType({
  name: 'treatment',
  title: 'Treatment',
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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required(),
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
      title: 'Review Images',
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
      name: 'concern',
      title: 'Concern Tagline',
      type: 'string',
      description: 'The skin concern this package targets — shown as a short intro line. e.g. "Dull, dry, tired-looking skin. I want glowing skin."',
    }),
    defineField({
      name: 'steps',
      title: 'Treatment Steps',
      type: 'array',
      description: 'Ordered treatment steps in this package. Each step links to the relevant main-treatment page.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          fields: [
            defineField({ name: 'stepTitle', title: 'Step Title', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'stepDescription', title: 'Step Description', type: 'text', rows: 3 }),
            defineField({
              name: 'treatments',
              title: 'Treatments in this step',
              type: 'array',
              description: 'Add each treatment option in this step. Include the main-treatment slug so the frontend can link to it.',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'treatmentLink',
                  fields: [
                    defineField({ name: 'name', title: 'Treatment Name', type: 'string', validation: Rule => Rule.required() }),
                    defineField({
                      name: 'mainTreatmentSlug',
                      title: 'Main Treatment Slug',
                      type: 'string',
                      description: 'e.g. skin-boosters, microneedling, hifu — must match the slug on the main treatment page',
                    }),
                  ],
                  preview: { select: { title: 'name', subtitle: 'mainTreatmentSlug' } },
                }),
              ],
            }),
          ],
          preview: { select: { title: 'stepTitle', subtitle: 'stepDescription' } },
        }),
      ],
    }),
    defineField({
      name: 'caveatLine',
      title: 'Compliance Caveat Line',
      type: 'string',
      description: 'Required compliance note shown at bottom of page. e.g. "Treatments are spaced 1–2 weeks apart; your practitioner will set your exact schedule."',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Button Label',
      type: 'string',
      description: 'Should always be "Book a Consultation" per compliance rules.',
      initialValue: 'Book a Consultation',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'e.g. "Glowing Skin Newcastle | Glow & Hydrate Plan — Kensley Aesthetics". Never include Botox / anti-wrinkle injection / toxin brand names.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 2,
      description: 'Max 160 characters. No POM terms, no guarantees.',
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
      name: 'subTreatments',
      title: 'Sub-Treatments (legacy)',
      description: 'Legacy pinned showcase items — use Treatment Steps above for new packages.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'subTreatment',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'name', title: 'Sub-name', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          ],
          preview: { select: { title: 'title', subtitle: 'name', media: 'image' } },
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
