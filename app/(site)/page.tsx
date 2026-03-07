import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import {
  CheckCircle,
  Users,
  Heart,
  Target,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import WorkImagesCollege from "@/components/WorkImagesCollege";
import WorkImagesMobile from "@/components/WorkImagesMobile";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { PROJECTS_QUERY, TESTIMONIALS_QUERY, SITE_STATS_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatDateRange } from "@/lib/date";
import type { StatsData } from "@/components/Stats";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Join Inara Foundation in turning compassion into action. Together, we're building a kinder, stronger, and more compassionate world for communities across India.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in",
    title: "Inara Foundation - Empathy That Echoes, Change That Lasts",
    description: "A youth-led Section 8 non-profit in India. From supporting underprivileged children to caring for animals and protecting the environment - we work hand in hand with communities to create sustainable progress.",
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
    description: "A youth-led Section 8 non-profit in India. From supporting underprivileged children to caring for animals and protecting the environment - we work hand in hand with communities to create sustainable progress.",
    images: ["/website-preview-image.jpg"],
  },
};

const CORE_VALUES: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Users,
    title: "Community First",
    desc: "Hand in hand with diverse communities",
  },
  {
    icon: Heart,
    title: "Youth-Led",
    desc: "Powered by passionate volunteers",
  },
  {
    icon: Target,
    title: "Impact Driven",
    desc: "Measurable, lasting change",
  },
  {
    icon: CheckCircle,
    title: "Section 8 NGO",
    desc: "Registered since Jan 4, 2023",
  },
];

export default async function HomePage() {
  const [sanityProjects, sanityTestimonials, sanityStats, sanitySettings] = await Promise.all([
    sanityFetch({ query: PROJECTS_QUERY, revalidate: 60 }),
    sanityFetch({ query: TESTIMONIALS_QUERY, revalidate: 60 }),
    sanityFetch({ query: SITE_STATS_QUERY, revalidate: 300 }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, revalidate: 300 }),
  ]);

  const statsData = sanityStats as StatsData;
  const volunteerFormUrl = (sanitySettings as { volunteerFormUrl?: string })?.volunteerFormUrl || '/contact';

  const projects = ((sanityProjects as Record<string, unknown>[]) || [])
    .slice(0, 9)
    .map((p) => ({
      id: p._id as string,
      title: p.title as string,
      slug: (p.slug as { current: string })?.current ?? '',
      type: p.type as string,
      collaborator: p.collaborator as string | undefined,
      date: formatDateRange(
        p.startDate as string | undefined,
        p.endDate as string | undefined,
        p.date as string | undefined,
      ),
      location: p.location as string | undefined,
      participants: p.participants as string | undefined,
      summary: p.summary as string,
      cover: p.cover ? urlFor(p.cover).width(800).height(600).url() : '',
    }));

  const testimonials = ((sanityTestimonials as Record<string, unknown>[]) || []).map((t) => ({
    id: t._id as string,
    name: t.name as string,
    quote: t.quote as string,
    role: t.role as string,
    avatar: t.avatar ? urlFor(t.avatar).width(80).height(80).url() : '',
  }));

  return (
    <>
      <Hero volunteerFormUrl={volunteerFormUrl} />

      {/* What we do */}
      <Section className="bg-white pb-10 sm:pb-12 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500"></span>
                </span>
                What we do
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                A collective movement for holistic welfare
              </h2>
              <p className="mt-4 max-w-xl text-lg italic text-brand-600">
                &ldquo;We believe no cause is too small, and no impact is too distant.&rdquo;
              </p>
              <p className="mt-4 max-w-xl text-neutral-700">
                At <strong>Inara</strong>, we are a collective movement for holistic welfare, turning
                compassion into real change. From supporting underprivileged children and caring for vulnerable
                animals to protecting the environment and empowering local
                entrepreneurs, we work hand in hand with diverse communities to create
                sustainable progress.
              </p>
              <p className="mt-3 max-w-xl text-neutral-700">
                We don&apos;t just advocate for change — <strong>we make it happen.</strong>
              </p>
              <p className="mt-3 max-w-xl text-neutral-700">
                Together, we&apos;re building a kinder, stronger, and more compassionate
                world.
              </p>
              <div className="mt-8 flex flex-row items-center gap-3 flex-wrap">
                <Link href="/about">
                  <Button>Learn Our Story</Button>
                </Link>
                <Link href="/projects">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-500 bg-transparent px-6 py-2.5 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50 whitespace-nowrap">
                    View Our Projects
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {CORE_VALUES.map((value, index) => (
                <FadeIn key={value.title} direction="right" delay={0.1 * (index + 1)}>
                  <div className="group flex flex-row items-center gap-3 sm:gap-4 p-4 sm:p-5 sm:flex-col sm:text-center rounded-2xl bg-gradient-to-br from-brand-50 via-white to-brand-50/50 border border-brand-200/50 shadow-sm hover:shadow-lg hover:border-brand-300 transition-all duration-300">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <value.icon size={20} className="sm:hidden" />
                      <value.icon size={22} className="hidden sm:block" />
                    </div>
                    <div className="flex-1 text-left sm:text-center">
                      <p className="font-bold text-sm sm:text-base text-neutral-900">{value.title}</p>
                      <p className="text-xs text-neutral-600 mt-1 sm:mt-1.5 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <WorkImagesCollege />
        </div>
        <div className="md:hidden">
          <WorkImagesMobile />
        </div>
      </Section>

      <Section className="muted-section" size="dense">
        <Stats data={statsData} />
      </Section>

      <FadeIn>
        <Projects projects={projects} />
      </FadeIn>

      <FadeIn>
        <Testimonials items={testimonials} />
      </FadeIn>

      <FadeIn>
        <CTA volunteerFormUrl={volunteerFormUrl} />
      </FadeIn>
    </>
  );
}
