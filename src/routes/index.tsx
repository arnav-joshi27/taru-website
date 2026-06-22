import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Navbar } from "@/components/taru/Navbar";
import { Hero } from "@/components/taru/Hero";
import { Transformation } from "@/components/taru/Transformation";
import { Journey } from "@/components/taru/Journey";
import { Products } from "@/components/taru/Products";
import { Impact } from "@/components/taru/Impact";
import { Story } from "@/components/taru/Story";
import { Future } from "@/components/taru/Future";
import { Footer } from "@/components/taru/Footer";
import { FloatingLeaves } from "@/components/taru/FloatingLeaves";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TARU — Crafting Sustainability from Nature" },
      { name: "description", content: "TARU transforms natural, biodegradable materials into eco-friendly products, empowering artisan communities and shaping a regenerative future. An Enactus VITC initiative." },
      { property: "og:title", content: "TARU — Crafting Sustainability from Nature" },
      { property: "og:description", content: "Eco-friendly products from nature. Crafted by hand, made for you." },
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
      <Story />
      <Impact />
      <Future />
      <Footer />
    </main>
  );
}
