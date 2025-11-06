"use client";
import { useState, useMemo } from 'react';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '@/data/projects.json';

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  
  const projects = projectsData as any[];
  const filters = ['All', 'Interactive', 'Fundraisers', 'Collaborations'];
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.type === activeFilter);
  }, [activeFilter, projects]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/60">
              <Sparkles size={16} className="text-brand-600" />
              Our Work
            </div>
            <h1 className="mt-6 font-display text-5xl tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
              Projects That <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Create Impact</span>
            </h1>
            <p className="mt-6 text-xl text-neutral-700">
              From interactive workshops to fundraising initiatives, each project turns compassion into meaningful action.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b border-neutral-200 bg-white">
        <div className="container-px mx-auto max-w-[1200px] py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: 'Projects Completed', value: '25+' },
              { label: 'Lives Touched', value: '10,000+' },
              { label: 'Volunteer Hours', value: '3,000+' },
              { label: 'Partner Organizations', value: '10+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl text-brand-600">{stat.value}</div>
                <div className="mt-1 text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid */}
      <Section className="bg-white">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-brand-400 to-brand-300 text-neutral-950 shadow-md ring-1 ring-brand-500/20'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-brand-50 hover:text-brand-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl hover:border-brand-200"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-brand-700 shadow-sm backdrop-blur-sm">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-4 text-xs text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{project.date}</span>
                    </div>
                    {project.participants && (
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{project.participants}</span>
                      </div>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-xl text-neutral-900 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                    {project.summary}
                  </p>

                  <div className="mt-auto pt-4 space-y-3">
                    {project.location && (
                      <div className="flex items-center gap-1 text-xs text-neutral-500">
                        <MapPin size={14} />
                        <span className="line-clamp-1">{project.location}</span>
                      </div>
                    )}

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700 hover:gap-3"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 to-brand-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-neutral-600">No projects found in this category.</p>
          </div>
        )}
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" size="dense">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 p-8 sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">
              Want to be part of the change?
            </h2>
            <p className="mt-3 text-neutral-900">
              Join us as a volunteer and help create lasting impact in our community.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800">
                  <Users size={16} />
                  Become a Volunteer
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}


