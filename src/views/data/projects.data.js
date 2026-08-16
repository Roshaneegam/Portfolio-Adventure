/**
 * ==============================================================================
 * EEGAM ROSHAN - FEATURED PROJECTS DATA
 * ==============================================================================
 */

export const PROJECTS_DATA = [
  {
    id: "ai-resume-intelligence",
    name: "AI Resume Intelligence & Career Hub",
    stack: "Python • Streamlit • Google Gemini AI • NLP • Scikit-Learn",
    realSrc: "images/projects/airport_ground_ops.avif",
    blueprintSrc: "images/projects/airport_ground_ops_blueprint.avif",
    year: "2026",
    category: "AI / Career Platform · Data Science",
    tags: ["Python", "Streamlit", "Google Gemini AI", "NLP", "Scikit-Learn", "Plotly", "Pandas"],
    role: "Lead AI & Full Stack Developer",
    context: "End-to-end AI-powered career platform evaluating candidate resumes against target job roles using Natural Language Processing and Google Gemini AI.",
    problem: "Job seekers lack multi-factor ATS compliance feedback, interactive resume rewriters tailored to job descriptions, and structured skill gap learning plans.",
    solution: "Developed a multi-feature AI career platform incorporating ATS compliance scoring, TF-IDF vector similarity matching, STAR-method bullet rewriters, cover letter generation, interview prep, and 4-week learning roadmaps.",
    highlights: [
      "Built multi-factor ATS compliance scoring engine & TF-IDF vector similarity matching",
      "Integrated Google Gemini AI for STAR-method bullet rewriting & custom cover letter generation",
      "Engineered role-based salary insights, tailored technical interview questions & 4-week learning roadmap",
      "Deployed interactive web application using Streamlit, Plotly visualization, and PDF/DOCX parsing",
    ],
    impact: "An end-to-end AI platform delivering data-backed ATS scoring, instant resume optimization, and customized learning roadmaps.",
    metrics: [
      { label: "AI Engine", value: "Gemini AI" },
      { label: "Vector Matching", value: "TF-IDF" },
    ],
    image: null,
    logo: null,
    links: {
      live: "https://ai-all-resume-analyzer.streamlit.app/",
      repo: "https://github.com/Roshaneegam/ai-all-resume-analyzer",
    },
    images: [],
    designSystem: null,
  },
  {
    id: "enterprise-face-recognition",
    name: "Enterprise Face Recognition & Attendance System",
    stack: "Python • CustomTkinter • OpenCV • face_recognition • FastAPI • AES-256",
    realSrc: "images/projects/mechanical_booking.avif",
    blueprintSrc: "images/projects/mechanical_booking_blueprint.avif",
    year: "2026",
    category: "Computer Vision · Security & Systems",
    tags: ["Python", "CustomTkinter", "OpenCV", "face_recognition", "FastAPI", "SQLite3", "AES-256"],
    role: "AI & Systems Developer",
    context: "Production-ready, multi-threaded AI facial recognition and automated attendance management application.",
    problem: "Traditional attendance systems suffer from proxy attendance, photo spoofing, unencrypted employee PII, and slow manual reporting processes.",
    solution: "Engineered a high-performance system with live webcam HUD tracking, AI anti-proxy liveness verification, single daily attendance enforcement, AES-256 Fernet PII encryption, FastAPI REST endpoints, and automated PDF/Excel export wizards.",
    highlights: [
      "Engineered real-time webcam HUD tracking with AI anti-proxy liveness verification to block photo/screen spoofing",
      "Implemented strict once-per-day single attendance enforcement and AES-256 Fernet PII field encryption",
      "Built RESTful API server powered by FastAPI, Uvicorn, and SQLite3 database architecture",
      "Created interactive Matplotlib analytics charts & PDF/Excel/CSV report generation wizard",
    ],
    impact: "A secure, production-grade facial recognition system providing zero-proxy attendance enforcement and encrypted audit reports.",
    metrics: [
      { label: "Liveness Check", value: "Anti-Proxy" },
      { label: "Encryption", value: "AES-256" },
    ],
    image: null,
    logo: null,
    links: {
      live: null,
      repo: "https://github.com/Roshaneegam/SmartAI-face-recog-system",
    },
    images: [],
    designSystem: null,
  },
];
