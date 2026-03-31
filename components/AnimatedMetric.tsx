"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type AnimatedMetricProps = {
  value: number;
  durationMs?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
};

export function AnimatedMetric({
  value,
  durationMs = 1300,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = ""
}: AnimatedMetricProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [started, setStarted] = useState(false);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      return;
    }

    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      setDisplayValue(value * progress);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [durationMs, prefersReducedMotion, started, value]);

  const formatted = useMemo(() => {
    return displayValue.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }, [decimals, displayValue]);

  return (
    <span ref={ref} className={className} aria-live="polite" aria-atomic="true">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}