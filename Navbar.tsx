import { Play, Wallet, Gift, TrendingUp, Users, Shield, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Gift, title: "Creator rewards", desc: "Every minute watched lifts the creators you love — automatically." },
  { icon: Wallet, title: "Smart bill tracking", desc: "See every recurring bill in one calm, gorgeous timeline." },
  { icon: TrendingUp, title: "Budget forecasts", desc: "Know what's safe to spend before payday hits." },
  { icon: Users, title: "Community first", desc: "A network where viewers, creators and households thrive together." },
  { icon: Shield, title: "Bank-grade security", desc: "End-to-end encryption and read-only bank connections." },
  { icon: Zap, title: "Instant payouts", desc: "Cash out rewards or route them straight to your next bill." },
];

export const Features = () => (
  <section id="features" className="py-24 md:py-32 relative">
    <div className="container">
      <div className="max-w-2xl">
        <div className="text-sm font-medium text-primary uppercase tracking-widest">Features</div>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">
          Watch, earn and <span className="text-gradient">budget smarter</span>.
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          blly turns the time you already spend watching into rewards that uplift creators and ease your monthly bills.
        </p>
      </div>

      {/* Watch to Win highlight */}
      <div className="mt-14 relative rounded-3xl overflow-hidden border border-primary/30 shadow-glow">
        <div className="absolute inset-0 bg-gradient-primary opacity-90" aria-hidden />
        <div className="absolute inset-0 bg-gradient-mesh opacity-60 mix-blend-overlay" aria-hidden />
        <div className="relative grid lg:grid-cols-2 gap-10 p-8 md:p-14 items-center text-primary-foreground">
          <div>
            <div className="inline-flex items-center gap-2 glass bg-background/20 border-white/20 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-widest">
              <span className="h-2 w-2 rounded-full bg-white animate-glow-pulse" />
              Featured · Watch to Win
            </div>
            <h3 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              Get rewarded for simply watching.
            </h3>
            <p className="mt-5 text-base md:text-lg text-primary-foreground/90 max-w-lg">
              Tune in to the creators you love. Earn points with every minute. Cash out — or send your rewards straight to next month's bills. Creators get uplifted automatically, viewers get ahead.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="lg" variant="glass" className="bg-background/15 border-white/30 text-primary-foreground hover:bg-background/25" asChild>
                <a href="#join"><Play className="h-4 w-4" /> Start watching</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-background/15" asChild>
                <a href="#about">How it works →</a>
              </Button>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "$2.4M", v: "Paid to viewers" },
                { k: "85%", v: "Creator share" },
                { k: "0 ads", v: "Pure watch time" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl bg-background/15 backdrop-blur-md border border-white/15 px-3 py-3">
                  <dt className="font-display text-xl md:text-2xl font-bold">{s.k}</dt>
                  <dd className="text-[11px] md:text-xs text-primary-foreground/80">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl bg-background/15 backdrop-blur-xl border border-white/20 p-5 shadow-2xl">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-background/30 to-background/10 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <div className="relative h-16 w-16 rounded-full bg-background/90 text-primary flex items-center justify-center shadow-glow animate-glow-pulse">
                  <Play className="h-7 w-7 ml-0.5 fill-current" />
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-background/80 text-primary px-2.5 py-1 rounded-full text-xs font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" /> LIVE
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Watching · Maya creates</div>
                  <div className="text-xs text-primary-foreground/70">+12 pts earned this session</div>
                </div>
                <div className="rounded-lg bg-background/20 border border-white/20 px-3 py-1.5 text-sm font-bold">
                  +$0.42
                </div>
              </div>
              <div className="mt-3 h-2 rounded-full bg-background/20 overflow-hidden">
                <div className="h-full w-2/3 bg-background rounded-full animate-shimmer bg-[linear-gradient(110deg,hsl(var(--primary-foreground)),hsl(var(--accent)),hsl(var(--primary-foreground)))] bg-[length:200%_100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bill Budgeting highlight */}
      <div className="mt-8 grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 relative rounded-3xl border border-border/60 bg-card p-8 md:p-10 shadow-card overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-widest">
              <Wallet className="h-3.5 w-3.5" /> Monthly bill budgeting
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight">
              Every bill, beautifully under control.
            </h3>
            <p className="mt-3 text-muted-foreground">
              Track rent, subscriptions and utilities in one view. blly forecasts the month ahead and quietly nudges you before anything bites.
            </p>
            <div className="mt-6 space-y-3">
              {[
                { name: "Rent", amount: "$1,420", due: "Due in 5d", pct: 70 },
                { name: "Streaming bundle", amount: "$38", due: "Due in 12d", pct: 35 },
                { name: "Internet", amount: "$65", due: "Paid", pct: 100, paid: true },
              ].map((b) => (
                <div key={b.name} className="rounded-xl border border-border/60 bg-background/60 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="font-medium">{b.name}</div>
                    <div className="flex items-center gap-3">
                      <span className={b.paid ? "text-primary font-semibold" : "text-muted-foreground text-xs"}>{b.due}</span>
                      <span className="font-semibold">{b.amount}</span>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${b.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 relative rounded-3xl border border-border/60 bg-card p-8 md:p-10 shadow-card overflow-hidden">
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary uppercase tracking-widest">
              <BarChart3 className="h-3.5 w-3.5" /> This month
            </div>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold">On track to save <span className="text-gradient">$184</span></h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Your watch rewards are covering 12% of your bills this month.
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-primary p-5 text-primary-foreground">
              <div className="text-xs uppercase tracking-widest opacity-80">Rewards balance</div>
              <div className="font-display text-4xl font-bold mt-1">$47.20</div>
              <div className="mt-3 text-xs opacity-90">Auto-applied to next bill on the 28th</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative rounded-2xl border border-border/60 bg-card p-6 shadow-card hover:-translate-y-1 hover:border-primary/40 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="relative">
              <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
