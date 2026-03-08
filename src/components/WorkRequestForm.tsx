import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Clock, Shield } from "lucide-react";

const TURNSTILE_SITE_KEY = "0x4AAAAAACn5OiIEwMl8dmHN";
const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbx4-Si3ifPt5DP0_sILD0NnoQR2dJdu-FD1RkNYtGsDUduNlaOogrElNJx_dvo48ic8/exec";

const projectTypes = [
  "AI Development & Prompt Engineering",
  "Website Development",
  "Web Application Development",
  "n8n Workflow Automation",
  "Automation Systems",
  "API Integration",
  "UI / UX Design",
  "Website Deployment & Cloud Hosting",
];
const currencies = ["USD", "INR", "EUR", "GBP"];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MS = 10_000;

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/20 transition-all text-sm";

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

    const budgetAmount = (data.budgetAmount as string).trim();
    const currency = (data.currency as string);

    if (!budgetAmount || isNaN(Number(budgetAmount)) || Number(budgetAmount) <= 0) {
      setError("Please enter a valid budget amount.");
      setSubmitting(false);
      return;
    }

    const payload = {
      name, email, company,
      projectType: data.projectType as string,
      budget: `${budgetAmount} ${currency}`,
      description,
      deadline: (data.deadline as string) || "",
      turnstileToken: turnstileToken.current,
    };

    try {
      await fetch(API_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      if (import.meta.env.DEV) console.error("Form submission error:", err);
      setError("Submission failed to send. Please try again.");
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
            className="rounded-xl border border-border bg-card p-12 text-center"
          >
            <CheckCircle size={40} className="text-neon mx-auto mb-4" />
            <h3 className="font-display text-2xl font-bold mb-2">Request Sent</h3>
            <p className="text-sm text-muted-foreground">
              We'll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="work-request" className="section-padding">
      <div className="container-narrow max-w-2xl">
        <div className="section-divider mb-32" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-medium">Start</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-3">
            Start your project
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock size={12} className="text-primary" />
              Response within 24h
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Shield size={12} className="text-primary" />
              Your data is secure
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          id="projectForm"
          onSubmit={handleSubmit}
          className="rounded-xl border border-border bg-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Full Name *</label>
              <input name="name" required type="text" maxLength={100} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Email *</label>
              <input name="email" required type="email" maxLength={255} className={inputClass} placeholder="you@email.com" />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Company <span className="text-muted-foreground/50">(optional)</span></label>
            <input name="company" type="text" maxLength={100} className={inputClass} placeholder="Company name" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Project Type *</label>
              <select name="projectType" required className={inputClass}>
                <option value="">Select type</option>
                {projectTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Budget *</label>
              <div className="flex gap-2">
                <input name="budgetAmount" required type="number" min={1} className={`${inputClass} flex-1`} placeholder="500" />
                <select name="currency" required className={`${inputClass} w-20`}>
                  {currencies.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Description *</label>
            <textarea name="description" required rows={4} maxLength={2000} className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
          </div>

          <div>
            <label className="text-xs font-medium mb-1.5 block text-muted-foreground">Deadline <span className="text-muted-foreground/50">(optional)</span></label>
            <input name="deadline" type="date" className={inputClass} />
          </div>

          {error && (
            <p className="text-sm text-destructive text-center">{error}</p>
          )}

          <div className="flex justify-center">
            <div ref={turnstileContainerRef} />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-lg font-medium text-primary-foreground flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-60 text-sm"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Send size={14} />
            {submitting ? "Sending..." : "Send Request"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default WorkRequestForm;
