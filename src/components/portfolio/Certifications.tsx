import { Award } from "lucide-react";
import { certifications } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader align="left" eyebrow="Training & certs" title="Certificates" />
        </Reveal>

        <ul className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <li className="flex gap-3 p-4 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/60 dark:bg-stone-800/40">
                <Award className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-stone-900 dark:text-stone-50">{c.title}</h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    {c.org} · {c.year}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
