import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Brain, Code } from "lucide-react";

const floatingElements = [
  { icon: Brain, x: "10%", y: "20%", delay: 0, size: 20 },
  { icon: Code, x: "85%", y: "15%", delay: 0.5, size: 18 },
  { icon: Zap, x: "75%", y: "75%", delay: 1, size: 16 },
  { icon: Sparkles, x: "15%", y: "70%", delay: 1.5, size: 14 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{ background: "hsl(260 80% 50% / 0.08)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px]"
          style={{ background: "hsl(215 70% 50% / 0.06)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-20"
          style={{ background: "hsl(260 60% 30% / 0.08)" }}
        />
      </div>

      {/* Floating icons */}
      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-card/50 backdrop-blur-sm"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1, delay: el.delay + 0.5 }}
        >
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, delay: el.delay, ease: "easeInOut" }}
          >
            <el.icon size={el.size} className="text-primary/60" />
          </motion.div>
        </motion.div>
      ))}

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container-narrow text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          <span className="text-xs text-muted-foreground font-medium tracking-wide">
            AI-Powered Development
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.05] mb-6 tracking-tight"
        >
          We build software
          <br />
          <span className="gradient-text">that scales.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed"
        >
          AI development, workflow automation, and modern web applications for startups and businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#work-request"
            className="group px-7 py-3 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg flex items-center gap-2 text-sm"
            style={{ background: "var(--gradient-primary)" }}
          >
            Start a Project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-lg font-medium text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all duration-300 text-sm"
          >
            View Work
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-8 text-xs text-muted-foreground/60"
        >
          {["AI Systems", "Web Apps", "Automation", "n8n Workflows"].map((item) => (
            <span key={item} className="hidden sm:inline-flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
