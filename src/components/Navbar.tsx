import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/vishvex-logo.png";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.split("#")[1] ?? "");
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass"
      role="navigation"
      aria-label="Main navigation"
      style={{ height: 64 }}
    >
      <div className="container-narrow px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Vishvex" width={26} height={26} className="w-[26px] h-[26px] object-contain" />
          <span className="font-display text-[20px] font-[700] tracking-[-0.02em] text-foreground">
            Vishvex
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.split("#")[1] ?? "";
            const active = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "true" : undefined}
                className={`text-sm font-body transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a href="/#work-request" className="btn-primary !px-5 !py-2">
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "hsl(var(--background) / 0.97)",
              borderTop: "1px solid hsl(var(--border))",
            }}
          >
            <div className="container-narrow px-4 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#work-request"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
