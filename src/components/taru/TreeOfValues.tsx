import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
  { id: "tradition", title: "Tradition", desc: "Honoring generations of palm-leaf craftsmanship passed through skilled hands.", angle: -60 },
  { id: "innovation", title: "Innovation", desc: "Marrying ancient craft with modern process — design that breathes future.", angle: -30 },
  { id: "sustainability", title: "Sustainability", desc: "Every product returns to the soil. Zero waste. Endless cycle.", angle: 0 },
  { id: "community", title: "Community", desc: "Livelihoods for rural artisans, dignity for every hand that weaves.", angle: 30 },
  { id: "impact", title: "Impact", desc: "Measurable change — fewer plastics, stronger families, healthier earth.", angle: 60 },
];

export function TreeOfValues() {
  const [active, setActive] = useState<string>("sustainability");
  const current = branches.find((b) => b.id === active)!;

  return (
    <section className="relative py-32 bg-primary-forest overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 md:px-20">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">Roots & Branches</span>
          <h2 className="font-display text-5xl md:text-7xl text-beige mt-4">Our Tree of Values</h2>
        </div>

        <div className="relative h-[600px] flex items-end justify-center">
          {/* Trunk */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[60%] bg-gradient-to-t from-secondary-forest to-palm rounded-full" />

          {/* Branches */}
          {branches.map((b) => {
            const isActive = b.id === active;
            return (
              <button
                key={b.id}
                onClick={() => setActive(b.id)}
                className="absolute bottom-[55%] left-1/2 origin-bottom"
                style={{ transform: `translateX(-50%) rotate(${b.angle}deg)` }}
              >
                <div className="w-1 h-48 bg-gradient-to-t from-palm to-transparent" />
                <div
                  className="absolute -top-2 -left-8 w-16 h-16 rounded-full border transition-all duration-500 grid place-items-center"
                  style={{
                    transform: `rotate(${-b.angle}deg)`,
                    borderColor: isActive ? "oklch(0.84 0.11 150)" : "oklch(0.84 0.11 150 / 0.3)",
                    background: isActive ? "oklch(0.84 0.11 150 / 0.15)" : "transparent",
                    boxShadow: isActive ? "0 0 40px oklch(0.84 0.11 150 / 0.5)" : "none",
                  }}
                >
                  <span className="text-accent-green text-xs uppercase tracking-widest">{b.title.slice(0, 2)}</span>
                </div>
              </button>
            );
          })}

          {/* Center info */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-4xl md:text-5xl text-accent-green mb-4">{current.title}</h3>
                <p className="text-beige/70 leading-relaxed">{current.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Branch labels */}
          <div className="absolute bottom-12 w-full flex justify-around text-xs uppercase tracking-[0.2em]">
            {branches.map((b) => (
              <button
                key={b.id}
                onClick={() => setActive(b.id)}
                className={`transition-colors ${active === b.id ? "text-accent-green" : "text-beige/40 hover:text-beige/70"}`}
              >
                {b.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
