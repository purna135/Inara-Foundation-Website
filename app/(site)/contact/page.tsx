import Section from '@/components/Section';
import FadeIn from '@/components/FadeIn';
import { Mail, Phone, MapPin, Users, Heart, Instagram, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { sanityFetch } from '@/sanity/lib/client';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';

export default async function ContactPage() {
  const settings = (await sanityFetch({ query: SITE_SETTINGS_QUERY, revalidate: 300 })) as {
    email: string; phone: string; location: string;
    instagram: string; facebook: string; linkedin: string; twitter: string;
  };

  return (
    <>
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
        <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

        <div className="container-px relative mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/60">
                <Users size={16} className="text-brand-600" />
                Get in Touch
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="mt-6 font-display text-5xl tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
                Let&apos;s Make a <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Difference</span> Together
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-neutral-700">
                Whether you want to volunteer, partner with us, or learn more about our work—we&apos;d love to hear from you.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Cards + Form Section */}
      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn direction="left">
              <div>
                <h2 className="font-display text-3xl text-neutral-900">Connect with Inara</h2>
                <p className="mt-2 text-neutral-600">We&apos;re here to answer any questions and help you get started.</p>
              </div>
            </FadeIn>

            {/* Contact Cards */}
            <div className="space-y-4">
              <FadeIn direction="left" delay={0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-brand-200">
                  <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                      <Mail size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900">Email Us</h3>
                      <a
                        href={`mailto:${settings.email}`}
                        className="mt-1 block text-sm text-brand-600 hover:text-brand-700"
                      >
                        {settings.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.2}>
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-brand-200">
                  <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                      <Phone size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900">Call Us</h3>
                      <a
                        href={`tel:${settings.phone.replace(/\s/g, '')}`}
                        className="mt-1 block text-sm text-brand-600 hover:text-brand-700"
                      >
                        {settings.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.3}>
                <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:border-brand-200">
                  <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-neutral-900">Location</h3>
                      <p className="mt-1 text-sm text-neutral-600">
                        {settings.location}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Social Media */}
            <FadeIn direction="left" delay={0.4}>
              <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-brand-50/50 to-white p-6 shadow-sm">
                <h3 className="font-semibold text-neutral-900">Follow Our Journey</h3>
                <div className="mt-4 flex gap-3">
                  <Link
                    href={settings.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                  >
                    <Instagram size={18} />
                  </Link>
                  <Link
                    href={settings.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                  >
                    <Facebook size={18} />
                  </Link>
                  <Link
                    href={settings.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                  >
                    <Linkedin size={18} />
                  </Link>
                  <Link
                    href={settings.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" size="dense">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 p-8 sm:p-12">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl text-neutral-900 sm:text-4xl">
              Ready to start your journey?
            </h2>
            <p className="mt-3 text-neutral-900">
              Join our community of passionate volunteers making a real difference.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link href="/about">
                <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-800">
                  <Users size={16} />
                  Learn More About Us
                </span>
              </Link>
              <Link href="/donate">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-neutral-900 shadow-lg ring-1 ring-black/10 transition hover:bg-white">
                  <Heart size={16} />
                  Support Our Work
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
