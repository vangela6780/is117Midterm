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
    <main id="main-content" className="museum-shell min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
      <div className="relative z-10 mx-auto max-w-7xl space-y-8 md:space-y-10 lg:space-y-12">
        <RevealOnScroll>
          <section className="fashion-masthead relative p-4 sm:p-5 md:p-6 lg:p-7">
            <div aria-hidden className="absolute -left-6 -top-6 hidden h-24 w-24 rotate-12 border border-mist/20 bg-rust/20 sm:block" />
            <div aria-hidden className="absolute bottom-6 right-6 hidden h-20 w-20 rounded-full border border-mist/15 xl:block" />
            <div className="relative grid gap-5 md:gap-6 xl:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="museum-kicker text-mist/80">{siteConfig.name} Exhibition</p>
                <h1 className="museum-title mt-3 max-w-4xl text-[clamp(2rem,6vw,3.65rem)] text-mist md:mt-4">
                  Story-led digital museum route
                </h1>
                <p className="mt-3 max-w-3xl text-[0.98rem] leading-7 text-mist/78 md:mt-4 md:text-[1.06rem] md:leading-8">
                  {siteConfig.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-[0.76rem] uppercase tracking-[0.18em] text-mist/62">
                  <span>Avant-Garde / Rebel Spirit</span>
                  <span>Haute Couture Discipline</span>
                  <span>Material Histories</span>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1" aria-label="Foundation directions">
                {routeCards.map((card) => (
                  <article key={card.title} className="fashion-card p-4">
                    <p className="museum-kicker text-mist/65">In view</p>
                    <h2 className="museum-title mt-2 text-[1.24rem] leading-tight text-mist md:text-[1.5rem]">{card.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-mist/72">{card.description}</p>
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