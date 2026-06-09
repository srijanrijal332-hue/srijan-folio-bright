import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Download } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { scrollToSection } from "./scroll";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") === "dark";
    setDark(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  useEffect(() => {
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

  const scrollTo = (href: string) => {
    setOpen(false);
    scrollToSection(href.slice(1));
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-stone-50/95 dark:bg-stone-950/95 backdrop-blur border-b border-stone-200/80 dark:border-stone-800/80"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="font-semibold text-stone-900 dark:text-stone-100"
        >
          Srijan Rijal
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.slice(1).map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className={`text-sm transition-colors ${
                active === l.href.slice(1)
                  ? "text-stone-900 dark:text-stone-100 font-medium"
                  : "text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 mr-1 text-sm font-medium rounded-md border border-stone-300 dark:border-stone-600 text-stone-700 dark:text-stone-300 hover:border-amber-600 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-stone-600 dark:text-stone-400 hover:bg-stone-200/60 dark:hover:bg-stone-800"
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="lg:hidden p-2 rounded-md text-stone-600 dark:text-stone-400"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 px-4 py-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`text-left px-2 py-2 text-sm rounded ${
                  active === l.href.slice(1)
                    ? "text-stone-900 dark:text-stone-100 font-medium"
                    : "text-stone-500 dark:text-stone-400"
                }`}
              >
                {l.label}
              </button>
            ))}
            <a
              href={profile.resumeUrl}
              download={profile.resumeFileName}
              className="flex items-center gap-2 px-2 py-2 text-sm text-stone-700 dark:text-stone-300"
              onClick={() => setOpen(false)}
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
