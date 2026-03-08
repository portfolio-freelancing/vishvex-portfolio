import { motion } from "framer-motion";
import { Globe, Brain, Code, Workflow, Plug, Cog, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Intelligent AI solutions, prompt engineering, and smart automation systems.",
    accent: "260 80% 62%",
    span: "lg:col-span-2",
  },
  {
    icon: Workflow,
    title: "n8n Automation",
    description: "Powerful workflow automation connecting APIs, AI tools, and business apps.",
    accent: "170 100% 50%",
    span: "",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Fast, modern, SEO-optimized websites built for conversion.",
    accent: "215 70% 55%",
    span: "",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Custom SaaS platforms designed for scale and performance.",
    accent: "280 100% 70%",
    span: "lg:col-span-2",
  },
  {
    icon: Cog,
    title: "Automation",
    description: "Streamline operations with smart integrations.",
    accent: "200 80% 55%",
    span: "",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connect platforms and create powerful ecosystems.",
    accent: "320 80% 60%",
    span: "",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean interfaces focused on usability and engagement.",
    accent: "260 80% 62%",
    span: "",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Cloud hosting, domain setup, and performance optimization.",
    accent: "170 100% 50%",
    span: "",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-heading">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Services</span>
          <h2 id="services-heading" className="text-3xl md:text-5xl font-bold font-display mt-3 max-w-xl">
            What we build
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg ${service.span}`}
              style={{
                ["--service-accent" as string]: service.accent,
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(${service.accent} / 0.06), transparent 60%)`,
                }}
              />

              <div className="relative z-10">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `hsl(${service.accent} / 0.1)`,
                    boxShadow: `0 0 0 hsl(${service.accent} / 0)`,
                  }}
                >
                  <service.icon size={20} style={{ color: `hsl(${service.accent})` }} />
                </div>
                <h3 className="font-display font-semibold text-base mb-1.5">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
