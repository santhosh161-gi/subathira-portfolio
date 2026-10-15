import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge needs to know about the custom font-size tokens defined in
 * globals.css (`text-display`, `text-title`), otherwise it mistakes them for
 * text colours and drops them when merged with e.g. `text-ink`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["display", "title"] }],
    },
  },
});

/** Merge conditional class names and resolve Tailwind conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Zero-padded index label, e.g. 1 -> "01". */
export function padIndex(index: number, length = 2) {
  return String(index).padStart(length, "0");
}
