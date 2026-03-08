import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const TURNSTILE_SITE_KEY = "0x4AAAAAACn5OiIEwMl8dmHN";
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbyBEAmwsBwSjhRst5549iby4qWnIlAJ_pAnq0biaZTuOdBEu-uTXb7O7pLw0S6LLkNMcQ/exec";

const projectTypes = ["Website", "Discord Bot", "AI Tool", "Automation"];
const budgetRanges = ["$100 - $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000+"];

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: string | HTMLElement,
        opts: { sitekey: string; callback: (token: string) => void; "expired-callback"?: () => void; theme?: string }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

const WorkRequestForm = () => {
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const onTurnstileVerify = useCallback((token: string) => {
    const input = document.querySelector<HTMLInputElement>('input[name="turnstileToken"]');
    if (input) input.value = token;
  }, []);

  useEffect(() => {
    if (!turnstileContainerRef.current) return;

    const tryRender = () => {
      if (window.turnstile && turnstileContainerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: onTurnstileVerify,
          "expired-callback": () => {
            const input = document.querySelector<HTMLInputElement>('input[name="turnstileToken"]');
            if (input) input.value = "";
          },
          theme: "dark",
        });
      }
    };

    tryRender();
    const interval = setInterval(() => {
      if (window.turnstile) {
        tryRender();
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [onTurnstileVerify]);

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
          action={API_ENDPOINT}
          method="POST"
          id="projectForm"
          className="gradient-border p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
              <input
                name="name"
                required
                type="text"
                maxLength={100}
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
                maxLength={255}
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
              maxLength={100}
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
              maxLength={2000}
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

          {/* Hidden Turnstile token field */}
          <input type="hidden" name="turnstileToken" />

          {/* Cloudflare Turnstile CAPTCHA */}
          <div className="flex justify-center">
            <div ref={turnstileContainerRef} />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 hover:scale-[1.01]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Send size={16} />
            Send Project Request
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default WorkRequestForm;
