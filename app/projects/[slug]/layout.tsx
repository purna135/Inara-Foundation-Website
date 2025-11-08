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

  const projectUrl = `https://inarafoundation.in/projects/${slug}`;
  const projectImage = project.cover || '/website-thumbnail-image.png';

  return {
    title: project.title,
    description: project.summary || project.description?.substring(0, 160),
    openGraph: {
      type: 'article',
      url: projectUrl,
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

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

