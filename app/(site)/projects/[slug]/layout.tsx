import type { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/client';
import { PROJECT_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

type Props = { params: Promise<{ slug: string }>; children: React.ReactNode };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
    revalidate: 60,
  });

  if (!project) {
    return { title: 'Project Not Found' };
  }

  const title = project.title as string;
  const summary = project.summary as string;
  const coverUrl = project.cover
    ? urlFor(project.cover).width(1200).height(630).url()
    : '/website-preview-image.jpg';

  return {
    title,
    description: summary,
    alternates: { canonical: `https://inarafoundation.in/projects/${slug}` },
    openGraph: {
      title,
      description: summary,
      images: [{ url: coverUrl, width: 1200, height: 630, alt: title }],
    },
  };
}

export default function ProjectDetailLayout({ children }: Props) {
  return <>{children}</>;
}
