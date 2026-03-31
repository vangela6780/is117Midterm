type SectionFrameProps = {
  id: string;
  eyebrow: string;
  title: string;
  guidance: string;
  nextRoom?: {
    id: string;
    label: string;
  };
  children: React.ReactNode;
};

export function SectionFrame({ id, eyebrow, title, guidance, nextRoom, children }: SectionFrameProps) {
  return (
    <section id={id} className="relative py-10 md:py-14 lg:py-16">
      <div aria-hidden className="mb-9 h-px bg-gradient-to-r from-ash/90 via-ash/35 to-transparent md:mb-11" />
      <div className="grid gap-6 md:gap-8 xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-11">
        <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-3 w-3 border-2 border-ash bg-ochre" />
            <span aria-hidden className="h-px w-24 bg-ash/70" />
          </div>
          <span className="section-label">{eyebrow}</span>
          <h2 className="museum-title text-[clamp(1.75rem,4vw,2.42rem)] leading-[0.95] text-ash">
            {title}
          </h2>
          <p className="text-sm leading-7 text-ash/78">{guidance}</p>
        </div>
        <div className="space-y-5 xl:border-l-2 xl:border-ash/20 xl:pl-7">
          {children}
          <div className="flex flex-wrap items-center justify-between gap-3 border-2 border-ash bg-panel p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ash/82">Use this room to complete one clear step before moving on.</p>
            {nextRoom ? (
              <a
                href={`#${nextRoom.id}`}
                className="inline-flex items-center border-2 border-ash bg-ash px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 hover:bg-clay"
              >
                Continue to {nextRoom.label}
              </a>
            ) : (
              <a
                href="#entry"
                className="inline-flex items-center border-2 border-ash bg-background px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ash transition hover:-translate-y-0.5 hover:bg-panel"
              >
                Return to Entry
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}