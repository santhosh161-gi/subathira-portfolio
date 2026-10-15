"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, MOTION_OK, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const BEAT_WIDTH = 240;
const HEIGHT = 120;
const BASELINE = 60;

/**
 * Builds a stylised ECG (P wave, QRS complex, T wave) that fills `width` user units.
 * The viewBox always matches the rendered aspect ratio, so the trace scales
 * uniformly and never distorts, whatever the screen size.
 */
function buildEcgPath(width: number) {
  const b = BASELINE;
  const beats = Math.max(1, Math.floor(width / BEAT_WIDTH));
  const offset = (width - beats * BEAT_WIDTH) / 2;
  let d = `M0 ${b} L${offset} ${b}`;

  for (let i = 0; i < beats; i++) {
    const x = offset + i * BEAT_WIDTH;
    d +=
      ` L${x + 40} ${b} Q${x + 52} ${b - 12} ${x + 64} ${b}` + // P wave
      ` L${x + 80} ${b} L${x + 86} ${b + 8} L${x + 94} ${b - 50} L${x + 102} ${b + 34} L${x + 108} ${b}` + // QRS
      ` L${x + 132} ${b} Q${x + 152} ${b - 20} ${x + 172} ${b}` + // T wave
      ` L${x + BEAT_WIDTH} ${b}`;
  }

  return `${d} L${width} ${b}`;
}

interface EcgTraceProps {
  delay?: number;
  /** Start drawing when scrolled into view instead of on page load. */
  onScroll?: boolean;
  className?: string;
}

/** Signature element: an ECG trace that draws itself, then keeps a live "blip" running. */
export function EcgTrace({ delay = 0.4, onScroll = false, className }: EcgTraceProps) {
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      if (!h) return;
      const next = Math.round((w / h) * HEIGHT);
      setWidth((prev) => (Math.abs(prev - next) > 4 ? next : prev));
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.set(ref.current, { autoAlpha: 1 });

        const tl = gsap.timeline({
          delay,
          scrollTrigger: onScroll ? { trigger: ref.current, start: "top 85%", once: true } : undefined,
        });

        tl.fromTo(".ecg-base", { drawSVG: "0%" }, { drawSVG: "100%", duration: 2.2, ease: "power1.inOut" }).fromTo(
          ".ecg-blip",
          { drawSVG: "0% 0%", autoAlpha: 1 },
          {
            keyframes: [
              { drawSVG: "0% 7%", duration: 0.3, ease: "none" },
              { drawSVG: "93% 100%", duration: 3.6, ease: "none" },
              { drawSVG: "100% 100%", duration: 0.3, ease: "none" },
            ],
            repeat: -1,
            repeatDelay: 0.6,
          },
        );
      });
    },
    { scope: ref, dependencies: [width], revertOnUpdate: true },
  );

  const d = buildEcgPath(width);

  return (
    <svg
      ref={ref}
      data-ecg
      viewBox={`0 0 ${width} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid meet"
      className={cn("block h-16 w-full sm:h-24", className)}
      aria-hidden
    >
      <path className="ecg-base" d={d} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round" />
      <path
        className="ecg-blip invisible text-signal"
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
