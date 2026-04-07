import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI Website Chatbot",
    description: "An intelligent chatbot powered by AI APIs that provides instant customer support and lead qualification for SaaS companies.",
    tech: ["React", "Node.js", "OpenAI API", "WebSocket"],
    color: "#00f5ff",
  },
  {
    title: "Startup Landing Page",
    description: "A high-converting landing page with micro-animations, responsive design, and optimized Core Web Vitals for a tech startup.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "#7c3aed",
  },
  {
    title: "n8n Automation Pipeline",
    description: "A workflow automation system that connects APIs, schedules tasks, and processes data with minimal configuration using n8n.",
    tech: ["n8n", "Python", "REST APIs", "PostgreSQL"],
    color: "#00f5ff",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="cyan-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="eyebrow">Portfolio</span>
          <h2 className="font-display font-[700] text-3xl md:text-4xl mt-3 text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row overflow-hidden rounded-lg transition-all duration-250"
              style={{
                background: "#0f0f1a",
                borderLeft: `3px solid ${project.color}`,
                border: "1px solid #1e1e35",
                borderLeftWidth: 3,
                borderLeftColor: project.color,
                minHeight: 200,
              }}
            >
              {/* Left — info 60% */}
              <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-display font-[700] text-xl mb-2 text-foreground">{project.title}</h3>
                <p className="text-sm font-body leading-relaxed mb-4" style={{ color: "#6b6b8a" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md font-body"
                      style={{ background: "#16162a", color: "#6b6b8a", border: "1px solid #1e1e35" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5 text-xs cursor-pointer transition-colors font-body" style={{ color: "#00f5ff" }} role="button" tabIndex={0}>
                    <ExternalLink size={14} /> Live Demo
                  </div>
                  <div className="flex items-center gap-1.5 text-xs cursor-pointer transition-colors font-body" style={{ color: "#6b6b8a" }} role="button" tabIndex={0}>
                    <Github size={14} /> Source
                  </div>
                </div>
              </div>

              {/* Right — mockup 40% */}
              <div
                className="md:w-[40%] min-h-[160px] md:min-h-0 relative overflow-hidden flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, ${project.color}08 20px, ${project.color}08 21px)`,
                }}
              >
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-250 absolute inset-0 flex items-center justify-center backdrop-blur-sm" style={{ background: "rgba(8,8,16,0.7)" }}>
                  <span className="font-display font-[700] text-sm flex items-center gap-2" style={{ color: "#00f5ff" }}>
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
