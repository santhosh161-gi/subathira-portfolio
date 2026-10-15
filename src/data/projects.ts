import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "vr-surgery-simulator",
    title: "VR Surgery Simulator with Haptic Feedback",
    tagline: "Total Knee Replacement, rehearsed in virtual reality",
    description:
      "A Total Knee Replacement (TKR) training simulator with realistic 3D knee anatomy and surgical tools, where trainees feel tissue resistance through a haptic stylus.",
    highlights: [
      "Real-time interaction, incision simulation and complete surgical workflow modelling",
      "Touch Haptic Device integration for force feedback, depth-based incision resistance and tactile sensation",
      "Soft-tissue deformation and bone interaction for procedural realism",
    ],
    stack: ["Unity", "Blender", "Touch Haptic Device", "3D Modelling"],
    outcomes: ["IEEE conference publication", "Journal paper with Italian collaborators", "Patent registration initiated"],
    featured: true,
  },
  {
    id: "sign-language-recognition",
    title: "Indian Sign Language Recognition",
    tagline: "Real-time gesture understanding for accessible communication",
    description:
      "A real-time recognition system for Indian Sign Language built on hand landmark extraction and deep learning classification, developed under a DHR-funded project.",
    highlights: [
      "Hand landmark extraction, gesture classification and model training pipeline",
      "Structured dataset of 1000+ gesture samples that improved recognition accuracy",
      "Performance efficiency improved by 20% over the inherited system",
    ],
    stack: ["MediaPipe", "Deep Learning", "Computer Vision"],
    outcomes: ["Patent filing under DHR-funded project", "Journal paper submitted"],
    featured: true,
  },
  {
    id: "serious-games-asd",
    title: "Serious Games for Neurodiverse Children",
    tagline: "Dunk-it!!, Froot Shoot and Dart Knight",
    description:
      "Motion-tracked games with imitation-based learning modules that help children with Autism Spectrum Disorder build cognitive and motor skills.",
    highlights: [
      "30% higher engagement during trials",
      "25% better interaction accuracy with MediaPipe tracking",
      "Pilot-tested at Clarke School and Mirra School, Chennai",
    ],
    stack: ["MediaPipe", "Motion Tracking", "Serious Games"],
    outcomes: ["Published on Microsoft Store"],
  },
  {
    id: "sleep-apnea-ecg",
    title: "Sleep Apnea Detection from ECG",
    tagline: "Signal processing meets machine learning",
    description:
      "An SVM-based classifier that detects sleep apnea from ECG recordings, covering preprocessing, feature extraction and classification.",
    highlights: ["ECG signal preprocessing", "Feature extraction and SVM classification"],
    stack: ["MATLAB", "SVM", "Signal Processing"],
    outcomes: [],
  },
  {
    id: "tissue-waste-disposer",
    title: "Tissue Waste Disposer",
    tagline: "Working prototype for safe biomedical waste incineration",
    description:
      "An automated incineration system for biomedical tissue waste, designed around healthcare safety standards and environmental compliance.",
    highlights: ["Automated, safe disposal workflow", "Designed for healthcare safety and environmental compliance"],
    stack: ["Prototyping", "Healthcare Safety", "Environmental Compliance"],
    outcomes: ["Best Project Recognition Award at an international conference"],
  },
];
