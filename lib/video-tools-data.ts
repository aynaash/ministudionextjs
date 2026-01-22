export type Priority = "high" | "medium" | "specialized";
export type Phase = "phase-1" | "phase-2" | "phase-3";

export interface Tool {
  id: string;
  name: string;
  purpose: string;
  whyConsider: string;
  install: string;
  priority: Priority;
  phase: Phase;
  useCase: string[];
  status?: string;
  critique?: string;
}

export interface Question {
  id: string;
  question: string;
  context: string;
}

export const tools: Tool[] = [
  // Phase 1 - High Priority
  {
    id: "ffmpeg-python",
    name: "FFmpeg-Python",
    purpose: "Fast video processing, frame extraction",
    whyConsider: "10-100x faster than MoviePy, hardware acceleration",
    install: "pip install ffmpeg-python",
    priority: "high",
    phase: "phase-1",
    useCase: ["Performance", "Frame Extraction", "Fast Processing"],
  },
  {
    id: "opencv",
    name: "OpenCV (cv2)",
    purpose: "Frame extraction, image processing",
    whyConsider: "Industry standard, GPU support, real-time processing",
    install: "pip install opencv-python",
    priority: "high",
    phase: "phase-1",
    useCase: ["Frame Extraction", "Image Processing", "Real-time"],
  },
  {
    id: "pydub",
    name: "Pydub",
    purpose: "Audio manipulation, format conversion",
    whyConsider: "Simple API, essential for audio preprocessing",
    install: "pip install pydub",
    priority: "high",
    phase: "phase-1",
    useCase: ["Audio Processing", "Format Conversion", "Audio Sync"],
  },

  // Phase 2 - Medium Priority
  {
    id: "vidgear",
    name: "VidGear",
    purpose: "High-performance video editing",
    whyConsider: "Modern MoviePy alternative, GPU-accelerated",
    install: "pip install vidgear",
    priority: "medium",
    phase: "phase-2",
    useCase: ["Video Editing", "Performance", "GPU Acceleration"],
  },
  {
    id: "pillow",
    name: "Pillow (PIL)",
    purpose: "Text overlays, watermarks",
    whyConsider: "Simple text rendering on frames",
    install: "pip install Pillow",
    priority: "medium",
    phase: "phase-2",
    useCase: ["Text Overlays", "Watermarks", "Image Processing"],
  },
  {
    id: "pysrt",
    name: "pysrt",
    purpose: "Subtitle/caption handling",
    whyConsider: "SRT file parsing and creation",
    install: "pip install pysrt",
    priority: "medium",
    phase: "phase-2",
    useCase: ["Subtitles", "Captions", "SRT Files"],
  },

  // Phase 3 - Specialized Use Cases
  {
    id: "librosa",
    name: "Librosa",
    purpose: "Audio analysis, beat detection",
    whyConsider: "Music-driven editing, tempo sync",
    install: "pip install librosa",
    priority: "specialized",
    phase: "phase-3",
    useCase: ["Audio Analysis", "Beat Detection", "Music Sync"],
  },
  {
    id: "imagemagick",
    name: "ImageMagick (Wand)",
    purpose: "Advanced text effects",
    whyConsider: "Professional graphics, shadows, gradients",
    install: "pip install Wand",
    priority: "specialized",
    phase: "phase-3",
    useCase: ["Text Effects", "Graphics", "Advanced Rendering"],
  },
  {
    id: "pyav",
    name: "PyAV",
    purpose: "Low-level FFmpeg access",
    whyConsider: "Fine-grained encoding control",
    install: "pip install av",
    priority: "specialized",
    phase: "phase-3",
    useCase: ["Encoding Control", "Low-level Access", "Fine-grained Control"],
  },
];

export const developerQuestions: Question[] = [
  {
    id: "q1",
    question: "Should we replace MoviePy with VidGear or FFmpeg-Python for better performance?",
    context: "MoviePy is currently used but slow for large files",
  },
  {
    id: "q2",
    question: "Do we need OpenCV for continuity frame extraction between shots?",
    context: "Frame extraction is a key feature for video continuity",
  },
  {
    id: "q3",
    question: "What level of text rendering do we need? (Simple Pillow vs Advanced ImageMagick)",
    context: "Text overlays are part of video editing workflow",
  },
  {
    id: "q4",
    question: "Is Pydub sufficient or do we need Librosa for advanced audio analysis?",
    context: "Audio processing and synchronization are important",
  },
  {
    id: "q5",
    question: "How many new dependencies are acceptable? (Balance features vs complexity)",
    context: "Managing dependencies affects project maintenance",
  },
];

export const useCases = [
  {
    title: "Frame Extraction",
    description: "Extract last frame of video for continuity",
    tools: ["FFmpeg-Python", "OpenCV"],
  },
  {
    title: "Text Overlays",
    description: "Add titles, credits, captions",
    tools: ["Pillow", "ImageMagick"],
  },
  {
    title: "Audio Sync",
    description: "Precise audio-video synchronization",
    tools: ["Pydub"],
  },
  {
    title: "Subtitles",
    description: "Auto-generate captions from narration",
    tools: ["pysrt"],
  },
  {
    title: "Beat Sync",
    description: "Sync video cuts to music beats",
    tools: ["Librosa"],
  },
  {
    title: "Performance",
    description: "Faster video merging and processing",
    tools: ["VidGear", "FFmpeg-Python"],
  },
];

export const phases = [
  {
    phase: "phase-1",
    title: "Phase 1 - Immediate",
    description: "Core performance improvements and essential features",
    tools: ["FFmpeg-Python", "OpenCV", "Pydub"],
  },
  {
    phase: "phase-2",
    title: "Phase 2 - Near-term",
    description: "Enhanced features and text rendering",
    tools: ["Pillow", "pysrt"],
  },
  {
    phase: "phase-3",
    title: "Phase 3 - Future",
    description: "Advanced features and specialized capabilities",
    tools: ["VidGear", "Librosa", "ImageMagick"],
  },
];
