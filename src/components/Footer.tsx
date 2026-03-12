import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  "AI Development",
  "Website Development",
  "n8n Workflow Automation",
  "Automation Systems",
  "Prompt Engineering",
  "Web Application Development",
  "API Integration",
  "UI / UX Design",
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-4" role="contentinfo">
      <div className="container-narrow">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Vishvex logo" className="h-8 w-8 rounded-md" />
              <span className="font-display text-xl font-bold gradient-text">Vishvex</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              AI-powered development agency for modern websites, automation systems, and scalable digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Quick Links</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Services</h4>
            <ul className="flex flex-col gap-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:contact@askvishvex.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@askvishvex.com
              </a>
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
            © {new Date().getFullYear()} Vishvex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;