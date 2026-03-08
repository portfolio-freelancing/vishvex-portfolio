import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Python", "Node.js", "REST APIs", "PostgreSQL"],
  },
  {
    label: "AI & Automation",
    skills: ["Prompt Engineering", "AI APIs", "n8n", "Chatbots", "Workflow Automation"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-narrow">
        <div className="section-divider mb-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Stack</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 hover:border-primary/20 transition-colors duration-300"
            >
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-primary mb-4">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-muted text-foreground border border-border hover:border-primary/30 transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
