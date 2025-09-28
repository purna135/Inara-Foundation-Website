"use client";
import Section from '@/components/Section';
import Button from '@/components/Button';
import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  return (
    <main>
      <Section className="muted-section">
        <h1 className="font-display text-4xl">Contact Us</h1>
        <p className="mt-3 max-w-2xl text-neutral-700">We would love to hear from you. Drop a message and we will get back soon.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setStatus('Thanks! We have received your message.');
          }}
          className="mt-8 grid gap-4 sm:max-w-lg"
        >
          <input required placeholder="Your name" className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 focus-ring" />
          <input type="email" required placeholder="Email address" className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 focus-ring" />
          <textarea required rows={5} placeholder="Message" className="rounded-lg border border-neutral-200 bg-white px-4 py-2.5 focus-ring" />
          <div><Button type="submit">Send message</Button></div>
          {status && <p className="text-sm text-brand-600">{status}</p>}
        </form>
      </Section>
    </main>
  );
}


