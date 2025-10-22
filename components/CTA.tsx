import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import { HeartHandshake, Heart } from "lucide-react";

export default function CTA() {
  return (
    <Section size="dense" className="lg:pb-8">
      <div className="relative rounded-2xl ring-1 ring-neutral-200 shadow-sm bg-gradient-to-r from-brand-400 to-brand-500">
        <div className="grid items-center gap-6 px-6 py-8 sm:px-10 md:grid-cols-2">
          <div className="max-w-lg order-2 md:order-1">
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
              Join Inara Foundation and turn compassion into action. Together, we're building a kinder, stronger, and more compassionate world.
            </p>
            <div className="mt-5">
              <Link href="/contact">
                <span className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-white shadow-sm focus-ring">
                  <Heart size={18} className="mr-2" /> Become a Volunteer
                </span>
              </Link>
              <Link href="/about" className="ml-3">
                <span className="inline-flex items-center rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-brand-900 ring-1 ring-black/10 hover:bg-white">
                  <HeartHandshake size={18} className="mr-2" /> Partner with Us
                </span>
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            <div className="absolute top-[-120px] left-[-10px] z-10 scale-100 md:scale-120">
              <Image
                src="/images/volunteers.png"
                alt="Volunteers"
                width={500}
                height={400}
                className="object-contain drop-shadow-2xl"
              />
            </div>
            {/* Spacer keeps card height stable */}
            <div className="h-48 sm:h-56 md:h-64" />
          </div>
        </div>
      </div>
    </Section>
  );
}
