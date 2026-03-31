const stats = [
  { label: "Desert dumping grounds", value: "39,000+" },
  { label: "Garments imported yearly into Chile's free zone", value: "Millions" },
  { label: "Creative prompt", value: "Reclaim instead of replace" }
];

export function HeroEntry() {
  return (
    <section className="grid gap-7 border-2 border-ash bg-mist p-5 shadow-museum md:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
      <div className="space-y-5 md:space-y-6">
        <span className="section-label">The Entry / The Shock</span>
        <div className="space-y-3 md:space-y-4">
          <p className="display-type text-sm uppercase tracking-[0.25em] text-clay">
            Thread & Trace: The Upcycling Revolution
          </p>
          <h1 className="display-type text-[2.35rem] font-semibold uppercase leading-[0.9] text-ash md:text-[4.2rem]">
            Waste becomes visible before it becomes valuable.
          </h1>
          <p className="max-w-2xl text-[1.02rem] leading-7 text-ash/80 md:text-lg md:leading-8">
            Atacama's garment graveyard is the opening room of this digital museum. The point is not guilt.
            The point is clarity: once waste is seen, creativity has a material to reclaim.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-2 border-ash bg-background p-4">
              <p className="display-type text-2xl font-semibold uppercase text-rust">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-ash/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div className="desert-panel relative min-h-[340px] border-2 border-ash p-5 text-mist">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative flex h-full flex-col justify-between">
            <div className="flex items-start justify-between">
              <p className="display-type text-2xl uppercase leading-tight">The Atacama Graveyard</p>
              <p aria-hidden="true" className="text-[0.75rem] uppercase tracking-[0.18em] text-mist/55">−24.5° / −68.8°</p>
            </div>
            <div>
              <p className="max-w-sm text-base leading-7 text-mist/85">
                A harsh landscape of excess — 59,000 tonnes of discarded garments per year, rendered as a high-contrast
                mural panel to set the museum's emotional threshold.
              </p>
              <p aria-hidden="true" className="mt-3 text-[0.75rem] uppercase tracking-[0.16em] text-mist/45">Exhibit record A-001 · Active archive</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_1.3fr]">
          <a
            href="https://www.npr.org/2021/11/08/1053279833/chile-desert-fast-fashion-pollution"
            target="_blank"
            rel="noreferrer"
            aria-label="View Atacama NPR article (opens in new tab)"
            className="border-2 border-ash bg-ochre px-4 py-5 text-sm font-semibold uppercase tracking-[0.14em] text-ash transition hover:bg-sand"
          >
            View Atacama reference
          </a>
          <div className="border-2 border-ash bg-ash px-4 py-5 text-sm uppercase tracking-[0.14em] text-mist">
            Curator cue: frame the problem as a material archive, not disposable clutter.
          </div>
        </div>
      </div>
    </section>
  );
}