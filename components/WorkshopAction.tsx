import { workshopSteps } from "@/data/exhibits";

export function WorkshopAction() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
      <div className="grid gap-4">
        {workshopSteps.map((step, index) => (
          <div key={step} className="border-2 border-ash bg-background p-5">
            <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">Workshop step {index + 1}</p>
            <p className="mt-3 text-base leading-7 text-ash/84">{step}</p>
          </div>
        ))}
      </div>
      <aside className="artifact-card p-6">
        <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">The Workshop / Visitor Action</p>
        <h3 className="museum-title mt-4 text-[2.14rem] leading-[0.94] text-ash">Start with one stitch.</h3>
        <p className="mt-4 text-base leading-7 text-ash/80">
          Repair, patchwork, reconstruction, and visible mending convert reflection into practice. In this room, each
          intervention is treated as a small act of stewardship.
        </p>
        <div className="mt-6 border-2 border-ash bg-ash p-4 text-sm uppercase tracking-[0.14em] leading-6 text-mist">
          Visitor prompt: bring one worn garment and document one repair decision before replacement.
        </div>
      </aside>
    </div>
  );
}