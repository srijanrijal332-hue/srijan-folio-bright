import { MapPin } from "lucide-react";
import { experiences } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-stone-100 dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader align="left" eyebrow="Where I've worked" title="Experience" />
        </Reveal>

        <div className="max-w-2xl space-y-10">
          {experiences.map((e, i) => (
            <Reveal key={e.company} delay={i * 80}>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-stone-900 dark:text-stone-50">{e.role}</h3>
                  <span className="text-sm text-stone-500 dark:text-stone-400">{e.period}</span>
                </div>
                <p className="text-sm text-amber-800 dark:text-amber-400 font-medium">{e.company}</p>
                <p className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-400 mt-1 mb-3">
                  <MapPin className="w-3 h-3" /> {e.location}
                </p>
                <ul className="space-y-2">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-stone-400"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
