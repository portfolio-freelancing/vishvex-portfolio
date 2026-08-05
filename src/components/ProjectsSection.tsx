import { motion } from "framer-motion";
import chatbotShot from "@/assets/project-chatbot.jpg";
import landingShot from "@/assets/project-landing.jpg";
import workflowShot from "@/assets/project-workflow.jpg";

const projects = [
  {
    title: "AI Website Chatbot",
    description:
      "An AI agent that answers product questions, qualifies the enquiry and hands a scored lead to the sales inbox — first reply in under ten seconds.",
    outcome: "First-response time cut from hours to seconds",
    tech: ["React", "Node.js", "OpenAI API", "WebSocket"],
    image: chatbotShot,
    alt: "Support chatbot dashboard showing a WhatsApp conversation alongside an automatically filled lead qualification panel",
  },
  {
    title: "Startup Landing Page",
    description:
      "A conversion-focused marketing site with real Core Web Vitals budgets, semantic markup and an enquiry flow wired straight into the founder's CRM.",
    outcome: "Sub-second LCP, enquiries routed automatically",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: landingShot,
    alt: "Dark B2B startup landing page with a bold headline, pipeline chart and a row of performance statistics",
  },
  {
    title: "n8n Automation Pipeline",
    description:
      "A self-hosted workflow that pulls data on a schedule, branches on conditions, summarises with an AI step and emails the result — no one starts it manually.",
    outcome: "A recurring 6-hour manual task removed entirely",
    tech: ["n8n", "Python", "REST APIs", "PostgreSQL"],
    image: workflowShot,
    alt: "Node-based n8n workflow editor showing a scheduled trigger branching into AI summarisation and email delivery steps",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="container-narrow">
        <div className="hairline mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="eyebrow">Selected work</span>
          <h2
            id="projects-heading"
            className="font-display font-[700] text-3xl md:text-4xl mt-4 text-foreground"
          >
            Systems in production
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="surface surface-hover overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-[55%] p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-display font-[600] text-xl mb-3 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-body leading-relaxed mb-4 text-muted-foreground">
                  {project.description}
                </p>
                <p className="font-mono text-xs text-primary mb-5">{project.outcome}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-md text-muted-foreground"
                      style={{ background: "hsl(var(--surface-elevated))", border: "1px solid hsl(var(--border))" }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-[45%] border-t md:border-t-0 md:border-l border-border">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover object-left-top"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
