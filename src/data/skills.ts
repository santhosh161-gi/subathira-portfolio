import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  { label: "Programming", items: ["C", "C#", "Python", "MATLAB"] },
  { label: "Software & Development", items: ["Unity (VR)", "Unreal Engine", "OpenCV", "MediaPipe", "LabVIEW"] },
  { label: "Medical Imaging", items: ["3D Slicer", "ImageJ"] },
  { label: "XR & Haptic Hardware", items: ["Meta Quest 3", "Touch Haptic Device", "Microsoft HoloLens"] },
  { label: "Design", items: ["Blender", "EasyEDA"] },
  { label: "Documentation", items: ["LaTeX", "Microsoft Word", "Excel", "PowerPoint"] },
];

export const teachingSubjects: string[] = [
  "Biomedical Instrumentation",
  "Bio-informatics",
  "VR in Healthcare",
  "Bio-signal Processing Lab",
  "Instrumentation Lab",
];
