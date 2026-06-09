import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const filters = ["All", "MERN", "Web App"] as const;

function ProjectLink({
  href,
  label,
  icon: Icon,
  external = true,
}: {
  href: string;
  label: string;
  icon?: typeof ExternalLink;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-1.5 min-h-10 px-3 py-2 rounded-md text-sm font-medium border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-amber-500 hover:text-amber-800 dark:hover:text-amber-400 transition-colors w-full sm:w-auto"
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span className="truncate">{label}</span>
      {external && !Icon && <ExternalLink className="w-3.5 h-3.5 shrink-0" />}
    </a>
  );
}

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal>
          <SectionHeader align="left" eyebrow="Selected work" title="Projects" />
        </Reveal>

        <Reveal delay={80}>
          <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 px-3 py-1.5 rounded-md text-sm transition-colors ${
                  active === f
                    ? "bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-900"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filtered.map((p, i) => {
            const detailLink = p.link || p.website || p.github;
            const showGithub = p.github && p.github !== detailLink;
            const showWebsite = p.website && p.website !== detailLink;

            return (
              <Reveal key={p.title} delay={i * 60}>
                <article className="h-full flex flex-col p-4 sm:p-5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-800/30 hover:border-stone-300 dark:hover:border-stone-600 transition-colors">
                  <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">{p.category}</p>
                  <h3 className="text-base sm:text-lg font-semibold text-stone-900 dark:text-stone-50 mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 flex-1">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-xs rounded bg-stone-200/80 dark:bg-stone-700/80 text-stone-700 dark:text-stone-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-t border-stone-200/80 dark:border-stone-700/80 flex flex-col sm:flex-row sm:flex-wrap gap-2">
                    {detailLink ? (
                      <ProjectLink href={detailLink} label="Details" />
                    ) : (
                      <span className="inline-flex items-center justify-center gap-1.5 min-h-10 px-3 py-2 rounded-md text-sm font-medium border border-dashed border-stone-300 dark:border-stone-700 text-stone-400 dark:text-stone-600 w-full sm:w-auto">
                        Details <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                      </span>
                    )}
                    {showGithub && (
                      <ProjectLink href={p.github} label="GitHub" icon={Github} />
                    )}
                    {showWebsite && (
                      <ProjectLink href={p.website} label="Website" icon={ExternalLink} />
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
