"use client";

import { useEffect, useState } from "react";

import { artifacts } from "@/data/exhibits";

export function ArtifactGallery() {
  const [activeArtifactId, setActiveArtifactId] = useState<string | null>(null);
  const activeArtifact = artifacts.find((artifact) => artifact.id === activeArtifactId) ?? null;

  useEffect(() => {
    if (!activeArtifact) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveArtifactId(null);
      }
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [activeArtifact]);

  return (
    <>
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
              <button
                type="button"
                onClick={() => setActiveArtifactId(artifact.id)}
                className="mt-5 inline-flex border-2 border-ash bg-panel px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-ash transition hover:-translate-y-0.5 hover:bg-ash hover:text-mist"
              >
                Open context plate
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeArtifact ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-ash/70 px-3 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Artifact context plate for ${activeArtifact.title}`}
          onClick={() => setActiveArtifactId(null)}
        >
          <article
            className="artifact-card w-full max-w-2xl bg-mist p-5 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="display-type text-xs uppercase tracking-[0.2em] text-clay">Cat. {activeArtifact.id}</p>
            <h4 className="museum-title mt-2 text-[clamp(1.7rem,4vw,2.2rem)] text-ash">{activeArtifact.title}</h4>
            <div className="mt-5 space-y-4 text-sm leading-7 text-ash/82 sm:text-base">
              <p>
                <span className="font-semibold uppercase tracking-[0.14em] text-clay">Provenance:</span> {activeArtifact.provenance}
              </p>
              <p>
                <span className="font-semibold uppercase tracking-[0.14em] text-clay">Legacy:</span> {activeArtifact.legacy}
              </p>
              <p>
                <span className="font-semibold uppercase tracking-[0.14em] text-clay">Curator note:</span> This record treats repair
                marks and fabric substitutions as evidence of social and environmental history.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveArtifactId(null)}
              className="mt-6 border-2 border-ash bg-ash px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:bg-clay"
            >
              Close context plate
            </button>
          </article>
        </div>
      ) : null}
    </>
  );
}