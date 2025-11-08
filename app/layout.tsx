import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
  metadataBase: new URL("https://inara.local"),
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
      </body>
    </html>
  );
}
