import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8f9ff] px-5 py-16 text-neutral-950">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4f5bea]">O2V Framework</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-lg leading-8 text-neutral-700">
          This page is not part of the current public O2V Framework site.
        </p>
        <Link className="mt-8 inline-flex text-sm font-semibold text-[#2936c7] underline" href="/en">
          Return to O2V Framework
        </Link>
      </div>
    </main>
  );
}
