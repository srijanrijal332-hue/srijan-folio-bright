import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { profile, typingRoles } from "@/lib/portfolio-data";
import { scrollToSection } from "./scroll";
import { TypingRoles } from "./TypingRoles";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-amber-50/40 to-yellow-50 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" />
      <div className="absolute top-1/4 -right-40 w-80 h-80 bg-amber-200/30 dark:bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="animate-[fadeIn_0.7s_ease-out]">
          <p className="text-stone-500 dark:text-stone-400 mb-3">Hello, I&apos;m</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
            {profile.firstName}{" "}
            <span className="text-stone-700 dark:text-stone-200">{profile.lastName}</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-stone-600 dark:text-stone-300">
            I work in{" "}
            <TypingRoles roles={typingRoles} />
          </p>

          <p className="mt-4 max-w-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            CS student in {profile.location}. Building web apps, WordPress sites, and
            learning data &amp; databases along the way.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-5 py-2.5 rounded-md bg-stone-800 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-medium hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors"
            >
              See my work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-5 py-2.5 rounded-md border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
            >
              Get in touch
            </button>
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 text-sm font-medium hover:border-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-md text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="hidden md:block shrink-0 animate-[fadeIn_1s_ease-out]">
          <div className="w-52 h-64 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-lg shadow-stone-300/30 dark:shadow-none rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="/profile.png"
              alt={profile.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-xs">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-[gentleBounce_2s_ease-in-out_infinite]" />
      </button>
    </section>
  );
}
