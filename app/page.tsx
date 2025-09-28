import Link from 'next/link';
import Section from '@/components/Section';
import Button from '@/components/Button';
import Hero from '@/components/Hero';
import Image from 'next/image';
import { Droplets, Leaf, Hammer, GraduationCap } from 'lucide-react';
import Collage from '@/components/Collage';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Events from '@/components/Events';
import Team from '@/components/Team';

// Content data is separated for easy CMS replacement later
const HIGHLIGHTS: { icon: any; title: string; desc: string }[] = [
  { icon: Droplets, title: 'Food and water', desc: 'Relief drives and support for essential needs.' },
  { icon: Leaf, title: 'Environment', desc: 'Beach cleanups, tree planting, awareness drives.' },
  { icon: Hammer, title: 'Build and repair', desc: 'Community improvements with safety and dignity.' },
  { icon: GraduationCap, title: 'Education', desc: 'Support for learning, materials, and mentorship.' },
];

type WorkImage = { src: string; span?: string };
const WORK_IMAGES: WorkImage[] = [
  { src: '/work-images/Acointier-Inayaat-1.jpeg', span: 'col-span-2 row-span-2' },
  { src: '/work-images/Acointier-Inayaat-2-1.jpeg' },
  { src: '/work-images/acointier-v2-2-1.jpeg' },
  { src: '/work-images/acointier-v2-4-1.jpeg', span: 'row-span-2' },
  { src: '/work-images/Acointier-Inayaat-2-1.jpeg' },
  { src: '/work-images/Acointier-Inayaat-1.jpeg' },
  { src: '/work-images/acointier-v2-2-1.jpeg', span: 'col-span-2' },
  { src: '/work-images/acointier-v2-4-1.jpeg' },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* What we do + collage */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-brand-700">What we do</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Various ways we help</h2>
            <p className="mt-4 max-w-xl text-neutral-700">
              Inara Foundation channels compassion into action across people, animals, and the planet.
              We design hands‑on projects that are practical, inclusive, and sustainable.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="mt-1 grid h-10 w-10 aspect-square place-items-center rounded-lg bg-brand-50 ring-1 ring-brand-200">
                    <Icon className="text-brand-700" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-neutral-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about"><Button>About Inara</Button></Link>
            </div>
          </div>

          <div className="relative -mt-6 sm:-mt-10">
            <Collage images={WORK_IMAGES.map(({ src }) => ({ src }))} />
          </div>
        </div>
      </Section>

      {/* Stats (animated) */}
      <Section className="muted-section" size="dense">
        <Stats />
      </Section>

      {/* Projects */}
      <Projects />

      {/* Upcoming Events */}
      <Events />

      {/* Team */}
      <Team />

      {/* Call to action */}
      <Section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-500/20 to-brand-400/10 rounded-3xl" />
        <div className="surface-card p-10 text-center">
          <h2 className="font-display text-3xl">Join the movement</h2>
          <p className="mt-3 text-neutral-700">Volunteer, donate, or partner with us to create lasting change.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <Link href="/contact"><Button variant="secondary">Volunteer</Button></Link>
            <Link href="/donate"><Button variant="primary">Donate</Button></Link>
          </div>
        </div>
      </Section>
    </main>
  );
}


