import { ArtifactGallery } from "@/components/ArtifactGallery";
import { CommunityImpact } from "@/components/CommunityImpact";
import { CostShift } from "@/components/CostShift";
import { HeroEntry } from "@/components/HeroEntry";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionFrame } from "@/components/SectionFrame";
import { WorkshopAction } from "@/components/WorkshopAction";
import { routeCards, siteConfig } from "@/lib/site";

export function HomeShell() {
  return (
    <main id="main-content" className="museum-shell min-h-screen px-4 py-6 md:px-8 md:py-9">
      <div className="relative z-10 mx-auto max-w-7xl space-y-9 md:space-y-11">
        <RevealOnScroll>
          <section className="artifact-card relative overflow-hidden bg-mist p-5 md:p-7">
            <div aria-hidden className="absolute -left-6 -top-6 h-20 w-20 border-2 border-ash/25 bg-ochre/20" />
            <div aria-hidden className="absolute -bottom-10 right-6 h-24 w-24 rounded-full border border-ash/25" />
            <div className="relative grid gap-5 md:gap-6 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="section-label">{siteConfig.name} Foundation</p>
                <h1 className="display-type mt-3 max-w-4xl text-[2.1rem] uppercase leading-[0.88] tracking-[-0.01em] text-ash md:mt-4 md:text-[3.55rem]">
                  Story-led digital museum route
                </h1>
                <p className="mt-3 max-w-3xl text-[1rem] leading-7 text-ash/80 md:mt-4 md:text-[1.08rem] md:leading-8">
                  {siteConfig.description}
                </p>
              </div>
              <div className="grid gap-3" aria-label="Foundation directions">
                {routeCards.map((card) => (
                  <article key={card.title} className="border-2 border-ash/95 bg-background/95 p-4">
                    <p className="display-type text-xs uppercase tracking-[0.16em] text-clay">In view</p>
                    <h2 className="display-type mt-2 text-xl uppercase leading-tight text-ash md:text-2xl">{card.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-ash/80">{card.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll delay={100}>
          <HeroEntry />
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame id="cost" eyebrow="Room Two" title="Resource Cost">
            <CostShift />
          </SectionFrame>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame id="gallery" eyebrow="Room Three" title="Artifact Gallery">
            <ArtifactGallery />
          </SectionFrame>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame id="impact" eyebrow="Room Four" title="Community Proof">
            <CommunityImpact />
          </SectionFrame>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame id="workshop" eyebrow="Room Five" title="Workshop">
            <WorkshopAction />
          </SectionFrame>
        </RevealOnScroll>
      </div>
    </main>
  );
}