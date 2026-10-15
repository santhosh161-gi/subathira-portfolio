"use client";

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

/**
 * Single place where GSAP plugins are registered.
 * Always import gsap from here so plugins are guaranteed to be available.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin);
  gsap.defaults({ ease: "power3.out", duration: 0.8 });
}

/** Media query used to opt users into motion. */
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export { gsap, ScrollTrigger, SplitText, DrawSVGPlugin, useGSAP };
