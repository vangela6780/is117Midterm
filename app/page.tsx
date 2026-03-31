import { ArtifactGallery } from "@/components/ArtifactGallery";
import { CommunityImpact } from "@/components/CommunityImpact";
import { CostShift } from "@/components/CostShift";
import { HeroEntry } from "@/components/HeroEntry";
import { SectionFrame } from "@/components/SectionFrame";
import { WorkshopAction } from "@/components/WorkshopAction";

export default function Home() {
  return (
    <main className="museum-shell min-h-screen px-4 py-6 md:px-8 md:py-8">
      <div className="mx-auto max-w-7xl space-y-10">
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