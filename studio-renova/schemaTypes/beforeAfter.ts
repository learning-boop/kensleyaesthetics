import { defineType, defineField } from 'sanity'

export const beforeAfter = defineType({
  name: 'beforeAfter',
  title: 'Before & After',
  type: 'document',
  fields: [
    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'number',
      description: 'Lower number appears first (e.g. 1 = top of page)',
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Short description shown under the images, e.g. "Forehead Lines"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Used for the filter tabs on the gallery page',
      options: {
        list: [
          { title: 'Anti-Wrinkle Treatments', value: 'Anti-Wrinkle Treatments' },
          { title: 'Dermal Fillers',           value: 'Dermal Fillers' },
          { title: 'Skin Boosters',            value: 'Skin Boosters' },
          { title: 'Regenerative Treatments',  value: 'Regenerative Treatments' },
          { title: 'Biostimulators',           value: 'Biostimulators' },
          { title: 'Microneedling',            value: 'Microneedling' },
          { title: 'RF Microneedling',         value: 'RF Microneedling' },
          { title: 'HIFU',                     value: 'HIFU' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'beforeImage',
      title: 'Before Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'afterImage',
      title: 'After Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'treatment',
      title: 'Linked Treatment',
      type: 'reference',
      to: [{ type: 'mainTreatment' }],
      description: 'Optional — links the "Explore Treatment" button on the gallery card',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'category',
      media: 'afterImage',
      rank: 'rank',
    },
    prepare({ title, subtitle, media, rank }) {
      return {
        title: `#${rank} — ${title}`,
        subtitle,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Rank (ascending)',
      name: 'rankAsc',
      by: [{ field: 'rank', direction: 'asc' }],
    },
  ],
})
