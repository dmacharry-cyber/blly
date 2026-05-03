import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroOrb from "@/assets/hero-orb.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" aria-hidden />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs md:text-sm text-muted-foreground animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Available globally in 200+ countries</span>
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.02] animate-fade-in-up">
            Watch
            <br />
            <span className="text-gradient">to Win.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto animate-fade-in-up [animation-delay:120ms]">
            blly rewards you for watching the creators you love — and channels those rewards into your monthly bills. Uplift creators, ease your budget, live limitless.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up [animation-delay:240ms]">
            <Button variant="hero" size="xl" asChild>
              <a href="#join">
                Join free <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#features">Explore features</a>
            </Button>
          </div>

          <div className="mt-6 text-xs text-muted-foreground animate-fade-in-up [animation-delay:360ms]">
            No credit card required · Cancel anytime
          </div>
        </div>

        <div className="relative mt-20 md:mt-24 max-w-5xl mx-auto animate-scale-in [animation-delay:480ms]">
          <div className="absolute -inset-12 bg-gradient-mesh blur-3xl opacity-70 pointer-events-none" aria-hidden />
          <div className="relative glass rounded-3xl p-2 shadow-glow">
            <div className="rounded-2xl overflow-hidden bg-card aspect-[16/9] relative">
              <img
                src={heroOrb}
                alt="blly futuristic platform visualization"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  { k: "10×", v: "Faster launches" },
                  { k: "120k+", v: "Creators onboard" },
                  { k: "99.99%", v: "Uptime SLA" },
                ].map((s) => (
                  <div key={s.v} className="glass rounded-xl px-3 py-2 md:px-4 md:py-3">
                    <div className="font-display text-lg md:text-2xl font-bold text-gradient">{s.k}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
