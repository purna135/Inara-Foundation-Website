import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Inara Foundation's diverse initiatives - from Project Amrit's summer relief and cancer shelter visits to storytelling sessions and cultural celebrations. Every project driven by compassionate youth volunteers.",
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in/projects",
    title: "Our Projects & Impact - Inara Foundation",
    description: "Explore our initiatives spanning community welfare, animal care, and environmental protection. From Day of Service reaching 3,000+ children to regular cancer shelter visits - witness how youth volunteers create lasting impact.",
    images: [
      {
        url: "/website-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inara Foundation Projects",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects & Impact - Inara Foundation",
    description: "Explore our initiatives spanning community welfare, animal care, and environmental protection. From Day of Service reaching 3,000+ children to regular cancer shelter visits - witness how youth volunteers create lasting impact.",
    images: ["/website-preview-image.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
