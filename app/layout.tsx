import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Inara Foundation",
    template: "%s · Inara Foundation",
  },
  description:
    "Inara Foundation is a Section 8 non-profit advancing social welfare, animal care, environment, and community development.",
  applicationName: "Inara Foundation",
  keywords: [
    "NGO",
    "Non-profit",
    "Inara Foundation",
    "Odisha",
    "Social welfare",
    "Animal welfare",
  ],
  icons: {
    icon: "/inara-icon.png",
  },
  metadataBase: new URL("https://inarafoundation.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inarafoundation.in",
    siteName: "Inara Foundation",
    title: "Inara Foundation - Empathy That Echoes, Change That Lasts",
    description: "A youth-led non-profit organization turning compassion into meaningful change through community upliftment, animal welfare, environmental protection, and volunteering initiatives across India.",
    images: [
      {
        url: "/website-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inara Foundation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inara Foundation - Empathy That Echoes, Change That Lasts",
    description: "A youth-led non-profit organization turning compassion into meaningful change through community upliftment, animal welfare, environmental protection, and volunteering initiatives across India.",
    images: ["/website-preview-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
