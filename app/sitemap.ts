import { MetadataRoute } from 'next';
import { sanityFetch } from '@/sanity/lib/client';
import { PROJECT_SLUGS_QUERY, BLOG_POST_SLUGS_QUERY } from '@/sanity/lib/queries';

const BASE_URL = 'https://inarafoundation.in';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/donate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/nagpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  const [projectSlugs, blogSlugs] = await Promise.all([
    sanityFetch({ query: PROJECT_SLUGS_QUERY, revalidate: 3600 }),
    sanityFetch({ query: BLOG_POST_SLUGS_QUERY, revalidate: 3600 }),
  ]);

  const projectRoutes: MetadataRoute.Sitemap = ((projectSlugs as { slug: string }[]) || []).map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes: MetadataRoute.Sitemap = ((blogSlugs as { slug: string }[]) || []).map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...blogRoutes];
}
