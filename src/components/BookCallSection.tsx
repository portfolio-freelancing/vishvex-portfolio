import { motion } from "framer-motion";
import { Clock, MessageSquare, Shield } from "lucide-react";

const benefits = [
  { icon: Clock, label: "15–30 min call" },
  { icon: MessageSquare, label: "Free consultation" },
  { icon: Shield, label: "No commitment" },
];

const BookCallSection = () => {
  return (
    <section id="book-call" className="section-padding">
      <div className="container-narrow max-w-4xl">
        <div className="section-divider mb-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Schedule</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Book a call
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            Let's discuss your project requirements and find the best solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs text-muted-foreground"
            >
              <b.icon size={14} className="text-primary" />
              {b.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <div className="w-full" style={{ minHeight: 660 }}>
            <iframe
              src="https://calendly.com/askvishvex/30min?hide_gdpr_banner=1&background_color=0a0a12&text_color=f0f0f0&primary_color=7c5ce7"
              width="100%"
              height="660"
              frameBorder="0"
              title="Book a consultation with Vishvex"
              className="w-full"
              style={{ border: "none" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCallSection;
