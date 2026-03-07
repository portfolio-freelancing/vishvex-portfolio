import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const projectTypes = ["Website", "Discord Bot", "AI Tool", "Automation"];
const budgetRanges = ["$100 - $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000+"];

const WorkRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzl1vtX3PJMaaea-242TmOlzsvyy-pVUD-qVyxiep5af7z0BB3B_9I7MIFMQw9R-1dOLw/exec", {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="work-request" className="section-padding">
        <div className="container-narrow max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="gradient-border p-12 text-center"
          >
            <CheckCircle size={48} className="text-neon mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Request Sent!</h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="work-request" className="section-padding">
      <div className="container-narrow max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Work With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3">
            Start Your Project with{" "}
            <span className="gradient-text">Lord Creation</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="projectForm"
          onSubmit={handleSubmit}
          className="gradient-border p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
              <input
                name="name"
                required
                type="text"
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email *</label>
              <input
                name="email"
                required
                type="email"
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Company <span className="text-muted-foreground">(optional)</span></label>
            <input
              name="company"
              type="text"
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              placeholder="Company name"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Project Type *</label>
              <select
                name="projectType"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              >
                <option value="">Select type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Budget Range *</label>
              <select
                name="budget"
                required
                className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              >
                <option value="">Select budget</option>
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Project Description *</label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Deadline <span className="text-muted-foreground">(optional)</span></label>
            <input
              name="deadline"
              type="date"
              className="w-full px-4 py-2.5 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.01] disabled:opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Send size={16} />
            {submitting ? "Sending..." : "Send Project Request"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default WorkRequestForm;
