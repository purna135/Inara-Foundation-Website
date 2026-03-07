import { defineField, defineType } from 'sanity';
import { RocketIcon } from '@sanity/icons';
import { richTextBlocks } from './objects/richText';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: RocketIcon,
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'media', title: 'Media' },
    { name: 'meta', title: 'Details' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().error('Every project needs a title'),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'Used in the project URL. Click "Generate" to create from title.',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required().error('Generate a slug from the title'),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Short summary shown below the title on the project page and on cards (max 200 chars)',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      group: 'content',
      of: richTextBlocks,
      description: 'The full project story. Use headings, bold, lists, quotes, videos, and images to make it engaging. All formatting will render on the website.',
    }),
    defineField({
      name: 'typeRef',
      title: 'Project Type',
      type: 'reference',
      to: [{ type: 'projectType' }],
      group: 'meta',
      description: 'Select from existing types, or create a new one from the Project Types section.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Project Type (Legacy)',
      type: 'string',
      group: 'meta',
      hidden: true,
    }),
    defineField({
      name: 'collaborator',
      title: 'Collaboration Partner (optional)',
      type: 'string',
      group: 'meta',
      description: 'Name of the partner organization (shown on the project page)',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      group: 'meta',
      options: { dateFormat: 'MMMM D, YYYY' },
      description: 'When the project started. If single-day event, just set this.',
      validation: (rule) => rule.required().error('A start date is required'),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (optional)',
      type: 'date',
      group: 'meta',
      options: { dateFormat: 'MMMM D, YYYY' },
      description: 'Optional. Set only for multi-day events or ongoing projects.',
    }),
    defineField({
      name: 'date',
      title: 'Date (Legacy)',
      type: 'string',
      group: 'meta',
      hidden: true,
      description: 'Legacy field — use Start Date / End Date instead.',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'meta',
    }),
    defineField({
      name: 'participants',
      title: 'Participants',
      type: 'string',
      group: 'meta',
      description: 'e.g. "3,000+ children across 20 slum areas"',
    }),
    defineField({
      name: 'highlights',
      title: 'Key Highlights',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      description: 'Bullet points shown in the sidebar. Keep them short and impactful.',
    }),
    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      group: 'media',
      options: { hotspot: true },
      description: 'Main hero image. Use a high-quality landscape photo (16:9 ratio works best).',
      validation: (rule) => rule.required().error('A cover image is required'),
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      group: 'media',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
              description: 'Optional caption shown below the image',
            }),
          ],
        },
      ],
      description: 'Additional photos for the gallery section. The first image appears large.',
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'createdDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
    {
      title: 'Start Date (newest)',
      name: 'dateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      typeName: 'typeRef.title',
      legacyType: 'type',
      collaborator: 'collaborator',
      startDate: 'startDate',
      date: 'date',
      media: 'cover',
    },
    prepare({ title, typeName, legacyType, collaborator, startDate, date, media }) {
      const typeStr = typeName || legacyType || '';
      const dateStr = startDate
        ? new Date(startDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
        : date || '';
      const parts = [typeStr, dateStr];
      if (collaborator) parts.push(`w/ ${collaborator}`);
      return {
        title,
        subtitle: parts.filter(Boolean).join(' · '),
        media,
      };
    },
  },
});
