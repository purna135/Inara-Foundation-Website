import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Manrope, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Inara Foundation',
    template: '%s · Inara Foundation',
  },
  description:
    'Inara Foundation is a youth-led Section 8 non-profit in India driving community welfare, animal care, and environmental action through volunteering.',
  applicationName: 'Inara Foundation',
  keywords: ['NGO', 'Non-profit', 'Inara Foundation', 'Odisha', 'Nagpur', 'Social welfare', 'Animal welfare', 'Youth volunteers', 'Community development', 'India charity'],
  icons: {
    icon: '/inara-icon.png',
    apple: '/inara-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://inarafoundation.in'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inarafoundation.in',
    siteName: 'Inara Foundation',
    title: 'Inara Foundation - Empathy That Echoes, Change That Lasts',
    description:
      'A youth-led non-profit turning compassion into lasting change — community upliftment, animal welfare, and environmental action across India.',
    images: [
      {
        url: '/website-preview-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inara Foundation',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inara Foundation - Empathy That Echoes, Change That Lasts',
    description:
      'A youth-led non-profit turning compassion into lasting change — community upliftment, animal welfare, and environmental action across India.',
    images: ['/website-preview-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#d4a745',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://inarafoundation.in/#organization',
        name: 'Inara Foundation',
        url: 'https://inarafoundation.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://inarafoundation.in/inara-icon.png',
        },
        sameAs: [
          'https://www.instagram.com/inara.npo/',
          'https://www.facebook.com/inaraorganisation',
          'https://www.linkedin.com/company/inara-by-sweta',
          'https://x.com/inarabysweta',
        ],
        description:
          'A youth-led Section 8 non-profit turning compassion into meaningful change through community upliftment, animal welfare, and environmental protection across India.',
        foundingDate: '2020',
        areaServed: 'India',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://inarafoundation.in/#website',
        url: 'https://inarafoundation.in',
        name: 'Inara Foundation',
        publisher: {
          '@id': 'https://inarafoundation.in/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
