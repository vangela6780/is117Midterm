export function CostShift() {
  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <div className="artifact-card relative overflow-hidden p-5 sm:p-6">
        <div aria-hidden className="mod-disc absolute right-4 top-4 h-10 w-10" />
        <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">The Shift / The Cost</p>
        <p className="impact-number mt-4 text-teal">2,000</p>
        <p className="display-type mt-2 text-2xl uppercase leading-tight text-ash md:text-3xl">gallons of water</p>
        <p className="mt-4 max-w-md text-base leading-7 text-ash/75">
          The average pair of denim jeans requires 2,000 gallons of water from crop to closet — more than a full year's drinking supply for one person. This room reframes fashion as resource infrastructure.
        </p>
      </div>
      <figure
        className="grid gap-4 lg:grid-cols-3"
        role="img"
        aria-label="Bar chart: consumer impact has the highest water footprint, followed by dyeing and finishing, then cotton growth"
      >
        <div className="artifact-card p-5 lg:col-span-2" aria-hidden="true">
          <div className="flex min-h-[140px] items-end gap-3">
            <div className="w-1/3 bg-rust shadow-[0_0_18px_rgba(181,65,46,0.18)]" style={{ height: "28%" }} />
            <div className="w-1/3 bg-ochre shadow-[0_0_18px_rgba(198,139,46,0.18)]" style={{ height: "56%" }} />
            <div className="w-1/3 bg-teal shadow-[0_0_18px_rgba(47,127,120,0.18)]" style={{ height: "100%" }} />
          </div>
          <div className="couture-rule mt-4" />
          <div className="mt-4 grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-ash/70 sm:grid-cols-3 sm:gap-3 sm:text-center">
            <span>Cotton growth</span>
            <span>Dyeing + finishing</span>
            <span>Consumer impact</span>
          </div>
        </div>
        <div className="noir-panel p-5 text-sm leading-7 text-mist/82">
          <p className="display-type text-xl uppercase text-ash">Interpretation</p>
          <p className="mt-3">
            Bauhaus logic keeps the data legible: simple geometry, direct labeling. The eye goes straight from bar height to cost — no decorative clutter between viewer and consequence.
          </p>
        </div>
      </figure>
    </div>
  );
}