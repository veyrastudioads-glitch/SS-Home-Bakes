import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductGrid } from "./components/ProductGrid";
import { HowToOrder } from "./components/HowToOrder";
import { BrandQualities } from "./components/BrandQualities";
import { CustomOrders } from "./components/CustomOrders";
import { InstagramGallery } from "./components/InstagramGallery";
import { YouTubeSection } from "./components/YouTubeSection";
import { LocationSection } from "./components/LocationSection";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export function App() {
  useEffect(() => {
    // Initialize Lenis for smooth, elegant scrolling
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-chocolate-950 font-sans selection:bg-caramel-200 selection:text-chocolate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductGrid />
        <HowToOrder />
        <BrandQualities />
        <CustomOrders />
        <InstagramGallery />
        <YouTubeSection />
        <LocationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
