"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site";

const sectionIds = ["hero", "cost", "impact", "waste", "upcycling", "action"];

// CURATED IMAGE STRATEGY - Documentary style, museum quality
// Each image serves the narrative and creates emotional impact
const IMAGES = {
  // Hero: Cinematic textile waste - sets the tone
  hero: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&h=900&fit=crop&q=85",
  
  // Cost/Production Waste: Shows the SCALE of discarded textiles
  productionWaste: "https://images.unsplash.com/photo-1553882900-f2b06423ff66?w=800&h=600&fit=crop&q=85",
  consumerDisposal: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop&q=85",
  
  // Impact: Environmental consequences - water pollution
  waterPollution: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=800&fit=crop&q=85",
  
  // Waste: Landfill crisis - cinematic, overwhelming scale
  landfill: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600&h=800&fit=crop&q=85",
  
  // Upcycling: Hope and alternatives - handmade craftsmanship
  repair: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=500&fit=crop&q=85",
  redesign: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=500&fit=crop&q=85",
  donation: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=500&fit=crop&q=85",
  education: "https://images.unsplash.com/photo-1543269865-cbdf26405b4f?w=600&h=500&fit=crop&q=85"
};

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
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

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

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <main id="main-content" className="fashion-exhibit relative min-h-screen overflow-x-clip bg-[#1a1410] text-[#e8dfd2]">
      <div aria-hidden className="fashion-grain" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(26,20,16,0.4)] via-transparent to-[rgba(26,20,16,0.6)]" />

      {/* ========== HERO: ENTRANCE ========== */}
      {/* Single cinematic hero image - sets emotional tone for entire experience */}
      <section id="hero" className="relative flex min-h-[100svh] items-center px-4 overflow-hidden">
        {/* Hero Image with Parallax - Documentary style textile waste imagery */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: heroOverlay }}
        >
          <div className="relative w-full h-full">
            {!imageErrors.hero ? (
              <img
                src={IMAGES.hero}
                alt="Documentary photography of textile waste and fast fashion impact"
                className="w-full h-full object-cover"
                onError={() => handleImageError("hero")}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#1a1410] via-[#2d2622] to-[#0f0c0a]" />
            )}
            {/* Layered overlays for emotional depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,20,16,0.2)] via-[rgba(26,20,16,0.5)] to-[rgba(26,20,16,0.8)]" />
            <div className="absolute inset-0 opacity-[0.02] mix-blend-multiply" aria-hidden style={{
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
            }} />
          </div>
        </motion.div>

        {/* Hero Text - Centered, bold, emotional */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 md:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="exhibit-label mb-6">Environmental Exhibit</p>
            <h1 className="exhibit-headline mb-6">
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

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <p className="text-xs uppercase tracking-wider text-[#8b7d6b] mb-3">Scroll to explore</p>
          <svg className="h-5 w-5 text-[#8b7d6b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ========== SECTION 1: THE HIDDEN COST ========== */}
      {/* Establishes the SCALE of waste - 2-column image gallery showing production & consumer waste */}
      <section id="cost" className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="exhibit-label mb-6">Room One · The Hidden Cost</p>
            <h2 className="exhibit-heading mb-8">
              The Hidden Cost of Fast Fashion
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8] mb-4">
              One t-shirt takes 2,700 liters of water to produce. One pair of jeans uses 7,000+ liters. The dyes and chemicals poison rivers. Labor is exploited.
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8]">
              Eighty-five percent of textiles end up in landfills every year. One garbage truck full of clothes is burned or dumped every single second.
            </p>
          </motion.div>

          {/* Image Gallery - Documentary photography of waste scale */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Production Waste Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="relative w-full h-80 bg-gradient-to-br from-[#3a3228] to-[#1a1410] overflow-hidden rounded-lg border border-[#6b6057]/40 mb-4">
                {!imageErrors.productionWaste ? (
                  <img
                    src={IMAGES.productionWaste}
                    alt="Factory textile waste and overproduction"
                    className="w-full h-full object-cover"
                    onError={() => handleImageError("productionWaste")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#3a3228] to-[#1a1410]" />
                )}
                {/* Dark overlay to protect text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.7)] to-transparent" />
              </div>
              <h3 className="text-lg font-medium text-[#d4c7b8] mb-2">Production Waste</h3>
              <p className="text-sm text-[#a89d8f]">Billions of textiles discarded during manufacturing processes</p>
            </motion.div>

            {/* Consumer Disposal Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col"
            >
              <div className="relative w-full h-80 bg-gradient-to-br from-[#3a3228] to-[#1a1410] overflow-hidden rounded-lg border border-[#6b6057]/40 mb-4">
                {!imageErrors.consumerDisposal ? (
                  <img
                    src={IMAGES.consumerDisposal}
                    alt="Consumer clothing waste in landfills"
                    className="w-full h-full object-cover"
                    onError={() => handleImageError("consumerDisposal")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#3a3228] to-[#1a1410]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.7)] to-transparent" />
              </div>
              <h3 className="text-lg font-medium text-[#d4c7b8] mb-2">Consumer Disposal</h3>
              <p className="text-sm text-[#a89d8f]">85% of textiles end up in landfills every single year</p>
            </motion.div>
          </div>

          {/* Stats - Reinforces the impact with hard numbers */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: "85%", label: "Textiles to landfill annually" },
              { stat: "2,700L", label: "Water per cotton t-shirt" },
              { stat: "10 yrs", label: "Average time to decompose" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-[#6b6057]/40 rounded-lg p-6 bg-[#1a1410]/30 backdrop-blur-sm"
              >
                <p className="text-4xl font-light text-[#d4c7b8] mb-2">{item.stat}</p>
                <p className="text-sm text-[#8b7d6b] leading-relaxed">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: ENVIRONMENTAL IMPACT ========== */}
      {/* Shows the CONSEQUENCES - water pollution, microplastics, carbon */}
      <section id="impact" className="relative px-0 py-0 bg-[#15100d]/40">
        <div className="flex flex-col md:flex-row min-h-screen md:min-h-auto">
          {/* Full-height cinematic pollution image on left */}
          <div className="md:w-1/2 relative min-h-96 md:min-h-screen flex items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#3a3228] to-[#1a1410]">
              {!imageErrors.waterPollution ? (
                <img
                  src={IMAGES.waterPollution}
                  alt="Environmental water pollution from textile manufacturing"
                  className="w-full h-full object-cover"
                  onError={() => handleImageError("waterPollution")}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#3a3228] to-[#1a1410]" />
              )}
              {/* Dark vignette to focus attention */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,20,16,0.4)] to-transparent" />
            </div>
          </div>

          {/* Content on right - museum exhibit style */}
          <div className="md:w-1/2 flex items-center px-4 py-16 sm:px-6 md:px-10 lg:px-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <p className="exhibit-label mb-6">Room Two · The Impact</p>
              <h2 className="exhibit-heading mb-8">
                Water, Soil, and Air Poisoned
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Water Pollution</h3>
                  <p className="text-sm leading-relaxed text-[#a89d8f]">
                    Textile dyeing is the second-largest water polluter globally. Heavy metals and toxic chemicals contaminate rivers, making water undrinkable for entire communities downstream.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Microplastics</h3>
                  <p className="text-sm leading-relaxed text-[#a89d8f]">
                    Synthetic fabrics shed microplastics with every wash. These particles accumulate in soil, oceans, and eventually in our bodies through the food chain.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#d4c7b8] mb-3">Carbon Emissions</h3>
                  <p className="text-sm leading-relaxed text-[#a89d8f]">
                    Fashion accounts for 10% of global carbon emissions. Rapid production cycles and global logistics multiply environmental impact exponentially.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: THE LANDFILL CRISIS ========== */}
      {/* Full-screen cinematic image with overlay text - makes viewer FEEL the weight of waste */}
      <section id="waste" className="relative min-h-screen flex items-center px-4 py-24 sm:px-6 md:px-10 lg:px-16 overflow-hidden">
        {/* Fullscreen cinematic landfill image */}
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full bg-gradient-to-br from-[#3a3228] to-[#1a1410]">
            {!imageErrors.landfill ? (
              <img
                src={IMAGES.landfill}
                alt="Massive landfill filled with discarded textiles and fashion waste"
                className="w-full h-full object-cover"
                onError={() => handleImageError("landfill")}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#3a3228] to-[#1a1410]" />
            )}
            {/* Heavy overlay to make text readable - creates emotional weight */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,20,16,0.8)] via-[rgba(26,20,16,0.6)] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(26,20,16,0.7)]" />
          </div>
        </div>

        {/* Centered text overlay on powerful image */}
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="exhibit-label mb-6">Room Three · The Crisis</p>
            <h2 className="exhibit-headline mb-8">
              The Landfill Crisis
            </h2>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-[#e8dfd2]">
                Global clothing production doubled between 2000 and 2014. Today, the average consumer discards 81 pounds of clothing every year.
              </p>
              <p className="text-base leading-relaxed text-[#cfc8b8]">
                In developing countries, donations of "cheap fashion" from wealthy nations have devastated local textile industries, creating environmental dumping grounds and exploitative labor economies.
              </p>
              <p className="text-sm text-[#a89d8f] italic">
                Fashion is now the world's largest employer of textile waste.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== SECTION 4: UPCYCLING SOLUTIONS ========== */}
      {/* HOPE AND ACTION - shows alternatives with documentary-style images of handmade craftsmanship */}
      <section id="upcycling" className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16 bg-[#15100d]/40">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="exhibit-label mb-6">Room Four · The Solution</p>
            <h2 className="exhibit-heading mb-8">
              Upcycling: Reclaiming Value
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#cfc8b8]">
              Upcycling transforms discarded garments into new pieces of equal or greater value. Instead of disposal, restoration. Instead of pollution, creation.
            </p>
          </motion.div>

          {/* 4-Column Solution Grid - Each with documentary image + hopeful narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Repair & Mend",
                desc: "Extend the life of beloved pieces through thoughtful repair. Every mended garment is waste prevented.",
                image: IMAGES.repair,
                key: "repair"
              },
              {
                title: "Redesign & Reimagine",
                desc: "Transform old textiles into new designs. What was discarded becomes art and purpose.",
                image: IMAGES.redesign,
                key: "redesign"
              },
              {
                title: "Donate & Share",
                desc: "Give clothing a second life. Communities thrive when consumption becomes circular.",
                image: IMAGES.donation,
                key: "donation"
              },
              {
                title: "Educate & Inspire",
                desc: "Share the story of sustainable fashion. Change begins with awareness and individual action.",
                image: IMAGES.education,
                key: "education"
              }
            ].map((item, i) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col"
              >
                {/* Image Container */}
                <div className="relative w-full h-64 bg-gradient-to-br from-[#3a3228] to-[#1a1410] overflow-hidden rounded-lg border border-[#6b6057]/40 mb-4">
                  {!imageErrors[item.key] ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(item.key)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#3a3228] to-[#1a1410]" />
                  )}
                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.4)] to-transparent" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg font-medium text-[#d4c7b8] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#a89d8f] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: CALL TO ACTION ========== */}
      {/* Final emotional appeal - no image, just text and action */}
      <section id="action" className="relative px-4 py-24 sm:px-6 md:px-10 lg:px-16 border-t border-[#6b6057]/20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="exhibit-heading mb-6">
              Your Next Choice Matters
            </h2>
            <p className="text-base leading-relaxed text-[#cfc8b8] mb-8">
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
              <button
                type="button"
                onClick={() => scrollToSection("cost")}
                className="inline-flex items-center justify-center border border-[#6b6057] px-6 py-3 text-sm font-medium text-[#b8b0a0] transition hover:bg-white/5"
              >
                Explore Again
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
