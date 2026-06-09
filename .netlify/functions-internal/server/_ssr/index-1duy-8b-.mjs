import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useInView } from "../_libs/react-intersection-observer.mjs";
import { D as Download, S as Sun, M as Moon, X, a as Menu, G as Github, L as Linkedin, b as Mail, C as ChevronDown, A as ArrowRight, E as ExternalLink, c as MapPin, d as Award, P as Phone, e as Send, f as ArrowUp } from "../_libs/lucide-react.mjs";
const profile = {
  name: "Srijan Rijal",
  firstName: "Srijan",
  lastName: "Rijal",
  location: "Kathmandu, Nepal",
  email: "srijanrijal494@gmail.com",
  phone: "+977 9815351007",
  github: "https://github.com/OnlySri",
  linkedin: "https://linkedin.com/in/srijan-rijal-264a64259",
  linkedinHandle: "srijan-rijal-264a64259",
  githubHandle: "github.com/OnlySri",
  resumeUrl: "/resume.pdf",
  resumeFileName: "Prof_CV_Srijan.pdf"
};
const typingRoles = [
  "Frontend Development",
  "Data Science",
  "Database Management",
  "WordPress Development"
];
const stats = [
  { label: "Internships", value: "2 roles" },
  { label: "Projects built", value: "10+" },
  { label: "Based in", value: "Kathmandu" }
];
const aboutBio = `I'm a final-year Computer Science student from Kathmandu. Over the past year I've worked as a WordPress developer intern at SmartSites Nepal and built frontend pages for Hotel Grill Durbar — mostly React, real client work, and a lot of debugging along the way.`;
const frontendBio = `I work with HTML, CSS, JavaScript, React, and TypeScript. Most of my recent work has been component-based UIs with Tailwind CSS — responsive layouts, forms, and pages that need to work on mobile first.`;
const backendBio = `On the backend I use Node.js, Express, and PHP depending on the project. I've worked with MySQL and MongoDB for storage, REST APIs for data flow, and Postman for testing endpoints before they hit production.`;
const skillCategories = [
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
      { name: "WordPress", detail: "Theme tweaks, Elementor, client sites" }
    ]
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
      { name: "Git", detail: "Branching, commits, GitHub collaboration" }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    summary: "Storing and querying data properly.",
    skills: [
      { name: "MySQL", detail: "Relational schemas, joins, PHP integration" },
      { name: "MongoDB", detail: "Document models, MERN stack projects" },
      { name: "Oracle SQL", detail: "Foundations cert — queries, normalization" },
      { name: "phpMyAdmin / cPanel", detail: "Hosting DB setup, backups, exports" }
    ]
  },
  {
    id: "data",
    title: "Data Science",
    summary: "Early-stage — learning data handling alongside CS coursework.",
    skills: [
      { name: "SQL & data querying", detail: "Pulling and filtering datasets" },
      { name: "Spreadsheet analysis", detail: "Cleaning and summarizing project data" },
      { name: "Oracle Foundations", detail: "Database concepts from certified training" },
      { name: "Research & documentation", detail: "Reading docs, writing up findings" }
    ]
  }
];
const projects = [
  {
    title: "GharNirman Contractor Evaluation System",
    description: "MERN stack platform for contractor evaluation, tender management, and real-time rating workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "MERN",
    link: "https://github.com/OnlySri/AI-ML-model-of-ghar-nirman",
    github: "https://github.com/OnlySri/AI-ML-model-of-ghar-nirman",
    website: ""
  },
  {
    title: "Bhabya Event Management Platform",
    description: "Event booking system with user authentication, admin dashboard, and responsive UI.",
    tech: ["PHP", "MySQL", "JavaScript"],
    category: "Web App",
    link: "https://github.com/OnlySri/Bhaby_Event",
    github: "https://github.com/OnlySri/Bhaby_Event",
    website: ""
  },
  {
    title: "Sathi Profile Management System",
    description: "CRUD-based profile management with secure authentication and clean record handling.",
    tech: ["PHP", "MySQL"],
    category: "Web App",
    link: "https://github.com/OnlySri/Srijan_Management",
    github: "https://github.com/OnlySri/Srijan_Management",
    website: ""
  },
  {
    title: "Hotel Grill Durbar Booking Pages",
    description: "React-based hotel booking interface with API integration and mobile-first responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    link: "https://hotelgrilldurbar.com.np",
    github: "",
    website: "https://hotelgrilldurbar.com.np"
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio built with React, TanStack Start, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    category: "Web App",
    link: "https://github.com/OnlySri/Srijanrijal_portfolio",
    github: "https://github.com/OnlySri/Srijanrijal_portfolio",
    website: ""
  }
];
const experiences = [
  {
    role: "WordPress Developer Intern",
    company: "SmartSites Nepal",
    period: "2024 – 2025",
    location: "Kathmandu, Nepal",
    points: [
      "Customized WordPress themes and built client-facing pages.",
      "Handled SEO basics — internal links, redirects, on-page fixes.",
      "Migrated sites and managed DNS / hosting settings.",
      "Improved load times with caching and compressed images."
    ]
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
      "Reused Tailwind components so the UI stayed consistent."
    ]
  }
];
const certifications = [
  { title: "WordPress Development Internship", org: "SmartSites Nepal", year: "2025" },
  { title: "MERN Stack Training", org: "Training Program", year: "2025" },
  { title: "Oracle Database Foundations", org: "Oracle", year: "2023" },
  { title: "Cisco Networking Academy", org: "Cisco", year: "2023" }
];
const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certificates" },
  { href: "#contact", label: "Contact" }
];
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("hero");
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [dark, setDark] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };
  const scrollTo = (href) => {
    setOpen(false);
    scrollToSection(href.slice(1));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur border-b border-stone-200/80 dark:border-stone-800/80" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-6xl mx-auto px-6 h-14 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => scrollTo("#hero"),
              className: "font-semibold text-stone-900 dark:text-stone-100",
              children: "Srijan Rijal"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:flex items-center gap-6", children: navLinks.slice(1).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => scrollTo(l.href),
              className: `text-sm transition-colors ${active === l.href.slice(1) ? "text-stone-900 dark:text-stone-100 font-medium" : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"}`,
              children: l.label
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: profile.resumeUrl,
                download: profile.resumeFileName,
                className: "hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 mr-1 text-sm font-medium rounded-md border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                  " Resume"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleTheme,
                "aria-label": "Toggle theme",
                className: "p-2 rounded-md text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800",
                children: dark ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "lg:hidden p-2 rounded-md text-stone-600 dark:text-stone-400",
                onClick: () => setOpen(!open),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
          navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => scrollTo(l.href),
              className: `text-left px-2 py-2 text-sm rounded ${active === l.href.slice(1) ? "text-stone-900 dark:text-stone-100 font-medium" : "text-stone-500 dark:text-stone-400"}`,
              children: l.label
            },
            l.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: profile.resumeUrl,
              download: profile.resumeFileName,
              className: "flex items-center gap-2 px-2 py-2 text-sm text-stone-700 dark:text-stone-300",
              onClick: () => setOpen(false),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                " Download Resume"
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function TypingRoles({ roles }) {
  const [roleIndex, setRoleIndex] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [deleting, setDeleting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 45 : 85
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-baseline min-h-[1.4em]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-700 dark:text-amber-400 font-semibold", children: text }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block w-[2px] h-[0.9em] bg-amber-600 dark:bg-amber-400 animate-pulse align-middle" })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50/40 to-yellow-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -right-40 w-80 h-80 bg-amber-200/30 dark:bg-amber-700/10 rounded-full blur-3xl pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-[fadeIn_0.7s_ease-out]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-stone-500 dark:text-stone-400 mb-3", children: "Hello, I'm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight", children: [
              profile.firstName,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-stone-700 dark:text-stone-200", children: profile.lastName })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-lg md:text-xl text-stone-600 dark:text-stone-300", children: [
              "I work in",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(TypingRoles, { roles: typingRoles })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-lg text-stone-600 dark:text-stone-400 leading-relaxed", children: [
              "CS student in ",
              profile.location,
              ". Building web apps, WordPress sites, and learning data & databases along the way."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => scrollToSection("projects"),
                  className: "px-5 py-2.5 rounded-md bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-medium hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors",
                  children: "See my work"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => scrollToSection("contact"),
                  className: "px-5 py-2.5 rounded-md border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors",
                  children: "Get in touch"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: profile.resumeUrl,
                  download: profile.resumeFileName,
                  className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" }),
                    " Resume"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: profile.github,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors",
                  "aria-label": "GitHub",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: profile.linkedin,
                  target: "_blank",
                  rel: "noreferrer",
                  className: "p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors",
                  "aria-label": "LinkedIn",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `mailto:${profile.email}`,
                  className: "p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors",
                  "aria-label": "Email",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block shrink-0 animate-[fadeIn_1s_ease-out]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-52 h-64 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-lg shadow-stone-300/30 dark:shadow-none rotate-2 hover:rotate-0 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/profile.png",
              alt: profile.name,
              className: "w-full h-full object-cover object-top"
            }
          ) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => scrollToSection("about"),
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors",
            "aria-label": "Scroll to about section",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "Scroll" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-5 h-5 animate-[gentleBounce_2s_ease-in-out_infinite]" })
            ]
          }
        )
      ]
    }
  );
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: { transitionDelay: `${delay}ms` },
      className: `transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`,
      children
    }
  );
}
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${align === "center" ? "text-center" : "text-left"} mb-12 md:mb-14`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-stone-500 dark:text-stone-400 text-sm mb-1", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-50", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "p",
      {
        className: `mt-2 text-sm text-stone-500 dark:text-stone-400 max-w-xl ${align === "center" ? "mx-auto" : ""}`,
        children: subtitle
      }
    )
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-24 bg-stone-50 dark:bg-stone-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "A bit about me", title: "About" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[240px_1fr] gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto lg:mx-0 w-56 h-72 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: "/profile.png",
          alt: profile.name,
          className: "w-full h-full object-cover object-top"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-6 mb-8 text-sm", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-stone-500 dark:text-stone-400", children: s.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-stone-900 dark:text-stone-100", children: s.value })
        ] }, s.label)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-stone-600 dark:text-stone-300 leading-relaxed mb-6", children: aboutBio }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 160, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 mb-8 text-sm text-stone-600 dark:text-stone-300 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-stone-900 dark:text-stone-100", children: "Frontend — " }),
            frontendBio
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-stone-900 dark:text-stone-100", children: "Backend — " }),
            backendBio
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => scrollToSection("contact"),
            className: "inline-flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-400 hover:gap-3 transition-all",
            children: [
              "Contact me ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        ) })
      ] })
    ] })
  ] }) });
}
function Skills() {
  const [activeId, setActiveId] = reactExports.useState(skillCategories[0].id);
  reactExports.useEffect(() => {
    const sections = skillCategories.map((c) => document.getElementById(`skill-${c.id}`)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id.replace("skill-", ""));
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  const scrollToCategory = (id) => {
    document.getElementById(`skill-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "py-24 bg-stone-100 dark:bg-stone-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeader,
      {
        align: "left",
        eyebrow: "What I use",
        title: "Skills & tools",
        subtitle: "Grouped by area — click a category or scroll through the list."
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:sticky lg:top-24 self-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:border-l lg:border-stone-300 dark:lg:border-stone-700", children: skillCategories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => scrollToCategory(cat.id),
          className: `shrink-0 text-left px-4 py-2.5 text-sm font-medium transition-colors border-l-2 lg:border-l-2 ${activeId === cat.id ? "border-amber-600 text-amber-800 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/40" : "border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:border-stone-300 dark:hover:border-stone-600"}`,
          children: cat.title
        },
        cat.id
      )) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: skillCategories.map((cat, ci) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: ci * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: `skill-${cat.id}`, className: "scroll-mt-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 pb-3 border-b border-stone-200 dark:border-stone-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-stone-900 dark:text-stone-50", children: cat.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-stone-500 dark:text-stone-400", children: cat.summary })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden bg-stone-50 dark:bg-stone-900", children: cat.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 px-4 py-3.5 hover:bg-stone-100/80 dark:hover:bg-stone-800/50 transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-stone-800 dark:text-stone-200 text-sm", children: skill.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-stone-500 dark:text-stone-400 sm:text-right sm:max-w-[55%]", children: skill.detail })
            ]
          },
          skill.name
        )) })
      ] }) }, cat.id)) })
    ] })
  ] }) });
}
const filters = ["All", "MERN", "Web App"];
function ProjectLink({
  href,
  label,
  icon: Icon,
  external = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href,
      target: external ? "_blank" : void 0,
      rel: external ? "noreferrer" : void 0,
      className: "inline-flex items-center justify-center gap-1.5 min-h-10 px-3 py-2 rounded-md text-sm font-medium border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-400 transition-colors w-full sm:w-auto",
      children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-3.5 h-3.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: label }),
        external && !Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 shrink-0" })
      ]
    }
  );
}
function Projects() {
  const [active, setActive] = reactExports.useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "py-16 sm:py-20 md:py-24 bg-stone-50 dark:bg-stone-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Selected work", title: "Projects" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 80, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setActive(f),
        className: `shrink-0 px-3 py-1.5 rounded-md text-sm transition-colors ${active === f ? "bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-900" : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"}`,
        children: f
      },
      f
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5", children: filtered.map((p, i) => {
      const detailLink = p.link || p.website || p.github;
      const showGithub = p.github && p.github !== detailLink;
      const showWebsite = p.website && p.website !== detailLink;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "h-full flex flex-col p-4 sm:p-5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-800/30 hover:border-stone-300 dark:hover:border-stone-600 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-stone-500 dark:text-stone-400 mb-2", children: p.category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base sm:text-lg font-semibold text-stone-900 dark:text-stone-50 mb-2 leading-snug", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 flex-1", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "px-2 py-0.5 text-xs rounded bg-stone-200/80 dark:bg-stone-700/80 text-stone-700 dark:text-stone-300",
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 border-t border-stone-200/80 dark:border-stone-700/80 flex flex-col sm:flex-row sm:flex-wrap gap-2", children: [
          detailLink ? /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectLink, { href: detailLink, label: "Details" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center justify-center gap-1.5 min-h-10 px-3 py-2 rounded-md text-sm font-medium border border-dashed border-stone-300 dark:border-stone-700 text-stone-400 dark:text-stone-600 w-full sm:w-auto", children: [
            "Details ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-3.5 h-3.5 shrink-0" })
          ] }),
          showGithub && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectLink, { href: p.github, label: "GitHub", icon: Github }),
          showWebsite && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectLink, { href: p.website, label: "Website", icon: ExternalLink })
        ] })
      ] }) }, p.title);
    }) })
  ] }) });
}
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "experience", className: "py-24 bg-stone-100 dark:bg-stone-950", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Where I've worked", title: "Experience" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl space-y-10", children: experiences.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-2 mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-stone-900 dark:text-stone-50", children: e.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-stone-500 dark:text-stone-400", children: e.period })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-amber-800 dark:text-amber-400 font-medium", children: e.company }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 mt-1 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
        " ",
        e.location
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: e.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "text-sm text-stone-600 dark:text-stone-300 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-stone-400",
          children: p
        },
        p
      )) })
    ] }) }, e.company)) })
  ] }) });
}
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "certifications", className: "py-24 bg-stone-50 dark:bg-stone-900", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { align: "left", eyebrow: "Training & certs", title: "Certificates" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-4 max-w-3xl", children: certifications.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 60, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 p-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-800/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-medium text-stone-900 dark:text-stone-50", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-stone-500 dark:text-stone-400 mt-1", children: [
          c.org,
          " · ",
          c.year
        ] })
      ] })
    ] }) }, c.title)) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 bg-stone-900 text-stone-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left mb-12 md:mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-stone-400 text-sm mb-1", children: "Say hello" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-stone-50", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-stone-400 max-w-xl", children: "Open for internships and junior frontend roles. Email works best." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `mailto:${profile.email}`,
            className: "flex items-center gap-3 text-stone-300 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4 shrink-0" }),
              profile.email
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `tel:${profile.phone.replace(/\s/g, "")}`,
            className: "flex items-center gap-3 text-stone-300 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 shrink-0" }),
              profile.phone
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: profile.linkedin,
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-3 text-stone-300 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4 shrink-0" }),
              profile.linkedinHandle
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: profile.github,
            target: "_blank",
            rel: "noreferrer",
            className: "flex items-center gap-3 text-stone-300 hover:text-white transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-4 h-4 shrink-0" }),
              profile.githubHandle
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit: (e) => e.preventDefault(),
          className: "space-y-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-stone-400 mb-1.5", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "text",
                  className: "w-full px-3 py-2 rounded-md bg-stone-800 border border-stone-700 focus:border-amber-600 focus:outline-none text-sm",
                  placeholder: "Your name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-stone-400 mb-1.5", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  className: "w-full px-3 py-2 rounded-md bg-stone-800 border border-stone-700 focus:border-amber-600 focus:outline-none text-sm",
                  placeholder: "you@example.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs text-stone-400 mb-1.5", children: "Message" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  rows: 4,
                  className: "w-full px-3 py-2 rounded-md bg-stone-800 border border-stone-700 focus:border-amber-600 focus:outline-none text-sm resize-none",
                  placeholder: "What's this about?"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-500 text-stone-950 text-sm font-medium transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                  " Send"
                ]
              }
            )
          ]
        }
      ) })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-stone-950 text-stone-400 py-8 border-t border-stone-800", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Srijan Rijal. Built with React & Tailwind."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "inline-flex items-center gap-1.5 text-sm hover:text-white transition",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "w-4 h-4" }),
          " Back to top"
        ]
      }
    )
  ] }) });
}
function HireMe() {
  const [show, setShow] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: () => scrollToSection("contact"),
      className: `fixed bottom-5 right-5 z-40 px-4 py-2.5 rounded-md bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-900 text-sm font-medium shadow-lg hover:opacity-90 transition-all ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`,
      children: "Contact"
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HireMe, {})
  ] });
}
export {
  Index as component
};
