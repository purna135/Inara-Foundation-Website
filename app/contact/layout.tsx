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
    description: "Experience joy, laughter, and purpose with Inara's community of volunteers. Whether you want to volunteer, partner with us, or support our cause - let's connect and create change together.",
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
    description: "Experience joy, laughter, and purpose with Inara's community of volunteers. Whether you want to volunteer, partner with us, or support our cause - let's connect and create change together.",
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

