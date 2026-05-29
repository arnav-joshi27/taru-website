import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import palmLeaf from "@/assets/palm-leaf.png";
import leafFrond from "@/assets/leaf-frond.png";
import leafAreca from "@/assets/leaf-areca.png";

const leafVariants = [palmLeaf, leafFrond, leafAreca];

export function FloatingLeaves() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".floating-leaf").forEach((leaf) => {
        const startX = -200;
        const endX = window.innerWidth + 200;
        gsap.fromTo(leaf,
          { x: startX, y: gsap.utils.random(0, window.innerHeight), rotation: 0, opacity: 0 },
          {
            x: endX,
            y: `+=${gsap.utils.random(-200, 200)}`,
            rotation: gsap.utils.random(180, 540),
            opacity: gsap.utils.random(0.15, 0.4),
            duration: gsap.utils.random(20, 35),
            delay: gsap.utils.random(0, 20),
            repeat: -1,
            ease: "none",
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <img
          key={i}
          src={leafVariants[i % leafVariants.length]}
          alt=""
          className="floating-leaf absolute w-32 opacity-0"
          style={{ filter: "blur(0.5px)" }}
        />
      ))}
    </div>
  );
}
