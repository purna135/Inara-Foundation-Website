"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Instagram, Linkedin, Twitter, Facebook, Users } from 'lucide-react';
import Button from './Button';

const links = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Our Work' },
  { href: '/impact', label: 'Impact' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="container-px mx-auto max-w-[1200px] grid h-16 grid-cols-3 items-center">
        {/* Left: Logo only */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Inara Foundation" width={170} height={40} className="h-10 w-auto" />
        </Link>

        {/* Center: Links */}
        <div className="hidden md:flex items-center justify-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="group relative text-sm font-medium text-neutral-700 transition-colors hover:text-brand-700">
              <span>{l.label}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-500 to-brand-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: Social + CTA */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <Link aria-label="Instagram" href="#" className="text-neutral-500 hover:text-brand-700 transition-colors">
            <Instagram size={16} />
          </Link>
          <Link aria-label="LinkedIn" href="#" className="text-neutral-500 hover:text-brand-700 transition-colors">
            <Linkedin size={16} />
          </Link>
          <Link aria-label="X" href="#" className="text-neutral-500 hover:text-brand-700 transition-colors">
            <Twitter size={16} />
          </Link>
          <Link aria-label="Facebook" href="#" className="text-neutral-500 hover:text-brand-700 transition-colors">
            <Facebook size={16} />
          </Link>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-400 px-5 py-2 text-sm font-semibold text-neutral-950 shadow-sm ring-1 ring-black/0 hover:from-brand-400 hover:to-brand-300 focus-ring">
              Join Us
              <Users size={16} />
            </span>
          </Link>
        </div>

        {/* Mobile: burger on right */}
        <button className="md:hidden col-start-3 justify-self-end focus-ring" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/95">
          <div className="container-px mx-auto max-w-[1200px] py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-neutral-700 hover:text-brand-700" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-5 py-2 text-sm font-semibold text-neutral-950 shadow-sm">
                Join Us <Users size={16} />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


