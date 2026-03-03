import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import {
  Heart,
  Users,
  Target,
  Shield,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  HandHeart,
  Gift,
  BookOpen,
  TreePine,
  CheckCircle,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Inara Foundation's mission to create meaningful change. Your contribution helps fund community projects, animal welfare initiatives, and youth-led programs across India.",
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in/donate",
    title: "Support Inara Foundation - Every Contribution Matters",
    description:
      "Help us turn compassion into action. Your donation funds community projects, cancer shelter visits, educational workshops, and environmental initiatives.",
    images: [
      {
        url: "/website-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Support Inara Foundation",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Inara Foundation - Every Contribution Matters",
    description:
      "Help us turn compassion into action. Your donation funds community projects, cancer shelter visits, educational workshops, and environmental initiatives.",
    images: ["/website-preview-image.jpg"],
  },
};

const IMPACT_AREAS = [
  {
    icon: BookOpen,
    title: "Education & Workshops",
    description:
      "Fund storytelling sessions, creative workshops, and educational programs for underprivileged children.",
  },
  {
    icon: HandHeart,
    title: "Community Welfare",
    description:
      "Support cancer shelter visits, hospital creativity sessions, and festival celebrations with underserved communities.",
  },
  {
    icon: TreePine,
    title: "Environment & Relief",
    description:
      "Enable summer relief drives, clean-up initiatives, and animal welfare programs across Odisha.",
  },
  {
    icon: Gift,
    title: "Volunteer Programs",
    description:
      "Help us train and equip volunteers, fund logistics, and expand our reach to new cities like Nagpur.",
  },
];

const TRUST_POINTS = [
  "Registered Section 8 Non-Profit (Companies Act, 2013)",
  "Transparent fund utilization across all projects",
  "300+ active volunteers across multiple cities",
  "25+ projects delivered with measurable impact",
];

export default function DonatePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/60">
                <Heart size={16} className="text-brand-600" />
                Support Our Mission
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-5xl tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                Your Generosity{" "}
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                  Changes Lives
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-neutral-700">
                Every contribution, no matter how small, fuels real projects that bring
                smiles, safety, and hope to communities across India.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="#how-to-donate">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl">
                    <Heart size={16} />
                    Donate Now
                  </span>
                </a>
                <Link href="/programs">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 transition hover:bg-neutral-50 hover:text-brand-700">
                    See Our Work
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Where Your Money Goes */}
      <Section className="bg-white">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
              <Target size={16} className="text-brand-600" />
              Where Your Support Goes
            </div>
            <h2 className="mt-6 font-display text-4xl text-neutral-900 sm:text-5xl">
              Funding impact that matters
            </h2>
            <p className="mt-4 text-neutral-600">
              Your donation directly powers these areas of work — no
              administrative bloat, just meaningful action.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {IMPACT_AREAS.map((area, index) => (
            <FadeIn key={area.title} delay={index * 0.1}>
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-500 opacity-0 blur-xl transition duration-500 group-hover:opacity-25" />
                <div className="relative flex h-full gap-5 overflow-hidden rounded-2xl border border-neutral-200/60 bg-white p-6 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-brand-200 group-hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-md">
                    <area.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-neutral-900">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* How to Donate */}
      <Section
        id="how-to-donate"
        className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900"
      >
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
        <div className="absolute top-[-10%] right-[-15%] h-96 w-96 rounded-full bg-gradient-to-bl from-brand-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-15%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brand-200 ring-1 ring-white/10 backdrop-blur-sm">
                <Sparkles size={16} className="text-brand-200" />
                How to Contribute
              </div>
              <h2 className="mt-6 font-display text-4xl text-white sm:text-5xl">
                Ready to make a difference?
              </h2>
              <p className="mt-4 text-neutral-300">
                Reach out to us directly and we'll guide you through the
                donation process. Every rupee counts.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Email */}
            <FadeIn direction="left" delay={0.2}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-400 text-white shadow-lg">
                    <Mail size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-white">
                    Email Us
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Write to us about your contribution and we'll share
                    the details and receipts.
                  </p>
                  <a
                    href="mailto:inarabysweta@gmail.com"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                  >
                    <Mail size={16} />
                    inarabysweta@gmail.com
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Phone */}
            <FadeIn direction="right" delay={0.3}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-400/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                    <Phone size={26} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-white">
                    Call or WhatsApp
                  </h3>
                  <p className="mt-2 text-neutral-300">
                    Prefer a quick chat? Reach us on the phone and we'll
                    help you get started.
                  </p>
                  <a
                    href="tel:+917077046262"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/20"
                  >
                    <Phone size={16} />
                    +91 7077 046 262
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-8 rounded-2xl bg-white/5 p-6 text-center ring-1 ring-white/10">
              <p className="text-neutral-200">
                We're working on adding a secure online payment gateway. In the
                meantime, all donations are processed directly through our team to
                ensure complete transparency and accountability.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Trust & Transparency */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200">
                <Shield size={16} className="text-brand-600" />
                Trust & Transparency
              </div>
              <h2 className="mt-6 font-display text-4xl text-neutral-900 sm:text-5xl">
                Your trust is our foundation
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                As a registered Section 8 organisation, every rupee is accounted for and
                reinvested into our charitable mission. We maintain complete transparency
                with donors, volunteers, and partners at every step.
              </p>
              <div className="mt-8 space-y-4">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0 text-brand-500"
                    />
                    <span className="text-neutral-700">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/about">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700 hover:gap-3">
                    Learn more about our organisation
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 text-center ring-1 ring-brand-200/50">
                <Users size={28} className="mx-auto text-brand-600" />
                <div className="mt-3 font-display text-3xl font-bold text-brand-700">
                  300+
                </div>
                <div className="mt-1 text-sm text-neutral-600">Volunteers</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 text-center ring-1 ring-brand-200/50">
                <Target size={28} className="mx-auto text-brand-600" />
                <div className="mt-3 font-display text-3xl font-bold text-brand-700">
                  25+
                </div>
                <div className="mt-1 text-sm text-neutral-600">Projects</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 text-center ring-1 ring-brand-200/50">
                <Heart size={28} className="mx-auto text-brand-600" />
                <div className="mt-3 font-display text-3xl font-bold text-brand-700">
                  10k+
                </div>
                <div className="mt-1 text-sm text-neutral-600">Lives Impacted</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 p-6 text-center ring-1 ring-brand-200/50">
                <Shield size={28} className="mx-auto text-brand-600" />
                <div className="mt-3 font-display text-3xl font-bold text-brand-700">
                  Section 8
                </div>
                <div className="mt-1 text-sm text-neutral-600">Registered NGO</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Other Ways to Help */}
      <Section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" size="dense">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 p-8 sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-20" aria-hidden="true" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">
              Not ready to donate? You can still help.
            </h2>
            <p className="mt-3 text-neutral-900">
              Money isn't the only way to make a difference. Volunteer your time,
              share our story, or partner with us to amplify impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="https://forms.gle/odBUWnLF5xS464ba7" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800">
                  <Users size={16} />
                  Become a Volunteer
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg ring-1 ring-black/10 transition hover:bg-white">
                  <Heart size={16} />
                  Partner with Us
                </span>
              </Link>
              <Link href="/programs">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg ring-1 ring-black/10 transition hover:bg-white">
                  <Sparkles size={16} />
                  Explore Our Programs
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
