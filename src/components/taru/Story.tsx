import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bananaLeaves from "@/assets/story-banana-leaves.png.asset.json";
import fibres from "@/assets/story-fibres.png.asset.json";

const paragraphs = [
  "Taru began with a question — what if what nature sheds could feed a family?",
  "In quiet villages, we found generations of skill — hands that weave leaves, fibres, and grass into beauty.",
  "We listened. We learned. We wove tradition into a future the planet can hold.",
  "Today, every Taru product carries a story — of soil, of sun, of stubborn hope.",
];

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".story-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
      });
      gsap.utils.toArray<HTMLElement>(".story-line").forEach((line) => {
        const words = line.querySelectorAll("span");
        gsap.from(words, {
          opacity: 0.15,
          stagger: 0.05,
          scrollTrigger: { trigger: line, start: "top 80%", end: "top 30%", scrub: 1 },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="story" className="relative py-40 overflow-hidden">
      <div className="story-bg absolute inset-0 -inset-y-32">
        <img src={bananaLeaves.url} alt="" loading="lazy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-forest/85" />
      </div>
      <div className="relative max-w-5xl mx-auto px-8 md:px-20 space-y-20">
        <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">The Story of Taru</span>
        {paragraphs.map((p, i) => (
          <p key={i} className="story-line font-display text-3xl md:text-6xl text-beige leading-[1.15] text-balance">
            {p.split(" ").map((w, j) => (
              <span key={j} className="inline-block mr-3">{w}</span>
            ))}
          </p>
        ))}

        <div className="story-line grid md:grid-cols-2 gap-6 pt-4">
          <img src={fibres.url} alt="Natural plant fibres" loading="lazy" className="rounded-2xl aspect-[4/5] object-cover" />
          <div className="flex flex-col justify-end">
            <p className="text-beige/70 text-lg leading-relaxed">
              From banana leaves and palm fronds to natural fibres and rattan —
              we work with whatever nature offers, transforming what was overlooked
              into objects of everyday beauty.
            </p>
          </div>
        </div>

        <blockquote className="story-line border-l-2 border-accent-green pl-8 mt-20">
          <p className="font-display italic text-2xl md:text-3xl text-beige/80">
            {"\""}We're not making products. We're tending a relationship — between people and the land that holds us.{"\""}
          </p>
          <footer className="mt-4 text-xs uppercase tracking-[0.3em] text-accent-green/70">
            — Project Lead, Taru
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
