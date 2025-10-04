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
    title: "Food and water",
    desc: "Relief drives and support for essential needs.",
  },
  {
    icon: Leaf,
    title: "Environment",
    desc: "Beach cleanups, tree planting, awareness drives.",
  },
  {
    icon: Hammer,
    title: "Build and repair",
    desc: "Community improvements with safety and dignity.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Support for learning, materials, and mentorship.",
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
              Various ways we help
            </h2>
            <p className="mt-4 max-w-xl text-neutral-700">
              Inara Foundation channels compassion into action across people,
              animals, and the planet. We design hands‑on projects that are
              practical, inclusive, and sustainable.
            </p>
            <div className="mt-4 max-w-xl">
              <p className="text-md font-semibold tracking-wide text-brand-700">
                Inara's Moto
              </p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                    <CheckCircle size={10} />
                  </span>
                  <span>
                    We aim to make life better for all the living beings!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                    <CheckCircle size={10} />
                  </span>
                  <span>
                    Join us to make a change inside out – volunteer, donate or
                    get in touch today!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                    <CheckCircle size={10} />
                  </span>
                  <span>
                    Experience joy, laughter, and love with the Inara community!
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-50 text-brand-600 ring-1 ring-brand-200">
                    <CheckCircle size={10} />
                  </span>
                  <span>
                    Work on your preferred projects with a team of passionate
                    volunteers!
                  </span>
                </li>
              </ul>
            </div>
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

      {/* Projects */}
      <Projects />

      {/* Upcoming Events */}
      <Events />

      {/* Team */}
      <Team />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to action */}
      <CTA />

      {/* Simple CTA 2 */}
      {/* <CTA2 /> */}
    </main>
  );
}
