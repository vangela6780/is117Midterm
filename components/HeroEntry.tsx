import { AnimatedMetric } from "@/components/AnimatedMetric";

const narrativeSteps = [
  "Observe the scale of disposal as a physical landscape.",
  "Interpret garments as evidence of labor, trade, and neglect.",
  "Carry one practical repair action into the next room."
];

export function HeroEntry() {
  return (
    <section id="entry" className="space-y-6 border-2 border-ash bg-mist p-4 shadow-museum sm:p-5 md:p-6 xl:p-8">
      <div
        className="entry-hero-panel curated-image-panel relative min-h-[84svh] border-2 border-ash p-4 text-mist sm:p-6"
        role="img"
        aria-label="Panoramic Atacama contextual hero image used as the exhibition entrance"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10, 10, 10, 0.24) 0%, rgba(10, 10, 10, 0.74) 100%), url('https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center 54%",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="hero-glow pointer-events-none absolute right-8 top-10 h-20 w-20 rounded-full bg-ochre/30 blur-2xl sm:right-12 sm:h-28 sm:w-28" aria-hidden />

        <div className="relative z-[2] grid h-full gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="flex h-full flex-col justify-between gap-8">
            <div className="flex items-start justify-between gap-4">
              <span className="section-label border-mist/80 bg-mist/15 text-mist">The Entry / The Shock</span>
              <p aria-hidden="true" className="text-[0.72rem] uppercase tracking-[0.18em] text-mist/65 sm:text-[0.8rem]">
                Atacama contextual plate
              </p>
            </div>

            <div className="space-y-5">
              <p className="museum-kicker text-mist/86">Thread and Trace: The Upcycling Revolution</p>
              <h2 className="museum-title max-w-4xl text-[clamp(2.1rem,7vw,4.6rem)] leading-[0.86] text-mist">
                Waste becomes visible before it becomes valuable.
              </h2>
              <p className="max-w-3xl text-[1rem] leading-7 text-mist/86 sm:text-[1.06rem] sm:leading-8">
                Welcome to the exhibition. This entrance frames Atacama as evidence, not spectacle, and introduces the route
                from extraction costs to collective repair.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#entry-brief"
                className="entry-scroll-indicator inline-flex items-center gap-2 border-2 border-mist/75 bg-mist/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-mist sm:text-sm"
              >
                Scroll to begin
                <span aria-hidden="true">v</span>
              </a>
              <a
                href="#cost"
                className="inline-flex items-center gap-2 border-2 border-mist/70 bg-ash/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 sm:text-sm"
              >
                Jump to Resource Cost
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>

          <aside className="grid content-end gap-3 xl:pl-3">
            <div className="hero-stat-card border-2 border-mist/70 bg-ash/45 p-4 backdrop-blur-sm">
              <p className="display-type text-[2.05rem] uppercase text-ochre sm:text-[2.4rem]">
                <AnimatedMetric value={59000} suffix="t" />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-mist/85">
                Garments discarded in Atacama per year
              </p>
            </div>
            <div className="hero-stat-card border-2 border-mist/70 bg-ash/45 p-4 backdrop-blur-sm">
              <p className="display-type text-[2.05rem] uppercase text-ochre sm:text-[2.4rem]">
                <AnimatedMetric value={7} suffix="M+" />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-mist/85">
                Garments routed through Iquique free zone
              </p>
            </div>
          </aside>
        </div>
      </div>

      <div id="entry-brief" className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="space-y-5 md:space-y-6">
          <div className="space-y-3 md:space-y-4">
            <p className="museum-kicker text-clay">Visitor orientation wall</p>
            <h3 className="museum-title text-[clamp(1.9rem,5vw,3rem)] leading-[0.9] text-ash">How to move through this room</h3>
            <p className="museum-copy max-w-2xl text-[1.02rem] leading-7 md:text-lg md:leading-8">
              This opening gallery positions Atacama not as spectacle, but as evidence. Read the shock metrics, scan the
              context plate, then carry one question forward into Room Two: what true resource cost is hidden inside one garment?
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-3">
            {narrativeSteps.map((step, index) => (
              <li key={step} className="border-2 border-ash bg-background p-4">
                <p className="display-type text-xs uppercase tracking-[0.2em] text-clay">Step 0{index + 1}</p>
                <p className="mt-2 text-sm leading-7 text-ash/82">{step}</p>
              </li>
            ))}
          </ol>
          <div className="grid gap-4 border-2 border-ash bg-panel p-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="museum-kicker text-clay">Continue the guided route</p>
              <p className="mt-2 text-sm leading-7 text-ash/82 sm:text-base">
                Next stop: Resource Cost. You will translate abstract waste into concrete water-use impact.
              </p>
            </div>
            <a
              href="#cost"
              className="inline-flex items-center justify-center border-2 border-ash bg-ash px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 hover:bg-clay"
            >
              Continue to Cost
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <div
            className="desert-panel curated-image-panel relative min-h-[min(62svh,440px)] border-2 border-ash p-4 text-mist sm:min-h-[380px] sm:p-5 xl:min-h-[min(68svh,520px)]"
            role="img"
            aria-label="Contextual desert study used to frame the Atacama textile waste narrative"
            style={{
              backgroundImage:
                "linear-gradient(175deg, rgba(14, 13, 11, 0.35) 0%, rgba(14, 13, 11, 0.66) 100%), url('https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1600')",
              backgroundSize: "cover",
              backgroundPosition: "center 58%",
              backgroundBlendMode: "multiply"
            }}
          >
            <div className="relative z-[2] flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4">
                <p className="museum-title max-w-[12ch] text-[1.6rem] leading-tight text-mist sm:text-[1.85rem]">Atacama: context plate</p>
                <p aria-hidden="true" className="text-[0.7rem] uppercase tracking-[0.18em] text-mist/55 sm:text-[0.75rem]">Latitude -24.5 / -68.8</p>
              </div>
              <div>
                <p className="max-w-sm text-[0.98rem] leading-7 text-mist/85 sm:text-base">
                  A contextual landscape study establishes the arid geography surrounding the exhibition central evidence:
                  the accumulation of discarded garments and the afterlife of fast fashion.
                </p>
                <div className="image-meta-bar">
                  <p aria-hidden="true" className="image-study-label">Plate I - contextual study</p>
                  <p className="image-credit">Arid topography reference - Source: Pexels</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1fr_1.3fr]">
            <a
              href="https://www.npr.org/2021/11/08/1053279833/chile-desert-fast-fashion-pollution"
              target="_blank"
              rel="noreferrer"
              aria-label="View Atacama NPR article (opens in new tab)"
              className="border-2 border-ash bg-ochre px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ash transition hover:-translate-y-0.5 hover:bg-sand sm:py-5"
            >
              View Atacama reference
            </a>
            <div className="border-2 border-ash bg-ash px-4 py-4 text-sm uppercase leading-6 tracking-[0.14em] text-mist sm:py-5">
              Curatorial statement: this exhibition treats disposal sites as archives of production, value, and neglect.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
