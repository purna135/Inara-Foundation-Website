import events from '@/data/events.json';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return (events as any[]).map((e) => ({ id: e.id }));
}

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = (events as any[]).find((e) => e.id === id);
  if (!event) {
    return (
      <div className="container-px mx-auto max-w-[1200px] py-16">
        <h1 className="font-display text-3xl">Event not found</h1>
        <p className="mt-4"><Link className="link-brand" href="/">Go back home</Link></p>
      </div>
    );
  }

  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-grid pointer-events-none select-none" aria-hidden />
      <div className="container-px mx-auto max-w-[1200px] py-12">
        <p className="text-sm font-semibold text-brand-700">{event.category}</p>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">{event.title}</h1>
        <p className="mt-3 max-w-3xl text-neutral-700">{(event as any).description || ''}</p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-neutral-200">
            <Image src={(event as any).cover} alt={event.title} width={960} height={640} className="h-auto w-full object-cover" />
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-neutral-500">Date</dt>
                  <dd className="font-medium text-neutral-900">{(event as any).date}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Time</dt>
                  <dd className="font-medium text-neutral-900">{(event as any).time}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Location</dt>
                  <dd className="font-medium text-neutral-900">{(event as any).location}</dd>
                </div>
                {'fullAddress' in event && (event as any).fullAddress ? (
                  <div className="col-span-2">
                    <dt className="text-neutral-500">Address</dt>
                    <dd className="font-medium text-neutral-900">{(event as any).fullAddress}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


