import { artifacts } from "@/data/exhibits";

export function ArtifactGallery() {
  return (
    <div className="space-y-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="gallery-panel min-h-[280px] border-2 border-ash p-6 text-mist">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="display-type text-sm uppercase tracking-[0.22em] text-mist/80">The Gallery / The Art</p>
              <h3 className="display-type mt-3 text-[2.35rem] uppercase leading-[0.92] tracking-[-0.01em]">Clothing as history</h3>
            </div>
            <p className="max-w-lg text-base leading-7 text-mist/85">
              Inspired by museum provenance labels, each piece carries a visible record of origin, repair, and reuse — the object reads as cultural evidence, not trend.
            </p>
          </div>
        </div>
        <div className="artifact-card flex flex-col justify-between p-6">
          <div>
            <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">Quality reference</p>
            <p className="mt-3 text-base leading-7 text-ash/80">
              The Met serves as the quality benchmark: objects deserve context, craftsmanship, and interpretive care.
            </p>
          </div>
          <a
            href="https://www.metmuseum.org/about-the-met/collection-areas/the-costume-institute"
            target="_blank"
            rel="noreferrer"
            aria-label="View Met Costume Institute (opens in new tab)"
            className="mt-6 border-2 border-ash bg-ash px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 hover:bg-clay"
          >
            View Met inspiration
          </a>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {artifacts.map((artifact) => (
          <article key={artifact.title} className="artifact-card p-5">
            <p className="display-type text-xs uppercase tracking-[0.2em] text-clay">Cat. {artifact.id}</p>
            <p className="display-type mt-1 text-2xl uppercase leading-tight text-ash">{artifact.title}</p>
            <div className="mt-4 space-y-3 text-sm leading-7 text-ash/78">
              <p>
                <span className="font-semibold uppercase tracking-[0.14em] text-clay">Provenance:</span> {artifact.provenance}
              </p>
              <p>
                <span className="font-semibold uppercase tracking-[0.14em] text-clay">Legacy:</span> {artifact.legacy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}