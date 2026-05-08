"use client";

import { type FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";

const sectionIds = ["hero", "cost", "impact", "overconsumption", "waste", "upcycling", "login", "action"];

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

const wasteStats = [
  {
    id: "waste-volume",
    value: 92,
    suffix: "M",
    unit: "tonnes",
    label: "textile waste generated globally each year",
    icon: "landfill" as const
  },
  {
    id: "landfill-share",
    value: 73,
    suffix: "%",
    unit: "of clothing",
    label: "ends up incinerated or in landfill",
    icon: "incineration" as const
  },
  {
    id: "microfiber-shed",
    value: 500,
    suffix: "K",
    unit: "tonnes",
    label: "of microfibers shed into oceans annually",
    icon: "fiber" as const
  },
  {
    id: "decomposition",
    value: 200,
    suffix: "+",
    unit: "years",
    label: "for synthetic fabrics to decompose in soil",
    icon: "globe" as const
  }
];

const microfiberParticles = [
  { left: "8%", top: "20%", delay: 0, duration: 6.2 },
  { left: "28%", top: "66%", delay: 0.8, duration: 7 },
  { left: "45%", top: "35%", delay: 1.2, duration: 5.5 },
  { left: "62%", top: "72%", delay: 0.5, duration: 8.1 },
  { left: "77%", top: "42%", delay: 1.5, duration: 6.7 },
  { left: "91%", top: "28%", delay: 0.2, duration: 7.8 }
];

const wasteStoryPanels = [
  {
    id: "export-economy",
    title: "The Export Economy",
    kicker: "Route 01",
    image: IMAGES.waste,
    caption: "Chile and Ghana receive overflow by design",
    icon: "route" as const,
    notes: [
      "High-income countries ship surplus textiles abroad as secondhand exports.",
      "Receiving regions absorb bales far beyond resale demand, creating new landfill fronts.",
      "Waste is not disappearing. It is being relocated to communities with fewer protections."
    ],
    evidence: "Documented hotspots include the Atacama Desert (Chile) and major resale overflow zones in Ghana."
  },
  {
    id: "incineration-pipeline",
    title: "The Incineration Pipeline",
    kicker: "Route 02",
    image: IMAGES.costFactory,
    caption: "Unsold stock is often burned to preserve brand value",
    icon: "fire" as const,
    notes: [
      "When discounting threatens brand positioning, unsold inventory is sometimes destroyed.",
      "Combustion converts excess garments into atmospheric pollution within hours.",
      "Nearby residents inherit the air burden of a pricing and logistics decision."
    ],
    evidence: "Incineration of synthetic textiles can release dioxins and greenhouse gases."
  },
  {
    id: "microfiber-saturation",
    title: "Microfiber Saturation",
    kicker: "Route 03",
    image: IMAGES.impact,
    caption: "Invisible particles move from laundry to ocean to body",
    icon: "droplet" as const,
    notes: [
      "Every wash of synthetic garments sheds microscopic plastic fibers.",
      "Many particles bypass filtration and persist in waterways and food systems.",
      "Scientists now detect textile-linked microplastics in human tissue."
    ],
    evidence: "Microfibers have been identified in marine sediment, drinking water, blood, and placental samples."
  },
  {
    id: "no-neutral-choice",
    title: "No Neutral Choice",
    kicker: "Route 04",
    image: IMAGES.hero,
    caption: "Less than 1% of textiles are recycled into new garments",
    icon: "hourglass" as const,
    notes: [
      "Most garments are designed for short life and difficult disassembly.",
      "Recycling infrastructure lags far behind production growth.",
      "Buying less and extending use remains the clearest immediate intervention."
    ],
    evidence: "Global fiber-to-fiber textile recycling remains below 1%."
  }
];

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

type CounterProps = {
  value: number;
  suffix: string;
};

function AnimatedCounter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }
    const duration = 1300;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(value * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return <span ref={ref}>{current.toLocaleString()}{suffix}</span>;
}

function StatIcon({ kind }: { kind: "landfill" | "incineration" | "fiber" | "globe" }) {
  const common = "h-5 w-5 text-[#d4c7b5]";
  if (kind === "landfill") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
        <path d="M3 17h18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 17 9 8h6l4 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 8V5h4v3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "incineration") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
        <path d="M12 4c1 2-1 3 0 5 1 1 3 2 3 5a3 3 0 1 1-6 0c0-2 2-3 2-5 0-1-1-2 1-5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 19h14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "fiber") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
        <path d="M4 8c4 0 4 8 8 8s4-8 8-8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16c4 0 4-8 8-8s4 8 8 8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 12h16M12 4c3 3 3 13 0 16M12 4c-3 3-3 13 0 16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StoryIcon({ kind }: { kind: "route" | "fire" | "droplet" | "hourglass" }) {
  const common = "h-4 w-4 text-[#d4c7b5]";
  if (kind === "route") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
        <path d="M4 6h6l3 4h7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 18h8l2-3h6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="6" r="1.5" fill="currentColor" />
        <circle cx="20" cy="18" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "fire") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
        <path d="M12 4c1.2 1.7-.8 3.4 0 5 .9 1.6 3 2.3 3 5a3 3 0 1 1-6 0c0-2.2 2-3.2 2-5 0-1.1-.8-2.3 1-5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  if (kind === "droplet") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
        <path d="M12 4c3 4 5 6.4 5 9a5 5 0 1 1-10 0c0-2.6 2-5 5-9Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={common}>
      <path d="M8 4h8M8 20h8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 4v5c0 2 6 2 6 0V4M15 20v-5c0-2-6-2-6 0v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RouteMapGraphic() {
  return (
    <div className="relative h-44 rounded-lg border border-[#6b6057]/40 bg-[rgba(18,12,10,0.78)] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(167,139,113,0.18),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(138,169,182,0.14),transparent_42%)]" />
      <svg viewBox="0 0 320 150" className="relative z-10 h-full w-full" aria-hidden>
        <path d="M45 35C96 24 112 36 146 58C181 81 208 82 270 58" stroke="#b8aa97" strokeWidth="2" strokeDasharray="5 5" fill="none" />
        <path d="M52 104C109 110 135 101 171 82C208 63 229 63 286 92" stroke="#9fb8c6" strokeWidth="2" strokeDasharray="5 6" fill="none" />
        <circle cx="45" cy="35" r="5" fill="#d6c8b4" />
        <circle cx="270" cy="58" r="5" fill="#d6c8b4" />
        <circle cx="52" cy="104" r="5" fill="#8fb2c4" />
        <circle cx="286" cy="92" r="5" fill="#8fb2c4" />
      </svg>
      <div className="relative z-10 mt-3 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.13em] text-[#9f9488]">
        <span className="rounded-full border border-[#6b6057]/50 px-2 py-1">North Atlantic export routes</span>
        <span className="rounded-full border border-[#6b6057]/50 px-2 py-1">South Pacific overflow routes</span>
      </div>
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
  const [loginMessage, setLoginMessage] = useState("");

  const handleLoginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "").trim();

    if (!email || !password) {
      setLoginMessage("Enter both email and password to continue.");
      return;
    }

    setLoginMessage("Login request captured. Connect this form to your auth backend to activate sign in.");
    event.currentTarget.reset();
  };

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

      <section id="hero" className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        {/* CINEMATIC HERO REDESIGN — museum entrance, not SaaS dashboard */}
        {/* Full-bleed parallax background — textile waste imagery for emotional impact */}
        <motion.div className="absolute inset-0 scale-[1.06]" style={{ y: heroOffset }}>
          <ExhibitImage
            src={IMAGES.waste}
            alt="Mountains of discarded textile waste at an industrial landfill — the hidden destination of fast fashion"
            priority
            sizes="100vw"
            className="h-full w-full"
          />
          {/* Multi-layer atmospheric overlays */}
          <div className="absolute inset-0 bg-[rgba(7,5,3,0.36)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,5,3,0.97)] via-[rgba(7,5,3,0.46)] to-[rgba(7,5,3,0.1)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(7,5,3,0.82)] via-[rgba(7,5,3,0.2)] to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_28%,rgba(4,3,2,0.6)_100%)]" />
        </motion.div>

        {/* Hero grain texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] opacity-[0.065]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "160px"
          }}
        />

        {/* Ambient fiber particles */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[3]">
          {microfiberParticles.map((particle, idx) => (
            <motion.span
              key={`hero-p-${idx}`}
              className="absolute h-0.5 w-0.5 rounded-full bg-[#e0d0ba]/45"
              style={{ left: particle.left, top: particle.top }}
              animate={{ y: [0, -26, 0], opacity: [0.08, 0.48, 0.08] }}
              transition={{ duration: particle.duration, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: particle.delay }}
            />
          ))}
        </div>

        {/* Top exhibit bar */}
        <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between px-6 py-5 sm:px-8 md:px-12 lg:px-16">
          <p className="text-[9px] uppercase tracking-[0.22em] text-[#8b7d6b]">Thread &amp; Trace &middot; Environmental Exhibit &middot; 2026</p>
          <p className="hidden text-[9px] uppercase tracking-[0.2em] text-[#6b6057] sm:block">Admission free &middot; Open now</p>
        </div>

        {/* Floating stat markers — museum plaque style, right edge */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.8 }}
          className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2.5 lg:flex lg:right-16"
        >
          {[
            { value: "92M", unit: "tonnes", label: "textile waste annually" },
            { value: "73%", unit: "of clothing", label: "ends in landfill" },
            { value: "200+", unit: "years", label: "synthetic decomposition" },
          ].map((stat) => (
            <div key={stat.value} className="border-l-2 border-[#7a6e61]/80 bg-[rgba(7,5,3,0.72)] py-3 pl-4 pr-6 backdrop-blur-[3px]">
              <p className="font-[var(--font-display)] text-[1.6rem] leading-none tracking-tight text-[#e6dace]">{stat.value}</p>
              <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#9f9384]">{stat.unit} &middot; {stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main content — editorial bottom-anchored layout */}
        <div className="relative z-10 px-6 pb-14 sm:px-8 sm:pb-20 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="exhibit-label mb-5">Environmental Exhibit &middot; Room Entry</p>
            <h1 className="mb-5 max-w-2xl font-[var(--font-display)] text-[clamp(1.55rem,3.2vw,2.6rem)] leading-[1.1] tracking-[-0.015em] text-[#ece4d8]">
              The hidden cost<br className="hidden sm:block" /> of what you wear.
            </h1>
            <p className="mb-10 max-w-md text-[0.86rem] leading-relaxed text-[#b0a998] sm:text-[0.91rem]">
              An evidence-based walk through extraction, pollution, and disposal &mdash; the supply chain fast fashion never shows you.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("cost")}
                className="group flex items-center gap-3 border border-[#a89880] bg-[rgba(168,152,128,0.1)] px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e2d8cc] transition-all hover:bg-[rgba(168,152,128,0.22)]"
              >
                Enter the Exhibit
                <motion.span
                  aria-hidden
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.4, ease: "easeInOut" }}
                >&#8594;</motion.span>
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("login")}
                className="border border-[#6b6057]/65 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#a89d8e] transition hover:border-[#8b7d6b] hover:text-[#c8bfb0]"
              >
                Member Access
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator — animated vertical line */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("cost")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 text-[8px] uppercase tracking-[0.24em] text-[#6b6057] transition hover:text-[#8b7d6b] sm:bottom-8 sm:right-8"
          aria-label="Scroll to first room"
        >
          <motion.span
            aria-hidden
            animate={{ scaleY: [0.35, 1, 0.35], opacity: [0.25, 0.75, 0.25] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.1, ease: "easeInOut" }}
            className="block h-10 w-px origin-top bg-current"
          />
          Scroll
        </motion.button>      </section>

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

      <section id="waste" className="relative overflow-hidden px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="absolute inset-x-0 top-0 h-[56%] -z-10">
          <ExhibitImage src={IMAGES.waste} alt="Wide landscape of textile landfill and environmental damage" sizes="100vw" className="h-full w-full" caption="Global Waste Field" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,13,10,0.34)] via-[rgba(18,13,10,0.72)] to-[#15100d]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[48%] bg-[#15100d]" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="exhibit-label mb-5">Room Four · Waste at Scale</p>
              <h2 className="mb-5 max-w-3xl font-[var(--font-display)] text-[clamp(1.55rem,2.5vw,2.2rem)] leading-[1.15] tracking-[-0.01em] text-[#e7dccd]">The Landfill Is the Final Collection</h2>
              <p className="max-w-3xl text-[0.95rem] leading-relaxed text-[#d7ccbe] sm:text-base">
                This room shifts from reading to evidence. Scroll through routes, smoke, and particles that show where clothing goes after trend cycles end.
              </p>
            </div>
            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-xl border border-[#6b6057]/45 bg-[rgba(18,13,10,0.68)] p-5 backdrop-blur-sm"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#9f9384]">Curator Note</p>
              <p className="mt-3 text-sm leading-relaxed text-[#d2c8ba]">
                Disposal is not the end of the story. It is the point where responsibility is transferred to someone else.
              </p>
            </motion.aside>
          </div>

          <div className="mt-14">
            <p className="mb-5 text-xs uppercase tracking-[0.16em] text-[#a89b8b]">Data Installation</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {wasteStats.map((stat, index) => (
                <motion.article
                  key={stat.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                  className="rounded-xl border border-[#6b6057]/40 bg-[linear-gradient(160deg,rgba(22,16,13,0.92),rgba(22,16,13,0.62))] px-5 py-5"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-md border border-[#6b6057]/55 bg-[rgba(17,12,10,0.75)] p-2">
                    <StatIcon kind={stat.icon} />
                  </div>
                  <p className="text-3xl font-semibold tracking-tight text-[#e7dccd] sm:text-[2rem]"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#9b8f82]">{stat.unit}</p>
                  <p className="mt-2 text-[0.74rem] leading-snug text-[#b5a898]">{stat.label}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-xl border border-[#6b6057]/45 bg-[rgba(18,13,10,0.72)] p-5 sm:p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.15em] text-[#a09485]">Interactive Logistics Graphic</p>
              <h3 className="mt-2 font-[var(--font-display)] text-xl text-[#ddd2c2]">Waste does not stop. It travels.</h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#ad9f90]">Routes below represent transfer corridors from consumption centers to overflow landscapes.</p>
              <div className="mt-4">
                <RouteMapGraphic />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {wasteStoryPanels.map((panel, index) => (
                <motion.article
                  key={panel.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`overflow-hidden rounded-xl border border-[#6b6057]/40 ${panel.id === "no-neutral-choice" ? "bg-[rgba(19,13,10,0.78)]" : "bg-[rgba(22,16,13,0.62)]"}`}
                >
                  <div className="relative h-52">
                    <ExhibitImage src={panel.image} alt={panel.title} sizes="(max-width: 1024px) 100vw, 48vw" className="h-full w-full" caption={panel.caption} />
                    {panel.id === "incineration-pipeline" ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_82%,rgba(222,114,66,0.3),transparent_46%),linear-gradient(to_top,rgba(11,8,7,0.78),rgba(11,8,7,0.22))]" /> : null}
                    {panel.id === "microfiber-saturation" ? (
                      <div className="absolute inset-0">
                        {microfiberParticles.map((particle, microIdx) => (
                          <motion.span
                            key={`micro-${microIdx}`}
                            className="absolute h-1.5 w-1.5 rounded-full bg-[#d3deeb]/70"
                            style={{ left: particle.left, top: particle.top }}
                            animate={{ y: [0, -14, 0], opacity: [0.2, 0.78, 0.2] }}
                            transition={{ duration: particle.duration, repeat: Number.POSITIVE_INFINITY, delay: particle.delay, ease: "easeInOut" }}
                          />
                        ))}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(152,193,216,0.2),transparent_48%)]" />
                      </div>
                    ) : null}
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#6b6057]/55 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-[#a69888]">
                      <StoryIcon kind={panel.icon} />
                      {panel.kicker}
                    </div>
                    <h3 className="mt-4 font-[var(--font-display)] text-[1.3rem] leading-tight text-[#ddd2c2]">{panel.title}</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#b2a596]">
                      {panel.notes.map((note) => (
                        <li key={note} className="flex gap-2">
                          <span aria-hidden className="mt-[0.42rem] h-1.5 w-1.5 rounded-full bg-[#8f8273]" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                    <p className={`mt-5 border-l pl-3 text-xs leading-relaxed ${panel.id === "no-neutral-choice" ? "border-[#bf8f5a] text-[#d8be99]" : "border-[#6b6057]/55 text-[#9d9080]"}`}>
                      {panel.evidence}
                    </p>
                    {index === 0 ? (
                      <div className="mt-4 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.13em] text-[#a49788]">
                        <span className="rounded-full border border-[#6b6057]/55 px-2 py-1">Europe → West Africa</span>
                        <span className="rounded-full border border-[#6b6057]/55 px-2 py-1">North America → Chile</span>
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
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

      <section id="login" className="relative border-t border-[#6b6057]/25 bg-[#14100d]/60 px-4 py-24 sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="exhibit-label mb-5">Member Access</p>
            <h2 className="exhibit-heading mb-5">Log In To Save Your Exhibition Path</h2>
            <p className="max-w-xl text-[0.95rem] leading-relaxed text-[#cfc8b8] sm:text-base">
              Sign in to bookmark rooms, save reflection notes, and continue your route across devices.
            </p>
          </div>

          <motion.form
            onSubmit={handleLoginSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-xl border border-[#6b6057]/45 bg-[rgba(20,14,11,0.68)] p-6"
          >
            <div className="grid gap-4">
              <label className="grid gap-2 text-sm text-[#d6cbbd]">
                <span className="text-xs uppercase tracking-[0.13em] text-[#a79a8b]">Email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full border border-[#6b6057]/55 bg-[rgba(17,12,10,0.82)] px-3 py-3 text-sm text-[#e2d8ca] placeholder:text-[#8f8476]"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#d6cbbd]">
                <span className="text-xs uppercase tracking-[0.13em] text-[#a79a8b]">Password</span>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="w-full border border-[#6b6057]/55 bg-[rgba(17,12,10,0.82)] px-3 py-3 text-sm text-[#e2d8ca] placeholder:text-[#8f8476]"
                  placeholder="Enter password"
                />
              </label>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center border border-[#8b7d6b] bg-[rgba(139,125,107,0.16)] px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] transition hover:bg-[#8b7d6b]/25">
                Log In
              </button>
              <button type="button" onClick={() => setLoginMessage("Password reset flow can be connected to your auth provider.")} className="inline-flex items-center justify-center border border-[#6b6057] px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-[#b8b0a0] transition hover:bg-white/5">
                Forgot Password
              </button>
            </div>
            {loginMessage ? <p className="mt-4 text-sm leading-relaxed text-[#cdbfae]">{loginMessage}</p> : null}
          </motion.form>
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
