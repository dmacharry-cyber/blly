import logo from "@/assets/blly-logo.png";

export const About = () => (
  <section id="about" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-mesh opacity-60 pointer-events-none" aria-hidden />
    <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <div className="text-sm font-medium text-primary uppercase tracking-widest">About blly</div>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Unity over competition. <span className="text-gradient">To give is to receive.</span></h2>
        <p className="mt-6 text-lg text-muted-foreground">
          We've been told we have to compete to survive. But look closely — those who truly thrive at the top are collaborating, lifting each other, and sharing the spotlight.
        </p>
        <p className="mt-4 text-muted-foreground">
          blly is built on that truth. When viewers reward creators, creators reward viewers, and bills get lighter for everyone — community becomes the engine. Give your attention, receive real value. Give creators a lift, receive a thriving network in return.
        </p>

        <dl className="mt-10 grid grid-cols-3 gap-6">
          {[
            { k: "200+", v: "Countries" },
            { k: "1", v: "Community" },
            { k: "∞", v: "Possibilities" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-3xl font-bold text-gradient">{s.k}</dt>
              <dd className="text-sm text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full" aria-hidden />
        <div className="relative aspect-square rounded-3xl glass shadow-glow overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="border border-border/40"
                style={{
                  background: i % 7 === 0 ? "var(--gradient-primary)" : i % 5 === 0 ? "hsl(var(--accent) / 0.4)" : "transparent",
                  animation: `float ${4 + (i % 5)}s ease-in-out ${i * 0.05}s infinite`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="blly" className="w-2/3 h-2/3 object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
