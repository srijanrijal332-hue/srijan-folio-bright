import { useEffect, useState } from "react";
import { skillCategories } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id);

  useEffect(() => {
    const sections = skillCategories
      .map((c) => document.getElementById(`skill-${c.id}`))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id.replace("skill-", ""));
        }
      },
      { rootMargin: "-30% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    document.getElementById(`skill-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <section id="skills" className="py-24 bg-stone-100 dark:bg-stone-950">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            align="left"
            eyebrow="What I use"
            title="Skills & tools"
            subtitle="Grouped by area — click a category or scroll through the list."
          />
        </Reveal>

        <div className="grid lg:grid-cols-[220px_1fr] gap-10 lg:gap-14 items-start">
          <aside className="lg:sticky lg:top-24 self-start">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:border-l lg:border-stone-300 dark:lg:border-stone-700">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`shrink-0 text-left px-4 py-2.5 text-sm font-medium transition-colors border-l-2 lg:border-l-2 ${
                    activeId === cat.id
                      ? "border-amber-600 text-amber-800 dark:text-amber-400 bg-amber-50/80 dark:bg-amber-950/40"
                      : "border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 hover:border-stone-300 dark:hover:border-stone-600"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </nav>
          </aside>

          <div className="space-y-12">
            {skillCategories.map((cat, ci) => (
              <Reveal key={cat.id} delay={ci * 60}>
                <div id={`skill-${cat.id}`} className="scroll-mt-28">
                  <div className="mb-5 pb-3 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                      {cat.title}
                    </h3>
                    <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{cat.summary}</p>
                  </div>

                  <ul className="divide-y divide-stone-200 dark:divide-stone-800 border border-stone-200 dark:border-stone-800 rounded-lg overflow-hidden bg-stone-50 dark:bg-stone-900">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 px-4 py-3.5 hover:bg-stone-100/80 dark:hover:bg-stone-800/50 transition-colors"
                      >
                        <span className="font-medium text-stone-800 dark:text-stone-200 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-sm text-stone-500 dark:text-stone-400 sm:text-right sm:max-w-[55%]">
                          {skill.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
