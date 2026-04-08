import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const facts = [
  { label: "Role", value: "Founder " },
  { label: "Industries", value: "Startups & agencies" },
  { label: "Focus", value: "Performance & Scale" },
  { label: "We deliver", value: "Leads, Efficiency, growth" },
];

const badges = ["AI Developer", "Prompt Engineer", "Full Stack", "Automation"];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-narrow">
        <div className="cyan-divider mb-16" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Left — visual */}
          <div className="lg:w-[45%] flex justify-center lg:justify-start relative">
            <div
              className="w-48 h-48 md:w-56 md:h-56 rounded-lg flex items-center justify-center font-display font-[800] text-7xl md:text-8xl select-none"
              style={{
                background: "var(--gradient-primary)",
                transform: "rotate(-3deg)",
                color: "rgba(255,255,255,0.9)",
              }}
            >
              VVN
            </div>
            {/* Floating badges */}
            <div className="absolute -bottom-4 right-4 lg:right-auto lg:-right-4 flex flex-wrap gap-2 max-w-[200px]">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1 rounded-md font-body"
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#00f5ff" }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — text */}
          <div className="lg:w-[55%]">
            <span className="eyebrow">About</span>
            <h2 id="about-heading" className="font-display font-[700] text-3xl md:text-4xl mt-3 mb-6 text-foreground">
              The Builder Behind <span className="gradient-text">the Agency</span>
            </h2>
            <p className="font-body mb-4 leading-relaxed" style={{ color: "#6b6b8a" }}>
              Vishvex is a modern AI development and automation agency focused on helping businesses scale through intelligent systems, high-performance websites, and workflow automation.
            </p>
            <p className="font-body mb-4 leading-relaxed" style={{ color: "#6b6b8a" }}>
              Founded by Vishnu Vardhan Nayak, the agency specializes in building scalable digital solutions that automate operations, optimize lead generation, and enhance user experiences.
            </p>
            <p className="font-body mb-8 leading-relaxed" style={{ color: "#6b6b8a" }}>
              With expertise in AI development, automation systems, API integrations, and full-stack web development, Vishvex delivers end-to-end solutions tailored for startups, agencies, and growing businesses.
              {"\n\n\n"}
              Every solution is designed with one goal in mind — to save time, increase efficiency, and drive measurable growth.
            </p>

            {/* 2x2 facts grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {facts.map((f) => (
                <div key={f.label} className="p-3 rounded-md" style={{ background: "#0f0f1a", border: "1px solid #1e1e35" }}>
                  <div className="text-xs font-body mb-1" style={{ color: "#6b6b8a" }}>{f.label}</div>
                  <div className="font-display font-[700] text-sm text-foreground">{f.value}</div>
                </div>
              ))}
            </div>

            <div
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-sm font-display font-[700] cursor-pointer transition-colors duration-250"
              style={{ color: "#00f5ff" }}
              role="button"
              tabIndex={0}
            >
              View Full Profile <ArrowRight size={14} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
