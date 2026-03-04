import { Metadata } from 'next';
import projectsData from '@/data/projects.json';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = (projectsData as any[]).find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const projectImage = project.cover || '/website-preview-image.jpg';

  return {
    title: project.title,
    description: project.summary || project.description?.substring(0, 160),
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://inarafoundation.in/projects/${slug}`,
      title: project.title,
      description: project.summary || project.description?.substring(0, 160),
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      siteName: 'Inara Foundation',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.summary || project.description?.substring(0, 160),
      images: [projectImage],
    },
  };
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = (projectsData as any[]).find((p) => p.slug === slug);

  const jsonLd = project
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: project.title,
        description: project.summary || project.description?.substring(0, 160),
        image: project.cover
          ? `https://inarafoundation.in${project.cover}`
          : undefined,
        author: {
          '@type': 'Organization',
          name: 'Inara Foundation',
          url: 'https://inarafoundation.in',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Inara Foundation',
          logo: {
            '@type': 'ImageObject',
            url: 'https://inarafoundation.in/inara-icon.png',
          },
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}

