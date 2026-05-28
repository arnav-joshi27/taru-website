import { motion } from "framer-motion";
import leafMacro from "@/assets/gallery-4.jpg";

const benefits = [
  { t: "Biodegradable", d: "Returns completely to nature in weeks." },
  { t: "Renewable", d: "Naturally replenished, abundant resource." },
  { t: "Chemical-Free", d: "No coatings, no toxins, ever." },
  { t: "Reduces Waste", d: "Repurposes what would be discarded." },
  { t: "Durable", d: "Strong, leak-resistant, microwave-safe." },
  { t: "Eco-Friendly", d: "Carbon negative across the lifecycle." },
];

export function WhyPalm() {
  return (
    <section className="relative py-32 bg-beige text-primary-forest overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-8 md:px-20">
        <div className="mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-palm">Why Palm Leaves?</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[0.95]">
            A choice that<br /><em className="text-palm not-italic">shapes a better future.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden"
          >
            <img src={leafMacro} alt="" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-forest/40 to-transparent" />
          </motion.div>

          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="group flex items-start gap-6 py-5 border-b border-primary-forest/10 hover:border-palm/40 transition-colors"
              >
                <span className="font-mono text-xs text-palm pt-1">0{i + 1}</span>
                <div className="flex-1">
                  <h4 className="font-display text-2xl md:text-3xl group-hover:text-palm transition-colors">{b.t}</h4>
                  <p className="text-primary-forest/60 mt-1">{b.d}</p>
                </div>
                <span className="text-palm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
