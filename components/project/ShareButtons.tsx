'use client';

import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Link2, CheckCircle, Share2 } from 'lucide-react';

export default function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this amazing project: ${title}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silently fail
    }
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Share2 size={18} className="text-brand-600" />
        <h3 className="text-sm font-semibold text-neutral-900">Share This Project</h3>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition hover:bg-brand-50 hover:text-brand-600"
          aria-label="Share on Facebook"
        >
          <Facebook size={16} />
        </button>
        <button
          onClick={() =>
            window.open(
              `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition hover:bg-brand-50 hover:text-brand-600"
          aria-label="Share on Twitter"
        >
          <Twitter size={16} />
        </button>
        <button
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition hover:bg-brand-50 hover:text-brand-600"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={16} />
        </button>
        <button
          onClick={handleCopy}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-neutral-100 text-sm font-medium text-neutral-600 transition hover:bg-brand-50 hover:text-brand-600"
          aria-label="Copy link"
        >
          {copied ? (
            <>
              <CheckCircle size={14} />
              Copied!
            </>
          ) : (
            <>
              <Link2 size={14} />
              Copy Link
            </>
          )}
        </button>
      </div>
    </div>
  );
}
