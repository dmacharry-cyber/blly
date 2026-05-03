import { Github, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/blly-logo.png";

const socials = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const groups = [
  { title: "Product", items: ["Features", "Watch to Win", "Bill Budgeting"] },
  { title: "Company", items: ["About", "Community", "Careers"] },
  { title: "Resources", items: ["Docs", "Blog", "Status"] },
];

export const Footer = () => (
  <footer className="relative border-t border-border/60 mt-12">
    <div className="absolute inset-0 bg-gradient-mesh opacity-40 pointer-events-none" aria-hidden />
    <div className="container relative py-16">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="blly logo" className="h-9 w-9 rounded-full" />
            <span className="font-display font-bold text-xl">blly</span>
          </a>
          <p className="mt-4 text-muted-foreground max-w-xs">
            Watch to Win. Uplift creators, ease your bills, and join a global community in 200+ countries.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="h-10 w-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="font-medium text-sm">{g.title}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-foreground transition-colors">{i}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 pt-6 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} blly, Inc. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);
