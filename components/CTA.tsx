import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import { HeartHandshake, Heart } from 'lucide-react';

export default function CTA2() {
  return (
    <Section size="dense">
      <div className="relative rounded-2xl ring-1 ring-neutral-200 shadow-sm bg-gradient-to-r from-brand-400 to-brand-500">
        <div className="grid items-center gap-6 px-6 py-8 sm:px-10 md:grid-cols-2">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/10 px-3 py-1 text-xs font-medium text-neutral-900 backdrop-blur-sm mb-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-900 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-900"></span>
              </span>
              Join Our Community
            </div>
            <h3 className="font-display text-2xl sm:text-3xl text-neutral-900">
              Ready to make an impact?
            </h3>
            <p className="mt-2 text-sm text-neutral-900">
              Join Inara Foundation and turn compassion into action across
              social welfare, animal care and environmental projects.
            </p>
            <div className="mt-5">
              <Link href="/contact">
                <span className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-sm focus-ring">
                    <Heart size={18} className="mr-2"/> Become a Volunteer
                </span>
              </Link>
              <Link href="/about" className="ml-3">
                <span className="inline-flex items-center rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-brand-900 ring-1 ring-black/10 hover:bg-white">
                <HeartHandshake size={18} className="mr-2"/> Partner with Us
                </span>
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Oversized illustration that bleeds outside the card */}
            {/* <div className="pointer-events-none absolute bottom-[-6px] right-[-18%] h-80 w-[600px] sm:h-96 sm:w-[760px] lg:right-[-28%] lg:h-[440px] lg:w-[900px]"> */}
            <div className="pointer-events-none absolute w-[100%] h-[400px] top-[-150px]">
              <Image
                src="/volunteers.png"
                alt="Volunteers"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
            {/* Spacer keeps card height stable */}
            <div className="h-40 sm:h-48 md:h-56" />
          </div>
        </div>
      </div>
    </Section>
  );
}
