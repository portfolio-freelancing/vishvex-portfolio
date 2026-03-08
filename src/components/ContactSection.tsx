import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const links = [
  { label: "contact@askvishvex.com", url: "mailto:contact@askvishvex.com", isEmail: true },
  { label: "Fiverr", url: "#" },
  { label: "GitHub", url: "#" },
  { label: "LinkedIn", url: "#" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="section-divider mb-32" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mt-3 mb-4">
              Let's talk
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Have a project in mind? Reach out and let's discuss how we can help.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              Response within 24 hours
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.isEmail ? undefined : "_blank"}
                rel={link.isEmail ? undefined : "noopener noreferrer"}
                className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  {link.isEmail && <Mail size={18} className="text-primary" />}
                  <span className="font-medium text-sm">{link.label}</span>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
