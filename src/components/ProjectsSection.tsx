import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Website Chatbot",
    description: "Intelligent chatbot for instant customer support and lead qualification.",
    tech: ["React", "Node.js", "OpenAI"],
    gradient: "from-primary/20 to-secondary/20",
    accent: "260 80% 62%",
  },
  {
    title: "Startup Landing Page",
    description: "High-converting landing page with animations and optimized performance.",
    tech: ["React", "Tailwind", "Framer Motion"],
    gradient: "from-neon/10 to-secondary/10",
    accent: "170 100% 50%",
  },
  {
    title: "Workflow Automation",
    description: "API automation tool that schedules tasks and processes data at scale.",
    tech: ["Python", "REST APIs", "n8n"],
    gradient: "from-accent/15 to-primary/10",
    accent: "280 100% 70%",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <div className="section-divider mb-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium">Work</span>
            <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
              Selected projects
            </h2>
          </div>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/30"
            >
              <div className="grid md:grid-cols-5 items-center">
                {/* Preview area */}
                <div className={`md:col-span-2 h-48 md:h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: `radial-gradient(circle at center, hsl(${project.accent} / 0.1), transparent 70%)` }}
                  />
                  <div className="w-32 h-20 rounded-lg border border-border/50 bg-card/80 backdrop-blur-sm shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                    <div className="p-3 space-y-1.5">
                      <div className="h-1.5 rounded-full bg-muted-foreground/20 w-3/4" />
                      <div className="h-1.5 rounded-full bg-muted-foreground/15 w-1/2" />
                      <div className="h-1.5 rounded-full bg-primary/30 w-2/3" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-semibold text-xl">{project.title}</h3>
                    <div className="w-8 h-8 rounded-lg border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary/30">
                      <ArrowUpRight size={14} className="text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
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
