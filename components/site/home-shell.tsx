"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site";

const sectionIds = ["hero", "cost", "impact", "waste", "upcycling", "action"];

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

function nextSectionFromViewport() {
  const marker = window.scrollY + window.innerHeight * 0.45;
  const offsets = sectionIds
    .map((id) => {
      const element = document.getElementById(id);
      return {
        id,
        top: element ? element.offsetTop : Number.POSITIVE_INFINITY
      };
    })
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
  const heroOverlay = useTransform(scrollYProgress, [0, 0.3], [0, reduceMotion ? 0 : -120]);

  useEffect(() => {
    const onKeydown = (event: KeyboardEvent) => {
      if (event.code !== "Space") {
        return;
      }

      const target = event.target as HTMLElement | null;
      const isTypingContext =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.tagName === "BUTTON" ||
        target?.isContentEditable;

      if (isTypingContext) {
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
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(26,20,16,0.4)] via-transparent to-[rgba(26,20,16,0.6)]" />

      {/* HERO: The Entrance Exhibit */}
      <section id="hero" className="relative flex min-h-[100svh] items-center px-4 py-16 sm:px-6 md:px-10 lg:px-16">
        <div aria-hidden className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="exhibit-label mb-8">Environmental Exhibit</p>
            <h1 className="exhibit-headline mb-6 text-[clamp(2.2rem,5.5vw,3.8rem)] leading-[1.15]">
              Every shirt has a cost.
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-[#cfc8b8] sm:text-lg">
              Fast fashion doesn't disappear. It transforms—polluting water systems, poisoning soil, creating mountains of textile waste. This is the story of what happens after the closet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToSection("cost")}
              className="inline-flex items-center justify-center border border-[#8b7d6b] px-6 py-3 text-sm font-medium transition hover:bg-[#8b7d6b]/15"
            >
              Begin The Exhibit
            </button>
            <Link
              href="/hero"
              className="inline-flex items-center justify-center border border-[#6b6057] px-6 py-3 text-sm font-medium text-[#b8b0a0] transition hover:bg-white/5"
            >
              Original Exhibition
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <p className="text-xs uppercase tracking-wider text-[#8b7d6b] mb-3">Scroll to explore</p>
          <svg className="h-5 w-5 text-[#8b7d6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* SECTION 1: The Hidden Cost */}
      <section id="cost" className="relative px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="exhibit-label mb-6">Room One · Cost</p>
            <h2 className="exhibit-heading mb-8 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.2]">
              The Hidden Cost of Fast Fashion
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8] mb-6">
              One t-shirt takes 2,700 liters of water to produce. One pair of jeans uses 7,000+ liters. The dyes and chemicals used in production poison rivers that millions depend on. Labor is exploited. Communities are destroyed.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8]">
              And then? Eighty-five percent of all textiles end up in landfills every year. That's one garbage truck full of clothes burned or dumped every single second.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { stat: "85%", label: "Textiles to landfill annually" },
              { stat: "2,700L", label: "Water per cotton t-shirt" },
              { stat: "10 years", label: "Average time to decompose" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-[#6b6057]/40 rounded-lg p-6 bg-[#1a1410]/30"
              >
                <p className="text-3xl font-light text-[#d4c7b8] mb-2">{item.stat}</p>
                <p className="text-sm text-[#8b7d6b]">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Environmental Impact */}
      <section id="impact" className="relative px-4 py-20 sm:px-6 md:px-10 lg:px-16 bg-[#15100d]/40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="exhibit-label mb-6">Room Two · Impact</p>
            <h2 className="exhibit-heading mb-8 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.2]">
              Water, Soil, and Air Poisoned
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Water Pollution</h3>
                <p className="text-sm leading-relaxed text-[#a89d8f]">
                  Textile dyeing is the second-largest polluter of water globally. Heavy metals and toxic chemicals contaminate rivers, making water undrinkable for communities downstream.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Microplastics</h3>
                <p className="text-sm leading-relaxed text-[#a89d8f]">
                  Synthetic fabrics shed microplastics with every wash. These particles end up in soil and oceans, accumulating in the food chain and eventually in our bodies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Carbon Footprint</h3>
                <p className="text-sm leading-relaxed text-[#a89d8f]">
                  Fashion accounts for 10% of global carbon emissions. Fast fashion's rapid production cycles and global logistics multiply this impact exponentially.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Textile Waste</h3>
                <p className="text-sm leading-relaxed text-[#a89d8f]">
                  Massive landfills overflow with textiles that take decades to decompose. Incinerating textiles releases toxic fumes into the atmosphere.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: The Problem of Waste */}
      <section id="waste" className="relative px-4 py-20 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="exhibit-label mb-6">Room Three · Waste</p>
            <h2 className="exhibit-heading mb-8 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.2]">
              The Landfill Crisis
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8] mb-8">
              Global clothing production doubled between 2000 and 2014. Meanwhile, the average consumer throws away 81 pounds of clothing every year. Fashion is now the world's largest employer of textile waste.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8]">
              In developing countries, donated "fast fashion" from wealthy nations has destroyed local textile industries, creating environmental dumping grounds and exploitative labor economies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: Upcycling as Solution */}
      <section id="upcycling" className="relative px-4 py-20 sm:px-6 md:px-10 lg:px-16 bg-[#15100d]/40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="exhibit-label mb-6">Room Four · Solution</p>
            <h2 className="exhibit-heading mb-8 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.2]">
              Upcycling: Reclaiming Materials, Reclaiming Value
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8] mb-8">
              Upcycling transforms damaged or outdated garments into new pieces of equal or greater value. Instead of disposal, we see restoration. Instead of pollution, we see creation.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Repair & Mend",
                  desc: "Extend the life of beloved pieces through thoughtful repair. Every mended garment is waste prevented."
                },
                {
                  title: "Reimagine & Redesign",
                  desc: "Transform old textiles into new designs. What was discard becomes art."
                },
                {
                  title: "Donate & Share",
                  desc: "Give clothing a second life in another person's closet. Communities thrive when consumption becomes circular."
                },
                {
                  title: "Educate & Inspire",
                  desc: "Share the story of sustainable fashion. Change begins with awareness."
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="border border-[#6b6057]/40 rounded-lg p-6 bg-[#1a1410]/30"
                >
                  <h3 className="text-lg font-medium text-[#d4c7b8] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#a89d8f]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: Call to Action */}
      <section id="action" className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16 border-t border-[#6b6057]/20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="exhibit-heading mb-6 text-[clamp(1.8rem,4.5vw,2.8rem)] leading-[1.2]">
              Your Next Choice Matters
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#cfc8b8] mb-8">
              Every purchase is a vote. Every repair is an act of resistance against overproduction. Every conversation spreads awareness. The thread connecting all of us to this revolution is visible—we just need to trace it.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                type="button"
                onClick={() => scrollToSection("hero")}
                className="inline-flex items-center justify-center border border-[#8b7d6b] px-6 py-3 text-sm font-medium transition hover:bg-[#8b7d6b]/15"
              >
                Return To Entrance
              </button>
              <a
                href="#cost"
                className="inline-flex items-center justify-center border border-[#6b6057] px-6 py-3 text-sm font-medium text-[#b8b0a0] transition hover:bg-white/5"
              >
                Explore Again
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}