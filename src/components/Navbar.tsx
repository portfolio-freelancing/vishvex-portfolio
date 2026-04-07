import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(l => l.href.replace("#", ""));
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation" style={{ height: 60 }}>
      <div className="container-narrow flex items-center justify-between h-[60px]">
        <a href="#" className="flex items-center gap-0">
          <span className="font-display text-[28px] font-[800]" style={{ color: "#00f5ff" }}>VX</span>
          <span className="font-display text-[28px] font-[800] text-foreground">ishvex</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-body transition-colors duration-250"
              style={{ color: activeSection === link.href.replace("#", "") ? "#00f5ff" : "#6b6b8a" }}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: "#00f5ff" }} />
              )}
            </a>
          ))}
          <a
            href="#work-request"
            className="px-5 py-2 rounded-md text-sm font-medium font-body transition-all duration-250 border"
            style={{
              borderColor: "#00f5ff",
              color: "#00f5ff",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00f5ff";
              e.currentTarget.style.color = "#080810";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#00f5ff";
            }}
          >
            Start a Project <ArrowRight size={14} className="inline ml-1" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
            style={{ background: "rgba(8,8,16,0.95)", borderTop: "1px solid rgba(0,245,255,0.15)" }}
          >
            <div className="container-narrow py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body transition-colors"
                  style={{ color: activeSection === link.href.replace("#", "") ? "#00f5ff" : "#6b6b8a" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#work-request"
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-md text-sm font-medium text-center border"
                style={{ borderColor: "#00f5ff", color: "#00f5ff" }}
              >
                Start a Project →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
