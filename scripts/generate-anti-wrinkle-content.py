#!/usr/bin/env python
"""
Parse the Anti-Wrinkle docx and generate src/data/antiWrinkleContent.js
following the exact same structure as dermalFillersContent.js.
"""
import re, textwrap
from docx import Document

DOC_PATH = r'C:\Users\Admin\Downloads\Kensley_Anti_Wrinkle_subtreatments.docx'
OUT_PATH = r'D:\creative_touch\renova-next\src\data\antiWrinkleContent.js'

doc = Document(DOC_PATH)

# ── Extract all paragraphs with style info ──────────────────────────
paragraphs = []
for p in doc.paragraphs:
    text = p.text.strip()
    if text:
        paragraphs.append((p.style.name, text))

# ── Helper: find index ranges for each PART ─────────────────────────
def find_parts(paras):
    """Return indices where PART A, each SUBPAGE, and PART C start."""
    parts = []
    for i, (style, text) in enumerate(paras):
        if 'PART A' in text and 'MAIN PAGE' in text:
            parts.append(('MAIN', i))
        elif 'SUBPAGE' in text and 'OF 11' in text:
            m = re.search(r'SUBPAGE\s+(\d+)', text)
            parts.append((f'SUB{int(m.group(1))}', i))
        elif 'PART C' in text:
            parts.append(('PARTC', i))
    return parts

parts = find_parts(paragraphs)

def get_range(part_key):
    """Get paragraph range for a given part."""
    for idx, (key, start) in enumerate(parts):
        if key == part_key:
            end = parts[idx + 1][1] if idx + 1 < len(parts) else len(paragraphs)
            return paragraphs[start:end]
    return []

# ── Parse metadata from a part's paragraphs ─────────────────────────
def get_meta(paras, key_prefix):
    """Extract Metadata fields like SEO title, Meta description, URL."""
    result = {}
    for style, text in paras:
        if style == 'Metadata':
            if text.startswith('SEO title:'):
                result['seoTitle'] = text.replace('SEO title:', '').strip()
            elif text.startswith('Meta description:'):
                result['seoDescription'] = text.replace('Meta description:', '').strip()
    return result

# ── Parse content sections from paragraphs ───────────────────────────
def parse_sections(paras):
    """
    Parse Heading 2 sections into a list of {heading, body} dicts.
    Stops at 'Frequently Asked Questions' heading.
    Also returns FAQs and CTA info.
    """
    sections = []
    faqs = []
    cta_heading = None
    cta_body = None

    i = 0
    in_faq = False
    current_faq_q = None
    past_faq = False

    while i < len(paras):
        style, text = paras[i]

        if style == 'Heading 2' and 'Frequently Asked Questions' in text:
            in_faq = True
            i += 1
            continue

        if in_faq and not past_faq:
            if style == 'Heading 3':
                current_faq_q = text
            elif style == 'Normal' and current_faq_q:
                faqs.append({'q': current_faq_q, 'a': text})
                current_faq_q = None
            elif style == 'Heading 2':
                # This is the CTA heading after FAQs
                past_faq = True
                cta_heading = text
            i += 1
            continue

        if past_faq:
            if style == 'Normal' and cta_body is None:
                cta_body = text
            i += 1
            continue

        if style == 'Heading 2':
            heading = text
            body_parts = []
            i += 1
            while i < len(paras):
                s, t = paras[i]
                if s in ('Heading 2', 'Heading 3'):
                    break
                if s == 'Normal':
                    body_parts.append(t)
                elif s == 'ConsultationLink':
                    pass  # skip CTA links within sections
                i += 1
            sections.append({'heading': heading, 'body': '\n\n'.join(body_parts)})
            continue

        i += 1

    return sections, faqs, cta_heading, cta_body

# ── Parse a sub-treatment page ───────────────────────────────────────
def parse_sub(paras):
    """Parse a sub-treatment part into its content fields."""
    meta = get_meta(paras, 'sub')

    hero_title = None
    tagline = None
    description_parts = []
    hero_cta = None
    back_link = None
    related = []

    # Find hero title (Heading 1)
    content_start = 0
    for i, (style, text) in enumerate(paras):
        if style == 'Heading 1':
            hero_title = text
            content_start = i + 1
            break

    # Find tagline (first Heading 2 after hero)
    section_start = content_start
    for i in range(content_start, len(paras)):
        style, text = paras[i]
        if style == 'Heading 2':
            tagline = text
            section_start = i + 1
            break

    # Collect description paragraphs until next Heading 2 or ConsultationLink
    desc_end = section_start
    for i in range(section_start, len(paras)):
        style, text = paras[i]
        if style == 'ConsultationLink':
            hero_cta = text
            desc_end = i + 1
            break
        if style == 'Normal':
            description_parts.append(text)
        if style == 'Heading 2':
            desc_end = i
            break

    # Parse remaining sections, FAQs, CTA
    remaining = paras[desc_end:]

    # Filter out back link and related from the end
    clean_remaining = []
    for style, text in remaining:
        if style == 'ConsultationLink' and 'Back to' in text:
            back_link = text
        elif style == 'Normal' and text.startswith('Related consultation topics:'):
            related_text = text.replace('Related consultation topics:', '').strip()
            # Parse related slugs from names (separator is middle dot U+00B7)
            related = [r.strip() for r in re.split(r'\s*[\u00B7\u2013\u2014–—·]\s*', related_text) if r.strip()]
        else:
            clean_remaining.append((style, text))

    sections, faqs, cta_heading, cta_body = parse_sections(clean_remaining)

    return {
        'seoTitle': meta.get('seoTitle', ''),
        'seoDescription': meta.get('seoDescription', ''),
        'heroTitle': hero_title,
        'tagline': tagline,
        'description': '\n\n'.join(description_parts),
        'heroCtaLabel': hero_cta or 'Book a Consultation',
        'pageSections': sections,
        'faqs': faqs,
        'ctaHeading': cta_heading,
        'ctaBody': cta_body,
        'backLinkLabel': back_link or 'Back to Anti-Wrinkle Consultations',
        'related_names': related,
    }

# ── Parse main page ─────────────────────────────────────────────────
def parse_main(paras):
    meta = get_meta(paras, 'main')

    hero_title = None
    tagline = None
    description_parts = []
    hero_cta = None
    intro_sections = []
    treatments_heading = None
    treatments_intro = None
    treatment_cards = []
    page_sections = []
    faqs = []
    cta_heading = None
    cta_body = None
    cta_address = None
    cta_phone = None

    # Find hero
    content_start = 0
    for i, (style, text) in enumerate(paras):
        if style == 'Heading 1':
            hero_title = text
            content_start = i + 1
            break

    # Find tagline (first H2)
    for i in range(content_start, len(paras)):
        style, text = paras[i]
        if style == 'Heading 2':
            tagline = text
            content_start = i + 1
            break

    # Description until ConsultationLink
    for i in range(content_start, len(paras)):
        style, text = paras[i]
        if style == 'ConsultationLink':
            hero_cta = text
            content_start = i + 1
            break
        if style == 'Normal':
            description_parts.append(text)

    # Now parse intro sections (H2 sections until "Explore the 11 Areas")
    i = content_start
    while i < len(paras):
        style, text = paras[i]
        if style == 'Heading 2' and 'Explore the 11 Areas' in text:
            treatments_heading = text
            i += 1
            # Get treatments intro (Normal before first H3)
            while i < len(paras):
                s, t = paras[i]
                if s == 'Normal':
                    treatments_intro = t
                    i += 1
                    break
                i += 1
            break
        if style == 'Heading 2':
            heading = text
            body_parts = []
            i += 1
            while i < len(paras):
                s, t = paras[i]
                if s in ('Heading 2',):
                    break
                if s == 'Normal':
                    body_parts.append(t)
                i += 1
            intro_sections.append({'heading': heading, 'body': '\n\n'.join(body_parts)})
            continue
        i += 1

    # Parse treatment cards (H3 entries)
    while i < len(paras):
        style, text = paras[i]
        if style == 'Heading 3':
            card_title = re.sub(r'^\d+\.\s*', '', text).strip()
            card_body = None
            card_link = None
            i += 1
            while i < len(paras):
                s, t = paras[i]
                if s == 'Normal' and card_body is None:
                    card_body = t
                elif s == 'ConsultationLink':
                    card_link = t
                    i += 1
                    break
                elif s in ('Heading 3', 'Heading 2'):
                    break
                i += 1
            treatment_cards.append({
                'cardTitle': card_title,
                'cardBody': card_body or '',
                'cardLinkLabel': card_link or '',
            })
            continue
        if style == 'Heading 2':
            break
        i += 1

    # Parse page sections after treatment cards
    # These are H2 sections until "Frequently Asked Questions"
    remaining = paras[i:]
    page_sections, faqs, cta_heading, cta_body = parse_sections(remaining)

    # Extract address and phone from CTA body area
    # The CTA body in the document includes address info
    # Look in remaining paras after the CTA heading for address
    cta_address = "Kensley Aesthetics\nOld Brewery Court, 156 Sandyford Road\nJesmond, Newcastle upon Tyne, NE2 1XG"
    cta_phone = "0333 057 0295"

    return {
        'seoTitle': meta.get('seoTitle', ''),
        'seoDescription': meta.get('seoDescription', ''),
        'heroTitle': hero_title,
        'tagline': tagline,
        'description': '\n\n'.join(description_parts),
        'heroCtaLabel': hero_cta or 'Book an Anti-Wrinkle Consultation',
        'introSections': intro_sections,
        'treatmentsHeading': treatments_heading,
        'treatmentsIntro': treatments_intro,
        'treatmentCards': treatment_cards,
        'pageSections': page_sections,
        'faqs': faqs,
        'ctaHeading': cta_heading,
        'ctaBody': cta_body,
        'ctaAddress': cta_address,
        'ctaPhone': cta_phone,
    }

# ── Mapping: document sub-treatment index → Sanity ID & slug info ────
SUB_MAP = [
    # (doc_index, sanity_id, new_slug, old_slug_or_None, existing_image_or_None)
    (1, 'sub-treatment-anti-wrinkle-treatments-frown-lines', 'frown-lines', None, None),
    (2, 'sub-treatment-anti-wrinkle-treatments-forehead-lines', 'forehead-lines', None, None),  # NEW
    (3, 'sub-treatment-anti-wrinkle-treatments-crows-feet', 'crows-feet', None, None),
    (4, 'sub-treatment-anti-wrinkle-treatments-bunny-lines', 'bunny-lines', None, None),
    (5, 'sub-treatment-anti-wrinkle-treatments-gummy-smile', 'gummy-smile', None, None),
    (6, 'sub-treatment-anti-wrinkle-treatments-pebble-chin', 'chin-dimpling', 'pebble-chin', None),
    (7, 'sub-treatment-anti-wrinkle-treatments-downturned-mouth-corners', 'downturned-mouth-corners', None, None),  # NEW
    (8, 'sub-treatment-anti-wrinkle-treatments-jawline-slimming', 'masseter-jaw-muscles', 'jawline-slimming', 'https://cdn.sanity.io/images/puzajrus/production/8486755794f52275a292e2063c5214db72f5a805-1536x1024.webp'),
    (9, 'sub-treatment-anti-wrinkle-treatments-nefertiti-lift', 'neck-bands', 'nefertiti-lift', 'https://cdn.sanity.io/images/puzajrus/production/5d280878beb0b3d5808066843a4c9eda325103c5-1536x1024.webp'),
    (10, 'sub-treatment-anti-wrinkle-treatments-underarm-sweating', 'underarm-sweating', None, None),  # NEW
    (11, 'sub-treatment-anti-wrinkle-treatments-traptox', 'trapezius-muscles', 'traptox', 'https://cdn.sanity.io/images/puzajrus/production/e4820d4b58b6c4990bc75f8edc91f771fae2b8b9-1536x1024.webp'),
]

# Related name → slug mapping
RELATED_NAME_TO_SLUG = {
    'Forehead Lines': 'forehead-lines',
    'Crow\u2019s Feet': 'crows-feet',
    "Crow's Feet": 'crows-feet',
    'Frown Lines': 'frown-lines',
    'Bunny Lines': 'bunny-lines',
    'Gummy Smile': 'gummy-smile',
    'Chin Dimpling': 'chin-dimpling',
    'Downturned Mouth Corners': 'downturned-mouth-corners',
    'Masseter and Jaw Muscles': 'masseter-jaw-muscles',
    'Neck Bands': 'neck-bands',
    'Underarm Sweating': 'underarm-sweating',
    'Trapezius Muscles': 'trapezius-muscles',
}

# Hidden IDs (existing sub-treatments not in the document)
HIDDEN_IDS = [
    'sub-treatment-anti-wrinkle-treatments-women-one-area',
    'sub-treatment-anti-wrinkle-treatments-women-two-areas',
    'sub-treatment-anti-wrinkle-treatments-women-three-areas',
    'sub-treatment-anti-wrinkle-treatments-men-one-area',
    'sub-treatment-anti-wrinkle-treatments-men-two-areas',
    'sub-treatment-anti-wrinkle-treatments-men-three-areas',
    'sub-treatment-anti-wrinkle-treatments-glabellar-lines',
    'sub-treatment-anti-wrinkle-treatments-eyebrow-lift',
    'sub-treatment-anti-wrinkle-treatments-teeth-grinding',
    'sub-treatment-anti-wrinkle-treatments-migraine-treatment',
]

# ── Generate JS ──────────────────────────────────────────────────────
def js_string(s, indent=2):
    """Convert a Python string to a JS template literal or quoted string."""
    if s is None:
        return 'null'
    if '\n' in s:
        # Use template literal
        escaped = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
        return f'`{escaped}`'
    else:
        escaped = s.replace('\\', '\\\\').replace("'", "\\'")
        return f"'{escaped}'"

def js_sections(sections, indent=4):
    """Generate JS array of section objects."""
    if not sections:
        return '[]'
    lines = ['[']
    for s in sections:
        lines.append(f"    {{")
        lines.append(f"      heading: {js_string(s['heading'])},")
        lines.append(f"      body: {js_string(s['body'])},")
        if 'linkLabel' in s:
            lines.append(f"      linkLabel: {js_string(s.get('linkLabel'))},")
            lines.append(f"      linkUrl: {js_string(s.get('linkUrl'))},")
        lines.append(f"    }},")
    lines.append('  ]')
    return '\n'.join(lines)

def js_faqs(faqs_list):
    if not faqs_list:
        return '[]'
    lines = ['[']
    for f in faqs_list:
        lines.append(f"    {{")
        lines.append(f"      q: {js_string(f['q'])},")
        lines.append(f"      a: {js_string(f['a'])},")
        lines.append(f"    }},")
    lines.append('  ]')
    return '\n'.join(lines)

# Parse main page
main_paras = get_range('MAIN')
main = parse_main(main_paras)

# Parse all 11 sub pages
subs_data = []
for doc_idx, sanity_id, new_slug, old_slug, image in SUB_MAP:
    sub_paras = get_range(f'SUB{doc_idx}')
    sub = parse_sub(sub_paras)

    # Resolve related names to slugs
    related_slugs = []
    for name in sub['related_names']:
        # Try exact match first, then fuzzy
        slug = RELATED_NAME_TO_SLUG.get(name)
        if not slug:
            # Try normalising unicode
            normalised = name.replace('\u2019', "'").replace('\u2018', "'")
            slug = RELATED_NAME_TO_SLUG.get(normalised)
        if not slug:
            # Try partial match
            name_lower = name.lower()
            for k, v in RELATED_NAME_TO_SLUG.items():
                if k.lower() in name_lower or name_lower in k.lower():
                    slug = v
                    break
        if slug:
            related_slugs.append(slug)

    # Get card info from main page
    card = main['treatmentCards'][doc_idx - 1] if doc_idx <= len(main['treatmentCards']) else {}

    # Determine label - use explicit map for correct plural forms
    LABEL_MAP = {
        'frown-lines': 'Frown Lines',
        'forehead-lines': 'Forehead Lines',
        'crows-feet': "Crow's Feet",
        'bunny-lines': 'Bunny Lines',
        'gummy-smile': 'Gummy Smile',
        'chin-dimpling': 'Chin Dimpling',
        'downturned-mouth-corners': 'Downturned Mouth Corners',
        'masseter-jaw-muscles': 'Masseter and Jaw Muscles',
        'neck-bands': 'Neck Bands',
        'underarm-sweating': 'Underarm Sweating',
        'trapezius-muscles': 'Trapezius Muscles',
    }
    label = LABEL_MAP.get(new_slug, new_slug.replace('-', ' ').title())

    subs_data.append({
        '_id': sanity_id,
        'oldSlug': old_slug,
        'slug': new_slug,
        'num': doc_idx,
        'label': label,
        'image': image,
        'cardTitle': card.get('cardTitle', ''),
        'cardBody': card.get('cardBody', ''),
        'cardLinkLabel': card.get('cardLinkLabel', ''),
        'seoTitle': sub['seoTitle'],
        'seoDescription': sub['seoDescription'],
        'heroTitle': sub['heroTitle'],
        'tagline': sub['tagline'],
        'description': sub['description'],
        'heroCtaLabel': sub['heroCtaLabel'],
        'pageSections': sub['pageSections'],
        'faqs': sub['faqs'],
        'ctaHeading': sub['ctaHeading'],
        'ctaBody': sub['ctaBody'],
        'backLinkLabel': sub['backLinkLabel'],
        'related': related_slugs,
    })

# ── Write JS file ────────────────────────────────────────────────────
with open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write("""/**
 * Anti-Wrinkle Consultations \u2014 page content (Nov 2026 SEO / AEO / GEO content plan).
 *
 * Single source of truth for:
 *   \u2022 the local preview, before anything is pushed (pages fall back to this
 *     file whenever Sanity has not received the new fields yet)
 *   \u2022 scripts/push-anti-wrinkle.mjs, which writes this content to Sanity
 *
 * Once pushed, Sanity wins: editors change the copy in Studio and the site
 * reads it from there. This file is then only a fallback.
 *
 * Text format used in every `body` / `description` / `cardBody` field:
 *   - a blank line starts a new paragraph
 *   - lines starting with "- " become a bullet list
 *   - a line starting with "> " becomes a highlighted quote
 */

export const ANTI_WRINKLE_SLUG = 'anti-wrinkle-treatments';
export const ANTI_WRINKLE_MAIN_ID = 'mainTreatment-anti-wrinkle-treatments';

""")

    # Main page
    f.write("/* \u2500\u2500 Main page: /main-treatments/anti-wrinkle-treatments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n")
    f.write("export const ANTI_WRINKLE_MAIN = {\n")
    f.write(f"  label: 'Anti-Wrinkle Consultations',\n")
    f.write(f"  image: 'https://cdn.sanity.io/images/puzajrus/production/303dec2217535d5e640728a61155dd72458404ed-500x500.png',\n\n")
    f.write(f"  seoTitle: {js_string(main['seoTitle'])},\n")
    f.write(f"  seoDescription:\n    {js_string(main['seoDescription'])},\n\n")
    f.write(f"  heroTitle: {js_string(main['heroTitle'])},\n")
    f.write(f"  tagline: {js_string(main['tagline'])},\n")
    f.write(f"  description: {js_string(main['description'])},\n")
    f.write(f"  heroCtaLabel: {js_string(main['heroCtaLabel'])},\n\n")

    # introSections
    f.write(f"  introSections: {js_sections(main['introSections'])},\n\n")

    # treatments heading & intro
    f.write(f"  treatmentsHeading: {js_string(main['treatmentsHeading'])},\n")
    f.write(f"  treatmentsIntro:\n    {js_string(main['treatmentsIntro'])},\n\n")

    # pageSections
    # Add linkLabel/linkUrl for specific sections
    for s in main['pageSections']:
        if 'Consultation Fees' in s['heading']:
            s['linkLabel'] = 'View Consultation Prices'
            s['linkUrl'] = '/prices'
        elif 'Why Consider Kensley' in s['heading']:
            s['linkLabel'] = 'Learn About Kensley Aesthetics'
            s['linkUrl'] = '/about'

    f.write(f"  pageSections: {js_sections(main['pageSections'])},\n\n")

    # FAQs
    f.write(f"  faqHeading: 'Frequently Asked Questions About Anti-Wrinkle Consultations',\n")
    f.write(f"  faqs: {js_faqs(main['faqs'])},\n\n")

    # CTA
    f.write(f"  ctaHeading: {js_string(main['ctaHeading'])},\n")
    f.write(f"  ctaBody:\n    {js_string(main['ctaBody'])},\n")
    f.write(f"  ctaAddress: {js_string(main['ctaAddress'])},\n")
    f.write(f"  ctaPhone: {js_string(main['ctaPhone'])},\n")
    f.write(f"  ctaLabel: 'Book Your Consultation',\n")
    f.write("};\n\n")

    # Sub-treatments
    f.write("/* \u2500\u2500 The 11 consultation pages: /main-treatments/anti-wrinkle-treatments/<slug> \u2500\u2500\n")
    f.write(" * `_id`      Sanity document id. Some already exist in Sanity\n")
    f.write(" *            (their images are kept); new ones are created.\n")
    f.write(" * `oldSlug`  slug before Nov 2026; the old URL 301-redirects to the new one.\n")
    f.write(" * `card*`    the row shown for this treatment on the main page.\n")
    f.write(" * `related`  slugs of related consultation pages.\n")
    f.write(" */\n\n")
    f.write("export const ANTI_WRINKLE_SUBS = [\n")

    for i, sub in enumerate(subs_data):
        f.write(f"  /* {sub['num']} \u2500 {sub['label']} {''.join(['\u2500'] * max(1, 55 - len(sub['label'])))} */\n")
        f.write("  {\n")
        f.write(f"    _id: '{sub['_id']}',\n")
        if sub['oldSlug']:
            f.write(f"    oldSlug: '{sub['oldSlug']}',\n")
        f.write(f"    slug: '{sub['slug']}',\n")
        f.write(f"    num: {sub['num']},\n")
        f.write(f"    label: {js_string(sub['label'])},\n")
        if sub['image']:
            f.write(f"    image: '{sub['image']}',\n")
        else:
            f.write(f"    image: null,\n")
        f.write(f"\n")
        f.write(f"    cardTitle: {js_string(sub['cardTitle'])},\n")
        f.write(f"    cardBody: {js_string(sub['cardBody'])},\n")
        f.write(f"    cardLinkLabel: {js_string(sub['cardLinkLabel'])},\n")
        f.write(f"\n")
        f.write(f"    seoTitle: {js_string(sub['seoTitle'])},\n")
        f.write(f"    seoDescription:\n      {js_string(sub['seoDescription'])},\n")
        f.write(f"    heroTitle: {js_string(sub['heroTitle'])},\n")
        f.write(f"    tagline: {js_string(sub['tagline'])},\n")
        f.write(f"    description: {js_string(sub['description'])},\n")
        f.write(f"    heroCtaLabel: {js_string(sub['heroCtaLabel'])},\n")

        # pageSections
        f.write(f"    pageSections: [\n")
        for s in sub['pageSections']:
            f.write(f"      {{\n")
            f.write(f"        heading: {js_string(s['heading'])},\n")
            f.write(f"        body: {js_string(s['body'])},\n")
            f.write(f"      }},\n")
        f.write(f"    ],\n")

        # FAQs
        f.write(f"    faqHeading: 'Frequently Asked Questions',\n")
        f.write(f"    faqs: [\n")
        for faq in sub['faqs']:
            f.write(f"      {{\n")
            f.write(f"        q: {js_string(faq['q'])},\n")
            f.write(f"        a: {js_string(faq['a'])},\n")
            f.write(f"      }},\n")
        f.write(f"    ],\n")

        # CTA
        f.write(f"    ctaHeading: {js_string(sub['ctaHeading'])},\n")
        f.write(f"    ctaBody:\n      {js_string(sub['ctaBody'])},\n")
        f.write(f"    ctaLabel: {js_string(sub.get('ctaLabel', 'Book Your Consultation'))},\n")
        f.write(f"    backLinkLabel: {js_string(sub['backLinkLabel'])},\n")
        f.write(f"    related: {repr(sub['related'])},\n")
        f.write("  },\n\n")

    f.write("];\n\n")

    # Hidden IDs
    f.write("/* Existing sub-treatments NOT in the new content plan \u2014 left untouched. */\n")
    f.write("export const ANTI_WRINKLE_HIDDEN_IDS = [\n")
    for hid in HIDDEN_IDS:
        f.write(f"  '{hid}',\n")
    f.write("];\n")

print(f"Generated {OUT_PATH}")
print(f"Main page: {len(main['introSections'])} intro sections, {len(main['pageSections'])} page sections, {len(main['faqs'])} FAQs")
print(f"Treatment cards: {len(main['treatmentCards'])}")
print(f"Sub-treatments: {len(subs_data)}")
for s in subs_data:
    print(f"  {s['num']}. {s['label']} ({s['slug']}) - {len(s['pageSections'])} sections, {len(s['faqs'])} FAQs, related: {s['related']}")
