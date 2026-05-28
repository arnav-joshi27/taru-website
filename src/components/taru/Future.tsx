import { motion } from "framer-motion";

const phases = [
  { y: "2024", t: "Local Impact", d: "Empowering local artisans through training and fair-trade partnerships." },
  { y: "2025", t: "Regional Impact", d: "Expanding into neighboring states, scaling design and distribution." },
  { y: "2026", t: "National Reach", d: "A pan-India network of palm-leaf craft hubs and conscious consumers." },
  { y: "2027", t: "Future Horizons", d: "Global export, R&D for new bio-materials, regenerative forestry." },
];

export function Future() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-beige to-accent-green/30 text-primary-forest overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 md:px-20">
        <span className="text-xs uppercase tracking-[0.3em] text-palm">Our Vision</span>
        <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[0.95]">
          Growing a <em className="text-palm not-italic">greener tomorrow.</em>
        </h2>

        <div className="relative mt-24">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-palm/30" />
          <div className="grid md:grid-cols-4 gap-8">
            {phases.map((p, i) => (
              <motion.div
                key={p.y}
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <svg viewBox="0 0 100 100" className="w-full h-auto">
                    <circle cx="50" cy="60" r={20 + i * 8} fill="oklch(0.42 0.09 155)" opacity={0.3 + i * 0.15} />
                    <circle cx="50" cy="60" r={10 + i * 4} fill="oklch(0.55 0.12 155)" opacity={0.6} />
                    <line x1="50" y1="80" x2="50" y2="95" stroke="oklch(0.29 0.06 158)" strokeWidth="2" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-palm ring-4 ring-beige" />
                </div>
                <div className="mt-6 text-center">
                  <div className="font-mono text-xs text-palm tracking-widest">{p.y}</div>
                  <h3 className="font-display text-2xl mt-2">{p.t}</h3>
                  <p className="text-sm text-primary-forest/60 mt-3">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
