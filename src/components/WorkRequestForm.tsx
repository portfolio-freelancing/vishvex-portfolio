import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const TURNSTILE_SITE_KEY = "0x4AAAAAACn5OiIEwMl8dmHN";
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzTjsEUexloNCrmoAkxQR3-VNboL9lnf6-swZZkMR5qySHjmeJp4c54eietbpceMqrRbQ/exec";

const projectTypes = ["Website", "Discord Bot", "AI Tool", "Automation"];
const budgetRanges = ["$100 - $500", "$500 - $1,000", "$1,000 - $5,000", "$5,000+"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 10_000;

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
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | false>(false);
  const lastSubmitRef = useRef<number>(0);
  const turnstileToken = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const onTurnstileVerify = useCallback((token: string) => {
    turnstileToken.current = token;
  }, []);

  useEffect(() => {
    if (!turnstileContainerRef.current) return;

    const tryRender = () => {
      if (window.turnstile && turnstileContainerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: onTurnstileVerify,
          "expired-callback": () => {
            turnstileToken.current = null;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    if (!turnstileToken.current) {
      setError("Please complete the CAPTCHA verification before submitting.");
      return;
    }

    const now = Date.now();
    if (now - lastSubmitRef.current < RATE_LIMIT_MS) {
      setError("Please wait a few seconds before submitting again.");
      return;
    }

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    const name = (data.name as string).trim();
    const email = (data.email as string).trim();
    const company = (data.company as string).trim();
    const description = (data.description as string).trim();

    if (!name || name.length > 100) { setError("Name is required and must be under 100 characters."); return; }
    if (!email || !EMAIL_REGEX.test(email) || email.length > 255) { setError("Please enter a valid email address."); return; }
    if (company.length > 100) { setError("Company name must be under 100 characters."); return; }
    if (!description || description.length > 2000) { setError("Description is required and must be under 2000 characters."); return; }

    setSubmitting(true);
    lastSubmitRef.current = now;

    const payload = {
      name, email, company,
      projectType: data.projectType as string,
      budget: data.budget as string,
      description,
      deadline: (data.deadline as string) || "",
      turnstileToken: turnstileToken.current,
    };

    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });

      // Google Apps Script redirects POST requests (302), which causes CORS issues
      // with "cors" mode. Using "no-cors" means we get an opaque response (status 0),
      // but if the fetch completes without throwing, the submission was sent successfully.
      if (res.type === "opaque" || res.ok || res.status === 0) {
        setSubmitted(true);
      } else {
        setError("Submission may have failed. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.reset(widgetIdRef.current);
        turnstileToken.current = null;
      }
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
              Submission successful. We will contact you shortly.
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

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          {/* Cloudflare Turnstile CAPTCHA */}
          <div className="flex justify-center">
            <div ref={turnstileContainerRef} />
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