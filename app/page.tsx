import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";
import {
  Droplets,
  Leaf,
  Hammer,
  GraduationCap,
  CheckCircle,
  Users,
  Heart,
  Target,
  ArrowRight,
} from "lucide-react";
import WorkImagesCollege from "@/components/WorkImagesCollege";
import WorkImagesMobile from "@/components/WorkImagesMobile";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Join Inara Foundation in turning compassion into action. We believe no cause is too small, and no impact is too distant. Together, we're building a kinder, stronger, and more compassionate world.",
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

const HIGHLIGHTS: { icon: any; title: string; desc: string }[] = [
  {
    icon: Droplets,
    title: "Project Amrit",
    desc: "Providing essential relief during crises.",
  },
  {
    icon: Leaf,
    title: "Pran-e",
    desc: "Advocating for animal welfare and safety.",
  },
  {
    icon: GraduationCap,
    title: "Project Happiness",
    desc: "Raising awareness and promoting well-being.",
  },
  {
    icon: Hammer,
    title: "Support Programs",
    desc: "Cancer shelter visits and blood donation camps.",
  },
];

const CORE_VALUES: { icon: any; title: string; desc: string }[] = [
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

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* What we do */}
      <Section className="bg-white pb-10 sm:pb-12 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: about */}
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
                "We believe no cause is too small, and no impact is too distant."
              </p>
              <p className="mt-4 max-w-xl text-neutral-700">
                At <strong>Inara</strong>, we are a collective movement for holistic welfare, turning
                compassion into real change. From supporting underprivileged children and caring for vulnerable
                animals to protecting the environment and empowering local
                entrepreneurs, we work hand in hand with diverse communities to create
                sustainable progress.
              </p>
              <p className="mt-3 max-w-xl text-neutral-700">
                We don't just advocate for change — <strong>we make it happen.</strong>
              </p>
              <p className="mt-3 max-w-xl text-neutral-700">
                Together, we're building a kinder, stronger, and more compassionate
                world.
              </p>
              <div className="mt-8 flex flex-row items-center gap-3 flex-wrap">
                <Link href="/about">
                  <Button>Learn Our Story</Button>
                </Link>
                <Link href="/programs">
                  <span className="inline-flex items-center gap-2 rounded-full border-2 border-brand-500 bg-transparent px-6 py-2.5 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50 whitespace-nowrap">
                    View Our Programs
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right: Core values - 2x2 Grid */}
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
        
        {/* Bottom: Work images - Desktop & iPad */}
        <div className="hidden md:block">
          <WorkImagesCollege />
        </div>
        
        {/* Bottom: Work images - Mobile */}
        <div className="md:hidden">
          <WorkImagesMobile />
        </div>
      </Section>

      {/* Stats */}
      <Section className="muted-section" size="dense">
        <Stats />
      </Section>
      
      {/* Projects */}
      <FadeIn>
        <Projects />
      </FadeIn>

      {/* Upcoming Events */}
      {/* <Events /> */}

      {/* Team */}
      {/* <Team /> */}

      {/* Testimonials */}
      <FadeIn>
        <Testimonials />
      </FadeIn>

      {/* Call to action */}
      <FadeIn>
        <CTA />
      </FadeIn>

      {/* Simple CTA 2 */}
      {/* <CTA2 /> */}
    </main>
  );
}
