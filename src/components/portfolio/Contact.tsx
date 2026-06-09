import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-stone-900 text-stone-100">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="text-left mb-12 md:mb-14">
            <p className="text-stone-400 text-sm mb-1">Say hello</p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-50">Contact</h2>
            <p className="mt-2 text-sm text-stone-400 max-w-xl">
              Open for internships and junior frontend roles. Email works best.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <Reveal>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  {profile.linkedinHandle}
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-stone-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  {profile.githubHandle}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs text-stone-400 mb-1.5">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md bg-stone-800 border border-stone-700 focus:border-amber-600 focus:outline-none text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-stone-400 mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 rounded-md bg-stone-800 border border-stone-700 focus:border-amber-600 focus:outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs text-stone-400 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 rounded-md bg-stone-800 border border-stone-700 focus:border-amber-600 focus:outline-none text-sm resize-none"
                  placeholder="What's this about?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-600 hover:bg-amber-500 text-stone-950 text-sm font-medium transition-colors"
              >
                <Send className="w-4 h-4" /> Send
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
