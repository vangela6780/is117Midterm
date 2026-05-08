"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

const sectionIds = ["hero", "cost", "impact", "overconsumption", "waste", "upcycling", "action"];

const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${repoBasePath}${path}`;

const IMAGES = {
  hero: withBasePath("/images/exhibit/hero.jpg"),
  costFactory: withBasePath("/images/exhibit/cost-factory.jpg"),
  costLandfill: withBasePath("/images/exhibit/cost-landfill.jpg"),
  impact: withBasePath("/images/exhibit/impact-pollution.jpg"),
  overconsumption: withBasePath("/images/exhibit/overconsumption.jpg"),
  waste: withBasePath("/images/exhibit/waste-landfill.jpg"),
  upcycleRepair: withBasePath("/images/exhibit/upcycle-repair.jpg"),
  upcycleRedesign: withBasePath("/images/exhibit/upcycle-redesign.jpg"),
  upcycleDonate: withBasePath("/images/exhibit/upcycle-donate.jpg"),
  upcycleEducate: withBasePath("/images/exhibit/upcycle-educate.jpg")
};

type ExhibitImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes: string;
  className?: string;
  caption?: string;
};

function ExhibitImage({ src, alt, priority = false, sizes, className = "", caption }: ExhibitImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#0f0c0a] ${className}`}>
      {!failed ? (
        <>
          {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#201915] via-[#2b241f] to-[#18110d]" />}
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={`object-cover transition-transform duration-[1600ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
            onError={() => setFailed(true)}
            onLoad={() => setLoaded(true)}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a231e] to-[#17110d]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,12,9,0.72)] via-[rgba(16,12,9,0.18)] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(255,255,255,0.08),transparent_48%)]" />
      {caption ? <p className="absolute bottom-3 left-3 z-10 border border-[#6b6057]/50 bg-[rgba(20,14,11,0.7)] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#cfc8b8]">{caption}</p> : null}
    </div>
  );
}

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function nextSectionFromViewport() {
  const marker = window.scrollY + window.innerHeight * 0.45;
  const offsets = sectionIds
    .map((id) => ({ id, top: document.getElementById(id)?.offsetTop ?? Number.POSITIVE_INFINITY }))
    .filter((item) => Number.isFinite(item.top));
  if (!offsets.length) {
    return;
  }
  const currentIndex = offsets.findLastIndex((item) => marker >= item.top);
  const nextIndex = Math.min(currentIndex + 1, offsets.length - 1);
  scrollToSection(offsets[nextIndex].id);
}

export function HomeShell() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroOffset = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -110]);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.code !== "Space") {
        return;
      }
      const target = event.target as HTMLElement | null;
      const typing = target?.matches("input,textarea,select,button") || target?.isContentEditable;
      if (typing) {
        return;
      }
      event.preventDefault();
      nextSectionFromViewport();
    };
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  return (
    <main id="main-content" className="fashion-exhibit relative min-h-screen overflow-x-clip bg-[#1a1410] text-[#e8dfd2]">
      <div aria-hidden className="fashion-grain" />

      <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16">
        <motion.div className="absolute inset-0 -z-10" style={{ y: heroOffset }}>
          <ExhibitImage
            src={IMAGES.hero}
            alt="Cinematic documentary scene of fashion waste and discarded garments"
            priority
            sizes="100vw"
            className="h-full w-full"
            caption="Entry Archive"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(19,13,9,0.22)] via-[rgba(19,13,9,0.5)] to-[rgba(19,13,9,0.86)]" />
        </motion.div>

        <div className="relative z-10 mx-auto w-full max-w-6xl py-20">
          <p className="exhibit-label mb-6">Environmental Exhibit</p>
          <h1 className="exhibit-headline mb-6 max-w-3xl">Every shirt has a cost.</h1>
          <p className="mb-10 max-w-2xl text-[0.95rem] leading-relaxed text-[#d2c8ba] sm:text-base">
            Fast fashion transforms into poisoned water, exhausted workers, and mountains of waste. This exhibit traces what happens after the closet.
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => scrollToSection("cost")} className="inline-flex items-center justify-center border border-[#8b7d6b] px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] transition hover:bg-[#8b7d6b]/15">Begin The Exhibit</button>
            <Link href="/hero" className="inline-flex items-center justify-center border border-[#6b6057] px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#b8b0a0] transition hover:bg-white/5">Original Exhibition</Link>
          </div>
        </div>
      </section>

      <section id="cost" className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="exhibit-label mb-6">Room One · Hidden Cost</p>
          <h2 className="exhibit-heading mb-7 max-w-3xl">The Hidden Cost of Fast Fashion</h2>
          <p className="mb-12 max-w-3xl text-[0.95rem] leading-relaxed text-[#cfc8b8] sm:text-base">Water extraction, chemical dyeing, factory overproduction, and disposal all happen before and after we wear clothing. Waste is the business model.</p>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            <article className="group">
              <ExhibitImage src={IMAGES.costFactory} alt="Dense rows of garments representing overproduction" sizes="(max-width: 900px) 100vw, 50vw" className="h-[22rem] rounded-xl border border-[#6b6057]/45" caption="Production Overflow" />
              <h3 className="mt-4 text-lg font-medium text-[#ddd2c2]">Factory Overproduction</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a89d8f]">Industrial output outpaces need, creating constant textile surplus that quickly becomes waste.</p>
            </article>
            <article className="group">
              <ExhibitImage src={IMAGES.costLandfill} alt="Large pile of discarded clothing in landfill context" sizes="(max-width: 900px) 100vw, 50vw" className="h-[22rem] rounded-xl border border-[#6b6057]/45" caption="Post-Consumer Waste" />
              <h3 className="mt-4 text-lg font-medium text-[#ddd2c2]">Garment Landfills</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#a89d8f]">Most discarded garments are burned, buried, or exported to communities least able to absorb the damage.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="impact" className="relative bg-[#15100d]/45 px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <ExhibitImage src={IMAGES.impact} alt="Contaminated water and environmental degradation connected to textile pollution" sizes="(max-width: 900px) 100vw, 55vw" className="h-[24rem] rounded-xl border border-[#6b6057]/45 md:h-[32rem]" caption="Water & Chemical Runoff" />
          <div>
            <p className="exhibit-label mb-6">Room Two · Textile Pollution</p>
            <h2 className="exhibit-heading mb-6">Water, Soil, and Air Poisoned</h2>
            <p className="mb-5 text-[0.95rem] leading-relaxed text-[#cfc8b8] sm:text-base">Dyes and finishing chemicals move from factory floor to river systems. Microfibers pass through waterways into soil, seafood, and our bodies.</p>
            <p className="text-sm leading-relaxed text-[#a89d8f]">Fashion contributes nearly 10% of global emissions while scattering persistent synthetic particles throughout ecosystems.</p>
          </div>
        </div>
      </section>

      <section id="overconsumption" className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div className="md:sticky md:top-24 md:self-start">
            <ExhibitImage src={IMAGES.overconsumption} alt="Packed clothing racks and dense retail inventory representing overconsumption" sizes="(max-width: 900px) 100vw, 48vw" className="h-[24rem] rounded-xl border border-[#6b6057]/45 md:h-[30rem]" caption="Consumption Engine" />
          </div>
          <div>
            <p className="exhibit-label mb-6">Room Three · Overconsumption</p>
            <h2 className="exhibit-heading mb-6">Too Much, Too Fast, Too Disposable</h2>
            <p className="mb-5 text-[0.95rem] leading-relaxed text-[#cfc8b8] sm:text-base">Retail velocity encourages constant buying and immediate discard. The closet becomes a temporary warehouse, not a long-term archive.</p>
            <ul className="space-y-4 text-sm leading-relaxed text-[#a89d8f]">
              <li className="border-l border-[#6b6057]/40 pl-4">Rapid trend cycles normalize replacing wearable garments.</li>
              <li className="border-l border-[#6b6057]/40 pl-4">Low prices hide ecological and labor costs from consumers.</li>
              <li className="border-l border-[#6b6057]/40 pl-4">Excess inventory feeds landfill pipelines and waste exports.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="waste" className="relative min-h-[88vh] overflow-hidden px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10">
          <ExhibitImage src={IMAGES.waste} alt="Wide landscape of textile landfill and environmental damage" sizes="100vw" className="h-full w-full" caption="Global Waste Field" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(20,14,10,0.86)] via-[rgba(20,14,10,0.62)] to-[rgba(20,14,10,0.3)]" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="exhibit-label mb-6">Room Four · Waste at Scale</p>
          <h2 className="exhibit-heading mb-6 max-w-3xl">The Landfill Is the Final Collection</h2>
          <p className="max-w-3xl text-[0.95rem] leading-relaxed text-[#e7dccd] sm:text-base">When global production doubles and product lifespans shrink, disposal sites become the true map of the fashion industry. The environmental burden is displaced, not solved.</p>
        </div>
      </section>

      <section id="upcycling" className="relative bg-[#15100d]/45 px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="exhibit-label mb-6">Room Five · Upcycling & Sustainability</p>
          <h2 className="exhibit-heading mb-6">Repair, Rework, Reuse</h2>
          <p className="mb-12 max-w-3xl text-[0.95rem] leading-relaxed text-[#cfc8b8] sm:text-base">This room introduces alternatives that reduce extraction and waste by extending garment life through care and creativity.</p>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
            {[
              { key: "a", title: "Repair & Mend", body: "Visible mending and repair keep garments in active use.", src: IMAGES.upcycleRepair, caption: "Repair Studio" },
              { key: "b", title: "Reconstruct & Redesign", body: "Cutting and resewing transforms discarded textiles into new pieces.", src: IMAGES.upcycleRedesign, caption: "Reconstruction" },
              { key: "c", title: "Recirculate & Donate", body: "Second-life circulation keeps clothing out of landfill streams.", src: IMAGES.upcycleDonate, caption: "Circular Use" },
              { key: "d", title: "Educate & Advocate", body: "Community skill-sharing scales sustainable habits.", src: IMAGES.upcycleEducate, caption: "Knowledge Transfer" }
            ].map((item) => (
              <article key={item.key} className="rounded-xl border border-[#6b6057]/45 bg-[rgba(22,16,13,0.55)] p-4">
                <ExhibitImage src={item.src} alt={item.title} sizes="(max-width: 900px) 100vw, 50vw" className="h-64 rounded-lg" caption={item.caption} />
                <h3 className="mt-4 text-lg font-medium text-[#ddd2c2]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#a89d8f]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="action" className="relative border-t border-[#6b6057]/25 px-4 py-24 text-center sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="exhibit-heading mb-6">Your Next Choice Matters</h2>
          <p className="mb-8 text-[0.95rem] leading-relaxed text-[#cfc8b8] sm:text-base">Every purchase, repair, and conversation can shift fashion from extraction to stewardship.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => scrollToSection("hero")} className="inline-flex items-center justify-center border border-[#8b7d6b] px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] transition hover:bg-[#8b7d6b]/15">Return To Entrance</button>
            <button type="button" onClick={() => scrollToSection("cost")} className="inline-flex items-center justify-center border border-[#6b6057] px-6 py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#b8b0a0] transition hover:bg-white/5">Explore Again</button>
          </div>
        </div>
      </section>
    </main>
  );
}
