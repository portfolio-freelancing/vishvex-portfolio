import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Brain, CalendarCheck, BellRing } from "lucide-react";

const nodes = [
  { label: "New WhatsApp Enquiry", kind: "Trigger", icon: MessageCircle },
  { label: "AI Qualifies Lead", kind: "Agent", icon: Brain },
  { label: "Books Slot in Calendar", kind: "Action", icon: CalendarCheck },
  { label: "Notifies Owner", kind: "Action", icon: BellRing },
];

const PipelineVisual = () => {
  const reduce = useReducedMotion();

  return (
    <div className="surface p-5 sm:p-6 w-full" aria-hidden="false">
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Live enquiry pipeline
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          running
        </span>
      </div>

      <ol className="relative">
        {/* connector */}
        <div
          className="absolute left-[19px] top-6 bottom-6 w-px"
          style={{ background: "hsl(var(--border))" }}
        />
        {!reduce && (
          <motion.div
            className="absolute left-[16px] w-[7px] h-[7px] rounded-full"
            style={{ background: "hsl(var(--primary))", boxShadow: "0 0 12px hsl(var(--primary) / 0.8)" }}
            initial={{ top: 24, opacity: 0 }}
            animate={{ top: ["24px", "calc(100% - 24px)"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut", delay: 0.8 }}
          />
        )}

        {nodes.map((node, i) => (
          <motion.li
            key={node.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.18 }}
            className="relative flex items-center gap-4 py-3"
          >
            <span
              className="relative z-10 shrink-0 w-10 h-10 rounded-md flex items-center justify-center signal-tint"
              style={{ background: "hsl(var(--surface-elevated))" }}
            >
              <node.icon size={17} className="text-primary" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {node.kind}
              </span>
              <span className="block font-body text-sm text-foreground truncate">{node.label}</span>
            </span>
          </motion.li>
        ))}
      </ol>

      <div className="hairline my-5" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="font-mono text-lg text-primary">8s</div>
          <div className="font-body text-xs text-muted-foreground">Median first reply</div>
        </div>
        <div>
          <div className="font-mono text-lg text-primary">24/7</div>
          <div className="font-body text-xs text-muted-foreground">Runs unattended</div>
        </div>
      </div>
    </div>
  );
};

const stats = [
  { value: "12+", label: "Systems shipped" },
  { value: "5+", label: "Clients on retainer" },
  { value: "15h", label: "Admin saved / week" },
];

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative flex items-center overflow-hidden pt-[120px] pb-[100px] px-4 sm:px-6 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="relative container-narrow w-full">
        <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-16">
          {/* Left */}
          <div className="lg:w-[56%]">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow block"
            >
              AI operations studio · Hyderabad
            </motion.span>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="font-display font-[800] mt-5 mb-6 leading-[1.04] text-foreground"
              style={{ fontSize: "clamp(40px, 5.6vw, 76px)", letterSpacing: "-0.02em" }}
            >
              Every enquiry answered,<br />
              qualified and booked —{" "}
              <span className="text-primary">without you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-base sm:text-lg font-body max-w-[520px] mb-9 text-muted-foreground"
            >
              Vishvex installs AI agents, n8n automation workflows, website development and
              scalable digital platforms into coaching centres, clinics and brokerages — then
              keeps them running.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <button type="button" className="btn-primary" onClick={() => scrollTo("work-request")}>
                Start a project
              </button>
              <button type="button" className="btn-ghost" onClick={() => scrollTo("projects")}>
                See our work
              </button>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="flex flex-wrap gap-x-10 gap-y-5"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-body text-xs text-muted-foreground order-2">{stat.label}</dt>
                  <dd className="font-mono text-xl text-foreground">{stat.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right — signature pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-[44%] w-full"
          >
            <PipelineVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
