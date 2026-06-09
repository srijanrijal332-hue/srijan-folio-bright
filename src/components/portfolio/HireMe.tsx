import { useEffect, useState } from "react";
import { scrollToSection } from "./scroll";

export function HireMe() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => scrollToSection("contact")}
      className={`fixed bottom-5 right-5 z-40 px-4 py-2.5 rounded-md bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-900 text-sm font-medium shadow-lg hover:opacity-90 transition-all ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      Contact
    </button>
  );
}
