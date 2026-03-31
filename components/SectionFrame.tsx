type SectionFrameProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function SectionFrame({ id, eyebrow, title, children }: SectionFrameProps) {
  return (
    <section id={id} className="relative py-10 md:py-14 lg:py-16">
      <div aria-hidden className="mb-9 h-px bg-gradient-to-r from-mist/70 via-rust/30 to-transparent md:mb-11" />
      <div className="grid gap-6 md:gap-8 xl:grid-cols-[250px_minmax(0,1fr)] xl:gap-11">
        <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-3 w-3 border border-mist/70 bg-rust" />
            <span aria-hidden className="h-px w-24 bg-mist/45" />
          </div>
          <span className="section-label">{eyebrow}</span>
          <h2 className="museum-title text-[clamp(1.75rem,4vw,2.42rem)] leading-[0.95] text-mist">
            {title}
          </h2>
        </div>
        <div className="xl:border-l xl:border-mist/12 xl:pl-7">{children}</div>
      </div>
    </section>
  );
}