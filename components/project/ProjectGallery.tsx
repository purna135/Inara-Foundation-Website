'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface GalleryImage {
  url: string;
  caption?: string;
  alt: string;
}

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  if (images.length === 0) return null;

  const featured = images[0];
  const rest = images.slice(1);

  return (
    <>
      <div className="space-y-3">
        <button
          onClick={() => openLightbox(0)}
          className="group relative block w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
        >
          <div className="relative aspect-[16/9]">
            <Image
              src={featured.url}
              alt={featured.alt}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
              <ZoomIn size={14} />
              View
            </div>
          </div>
          {featured.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-10">
              <p className="text-sm text-white/90">{featured.caption}</p>
            </div>
          )}
        </button>

        {rest.length > 0 && (
          <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
            {rest.map((img, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i + 1)}
                aria-label={img.alt}
                className="group relative aspect-square overflow-hidden rounded-xl border border-neutral-200 shadow-sm transition hover:shadow-md hover:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-1"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                  <ZoomIn size={18} className="text-white drop-shadow-lg" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2.5 text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Close lightbox (Esc)"
          >
            <X size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25 sm:left-6"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-6"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Main image area */}
          <div
            className="relative h-[70vh] w-[90vw] max-w-5xl sm:h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              priority
              sizes="90vw"
            />
          </div>

          {/* Bottom info bar */}
          <div className="mt-3 flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
              {lightboxIndex + 1} / {images.length}
            </span>
            {images[lightboxIndex].caption && (
              <span className="max-w-sm truncate rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
                {images[lightboxIndex].caption}
              </span>
            )}
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div
              className="mt-3 flex items-center gap-2 overflow-x-auto px-4 pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-lg transition sm:h-16 sm:w-16 ${
                    i === lightboxIndex
                      ? 'ring-2 ring-brand-400 ring-offset-2 ring-offset-black'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
