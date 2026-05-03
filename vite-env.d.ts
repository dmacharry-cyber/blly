@tailwind base;
@tailwind components;
@tailwind utilities;

/* blly design system — futuristic, minimal, dark-first */

@layer base {
  :root {
    --background: 240 20% 98%;
    --foreground: 240 15% 10%;

    --card: 0 0% 100%;
    --card-foreground: 240 15% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 15% 10%;

    --primary: 197 80% 52%;
    --primary-foreground: 0 0% 100%;
    --primary-glow: 187 90% 60%;

    --secondary: 240 10% 95%;
    --secondary-foreground: 240 15% 10%;

    --muted: 240 10% 95%;
    --muted-foreground: 240 5% 45%;

    --accent: 187 92% 58%;
    --accent-foreground: 240 15% 10%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 240 10% 90%;
    --input: 240 10% 90%;
    --ring: 197 80% 52%;

    --radius: 0.875rem;

    --gradient-primary: linear-gradient(135deg, hsl(197 80% 52%), hsl(187 92% 62%));
    --gradient-accent: linear-gradient(135deg, hsl(187 92% 58%), hsl(210 90% 60%));
    --gradient-hero: radial-gradient(ellipse 80% 60% at 50% 0%, hsl(197 80% 52% / 0.20), transparent 70%);
    --gradient-mesh: radial-gradient(at 20% 20%, hsl(197 80% 52% / 0.18) 0px, transparent 50%),
                     radial-gradient(at 80% 30%, hsl(187 92% 60% / 0.14) 0px, transparent 50%),
                     radial-gradient(at 50% 90%, hsl(210 90% 60% / 0.10) 0px, transparent 50%);

    --shadow-glow: 0 20px 60px -20px hsl(197 80% 52% / 0.45);
    --shadow-soft: 0 10px 40px -15px hsl(240 15% 10% / 0.15);
    --shadow-card: 0 1px 0 0 hsl(240 10% 100% / 0.6) inset, 0 8px 24px -12px hsl(240 15% 10% / 0.12);

    --transition-smooth: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .dark {
    --background: 240 20% 5%;
    --foreground: 240 10% 96%;

    --card: 240 18% 8%;
    --card-foreground: 240 10% 96%;

    --popover: 240 18% 8%;
    --popover-foreground: 240 10% 96%;

    --primary: 195 90% 60%;
    --primary-foreground: 240 20% 5%;
    --primary-glow: 187 95% 68%;

    --secondary: 240 15% 12%;
    --secondary-foreground: 240 10% 96%;

    --muted: 240 15% 12%;
    --muted-foreground: 240 8% 60%;

    --accent: 187 95% 62%;
    --accent-foreground: 240 20% 5%;

    --destructive: 0 70% 55%;
    --destructive-foreground: 0 0% 100%;

    --border: 240 15% 16%;
    --input: 240 15% 16%;
    --ring: 195 90% 60%;

    --gradient-primary: linear-gradient(135deg, hsl(195 90% 60%), hsl(187 95% 70%));
    --gradient-accent: linear-gradient(135deg, hsl(187 95% 62%), hsl(210 90% 65%));
    --gradient-hero: radial-gradient(ellipse 80% 60% at 50% 0%, hsl(195 90% 60% / 0.28), transparent 70%);
    --gradient-mesh: radial-gradient(at 20% 20%, hsl(195 90% 60% / 0.22) 0px, transparent 50%),
                     radial-gradient(at 80% 30%, hsl(187 95% 70% / 0.18) 0px, transparent 50%),
                     radial-gradient(at 50% 90%, hsl(210 90% 65% / 0.12) 0px, transparent 50%);

    --shadow-glow: 0 20px 80px -20px hsl(195 90% 60% / 0.55);
    --shadow-soft: 0 10px 40px -15px hsl(0 0% 0% / 0.5);
    --shadow-card: 0 1px 0 0 hsl(240 10% 100% / 0.04) inset, 0 8px 24px -12px hsl(0 0% 0% / 0.5);
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
    font-feature-settings: "ss01", "cv11";
  }

  h1, h2, h3, h4, h5 {
    @apply font-display tracking-tight;
  }
}

@layer utilities {
  .bg-gradient-primary { background: var(--gradient-primary); }
  .bg-gradient-accent { background: var(--gradient-accent); }
  .bg-gradient-hero { background: var(--gradient-hero); }
  .bg-gradient-mesh { background: var(--gradient-mesh); }

  .text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .shadow-glow { box-shadow: var(--shadow-glow); }
  .shadow-soft { box-shadow: var(--shadow-soft); }
  .shadow-card { box-shadow: var(--shadow-card); }

  .glass {
    @apply bg-background/60 backdrop-blur-xl border border-border/60;
  }

  .grid-pattern {
    background-image:
      linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px),
      linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 60% 50% at 50% 30%, black 40%, transparent 80%);
  }
}
