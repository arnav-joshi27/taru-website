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

        <div className="mt-24 grid md:grid-cols-4 gap-12 border-t border-beige/10 pt-12">
          <div>
            <div className="font-display text-2xl mb-2">TARU</div>
            <p className="text-beige/50 text-sm leading-relaxed">An Enactus initiative crafting sustainability from palm leaves.</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-4">About</div>
            <ul className="space-y-2 text-beige/70 text-sm">
              <li><a href="#story" className="hover:text-accent-green transition">Our Story</a></li>
              <li><a href="#process" className="hover:text-accent-green transition">Process</a></li>
              <li><a href="#impact" className="hover:text-accent-green transition">Impact</a></li>
              <li><a href="#team" className="hover:text-accent-green transition">Team</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-4">Contact</div>
            <ul className="space-y-2 text-beige/70 text-sm">
              <li>taru@enactus.org.in</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-accent-green/70 mb-4">Follow</div>
            <div className="flex gap-3">
              {["IG", "LI", "X", "YT"].map((s) => (
                <a key={s} href="#" className="w-10 h-10 grid place-items-center rounded-full border border-beige/20 hover:border-accent-green hover:text-accent-green text-xs transition">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between text-xs text-beige/40 border-t border-beige/10 pt-6">
          <span>© 2026 Taru, an Enactus Initiative</span>
          <span className="font-mono">N 11.0168° • E 76.9558°</span>
        </div>
      </div>
    </footer>
  );
}
