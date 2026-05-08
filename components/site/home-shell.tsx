"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/site";

const sectionIds = ["hero", "problem", "shift", "process", "philosophy", "cta"];

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
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, reduceMotion ? 0 : -80]);
  const blueprintY = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : -160]);

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
    <main id="main-content" className="exhibit-shell relative min-h-screen overflow-x-clip bg-[#0c0f13] text-[#f1eee8]">
      <div aria-hidden className="exhibit-noise" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(205,171,126,0.14),transparent_32%),radial-gradient(circle_at_78%_10%,rgba(137,155,176,0.14),transparent_30%),linear-gradient(180deg,rgba(12,15,19,0.72),rgba(12,15,19,1))]" />

      <section id="hero" className="relative flex min-h-[100svh] items-center px-5 pb-14 pt-24 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          aria-hidden
          style={{ y: blueprintY }}
          className="absolute inset-y-[14%] left-1/2 hidden w-[min(760px,76vw)] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-[linear-gradient(130deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01))] shadow-[0_34px_120px_rgba(0,0,0,0.54)] lg:block"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(rgba(201,204,208,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(201,204,208,0.12)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </motion.div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 lg:gap-14">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="museum-plaque"
          >
            Curated Installation · {siteConfig.name}
          </motion.p>

          <motion.div
            style={{ y: heroY }}
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <h1 className="museum-headline text-[clamp(2.8rem,11vw,8.2rem)] leading-[0.9] tracking-[-0.02em]">
              Build software like a museum curator, not a chaos collector.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#ddd8ce] sm:text-lg">
              Enter a cinematic workflow where every decision is framed, documented, reviewed, and traceable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-[1.25fr_1fr_1fr]"
          >
            <article className="museum-panel">
              <p className="text-xs uppercase tracking-[0.17em] text-[#b7b0a1]">Entrance Note</p>
              <p className="mt-3 text-sm leading-7 text-[#ece6da]">
                Press Space to glide to the next exhibit panel and explore the full process narrative section by section.
              </p>
            </article>
            <article className="museum-panel">
              <p className="text-xs uppercase tracking-[0.17em] text-[#b7b0a1]">Workflow Pace</p>
              <p className="mt-3 text-3xl leading-none text-[#f5f2eb]">6 Steps</p>
            </article>
            <article className="museum-panel">
              <p className="text-xs uppercase tracking-[0.17em] text-[#b7b0a1]">Delivery Mode</p>
              <p className="mt-3 text-3xl leading-none text-[#f5f2eb]">Spec First</p>
            </article>
          </motion.div>

          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.14em] text-[#c9c2b4]">
            <button
              type="button"
              onClick={() => scrollToSection("problem")}
              className="inline-flex items-center justify-center border border-[#c9c2b4]/60 px-5 py-3 transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Begin The Tour
            </button>
            <Link
              href="/hero"
              className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-[#e7e1d5] transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Alternate Exhibition View
            </Link>
          </div>
        </div>
      </section>

      <section id="problem" className="relative px-5 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="museum-plaque">Exhibit I · The Problem</p>
            <h2 className="museum-title mt-5 text-[clamp(2rem,7vw,4.5rem)] leading-[0.92]">
              Teams ship fast, then spend months decoding what they built.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="museum-panel"
          >
            <p className="text-sm leading-8 text-[#e2ddd2]">
              Without specs and explicit QA, software work turns into oral history. Priorities drift, AI prompts become vague, and decisions vanish between sessions.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="shift" className="relative px-5 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-white/12 bg-white/[0.03] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-[1px] sm:p-8 lg:p-10">
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="museum-plaque"
          >
            Exhibit II · The Shift
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="museum-title mt-6 max-w-5xl text-[clamp(1.9rem,6vw,4rem)] leading-[0.95]"
          >
            Replace improvised execution with an intentional chain: Spec, Sprint, QA, Implementation.
          </motion.h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Write Spec", "Bound Sprint", "Review QA", "Ship With Evidence"].map((item, index) => (
              <motion.article
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/15 bg-black/25 px-4 py-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#b7b0a1]">Step {index + 1}</p>
                <h3 className="mt-2 text-xl leading-tight text-[#f4f0e7]">{item}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="relative px-5 py-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <p className="museum-plaque">Exhibit III · Interactive Process</p>
            <h2 className="museum-title mt-5 text-[clamp(2rem,6vw,3.8rem)] leading-[0.92]">
              Scroll through the operating model like a guided gallery wall.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              { label: "Planning", detail: "Write explicit scope, constraints, and verification language before any code change." },
              { label: "Pre-Implementation QA", detail: "Pressure-test the artifact for ambiguity, risks, and missing boundaries." },
              { label: "Implementation", detail: "Execute only the bounded sprint and avoid unrelated refactors." },
              { label: "Post-Implementation QA", detail: "Validate behavior, confirm criteria, and record evidence for auditability." }
            ].map((phase, index) => (
              <motion.article
                key={phase.label}
                initial={{ opacity: 0, x: 34 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="museum-panel border-l-2 border-l-[#d3b88f]"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#b7b0a1]">Phase {index + 1}</p>
                <h3 className="mt-2 text-2xl leading-tight text-[#f5f1e8]">{phase.label}</h3>
                <p className="mt-3 text-sm leading-7 text-[#ddd7cb]">{phase.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="philosophy" className="relative px-5 py-20 sm:px-8 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-7xl rounded-[2.2rem] border border-white/15 bg-[linear-gradient(160deg,rgba(17,21,27,0.92),rgba(25,30,38,0.86))] p-7 shadow-[0_36px_90px_rgba(0,0,0,0.48)] sm:p-10"
        >
          <p className="museum-plaque">Exhibit IV · Philosophy</p>
          <h2 className="museum-title mt-5 text-[clamp(2rem,6.4vw,4.3rem)] leading-[0.92]">
            Precision is creative freedom.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#d6d1c6] sm:text-lg">
            Structure is not bureaucracy. It is curation. It gives teams and AI assistants a shared map, so decisions stay intentional, recoverable, and aligned with product purpose.
          </p>
        </motion.div>
      </section>

      <section id="cta" className="relative px-5 pb-24 pt-20 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 border-t border-white/12 pt-12">
          <p className="museum-plaque">Final Gallery · Call To Action</p>
          <h2 className="museum-title max-w-5xl text-[clamp(2rem,7vw,5rem)] leading-[0.9]">
            Turn your next product cycle into an auditable exhibition of decisions.
          </h2>
          <p className="max-w-3xl text-base leading-8 text-[#d9d3c8] sm:text-lg">
            Start with a spec, shape one bounded sprint, and let QA guide every implementation pass.
          </p>
          <div className="flex flex-wrap gap-3 pt-1 text-xs uppercase tracking-[0.15em]">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="inline-flex items-center justify-center border border-[#d4be9c]/80 px-5 py-3 text-[#f2ede2] transition hover:bg-[#d4be9c]/10"
            >
              Return To Entrance
            </button>
            <a
              href="#problem"
              className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-[#ded7c8] transition hover:bg-white/10"
            >
              Replay Story
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}