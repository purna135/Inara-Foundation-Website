import { defineField } from 'sanity';
import {
  PlayIcon,
  RocketIcon,
  InfoOutlineIcon,
  ImagesIcon,
  BlockquoteIcon,
} from '@sanity/icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const richTextBlocks: any[] = [
  {
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'Heading 2', value: 'h2' },
      { title: 'Heading 3', value: 'h3' },
      { title: 'Heading 4', value: 'h4' },
      { title: 'Quote', value: 'blockquote' },
    ],
    marks: {
      decorators: [
        { title: 'Bold', value: 'strong' },
        { title: 'Italic', value: 'em' },
        { title: 'Underline', value: 'underline' },
        { title: 'Strikethrough', value: 'strike-through' },
        { title: 'Code', value: 'code' },
      ],
      annotations: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            defineField({ name: 'href', type: 'url', title: 'URL' }),
          ],
        },
      ],
    },
    lists: [
      { title: 'Bullet', value: 'bullet' },
      { title: 'Numbered', value: 'number' },
    ],
  },
  {
    type: 'image',
    title: 'Image',
    options: { hotspot: true },
    fields: [
      defineField({ name: 'caption', title: 'Caption', type: 'string' }),
      defineField({
        name: 'alt',
        title: 'Alt Text',
        type: 'string',
        description: 'Important for accessibility',
      }),
    ],
  },
  {
    type: 'object',
    name: 'videoEmbed',
    title: 'Video',
    icon: PlayIcon,
    fields: [
      defineField({
        name: 'url',
        type: 'url',
        title: 'Video URL',
        description: 'Paste a YouTube or Vimeo link',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'caption',
        type: 'string',
        title: 'Caption (optional)',
      }),
    ],
    preview: {
      select: { url: 'url', caption: 'caption' },
      prepare({ url, caption }: { url?: string; caption?: string }) {
        return { title: caption || 'Video', subtitle: url || '' };
      },
    },
  },
  {
    type: 'object',
    name: 'callToAction',
    title: 'Call to Action',
    icon: RocketIcon,
    fields: [
      defineField({
        name: 'heading',
        type: 'string',
        title: 'Heading',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'text',
        type: 'text',
        title: 'Description',
        rows: 2,
      }),
      defineField({
        name: 'buttonText',
        type: 'string',
        title: 'Button Text',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'buttonUrl',
        type: 'url',
        title: 'Button URL',
        validation: (rule) =>
          rule.required().uri({ allowRelative: true, scheme: ['http', 'https', 'mailto'] }),
      }),
      defineField({
        name: 'style',
        type: 'string',
        title: 'Style',
        initialValue: 'primary',
        options: {
          list: [
            { title: 'Primary (brand color)', value: 'primary' },
            { title: 'Dark', value: 'dark' },
          ],
          layout: 'radio',
        },
      }),
    ],
    preview: {
      select: { heading: 'heading', buttonText: 'buttonText' },
      prepare({ heading, buttonText }: { heading?: string; buttonText?: string }) {
        return { title: heading || 'Call to Action', subtitle: buttonText || '' };
      },
    },
  },
  {
    type: 'object',
    name: 'callout',
    title: 'Info Box',
    icon: InfoOutlineIcon,
    fields: [
      defineField({
        name: 'tone',
        type: 'string',
        title: 'Tone',
        initialValue: 'info',
        options: {
          list: [
            { title: 'Info (blue)', value: 'info' },
            { title: 'Success (green)', value: 'success' },
            { title: 'Warning (yellow)', value: 'warning' },
          ],
          layout: 'radio',
        },
      }),
      defineField({
        name: 'heading',
        type: 'string',
        title: 'Heading (optional)',
      }),
      defineField({
        name: 'text',
        type: 'text',
        title: 'Text',
        rows: 3,
        validation: (rule) => rule.required(),
      }),
    ],
    preview: {
      select: { heading: 'heading', tone: 'tone', text: 'text' },
      prepare({ heading, tone, text }: { heading?: string; tone?: string; text?: string }) {
        const emoji = tone === 'success' ? '✅' : tone === 'warning' ? '⚠️' : 'ℹ️';
        return { title: `${emoji} ${heading || 'Info Box'}`, subtitle: text || '' };
      },
    },
  },
  {
    type: 'object',
    name: 'imageRow',
    title: 'Multiple Images',
    icon: ImagesIcon,
    fields: [
      defineField({
        name: 'images',
        type: 'array',
        title: 'Images (2–4)',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
            fields: [
              defineField({ name: 'caption', title: 'Caption', type: 'string' }),
            ],
          },
        ],
        validation: (rule) => rule.min(2).max(4),
      }),
      defineField({
        name: 'caption',
        type: 'string',
        title: 'Group Caption (optional)',
      }),
    ],
    preview: {
      select: { images: 'images', caption: 'caption' },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      prepare({ images, caption }: { images?: any[]; caption?: string }) {
        const count = images?.length ?? 0;
        return {
          title: caption || 'Image Row',
          subtitle: `${count} image${count !== 1 ? 's' : ''}`,
        };
      },
    },
  },
  {
    type: 'object',
    name: 'inlineQuote',
    title: 'Quote with Attribution',
    icon: BlockquoteIcon,
    fields: [
      defineField({
        name: 'quote',
        type: 'text',
        title: 'Quote',
        rows: 3,
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'attribution',
        type: 'string',
        title: 'Who said it',
        validation: (rule) => rule.required(),
      }),
      defineField({
        name: 'role',
        type: 'string',
        title: 'Their role (optional)',
      }),
    ],
    preview: {
      select: { quote: 'quote', attribution: 'attribution' },
      prepare({ quote, attribution }: { quote?: string; attribution?: string }) {
        return {
          title: `"${(quote || '').slice(0, 60)}…"`,
          subtitle: `— ${attribution || ''}`,
        };
      },
    },
  },
];
