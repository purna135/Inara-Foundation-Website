import Section from "@/components/Section";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import {
  Award,
  Building2,
  Calendar,
  Handshake,
  Heart,
  Shield,
  Sparkles,
  Target,
  Users,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Inara Foundation's journey from a passion project to a credible Section 8 organization. Learn about our vision, mission, and commitment to holistic welfare through transparent, youth-driven community action.",
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in/about",
    title: "About Inara Foundation - Our Story, Vision & Mission",
    description: "From a simple wish to help children to a registered Section 8 non-profit. Discover how Inara Foundation grew into a trusted platform for community upliftment, animal welfare, and youth-led social change across India.",
    images: [
      {
        url: "/website-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inara Foundation Team",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Inara Foundation - Our Story, Vision & Mission",
    description: "From a simple wish to help children to a registered Section 8 non-profit. Discover how Inara Foundation grew into a trusted platform for community upliftment, animal welfare, and youth-led social change across India.",
    images: ["/website-preview-image.jpg"],
  },
};

const QUICK_STATS = [
  { label: "Volunteers", value: "300+", icon: Users },
  { label: "Projects", value: "25+", icon: Target },
  { label: "Lives and animals impacted", value: "10k+", icon: Heart },
  { label: "Years active", value: "5+", icon: Calendar },
];

const PRINCIPLES = [
  {
    title: "Turn empathy into action",
    description: "Provide tangible support where it is needed most—no effort is ever too small.",
    icon: Heart,
  },
  {
    title: "Uphold dignity",
    description: "Respect every individual and community we meet across all our initiatives.",
    icon: Award,
  },
  {
    title: "Focus on overlooked communities",
    description: "Prioritise regions and groups that are often ignored or under-resourced.",
    icon: Users,
  },
  {
    title: "Collaborate for greater impact",
    description: "Partner with organisations and citizen groups to amplify change together.",
    icon: Handshake,
  },
  {
    title: "Maintain transparency",
    description: "Keep volunteers, donors, and partners informed and engaged at every step.",
    icon: Shield,
  },
  {
    title: "Engage deeply with community needs",
    description: "Listen, learn, and act with care—letting people lead the solutions that shape their lives.",
    icon: Sparkles,
  },
];

const WHY_JOIN = [
  {
    title: "Healthy working environment",
    description:
      "We centre the well-being of every volunteer. Personal breaks are respected, and mental health is encouraged through initiatives like The Happiness Project.",
  },
  {
    title: "Leadership pathways",
    description:
      "Volunteers take ownership of projects, gaining hands-on experience in planning, coordination, and storytelling.",
  },
  {
    title: "Flexible schedules",
    description:
      "Contribute at your own pace. We honour the true spirit of volunteering—adaptable, mindful, and pressure-free.",
  },
  {
    title: "Networking & community",
    description:
      "Engage with passionate individuals, partners, and change-makers who open doors to new perspectives and opportunities.",
  },
  {
    title: "Teamwork & diversity",
    description:
      "Work with people from different cities, cultures, and disciplines—gaining empathy and collective strength.",
  },
  {
    title: "Personal growth & fulfillment",
    description:
      "Discover your voice, practice empathy, and experience the unmatched satisfaction of bringing a smile to someone’s day.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/60">
                <Sparkles size={16} className="text-brand-600" />
                Since 2020
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-5xl tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                About <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Inara Foundation</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-neutral-700">
                We are a youth-led movement where compassion turns into meaningful change for people, animals, and the planet.
              </p>
            </FadeIn>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {QUICK_STATS.map((stat, idx) => (
                <FadeIn key={stat.label} delay={0.3 + idx * 0.1} className="h-full">
                  <div className="group relative h-full">
                    <div className="surface-card flex h-full flex-col items-center justify-center gap-2 p-6 text-center transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                      <stat.icon className="text-brand-600" size={24} />
                      <div className="font-display text-3xl text-brand-700">{stat.value}</div>
                      <div className="text-sm text-neutral-600">{stat.label}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Who We Are */}
          <FadeIn direction="left" className="h-full">
            <div className="group relative h-full">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
            <div className="relative surface-card p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400/10 to-brand-500/10 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
                <Heart size={16} className="text-brand-600" />
                Who We Are
              </div>
              <h2 className="mt-6 font-display text-3xl sm:text-4xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Youth-Led. Compassion-Driven.
              </h2>
              <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  <strong className="text-brand-600">Inara</strong> is a youth-led non-profit organization based in Bhubaneswar,
                  India, where compassion transforms into meaningful change through
                  community upliftment and volunteering initiatives.
                </p>
                <p>
                  We founded Inara to bridge the systematic gap between underserved
                  communities and vulnerable animals, creating a space where empathy meets
                  action. Our work is structured, transparent, and holistic — driven by
                  passionate youth who believe in making compassion visible.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
                <span className="text-sm font-medium text-brand-700">Established 2020</span>
              </div>
            </div>
          </div>
          </FadeIn>

          {/* Origin Story */}
          <FadeIn direction="right" delay={0.2} className="h-full">
            <div className="group relative h-full">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-400 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
            <div className="relative surface-card bg-gradient-to-br from-brand-50/50 to-white p-8 lg:p-10 h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200">
                <Sparkles size={16} className="text-brand-600" />
                Origin Story
              </div>
              <h3 className="mt-6 font-display text-2xl sm:text-3xl text-brand-700">
                From Passion to Purpose
              </h3>
              <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  What began as <strong className="text-brand-600">Sweta's passion project</strong> with a few friends has grown
                  into Inara — a ray of joy, support, and hope for the underprivileged.
                </p>
                <p>
                  Her simple wish to help children sparked Inara's first steps four years
                  ago. From collecting donations for orphanages to expanding into diverse
                  community projects, Inara has always listened closely to people's needs,
                  prioritizing safety, care, and compassion above all.
                </p>
                <p className="text-lg italic text-brand-600 border-l-4 border-brand-400 pl-4">
                  "What started as me soon became we."
          </p>
          <p>
                  Under Sweta's heartfelt leadership, ideas continue to turn into action,
                  empowering every project with her vision, dedication, and grace.
                  Together, this growing community laid the foundation for Inara as a
                  credible <strong className="text-brand-600">Section 8 company</strong>, driven by purpose and compassion.
                </p>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </Section>

      {/* Vision & mission */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
        <div className="absolute top-[-10%] right-[-15%] h-96 w-96 rounded-full bg-gradient-to-bl from-brand-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-15%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-200 ring-1 ring-white/10 backdrop-blur-sm">
                <Target size={16} className="text-brand-200" />
                Vision & mission
              </div>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                Building dignity, resilience, and compassion
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeIn direction="left" delay={0.2} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-transparent opacity-100 transition duration-300 group-hover:opacity-0" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white">
                  <Sparkles size={24} />
                </div>
                <h3 className="mt-4 font-display text-2xl text-white">Our vision</h3>
                <p className="mt-4 text-neutral-200">
                  We envision a world where every living being is valued and supported, where resources are accessible, and where communities feel connected and resilient.
                </p>
              </div>
            </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white">
                  <Target size={24} />
                </div>
                <h3 className="mt-4 font-display text-2xl text-white">Our mission</h3>
                <p className="mt-4 text-neutral-200">
                  We grow as a trusted platform that inspires change-makers through volunteering and active engagement—ensuring every initiative is transparent, scalable, and high-impact.
                </p>
                <p className="mt-4 text-neutral-200">
                  Together, we champion education, animal welfare, environmental care, and grassroots entrepreneurship, proving that no cause is ever too distant.
                </p>
              </div>
            </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-10 rounded-2xl bg-white/5 p-8 text-center text-neutral-200 ring-1 ring-white/10">
              Through collaboration, innovation, and dedicated youth action, we provide a credible platform for collective impact and shared joy.
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Our guiding principles */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white">
        <div className="absolute top-20 left-12 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" aria-hidden />
        <div className="absolute bottom-16 right-10 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
                <Shield size={16} className="text-brand-600" />
                Our guiding principles
              </div>
              <h2 className="mt-6 font-display text-4xl text-neutral-900 sm:text-5xl">
                Decisions rooted in empathy and accountability
              </h2>
              <p className="mt-4 text-neutral-600">
                Every project is crafted with intention, listening, and deep respect for communities.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 0.1}>
                <div className="group relative">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-25" />
                <div className="relative h-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-200 group-hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white">
                    <principle.icon size={20} />
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    Principle {index + 1}
                  </div>
                  <h3 className="mt-3 font-display text-lg text-neutral-900">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{principle.description}</p>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Organizational Overview - Modern Split Layout */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left Column */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div>
              <div className="sticky top-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-50 to-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 shadow-sm">
                  <Building2 size={16} className="text-brand-600" />
                  Legal Status
                </div>
              <h2 className="mt-6 font-display text-4xl sm:text-5xl bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent">
                Organisational Overview
              </h2>
              
              {/* Highlight Box */}
              <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 ring-1 ring-brand-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                    <Award size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-600">Incorporated</p>
                    <p className="font-display text-2xl font-bold text-brand-700">Jan 4, 2023</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
                  Officially registered as a <strong className="text-brand-700">Section 8 Non-Profit Organisation</strong> under Indian law.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-neutral-700 leading-relaxed">
                  Inara was officially incorporated as a <strong className="text-brand-600">Section 8 Non-Profit
                  Organisation</strong> in India, reinforcing our
                  commitment to institutional credibility, financial integrity, and
                  transparency for every donor, volunteer, and collaborator.
                </p>
                <p className="text-neutral-700 leading-relaxed">
                  As a Section 8 platform, we are dedicated to executing high-impact
                  projects in community upliftment and animal welfare, ensuring every
                  initiative delivers meaningful social change.
                </p>
              </div>
            </div>
            </div>
          </FadeIn>

          {/* Right Column - What is Section 8 */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
            <div>
              <div className="group relative overflow-hidden rounded-2xl">
              {/* Dark background with pattern like Vision & Mission */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
              <div className="absolute inset-0 bg-grid opacity-10" />
              {/* Decorative gradient blobs */}
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-bl from-brand-400/20 to-transparent blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl" />
              
              <div className="relative p-8 lg:p-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                    <Shield size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-white">
                      What is a Section 8 Organisation?
                    </h3>
                    <p className="mt-2 text-sm text-brand-400 font-medium">
                      Indian Companies Act, 2013
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        A <strong className="text-white">Section 8 Company</strong> is registered under the <em className="text-brand-400">Indian Companies Act,
                        2013</em> and operates to promote charitable objectives such as education,
                        art, culture, and social welfare.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        All profits generated are <strong className="text-white">legally reinvested</strong> into the organisation's
                        charitable goals — ensuring that every action is driven by social
                        impact, not private gain.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        Section 8 companies enjoy <strong className="text-white">legal recognition and credibility</strong>, which helps
                        in building trust with donors, volunteers, and partners.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <CheckCircle size={18} className="text-brand-400" />
                    </div>
                    <div>
                      <p className="text-neutral-200 leading-relaxed">
                        This status allows organisations like Inara to <strong className="text-white">collaborate effectively</strong> with
                        government bodies and other NGOs, while enhancing the ability to raise funds and attract
                        support for long-term social initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-8 h-1 w-full rounded-full bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500" />
              </div>
            </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why join us */}
      <Section className="bg-neutral-900">
        <div className="mx-auto max-w-4xl text-center text-white">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-200 ring-1 ring-white/10">
              Why join us
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl">
              Volunteering at Inara is a journey of empathy, creativity, and growth
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-3 text-neutral-200">
              We create warm, inclusive spaces where young people can experiment, lead, and build community while changing lives.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
            {WHY_JOIN.map((item, index) => (
              <FadeIn key={item.title} delay={0.3 + index * 0.1}>
                <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <h3 className="font-semibold text-brand-200">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-200">{item.description}</p>
              </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.7}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="https://forms.gle/odBUWnLF5xS464ba7" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl focus-ring">
                  <Users size={18} />
                  Become a Volunteer
                </span>
              </Link>
              <Link href="/donate">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20 focus-ring">
                  <Heart size={18} />
                  Support Our Mission
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>
    </main>
  );
}