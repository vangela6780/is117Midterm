import { ArtifactGallery } from "@/components/ArtifactGallery";
import { CommunityImpact } from "@/components/CommunityImpact";
import { CostShift } from "@/components/CostShift";
import { ExhibitionNav } from "@/components/ExhibitionNav";
import { HeroEntry } from "@/components/HeroEntry";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionFrame } from "@/components/SectionFrame";
import { WorkshopAction } from "@/components/WorkshopAction";
import { routeCards, siteConfig } from "@/lib/site";

export function HomeShell() {
  return (
    <>
      <ExhibitionNav />
      <main id="main-content" className="museum-shell min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
        <div className="relative z-10 mx-auto max-w-7xl space-y-8 md:space-y-10 lg:space-y-12">
          <RevealOnScroll>
            <section className="artifact-card relative overflow-hidden bg-mist p-4 sm:p-5 md:p-6 lg:p-7">
              <div aria-hidden className="absolute -left-6 -top-6 hidden h-20 w-20 border-2 border-ash/25 bg-ochre/20 sm:block" />
              <div aria-hidden className="absolute -bottom-10 right-6 hidden h-24 w-24 rounded-full border border-ash/25 sm:block" />
              <div className="relative grid gap-5 md:gap-6 xl:grid-cols-[1.2fr_1fr]">
                <div>
                  <p className="museum-kicker">{siteConfig.name} Foundation</p>
                  <h1 className="museum-title mt-3 max-w-4xl text-[clamp(2rem,6vw,3.65rem)] text-ash md:mt-4">
                    Story-led digital museum route
                  </h1>
                  <p className="museum-copy mt-3 text-[0.98rem] leading-7 md:mt-4 md:text-[1.06rem] md:leading-8">
                    {siteConfig.description}
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1" aria-label="Foundation directions">
                  {routeCards.map((card) => (
                    <article key={card.title} className="border-2 border-ash/95 bg-background/95 p-4">
                      <p className="museum-kicker text-clay">In view</p>
                      <h2 className="museum-title mt-2 text-[1.24rem] leading-tight text-ash md:text-[1.5rem]">{card.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-ash/84">{card.description}</p>
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
    </>
  );
}