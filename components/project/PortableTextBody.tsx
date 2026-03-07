import { PortableText, type PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { ArrowRight, Info, CheckCircle2, AlertTriangle, Quote, Play } from 'lucide-react';

function extractVideoId(url: string): { type: 'youtube' | 'vimeo'; id: string } | null {
  const ytMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  if (ytMatch) return { type: 'youtube', id: ytMatch[1] };
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return { type: 'vimeo', id: vimeoMatch[1] };
  return null;
}

const calloutStyles: Record<string, { bg: string; border: string; icon: typeof Info; iconColor: string }> = {
  info: { bg: 'bg-blue-50', border: 'border-blue-300', icon: Info, iconColor: 'text-blue-600' },
  success: { bg: 'bg-emerald-50', border: 'border-emerald-300', icon: CheckCircle2, iconColor: 'text-emerald-600' },
  warning: { bg: 'bg-amber-50', border: 'border-amber-300', icon: AlertTriangle, iconColor: 'text-amber-600' },
};

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[15px] leading-[1.8] text-neutral-700 last:mb-0">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-display text-2xl text-neutral-900 first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-display text-xl text-neutral-900 first:mt-0">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 font-display text-lg text-neutral-900 first:mt-0">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 rounded-r-xl border-l-4 border-brand-400 bg-brand-50/50 py-4 pl-5 pr-5 text-neutral-700 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u className="underline underline-offset-2">{children}</u>,
    'strike-through': ({ children }) => <s className="text-neutral-500">{children}</s>,
    code: ({ children }) => (
      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[13px] text-brand-700">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <a
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="font-medium text-brand-600 underline decoration-brand-300 underline-offset-2 transition hover:text-brand-700 hover:decoration-brand-500"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 ml-1 space-y-2.5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 ml-5 list-decimal space-y-2.5 marker:text-brand-500 marker:font-semibold">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-2.5 text-[15px] leading-[1.8] text-neutral-700">
        <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[15px] leading-[1.8] text-neutral-700">{children}</li>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-sm">
            <Image
              src={urlFor(value).width(900).url()}
              alt={value.alt || value.caption || 'Image'}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2.5 text-center text-sm text-neutral-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    videoEmbed: ({ value }) => {
      if (!value?.url) return null;
      const video = extractVideoId(value.url);
      if (!video) {
        return (
          <div className="my-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-center">
            <Play size={24} className="mx-auto mb-2 text-neutral-400" />
            <a href={value.url} target="_blank" rel="noopener noreferrer" className="text-sm text-brand-600 underline">
              Watch video
            </a>
          </div>
        );
      }
      const embedUrl = video.type === 'youtube'
        ? `https://www.youtube-nocookie.com/embed/${video.id}`
        : `https://player.vimeo.com/video/${video.id}`;
      return (
        <figure className="my-8">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-sm">
            <iframe
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
              title={value.caption || 'Embedded video'}
              loading="lazy"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2.5 text-center text-sm text-neutral-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    callToAction: ({ value }) => {
      if (!value?.heading) return null;
      const isDark = value.style === 'dark';
      return (
        <div
          className={`my-8 relative overflow-hidden rounded-2xl p-7 ${
            isDark
              ? 'bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white'
              : 'bg-gradient-to-br from-brand-50 to-white border-2 border-brand-200/60'
          }`}
        >
          {isDark && (
            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-bl from-brand-400/25 to-transparent blur-3xl" />
          )}
          <div className="relative">
            <h3 className={`font-display text-xl ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              {value.heading}
            </h3>
            {value.text && (
              <p className={`mt-2 text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {value.text}
              </p>
            )}
            {value.buttonText && value.buttonUrl && (
              <Link
                href={value.buttonUrl}
                target={value.buttonUrl.startsWith('http') ? '_blank' : undefined}
                rel={value.buttonUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm transition ${
                  isDark
                    ? 'bg-gradient-to-r from-brand-400 to-brand-300 text-neutral-950 hover:from-brand-300 hover:to-brand-400'
                    : 'bg-gradient-to-r from-brand-500 to-brand-400 text-white hover:from-brand-400 hover:to-brand-500'
                }`}
              >
                {value.buttonText}
                <ArrowRight size={15} />
              </Link>
            )}
          </div>
        </div>
      );
    },

    callout: ({ value }) => {
      if (!value?.text) return null;
      const style = calloutStyles[value.tone] || calloutStyles.info;
      const Icon = style.icon;
      return (
        <div className={`my-8 flex gap-3 rounded-xl border ${style.border} ${style.bg} p-5`}>
          <Icon size={20} className={`mt-0.5 shrink-0 ${style.iconColor}`} />
          <div>
            {value.heading && (
              <p className="mb-1 font-semibold text-neutral-900">{value.heading}</p>
            )}
            <p className="text-sm leading-relaxed text-neutral-700">{value.text}</p>
          </div>
        </div>
      );
    },

    imageRow: ({ value }) => {
      if (!value?.images?.length) return null;
      const count = value.images.length;
      return (
        <figure className="my-8">
          <div className={`grid gap-3 ${count === 2 ? 'grid-cols-2' : count === 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {value.images.map((img: any, i: number) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-sm">
                <Image
                  src={urlFor(img).width(600).height(450).url()}
                  alt={img.caption || `Image ${i + 1}`}
                  fill
                  sizes={`(max-width: 768px) ${Math.round(100 / Math.min(count, 2))}vw, ${Math.round(66 / count)}vw`}
                  className="object-cover"
                />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2 pt-6">
                    <p className="text-xs text-white/90">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {value.caption && (
            <figcaption className="mt-2.5 text-center text-sm text-neutral-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    inlineQuote: ({ value }) => {
      if (!value?.quote) return null;
      return (
        <figure className="my-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50/80 to-white border border-brand-200/60 p-7">
          <Quote size={32} className="absolute top-5 right-5 text-brand-200" />
          <blockquote className="relative text-[15px] leading-[1.8] text-neutral-800 italic">
            &ldquo;{value.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 flex items-center gap-2">
            <div className="h-px w-8 bg-brand-400" />
            <span className="text-sm font-semibold text-neutral-900">{value.attribution}</span>
            {value.role && (
              <span className="text-sm text-neutral-500">, {value.role}</span>
            )}
          </figcaption>
        </figure>
      );
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PortableTextBody({ value }: { value: any[] }) {
  if (!value || value.length === 0) return null;
  return (
    <div className="portable-text">
      <PortableText value={value} components={components} />
    </div>
  );
}
