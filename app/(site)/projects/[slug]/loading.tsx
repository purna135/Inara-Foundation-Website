export default function ProjectDetailLoading() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] animate-pulse bg-neutral-200" />
      <div className="container-px mx-auto max-w-[1100px] py-12">
        <div className="h-4 w-32 animate-pulse rounded bg-neutral-200" />
        <div className="mt-6 h-10 w-3/4 animate-pulse rounded-xl bg-neutral-200" />
        <div className="mt-4 h-5 w-1/2 animate-pulse rounded-lg bg-neutral-100" />
        <div className="mt-10 space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-4/6 animate-pulse rounded bg-neutral-100" />
          <div className="h-4 w-full animate-pulse rounded bg-neutral-100" />
        </div>
      </div>
    </>
  );
}
