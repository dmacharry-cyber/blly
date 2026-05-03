import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import logo from "@/assets/blly-logo.png";

const links = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#join", label: "Join" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav className="container glass rounded-2xl flex items-center justify-between h-14 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 group">
          <img src={logo} alt="blly logo" className="h-8 w-8 rounded-full group-hover:scale-110 transition-transform" />
          <span className="font-display font-bold text-lg tracking-tight">blly</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-primary hover:after:w-full after:transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
          <Button variant="hero" size="sm" className="hidden md:inline-flex" asChild>
            <a href="#join">Join free</a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="container md:hidden mt-2 glass rounded-2xl p-4 animate-fade-in">
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-foreground/90">{l.label}</a>
              </li>
            ))}
            <li>
              <Button variant="hero" className="w-full mt-2" asChild>
                <a href="#join" onClick={() => setOpen(false)}>Join free</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
