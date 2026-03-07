import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Heart,
  Sparkles,
  Award,
  Handshake,
} from 'lucide-react';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import ProjectGallery from '@/components/project/ProjectGallery';
import ShareButtons from '@/components/project/ShareButtons';
import PortableTextBody from '@/components/project/PortableTextBody';
import { sanityFetch } from '@/sanity/lib/client';
import { PROJECT_BY_SLUG_QUERY, PROJECTS_QUERY, PROJECT_SLUGS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export async function generateStaticParams() {
  const slugs = await sanityFetch({ query: PROJECT_SLUGS_QUERY, revalidate: 3600 });
  return (slugs as { slug: string }[]).map((s) => ({ slug: s.slug }));
}

function formatDateRange(startDate?: string, endDate?: string, legacyDate?: string): string {
  if (!startDate) return legacyDate || '';
  const fmt = (d: string) =>
    new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  if (!endDate) return fmt(startDate);
  const start = new Date(startDate + 'T00:00:00');
  const end = new Date(endDate + 'T00:00:00');
  if (start.getFullYear() === end.getFullYear() && start.getMonth() === end.getMonth()) {
    return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} – ${end.getDate()}, ${end.getFullYear()}`;
  }
  return `${fmt(startDate)} – ${fmt(endDate)}`;
}

async function getProject(slug: string) {
  const p = await sanityFetch({ query: PROJECT_BY_SLUG_QUERY, params: { slug }, revalidate: 60 });
  if (!p || !p.title) return null;

  return {
    id: p._id as string,
    title: p.title as string,
    slug: (p.slug as { current: string }).current,
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
    description: p.description as unknown[],
    cover: p.cover ? urlFor(p.cover).width(1400).height(800).url() : '',
    images: (p.images as { asset: unknown; caption?: string }[] | null)?.map(
      (img: { asset: unknown; caption?: string }, i: number) => ({
        url: urlFor(img).width(1200).height(800).url(),
        caption: img.caption,
        alt: `${p.title} - Image ${i + 1}`,
      })
    ) ?? [],
    highlights: p.highlights as string[] | undefined,
  };
}

async function getRelatedProjects(currentSlug: string) {
  const all = await sanityFetch({ query: PROJECTS_QUERY, revalidate: 60 });
  if (!all || !Array.isArray(all)) return [];

  return (all as Record<string, unknown>[])
    .filter((p) => (p.slug as { current: string })?.current !== currentSlug)
    .slice(0, 3)
    .map((p) => ({
      title: p.title as string,
      slug: (p.slug as { current: string }).current,
      summary: p.summary as string,
      type: p.type as string,
      cover: p.cover ? urlFor(p.cover).width(600).height(450).url() : '',
    }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const relatedProjects = await getRelatedProjects(slug);

  const metaItems = [
    { icon: Calendar, label: 'Date', value: project.date },
    project.location ? { icon: MapPin, label: 'Location', value: project.location } : null,
    project.participants ? { icon: Users, label: 'Participants', value: project.participants } : null,
    project.collaborator
      ? { icon: Handshake, label: 'In collaboration with', value: project.collaborator }
      : null,
  ].filter(Boolean) as { icon: typeof Calendar; label: string; value: string }[];

  const isPortableText = Array.isArray(project.description);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.title,
    description: project.summary,
    image: project.cover,
    author: { '@type': 'Organization', name: 'Inara Foundation' },
    publisher: {
      '@type': 'Organization',
      name: 'Inara Foundation',
      logo: { '@type': 'ImageObject', url: 'https://inarafoundation.in/inara-icon.png' },
    },
    url: `https://inarafoundation.in/projects/${project.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero with summary */}
      <section className="relative h-auto min-h-[420px] overflow-hidden lg:min-h-[480px]">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="container-px mx-auto max-w-[1200px] py-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-sm text-white/90 backdrop-blur-sm transition hover:bg-black/50 hover:text-white focus-ring"
            >
              <ArrowLeft size={16} />
              All Projects
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[420px] items-end lg:min-h-[480px]">
          <div className="container-px mx-auto w-full max-w-[1200px] pb-10 lg:pb-14">
            <FadeIn direction="up">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase shadow-lg backdrop-blur-sm">
                    {project.type}
                  </span>
                  {project.collaborator && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <Handshake size={13} />
                      with {project.collaborator}
                    </span>
                  )}
                </div>
                <h1 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                  {project.summary}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meta bar */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-px mx-auto max-w-[1200px] py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {metaItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon size={17} />
                </div>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <Section className="bg-white" size="dense">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0 space-y-10">
            <FadeIn>
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
                  <h2 className="font-display text-2xl text-neutral-900">The Full Story</h2>
                </div>

                {isPortableText ? (
                  <PortableTextBody value={project.description as Parameters<typeof PortableTextBody>[0]['value']} />
                ) : (
                  <p className="text-[15px] leading-[1.8] text-neutral-700">
                    {String(project.description)}
                  </p>
                )}
              </div>
            </FadeIn>

            {project.highlights && project.highlights.length > 0 && (
              <div className="lg:hidden">
                <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50/80 to-white p-6 shadow-sm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Award size={20} className="text-brand-600" />
                    <h3 className="font-display text-lg text-neutral-900">Key Highlights</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                        <CheckCircle size={16} className="mt-0.5 shrink-0 text-brand-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {project.images.length > 0 && (
              <FadeIn delay={0.1}>
                <div>
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-1 w-10 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
                    <h2 className="font-display text-2xl text-neutral-900">Photo Gallery</h2>
                    <span className="ml-auto text-sm text-neutral-400">
                      {project.images.length} photo{project.images.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  <ProjectGallery images={project.images} />
                </div>
              </FadeIn>
            )}

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 text-white">
              <div className="absolute inset-0 bg-grid opacity-[0.15]" aria-hidden />
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-bl from-brand-400/25 to-transparent blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-gradient-to-tr from-brand-500/20 to-transparent blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                    <Heart size={22} />
                  </div>
                  <h3 className="font-display text-xl">Making a Difference</h3>
                </div>
                <p className="text-sm leading-relaxed text-neutral-300 max-w-xl">
                  This project is part of Inara Foundation&apos;s commitment to creating lasting
                  positive change. Through dedicated volunteers and generous supporters, we touch
                  lives and spread compassion.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-2.5 text-sm font-semibold text-neutral-950 shadow-sm transition hover:from-brand-300 hover:to-brand-400 hover:shadow-md"
                  >
                    Support Our Work
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                  >
                    About Our Mission
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            {project.highlights && project.highlights.length > 0 && (
              <div className="hidden lg:block rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50/80 to-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={18} className="text-brand-600" />
                  <h3 className="font-display text-base text-neutral-900">Key Highlights</h3>
                </div>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <CheckCircle size={15} className="mt-0.5 shrink-0 text-brand-500" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ShareButtons title={project.title} />

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 text-white shadow-lg">
              <div className="absolute inset-0 bg-grid opacity-[0.15]" aria-hidden />
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-bl from-brand-400/30 to-transparent blur-3xl" />
              <div className="relative">
                <Heart size={22} className="text-brand-400" />
                <h3 className="mt-3 font-display text-lg">Join Our Mission</h3>
                <p className="mt-2 text-[13px] text-neutral-300 leading-relaxed">
                  Be part of projects like this. Volunteer with us and create lasting impact.
                </p>
                <Link
                  href="https://forms.gle/odBUWnLF5xS464ba7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow transition hover:from-brand-300 hover:to-brand-400 hover:shadow-md"
                >
                  <Users size={16} />
                  Become a Volunteer
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border-2 border-brand-200/60 bg-gradient-to-br from-brand-50/50 to-white p-5">
              <h3 className="font-display text-base text-neutral-900">Support Our Work</h3>
              <p className="mt-1.5 text-[13px] text-neutral-600 leading-relaxed">
                Every contribution helps us continue making a difference.
              </p>
              <Link
                href="/donate"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-brand-400 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
              >
                <Heart size={15} />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section className="muted-section">
          <div className="mb-10 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 shadow-sm">
              <Sparkles size={16} />
              More Impact Stories
            </div>
            <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">
              Explore Other Projects
            </h2>
            <p className="mt-2 text-neutral-600">Discover more ways we&apos;re making a difference</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((rp) => (
              <Link
                key={rp.slug}
                href={`/projects/${rp.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={rp.cover}
                    alt={rp.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-sm">
                      {rp.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-neutral-900 line-clamp-2 transition group-hover:text-brand-700">
                    {rp.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">{rp.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-600 transition-all group-hover:gap-2.5">
                    Learn More
                    <ArrowRight size={15} />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 transition duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-8 py-3.5 text-sm font-semibold text-neutral-950 shadow-lg transition hover:from-brand-300 hover:to-brand-400 hover:shadow-xl"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </Section>
      )}
    </>
  );
}
