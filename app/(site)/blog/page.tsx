import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Calendar, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { sanityFetch } from '@/sanity/lib/client';
import { BLOG_POSTS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Stories, updates, and insights from Inara Foundation — our journey, volunteer experiences, and the communities we serve across India.',
  alternates: { canonical: 'https://inarafoundation.in/blog' },
  openGraph: {
    title: 'Blog - Inara Foundation',
    description: 'Stories, updates, and insights from Inara Foundation — our journey, volunteer experiences, and the communities we serve across India.',
    images: [{ url: '/website-preview-image.jpg', width: 1200, height: 630, alt: 'Inara Foundation Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Inara Foundation',
    description: 'Stories, updates, and insights from Inara Foundation — our journey, volunteer experiences, and the communities we serve across India.',
    images: ['/website-preview-image.jpg'],
  },
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  coverImage?: any;
  author?: string;
  publishedAt?: string;
  categories?: string[];
}

export default async function BlogPage() {
  let posts: BlogPost[] = [];
  try {
    const result = await sanityFetch({ query: BLOG_POSTS_QUERY, revalidate: 60 });
    if (result && Array.isArray(result)) posts = result as BlogPost[];
  } catch {
    // Sanity not available
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/60">
                <BookOpen size={16} className="text-brand-600" />
                Our Blog
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-5xl tracking-tight text-neutral-900 sm:text-6xl">
                Stories &{' '}
                <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
                  Updates
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-neutral-700">
                Read about our journey, learnings, and the impact we&apos;re creating together.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <Section className="bg-white">
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-brand-200"
              >
                {post.coverImage && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={urlFor(post.coverImage).width(600).height(375).url()}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  {post.categories && post.categories.length > 0 && (
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {post.categories.map((cat) => (
                        <span
                          key={cat}
                          className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 className="font-display text-lg text-neutral-900 line-clamp-2 transition group-hover:text-brand-700">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2 text-sm text-neutral-600 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-neutral-500">
                    {post.author && (
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </span>
                    )}
                    {post.publishedAt && (
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5">
                    Read More
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-lg py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50">
              <Sparkles size={28} className="text-brand-500" />
            </div>
            <h2 className="font-display text-2xl text-neutral-900">Coming Soon</h2>
            <p className="mt-3 text-neutral-600">
              We&apos;re working on sharing our stories and insights. Stay tuned for our first blog
              posts!
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg transition hover:from-brand-300 hover:to-brand-400"
            >
              Explore Our Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </Section>
    </>
  );
}
