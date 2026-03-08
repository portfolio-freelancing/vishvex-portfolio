import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";

const links = [
  { label: "contact@askvishvex.com", url: "mailto:contact@askvishvex.com", icon: <Mail size={20} />, isEmail: true },
  { label: "Fiverr", url: "#", icon: <span className="text-xl">🟢</span> },
  { label: "GitHub", url: "#", icon: <span className="text-xl">⚡</span> },
  { label: "LinkedIn", url: "#", icon: <span className="text-xl">🔗</span> },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target={link.isEmail ? undefined : "_blank"}
              rel={link.isEmail ? undefined : "noopener noreferrer"}
              className="glow-card gradient-border px-8 py-4 flex items-center gap-3 group"
            >
              {link.icon}
              <span className="font-medium">{link.label}</span>
              {!link.isEmail && <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
