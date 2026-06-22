import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import palmLeaf from "@/assets/palm-leaf.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const stages = [
  { n: "01", t: "Collect", d: "We recover dried leaves, fibres, and biodegradable plant waste that would otherwise go unused — working alongside farming and rural communities.", img: g1, icon: "❋" },
  { n: "02", t: "Clean & Prepare", d: "Each material is washed, sun-dried, and inspected — readying nature's raw gift for its second life.", img: g2, icon: "❅" },
  { n: "03", t: "Transform", d: "Through gentle heat, time, and craft, we upcycle natural materials into durable, biodegradable forms — no plastics, no chemicals.", img: g3, icon: "≋" },
  { n: "04", t: "Craft & Share", d: "Skilled artisans shape every piece by hand, weaving generational knowledge into everyday essentials that return safely to the earth.", img: g4, icon: "✋" },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // progress fill on the vertical spine
      gsap.to(".journey-progress", {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.6,
        },
      });

      gsap.utils.toArray<HTMLElement>(".journey-step").forEach((step, i) => {
        const fromX = i % 2 === 0 ? -80 : 80;
        gsap.from(step.querySelector(".js-card"), {
          x: fromX,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 80%" },
        });
        gsap.from(step.querySelector(".js-node"), {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(2)",
          scrollTrigger: { trigger: step, start: "top 80%" },
        });
        gsap.from(step.querySelector(".js-num"), {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 80%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="process"
      className="relative bg-forest text-beige overflow-hidden py-32 md:py-40"
    >
      {/* ambient leaves */}
      <img src={palmLeaf} alt="" aria-hidden className="pointer-events-none absolute -left-20 top-40 w-[420px] opacity-[0.08] -rotate-12 select-none" />
      <img src={palmLeaf} alt="" aria-hidden className="pointer-events-none absolute -right-24 bottom-40 w-[480px] opacity-[0.08] rotate-[160deg] select-none" />
      <div className="absolute inset-0 bg-leaf-glow opacity-40 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">Our Journey</span>
          <h2 className="font-display text-5xl md:text-7xl text-beige mt-4 leading-[0.95]">
            The <em className="text-accent-green not-italic">Transformation</em> Process
          </h2>
          <div className="w-20 h-px bg-accent-green/60 mx-auto my-6" />
          <p className="text-beige/60 leading-relaxed max-w-md mx-auto">
            From fallen palm leaves to beautiful, sustainable products —
            here's how nature transforms with purpose.
          </p>
        </div>

        {/* Timeline */}
        <div ref={lineRef} className="relative">
          {/* Spine */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-accent-green/15">
            <div className="journey-progress absolute inset-0 w-px bg-gradient-to-b from-accent-green via-accent-green/70 to-palm origin-top scale-y-0 shadow-[0_0_20px_var(--accent-green)]" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {stages.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  className="journey-step relative grid md:grid-cols-2 items-center gap-8 md:gap-16"
                >
                  {/* Number (opposite side on desktop) */}
                  <div
                    className={`hidden md:flex ${isLeft ? "md:order-2 md:justify-start md:pl-20" : "md:order-1 md:justify-end md:pr-20"}`}
                  >
                    <span className="js-num font-display text-7xl lg:text-8xl text-accent-green/30 leading-none tracking-tight">
                      {s.n}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`pl-20 md:pl-0 ${isLeft ? "md:order-1 md:pr-20 md:text-right" : "md:order-2 md:pl-20"}`}
                  >
                    <div className="js-card glass rounded-2xl overflow-hidden shadow-deep group">
                      <div className="relative h-48 md:h-56 overflow-hidden">
                        <img
                          src={s.img}
                          alt={s.t}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-forest via-primary-forest/30 to-transparent" />
                        <span className="md:hidden absolute top-4 left-4 font-mono text-xs text-accent-green/80 tracking-widest">
                          {s.n} / 06
                        </span>
                      </div>
                      <div className={`p-7 md:p-9 ${isLeft ? "md:text-right" : "md:text-left"}`}>
                        <span className="hidden md:block font-mono text-[10px] text-accent-green/60 tracking-widest mb-2">
                          STEP {s.n}
                        </span>
                        <h3 className="font-display text-3xl md:text-4xl text-beige mb-3 leading-tight">
                          {s.t}
                        </h3>
                        <p className="text-beige/60 leading-relaxed text-sm md:text-base">
                          {s.d}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Node on spine */}
                  <div className="absolute left-8 md:left-1/2 top-12 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-10">
                    <div className="js-node relative w-14 h-14 rounded-full glass border border-accent-green/50 grid place-items-center text-accent-green text-lg shadow-glow">
                      <span>{s.icon}</span>
                      <span className="absolute inset-0 rounded-full border border-accent-green/30 animate-ping" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
