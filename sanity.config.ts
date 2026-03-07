'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';
import {
  RocketIcon,
  ComposeIcon,
  UsersIcon,
  TagIcon,
  CogIcon,
  BarChartIcon,
} from '@sanity/icons';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'inara-foundation',
  title: 'Inara Foundation',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Projects')
              .icon(RocketIcon)
              .schemaType('project')
              .child(S.documentTypeList('project').title('Projects')),
            S.listItem()
              .title('Blog Posts')
              .icon(ComposeIcon)
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            S.divider(),
            S.listItem()
              .title('Testimonials')
              .icon(UsersIcon)
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            S.listItem()
              .title('Project Types')
              .icon(TagIcon)
              .schemaType('projectType')
              .child(S.documentTypeList('projectType').title('Project Types')),
            S.divider(),
            S.listItem()
              .title('Site Settings')
              .icon(CogIcon)
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Site Stats')
              .icon(BarChartIcon)
              .child(S.document().schemaType('siteStats').documentId('siteStats')),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
