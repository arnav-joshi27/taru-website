import { motion } from "framer-motion";

const primary = [
  { n: "12", title: "Responsible Consumption & Production", desc: "Designing biodegradable goods that close the loop on waste." },
  { n: "08", title: "Decent Work & Economic Growth", desc: "Dignified livelihoods for rural artisans and women collectives." },
  { n: "13", title: "Climate Action", desc: "Lower-carbon alternatives to single-use plastics, at scale." },
];

const supporting = [
  { n: "01", title: "No Poverty" },
  { n: "11", title: "Sustainable Cities & Communities" },
  { n: "15", title: "Life on Land" },
  { n: "17", title: "Partnerships for the Goals" },
];

const pillars = [
  { t: "Circular Economy", d: "Materials that re-enter nature, never landfill." },
  { t: "Responsible Consumption", d: "Everyday essentials, designed with intention." },
  { t: "Community Empowerment", d: "Skill, dignity, and income for the makers." },
  { t: "Sustainable Innovation", d: "New biodegradable materials, conscious design." },
  { t: "Environmental Stewardship", d: "Caring for the land that holds us all." },
];

export function Impact() {
  return (
    <section id="impact" className="relative py-32 bg-primary-forest overflow-hidden">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-[1500px] mx-auto px-8 md:px-20">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">Our Impact</span>
          <h2 className="font-display text-5xl md:text-7xl text-beige mt-4 leading-[0.95]">
            Aligned with the <em className="text-accent-green not-italic">Global Goals.</em>
          </h2>
          <p className="text-beige/70 mt-6 leading-relaxed max-w-xl text-lg">
            From banana leaves and palm fronds to natural fibres and rattan — we work with whatever nature offers, transforming what was overlooked into objects of everyday beauty.
          </p>
          <p className="text-beige/60 mt-4 leading-relaxed max-w-xl">
            Taru's work directly advances the United Nations Sustainable Development Goals —
            weaving circular economy, community empowerment, and environmental stewardship into every product.
          </p>

        </div>

        {/* Primary SDGs */}
        <div className="mt-20">
          <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-6">Primary SDGs</div>
          <div className="grid md:grid-cols-3 gap-6">
            {primary.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 border border-accent-green/15 hover:border-accent-green/40 transition-colors"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-6xl text-accent-green">{s.n}</span>
                  <span className="font-mono text-[10px] tracking-widest text-accent-green/60">SDG</span>
                </div>
                <h3 className="font-display text-2xl text-beige mt-4 leading-tight">{s.title}</h3>
                <p className="text-beige/60 text-sm mt-3 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Supporting SDGs */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-6">Supporting SDGs</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {supporting.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 border border-beige/10 flex items-center gap-4"
              >
                <span className="font-display text-3xl text-accent-green/80">{s.n}</span>
                <span className="text-beige/80 text-sm leading-snug">{s.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-24">
          <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-6">What We Stand For</div>
          <div className="grid md:grid-cols-5 gap-px bg-accent-green/10 rounded-2xl overflow-hidden">
            {pillars.map((p) => (
              <div key={p.t} className="bg-primary-forest p-8">
                <h4 className="font-display text-xl text-beige leading-tight">{p.t}</h4>
                <p className="text-beige/55 text-sm mt-3 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
