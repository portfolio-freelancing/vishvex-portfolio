import { motion } from "framer-motion";

const row1 = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js", "Python", "PostgreSQL"];
const row2 = ["OpenAI API", "Prompt Engineering", "n8n", "LangChain", "AI Agents", "REST APIs", "Git", "Docker", "Vercel", "Supabase"];

const SkillPill = ({ name }: { name: string }) => (
  <span
    className="inline-flex items-center px-4 py-2 rounded-md text-sm font-body whitespace-nowrap mx-2"
    style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
  >
    {name}
  </span>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="container-narrow">
        <div className="cyan-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="eyebrow">Expertise</span>
          <h2 className="font-display font-[700] text-3xl md:text-4xl mt-3 text-foreground">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee rows — full width */}
      <div className="space-y-4">
        {/* Row 1 — left */}
        <div className="overflow-hidden">
          <p className="eyebrow text-center mb-3">Languages & Frameworks</p>
          <div className="flex animate-marquee-left" style={{ width: "fit-content" }}>
            {[...row1, ...row1].map((skill, i) => (
              <SkillPill key={`r1-${i}`} name={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 — right */}
        <div className="overflow-hidden">
          <p className="eyebrow text-center mb-3">AI & Tools</p>
          <div className="flex animate-marquee-right" style={{ width: "fit-content" }}>
            {[...row2, ...row2].map((skill, i) => (
              <SkillPill key={`r2-${i}`} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
