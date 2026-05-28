import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const team = [
  { name: "Aarav", role: "Project Lead", contrib: "Vision & community partnerships" },
  { name: "Ishita", role: "Design Lead", contrib: "Brand identity & product form" },
  { name: "Rohan", role: "Operations Lead", contrib: "Supply chain & artisan training" },
  { name: "Sneha", role: "Marketing Lead", contrib: "Storytelling & outreach" },
];

const gallery = [
  { src: g1, h: "row-span-2", cap: "Hands at work" },
  { src: g2, h: "", cap: "Raw material" },
  { src: g3, h: "row-span-2", cap: "Community" },
  { src: g4, h: "", cap: "Pure form" },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 bg-primary-forest overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 md:px-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">People Behind Taru</span>
        <h2 className="font-display text-5xl md:text-7xl text-beige mt-4 max-w-3xl">The hearts that wove this dream.</h2>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="aspect-[3/4] rounded-full bg-gradient-to-br from-palm/40 to-secondary-forest border border-accent-green/20 overflow-hidden relative">
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-display text-7xl text-accent-green/50">{m.name[0]}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-forest via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl text-beige">{m.name}</h3>
                <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mt-1">{m.role}</div>
                <p className="text-sm text-beige/50 mt-3">{m.contrib}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">The Hands Behind Taru</span>
          <h3 className="font-display text-4xl md:text-6xl text-beige mt-4 mb-12">A living gallery.</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[700px]">
            {gallery.map((g, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`${g.h} relative overflow-hidden rounded-2xl group cursor-pointer`}
              >
                <img src={g.src} alt={g.cap} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-forest/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 text-beige">
                  <div className="text-xs uppercase tracking-[0.2em] text-accent-green">— Taru</div>
                  <div className="font-display text-2xl mt-1">{g.cap}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
