import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import plate from "@/assets/product-plate.png";
import bowl from "@/assets/product-bowl.png";
import tray from "@/assets/product-tray.png";
import cup from "@/assets/product-cup.png";
import leafFrond from "@/assets/leaf-frond.png";
import leafAreca from "@/assets/leaf-areca.png";
import leafSilhouette from "@/assets/leaf-silhouette.png";

const products = [
  { img: plate, name: "Palm Leaf Plates", tag: "Biodegradable & Durable", desc: "A plate that began as a leaf. Sturdy enough for a feast, gentle enough to return to the earth.", n: "01" },
  { img: bowl, name: "Palm Leaf Bowls", tag: "Natural & Chemical Free", desc: "Hand-pressed into shape, never coated, never compromised. Pure leaf, pure form.", n: "02" },
  { img: tray, name: "Palm Leaf Trays", tag: "Sturdy & Confident", desc: "Built to carry the weight of a celebration — and the weight of conscience.", n: "03" },
  { img: cup, name: "Palm Leaf Cups", tag: "Good for You, Good for Earth", desc: "A vessel that begins and ends in nature. No plastic. No guilt.", n: "04" },
];

export function Products() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".product-panel").forEach((panel) => {
        gsap.from(panel.querySelector(".product-img"), {
          scale: 0.7,
          opacity: 0,
          rotate: -20,
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
        gsap.to(panel.querySelector(".product-img"), {
          y: -80,
          scrollTrigger: { trigger: panel, start: "top bottom", end: "bottom top", scrub: 1 },
        });
        gsap.from(panel.querySelectorAll(".product-text > *"), {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          scrollTrigger: { trigger: panel, start: "top 70%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="products" className="relative bg-beige text-primary-forest overflow-hidden">
      {/* Tasteful complete palm frond beside the header — not behind any product */}
      <img
        src={leafFrond}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -left-16 md:-left-8 top-16 w-[44vw] max-w-[460px] opacity-90 select-none drop-shadow-[0_30px_60px_rgba(8,28,21,0.18)] -rotate-[18deg]"
      />
      {/* Faint silhouette accent in the top-right corner */}
      <img
        src={leafSilhouette}
        alt=""
        aria-hidden
        loading="lazy"
        className="pointer-events-none absolute -right-20 -top-10 w-[320px] opacity-[0.08] rotate-180 select-none"
      />

      <div className="relative px-8 md:px-20 pt-32 pb-6 max-w-[1500px] mx-auto">
        <div className="md:pl-[42%]">
          <span className="text-xs uppercase tracking-[0.3em] text-palm">Our Products</span>
          <h2 className="font-display text-5xl md:text-7xl mt-4 max-w-3xl leading-[0.95]">
            Crafted by nature, <em className="text-palm not-italic">made for you.</em>
          </h2>
        </div>
      </div>


      {products.map((p, i) => (
        <div
          key={p.n}
          className={`product-panel relative flex items-center px-8 md:px-20 py-14 md:py-20 ${
            i % 2 === 0 ? "" : "flex-row-reverse"
          }`}
        >
          <div className={`max-w-[1500px] mx-auto w-full grid md:grid-cols-2 gap-10 md:gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <div className="relative flex items-center justify-center md:[direction:ltr]">
              <div className="absolute w-[80%] aspect-square rounded-full bg-palm/10 blur-3xl" />
              <img src={p.img} alt={p.name} loading="lazy" className="product-img relative w-[70%] max-w-[420px] drop-shadow-[0_60px_80px_rgba(8,28,21,0.3)]" />
            </div>
            <div className="product-text space-y-5 md:[direction:ltr]">
              <span className="font-mono text-xs text-palm/60 tracking-widest">{p.n} / 04</span>
              <span className="block text-xs uppercase tracking-[0.3em] text-palm">{p.tag}</span>
              <h3 className="font-display text-5xl md:text-7xl leading-[0.95]">{p.name}</h3>
              <p className="text-lg text-primary-forest/70 max-w-md leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-6 pt-3 text-xs uppercase tracking-[0.2em] text-primary-forest/60">
                <span>✦ Compostable</span>
                <span>✦ Microwave Safe</span>
                <span>✦ Plastic Free</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
