import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/taru/Navbar";
import { Hero } from "@/components/taru/Hero";
import { Transformation } from "@/components/taru/Transformation";
import { Journey } from "@/components/taru/Journey";
import { Products } from "@/components/taru/Products";
import { Impact } from "@/components/taru/Impact";
import { TreeOfValues } from "@/components/taru/TreeOfValues";
import { WhyPalm } from "@/components/taru/WhyPalm";
import { Story } from "@/components/taru/Story";
import { Team } from "@/components/taru/Team";
import { Future } from "@/components/taru/Future";
import { Footer } from "@/components/taru/Footer";
import { FloatingLeaves } from "@/components/taru/FloatingLeaves";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TARU — Crafting Sustainability from Nature" },
      { name: "description", content: "TARU transforms palm leaves into eco-friendly products, empowering artisan communities and shaping a regenerative future. An Enactus initiative." },
      { property: "og:title", content: "TARU — Crafting Sustainability from Nature" },
      { property: "og:description", content: "Eco-friendly products from palm leaves. Crafted by nature, made for you." },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative bg-primary-forest text-beige">
      <Navbar />
      <FloatingLeaves />
      <Hero />
      <Transformation />
      <Journey />
      <Products />
      <Impact />
      <TreeOfValues />
      <WhyPalm />
      <Story />
      <Team />
      <Future />
      <Footer />
    </main>
  );
}
