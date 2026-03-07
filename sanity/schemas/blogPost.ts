import { defineField, defineType } from 'sanity';
import { richTextBlocks } from './objects/richText';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO & Meta' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'content',
      description: 'Used in the blog URL. Click "Generate" to create from title.',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      group: 'content',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Add tags like "Impact", "Volunteering", "Events" etc.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      description: 'Hero image for the blog post. Landscape 16:9 works best.',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Short summary for cards and search engines (max 160 chars)',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      group: 'content',
      of: richTextBlocks,
      description: 'Write your blog post here. Use headings, bold, images, videos, and more — all formatting renders on the website.',
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Title A-Z',
      name: 'titleAsc',
      by: [{ field: 'title', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: 'publishedAt',
      media: 'coverImage',
    },
    prepare({ title, author, date, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'Draft';
      return {
        title,
        subtitle: [author, formattedDate].filter(Boolean).join(' · '),
        media,
      };
    },
  },
});
