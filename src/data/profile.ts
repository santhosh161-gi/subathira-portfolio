import type { Profile } from "@/types";

export const profile: Profile = {
  name: "Subathira Rajavel",
  firstName: "Subathira",
  initials: "SR",
  role: "Biomedical Engineer · Researcher · Educator",
  headline:
    "I build immersive and intelligent healthcare tools — from haptic VR surgery simulators to real-time sign language recognition — and teach the next generation to do the same.",
  objective:
    "To contribute to academia as an Assistant Professor by combining excellence in teaching, research and service, fostering critical thinking among students, and addressing real-world challenges through scholarly work.",
  location: "Coimbatore, Tamil Nadu, India",
  email: "subathirarajavel@gmail.com",
  phone: "+91 84387 10624",
  resumeUrl: "/Subathira-Rajavel-CV.pdf",
  socials: [
    {
      label: "LinkedIn",
      // TODO: replace with the full LinkedIn profile URL
      href: "https://www.linkedin.com/search/results/all/?keywords=Subathira%20Rajavel",
      handle: "Subathira Rajavel",
    },
  ],
  focusAreas: [
    {
      title: "Extended Reality in Healthcare",
      description:
        "VR surgical training with haptic feedback, realistic 3D anatomy and procedure workflows built in Unity and Blender.",
    },
    {
      title: "Applied AI & Computer Vision",
      description:
        "Real-time gesture and motion understanding with MediaPipe and deep learning, from dataset curation to deployment.",
    },
    {
      title: "Assistive & Clinical Technology",
      description:
        "Serious games for neurodiverse children, bio-signal analysis and hands-on medical equipment experience.",
    },
  ],
  strengths: [
    "Interdisciplinary research integrating Biomedical Engineering, Artificial Intelligence and Virtual Reality",
    "Hands-on experience developing real-time healthcare applications and simulation systems",
    "Collaborative research environments with contributions to publications and patents",
    "Quick learner who adapts emerging technologies to real-world medical challenges",
  ],
  stats: [
    { value: 9.2, decimals: 1, label: "M.E. CGPA, First Class with Distinction" },
    { value: 4, label: "Research & teaching roles" },
    { value: 1000, suffix: "+", label: "Gesture samples curated for ISL dataset" },
    { value: 2, label: "Patent filings in process" },
  ],
  hobbies: ["Drawing and creative sketching", "Films and visual storytelling", "Novels and research articles"],
};
