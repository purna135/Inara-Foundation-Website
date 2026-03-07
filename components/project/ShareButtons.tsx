'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Link2, CheckCircle, Share2 } from 'lucide-react';

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
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-neutral-100 text-neutral-600 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 hover:scale-110 hover:shadow-sm"
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
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-neutral-100 text-neutral-600 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 hover:scale-110 hover:shadow-sm"
          aria-label="Share on X"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        </button>
        <button
          onClick={() =>
            window.open(
              `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
              '_blank',
              'width=600,height=400'
            )
          }
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-neutral-100 text-neutral-600 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 hover:scale-110 hover:shadow-sm"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={16} />
        </button>
        <button
          onClick={handleCopy}
          className="flex h-9 flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-transparent bg-neutral-100 text-sm font-medium text-neutral-600 transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 hover:shadow-sm"
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
