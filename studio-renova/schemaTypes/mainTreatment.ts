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
      rows: 5,
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
      name: 'subTreatments',
      title: 'Sub-Treatments',
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
