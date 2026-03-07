import { sanityFetch } from '@/sanity/lib/client';
import { PROJECTS_QUERY, SITE_SETTINGS_QUERY, SITE_STATS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import ProjectsListClient from './projects-list-client';
import { formatDateRange } from '@/lib/date';

export default async function ProjectsPage() {
  const [sanityProjects, settingsRaw, statsRaw] = await Promise.all([
    sanityFetch({ query: PROJECTS_QUERY, revalidate: 60 }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, revalidate: 300 }),
    sanityFetch({ query: SITE_STATS_QUERY, revalidate: 300 }),
  ]);
  const volunteerFormUrl = (settingsRaw as { volunteerFormUrl?: string })?.volunteerFormUrl || '/contact';
  const st = statsRaw as { projects: number; projectsSuffix: string; livesImpacted: number; livesImpactedSuffix: string };
  const statsBar = {
    projects: `${st.projects}${st.projectsSuffix}`,
    livesImpacted: `${st.livesImpacted}${st.livesImpactedSuffix}`,
  };

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

  return <ProjectsListClient projects={projects} volunteerFormUrl={volunteerFormUrl} stats={statsBar} />;
}
