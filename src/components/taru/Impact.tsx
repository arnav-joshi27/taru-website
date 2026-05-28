import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const metrics = [
  { n: 10000, suffix: "+", label: "Palm Leaves Reused" },
  { n: 500, suffix: "+", label: "Eco Products Created" },
  { n: 300, suffix: "+", label: "Lives Impacted" },
  { n: 100, suffix: "%", label: "Natural Material" },
];

export function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".metric").forEach((m) => {
        const target = Number(m.dataset.target);
        const el = m.querySelector(".num") as HTMLElement;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: { trigger: m, start: "top 85%" },
          onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString(); },
        });
      });
      // Trees grow
      gsap.from(".tree", {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: 1.5,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="impact" className="relative py-32 overflow-hidden bg-forest">
      <div className="grain absolute inset-0" />
      <div className="relative max-w-[1500px] mx-auto px-8 md:px-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">Our Living Impact</span>
        <h2 className="font-display text-5xl md:text-7xl text-beige mt-4 max-w-3xl">
          Numbers that <em className="text-accent-green not-italic">grow back.</em>
        </h2>

        {/* Tree silhouettes */}
        <div className="relative mt-20 h-48 flex items-end justify-around">
          {Array.from({ length: 12 }).map((_, i) => (
            <svg key={i} className="tree" width="40" height={80 + Math.random() * 100} viewBox="0 0 40 200" fill="none">
              <line x1="20" y1="200" x2="20" y2="120" stroke="oklch(0.42 0.09 155)" strokeWidth="3" />
              <circle cx="20" cy="80" r="40" fill="oklch(0.42 0.09 155)" opacity="0.7" />
              <circle cx="10" cy="100" r="25" fill="oklch(0.55 0.12 155)" opacity="0.6" />
              <circle cx="30" cy="100" r="25" fill="oklch(0.55 0.12 155)" opacity="0.6" />
            </svg>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-accent-green/10 mt-20 rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <div key={m.label} data-target={m.n} className="metric bg-primary-forest p-10 md:p-14">
              <div className="font-display text-5xl md:text-7xl text-accent-green">
                <span className="num">0</span><span>{m.suffix}</span>
              </div>
              <div className="mt-4 text-xs uppercase tracking-[0.2em] text-beige/60">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
