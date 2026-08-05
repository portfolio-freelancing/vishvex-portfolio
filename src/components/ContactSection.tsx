import { motion } from "framer-motion";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    platform: "LinkedIn",
    handle: "Vishnu Vardhan Nayak",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vishnu-vardhan-nayak-gugulothu-86ba42365",
    external: true,
  },
  {
    platform: "GitHub",
    handle: "Vishnu Vardhan Nayak",
    icon: Github,
    href: "https://github.com/vishnuvardhannayak108",
    external: true,
  },
  {
    platform: "Email",
    handle: "contact@vishvex.online",
    icon: Mail,
    href: "mailto:contact@vishvex.online",
    external: false,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="container-narrow">
        <div className="hairline mb-16" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:w-[46%]"
          >
            <span className="eyebrow">Contact</span>
            <h2
              id="contact-heading"
              className="font-display font-[700] text-3xl md:text-5xl mt-4 mb-5 text-foreground leading-[1.05]"
            >
              Tell us what's<br />
              eating your hours.
            </h2>
            <p className="font-body text-muted-foreground">
              Send over the process you'd rather not do by hand. We'll tell you whether it's
              worth automating — and what it would take.
            </p>
          </motion.div>

          <div className="lg:w-[54%] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.platform}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group surface surface-hover p-6 flex flex-col gap-5"
              >
                <c.icon size={22} className="text-primary" />
                <div>
                  <h3 className="font-display font-[600] text-base text-foreground flex items-center gap-1.5">
                    {c.platform}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                  </h3>
                  <p className="text-sm font-body text-muted-foreground">{c.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
