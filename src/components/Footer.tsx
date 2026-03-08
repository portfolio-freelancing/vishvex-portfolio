const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4" role="contentinfo">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div className="max-w-xs">
            <span className="font-display text-lg font-bold gradient-text">Vishvex</span>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              AI development agency building modern software, automation systems, and scalable platforms.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">Navigate</h4>
              <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                {["About", "Services", "Work", "Contact"].map((label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase()}`}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="mailto:contact@askvishvex.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Email
                </a>
                {["GitHub", "LinkedIn", "Fiverr"].map((label) => (
                  <a key={label} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <p className="text-xs text-muted-foreground/50 text-center">
          © {new Date().getFullYear()} Vishvex
        </p>
      </div>
    </footer>
  );
};

export default Footer;
