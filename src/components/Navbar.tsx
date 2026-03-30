import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#food", label: "Food" },
  { href: "#shuls", label: "Synagogues" },
  { href: "#community", label: "Community" },
  { href: "#eruv", label: "Eruv" },
  { href: "#explore", label: "Explore" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className={`font-display font-bold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Jewish KC
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-body text-sm font-medium transition-colors hover:opacity-80 ${
                scrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 font-body text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
