/**
 * ==============================================================================
 * EEGAM ROSHAN - PORTFOLIO CONFIGURATION
 * ==============================================================================
 */

export const PERSONAL_INFO = {
  fullName: "Eegam Roshan",
  shortName: "Roshan",
  title: "Data Science Student & Web Developer",
  handle: "@always___roshan",
  bio: "B.Tech Computer Science Engineering (Data Science) student at IARE Hyderabad. Passionate about AI/NLP, Data Structures, Algorithms, and Full Stack Web Development.",
  location: "Hyderabad, India",
  canonicalUrl: "https://roshan-eegam.vercel.app",
};

export const CONTACT_INFO = {
  email: "roshaneegam@gmail.com",
  whatsapp: "https://wa.me/919281032900",
  whatsappLabel: "+91 9281032900",
  linkedin: "https://linkedin.com/in/roshan-eegam-6a531a32b",
  github: "https://github.com/Roshaneegam",
  instagram: "https://instagram.com/always___roshan",
  cvPath: "/resume.pdf",
};

export const TECH_STACK = {
  title: "My Tech Stack & Skills",
  description:
    "A comprehensive overview of my programming languages, web development stack, databases, tools, and competitive programming achievements.",
  categories: [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C / C++"],
    },
    {
      name: "Web Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"],
    },
    {
      name: "Databases & Storage",
      skills: ["MySQL", "SQL File Handling"],
    },
    {
      name: "AI, NLP & Machine Learning",
      skills: [
        "Natural Language Processing (NLP)",
        "TF-IDF Vectorization",
        "Cosine Similarity",
        "Scikit-learn",
        "Text Preprocessing",
      ],
    },
    {
      name: "Tools & Deployment",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Linux"],
    },
    {
      name: "Coding Profiles & Problem Solving",
      skills: [
        "LeetCode (50+ Solved)",
        "CodeChef (250+ Solved)",
        "HackerRank (2-Star Python)",
      ],
    },
  ],
};

export const ABOUT_SECTIONS = {
  productThinking: {
    title: "Data Science & Engineering Mindset",
    content:
      "I bridge data science analytics and software engineering principles. My focus is building intelligent systems like AI resume screeners, algorithm-driven route optimizers, and clean web applications.",
  },

  education: {
    title: "Education & Academics",
    content:
      "Currently pursuing B.Tech CSE (Data Science) at Institute of Aeronautical Engineering (IARE), Hyderabad with a strong academic CGPA of 8.1.",
    experience: {
      role: "B.Tech CSE (Data Science) — IARE Hyderabad (2024–2028)",
      achievement: [
        "Current CGPA: 8.1 (IV-Semester).",
        "Narayana Junior College — Intermediate (2022–2024): 965 / 1000.",
        "Blue Bells High School — SSC (2022): 9.8 GPA.",
      ],
    },
  },

  experience: {
    title: "Certificates & Achievements",
    content:
      "Active participant in competitive hackathons, algorithmic coding challenges, and professional web development training.",
    experience: {
      role: "Hackathon Finalist & Developer",
      achievement: [
        "Smart India Hackathon (SIH 2025): Selected for SIH 2nd Round.",
        "Codesurfers Hackathon (2025): Participated in 36-hour coding sprint.",
        "Cognifyz Technologies (2025): Web Development Internship Offer.",
        "CodeChef: 250+ problems solved | LeetCode: 50+ problems solved.",
      ],
    },
  },

  curiosity: {
    title: "Curiosity & Problem Solving",
    content:
      "I love tackling algorithmic problems on CodeChef (250+ solved) and LeetCode (50+ solved). I continuously learn new NLP models, Java graph algorithms, and modern frontend frameworks.",
  },

  growth: {
    title: "Consistency & Vision",
    content:
      "My goal is to evolve into a versatile Data Scientist and Full Stack Engineer by building high-impact AI applications, mastering system design, and shipping clean software.",
  },
};

export const SEO_METADATA = {
  defaultTitle: `${PERSONAL_INFO.fullName} | ${PERSONAL_INFO.title}`,
  titleTemplate: `%s — ${PERSONAL_INFO.shortName}`,
  description: `${PERSONAL_INFO.fullName} is a ${PERSONAL_INFO.title} based in ${PERSONAL_INFO.location}, specializing in AI/NLP, Data Structures, and Web Development.`,
  keywords: [
    PERSONAL_INFO.fullName,
    PERSONAL_INFO.shortName,
    "Eegam Roshan",
    "Data Science Student",
    "Python Developer",
    "Java Developer",
    "NLP Developer",
    "Hyderabad Software Engineer",
    "IARE Hyderabad",
  ].join(", "),
  ogImage: "/images/og-cover.webp",
};
