import { defineField, defineType } from 'sanity';
import { BarChartIcon } from '@sanity/icons';

export default defineType({
  name: 'siteStats',
  title: 'Site Stats',
  type: 'document',
  icon: BarChartIcon,
  fields: [
    defineField({
      name: 'volunteers',
      title: 'Volunteers Count',
      type: 'number',
      description: 'e.g. 300',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'volunteersSuffix',
      title: 'Volunteers Suffix',
      type: 'string',
      description: 'e.g. "+" or "k+"',
      initialValue: '+',
    }),
    defineField({
      name: 'projects',
      title: 'Projects Count',
      type: 'number',
      description: 'e.g. 25',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'projectsSuffix',
      title: 'Projects Suffix',
      type: 'string',
      initialValue: '+',
    }),
    defineField({
      name: 'livesImpacted',
      title: 'People & Animals Reached',
      type: 'number',
      description: 'e.g. 10 (displayed as 10k+)',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'livesImpactedSuffix',
      title: 'Lives Impacted Suffix',
      type: 'string',
      initialValue: 'k+',
    }),
    defineField({
      name: 'foundedYear',
      title: 'Year Founded',
      type: 'number',
      description: 'e.g. 2020',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Stats' };
    },
  },
});
