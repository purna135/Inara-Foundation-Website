import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sanityFetch } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';

export type SiteSettings = {
  email: string;
  phone: string;
  location: string;
  volunteerFormUrl: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  twitter: string;
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = (await sanityFetch({ query: SITE_SETTINGS_QUERY, revalidate: 300 })) as SiteSettings;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar settings={settings} />
      <main id="main-content">{children}</main>
      <Footer settings={settings} />
    </>
  );
}
