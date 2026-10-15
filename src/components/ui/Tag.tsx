import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: ReactNode;
  variant?: "outline" | "solid" | "signal";
  className?: string;
}

const variants = {
  outline: "border border-line text-ink-soft",
  solid: "bg-ink text-paper",
  signal: "bg-signal-soft text-signal",
} as const;

export function Tag({ children, variant = "outline", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-[0.7rem] tracking-wide whitespace-nowrap",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
