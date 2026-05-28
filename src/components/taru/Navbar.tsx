import { motion } from "framer-motion";

const links = ["Home", "Story", "Process", "Products", "Impact", "Team"];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-14 py-6 flex items-center justify-between"
    >
      <a href="#home" className="flex items-center gap-2 text-beige font-display text-xl tracking-wider">
        <span className="text-gold">✦</span> TARU
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
