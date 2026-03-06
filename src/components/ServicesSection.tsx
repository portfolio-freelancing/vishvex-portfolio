import { motion } from "framer-motion";
import { Globe, Bot, Brain, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites built with the latest frameworks and performance-first approach.",
  },
  {
    icon: Bot,
    title: "Discord Bot Development",
    description: "Custom Discord bots with moderation, automation, games, and community management features.",
  },
  {
    icon: Brain,
    title: "Prompt Engineering",
    description: "Expert prompt design for ChatGPT, Claude, and other AI models to maximize output quality.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Clean, intuitive interfaces with modern design principles and smooth user experiences.",
  },
  {
    icon: Rocket,
    title: "Website Deployment & Setup",
    description: "Full deployment pipeline setup with CI/CD, hosting configuration, and domain management.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card gradient-border p-6 group cursor-default"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "var(--gradient-primary)" }}
              >
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
