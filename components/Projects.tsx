"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, Users, MapPin } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import Section from "./Section";
import Link from "next/link";

interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  type: string;
  collaborator?: string;
  date: string;
  location?: string;
  participants?: string;
  summary: string;
  cover: string;
}

export default function Projects({ projects }: { projects: ProjectItem[] }) {
  const [tab, setTab] = useState("All");
  const [page, setPage] = useState(0);

  const tabs = useMemo(() => {
    const types = [...new Set(projects.map((p) => p.type).filter(Boolean))];
    return ["All", ...types];
  }, [projects]);

  const filtered = useMemo(
    () => projects.filter((p) => (tab === "All" ? true : p.type === tab)),
    [tab, projects]
  );

  const itemsPerPage = 3;
  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const pageItems = filtered.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  if (projects.length === 0) return null;

  return (
    <Section className="bg-white" size="dense">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-700">
          Featured projects
        </p>
        <h2 className="font-display text-3xl sm:text-4xl">
          Spread joy with your participation
        </h2>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative z-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => {
              setTab(t);
              setPage(0);
            }}
            className={`group relative rounded-full px-4 py-2 text-sm ring-1 transition-all cursor-pointer focus-ring ${
              tab === t
                ? "bg-gradient-to-r from-brand-400 to-brand-300 text-neutral-950 ring-brand-400 shadow-sm"
                : "bg-white text-neutral-700 ring-neutral-200 hover:bg-brand-50 hover:text-brand-700"
            }`}
          >
            {t}
            {tab === t && (
              <span className="absolute left-1/2 top-full -translate-x-1/2 mt-1 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-brand-500" />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab + "-" + page}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {pageItems.map((p) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-sm">
                    {p.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{p.date || "Coming Soon"}</span>
                  </div>
                  {p.participants && (
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{p.participants}</span>
                    </div>
                  )}
                </div>

                <h3 className="mt-3 font-display text-xl text-neutral-900 line-clamp-2">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                  {p.summary}
                </p>

                <div className="mt-auto pt-4 space-y-3">
                  {p.location && (
                    <div className="flex items-center gap-1 text-xs text-neutral-500">
                      <MapPin size={14} />
                      <span className="line-clamp-1">{p.location}</span>
                    </div>
                  )}

                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700 hover:gap-3"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {pageCount > 1 && (
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={prev}
            aria-label="Previous"
            className="rounded-full px-3 py-1 text-sm ring-1 ring-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
            disabled={page === 0}
          >
            <ArrowLeft size={18} />
          </button>
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 w-8 rounded-full transition-all ${
                i === page
                  ? "bg-gradient-to-r from-brand-500 to-brand-400"
                  : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
          <button
            onClick={next}
            aria-label="Next"
            className="rounded-full px-3 py-1 text-sm ring-1 ring-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50"
            disabled={page === pageCount - 1}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </Section>
  );
}
