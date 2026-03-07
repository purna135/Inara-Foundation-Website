import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Inara Foundation's initiatives — from summer relief and cancer shelter visits to storytelling sessions. Projects driven by compassionate youth volunteers.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in/projects",
    title: "Our Projects & Impact - Inara Foundation",
    description: "Community welfare, animal care, and environmental protection initiatives. Day of Service reaching 3,000+ children, cancer shelter visits, and more.",
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
    description: "Community welfare, animal care, and environmental protection initiatives. Day of Service reaching 3,000+ children, cancer shelter visits, and more.",
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
