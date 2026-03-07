import { defineField, defineType } from 'sanity';
import { TagIcon } from '@sanity/icons';

export default defineType({
  name: 'projectType',
  title: 'Project Type',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Type Name',
      type: 'string',
      description: 'e.g. "Interactive", "Fundraisers", "Collaborations", "Workshops"',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
