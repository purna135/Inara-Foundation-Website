import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import PortableTextBody from '@/components/project/PortableTextBody';
import { sanityFetch } from '@/sanity/lib/client';
import { BLOG_POST_BY_SLUG_QUERY, BLOG_POST_SLUGS_QUERY } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export async function generateStaticParams() {
  const slugs = await sanityFetch({ query: BLOG_POST_SLUGS_QUERY, revalidate: 3600 });
  return (slugs as { slug: string }[]).map((s) => ({ slug: s.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await sanityFetch({ query: BLOG_POST_BY_SLUG_QUERY, params: { slug }, revalidate: 60 });
    if (post) {
      const title = post.title as string;
      const description = (post.excerpt as string) || '';
      const coverUrl = post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : undefined;
      return {
        title,
        description,
        alternates: { canonical: `https://inarafoundation.in/blog/${slug}` },
        openGraph: {
          title,
          description,
          type: 'article',
          images: coverUrl ? [{ url: coverUrl, width: 1200, height: 630, alt: title }] : undefined,
        },
        twitter: {
          card: 'summary_large_image',
          title,
          description,
          images: coverUrl ? [coverUrl] : undefined,
        },
      };
    }
  } catch {
    // fallback
  }
  return { title: 'Blog Post' };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await sanityFetch({ query: BLOG_POST_BY_SLUG_QUERY, params: { slug }, revalidate: 60 });
  } catch {
    notFound();
  }

  if (!post) notFound();

  const title = post.title as string;
  const author = post.author as string | undefined;
  const publishedAt = post.publishedAt as string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body = post.body as any[] | undefined;
  const categories = post.categories as string[] | undefined;
  const coverUrl = post.coverImage ? urlFor(post.coverImage).width(1400).height(700).url() : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    ...(post.excerpt ? { description: post.excerpt as string } : {}),
    ...(coverUrl ? { image: coverUrl } : {}),
    ...(author ? { author: { '@type': 'Person', name: author } } : {}),
    ...(publishedAt ? { datePublished: publishedAt } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Inara Foundation',
      logo: { '@type': 'ImageObject', url: 'https://inarafoundation.in/inara-icon.png' },
    },
    url: `https://inarafoundation.in/blog/${(post.slug as { current: string }).current}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {coverUrl && (
        <section className="relative h-[45vh] min-h-[360px] overflow-hidden">
          <Image
            src={coverUrl}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
        </section>
      )}

      <div className="container-px mx-auto max-w-[800px] py-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-brand-600"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>

      <Section className="bg-white pt-2">
        <article className="mx-auto max-w-[800px]">
          <FadeIn>
            <header className="mb-8">
              {categories && categories.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <span
                      key={cat}
                      className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-display text-3xl text-neutral-900 sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-500">
                {author && (
                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    {author}
                  </span>
                )}
                {publishedAt && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                )}
              </div>
            </header>
          </FadeIn>

          {body && body.length > 0 && <PortableTextBody value={body} />}
        </article>
      </Section>
    </>
  );
}
