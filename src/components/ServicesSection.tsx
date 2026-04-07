import { motion } from "framer-motion";
import { Brain, Workflow, Code, Cpu, Globe, Plug, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  { icon: Brain, title: "AI Agents", description: "Autonomous AI agents that reason, act, and integrate with your business tools.", large: true },
  { icon: Workflow, title: "Automation Workflows", description: "n8n and custom automation pipelines that eliminate manual work.", large: false },
  { icon: Code, title: "SaaS Development", description: "Scalable SaaS platforms built for growth.", large: false },
  { icon: Cpu, title: "Prompt Engineering", description: "Optimized prompts for reliable AI outputs.", large: false },
  { icon: Globe, title: "Web Development", description: "Modern, fast, responsive websites.", large: false },
  { icon: Plug, title: "API Integrations", description: "Connect platforms, payments, and data sources seamlessly.", large: true },
  { icon: MessageSquare, title: "Chatbot Development", description: "Intelligent chatbots for support, sales, and lead qualification.", large: false },
  { icon: TrendingUp, title: "Lead Generation", description: "AI-powered systems that capture and qualify leads automatically.", large: false },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-heading">
      <div className="container-narrow">
        <div className="cyan-divider mb-16" />

        {/* Header — left aligned with right link */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
        >
          <div>
            <span className="eyebrow">What We Do</span>
            <h2 id="services-heading" className="font-display font-[700] text-3xl md:text-4xl mt-3 text-foreground">
              Services
            </h2>
            <p className="font-body text-sm mt-2 max-w-md" style={{ color: "#6b6b8a" }}>
              End-to-end AI and software development for startups and businesses.
            </p>
          </div>
          <div
            onClick={() => document.getElementById("work-request")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center gap-2 text-sm font-display font-[700] cursor-pointer"
            style={{ color: "#00f5ff" }}
            role="button"
            tabIndex={0}
          >
            All Services <ArrowRight size={14} />
          </div>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glow-card p-6 cursor-default ${service.large ? "sm:col-span-2" : ""}`}
            >
              <div
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-md flex items-center justify-center mb-4"
                style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.15)" }}
              >
                <service.icon size={service.large ? 28 : 22} style={{ color: "#00f5ff" }} />
              </div>
              <h3 className="font-display font-[700] text-lg mb-1 text-foreground">{service.title}</h3>
              {service.large && (
                <p className="text-sm font-body leading-relaxed" style={{ color: "#6b6b8a" }}>
                  {service.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
