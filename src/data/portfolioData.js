export const personalInfo = {
  name: "Karthikeyan S A",
  role: "AI & Data Science Undergrad | Python Backend Developer",
  tagline: "Build. Debug. Deploy.",
  email: "karthikeyansa8@gmail.com",
  phone: "+91 7358996885",
  location: "Tamil Nadu, India",
  college: "K S Rangasamy College of Technology",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  graduationDate: "April 2026",
  cgpa: "7.78",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/avatar.png",
  aboutBio: `I hold a B.Tech in AI & Data Science from K S Rangasamy College of Technology . As a backend-focused developer skilled in Python, Django, Django REST Framework, PostgreSQL, and React.js, I possess a strong grounding in Data Structures, Algorithms, and System Design. I thrive on solving real backend challenges — architecting robust auth systems, implementing high-throughput caching, and building clean, scalable APIs.`,
  highlights: [
    { title: "Backend Architecture", desc: "Crafting RESTful APIs and database schemas with Django & DRF." },
    { title: "Performance Optimization", desc: "Speeding up query execution, Redis caching, and algorithm efficiency." },
    { title: "System Reliability", desc: "Implementing structured logging, fault-tolerant file storage, and role-based security." }
  ]
};

export const experienceData = [
  {
    id: 1,
    role: "Backend Developer Intern",
    company: "Learn Basics",
    location: "Salem, TN",
    period: "Sep 2024 – Nov 2024",
    type: "Internship",
    points: [
      "Collaborated in an agile team to build robust Python/Django backend features for core educational services.",
      "Implemented fault-tolerant error handling mechanisms and structured logging to increase system observability.",
      "Applied Object-Oriented Programming (OOP) principles and algorithmic optimizations to debug critical backend issues.",
      "Maintained strict Git workflows, pull request code reviews, and modular code architecture."
    ],
    skills: ["Python", "SQL", "Django", "REST APIs", "Git", "OOP", "Debugging", "Web Scrapping"]
  }
];

export const projectsData = [
  {
    id: "placement-track-desk",
    title: "PlacementTrackDesk",
    period: "Mar 2026 - Apr 2026",
    badge: "Featured System",
    description: "Comprehensive task assignment and placement tracking platform engineered to eliminate manual spreadsheets with real-time tracking, Redis caching, and role-based controls.",
    highlights: [
      "Role-Based Access Control (RBAC) separating Admin & Student capabilities.",
      "Redis caching on high-traffic analytics dashboards reducing query latency.",
      "Cloudinary integration for seamless media upload and image processing.",
      "Normalized PostgreSQL schema with automated deadline enforcement."
    ],
    techStack: ["Django", "PostgreSQL", "Redis", "Cloudinary", "Python", "REST APIs"],
    githubUrl: "https://github.com/karthikeyansa8/Digital-Task-Management-System-",
    liveUrl: "#",
    featured: true
  },
  {
    id: "exam-dupe-shield",
    title: "Exam Dupe Shield",
    period: "Oct 2024 – Nov 2024",
    badge: "Automation & Image Compare",
    description: "Intelligent Discord bot automating duplicate-answer-sheet detection using computer vision algorithms and perceptual hashing.",
    highlights: [
      "Perceptual hashing (ImageHash) with an 85% similarity threshold for accurate duplicate detection.",
      "MinIO object storage integration for fault-tolerant and isolated image document storage.",
      "Automated CSV inspection report generation delivered directly inside Discord channels.",
      "OpenCV preprocessing pipeline to handle varying image rotations and lightning conditions."
    ],
    techStack: ["Python", "OpenCV", "ImageHash", "Discord API", "MinIO", "CSV Automation"],
    githubUrl: "https://github.com/karthikeyansa8/Discord_bot",
    liveUrl: "#",
    featured: true
  }
];

export const skillCategories = ["All", "Languages", "Frameworks", "Databases", "Tools"];

export const skillsData = [
  // Languages
  { name: "Python", category: "Languages", icon: "Code2", level: 92 },
  { name: "SQL", category: "Languages", icon: "Database", level: 88 },
  { name: "JavaScript", category: "Languages", icon: "FileCode", level: 82 },
  { name: "HTML5", category: "Languages", icon: "Layout", level: 90 },
  { name: "CSS3", category: "Languages", icon: "Palette", level: 85 },
  { name: "Linux", category: "Languages", icon: "Terminal", level: 80 },
  { name: "NoSQL", category: "Languages", icon: "Layers", level: 78 },

  // Frameworks
  { name: "Django", category: "Frameworks", icon: "Server", level: 90 },
  { name: "Django REST Framework", category: "Frameworks", icon: "Cpu", level: 92 },
  { name: "React.js", category: "Frameworks", icon: "Atom", level: 80 },
  { name: "Bootstrap", category: "Frameworks", icon: "Grid", level: 85 },

  // Databases
  { name: "PostgreSQL", category: "Databases", icon: "Database", level: 88 },
  { name: "MongoDB", category: "Databases", icon: "HardDrive", level: 76 },

  // Tools
  { name: "Git", category: "Tools", icon: "GitBranch", level: 90 },
  { name: "GitHub", category: "Tools", icon: "Github", level: 92 },
  { name: "Docker", category: "Tools", icon: "Box", level: 75 },
  { name: "Cursor", category: "Tools", icon: "Sparkles", level: 88 },
  { name: "GitHub Copilot", category: "Tools", icon: "Bot", level: 85 }
];

export const certificationsData = [
  {
    id: "python-fundamentals-1",
    title: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    date: "August 19, 2024",
    badge: "Verified Certificate",
    pdfUrl: "/certificates/python_fundamentals_part1.pdf",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Programming",
    skills: ["Python Basics", "Control Flow", "Functions", "Algorithms", "Problem Solving"],
    description: "Core computational programming in Python, algorithmic logic, structured control flows, function modularity, and standard library utilities."
  },
  {
    id: "python-fundamentals-2",
    title: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    date: "August 19, 2024",
    badge: "Verified Certificate",
    pdfUrl: "/certificates/python_fundamentals_part2.pdf",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Programming",
    skills: ["OOP", "Recursion", "Data Structures", "File I/O", "Exception Handling"],
    description: "Advanced Python engineering covering Object-Oriented Programming (OOP) paradigms, complex data structures, file I/O operations, and error handling."
  },
  {
    id: "dbms-part-1",
    title: "Database Management System Part - 1",
    issuer: "Infosys Springboard",
    date: "August 19, 2024",
    badge: "Verified Certificate",
    pdfUrl: "/certificates/dbms_part1.pdf",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Databases",
    skills: ["RDBMS", "SQL DDL/DML", "ER Modeling", "Schema Design", "Relational Algebra"],
    description: "Relational database foundation covering Entity-Relationship modeling, relational algebra, table schema design, and core SQL queries."
  },
  {
    id: "dbms-part-2",
    title: "Database Management System Part - 2",
    issuer: "Infosys Springboard",
    date: "August 19, 2024",
    badge: "Verified Certificate",
    pdfUrl: "/certificates/dbms_part2.pdf",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Databases",
    skills: ["Normalization", "SQL Joins", "Transactions & ACID", "Indexing", "Query Optimization"],
    description: "Advanced database concepts including normalization forms (1NF-3NF/BCNF), complex multi-table joins, ACID transactions, and query indexing."
  },
  {
    id: "nosql-databases",
    title: "Introduction to NoSQL databases",
    issuer: "Infosys Springboard",
    date: "August 19, 2024",
    badge: "Verified Certificate",
    pdfUrl: "/certificates/nosql_databases.pdf",
    verifyUrl: "https://verify.onwingspan.com",
    category: "Databases",
    skills: ["NoSQL", "Document Stores", "Key-Value Stores", "Database Architecture", "Scalability"],
    description: "Verified foundational expertise in non-relational database models, data organization, document structures, and high-performance querying."
  }
];

export const socialProfiles = [
  {
    name: "LinkedIn",
    username: "Karthikeyan S A",
    url: "https://www.linkedin.com/in/karthikeyan-s-a-4ab1a527b/",
    icon: "Linkedin",
    color: "from-blue-600 to-cyan-500",
    description: "Professional updates, career highlights & network"
  },
  {
    name: "GitHub",
    username: "@karthikeyansa",
    url: "https://github.com/karthikeyansa8",
    icon: "Github",
    color: "from-purple-600 to-slate-700",
    description: "Open-source projects, Python backends & bot repositories"
  },
  // {
  //   name: "LeetCode",
  //   username: "karthikeyansa",
  //   url: "https://leetcode.com/u/karthikeyansa",
  //   icon: "Code",
  //   color: "from-amber-500 to-orange-600",
  //   description: "Problem solving, Data Structures & Algorithms practice"
  // },
  // {
  //   name: "HackerRank",
  //   username: "karthikeyansa",
  //   url: "https://www.hackerrank.com/profile/karthikeyansa",
  //   icon: "Award",
  //   color: "from-emerald-500 to-teal-600",
  //   description: "Python & SQL skill badges & coding challenges"
  // }
];
