import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'contact', title: 'Contact Info'},
    { name: 'social', title: 'Social Links' },
  ],
  fields: [
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'volunteerFormUrl',
      title: 'Volunteer Form URL',
      type: 'url',
      group: 'contact',
      description: 'Google Form or other link for volunteer sign-ups',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitter',
      title: 'X (Twitter) URL',
      type: 'url',
      group: 'social',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
