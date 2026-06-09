import { ArrowRight } from "lucide-react";
import { aboutBio, backendBio, frontendBio, profile, stats } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { scrollToSection } from "./scroll";

export function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader align="left" eyebrow="A bit about me" title="About" />
        </Reveal>

        <div className="grid lg:grid-cols-[240px_1fr] gap-10 items-start">
          <Reveal>
            <div className="mx-auto lg:mx-0 w-56 h-72 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 shadow-md">
              <img
                src="/profile.png"
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={80}>
              <div className="flex flex-wrap gap-6 mb-8 text-sm">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-stone-500 dark:text-stone-400">{s.label}</p>
                    <p className="font-semibold text-stone-900 dark:text-stone-100">{s.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6">{aboutBio}</p>
            </Reveal>

            <Reveal delay={160}>
              <div className="space-y-4 mb-8 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                <p>
                  <span className="font-medium text-stone-900 dark:text-stone-100">Frontend — </span>
                  {frontendBio}
                </p>
                <p>
                  <span className="font-medium text-stone-900 dark:text-stone-100">Backend — </span>
                  {backendBio}
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-400 hover:gap-3 transition-all"
              >
                Contact me <ArrowRight className="w-4 h-4" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
