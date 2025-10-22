import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import {
  Droplets,
  Leaf,
  Hammer,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import WorkImagesCollege from "@/components/WorkImagesCollege";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import CTA2 from "@/components/CTA2";

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

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* What we do */}
      <Section className="bg-white pb-10 sm:pb-12 lg:pb-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: about */}
          <div>
            <p className="text-sm font-semibold text-brand-700">What we do</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">
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
            <div className="mt-8">
              <Link href="/about">
                <Button>About Inara</Button>
              </Link>
            </div>
          </div>

          {/* Right: our work */}
          <div className="flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-12">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1.5 grid h-10 w-15 place-items-center rounded-lg bg-brand-50 ring-2 ring-brand-200">
                    <Icon className="text-brand-700" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-neutral-600 mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom: Work images */}
        <WorkImagesCollege />
      </Section>

      {/* Stats */}
      <Section className="muted-section" size="dense">
        <Stats />
      </Section>

      {/* Call to action */}
      <CTA />
      
      {/* Projects */}
      <Projects />

      {/* Upcoming Events */}
      <Events />

      {/* Team */}
      <Team />

      {/* Testimonials */}
      <Testimonials />

      {/* Simple CTA 2 */}
      {/* <CTA2 /> */}
    </main>
  );
}
