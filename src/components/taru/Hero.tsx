import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import heroForest from "@/assets/hero-forest.jpg";
import palmLeaf from "@/assets/hero-palm-leaf.png";
import seedling from "@/assets/seedling.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const leafRef = useRef<HTMLImageElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic intro
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-seed", { scale: 0, opacity: 0, duration: 1.2, ease: "elastic.out(1,0.5)" })
        .to(".hero-seed", { opacity: 0, scale: 2, duration: 0.6, delay: 0.2 }, ">+0.3")
        .from(".hero-leaf", { y: 200, opacity: 0, scale: 0.7, duration: 1.6 }, "<-0.2")
        .from(".hero-title-line", { yPercent: 120, opacity: 0, duration: 1.2, stagger: 0.12 }, "<+0.3")
        .from(".hero-sub", { y: 30, opacity: 0, duration: 1 }, "<+0.4")
        .from(".hero-cta", { y: 20, opacity: 0, duration: 0.8 }, "<+0.2")
        .from(".hero-meta", { opacity: 0, duration: 1, stagger: 0.1 }, "<");

      // Particles
      const particles = gsap.utils.toArray<HTMLElement>(".particle");
      particles.forEach((p) => {
        gsap.to(p, {
          y: "-=200",
          x: `+=${gsap.utils.random(-50, 50)}`,
          opacity: 0,
          duration: gsap.utils.random(6, 12),
          delay: gsap.utils.random(0, 5),
          repeat: -1,
          ease: "none",
        });
      });

      // Mouse parallax
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
        gsap.to(leafRef.current, { x, y: y - 10, rotation: x * 0.2, duration: 1.5, ease: "power2.out" });
        gsap.to(bgRef.current, { x: x * 0.3, y: y * 0.3, duration: 2, ease: "power2.out" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="home" className="relative h-screen w-full overflow-hidden grain">
      {/* Forest background */}
      <div ref={bgRef} className="absolute inset-0 -inset-x-10 -inset-y-10">
        <img src={heroForest} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-forest/50 via-primary-forest/30 to-primary-forest" />
        <div className="absolute inset-0 bg-leaf-glow" />
      </div>

      {/* Sun rays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-gold/15 via-gold/5 to-transparent blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="particle absolute rounded-full bg-accent-green/70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${60 + Math.random() * 40}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              filter: "blur(0.5px)",
              boxShadow: "0 0 8px rgba(149,213,178,0.8)",
            }}
          />
        ))}
      </div>

      {/* Floating palm leaf */}
      <img
        ref={leafRef}
        src={palmLeaf}
        alt=""
        className="hero-leaf absolute right-[-8%] bottom-[-5%] w-[70%] md:w-[55%] max-w-[900px] pointer-events-none opacity-90 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
      />

      {/* Seed */}
      <img
        src={seedling}
        alt=""
        className="hero-seed absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 h-full px-8 md:px-20 flex flex-col justify-center max-w-[1500px] mx-auto">
        <div className="overflow-hidden">
          <span className="hero-meta inline-block text-xs uppercase tracking-[0.4em] text-accent-green/80 mb-6">
            ✦ An Enactus Initiative
          </span>
        </div>
        <h1 className="font-display text-[18vw] md:text-[14vw] leading-[0.85] text-beige tracking-tighter">
          <span className="block overflow-hidden"><span className="hero-title-line inline-block">TARU</span></span>
        </h1>
        <div className="overflow-hidden mt-4">
          <p className="hero-sub max-w-md text-beige/70 text-base md:text-lg font-light leading-relaxed">
            Crafting sustainability from nature — eco-friendly products born of palm leaves,
            woven by hands that carry generations of tradition.
          </p>
        </div>
        <div className="hero-cta mt-10 flex items-center gap-6">
          <a
            href="#story"
            className="group relative inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full bg-beige text-primary-forest text-sm uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500"
          >
            Explore the Journey
            <span className="grid place-items-center w-9 h-9 rounded-full bg-primary-forest text-beige group-hover:rotate-45 transition-transform duration-500">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Side meta */}
      <div className="hero-meta absolute left-8 bottom-10 hidden md:flex flex-col gap-4 text-beige/50">
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
          Scroll to discover
        </span>
        <div className="w-px h-16 bg-beige/30 mx-auto animate-pulse" />
      </div>
      <div className="hero-meta absolute right-8 bottom-10 hidden md:block text-beige/40 text-xs tracking-widest font-mono">
        N 11.0168° • E 76.9558°
      </div>
    </section>
  );
}
