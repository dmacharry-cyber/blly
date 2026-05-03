import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Join } from "@/components/Join";
import { Footer } from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  useTheme(); // initialize theme on mount
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Join />
      <Footer />
    </main>
  );
};

export default Index;
