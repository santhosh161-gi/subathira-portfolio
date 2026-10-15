import type { ReactNode } from "react";
import { cn, padIndex } from "@/lib/utils";

interface SectionHeadingProps {
  index: number;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({ index, label, title, intro, tone = "light", className }: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <header className={cn("grid gap-6 md:grid-cols-12 md:gap-10", className)}>
      <div className="md:col-span-3" data-reveal>
        <p className={cn("eyebrow flex items-center gap-3", dark && "text-paper/60")}>
          <span className="text-signal">{padIndex(index)}</span>
          <span aria-hidden className={cn("h-px w-8", dark ? "bg-paper/30" : "bg-line")} />
          {label}
        </p>
      </div>
      <div className="md:col-span-9">
        <h2
          className={cn(
            "font-display text-title font-light tracking-tight text-balance",
            dark ? "text-paper" : "text-ink",
          )}
          data-reveal
        >
          {title}
        </h2>
        {intro ? (
          <p
            className={cn("mt-5 max-w-2xl text-lg leading-relaxed text-pretty", dark ? "text-paper/70" : "text-muted")}
            data-reveal
          >
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}
