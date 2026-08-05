import { motion } from "framer-motion";

const groups = [
  {
    label: "Languages & Frameworks",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Python", "PostgreSQL"],
  },
  {
    label: "AI & Tools",
    items: ["OpenAI API", "Prompt Engineering", "n8n", "LangChain", "AI Agents", "REST APIs", "Git", "Docker", "Vercel", "Supabase"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding" aria-labelledby="skills-heading">
      <div className="container-narrow">
        <div className="hairline mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="eyebrow">Stack</span>
          <h2
            id="skills-heading"
            className="font-display font-[700] text-3xl md:text-4xl mt-4 text-foreground"
          >
            What we build with
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: gi * 0.08 }}
            >
              <h3 className="eyebrow mb-4">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-xs px-3 py-1.5 rounded-md text-foreground"
                    style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
