import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-8 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Srijan Rijal. Built with React & Tailwind.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1.5 text-sm hover:text-white transition"
        >
          <ArrowUp className="w-4 h-4" /> Back to top
        </button>
      </div>
    </footer>
  );
}
