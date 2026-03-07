import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { SiteSettings } from "@/app/(site)/layout";

export default function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-px mx-auto max-w-7xl py-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/inara-logo-white.png"
              width={140}
              height={32}
              alt="Inara Foundation"
            />
          </div>
          <p className="text-sm text-neutral-400 max-w-sm">
            A Section 8 non-profit fostering social welfare, animal care, and
            environmental stewardship.
          </p>
          <p className="text-xs text-neutral-500">
            CIN: Section 8 Company • Odisha, India
          </p>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-white">Explore</p>
          <div className="mb-3 h-0.5 w-12 bg-brand-500" />
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link
                href="/about"
                className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
              >
                About
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link
                href="/projects"
                className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
              >
                Projects
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link
                href="/nagpur"
                className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
              >
                Nagpur
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link
                href="/donate"
                className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
              >
                Donate
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">›</span>
              <Link
                href="/contact"
                className="text-neutral-300 underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
              >
                Contact
              </Link>
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
                Email:{" "}
                <a
                  className="underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
                  href={`mailto:${settings.email}`}
                >
                  {settings.email}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-brand-500">•</span>
              <span>
                Phone:{" "}
                <a
                  className="underline decoration-brand-500/40 underline-offset-4 transition hover:text-white hover:decoration-brand-500 focus-ring rounded"
                  href={`tel:${settings.phone.replace(/\s/g, '')}`}
                >
                  {settings.phone}
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold text-white">Follow</p>
          <div className="mb-3 h-0.5 w-12 bg-brand-500" />
          <div className="flex gap-3 text-neutral-400">
            <Link
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition focus-ring"
              href={settings.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={16} />
            </Link>
            <Link
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition focus-ring"
              href={settings.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={16} />
            </Link>
            <Link
              aria-label="LinkedIn"
              className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition focus-ring"
              href={settings.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={16} />
            </Link>
            <Link
              aria-label="X"
              className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/10 hover:ring-brand-500/60 hover:text-brand-500 transition focus-ring"
              href={settings.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </Link>
          </div>
          <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent" />
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Inara Foundation. All rights reserved.
      </div>
    </footer>
  );
}
