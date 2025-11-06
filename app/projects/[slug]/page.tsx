'use client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState, use } from 'react';
import Section from '@/components/Section';
import {
  Calendar,
  MapPin,
  Users,
  ArrowLeft,
  CheckCircle,
  Heart,
  Share2,
  Sparkles,
  Target,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  X,
} from 'lucide-react';
import projectsData from '@/data/projects.json';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const { slug } = use(params);
  const project = (projectsData as any[]).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Share functions
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this amazing project: ${project.title}`;

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
        <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />

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

      {/* Quick Info Bar */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-px mx-auto max-w-[1200px] py-6">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-sm">
                <Calendar size={20} />
              </div>
              <div>
                <div className="text-xs text-neutral-500">Date</div>
                <div className="text-sm font-semibold text-neutral-900">{project.date}</div>
              </div>
            </div>
            
            {project.location && (
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-sm">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Location</div>
                  <div className="text-sm font-semibold text-neutral-900">{project.location}</div>
                </div>
              </div>
            )}
            
            {project.participants && (
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-sm">
                  <Users size={20} />
                </div>
                <div>
                  <div className="text-xs text-neutral-500">Participants</div>
                  <div className="text-sm font-semibold text-neutral-900">{project.participants}</div>
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-sm">
                <Target size={20} />
              </div>
              <div>
                <div className="text-xs text-neutral-500">Type</div>
                <div className="text-sm font-semibold text-neutral-900">{project.type}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Summary Card */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-8 shadow-sm">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-100/50 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                    <Sparkles size={24} />
                  </div>
                  <h2 className="font-display text-2xl text-neutral-900">Project Overview</h2>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* Full Story */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
                <h2 className="font-display text-3xl text-neutral-900">The Full Story</h2>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 p-8 shadow-sm">
                <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-brand-100/30 blur-3xl" aria-hidden />
                <div className="relative prose prose-lg max-w-none">
                  <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights - Mobile */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="lg:hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="font-display text-xl text-neutral-900">Key Highlights</h3>
                </div>
                <ul className="space-y-3">
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

            {/* Image Gallery */}
            {project.images && project.images.length > 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-brand-400 to-brand-500" />
                  <h2 className="font-display text-3xl text-neutral-900">Photo Gallery</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {project.images.slice(1).map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index + 1)}
                      className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 2}`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Impact Section */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-bl from-brand-400/30 to-transparent blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-gradient-to-tr from-brand-500/30 to-transparent blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                    <Award size={24} />
                  </div>
                  <h3 className="font-display text-2xl">Making a Difference</h3>
                </div>
                <p className="text-neutral-200 leading-relaxed">
                  This project is part of Inara Foundation's commitment to creating lasting positive change in our communities. Through dedicated volunteers and generous supporters, we continue to touch lives and spread compassion.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/about" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition text-sm font-semibold">
                    Learn More About Our Mission
                    <ArrowLeft size={16} className="rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Highlights Card - Desktop */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="hidden lg:block rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                    <CheckCircle size={20} />
                  </div>
                  <h3 className="font-display text-lg text-neutral-900">Key Highlights</h3>
                </div>
                <ul className="space-y-3">
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

            {/* Share Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Share2 size={20} className="text-brand-600" />
                <h3 className="font-semibold text-neutral-900">Share This Project</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4">
                Help us spread the word and inspire others to join.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={handleFacebookShare}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-300 to-brand-400 px-3 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition hover:from-brand-400 hover:to-brand-500 hover:scale-105 hover:shadow-md"
                >
                  <Facebook size={16} />
                  Share
                </button>
                <button 
                  onClick={handleTwitterShare}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-300 to-brand-400 px-3 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition hover:from-brand-400 hover:to-brand-500 hover:scale-105 hover:shadow-md"
                >
                  <Twitter size={16} />
                  Tweet
                </button>
                <button 
                  onClick={handleLinkedInShare}
                  className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-300 to-brand-400 px-3 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition hover:from-brand-400 hover:to-brand-500 hover:scale-105 hover:shadow-md"
                >
                  <Linkedin size={16} />
                  Post
                </button>
                <button 
                  onClick={handleCopyLink}
                  className="relative flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-300 to-brand-400 px-3 py-2.5 text-sm font-medium text-neutral-950 shadow-sm transition hover:from-brand-400 hover:to-brand-500 hover:scale-105 hover:shadow-md"
                >
                  {copied ? (
                    <>
                      <CheckCircle size={16} />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Instagram size={16} />
                      Copy Link
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 text-white shadow-lg">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-bl from-brand-400/30 to-transparent blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-brand-500/30 to-transparent blur-3xl" />
              
              <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 shadow-lg">
                  <Heart size={28} />
                </div>
                <h3 className="mt-4 font-display text-2xl">Join Our Mission</h3>
                <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
                  Be part of projects like this. Volunteer with us and create lasting impact in our communities.
                </p>
                <Link href="https://forms.gle/odBUWnLF5xS464ba7" target="_blank" rel="noopener noreferrer" className="mt-5 block">
                  <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:from-brand-300 hover:to-brand-400 hover:shadow-xl">
                    <Users size={18} />
                    Become a Volunteer
                  </span>
                </Link>
              </div>
            </div>

            {/* Support Card */}
            <div className="rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6">
              <h3 className="font-display text-lg text-neutral-900">Support Our Work</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Every contribution helps us continue making a difference.
              </p>
              <Link href="/contact#contact-form" className="mt-4 block">
                <span className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-500 bg-white px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50">
                  <Heart size={16} />
                  Donate Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Image Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={project.images[selectedImage]}
              alt={`${project.title} - Image ${selectedImage + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
            {selectedImage + 1} / {project.images.length}
          </div>
        </div>
      )}

      {/* Related Projects */}
      <Section className="muted-section">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 ring-1 ring-brand-200 shadow-sm mb-4">
            <Sparkles size={16} />
            More Impact Stories
          </div>
          <h2 className="font-display text-4xl text-neutral-900">Explore Other Projects</h2>
          <p className="mt-3 text-lg text-neutral-600">Discover more ways we're making a difference</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {(projectsData as any[])
            .filter((p) => p.slug !== project.slug)
            .slice(0, 3)
            .map((relatedProject, index) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={relatedProject.cover}
                    alt={relatedProject.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-sm">
                      {relatedProject.type}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-display text-lg text-neutral-900 line-clamp-2 group-hover:text-brand-700 transition">
                    {relatedProject.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
                    {relatedProject.summary}
                  </p>
                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition group-hover:gap-3">
                      Learn More
                      <ArrowLeft size={16} className="rotate-180" />
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/programs">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-8 py-4 text-base font-semibold text-neutral-950 shadow-lg transition hover:from-brand-300 hover:to-brand-400 hover:shadow-xl">
              View All Projects
              <ArrowLeft size={18} className="rotate-180" />
            </span>
          </Link>
        </div>
      </Section>
    </main>
  );
}

