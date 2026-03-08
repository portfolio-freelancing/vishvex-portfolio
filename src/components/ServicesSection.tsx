import { motion } from "framer-motion";
import { Globe, Brain, Palette, Rocket, Code, Workflow, Plug } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Development & Prompt Engineering",
    description: "We design intelligent AI solutions and prompt engineering systems that power smart applications, automation workflows, and scalable digital products.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "We build fast, modern, and responsive websites optimized for performance, SEO, and conversion-focused user experiences.",
  },
  {
    icon: Code,
    title: "Web Application Development",
    description: "Custom web applications and SaaS platforms designed for scalability, security, and high-performance digital experiences.",
  },
  {
    icon: Workflow,
    title: "n8n Workflow Automation",
    description: "We build powerful automation workflows using n8n to connect APIs, AI tools, databases, and business applications. Our automation systems reduce manual work, streamline operations, and help businesses scale faster.",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    description: "Automation solutions that streamline workflows, reduce manual tasks, and improve productivity through smart integrations and digital systems.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless API integrations connecting third-party platforms, payment systems, and automation tools to create powerful digital ecosystems.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Clean and modern user interface design focused on usability, engagement, and seamless digital experiences.",
  },
  {
    icon: Rocket,
    title: "Website Deployment & Cloud Hosting",
    description: "Professional website deployment with domain setup, cloud hosting configuration, performance optimization, and secure infrastructure.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-heading">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">What We Do</span>
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold font-display mt-3">
            AI & Software <span className="gradient-text">Development Services</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.article
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;