import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  CheckCircle,
  Heart,
  Share2,
} from 'lucide-react';
import projectsData from '@/data/projects.json';

export async function generateStaticParams() {
  const projects = projectsData as any[];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = (projectsData as any[]).find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = (projectsData as any[]).find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section with Cover Image */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />

        {/* Breadcrumb & Back Button */}
        <div className="absolute top-0 left-0 right-0 z-10 border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container-px mx-auto max-w-[1200px] py-4">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm text-white/90 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </div>
        </div>

        {/* Project Title Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-px mx-auto max-w-[1200px] w-full pb-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-lg backdrop-blur-sm">
                {project.type}
              </div>
              <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{project.date}</span>
                </div>
                {project.location && (
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                )}
                {project.participants && (
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{project.participants}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div>
              <h2 className="font-display text-3xl text-neutral-900">About This Project</h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                {project.summary}
              </p>
            </div>

            {/* Full Description */}
            <div className="prose prose-lg max-w-none">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 lg:p-8">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            {project.images && project.images.length > 1 && (
              <div>
                <h2 className="font-display text-2xl text-neutral-900">Gallery</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image: string, index: number) => (
                    <div
                      key={index}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 shadow-sm"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Highlights Card */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="sticky top-8 rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="font-semibold text-neutral-900">Key Highlights</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-neutral-700">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                        <div className="h-2 w-2 rounded-full bg-brand-600" />
                      </div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Card */}
            <div className="rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                <Heart size={24} />
              </div>
              <h3 className="mt-4 font-display text-xl">Join Our Mission</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Be part of projects like this. Volunteer with us and create lasting impact.
              </p>
              <Link href="/contact" className="mt-4 block">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-4 py-2.5 text-sm font-semibold text-neutral-950 shadow-lg transition hover:from-brand-300 hover:to-brand-400">
                  <Users size={16} />
                  Become a Volunteer
                </span>
              </Link>
            </div>

            {/* Share Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Share2 size={20} className="text-brand-600" />
                <h3 className="font-semibold text-neutral-900">Share This Project</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-600">
                Help us spread the word about our work and inspire others to join.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-100">
                  Facebook
                </button>
                <button className="flex-1 rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition hover:bg-brand-100">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Projects */}
      <Section className="muted-section">
        <div className="text-center">
          <h2 className="font-display text-3xl text-neutral-900">More Projects</h2>
          <p className="mt-2 text-neutral-600">Explore other initiatives creating impact</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {(projectsData as any[])
            .filter((p) => p.slug !== project.slug)
            .slice(0, 3)
            .map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={relatedProject.cover}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-medium text-brand-600">
                    {relatedProject.type}
                  </div>
                  <h3 className="mt-2 font-semibold text-neutral-900 line-clamp-2">
                    {relatedProject.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                    {relatedProject.summary}
                  </p>
                </div>
              </Link>
            ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/programs">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-md transition hover:from-brand-300 hover:to-brand-400 hover:shadow-lg">
              View All Projects
              <ArrowLeft size={16} className="rotate-180" />
            </span>
          </Link>
        </div>
      </Section>
    </main>
  );
}

