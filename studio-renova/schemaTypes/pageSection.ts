import { defineType, defineField } from 'sanity'

/**
 * A content section on a long-form treatment page
 * (heading on the left, text on the right).
 *
 * Text format for `body`:
 *   - a blank line starts a new paragraph
 *   - lines starting with "- " become a bullet list
 *   - a line starting with "> " becomes a highlighted quote
 */
export const pageSection = defineType({
  name: 'pageSection',
  title: 'Page Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading (H2)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'text',
      rows: 10,
      description: 'Blank line = new paragraph. Start a line with "- " for a bullet, or "> " for a highlighted quote.',
    }),
    defineField({
      name: 'linkLabel',
      title: 'Button label (optional)',
      type: 'string',
      description: 'e.g. "View Dermal Filler Prices"',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Button link (optional)',
      type: 'string',
      description: 'Site path, e.g. "/prices" or "/about"',
    }),
  ],
  preview: { select: { title: 'heading', subtitle: 'body' } },
})
