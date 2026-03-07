export default function BlogLoading() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-50/40">
        <div className="container-px mx-auto max-w-[1200px] py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto h-8 w-28 animate-pulse rounded-full bg-neutral-200" />
            <div className="mx-auto mt-6 h-12 w-64 animate-pulse rounded-xl bg-neutral-200" />
            <div className="mx-auto mt-4 h-5 w-80 animate-pulse rounded-lg bg-neutral-100" />
          </div>
        </div>
      </section>
      <section className="container-px mx-auto max-w-[1200px] py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              <div className="aspect-[16/10] animate-pulse bg-neutral-200" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200" />
                <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-neutral-100" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
