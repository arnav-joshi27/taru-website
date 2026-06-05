import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import palmLeaf from "@/assets/palm-leaf.png";
import bowl from "@/assets/product-bowl.png";

export function Transformation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "+=180%",
          scrub: 1,
          pin: true,
        },
      });
      tl.to(".tf-leaf", { scale: 0.4, rotation: -45, opacity: 0, filter: "blur(8px)", ease: "power2.in" })
        .to(".tf-particles", { opacity: 1, scale: 1.4, ease: "none" }, "<")
        .from(".tf-bowl", { scale: 0.3, opacity: 0, rotation: 45, filter: "blur(8px)" }, ">-0.3")
        .from(".tf-step", { opacity: 0, y: 60, stagger: 0.2 }, "<");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="story" className="relative h-screen w-full overflow-hidden bg-beige text-primary-forest">
      <div className="absolute inset-0 grid md:grid-cols-2 items-center max-w-[1500px] mx-auto px-8 md:px-20 gap-10">
        {/* Visual */}
        <div className="relative h-[70vh] flex items-center justify-center">
          <img src={palmLeaf} alt="" className="tf-leaf absolute w-[90%] max-w-[500px] object-contain" />
          <img src={bowl} alt="" className="tf-bowl absolute w-[60%] max-w-[400px] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]" />
          {/* Particles between */}
          <div className="tf-particles absolute inset-0 opacity-0 pointer-events-none">
            {Array.from({ length: 40 }).map((_, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-palm/50"
                style={{
                  left: `${30 + Math.random() * 40}%`,
                  top: `${30 + Math.random() * 40}%`,
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>
        {/* Text */}
        <div className="space-y-8">
          <span className="tf-step text-xs uppercase tracking-[0.3em] text-palm">Sustainability in Action</span>
          <h2 className="tf-step font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Rooted in Nature.<br />
            <em className="text-palm not-italic">Built for Tomorrow.</em>
          </h2>
          <p className="tf-step text-lg leading-relaxed text-primary-forest/70 max-w-md">
            Every product begins as a fallen palm leaf — nature's gift, not waste. 
            Through ethical craftsmanship and community-driven production, 
            we turn what was discarded into lasting, biodegradable essentials 
            that honor people, planet, and the promise of a greener future.
          </p>
          <button className="tf-step group inline-flex items-center gap-3 text-sm uppercase tracking-[0.2em] border-b border-primary-forest pb-2 hover:text-palm transition-colors">
            Discover Our Impact
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
