"use client";
import Image from 'next/image';
import Link from 'next/link';
import Section from './Section';
import team from '@/data/team.json';
import { Facebook, Instagram, Linkedin, Twitter, Plus, Minus, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type Member = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  socials?: { facebook?: string; instagram?: string; linkedin?: string; x?: string };
};

const ICONS: Record<string, any> = { facebook: Facebook, instagram: Instagram, linkedin: Linkedin, x: Twitter };

export default function Team() {
  const members = (team as any[]) as Member[];
  const [open, setOpen] = useState<Set<string>>(new Set());
  const toggle = (id: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return (
    <Section className="muted-section" size="dense">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-700">Our Best Team</p>
        <h2 className="font-display text-3xl sm:text-4xl">Meet the Hearts Behind the Mission.</h2>
        <p className="mt-2 text-neutral-700">Our team is a passionate group of changemakers dedicated to making a positive impact.</p>
      </div>

      <div className="mt-10 lg:px-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((m) => {
          const isOpen = open.has(m.id);
          return (
            <article key={m.id} className="relative overflow-hidden rounded-md bg-white p-4 ring-1 ring-neutral-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative flex flex-col items-center">
                {/* Square image like reference */}
                <div className="h-60 w-full overflow-hidden rounded-md bg-neutral-50">
                  <Image src={m.avatar} alt={m.name} width={400} height={400} className="h-full w-full object-cover" />
                </div>
                {/* Action rail originating from the + button (bottom-right) */}
                <div className="absolute bottom-[-10px] right-0 flex flex-col items-end gap-2">
                  {/* Social links stack upward from the toggle button */}
                  <div className={`flex flex-col items-end gap-2 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2'}`}>
                    {Object.entries(m.socials || {}).map(([k, href]) => {
                      const Icon = ICONS[k];
                      if (!href || !Icon) return null;
                      return (
                        <Link key={k} href={href} className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-700 ring-1 ring-neutral-200 shadow-sm transition hover:ring-brand-700" aria-label={k}>
                          <Icon size={16} />
                        </Link>
                      );
                    })}
                  </div>
                  {/* Toggle button with rotation and icon swap */}
                  <button aria-label={isOpen ? 'Close' : 'Open'} onClick={() => toggle(m.id)} className={`relative bottom-[-5px] right-[-5px] grid h-8 w-10 place-items-center rounded-full bg-brand-500 text-white shadow-md ring-6 ring-white transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <span className="relative h-4 w-4">
                      <Plus className={`absolute inset-0 m-auto transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`} size={18} />
                      <Minus className={`absolute inset-0 m-auto transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`} size={18} />
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-3 text-left">
                <h3 className="text-md font-semibold leading-tight">{m.name}</h3>
                <p className="mt-1 text-xs text-neutral-600">{m.role}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="#"><span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-5 py-2 text-sm font-semibold text-neutral-950 focus-ring hover:from-brand-300 hover:to-brand-400">See all Core Members <ChevronRight size={14} /></span></Link>
      </div>
    </Section>
  );
}


