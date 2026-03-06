import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Website Chatbot",
    description: "An intelligent chatbot powered by AI APIs that provides instant customer support and lead qualification.",
    tech: ["React", "Node.js", "OpenAI API"],
    color: "hsl(220 70% 55%)",
  },
  {
    title: "Startup Landing Page",
    description: "A high-converting landing page with animations, responsive design, and optimized performance for a tech startup.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    color: "hsl(170 100% 40%)",
  },
  {
    title: "Automation Tool",
    description: "A workflow automation tool that connects APIs, schedules tasks, and processes data with minimal configuration.",
    tech: ["Python", "REST APIs", "Automation"],
    color: "hsl(280 100% 70%)",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card gradient-border overflow-hidden group"
            >
              {/* Color strip */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-1.5 text-xs text-primary hover:text-foreground transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                    <Github size={14} /> Source
                  </button>
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
