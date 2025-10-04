"use client";
import Section from "./Section";
import data from "@/data/testimonials.json";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export default function Testimonials() {
  const items = data as any[] as Testimonial[];
  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  const visible = useMemo(() => {
    if (items.length <= perPage) return items;
    const arr: Testimonial[] = [];
    const startIdx = (page * perPage) % items.length;
    for (let i = 0; i < Math.min(perPage, items.length); i++) {
      arr.push(items[(startIdx + i) % items.length]);
    }
    return arr;
  }, [items, perPage, page]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setPage((p) => (p + 1) % totalPages), 4000);
    return () => clearInterval(id);
  }, [paused, totalPages]);

  return (
    <Section className="bg-white" size="dense">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-700">Testimonials</p>
        <h2 className="mt-1 font-display text-3xl sm:text-4xl">What our volunteers say</h2>
        <p className="mt-2 text-neutral-700">Real words from Inara volunteers about their experience and growth.</p>
      </div>

      <div
        className="relative mt-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((t) => (
              <article
                key={t.id}
                className="relative overflow-visible rounded-2xl border border-neutral-200 paper-card p-6 shadow-sm flex flex-col min-h-[220px]"
              >
                <span className="pointer-events-none absolute -right-2 -top-9 lg:text-[160px] sm:text-[108px] leading-none text-brand-400/40">
                  ”
                </span>
                <p
                  className="text-sm leading-relaxed text-neutral-800"
                  style={{
                    fontFamily:
                      '"Patrick Hand", "Comic Sans MS", system-ui, sans-serif',
                  }}
                >
                  “{t.quote}”
                </p>
                <div className="mt-auto pt-5 flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {items.length > perPage && (
          <div className="mt-6 mx-auto flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="grid px-3 py-1 place-items-center rounded-full ring-1 ring-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to page ${i + 1}`}
                  onClick={() => setPage(i)}
                  className={`h-2.5 w-8 rounded-full transition-all ${
                    i === page
                      ? "bg-gradient-to-r from-brand-500 to-brand-400"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="grid px-3 py-1 place-items-center rounded-full ring-1 ring-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}
