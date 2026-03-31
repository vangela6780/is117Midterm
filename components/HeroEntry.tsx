const stats = [
  { label: "Discarded garments entering Atacama yearly", value: "59,000t" },
  { label: "Garments routed through Iquique free zone", value: "Millions" },
  { label: "Curatorial premise", value: "Waste to material" }
];

export function HeroEntry() {
  return (
    <section className="grid gap-6 border border-mist/14 bg-[linear-gradient(180deg,rgba(24,21,23,0.96),rgba(16,14,15,0.98))] p-4 shadow-museum sm:p-5 md:p-6 xl:grid-cols-[1.08fr_0.92fr] xl:p-8">
      <div className="space-y-5 md:space-y-6">
        <span className="section-label">The Entry / The Shock</span>
        <div className="space-y-3 md:space-y-4">
          <p className="museum-kicker text-mist/76">
            Thread & Trace: The Upcycling Revolution
          </p>
          <h1 className="museum-title text-[clamp(2.15rem,8vw,4.35rem)] leading-[0.88] text-mist">
            Waste becomes visible before it becomes valuable.
          </h1>
          <p className="max-w-2xl text-[1.02rem] leading-7 text-mist/76 md:text-lg md:leading-8">
            This opening gallery positions Atacama not as spectacle, but as evidence. The exhibition asks viewers to move
            from passive consumption toward material literacy: to see discarded clothing as design potential, labor history,
            and environmental record.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="fashion-card p-4">
              <p className="display-type text-[1.7rem] font-semibold uppercase text-ochre sm:text-[1.9rem]">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.14em] text-mist/76">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <div
          className="desert-panel curated-image-panel relative min-h-[min(62svh,440px)] sm:min-h-[380px] xl:min-h-[min(68svh,520px)] border-2 border-ash p-4 sm:p-5 text-mist"
          role="img"
          aria-label="Contextual desert study used to frame the Atacama textile waste narrative"
          style={{
            backgroundImage:
              "linear-gradient(175deg, rgba(14, 13, 11, 0.35) 0%, rgba(14, 13, 11, 0.66) 100%), url('https://images.pexels.com/photos/1001435/pexels-photo-1001435.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center 58%",
            backgroundBlendMode: "multiply",
          }}
        >
          <div className="relative z-[2] flex h-full flex-col justify-between">
            <div className="flex items-start justify-between gap-4">
              <p className="museum-title max-w-[12ch] text-[1.6rem] leading-tight text-mist sm:text-[1.85rem]">Atacama: context plate</p>
              <p aria-hidden="true" className="text-[0.7rem] uppercase tracking-[0.18em] text-mist/55 sm:text-[0.75rem]">−24.5° / −68.8°</p>
            </div>
            <div>
              <p className="max-w-sm text-[0.98rem] leading-7 text-mist/85 sm:text-base">
                A contextual landscape study establishes the arid geography surrounding the exhibition's central evidence:
                the accumulation of discarded garments and the afterlife of fast fashion.
              </p>
              <div className="image-meta-bar">
                <p aria-hidden="true" className="image-study-label">Plate I · contextual study</p>
                <p className="image-credit">Arid topography reference · Source: Pexels</p>
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
            className="border border-ochre/80 bg-ochre px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#171212] transition hover:-translate-y-0.5 hover:bg-sand sm:py-5"
          >
            View Atacama reference
          </a>
          <div className="border border-mist/14 bg-white/5 px-4 py-4 text-sm uppercase tracking-[0.14em] leading-6 text-mist/84 sm:py-5">
            Curatorial statement: this exhibition treats disposal sites as archives of production, value, and neglect.
          </div>
        </div>
      </div>
    </section>
  );
}