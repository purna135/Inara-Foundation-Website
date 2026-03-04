"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

      <div className="container-px relative mx-auto max-w-[600px] text-center py-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-600 shadow-sm ring-1 ring-red-200/60 mb-6">
          <AlertTriangle size={16} />
          Something Went Wrong
        </div>

        <h1 className="font-display text-4xl tracking-tight text-neutral-900 sm:text-5xl">
          Oops, an error occurred
        </h1>

        <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
          We're sorry for the inconvenience. Please try again, or head back to
          the homepage.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl focus-ring"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
          <Link href="/">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 transition hover:bg-neutral-50 hover:text-brand-700">
              <Home size={16} />
              Back to Home
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
