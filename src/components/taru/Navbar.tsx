import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import taruLogo from "@/assets/taru-logo.png.asset.json";

const links = ["Home", "Story", "Process", "Products", "Impact"];

// Map nav label -> actual section id rendered in the page
const idMap: Record<string, string> = {
  Home: "home",
  Story: "story",
  Process: "process",
  Products: "products",
  Impact: "impact",
};

export function Navbar() {
  const [active, setActive] = useState<string>("Home");

  useEffect(() => {
    const sectionEls = links
      .map((l) => ({ name: l, el: document.getElementById(idMap[l]) }))
      .filter((s) => s.el) as { name: string; el: HTMLElement }[];

    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = sectionEls[0]?.name ?? "Home";
      for (const s of sectionEls) {
        if (s.el.offsetTop <= y) current = s.name;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-14 py-4 flex items-center justify-between backdrop-blur-md bg-primary-forest/20 border-b border-beige/10"
    >
      <a href="#home" className="flex items-center gap-3 text-beige font-display text-xl tracking-wider">
        <img
          src={taruLogo.url}
          alt="TARU logo"
          className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
        />
        TARU
      </a>
      <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
        {links.map((l) => {
          const isActive = active === l;
          return (
            <a
              key={l}
              href={`#${idMap[l]}`}
              className={`relative px-3 py-1.5 rounded-full transition-all duration-500 hover:text-accent-green ${
                isActive
                  ? "text-accent-green bg-accent-green/10 shadow-[0_0_18px_rgba(140,200,140,0.35)] ring-1 ring-accent-green/40"
                  : "text-beige/70"
              }`}
            >
              {l}
            </a>
          );
        })}
      </nav>
      <a
        href="#contact"
        className="text-xs uppercase tracking-[0.2em] px-5 py-2.5 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-primary-forest transition-all duration-500"
      >
        Join Us
      </a>
    </motion.header>
  );
}
