import { defineQuery } from 'next-sanity';

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(coalesce(startDate, _createdAt) desc) {
    _id,
    title,
    slug,
    "type": coalesce(typeRef->title, type),
    collaborator,
    date,
    startDate,
    endDate,
    location,
    participants,
    summary,
    cover,
    highlights
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    "type": coalesce(typeRef->title, type),
    collaborator,
    date,
    startDate,
    endDate,
    location,
    participants,
    summary,
    description,
    cover,
    images[] {
      asset->,
      caption
    },
    highlights
  }
`);

export const PROJECT_SLUGS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`);

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt asc) {
    _id,
    name,
    quote,
    role,
    avatar
  }
`);

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    author,
    publishedAt,
    categories
  }
`);

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    coverImage,
    author,
    publishedAt,
    categories
  }
`);

export const BLOG_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`);
