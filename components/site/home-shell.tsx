import { ArtifactGallery } from "@/components/ArtifactGallery";
import { CommunityImpact } from "@/components/CommunityImpact";
import { CostShift } from "@/components/CostShift";
import { HeroEntry } from "@/components/HeroEntry";
import { SectionFrame } from "@/components/SectionFrame";
import { WorkshopAction } from "@/components/WorkshopAction";
import { routeCards, siteConfig } from "@/lib/site";

export function HomeShell() {
  return (
    <main className="museum-shell min-h-screen px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="artifact-card bg-mist p-5 md:p-7">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="section-label">{siteConfig.name} Foundation</p>
              <h1 className="display-type mt-4 text-4xl uppercase leading-[0.9] text-ash md:text-6xl">
                Story-led digital museum route
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-ash/80 md:text-lg">
                {siteConfig.description}
              </p>
            </div>
            <div className="grid gap-3" aria-label="Foundation directions">
              {routeCards.map((card) => (
                <article key={card.title} className="border-2 border-ash bg-background p-4">
                  <p className="display-type text-xs uppercase tracking-[0.16em] text-clay">In view</p>
                  <h2 className="display-type mt-2 text-2xl uppercase text-ash">{card.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-ash/75">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <HeroEntry />
        <SectionFrame id="cost" eyebrow="Room Two" title="Resource Cost">
          <CostShift />
        </SectionFrame>
        <SectionFrame id="gallery" eyebrow="Room Three" title="Artifact Gallery">
          <ArtifactGallery />
        </SectionFrame>
        <SectionFrame id="impact" eyebrow="Room Four" title="Community Proof">
          <CommunityImpact />
        </SectionFrame>
        <SectionFrame id="workshop" eyebrow="Room Five" title="Workshop">
          <WorkshopAction />
        </SectionFrame>
      </div>
    </main>
  );
}