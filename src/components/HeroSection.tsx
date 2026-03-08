import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse-glow"
          style={{ background: "hsl(270 80% 60% / 0.15)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] animate-pulse-glow"
          style={{ background: "hsl(220 70% 55% / 0.1)", animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-30"
          style={{ background: "hsl(170 100% 50% / 0.05)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative container-narrow text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 mb-8">
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
              AI Development Agency
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold font-display leading-tight mb-6"
        >
          <span className="gradient-text">Vishvex</span> – AI Development
          <br />
          & <span className="gradient-text-accent">Digital Solutions Agency</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Vishvex is an AI-powered software development agency specializing in modern website development, n8n workflow automation, AI automation systems, prompt engineering, and scalable digital platforms for businesses and startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-105 flex items-center gap-2"
            style={{ background: "var(--gradient-primary)" }}
          >
            View Projects
            <ArrowRight size={18} />
          </a>
          <a
            href="#work-request"
            className="px-8 py-3.5 rounded-lg font-medium border border-border text-foreground hover:bg-muted transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
          <a
            href="#book-call"
            className="px-8 py-3.5 rounded-lg font-medium border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
          >
            Book Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;