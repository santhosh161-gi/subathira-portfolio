import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

/** Display serif — variable weight + optical size, self-hosted. */
export const fraunces = localFont({
  src: [
    { path: "../assets/fonts/fraunces-latin-full-normal.woff2", style: "normal", weight: "100 900" },
    { path: "../assets/fonts/fraunces-latin-full-italic.woff2", style: "italic", weight: "100 900" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

export const geistSans = GeistSans;
export const geistMono = GeistMono;

export const fontVariables = [fraunces.variable, geistSans.variable, geistMono.variable].join(" ");
