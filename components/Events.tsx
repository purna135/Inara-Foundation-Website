"use client";
 import Image from "next/image";
 import Link from "next/link";
 import events from "@/data/events.json";
 import Section from "./Section";
 import { CalendarDays, MapPin, Clock, ArrowRight, ArrowLeft } from "lucide-react";
 import { useMemo, useState } from "react";

type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  cover: string;
  description: string;
};

export default function Events() {
  const all = events as any[] as EventItem[];
  const sorted = useMemo(
    () =>
      [...all].sort((a, b) => {
        const ad = new Date((a as any).startDate || 0).getTime();
        const bd = new Date((b as any).startDate || 0).getTime();
        return ad - bd; // nearest first
      }),
    [all]
  );
  const perPage = 2;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(sorted.length / perPage);
  const startIdx = page * perPage;
  const endIdx = Math.min(sorted.length, startIdx + perPage);
  const items = sorted.slice(startIdx, endIdx);

  return (
    <Section className="bg-white" size="dense">
       <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-700">
          Our recent events
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Join upcoming events & activities
        </h2>
        <p className="mt-3 text-neutral-600">
          Be part of meaningful change through community engagement and
          impactful initiatives
        </p>
         <p className="mt-3 text-neutral-600">
           Showing {startIdx + 1}–{endIdx} of {sorted.length}
         </p>
      </div>

      <div className="mt-8 space-y-4">
        {items.map((event, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <article
              key={event.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-brand-300/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-50/20 to-transparent" />

              {/* Mobile: Image + Content, Desktop: Image + Content + Date */}
              <div className="relative grid gap-0 min-h-[140px] grid-cols-1 md:grid-cols-[280px_1fr_280px]">
                {/* Image Section */}
                <div
                  className={`relative overflow-hidden ${
                    isReversed ? "md:order-3" : "md:order-1"
                  }`}
                >
                  <div className="aspect-[16/9] md:aspect-auto md:h-full">
                    <Image
                      src={event.cover}
                      alt={event.title}
                      width={560}
                      height={320}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Category Badge */}
                  <div
                    className={`absolute bottom-3 ${
                      isReversed ? "right-3" : "left-3"
                    }`}
                  >
                    <div className="rounded-full bg-white/90 px-4 py-1 shadow-lg backdrop-blur-sm">
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative flex flex-col justify-center px-5 py-4 md:order-2">
                  <div className="space-y-2.5">
                    <h3 className="text-lg font-bold text-neutral-900 leading-tight md:text-xl">
                      {event.title}
                    </h3>

                    <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                      {/* Date - Mobile only */}
                      <div className="flex items-center gap-2 text-sm text-neutral-600 md:hidden">
                        <CalendarDays
                          size={13}
                          className="text-brand-600 flex-shrink-0"
                        />
                        <span className="truncate font-medium">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <Clock
                          size={13}
                          className="text-brand-600 flex-shrink-0"
                        />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-neutral-600">
                        <MapPin
                          size={13}
                          className="text-brand-600 flex-shrink-0"
                        />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                     <div className="pt-1">
                       <Link href={`/events/${event.id}`}>
                        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-4 py-1.5 text-sm font-semibold text-neutral-950 transition-all hover:from-brand-400 hover:to-brand-300 focus-ring">
                          Event Details
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>

                 {/* Date Section - Desktop only */}
                <div
                  className={`relative hidden items-center justify-center p-4 md:flex ${
                    isReversed ? "md:order-1" : "md:order-3"
                  }`}
                >
                  <div className="flex w-40 flex-col items-center rounded-xl bg-gradient-to-br from-brand-50 via-white to-brand-100/60 px-4 py-4 shadow-md ring-1 ring-brand-200/40">
                    <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 shadow-sm">
                      <CalendarDays size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-brand-700/80 mb-1">
                      Date
                    </span>
                    <div className="text-center leading-none">
                      <div className="text-lg font-bold text-brand-800">
                        {event.date.split(" ")[0] || event.date.split("–")[0]}
                      </div>
                      <div className="text-xs font-semibold text-brand-600 mt-0.5">
                        {event.date.split(" ")[1] || event.date.split("–")[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            className="rounded-full px-3 py-1 text-sm ring-1 ring-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <ArrowLeft size={18} />
          </button>
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
          <button
            className="rounded-full px-3 py-1 text-sm ring-1 ring-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
     </Section>
  );
}
