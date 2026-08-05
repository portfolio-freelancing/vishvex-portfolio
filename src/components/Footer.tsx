import logo from "@/assets/vishvex-logo.png";

const quickLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

const industries = [
  { label: "Coaching Centres", href: "/coaching-automation" },
  { label: "Real Estate", href: "/real-estate-automation" },
  { label: "Clinics & Doctors", href: "/clinic-automation" },
];

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-14" role="contentinfo">
      <div className="container-narrow">
        <div className="hairline mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="" width={28} height={28} className="w-7 h-7 object-contain" />
              <span className="font-display text-[20px] font-[700] tracking-[-0.02em] text-foreground">
                Vishvex
              </span>
            </div>
            <p className="text-sm font-body text-muted-foreground">
              An AI operations studio installing agents, automation and web systems into real
              businesses.
            </p>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Navigate</h2>
            <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Industries</h2>
            <ul className="flex flex-col gap-2.5">
              {industries.map((ind) => (
                <li key={ind.href}>
                  <a
                    href={ind.href}
                    className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {ind.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4">Connect</h2>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:contact@vishvex.online"
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
              >
                contact@vishvex.online
              </a>
              {[
                { label: "GitHub", href: "https://github.com/vishnuvardhannayak108" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/vishnu-vardhan-nayak-gugulothu-86ba42365" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline" />
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-body text-muted-foreground">
            © {new Date().getFullYear()} Vishvex. All rights reserved.
          </p>
          <span className="font-mono text-[11px] text-muted-foreground">Hyderabad, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
