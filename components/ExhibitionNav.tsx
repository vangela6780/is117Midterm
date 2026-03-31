"use client";

import { useEffect, useMemo, useState } from "react";

const rooms = [
  { id: "entry", label: "Entry" },
  { id: "cost", label: "Cost" },
  { id: "gallery", label: "Gallery" },
  { id: "impact", label: "Community" },
  { id: "workshop", label: "Workshop" }
];

export function ExhibitionNav() {
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);
  const [progress, setProgress] = useState(0);

  const roomIds = useMemo(() => rooms.map((room) => room.id), []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(100, (scrollTop / maxScroll) * 100) : 0;
      setProgress(nextProgress);

      let nextActive = roomIds[0];
      for (const id of roomIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= window.innerHeight * 0.33) {
          nextActive = id;
        }
      }
      setActiveRoom(nextActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [roomIds]);

  const activeIndex = rooms.findIndex((room) => room.id === activeRoom);
  const nextRoom = activeIndex >= 0 ? rooms[activeIndex + 1] : null;
  const activeLabel = activeIndex >= 0 ? rooms[activeIndex].label : rooms[0].label;

  return (
    <header className="sticky top-0 z-30 border-b-2 border-ash bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <p className="museum-kicker py-3">Exhibition Route</p>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 border-2 border-ash/35 bg-panel px-3 py-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ash/84 sm:text-sm">
            You are here: <span className="text-ash">{activeLabel}</span>
          </p>
          {nextRoom ? (
            <a
              href={`#${nextRoom.id}`}
              className="inline-flex items-center border-2 border-ash bg-ash px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-mist transition hover:-translate-y-0.5 hover:bg-clay sm:text-xs"
            >
              Continue to {nextRoom.label}
            </a>
          ) : (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ash/75 sm:text-sm">Final room reached</p>
          )}
        </div>
        <nav aria-label="Room navigation" className="-mx-3 overflow-x-auto px-3 pb-3 sm:-mx-4 sm:px-4 md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
          <ul className="flex min-w-max items-center gap-2">
            {rooms.map((room) => {
              const isActive = activeRoom === room.id;
              return (
                <li key={room.id}>
                  <a
                    href={`#${room.id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`inline-flex items-center border-2 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:text-sm ${
                      isActive
                        ? "border-ash bg-ash text-mist"
                        : "border-ash/65 bg-panel text-ash hover:-translate-y-0.5 hover:border-ash"
                    }`}
                  >
                    {room.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div aria-hidden className="h-1.5 w-full bg-ash/20">
        <div className="h-full bg-rust transition-[width] duration-300" style={{ width: `${progress}%` }} />
      </div>
    </header>
  );
}