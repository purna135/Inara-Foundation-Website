import { sanityFetch } from '@/sanity/lib/client';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import ProjectsListClient from './projects-list-client';

function formatDateRange(startDate?: string, endDate?: string, legacyDate?: string): string {
  if (!startDate) return legacyDate || '';
  const fmt = (d: string) =>
    new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  if (!endDate) return fmt(startDate);
  return `${fmt(startDate)} – ${fmt(endDate)}`;
}

export default async function ProjectsPage() {
  const sanityProjects = await sanityFetch({ query: PROJECTS_QUERY, revalidate: 60 });

  const projects = ((sanityProjects as Record<string, unknown>[]) || []).map((p) => ({
    id: p._id as string,
    title: p.title as string,
    slug: (p.slug as { current: string })?.current ?? '',
    type: p.type as string,
    collaborator: p.collaborator as string | undefined,
    date: formatDateRange(
      p.startDate as string | undefined,
      p.endDate as string | undefined,
      p.date as string | undefined,
    ),
    location: p.location as string | undefined,
    participants: p.participants as string | undefined,
    summary: p.summary as string,
    cover: p.cover ? urlFor(p.cover).width(800).height(600).url() : '',
    highlights: p.highlights as string[] | undefined,
  }));

  return <ProjectsListClient projects={projects} />;
}
