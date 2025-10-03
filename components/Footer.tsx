import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-px mx-auto max-w-7xl py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src="/inara-logo-3.png" width={140} height={32} alt="Inara Foundation" />
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">A Section 8 non-profit fostering social welfare, animal care, and environmental stewardship.</p>
          <p className="text-xs text-neutral-500">CIN: Section 8 Company • Odisha, India</p>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-white">Explore</p>
          <div className="mb-3 h-0.5 w-12 bg-brand-500" />
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link href="/about" className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500">About</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link href="/programs" className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500">Programs</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link href="/impact" className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500">Impact</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link href="/contact" className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-white">Contact</p>
          <div className="mb-3 h-0.5 w-12 bg-brand-500" />
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <span className="text-brand-500">•</span>
              <span>
                Email: <a className="underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500" href="mailto:inarabysweta@gmail.com">inarabysweta@gmail.com</a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">•</span>
              <span>
                Phone: <a className="underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500" href="tel:+917077046262">+91 7077 046 262</a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-white">Follow</p>
          <div className="mb-3 h-0.5 w-12 bg-brand-500" />
          <div className="flex gap-3 text-neutral-400">
            <Link aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition" href="#">
              <Instagram size={16} />
            </Link>
            <Link aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition" href="#">
              <Facebook size={16} />
            </Link>
            <Link aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition" href="#">
              <Linkedin size={16} />
            </Link>
            <Link aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition" href="#">
              <Twitter size={16} />
            </Link>
          </div>
          <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Inara Foundation. All rights reserved.</div>
    </footer>
  );
}
