import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { 
  MapPin, 
  Users, 
  Calendar, 
  Sparkles, 
  Heart,
  Target,
  ArrowRight,
  Handshake,
  School,
  Home
} from "lucide-react";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Nagpur Chapter | Inara Foundation",
  description:
    "Discover Inara Foundation's Nagpur chapter — 83+ volunteers creating meaningful change through projects in elderly care, child safety, and community building.",
  alternates: {
    canonical: "/nagpur",
  },
  openGraph: {
    type: "website",
    url: "https://inarafoundation.in/nagpur",
    title: "Nagpur Chapter - Inara Foundation",
    description:
      "A thriving community of 83+ volunteers in Nagpur creating meaningful change through compassion-driven projects in elderly care, child safety, and community building.",
    images: [
      {
        url: "/website-preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inara Foundation Nagpur Chapter volunteers",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagpur Chapter - Inara Foundation",
    description:
      "A thriving community of 83+ volunteers in Nagpur creating meaningful change through compassion-driven projects in elderly care, child safety, and community building.",
    images: ["/website-preview-image.jpg"],
  },
};

const STATS = [
  { icon: Users, label: "Active Volunteers", value: "83+", color: "from-brand-400 to-brand-500" },
  { icon: Target, label: "Projects Completed", value: "3", color: "from-brand-300 to-brand-400" },
  { icon: Calendar, label: "Months Active", value: "5", color: "from-brand-500 to-brand-600" },
  { icon: Heart, label: "Lives Touched", value: "200+", color: "from-brand-400 to-brand-500" },
];

const PROJECTS = [
  {
    id: "old-age-home",
    title: "The Old Age Home Visit",
    description: "A wholesome visit before Diwali where volunteers connected with grandparents, sharing meaningful conversations and creating cherished memories despite health limitations.",
    impact: "Brought joy and companionship to elderly residents",
    image: "/Inara-nagpur/old age home visit.jpg",
    icon: Home,
    color: "from-brand-400 to-brand-500",
    highlights: [
      "Conducted before Diwali festival",
      "Focused on emotional connection",
      "Volunteers trained in sensitive communication",
      "One of the most fulfilling projects"
    ]
  },
  {
    id: "suraksha",
    title: "Suraksha: The Safe Touch Project",
    description: "An awareness campaign in a government school educating 5th grade students about good touch and bad touch through skits, storytelling, worksheets, and interactive games.",
    impact: "Empowered children with safety awareness",
    image: "/Inara-nagpur/suraksha.jpg",
    icon: School,
    color: "from-brand-500 to-brand-600",
    highlights: [
      "Interactive skits and storytelling",
      "Inclusive education for all genders",
      "Engaging worksheets and games",
      "Created lasting safety awareness"
    ]
  },
  {
    id: "acointier",
    title: "Acointier: Building Bonds",
    description: "A team-building event around Friendship Day at a cozy new café, featuring charades, friendship band exchanges, and meaningful conversations to strengthen the volunteer community.",
    impact: "Fostered strong bonds among new volunteers",
    image: "/Inara-nagpur/acointier.jpg",
    icon: Handshake,
    color: "from-brand-300 to-brand-400",
    highlights: [
      "Celebrated around Friendship Day",
      "Nostalgic friendship band exchange",
      "Multiple rounds of charades",
      "Supported a newly opened local café"
    ]
  },
];

export default function NagpurPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-brand-500/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-500/20 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] flex min-h-[70vh] flex-col justify-center py-20 sm:py-24">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-300 ring-1 ring-white/20 backdrop-blur mb-6">
              <MapPin size={16} />
              Nagpur Chapter
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              A New Dawn of <br />
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
                Compassion in Nagpur
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl text-lg text-neutral-300 mb-8">
              What started as a WhatsApp group with just 2 people on July 1st has blossomed into a vibrant community of 83+ volunteers. In just 5 months, we've turned compassion into action, one project at a time.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link href="https://forms.gle/odBUWnLF5xS464ba7" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl focus-ring">
                  <Users size={18} />
                  Join Nagpur Chapter
                </span>
              </Link>
              <Link href="/projects">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur transition-all hover:bg-white/20 focus-ring">
                  Explore All Projects
                  <ArrowRight size={18} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-neutral-200 bg-white py-12">
        <div className="container-px mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <FadeIn key={stat.label} delay={0.1 + idx * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-3 rounded-xl bg-gradient-to-br ${stat.color} p-3 shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="font-display text-3xl font-bold text-neutral-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Nagpur Chapter */}
      <section className="relative py-20 bg-neutral-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-brand-100/50 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-brand-200/40 to-transparent blur-3xl" />
        
        <div className="container-px relative mx-auto max-w-[1200px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <FadeIn direction="left">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-6">
                  <Sparkles size={16} />
                  Our Story
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-6">
                  Building Community, <br />One Heart at a Time
                </h2>
                <div className="space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    Inara was a long-due vision to start in Nagpur. What began as a simple WhatsApp group with just 2 people has transformed into a thriving movement of <strong>83+ dedicated volunteers</strong> in merely 5 months.
                  </p>
                  <p>
                    Following the footprints of our Bhubaneswar chapter while adding our own unique twists, we're building a great community here in Nagpur.
                  </p>
                  <p>
                    What makes us special? <strong>Every project has a different lead</strong>, enhancing leadership skills in every volunteer.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-full">
                <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 blur-2xl opacity-30" />
                <div className="relative rounded-2xl bg-white p-8 shadow-xl ring-1 ring-neutral-900/5 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-lg bg-gradient-to-br from-brand-400 to-brand-500 p-3">
                      <Target className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                        Our Mission in Nagpur
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        To create a compassionate community that empowers volunteers to lead meaningful projects, touching lives across all segments of society.
                      </p>
                    </div>
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-4 space-y-3 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-brand-100 p-2">
                        <div className="h-2 w-2 rounded-full bg-brand-500" />
                      </div>
                      <span className="text-sm text-neutral-700">
                        <strong>Rotating Leadership:</strong> Every project, a new leader
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-brand-100 p-2">
                        <div className="h-2 w-2 rounded-full bg-brand-500" />
                      </div>
                      <span className="text-sm text-neutral-700">
                        <strong>Community First:</strong> Building lasting connections
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-brand-100 p-2">
                        <div className="h-2 w-2 rounded-full bg-brand-500" />
                      </div>
                      <span className="text-sm text-neutral-700">
                        <strong>Holistic Impact:</strong> Serving all segments of society
                      </span>
                    </div>
                  </div>

                  {/* Additional Points */}
                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600 italic">
                      "We believe in empowering people to explore their potential while serving society in meaningful ways. Within just 5 months, our volunteers have truly embraced the essence of Inara, treating it as their own."
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-100/40 to-transparent blur-3xl" />
        
        <div className="container-px relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 mb-4">
                <Heart size={16} />
                Our Impact
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl mb-4">
                Projects That Matter
              </h2>
              <p className="mx-auto max-w-2xl text-neutral-600">
                From elderly care to child safety education, each project reflects our commitment to creating meaningful change in Nagpur.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, idx) => {
              const Icon = project.icon;
              
              return (
                <FadeIn key={project.id} delay={idx * 0.1}>
                  <div className="group relative h-full">
                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 blur transition duration-500 group-hover:opacity-20`} />
                    
                    <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-neutral-900/5 transition duration-300 group-hover:shadow-xl">
                      {/* Image Section */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                        {project.image ? (
                          <>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover transition duration-500 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            {/* Gradient Overlay on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100`} />
                          </>
                        ) : (
                          <div className="flex h-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                            <div className="text-center">
                              <Icon className="mx-auto mb-2 text-neutral-400" size={40} />
                              <p className="text-xs text-neutral-500">Coming Soon</p>
                            </div>
                          </div>
                        )}
                        
                        {/* Icon Badge */}
                        <div className={`absolute top-4 left-4 rounded-xl bg-gradient-to-br ${project.color} p-2.5 shadow-lg`}>
                          <Icon className="text-white" size={20} />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="font-display text-xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-neutral-600 leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-1.5 mb-4">
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="mt-1 rounded-full bg-brand-100 p-0.5">
                                <div className="h-1 w-1 rounded-full bg-brand-600" />
                              </div>
                              <span className="text-xs text-neutral-600 leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        {/* Impact Badge */}
                        <div className="rounded-lg bg-gradient-to-br from-brand-50 to-brand-100 p-4 mt-auto">
                          <div className="flex items-start gap-2">
                            <Sparkles className="text-brand-600 mt-0.5 flex-shrink-0" size={16} />
                            <div>
                              <div className="text-xs font-semibold text-brand-700 mb-1">
                                Impact
                              </div>
                              <div className="text-xs text-neutral-700">
                                {project.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className={`absolute inset-0 rounded-2xl ring-2 ring-transparent transition duration-300 group-hover:ring-brand-300/50`} />
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-brand-500/30 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-300 ring-1 ring-white/20 backdrop-blur mb-6">
              <Users size={16} />
              Join Our Community
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-6">
              Be Part of Nagpur's <br />
              <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
                Growing Movement
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-neutral-300 mb-10">
              Whether you want to lead a project, volunteer your time, or support our cause, there's a place for you in our community. Let's create lasting change together.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://forms.gle/odBUWnLF5xS464ba7" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-500 px-8 py-4 text-base font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl focus-ring">
                  <Users size={20} />
                  Become a Volunteer
                </span>
              </Link>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 backdrop-blur transition-all hover:bg-white/20 focus-ring">
                  Get in Touch
                  <ArrowRight size={20} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

