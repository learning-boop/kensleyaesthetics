import { defineType, defineField, defineArrayMember } from 'sanity'

export const subTreatment = defineType({
  name: 'subTreatment',
  title: 'Sub-Treatment',
  type: 'document',
  fields: [
    // ── Identity ──────────────────────────────────────────
    defineField({
      name: 'label',
      title: 'Treatment Name',
      type: 'string',
      description: 'Display name, e.g. "Lip Fillers" or "Crow\'s Feet"',
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
      name: 'parentTreatment',
      title: 'Parent Treatment',
      type: 'reference',
      to: [{ type: 'mainTreatment' }],
      description: 'The main treatment this sub-treatment belongs to',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Group / Category',
      type: 'string',
      description: 'Optional grouping label shown on the parent page, e.g. "Women", "Standard Areas", "With Calecim®"',
    }),
    defineField({
      name: 'num',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order within the parent treatment\'s sub-treatment list',
    }),

    // ── Content ───────────────────────────────────────────
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'One-line summary shown in cards and hero, e.g. "Smooth forehead lines with precision anti-wrinkle injections"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 6,
      description: 'Main introductory description for the treatment page',
    }),
    defineField({
      name: 'whatItTreats',
      title: 'What It Treats',
      type: 'text',
      rows: 4,
      description: 'Describe the concerns or conditions this treatment addresses',
    }),
    defineField({
      name: 'howItWorks',
      title: 'How It Works',
      type: 'text',
      rows: 5,
      description: 'Explain the mechanism/procedure in plain language',
    }),
    defineField({
      name: 'whatToExpect',
      title: 'What to Expect',
      type: 'text',
      rows: 5,
      description: 'Step-by-step walkthrough of the appointment experience',
    }),
    defineField({
      name: 'ideal',
      title: 'Ideal For',
      type: 'text',
      rows: 3,
      description: 'Who is best suited for this treatment',
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Bullet-point benefits shown in the benefits strip',
    }),

    // ── Extended Content ──────────────────────────────────
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'anaesthetic',
      title: 'Anaesthetic',
      type: 'string',
      description: 'e.g. "None" or "Topical numbing cream available"',
    }),
    defineField({
      name: 'longevity',
      title: 'Results Longevity',
      type: 'string',
      description: 'How long results typically last, e.g. "3–4 months" or "12–18 months"',
    }),
    defineField({
      name: 'whatItHelps',
      title: 'What This Treatment Can Help With',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'preparation',
      title: 'Preparing for Your Treatment',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'durationAndSessions',
      title: 'Treatment Duration and Sessions',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'resultsAndTimeline',
      title: 'Results and Expected Timeline',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'recoveryAndDowntime',
      title: 'Recovery and Downtime',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'aftercare',
      title: 'Aftercare Guidance',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'suitability',
      title: 'Suitability',
      type: 'text',
      rows: 4,
      description: 'Who may be suitable / who may not be',
    }),
    defineField({
      name: 'sideEffectsAndRisks',
      title: 'Possible Side Effects and Risks',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'whyKensley',
      title: 'Why Choose Kensley Aesthetics?',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'relatedTreatments',
      title: 'Related Treatments',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subTreatment' }] }],
    }),

    // ── Treatment Details (SEO-critical) ──────────────────
    defineField({
      name: 'duration',
      title: 'Treatment Duration',
      type: 'string',
      description: 'e.g. "30–45 minutes"',
    }),
    defineField({
      name: 'downtime',
      title: 'Downtime',
      type: 'string',
      description: 'e.g. "None" or "1–2 days of mild redness"',
    }),
    defineField({
      name: 'resultsTimeline',
      title: 'Results Timeline',
      type: 'string',
      description: 'e.g. "Visible within 2 weeks, lasting 3–4 months"',
    }),
    defineField({
      name: 'numSessions',
      title: 'Recommended Sessions',
      type: 'string',
      description: 'e.g. "1 session" or "Course of 3 recommended"',
    }),

    // ── Pricing ───────────────────────────────────────────
    defineField({
      name: 'priceStandard',
      title: 'Standard Price',
      type: 'string',
      description: 'e.g. "£349" or "From £349"',
    }),
    defineField({
      name: 'priceIntro',
      title: 'Introductory Price',
      type: 'string',
      description: 'e.g. "£299" or "From £299"',
    }),

    // ── Media ─────────────────────────────────────────────
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

    // ── FAQs ──────────────────────────────────────────────
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
            defineField({ name: 'a', title: 'Answer',   type: 'text', rows: 3, validation: Rule => Rule.required() }),
          ],
          preview: { select: { title: 'q' } },
        }),
      ],
    }),

    // ── SEO ───────────────────────────────────────────────
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom page title for search engines. Max 60 characters.',
      validation: Rule => Rule.max(60).warning('Aim for under 60 characters for best SERP display'),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'Custom meta description. Max 160 characters.',
      validation: Rule => Rule.max(160).warning('Aim for under 160 characters'),
    }),
  ],

  preview: {
    select: {
      title: 'label',
      parentLabel: 'parentTreatment.label',
      group: 'group',
      media: 'image',
    },
    prepare({ title, parentLabel, group, media }) {
      const subtitle = [parentLabel, group].filter(Boolean).join(' › ')
      return { title, subtitle: subtitle || 'No parent treatment set', media }
    },
  },

  orderings: [
    {
      title: 'Parent Treatment, then Display Order',
      name: 'parentThenNum',
      by: [
        { field: 'parentTreatment.num', direction: 'asc' },
        { field: 'num', direction: 'asc' },
      ],
    },
  ],
})
