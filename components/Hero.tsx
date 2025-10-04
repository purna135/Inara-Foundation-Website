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
    id: 'planet',
    eyebrow: 'For people and planet',
    title: 'Care for animals and the environment',
    highlight: 'Care',
    description:
      'Pran‑E, Clean Beach India, and more—volunteer-driven efforts to protect lives, habitats, and hope.',
    primaryCta: { label: 'Volunteer with us', href: '/contact' },
    secondaryCta: { label: 'Learn about Inara', href: '/about' },
    imageAlt: 'Environment visual placeholder',
    imageSrc: '/hero-images/hero-1.png',
    rightNote: 'They have feelings too...',
  },
  {
    id: 'mission',
    eyebrow: 'We believe',
    title: 'Do good for every living being',
    highlight: 'Do good',
    description:
      'Join hands to create kinder communities through social and animal welfare, environmental stewardship, and inclusive initiatives.',
    primaryCta: { label: 'Join the journey', href: '/contact' },
    secondaryCta: { label: 'Explore our work', href: '/programs' },
    imageAlt: 'Inara visual placeholder',
    imageSrc: '/hero-images/hero-2.png',
    // bgSrc: '/hero-images/hero-bg-1.jpg',
    rightNote: 'Community-first initiatives',
  },
  {
    id: 'community',
    eyebrow: 'Interactive projects',
    title: 'Connect. Understand. Grow together',
    highlight: 'Connect',
    description:
      'From Acoinitier circles to citywide service days, Inara helps people meet with empathy and turn compassion into action.',
    primaryCta: { label: 'See programs', href: '/programs' },
    secondaryCta: { label: 'Our impact', href: '/impact' },
    imageAlt: 'Project visual placeholder',
    imageSrc: '/hero-images/hero-3.png',
    rightNote: 'Interactive circles & service days',
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
          <Image src={active.bgSrc} alt="" fill priority className="absolute inset-0 object-cover" />
          <div className="absolute inset-0 bg-white/70" />
        </>
      ) : (
        <div className="absolute inset-0 bg-grid" />
      )}
      <div className="container-px mx-auto max-w-[1200px] mt-12 mb-8 sm:mt-16 sm:mb-12 relative">
        <div className="grid items-center gap-4 sm:gap-8 lg:grid-cols-2">
          {/* Text area */}
          <div className="relative flex min-h-[300px] sm:min-h-[420px] flex-col justify-end pb-12 sm:pb-20 order-2 lg:order-1 mt-3 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                {active.eyebrow && (
                  <p className="text-sm font-semibold text-brand-700">{active.eyebrow}</p>
                )}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                  {active.title.split(active.highlight || '').map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx < arr.length - 1 && (
                        <span className="text-brand-600">{active.highlight}</span>
                      )}
                    </span>
                  ))}
                </h1>
                <p className="mt-5 max-w-xl text-neutral-700">{active.description}</p>
                <div className="mt-8 flex items-center gap-4">
                  <Link href={active.primaryCta.href}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-5 py-2 text-sm font-semibold text-neutral-950 shadow-sm focus-ring hover:from-brand-300 hover:to-brand-400">
                      {active.primaryCta.label}
                      <Users size={16} />
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
            <div className="absolute bottom-0 left-0 flex items-center gap-3">
              <button className="rounded-full border border-neutral-300 p-2 text-neutral-700 hover:border-brand-400 hover:text-brand-700 focus-ring" aria-label="Previous" onClick={prev}>
                <ArrowLeft size={18} />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-8 rounded-full transition-all ${i === index ? 'bg-gradient-to-r from-brand-500 to-brand-400' : 'bg-neutral-300 hover:bg-neutral-400'}`}
                  />
                ))}
              </div>
              <button className="rounded-full border border-neutral-300 p-2 text-neutral-700 hover:border-brand-400 hover:text-brand-700 focus-ring" aria-label="Next" onClick={next}>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Visual area */}
          <div className="relative order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id + '-visual'}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                {/* Balanced glow behind image (equal width/height, responsive) */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[68%] sm:w-[64%] lg:w-[80%] rounded-full bg-gradient-to-tr from-brand-500/25 to-brand-300/20 blur-2xl" />
                <div className="relative grid place-items-center">
                  <Image src={active.imageSrc} alt={active.imageAlt} width={580} height={420} className="h-auto w-full max-w-[400px] rounded-2xl" />
                </div>
                {active.rightNote && (
                  <div className="pointer-events-none absolute -bottom-6 right-10 rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm ring-1 ring-neutral-200">
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


