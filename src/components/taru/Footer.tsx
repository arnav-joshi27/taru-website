import { motion } from "framer-motion";
import leafFan from "@/assets/leaf-fan.png";

export function Footer() {
  return (
    <footer id="contact" className="relative bg-primary-forest text-beige overflow-hidden pt-40 pb-12">
      <motion.img
        src={leafFan}
        alt=""
        initial={{ rotate: -10, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 0.15 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute -right-40 -top-20 w-[80%] max-w-[1100px] pointer-events-none"
        style={{ animation: "float 12s ease-in-out infinite" }}
      />
      <style>{`@keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-30px) rotate(2deg)} }`}</style>

      <div className="relative max-w-[1500px] mx-auto px-8 md:px-20">
        <h2 className="font-display text-6xl md:text-[12vw] leading-[0.85] text-beige">
          Rooted in nature.<br /><em className="text-accent-green not-italic">Designed for tomorrow.</em>
        </h2>

        <div className="mt-24 flex flex-col md:flex-row md:items-end md:justify-between gap-10 border-t border-beige/10 pt-12">
          <div className="max-w-sm">
            <div className="font-display text-2xl mb-2">TARU</div>
            <p className="text-beige/50 text-sm leading-relaxed">
              An Enactus VITC initiative crafting sustainability from nature.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-4">Enactus VITC</div>
            <div className="flex gap-3">
              <a href="https://instagram.com/enactusvitc" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full border border-beige/20 hover:border-accent-green hover:text-accent-green text-xs transition">IG</a>
              <a href="https://linkedin.com/company/enactus-vitc" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center rounded-full border border-beige/20 hover:border-accent-green hover:text-accent-green text-xs transition">LI</a>
              <a href="mailto:enactus@vitchennai.ac.in" aria-label="Email" className="w-10 h-10 grid place-items-center rounded-full border border-beige/20 hover:border-accent-green hover:text-accent-green text-xs transition">@</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center text-xs text-beige/50 border-t border-beige/10 pt-6">
          <span>Made with 🌳 by Taru, Enactus VITC</span>
        </div>
      </div>
    </footer>
  );
}
