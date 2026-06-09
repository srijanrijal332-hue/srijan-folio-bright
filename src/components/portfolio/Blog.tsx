import { Calendar, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const posts = [
  {
    title: "Building Performant React Apps with Tailwind CSS",
    date: "Coming soon",
    excerpt: "Patterns I rely on for fast, maintainable component libraries.",
  },
  {
    title: "WordPress SEO: A Developer's Checklist",
    date: "Coming soon",
    excerpt: "From internal linking to redirects — what actually moves the needle.",
  },
  {
    title: "TypeScript with React: My Workflow",
    date: "Coming soon",
    excerpt: "Type-safe components, hooks, and API calls without the friction.",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-stone-50 dark:bg-stone-900">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-amber-700 dark:text-amber-400 font-semibold text-sm uppercase tracking-wider">
              Writing
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-stone-50 mt-2">
              Latest Articles
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <a
                href="#"
                className="group block h-full p-6 rounded-2xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {p.date}
                </div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-50 mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition">
                  {p.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                  {p.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 dark:text-amber-400">
                  Read more <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
