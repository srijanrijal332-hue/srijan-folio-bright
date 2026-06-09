export const profile = {
  name: "Srijan Rijal",
  firstName: "Srijan",
  lastName: "Rijal",
  title: "Frontend Developer",
  location: "Kathmandu, Nepal",
  email: "srijanrijal494@gmail.com",
  phone: "+977 9815351007",
  github: "https://github.com/OnlySri",
  linkedin: "https://linkedin.com/in/srijan-rijal-264a64259",
  linkedinHandle: "srijan-rijal-264a64259",
  githubHandle: "github.com/OnlySri",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Prof_CV_Srijan.pdf",
};

export const typingRoles = [
  "Frontend Development",
  "Data Science",
  "Database Management",
  "WordPress Development",
];

export const stats = [
  { label: "Internships", value: "2 roles" },
  { label: "Projects built", value: "10+" },
  { label: "Based in", value: "Kathmandu" },
];

export const aboutBio = `I'm a final-year Computer Science student from Kathmandu. Over the past year I've worked as a WordPress developer intern at SmartSites Nepal and built frontend pages for Hotel Grill Durbar — mostly React, real client work, and a lot of debugging along the way.`;

export const frontendBio = `I work with HTML, CSS, JavaScript, React, and TypeScript. Most of my recent work has been component-based UIs with Tailwind CSS — responsive layouts, forms, and pages that need to work on mobile first.`;

export const backendBio = `On the backend I use Node.js, Express, and PHP depending on the project. I've worked with MySQL and MongoDB for storage, REST APIs for data flow, and Postman for testing endpoints before they hit production.`;

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    summary: "UI work — from static pages to React apps.",
    skills: [
      { name: "HTML & CSS", detail: "Semantic markup, responsive layouts, flex/grid" },
      { name: "JavaScript", detail: "DOM, ES6+, async fetch, form handling" },
      { name: "TypeScript", detail: "Typed components, API responses, props" },
      { name: "React.js", detail: "Hooks, routing, reusable components" },
      { name: "Tailwind CSS", detail: "Utility-first styling, dark mode, mobile-first" },
      { name: "WordPress", detail: "Theme tweaks, Elementor, client sites" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    summary: "Server-side logic and APIs.",
    skills: [
      { name: "Node.js", detail: "Express servers, middleware, JSON APIs" },
      { name: "Express.js", detail: "Routes, auth flows, MongoDB integration" },
      { name: "PHP", detail: "CRUD apps, sessions, MySQL-backed forms" },
      { name: "REST APIs", detail: "Consuming and building HTTP endpoints" },
      { name: "Postman", detail: "Testing requests before frontend wiring" },
      { name: "Git", detail: "Branching, commits, GitHub collaboration" },
    ],
  },
  {
    id: "database",
    title: "Database Management",
    summary: "Storing and querying data properly.",
    skills: [
      { name: "MySQL", detail: "Relational schemas, joins, PHP integration" },
      { name: "MongoDB", detail: "Document models, MERN stack projects" },
      { name: "Oracle SQL", detail: "Foundations cert — queries, normalization" },
      { name: "phpMyAdmin / cPanel", detail: "Hosting DB setup, backups, exports" },
    ],
  },
  {
    id: "data",
    title: "Data Science",
    summary: "Early-stage — learning data handling alongside CS coursework.",
    skills: [
      { name: "SQL & data querying", detail: "Pulling and filtering datasets" },
      { name: "Spreadsheet analysis", detail: "Cleaning and summarizing project data" },
      { name: "Oracle Foundations", detail: "Database concepts from certified training" },
      { name: "Research & documentation", detail: "Reading docs, writing up findings" },
    ],
  },
];

export const projects = [
  {
    title: "GharNirman Contractor Evaluation System",
    description:
      "MERN stack platform for contractor evaluation, tender management, and real-time rating workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "MERN",
    link: "https://github.com/OnlySri/AI-ML-model-of-ghar-nirman",
    github: "https://github.com/OnlySri/AI-ML-model-of-ghar-nirman",
    website: "",
  },
  {
    title: "Bhabya Event Management Platform",
    description:
      "Event booking system with user authentication, admin dashboard, and responsive UI.",
    tech: ["PHP", "MySQL", "JavaScript"],
    category: "Web App",
    link: "https://github.com/OnlySri/Bhaby_Event",
    github: "https://github.com/OnlySri/Bhaby_Event",
    website: "",
  },
  {
    title: "Sathi Profile Management System",
    description:
      "CRUD-based profile management with secure authentication and clean record handling.",
    tech: ["PHP", "MySQL"],
    category: "Web App",
    link: "https://github.com/OnlySri/Srijan_Management",
    github: "https://github.com/OnlySri/Srijan_Management",
    website: "",
  },
  {
    title: "Hotel Grill Durbar Booking Pages",
    description:
      "React-based hotel booking interface with API integration and mobile-first responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    link: "https://hotelgrilldurbar.com.np",
    github: "",
    website: "https://hotelgrilldurbar.com.np",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal developer portfolio built with React, TanStack Start, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    link: "https://github.com/OnlySri/Srijanrijal_portfolio",
    github: "https://github.com/OnlySri/Srijanrijal_portfolio",
    website: "",
  },
];

export const experiences = [
  {
    role: "WordPress Developer Intern",
    company: "SmartSites Nepal",
    period: "2024 – 2025",
    location: "Kathmandu, Nepal",
    points: [
      "Customized WordPress themes and built client-facing pages.",
      "Handled SEO basics — internal links, redirects, on-page fixes.",
      "Migrated sites and managed DNS / hosting settings.",
      "Improved load times with caching and compressed images.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Hotel Grill Durbar",
    period: "2024 – 2025",
    location: "Remote",
    points: [
      "Built React pages for a hotel booking flow.",
      "Wired up APIs with TypeScript on the frontend.",
      "Made layouts work across phone, tablet, and desktop.",
      "Reused Tailwind components so the UI stayed consistent.",
    ],
  },
];

export const certifications = [
  { title: "WordPress Development Internship", org: "SmartSites Nepal", year: "2025" },
  { title: "MERN Stack Training", org: "Training Program", year: "2025" },
  { title: "Oracle Database Foundations", org: "Oracle", year: "2023" },
  { title: "Cisco Networking Academy", org: "Cisco", year: "2023" },
];

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];
