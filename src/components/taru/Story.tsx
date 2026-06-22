import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bananaLeaves from "@/assets/story-banana-leaves.png.asset.json";

const paragraphs = [
  "Taru began with a simple belief that beauty and purpose can emerge from what the world often overlooks. Guided by a deep respect for nature and traditional craftsmanship, we transform biodegradable plant materials into thoughtfully designed products that carry stories of renewal and care.",
  "Rooted in sustainability and shaped by innovation, Taru seeks to foster conscious living while creating meaningful impact for communities and the environment. As our journey evolves, we remain devoted to building a future where thoughtful design and responsible choices become a natural part of everyday life.",
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
        {paragraphs.map((p, i) => (
          <p key={i} className="story-line font-display text-2xl md:text-4xl text-beige leading-[1.3] text-balance">
            {p.split(" ").map((w, j) => (
              <span key={j} className="inline-block mr-2">{w}</span>
            ))}
          </p>
        ))}

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
