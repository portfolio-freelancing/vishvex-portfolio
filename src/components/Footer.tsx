const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="font-display text-xl font-bold gradient-text">Lord Creation</span>
            <p className="text-sm text-muted-foreground mt-2">
              AI-powered development for the modern web.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              {["Fiverr", "GitHub", "LinkedIn"].map((label) => (
                <a
                  key={label}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Lord Creation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
