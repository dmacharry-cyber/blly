import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Join = () => (
  <section id="join" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-70 pointer-events-none" aria-hidden />
    <div className="container relative">
      <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-primary/30 shadow-glow">
        <div className="absolute inset-0 bg-gradient-primary opacity-95" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay" aria-hidden />
        <div className="relative p-10 md:p-16 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 glass bg-background/20 border-white/20 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            It's free to join
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Join the movement.
            <br />
            <span className="opacity-90">Watch. Earn. Uplift.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90 max-w-xl mx-auto">
            No subscriptions. No credit card. Just a community where giving and receiving go hand in hand.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="xl" variant="glass" className="bg-background/15 border-white/30 text-primary-foreground hover:bg-background/25" asChild>
              <a href="#features">
                Join free <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          <div className="mt-5 text-xs text-primary-foreground/80">
            Available globally in 200+ countries
          </div>
        </div>
      </div>
    </div>
  </section>
);
