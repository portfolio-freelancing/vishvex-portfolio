import { motion } from "framer-motion";
import { Clock, MessageSquare, Sparkles, Zap } from "lucide-react";

const benefits = [
  { icon: Clock, label: "15–30 min" },
  { icon: MessageSquare, label: "Project Discussion" },
  { icon: Sparkles, label: "Free Consultation" },
  { icon: Zap, label: "AI Strategy" },
];

const BookCallSection = () => {
  return (
    <section id="book-call" className="section-padding" style={{ background: "rgba(124,58,237,0.06)" }}>
      <div className="container-narrow max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="eyebrow">Schedule a Call</span>
          <h2 className="font-display font-[700] text-3xl md:text-4xl mt-3 text-foreground">
            Book a Free <span className="gradient-text">Consultation</span>
          </h2>
          <p className="font-body mt-3 max-w-xl mx-auto" style={{ color: "#6b6b8a" }}>
            Schedule a quick call to discuss your project, ideas, or requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-body"
              style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#6b6b8a" }}
            >
              <b.icon size={15} style={{ color: "#00f5ff" }} />
              {b.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gradient-border p-1"
        >
          <div className="w-full rounded-md overflow-hidden" style={{ minHeight: 660, background: "#0f0f1a" }}>
            <iframe
              src="https://calendly.com/askvishvex/30min?hide_gdpr_banner=1&background_color=0f0f1a&text_color=f0f0f0&primary_color=00f5ff"
              width="100%"
              height="660"
              frameBorder="0"
              title="Book a consultation with Vishvex"
              className="w-full"
              style={{ border: "none", borderRadius: "var(--radius)" }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCallSection;
