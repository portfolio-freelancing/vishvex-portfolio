import { motion } from "framer-motion";
import { User, Cpu, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-medium">About Us</span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold font-display mt-3 mb-6">
              A Modern <span className="gradient-text">Development Agency</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vishvex is a modern AI-powered development agency that builds websites, AI tools, workflow automations, and automation systems for startups, creators, and businesses. We combine cutting-edge AI development with clean design to deliver powerful digital solutions and scalable software products.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Cpu size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground">AI Development</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap size={18} className="text-neon" />
                <span className="text-sm text-muted-foreground">Automation</span>
              </div>
            </div>
          </div>

          <div className="gradient-border p-8">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                <User size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">Vishnu Vardhan Nayak</h3>
                <p className="text-sm text-muted-foreground">Founder, Vishvex</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              AI Developer and Prompt Engineer with a passion for building intelligent digital solutions. Specializing in creating AI-powered tools, modern websites, and automation systems that help businesses scale.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["AI Developer", "Prompt Engineer", "Full Stack"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;