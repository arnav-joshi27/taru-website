import { motion } from "framer-motion";
import taruLogo from "@/assets/taru-logo.png.asset.json";

const links = ["Home", "Story", "Process", "Products", "Impact"];

export function Navbar() {
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
      <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-beige/70">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="hover:text-accent-green transition-colors duration-500"
          >
            {l}
          </a>
        ))}
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
