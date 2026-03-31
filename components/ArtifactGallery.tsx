import { artifacts } from "@/data/exhibits";

export function ArtifactGallery() {
  return (
    <div className="space-y-7">
      <div className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
        <div
          className="gallery-panel curated-image-panel min-h-[min(56svh,420px)] sm:min-h-[320px] xl:min-h-[420px] border-2 border-ash p-4 sm:p-6 text-mist"
          role="img"
          aria-label="Material study image showing layered textile surfaces used to frame the artifact gallery"
          style={{
            backgroundImage:
              "linear-gradient(160deg, rgba(18, 20, 19, 0.48) 0%, rgba(18, 20, 19, 0.72) 100%), url('https://images.pexels.com/photos/6069554/pexels-photo-6069554.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center 42%",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="relative z-[2] flex h-full flex-col justify-between">
            <div>
              <p className="museum-kicker text-mist/80">The Gallery / The Art</p>
              <h3 className="museum-title mt-3 text-[clamp(2rem,6vw,2.38rem)] leading-[0.92] text-mist">Material as record</h3>
            </div>
            <div>
              <p className="max-w-lg text-[0.98rem] leading-7 text-mist/85 sm:text-base">
                This image operates as a material study: surface, weave, wear, and repair are read here as historical marks,
                preparing the viewer to encounter each object as evidence rather than trend.
              </p>
              <div className="image-meta-bar">
                <p aria-hidden="true" className="image-study-label">Plate II · material study</p>
                <p className="image-credit">Textile surface reference · Source: Pexels</p>
              </div>
            </div>
          </div>
        </div>
        <div className="artifact-card flex flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="display-type text-sm uppercase tracking-[0.22em] text-clay">Curatorial benchmark</p>
            <p className="mt-3 text-base leading-7 text-ash/80">
              The Costume Institute model reinforces a core principle used here: garments must be interpreted as cultural
              objects with provenance, technique, and social context.
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
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {artifacts.map((artifact) => (
          <article key={artifact.title} className="artifact-card p-5">
            <p className="display-type text-xs uppercase tracking-[0.2em] text-clay">Cat. {artifact.id}</p>
            <p className="museum-title mt-1 text-[1.55rem] leading-tight text-ash sm:text-[1.72rem]">{artifact.title}</p>
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