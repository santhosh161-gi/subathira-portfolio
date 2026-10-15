"use client";

import { useRef } from "react";
import { EcgTrace } from "@/components/animations/EcgTrace";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowDown, Download } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { gsap, MOTION_OK, SplitText, useGSAP } from "@/lib/gsap";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const [first, ...rest] = profile.name.split(" ");
  const last = rest.join(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap.set("[data-hero-title]", { autoAlpha: 1 });

        const split = SplitText.create("[data-hero-title] .line", {
          type: "chars",
          mask: "chars",
          charsClass: "hero-char",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, {
              yPercent: 115,
              duration: 1.1,
              stagger: 0.035,
              ease: "expo.out",
              delay: 0.15,
            }),
        });

        gsap.fromTo(
          "[data-hero-fade]",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, delay: 0.7, ease: "expo.out" },
        );

        return () => split.revert();
      });
    },
    { scope },
  );

  return (
    <section ref={scope} id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <Container className="relative">
        <div className="flex flex-wrap items-center justify-between gap-4" data-hero-fade>
          {/* <p className="eyebrow flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            Open to Assistant Professor & research roles
          </p> */}
          <p className="eyebrow">{profile.location}</p>
        </div>

        <h1 className="mt-10 font-display text-display font-light tracking-[-0.035em]" data-hero-title>
          <span className="line block">{first}</span>
          <span className="line block pl-[8vw] italic">
            {last}
            <span className="not-italic text-signal">.</span>
          </span>
        </h1>

        <EcgTrace className="mt-6 text-ink/70 sm:mt-10" />

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft text-pretty sm:text-xl" data-hero-fade>
              {profile.headline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-hero-fade>
              <ButtonLink href="#projects" icon={<ArrowDown />}>
                View my work
              </ButtonLink>
              <ButtonLink href={profile.resumeUrl} variant="ghost" icon={<Download />} download>
                Download CV
              </ButtonLink>
            </div>
          </div>

          <ul className="space-y-3 font-mono text-sm md:col-span-4 md:col-start-9" data-hero-fade>
            {profile.role.split(" · ").map((role, i) => (
              <li key={role} className="flex items-baseline gap-4 border-b border-line pb-3">
                <span className="text-xs text-signal">{String(i + 1).padStart(2, "0")}</span>
                <span>{role}</span>
              </li>
            ))}
          </ul>
        </div>

        <dl className="mt-16 grid grid-cols-2 border-t border-ink/15 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <div
              key={stat.label}
              className="border-b border-line py-6 pr-4 odd:border-r odd:pr-4 even:pl-4 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              data-hero-fade
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-4xl font-light tracking-tight sm:text-5xl">
                <span data-count={stat.value} data-decimals={stat.decimals ?? 0} data-delay={0.9 + i * 0.1}>
                  {stat.value.toFixed(stat.decimals ?? 0)}
                </span>
                {stat.suffix ? <span className="text-signal">{stat.suffix}</span> : null}
              </dd>
              <dd aria-hidden className="mt-2 text-sm leading-snug text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
