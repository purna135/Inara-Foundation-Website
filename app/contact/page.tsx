"use client";
import Section from '@/components/Section';
import Button from '@/components/Button';
import FadeIn from '@/components/FadeIn';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Users, Heart, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Validate form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const subject = formData.get('subject') as string;

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Map form fields to Google Form entry IDs
    const googleFormData = new FormData();
    googleFormData.append('entry.1828006402', name);
    googleFormData.append('entry.555278571', email);
    googleFormData.append('entry.1475863885', subject || '');
    googleFormData.append('entry.204782108', message);

    try {
      // Submit to Google Form
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfiJBblNaGJJI6WA_8bJ5546ne01qRbrnfx4ZHKVhoCp9k6oA/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors', // Google Forms requires no-cors mode
      });

      // Since we're using no-cors mode, we can't read the response
      // but if we reach here without error, the submission likely succeeded
      setStatus('success');
      form.reset();
    } catch (error) {
      if (process.env.NODE_ENV === 'development') console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Unable to send your message. Please check your internet connection and try again, or contact us directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
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
                Let's Make a <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">Difference</span> Together
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-xl text-neutral-700">
                Whether you want to volunteer, partner with us, or learn more about our work—we'd love to hear from you.
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
                <p className="mt-2 text-neutral-600">We're here to answer any questions and help you get started.</p>
              </div>
            </FadeIn>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email Card */}
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
                      href="mailto:inarabysweta@gmail.com"
                      className="mt-1 block text-sm text-brand-600 hover:text-brand-700"
                    >
                      inarabysweta@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Phone Card */}
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
                      href="tel:+917077046262"
                      className="mt-1 block text-sm text-brand-600 hover:text-brand-700"
                    >
                      +91 7077 046 262
                    </a>
                  </div>
                </div>
              </div>
              </FadeIn>

              {/* Location Card */}
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
                      Bhubaneswar, Odisha, India
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
                  href="https://www.instagram.com/inara.npo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="https://www.facebook.com/inaraorganisation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/inara-by-sweta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="https://x.com/inarabysweta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white text-neutral-600 ring-1 ring-neutral-200 transition hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200"
                >
                  <Twitter size={18} />
                </Link>
              </div>
            </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <FadeIn direction="right" delay={0.2}>
              <div id="contact-form" className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm lg:p-10">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-brand-200/30 to-transparent blur-3xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-neutral-900">Send us a message</h2>
                    <p className="text-sm text-neutral-600">We'll get back to you within 24 hours</p>
                  </div>
                </div>

                {status === 'success' ? (
                  <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100 p-8 text-center ring-1 ring-brand-200">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                      <Send size={28} />
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-brand-700">Message Sent!</h3>
                    <p className="mt-2 text-neutral-700">
                      Thanks for reaching out. We've received your message and will get back to you soon.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700 transition"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {/* Error Message */}
                    {status === 'error' && (
                      <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-center">
                        <div className="flex items-center justify-center gap-2 text-red-800">
                          <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">Error</span>
                        </div>
                        <p className="mt-2 text-sm text-red-700">{errorMessage}</p>
                      </div>
                    )}

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                          Your Name <span className="text-brand-600">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Sweta Padma"
                          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-ring transition hover:border-brand-200"
                          suppressHydrationWarning
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                          Email Address <span className="text-brand-600">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="sweta@gmail.com"
                          className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-ring transition hover:border-brand-200"
                          suppressHydrationWarning
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="How can we help you?"
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-ring transition hover:border-brand-200"
                        suppressHydrationWarning
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                        Message <span className="text-brand-600">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                        className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-ring transition hover:border-brand-200 resize-none"
                        suppressHydrationWarning
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-neutral-500">
                        <span className="text-brand-600">*</span> Required fields
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-neutral-900 border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
        </form>
                )}
              </div>
            </div>
            </FadeIn>
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
    </main>
  );
}


