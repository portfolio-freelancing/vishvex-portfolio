import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const facts = [
  { label: "Role", value: "Founder & operator" },
  { label: "Based in", value: "Hyderabad, India" },
  { label: "Focus", value: "AI operations & automation" },
  { label: "Engagement", value: "Fixed scope, then retainer" },
];

const badges = ["AI Developer", "Prompt Engineer", "Full Stack", "Automation"];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-narrow">
        <div className="hairline mb-16" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start"
        >
          {/* Left — founder card */}
          <div className="lg:w-[38%] w-full">
            <div className="surface p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-4">
                Operator
              </div>
              <h3 className="font-display font-[700] text-xl text-foreground">
                Vishnu Vardhan Nayak
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Founder, Vishvex — Hyderabad
              </p>

              <div className="hairline my-5" />

              <ul className="flex flex-wrap gap-2 mb-5">
                {badges.map((b) => (
                  <li key={b} className="font-mono text-[11px] px-2.5 py-1 rounded-md text-primary signal-tint">
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.linkedin.com/in/vishnu-vardhan-nayak-gugulothu-86ba42365"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-body text-primary"
              >
                View LinkedIn profile <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — text */}
          <div className="lg:w-[62%]">
            <span className="eyebrow">About</span>
            <h2
              id="about-heading"
              className="font-display font-[700] text-3xl md:text-4xl mt-4 mb-6 text-foreground"
            >
              A studio, not a software shop
            </h2>
            <p className="font-body mb-4 leading-relaxed text-muted-foreground">
              Vishvex builds and operates AI systems for businesses that don't have an
              engineering team — coaching centres, clinics, brokerages and small agencies.
            </p>
            <p className="font-body mb-4 leading-relaxed text-muted-foreground">
              Founded by Vishnu Vardhan Nayak, the studio specialises in scalable digital
              systems that automate operations, tighten lead follow-up and take repetitive work
              off the owner's desk.
            </p>
            <p className="font-body mb-8 leading-relaxed text-muted-foreground">
              Every engagement starts with the process, not the tooling. If a workflow doesn't
              save hours or win enquiries, we don't build it.
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((f) => (
                <div key={f.label} className="surface p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1.5">
                    {f.label}
                  </dt>
                  <dd className="font-body text-sm text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
