type SectionFrameProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function SectionFrame({ id, eyebrow, title, children }: SectionFrameProps) {
  return (
    <section id={id} className="relative py-12 md:py-16">
      <div aria-hidden className="mb-8 h-px bg-gradient-to-r from-ash/85 via-ash/25 to-transparent md:mb-10" />
      <div className="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-3 w-3 border-2 border-ash bg-ochre" />
            <span aria-hidden className="h-px w-20 bg-ash/70" />
          </div>
          <span className="section-label">{eyebrow}</span>
          <h2 className="display-type text-[1.6rem] font-semibold uppercase leading-[0.92] tracking-tight text-ash md:text-[2.25rem]">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}