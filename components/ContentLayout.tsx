type ContentLayoutProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  deck?: string[];
};

export default function ContentLayout({
  children,
  eyebrow,
  title,
  subtitle,
  deck
}: ContentLayoutProps) {
  return (
    <article className="mx-auto w-full max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
      <header className="border-b border-neutral-200 pb-8">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-normal text-neutral-950 sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-lg leading-8 text-neutral-700 sm:text-xl">{subtitle}</p>
        ) : null}
        {deck?.length ? (
          <div className="mt-6 space-y-1 text-sm leading-7 text-neutral-600">
            {deck.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        ) : null}
      </header>
      <div className="mt-9 max-w-none text-base leading-8 text-neutral-800 [&_a]:text-neutral-950 [&_a]:underline [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:border-b [&_h2]:border-neutral-200 [&_h2]:pb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:leading-8 [&_h2]:text-neutral-950 [&_li]:my-1 [&_li]:leading-7 [&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p]:mt-5 [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </article>
  );
}
