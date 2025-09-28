import projects from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';

export function generateStaticParams() {
  return (projects as any[]).map((p) => ({ id: p.id }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = (projects as any[]).find((p) => p.id === id);
  if (!project) {
    return (
      <div className="container-px mx-auto max-w-[1200px] py-16">
        <h1 className="font-display text-3xl">Project not found</h1>
        <p className="mt-4"><Link className="link-brand" href="/">Go back home</Link></p>
      </div>
    );
  }

  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 bg-grid pointer-events-none select-none" aria-hidden />
      <div className="container-px mx-auto max-w-[1200px] py-12 relative z-10">
        <p className="text-sm font-semibold text-brand-700">#{project.type}</p>
        <h1 className="mt-1 font-display text-4xl sm:text-5xl">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-neutral-700">{project.summary}</p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-neutral-200">
            <Image src={project.cover} alt={project.title} width={960} height={640} className="h-auto w-full object-cover" />
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-neutral-500">Date</dt>
                  <dd className="font-medium text-neutral-900">{(project as any).date || '—'}</dd>
                </div>
                <div>
                  <dt className="text-neutral-500">Location</dt>
                  <dd className="font-medium text-neutral-900">{(project as any).location || '—'}</dd>
                </div>
                {'raised' in project && (project as any).raised ? (
                  <div className="col-span-2">
                    <dt className="text-neutral-500">Raised</dt>
                    <dd className="font-medium text-neutral-900">{(project as any).raised} / {(project as any).goal}</dd>
                  </div>
                ) : null}
              </dl>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">About this project</h2>
              <p className="mt-2 text-sm text-neutral-700">{project.summary}</p>
              <div className="mt-4">
                <Link href="/programs" className="link-brand">See related programs →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


