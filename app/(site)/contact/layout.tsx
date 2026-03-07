import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Inara Foundation to volunteer, collaborate, or support our initiatives. Join passionate youth creating meaningful social impact across India.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in/contact",
    title: "Contact Inara Foundation - Join Our Community",
    description: "Volunteer, collaborate, or support our cause. Join Inara Foundation's community of passionate youth creating real social impact across India.",
    images: [
      {
        url: "/website-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Inara Foundation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Inara Foundation - Join Our Community",
    description: "Volunteer, collaborate, or support our cause. Join Inara Foundation's community of passionate youth creating real social impact across India.",
    images: ["/website-preview-image.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

