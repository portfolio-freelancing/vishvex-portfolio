import { motion } from "framer-motion";
import { Clock, MessageSquare, Lightbulb } from "lucide-react";

const benefits = [
  { icon: Clock, label: "15–30 min consultation" },
  { icon: MessageSquare, label: "Project discussion" },
  { icon: Lightbulb, label: "Free guidance on your idea" },
];

const BookCallSection = () => {
  return (
    <section id="book-call" className="section-padding">
      <div className="container-narrow max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Schedule a Call</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Book a Free <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Schedule a quick call to discuss your project, ideas, or requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {benefits.map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground"
            >
              <b.icon size={15} className="text-primary" />
              {b.label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="gradient-border p-6 sm:p-8"
        >
          <p className="text-sm text-muted-foreground text-center mb-6">
            Choose a convenient time and let's discuss how we can build your project.
          </p>
          <div className="w-full rounded-lg overflow-hidden" style={{ minHeight: 660 }}>
            <iframe
              src="https://calendly.com/lordesports108/30min?hide_gdpr_banner=1&background_color=13131f&text_color=f0f0f0&primary_color=7c3aed"
              width="100%"
              height="660"
              frameBorder="0"
              title="Book a consultation with Lord Creation"
              className="w-full"
              style={{ border: "none", borderRadius: "var(--radius)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCallSection;
