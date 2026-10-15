import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost" | "light";
  icon?: ReactNode;
};

const variants = {
  primary: "bg-ink text-paper hover:bg-signal",
  ghost: "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  light: "bg-paper text-ink hover:bg-signal hover:text-paper",
} as const;

/** Anchor styled as a button. Used for in-page navigation, downloads and mailto links. */
export function ButtonLink({ variant = "primary", icon, className, children, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300",
        variants[variant],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? (
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      ) : null}
    </a>
  );
}
