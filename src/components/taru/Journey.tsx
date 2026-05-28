import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stages = [
  { n: "01", t: "Palm Collection", d: "Fallen palm leaves are gathered responsibly from local farming communities, giving discarded nature a second life." },
  { n: "02", t: "Cleaning", d: "Each leaf is washed, sun-dried, and inspected — preparing the raw fibre for transformation." },
  { n: "03", t: "Processing", d: "Heat-pressed under controlled temperatures, the leaf reveals its strength and natural form." },
  { n: "04", t: "Craftsmanship", d: "Skilled artisans shape every piece by hand, weaving generational knowledge into modern utility." },
  { n: "05", t: "Product Creation", d: "Plates, bowls, trays — born of the forest, designed for the table, returning back to the soil." },
  { n: "06", t: "Impact", d: "Each piece supports a family, reduces waste, and plants the seed of a regenerative economy." },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const totalWidth = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: () => `+=${totalWidth + window.innerHeight}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="process" className="relative h-screen w-full overflow-hidden bg-forest">
      <div className="absolute top-0 left-0 right-0 z-10 px-8 md:px-20 pt-28">
        <span className="text-xs uppercase tracking-[0.3em] text-accent-green/70">Our Journey</span>
        <h2 className="font-display text-4xl md:text-6xl text-beige mt-4">The Transformation Process</h2>
      </div>
      <div className="h-full flex items-center">
        <div ref={trackRef} className="flex items-center gap-12 pl-[8vw] pr-[40vw]">
          {stages.map((s, i) => (
            <div
              key={s.n}
              className="relative shrink-0 w-[85vw] md:w-[42vw] h-[60vh] glass rounded-2xl p-10 flex flex-col justify-between shadow-deep"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-accent-green/60 tracking-widest">{s.n} / 06</span>
                <div className="w-14 h-14 rounded-full border border-accent-green/40 grid place-items-center text-accent-green">
                  <span className="text-2xl">●</span>
                </div>
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-6xl text-beige mb-4">{s.t}</h3>
                <p className="text-beige/60 leading-relaxed max-w-md">{s.d}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="absolute top-1/2 -right-12 w-12 h-px bg-gradient-to-r from-accent-green/40 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
