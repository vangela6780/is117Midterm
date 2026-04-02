import Link from "next/link";
import { ArtifactGallery } from "@/components/ArtifactGallery";
import { CommunityImpact } from "@/components/CommunityImpact";
import { CostShift } from "@/components/CostShift";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionFrame } from "@/components/SectionFrame";
import { WorkshopAction } from "@/components/WorkshopAction";
import { siteConfig } from "@/lib/site";

export function HomeShell() {
  return (
    <main id="main-content" className="museum-shell min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
      <div className="relative z-10 mx-auto max-w-7xl space-y-8 md:space-y-10 lg:space-y-12">
        <RevealOnScroll>
          <section className="artifact-card relative overflow-hidden bg-mist p-4 sm:p-5 md:p-6 lg:p-7">
            <div aria-hidden className="absolute -left-6 -top-6 hidden h-20 w-20 border-2 border-ash/25 bg-ochre/20 sm:block" />
            <div aria-hidden className="absolute -bottom-10 right-6 hidden h-24 w-24 rounded-full border border-ash/25 sm:block" />
            <div className="relative max-w-4xl">
              <p className="museum-kicker">{siteConfig.name} Foundation</p>
              <h1 className="museum-title mt-3 max-w-4xl text-[clamp(2rem,6vw,3.65rem)] text-ash md:mt-4">
                The upcycling story starts here
              </h1>
              <p className="museum-copy mt-3 text-[0.98rem] leading-7 md:mt-4 md:text-[1.06rem] md:leading-8">
                {siteConfig.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-3 md:mt-6">
                <Link
                  href="/hero"
                  className="inline-flex items-center justify-center border-2 border-ash bg-ash px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 hover:bg-clay"
                >
                  Open Hero Page
                </Link>
                <a
                  href="#cost"
                  className="inline-flex items-center justify-center border-2 border-ash bg-panel px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ash transition hover:-translate-y-0.5 hover:bg-sand"
                >
                  Skip to Room Two
                </a>
              </div>
            </div>
          </section>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame
            id="cost"
            eyebrow="Room Two"
            title="Resource Cost"
            guidance="Understand the hidden resource burden behind one everyday garment."
            nextRoom={{ id: "gallery", label: "Gallery" }}
          >
            <CostShift />
          </SectionFrame>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame
            id="gallery"
            eyebrow="Room Three"
            title="Artifact Gallery"
            guidance="Study each object as evidence, then open a context plate for deeper interpretation."
            nextRoom={{ id: "impact", label: "Community" }}
          >
            <ArtifactGallery />
          </SectionFrame>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame
            id="impact"
            eyebrow="Room Four"
            title="Community Proof"
            guidance="Connect personal choices with measurable collective outcomes."
            nextRoom={{ id: "workshop", label: "Workshop" }}
          >
            <CommunityImpact />
          </SectionFrame>
        </RevealOnScroll>
        <RevealOnScroll>
          <SectionFrame
            id="workshop"
            eyebrow="Room Five"
            title="Workshop"
            guidance="Leave with one practical repair action you can execute this week."
          >
            <WorkshopAction />
          </SectionFrame>
        </RevealOnScroll>
      </div>
    </main>
  );
}