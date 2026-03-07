export default function BlogPostLoading() {
  return (
    <>
      <section className="relative h-[45vh] min-h-[360px] animate-pulse bg-neutral-200" />
      <div className="container-px mx-auto max-w-[800px] py-8">
        <div className="h-4 w-24 animate-pulse rounded bg-neutral-200" />
        <div className="mt-8 h-10 w-3/4 animate-pulse rounded-xl bg-neutral-200" />
        <div className="mt-4 flex gap-4">
          <div className="h-4 w-24 animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-32 animate-pulse rounded bg-neutral-100" />
        </div>
        <div className="mt-10 space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-100" />
        </div>
      </div>
    </>
  );
}
