import type { Metadata } from "next";
import Link from "next/link";
import { HeroEntry } from "@/components/HeroEntry";

export const metadata: Metadata = {
  title: "Hero Entry | Thread & Trace",
  description: "A dedicated exhibition entry page framing the Atacama textile waste narrative before the museum route begins."
};

export default function HeroPage() {
  return (
    <main id="main-content" className="museum-shell min-h-screen px-3 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8 lg:px-8 lg:py-10">
      <div className="relative z-10 mx-auto max-w-7xl space-y-6 md:space-y-8">
        <section className="artifact-card border-2 border-ash bg-mist p-4 sm:p-5 md:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="max-w-3xl">
              <p className="museum-kicker">Dedicated route page</p>
              <h1 className="museum-title mt-3 text-[clamp(2rem,6vw,3.6rem)] text-ash">Hero Entry</h1>
              <p className="museum-copy mt-3 text-[0.98rem] leading-7 md:text-[1.05rem] md:leading-8">
                Start with the exhibition threshold, then continue into the museum route on the homepage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center border-2 border-ash bg-panel px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ash transition hover:-translate-y-0.5 hover:bg-sand"
              >
                Back to Home
              </Link>
              <Link
                href="/#cost"
                className="inline-flex items-center justify-center border-2 border-ash bg-ash px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 hover:bg-clay"
              >
                Enter Room Two
              </Link>
            </div>
          </div>
        </section>

        <HeroEntry costHref="/#cost" />
      </div>
    </main>
  );
}
