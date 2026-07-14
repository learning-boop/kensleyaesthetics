import { defineType, defineField, defineArrayMember } from 'sanity'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    // ── Core ──────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline shown on the post and in search results.',
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      description: 'Auto-generated from the title. Click "Generate" then save.',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      description: 'The post will appear on the website from this date.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Skin Tips',      value: 'Skin Tips' },
          { title: 'Treatments',     value: 'Treatments' },
          { title: 'Aftercare',      value: 'Aftercare' },
          { title: 'Client Stories', value: 'Client Stories' },
          { title: 'News',           value: 'News' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Pin this post to the top of the blog listing page.',
      initialValue: false,
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      description: 'Approximate read time shown on the card. A rough guide: 200 words ≈ 1 min.',
      validation: Rule => Rule.min(1).max(60).integer(),
    }),

    // ── Media ─────────────────────────────────────────────
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'Main image shown on the card and at the top of the post.',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and search engines.',
          validation: Rule => Rule.required(),
        }),
      ],
      validation: Rule => Rule.required(),
    }),

    // ── Content ───────────────────────────────────────────
    defineField({
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'A short summary shown on the card and used as the meta description (keep under 160 characters).',
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      description: 'The full article content. Use headings, bullet points, and images to keep it readable.',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal',      value: 'normal' },
            { title: 'Heading 2',   value: 'h2' },
            { title: 'Heading 3',   value: 'h3' },
            { title: 'Heading 4',   value: 'h4' },
            { title: 'Quote',       value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet list',   value: 'bullet' },
            { title: 'Numbered list', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Bold',          value: 'strong' },
              { title: 'Italic',        value: 'em' },
              { title: 'Underline',     value: 'underline' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule =>
                      Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                  }),
                  defineField({
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: false,
                  }),
                ],
              },
            ],
          },
        }),
        // Inline images within the body
        defineArrayMember({
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption (optional)',
            }),
          ],
        }),
      ],
      validation: Rule => Rule.required().min(1),
    }),

    // ── SEO Overrides ─────────────────────────────────────
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      description: 'Optional overrides. Leave blank to use the post title and excerpt automatically.',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'SEO Title',
          type: 'string',
          description: 'Overrides the post title in search results. Keep under 60 characters.',
          validation: Rule => Rule.max(60),
        }),
        defineField({
          name: 'metaDescription',
          title: 'SEO Description',
          type: 'text',
          rows: 2,
          description: 'Overrides the excerpt in search results. Keep under 160 characters.',
          validation: Rule => Rule.max(160),
        }),
        defineField({
          name: 'ogImage',
          title: 'Social Share Image',
          type: 'image',
          description: 'Shown when shared on social media. Ideal size: 1200×630 px.',
          options: { hotspot: true },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title:    'title',
      subtitle: 'category',
      media:    'coverImage',
    },
  },

  orderings: [
    {
      title: 'Published Date (newest first)',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date (oldest first)',
      name:  'publishedAtAsc',
      by:    [{ field: 'publishedAt', direction: 'asc' }],
    },
  ],
})
