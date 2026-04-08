import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";

const contacts = [
  { platform: "Twitter / X", handle: "@vishvex", icon: Twitter, href: "#" },
  { platform: "LinkedIn", handle: "Vishnu Vardhan nayak", icon: Linkedin, href: "https://www.linkedin.com/in/gugulothu-vishnu-vardhan-nayak-86ba42365" },
  { platform: "GitHub", handle: "vishnu vardhan nayak", icon: Github, href: "https://github.com/vishnuvardhannayak108" },
  { platform: "Email", handle: "contact@askvishvex.online", icon: Mail, href: "mailto:contact@askvishvex.online" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="cyan-divider mb-16" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-[45%]"
          >
            <span className="eyebrow">Contact</span>
            <h2 className="font-display font-[700] text-4xl md:text-5xl mt-3 mb-4 text-foreground leading-tight">
              Let's Build<br />
              <span className="gradient-text">Something.</span>
            </h2>
            <p className="font-body mb-4" style={{ color: "#6b6b8a" }}>
              Have a project in mind? Let's talk about how we can bring your idea to life with AI.
            </p>
            <p className="font-body text-sm" style={{ color: "#6b6b8a" }}>
              Or email: <span style={{ color: "#00f5ff" }}>contact@askvishvex.online</span>
            </p>
          </motion.div>

          {/* Right — 2x2 grid */}
          <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.platform}
                href={c.href}
                target={c.platform === "Email" ? undefined : "_blank"}
                rel={c.platform === "Email" ? undefined : "noopener noreferrer"}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group glow-card p-6 flex flex-col gap-4"
              >
                <c.icon size={32} style={{ color: "#00f5ff" }} />
                <div>
                  <h3 className="font-display font-[700] text-base text-foreground">{c.platform}</h3>
                  <p className="text-sm font-body" style={{ color: "#6b6b8a" }}>{c.handle}</p>
                </div>
                <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#00f5ff" }} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
