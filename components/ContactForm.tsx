"use client";
import { useState } from 'react';
import { Send, Heart } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function ContactForm() {
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

    const googleFormData = new FormData();
    googleFormData.append('entry.1828006402', name);
    googleFormData.append('entry.555278571', email);
    googleFormData.append('entry.1475863885', subject || '');
    googleFormData.append('entry.204782108', message);

    try {
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfiJBblNaGJJI6WA_8bJ5546ne01qRbrnfx4ZHKVhoCp9k6oA/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors',
      });

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
              <p className="text-sm text-neutral-600">We&apos;ll get back to you within 24 hours</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand-50 to-brand-100 p-8 text-center ring-1 ring-brand-200">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-500 text-white shadow-lg">
                <Send size={28} />
              </div>
              <h3 className="mt-4 font-display text-2xl text-brand-700">Message Sent!</h3>
              <p className="mt-2 text-neutral-700">
                Thanks for reaching out. We&apos;ve received your message and will get back to you soon.
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
  );
}
