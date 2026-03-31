type SectionFrameProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export function SectionFrame({ id, eyebrow, title, children }: SectionFrameProps) {
  return (
    <section id={id} className="border-t-2 border-ash/80 py-14 first:border-t-0 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
        <div className="space-y-4 lg:sticky lg:top-8 lg:self-start">
          <span className="section-label">{eyebrow}</span>
          <h2 className="display-type text-2xl font-semibold uppercase leading-none tracking-tight text-ash md:text-4xl">
            {title}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}