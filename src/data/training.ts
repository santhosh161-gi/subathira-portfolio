import type { Certification, IndustrialVisit, Training } from "@/types";

export const trainings: Training[] = [
  {
    id: "perfint",
    title: "R&D and Quality Assurance Internship",
    organization: "Perfint Private Limited",
    date: "May 2024",
    kind: "Internship",
    points: [
      "Exposure to research and development processes for medical device systems",
      "Quality assurance procedures and regulatory standards in healthcare technology",
    ],
  },
  {
    id: "nitttr",
    title: "3D Asset Development in Blender & VR with Unreal Engine",
    organization: "National Institute of Technical Teachers Training and Research",
    date: "Mar 2024",
    kind: "Internship",
    points: [
      "Developed 3D models and explored game mechanics supporting the M.E. thesis",
      "Hands-on VR application development in Blender and Unreal Engine",
    ],
  },
  {
    id: "vel-hospital",
    title: "Clinical Immersion",
    organization: "Vel Multi-specialty Hospital, Palani",
    date: "Feb 2024",
    kind: "Clinical",
    points: [
      "Observed emergency unit workflows and response times, identifying operational challenges",
      "Proposed engineering-based solutions to improve efficiency and workflow",
    ],
  },
  {
    id: "meenakshi",
    title: "Clinical Training",
    organization: "Meenakshi Mission Hospital",
    date: "2023",
    kind: "Clinical",
    points: [
      "Worked with biomedical engineers on equipment maintenance and emergency repairs",
      "Procurement, quality assurance and calibration documentation",
    ],
  },
  {
    id: "kmch",
    title: "Hospital Training — Phase 1 & 2",
    organization: "Kovai Medical Center and Hospital",
    date: "2022 – 2023",
    kind: "Clinical",
    points: [
      "Hands-on calibration of infusion pumps and syringe pumps",
      "Electrical safety, radiation safety and radiological equipment principles",
    ],
  },
  {
    id: "deepam",
    title: "30-Day Online Training",
    organization: "Deepam Academy of Medical Sciences",
    date: "May 2022",
    kind: "Training",
    points: ["Diagnostic, treatment, operative and post-operative medical equipment"],
  },
  {
    id: "atheena",
    title: "In-Plant Training (3 days)",
    organization: "Atheena Pandian Private Limited",
    date: "Mar 2021",
    kind: "Training",
    points: ["Servicing and maintenance of X-ray machines and oxygen generators"],
  },
];

export const certifications: Certification[] = [
  { title: "Biophotonics", issuer: "NPTEL", date: "Apr 2022", score: "60%" },
  { title: "Biomechanics", issuer: "NPTEL", date: "Nov 2021", score: "60%" },
  { title: "Osteoporosis and DXA Scanning", issuer: "ISSRT", date: "Sep 2021" },
  { title: "Medical Imaging Equipment Procurement and Specifications", issuer: "ISSRT", date: "Aug 2021" },
  { title: "Biomedical Nanotechnology", issuer: "NPTEL", date: "Dec 2020", score: "65%" },
];

export const industrialVisits: IndustrialVisit[] = [
  {
    organization: "Leepra Technologies",
    location: "Mysore",
    year: "2022",
    focus: "PCB assembly and system-level manufacturing",
  },
  {
    organization: "Labland Biotech Private Limited",
    location: "Mysore",
    year: "2022",
    focus: "Plant biotechnology applications and industrial practice",
  },
];
