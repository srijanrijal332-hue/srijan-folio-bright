import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { HireMe } from "@/components/portfolio/HireMe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Srijan Rijal - Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Srijan Rijal - Frontend Developer specializing in React.js, MERN Stack, TypeScript, WordPress, and Tailwind CSS. Building scalable web solutions in Kathmandu, Nepal.",
      },
      { property: "og:title", content: "Srijan Rijal - Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Frontend developer and final-year CS student in Kathmandu. React, TypeScript, WordPress, MERN Stack.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <HireMe />
    </div>
  );
}
