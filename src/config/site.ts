import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Subathira Rajavel",
  title: "Subathira Rajavel — Biomedical Engineer, Researcher & Educator",
  description:
    "Portfolio of Subathira Rajavel: biomedical engineer working across VR surgical simulation, AI-based sign language recognition and serious games for neurodiverse children.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_IN",
  keywords: [
    "Subathira Rajavel",
    "Biomedical Engineering",
    "Medical Electronics",
    "Virtual Reality",
    "Surgical Simulation",
    "Haptics",
    "Sign Language Recognition",
    "MediaPipe",
    "Deep Learning",
    "Assistant Professor",
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
