import { motion } from "framer-motion";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" aria-labelledby="services-heading">
      <div className="container-narrow">
        <div className="hairline mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="eyebrow">Capabilities</span>
          <h2
            id="services-heading"
            className="font-display font-[700] text-3xl md:text-4xl mt-4 text-foreground"
          >
            What we install
          </h2>
          <p className="font-body text-sm mt-3 text-muted-foreground">
            Nine capabilities, one operator. Each line is the outcome you get — not the
            technology we happen to use.
          </p>
        </motion.div>

        <ul className="border-t border-border">
          {services.map((service, i) => (
            <motion.li
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05 }}
              className="group border-b border-border"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-6 transition-colors duration-200 group-hover:bg-elevated px-1 sm:px-3 -mx-1 sm:-mx-3 rounded-md">
                <div className="flex items-center gap-4 sm:w-[280px] shrink-0">
                  <span className="w-9 h-9 rounded-md flex items-center justify-center signal-tint shrink-0">
                    <service.icon size={16} className="text-primary" />
                  </span>
                  <h3 className="font-display font-[600] text-base text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground sm:pl-0 pl-[52px]">
                  {service.outcome}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
