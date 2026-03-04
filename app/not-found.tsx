import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute -top-28 right-[-20%] h-96 w-96 rounded-full bg-gradient-to-br from-brand-400/25 to-brand-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-brand-300/20 to-transparent blur-3xl" />

      <div className="container-px relative mx-auto max-w-[600px] text-center py-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-200/60 mb-6">
          <Search size={16} className="text-brand-600" />
          Page Not Found
        </div>

        <h1 className="font-display text-7xl tracking-tight text-neutral-900 sm:text-8xl">
          <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-300 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-lg ring-1 ring-brand-500/20 transition-all hover:from-brand-300 hover:to-brand-400 hover:shadow-xl">
              <Home size={16} />
              Back to Home
            </span>
          </Link>
          <Link href="/projects">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 transition hover:bg-neutral-50 hover:text-brand-700">
              <ArrowLeft size={16} className="rotate-180" />
              Explore Projects
            </span>
          </Link>
        </div>

        <div className="mt-12 rounded-2xl bg-white/80 p-6 ring-1 ring-neutral-200/60 shadow-sm">
          <p className="text-sm text-neutral-500">
            Looking for something specific? Try visiting our{" "}
            <Link href="/about" className="font-medium text-brand-600 hover:text-brand-700 transition">
              About
            </Link>
            ,{" "}
            <Link href="/projects" className="font-medium text-brand-600 hover:text-brand-700 transition">
              Projects
            </Link>
            , or{" "}
            <Link href="/contact" className="font-medium text-brand-600 hover:text-brand-700 transition">
              Contact
            </Link>{" "}
            pages.
          </p>
        </div>
      </div>
    </main>
  );
}
