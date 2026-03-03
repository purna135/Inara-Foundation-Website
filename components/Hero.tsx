"use client";
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Users } from 'lucide-react';
import Button from './Button';

type Slide = {
  id: string;
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageAlt: string;
  imageSrc: string;
  bgSrc?: string;
  rightNote?: string;
};

const slidesData: Slide[] = [
  {
    id: 'main',
    eyebrow: 'Inara Foundation',
    title: 'Compassion in Action, Light That Endures',
    highlight: 'Action',
    description:
      'From slum corners to open hearts, each moment shared becomes a bridge of kindness, learning, and hope.',
    primaryCta: { label: 'Volunteer with us', href: 'https://forms.gle/odBUWnLF5xS464ba7' },
    secondaryCta: { label: 'Explore our work', href: '/programs' },
    imageAlt: 'Compassion in Action, Light That Endures',
    imageSrc: '/hero-images/hero-image-1.PNG',
    bgSrc: '/hero-images/hero-bg-1.jpg',
    rightNote: 'Turning efforts into measurable, lasting difference.',
  },
  {
    id: 'small-act',
    eyebrow: 'Action that leads to change',
    title: 'Where Every Celebration Embraces All',
    highlight: 'Celebration',
    description:
      'From bangles to handwritten wishes, every gesture became a symbol of love and inclusion.',
    primaryCta: { label: 'Join the journey', href: 'https://forms.gle/odBUWnLF5xS464ba7' },
    secondaryCta: { label: 'Learn about Inara', href: '/about' },
    imageAlt: 'Where Every Celebration Embraces All',
    imageSrc: '/hero-images/hero-image-2.png',
    bgSrc: '/hero-images/hero-bg-2.JPG',
    rightNote: 'Your kindness makes impact possible.',
  },
  {
    id: 'community',
    eyebrow: 'Change starts with us.',
    title: 'Kindness That Heals, Connections That Last',
    highlight: 'Kindness',
    description:
      'Each visit reaffirms our belief in the enduring strength of compassion, where small acts spark lasting hope.',
    primaryCta: { label: 'See programs', href: '/programs' },
    secondaryCta: { label: 'Our impact', href: '/about' },
    imageAlt: 'Kindness That Heals, Connections That Last',
    imageSrc: '/hero-images/hero-image-3.png',
    bgSrc: '/hero-images/hero-bg-3.JPG',
    rightNote: 'Together, we help good grow stronger.',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slides = useMemo(() => slidesData, []);
  const active = slides[index];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [paused, slides.length]);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {active.bgSrc ? (
        <>
          <Image 
            src={active.bgSrc} 
            alt="Inara Foundation volunteers making a difference in the community" 
            fill 
            priority 
            sizes="100vw"
            quality={85}
            className="absolute inset-0 object-cover" 
          />
          <div className="absolute inset-0 bg-white/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-grid" />
      )}
      <div className="container-px mx-auto max-w-[1200px] py-4 sm:py-10 lg:py-16 relative">
        <div className="grid items-center gap-2 sm:gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Text area */}
          <div className="relative flex min-h-[300px] sm:min-h-[380px] lg:h-[70vh] xl:h-[500px] flex-col justify-end pb-8 sm:pb-16 lg:pb-20 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="space-y-4 sm:space-y-5 text-center lg:text-left"
              >
                {active.eyebrow && (
                  <p className="text-xs sm:text-sm font-semibold text-brand-700 mb-1">{active.eyebrow}</p>
                )}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl tracking-tight leading-none -mt-1">
                  {active.title.split(active.highlight || '').map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="text-brand-600">{active.highlight}</span>
                      )}
                    </span>
                  ))}
                </h1>
                <p className="text-sm sm:text-base max-w-xl text-neutral-700 leading-relaxed mx-auto lg:mx-0">{active.description}</p>
                <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap pt-2 sm:pt-2 mb-2 lg:mb-0">
                  <Link href={active.primaryCta.href}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 shadow-sm focus-ring hover:from-brand-300 hover:to-brand-400">
                      {active.primaryCta.label}
                      <Users size={14} className="sm:w-4 sm:h-4" />
                    </span>
                  </Link>
                  {active.secondaryCta && (
                    <Link href={active.secondaryCta.href}>
                      <Button variant="secondary">{active.secondaryCta.label}</Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 flex items-center gap-2 sm:gap-3">
              <button className="rounded-full border border-neutral-300 p-1.5 sm:p-2 text-neutral-700 hover:border-brand-400 hover:text-brand-700 focus-ring" aria-label="Previous" onClick={prev}>
                <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 sm:h-2.5 w-6 sm:w-8 rounded-full transition-all ${i === index ? 'bg-gradient-to-r from-brand-500 to-brand-400' : 'bg-neutral-300 hover:bg-neutral-400'}`}
                  />
                ))}
              </div>
              <button className="rounded-full border border-neutral-300 p-1.5 sm:p-2 text-neutral-700 hover:border-brand-400 hover:text-brand-700 focus-ring" aria-label="Next" onClick={next}>
                <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </div>
          </div>

          {/* Visual area */}
          <div className="relative order-1 lg:order-2 mb-2 sm:mb-4 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + '-visual'}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative"
              >
                {/* Balanced glow behind image (equal width/height, responsive) */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[75%] sm:w-[68%] lg:w-[80%] rounded-full bg-gradient-to-tr from-brand-500/25 to-brand-300/20 blur-2xl" />
                <div className="relative grid place-items-center px-4 sm:px-0">
                  <Image 
                    src={active.imageSrc} 
                    alt={active.imageAlt} 
                    width={580} 
                    height={420} 
                    priority
                    quality={90}
                    className="h-auto w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] rounded-xl sm:rounded-2xl" 
                  />
                </div>
                {active.rightNote && (
                  <div className="pointer-events-none absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-10 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-neutral-700 shadow-sm ring-1 ring-neutral-200 text-center lg:text-left whitespace-nowrap">
                    {active.rightNote}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


