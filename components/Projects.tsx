"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import Button from './Button';
import Section from './Section';
import projectsData from '@/data/projects.json';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  type: 'Interactive' | 'Fundraisers' | 'Collaborations' | 'Virtual';
  summary: string;
  cover: string;
  raised?: string;
  goal?: string;
};

// Data separated for easy future CMS migration
export const PROJECTS: Project[] = (projectsData as any) as Project[];

const TABS: Array<Project['type'] | 'All'> = ['All', 'Interactive', 'Fundraisers', 'Collaborations', 'Virtual'];

export default function Projects() {
  const [tab, setTab] = useState<typeof TABS[number]>('All');
  const [page, setPage] = useState(0);
  const filtered = useMemo(() => PROJECTS.filter((p) => tab === 'All' ? true : p.type === tab), [tab]);

  const itemsPerPage = 3;
  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const pageItems = filtered.slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage);
  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  return (
    <Section className="bg-white" size="dense">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-700">Featured projects</p>
        <h2 className="font-display text-3xl sm:text-4xl">Spread joy with your participation</h2>
      </div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 relative z-10">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setPage(0); }}
              className={`group relative rounded-full px-4 py-2 text-sm ring-1 transition-all cursor-pointer ${
                tab === t
                  ? 'bg-gradient-to-r from-brand-400 to-brand-300 text-neutral-950 ring-brand-400 shadow-sm'
                  : 'bg-white text-neutral-700 ring-neutral-200 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {t}
              {tab === t && (
                <span className="absolute left-1/2 top-full -translate-x-1/2 mt-1 h-0 w-0 border-x-8 border-t-8 border-x-transparent border-t-brand-500" />
              )}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab + '-' + page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {pageItems.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-brand-200 hover:bg-brand-50">
                <div className="relative">
                  <Image src={p.cover} alt={p.title} width={640} height={420} className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
                  {p.raised && p.goal && (
                    <div className="absolute left-4 -bottom-6 right-4">
                      <div className="flex items-center gap-3 rounded-full bg-white/95 px-4 py-2 ring-1 ring-brand-200 shadow-md">
                        <div className="h-2 flex-1 rounded-full bg-neutral-200">
                          <div className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400" style={{ width: '70%' }} />
                        </div>
                        <span className="text-xs text-neutral-700 whitespace-nowrap">{p.raised} / {p.goal}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6 pt-10">
                  <p className="text-xs font-medium text-brand-700">#{p.type}</p>
                  <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-neutral-600">{p.summary}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <Link href={`/projects/${p.id}`}>
                      <Button variant="secondary">Learn more</Button>
                    </Link>
                    <span className="text-sm text-neutral-500">50+ supporters</span>
                  </div>
                </div>
                <div className="border-t border-neutral-100 bg-neutral-50 p-4 text-xs text-neutral-600">
                  <div className="flex items-center justify-between">
                    <span>{(p as any).date || ''}</span>
                    <span>{(p as any).location || ''}</span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation + Pagination */}
        {pageCount > 1 && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={prev} aria-label="Previous" className="rounded-full px-3 py-1 text-sm ring-1 ring-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50" disabled={page === 0}>
              <ArrowLeft size={18} />
            </button>
            {Array.from({ length: pageCount }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)} aria-label={`Go to page ${i + 1}`} className={`h-2.5 w-8 rounded-full transition-all ${i === page ? 'bg-gradient-to-r from-brand-500 to-brand-400' : 'bg-neutral-300 hover:bg-neutral-400'}`} />
            ))}
            <button onClick={next} aria-label="Next" className="rounded-full px-3 py-1 text-sm ring-1 ring-neutral-300 text-neutral-700 hover:bg-neutral-50 disabled:opacity-50" disabled={page === pageCount - 1}>
              <ArrowRight size={18} />
            </button>
          </div>
        )}
    </Section>
  );
}


