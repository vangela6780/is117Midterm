export function CostShift() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="artifact-card p-6">
        <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">The Shift / The Cost</p>
        <p className="impact-number mt-4 text-teal">2,000</p>
        <p className="display-type mt-2 text-2xl uppercase text-ash md:text-3xl">gallons of water</p>
        <p className="mt-4 max-w-md text-base leading-7 text-ash/75">
          One pair of jeans can carry a water footprint measured in the thousands. This room reframes fashion as resource infrastructure, not impulse alone.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="border-2 border-ash bg-background p-5 md:col-span-2">
          <div className="flex h-full items-end gap-3">
            <div className="w-1/3 bg-rust" style={{ height: "28%" }} />
            <div className="w-1/3 bg-ochre" style={{ height: "56%" }} />
            <div className="w-1/3 bg-teal" style={{ height: "100%" }} />
          </div>
          <div className="mt-4 flex justify-between text-xs font-semibold uppercase tracking-[0.14em] text-ash/70">
            <span>Cotton growth</span>
            <span>Dyeing + finishing</span>
            <span>Consumer impact</span>
          </div>
        </div>
        <div className="border-2 border-ash bg-mist p-5 text-sm leading-7 text-ash/80">
          <p className="display-type text-xl uppercase text-ash">Interpretation</p>
          <p className="mt-3">
            Bauhaus logic keeps the data legible: simple geometry, direct labeling, and no decorative clutter between the viewer and the cost.
          </p>
        </div>
      </div>
    </div>
  );
}