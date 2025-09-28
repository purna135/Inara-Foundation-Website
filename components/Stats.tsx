"use client";
import { motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Users, Layers, HeartHandshake, Calendar } from 'lucide-react';

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: any;
};

function AnimatedNumber({ value, suffix = '', start = 0, duration = 1200 }: { value: number; suffix?: string; start?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(start);
  const containerRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, margin: '-40% 0px' });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(start + (value - start) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, start, duration]);

  return (
    <span ref={containerRef} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats: Stat[] = useMemo(
    () => [
      { label: 'Volunteers', value: 50, suffix: '+', icon: Users },
      { label: 'Projects delivered', value: 25, suffix: '+', icon: Layers },
      { label: 'People & animals reached', value: 5, suffix: 'k+', icon: HeartHandshake },
      { label: 'Since', value: 2020, icon: Calendar },
    ],
    []
  );

  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold text-brand-700">Impact in numbers</p>
        <h2 className="font-display text-3xl sm:text-4xl">Together, we make measurable change</h2>
        <p className="mt-2 text-neutral-700">These figures grow with every volunteer who joins and every project we complete.</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {stats.map(({ label, value, suffix, icon: Icon }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-brand-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 ring-1 ring-brand-200">
                <Icon className="text-brand-700" size={20} />
              </div>
              <div className="text-3xl font-bold text-neutral-900">
                <AnimatedNumber value={value} suffix={suffix} />
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-600">{label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


