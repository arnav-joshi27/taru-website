import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import taruLogo from "@/assets/taru-logo.png.asset.json";

const links = ["Home", "Story", "Process", "Products", "Impact"];

export function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = links.map((l) => l.toLowerCase());
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
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
      <nav className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
        {links.map((l) => {
          const id = l.toLowerCase();
          const isActive = active === id;
          return (
            <a
              key={l}
              href={`#${id}`}
              className={`relative px-4 py-2 rounded-full transition-all duration-500 hover:text-accent-green hover:bg-accent-green/5 hover:shadow-[0_0_18px_rgba(168,199,127,0.35)] ${
                isActive
                  ? "text-accent-green bg-accent-green/10 shadow-[0_0_22px_rgba(168,199,127,0.45)]"
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
