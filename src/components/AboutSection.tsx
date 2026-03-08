import { motion } from "framer-motion";
import { Cpu, Zap, Award, Users } from "lucide-react";

const stats = [
  { label: "Projects Delivered", value: "50+", icon: Award },
  { label: "Happy Clients", value: "30+", icon: Users },
  { label: "Technologies", value: "20+", icon: Cpu },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-divider mb-32" />
      <div className="container-narrow">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-xs uppercase tracking-widest text-primary font-medium">About</span>
            <h2 id="about-heading" className="text-3xl md:text-5xl font-bold font-display mt-3 mb-6 leading-tight">
              A modern agency for the
              <br />
              <span className="gradient-text">AI-first era</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
              We combine AI development with clean design to deliver powerful digital solutions. From intelligent automation to scalable web platforms — we build what matters.
            </p>

            <div className="flex gap-6 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <stat.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-lg">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Founder card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="rounded-xl border border-border bg-card p-6 relative overflow-hidden">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--gradient-primary)" }} />

              <div className="flex items-center gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-lg text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  V
                </div>
                <div>
                  <h3 className="font-display font-semibold">Vishnu Vardhan Nayak</h3>
                  <p className="text-sm text-muted-foreground">Founder · AI Developer</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Specializing in AI automation & scalable web systems. Building intelligent solutions that help businesses grow.
              </p>

              <div className="flex gap-2 flex-wrap">
                {["AI Development", "Prompt Engineering", "Full Stack", "Automation"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-5 pt-5 border-t border-border">
                <Zap size={14} className="text-neon" />
                <span className="text-xs text-muted-foreground">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
