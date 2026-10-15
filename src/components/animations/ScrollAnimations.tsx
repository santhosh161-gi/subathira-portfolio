"use client";

import { gsap, MOTION_OK, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Page-wide scroll animations driven by data attributes, so section
 * components can stay as lightweight server components:
 *
 *  - data-reveal                 fade + rise when scrolled into view
 *  - data-timeline               container whose [data-timeline-progress] child scales with scroll
 *  - data-count="9.2"            number counts up from zero (data-decimals for precision)
 *  - data-parallax="-12"         yPercent drift while the element crosses the viewport
 */
export function ScrollAnimations() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(MOTION_OK, () => {
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      // Anything already scrolled past (e.g. reload mid-page) is shown immediately.
      reveals.forEach((el) => {
        if (el.getBoundingClientRect().bottom < 0) gsap.set(el, { autoAlpha: 1 });
      });

      ScrollTrigger.batch(reveals, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease: "expo.out", overwrite: true },
          ),
      });

      gsap.utils.toArray<HTMLElement>("[data-timeline]").forEach((timeline) => {
        const bar = timeline.querySelector("[data-timeline-progress]");
        if (!bar) return;
        gsap.fromTo(
          bar,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: timeline, start: "top 65%", end: "bottom 65%", scrub: 0.6 },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        const decimals = Number(el.dataset.decimals ?? 0);
        const counter = { value: 0 };
        el.textContent = (0).toFixed(decimals);

        gsap.to(counter, {
          value: target,
          duration: 1.8,
          ease: "power2.out",
          delay: Number(el.dataset.delay ?? 0),
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
          onUpdate: () => {
            el.textContent = counter.value.toFixed(decimals);
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: Number(el.dataset.parallax),
          ease: "none",
          scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });
  });

  return null;
}
