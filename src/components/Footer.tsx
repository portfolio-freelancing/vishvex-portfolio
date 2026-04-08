const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const footerServices = [
  "AI Agents",
  "Automation Workflows",
  "SaaS Development",
  "Web Development",
  "Prompt Engineering",
  "API Integrations",
  "Chatbots",
  "Lead Generation",
];

const Footer = () => {
  return (
    <footer className="px-4 py-12" role="contentinfo">
      <div className="container-narrow">
        <div className="cyan-divider mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-0 mb-3">
              <span className="font-display text-[22px] font-[800]" style={{ color: "#00f5ff" }}>VX</span>
              <span className="font-display text-[22px] font-[800] text-foreground">ishvex</span>
            </div>
            <p className="text-sm font-body" style={{ color: "#6b6b8a" }}>
              AI-powered development agency for modern websites, automation systems, and scalable digital solutions.
            </p>
          </div>

          <div>
            <h4 className="font-display font-[700] text-sm mb-3 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-body transition-colors" style={{ color: "#6b6b8a" }}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display font-[700] text-sm mb-3 text-foreground">Services</h4>
            <ul className="flex flex-col gap-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm font-body transition-colors" style={{ color: "#6b6b8a" }}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-[700] text-sm mb-3 text-foreground">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:contact@askvishvex.com" className="text-sm font-body transition-colors" style={{ color: "#6b6b8a" }}>
                contact@askvishvex.com
              </a>
              {[
                { label: "GitHub", href: "https://github.com/vishnuvardhannayak108" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/gugulothu-vishnu-vardhan-nayak-86ba42365" },
              ].map(({ label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-sm font-body transition-colors" style={{ color: "#6b6b8a" }}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="cyan-divider" />
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body" style={{ color: "#6b6b8a" }}>
            © {new Date().getFullYear()} Vishvex. All rights reserved.
          </p>
          <span className="text-xs px-3 py-1 rounded-md font-body" style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#6b6b8a" }}>
            Built with AI
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
