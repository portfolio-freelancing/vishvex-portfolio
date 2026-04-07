import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "12+", label: "Projects" },
  { value: "5+", label: "Clients" },
  { value: "3+", label: "Automations Deployed" },
];

const codeLines = [
  { text: "const", color: "#00f5ff" },
  { text: " agent", color: "#c084fc" },
  { text: " = ", color: "#6b6b8a" },
  { text: "new", color: "#00f5ff" },
  { text: " AIAgent", color: "#c084fc" },
  { text: "({", color: "#f0f0f0" },
];
const codeLines2 = [
  { text: "  model:", color: "#00f5ff" },
  { text: ' "gpt-4-turbo"', color: "#4ade80" },
  { text: ",", color: "#f0f0f0" },
];
const codeLines3 = [
  { text: "  tools:", color: "#00f5ff" },
  { text: " [", color: "#f0f0f0" },
  { text: "search", color: "#c084fc" },
  { text: ", ", color: "#f0f0f0" },
  { text: "analyze", color: "#c084fc" },
  { text: "]", color: "#f0f0f0" },
  { text: ",", color: "#f0f0f0" },
];
const codeLines4 = [
  { text: "  memory:", color: "#00f5ff" },
  { text: " true", color: "#c084fc" },
];
const codeLines5 = [
  { text: "});", color: "#f0f0f0" },
];
const codeLines6 = [
  { text: "await", color: "#00f5ff" },
  { text: " agent", color: "#c084fc" },
  { text: ".", color: "#f0f0f0" },
  { text: "run", color: "#c084fc" },
  { text: "(", color: "#f0f0f0" },
  { text: '"Build something amazing"', color: "#4ade80" },
  { text: ");", color: "#f0f0f0" },
];

const allCodeLines = [codeLines, codeLines2, codeLines3, codeLines4, codeLines5, [], codeLines6];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-[60px]">
      {/* Geometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,245,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative container-narrow w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-8">
          {/* Left side — 55% */}
          <div className="lg:w-[55%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="eyebrow">AI Development Agency</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-[800] mt-4 mb-6 leading-[1.05]"
              style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
            >
              We Build{" "}
              <span className="gradient-text">AI</span>
              <br />
              That Works.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg font-body max-w-[480px] mb-8 mx-auto lg:mx-0"
              style={{ color: "#6b6b8a" }}
            >
              Vishvex is an AI-powered software development agency specializing in AI agents, automation workflows, and scalable digital platforms for businesses and startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center lg:justify-start"
            >
              <div
                onClick={() => document.getElementById("work-request")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-md font-medium font-display text-sm cursor-pointer transition-all duration-250 hover:opacity-90 flex items-center gap-2"
                style={{ background: "var(--gradient-primary)", color: "#fff" }}
                role="button"
                tabIndex={0}
              >
                Start a Project <ArrowRight size={16} />
              </div>
              <div
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3.5 rounded-md font-medium font-display text-sm cursor-pointer border transition-all duration-250 hover:bg-muted"
                style={{ borderColor: "#1e1e35", color: "#f0f0f0" }}
                role="button"
                tabIndex={0}
              >
                See Our Work
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6 justify-center lg:justify-start"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  <div className="text-center lg:text-left">
                    <div className="font-display font-[800] text-xl" style={{ color: "#00f5ff" }}>{stat.value}</div>
                    <div className="text-xs font-body" style={{ color: "#6b6b8a" }}>{stat.label}</div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-8" style={{ background: "rgba(0,245,255,0.2)" }} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side — 45% Terminal mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-[45%] w-full"
          >
            <div className="rounded-lg overflow-hidden border" style={{ background: "#0a0a18", borderColor: "#1e1e35" }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "#1e1e35" }}>
                <div className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
                <div className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                <span className="ml-3 text-xs font-body" style={{ color: "#6b6b8a" }}>agent.ts</span>
              </div>
              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-7">
                {allCodeLines.map((line, lineIdx) => (
                  <div key={lineIdx} className="flex">
                    <span className="w-6 text-right mr-4 select-none" style={{ color: "#2a2a45" }}>{lineIdx + 1}</span>
                    {line.length === 0 ? (
                      <span>&nbsp;</span>
                    ) : (
                      line.map((segment, segIdx) => (
                        <span key={segIdx} style={{ color: segment.color }}>{segment.text}</span>
                      ))
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
