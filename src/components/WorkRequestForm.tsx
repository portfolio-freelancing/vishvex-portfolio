import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import {
  sanitizeString,
  isSuspiciousInput,
  isValidEmail,
  isHoneypotTriggered,
  checkRateLimit,
  detectHeadlessBrowser,
} from "@/lib/security";

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

const RATE_LIMIT_KEY = "form_submit";
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;

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

const inputClass =
  "w-full px-4 py-2.5 rounded-md font-body text-sm transition-all duration-250 focus:outline-none placeholder:font-body";

const WorkRequestForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | false>(false);
  const turnstileToken = useRef<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const formLoadTime = useRef<number>(Date.now());

  const onTurnstileVerify = useCallback((token: string) => {
    turnstileToken.current = token;
  }, []);

  useEffect(() => {
    formLoadTime.current = Date.now();
    if (!turnstileContainerRef.current) return;
    const tryRender = () => {
      if (window.turnstile && turnstileContainerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          callback: onTurnstileVerify,
          "expired-callback": () => { turnstileToken.current = null; },
          theme: "dark",
        });
      }
    };
    tryRender();
    const interval = setInterval(() => {
      if (window.turnstile) { tryRender(); clearInterval(interval); }
    }, 500);
    return () => clearInterval(interval);
  }, [onTurnstileVerify]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    if (detectHeadlessBrowser()) { setError("Submission blocked."); return; }
    if (Date.now() - formLoadTime.current < 2000) { setError("Please take a moment to fill out the form."); return; }
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (isHoneypotTriggered(data.website as string)) { setSubmitted(true); return; }
    if (!turnstileToken.current) { setError("Please complete the CAPTCHA verification before submitting."); return; }
    if (!checkRateLimit(RATE_LIMIT_KEY, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS)) { setError("Too many submissions. Please wait a minute."); return; }

    const name = sanitizeString(data.name as string, 100);
    const email = (data.email as string).trim().slice(0, 255);
    const company = sanitizeString(data.company as string, 100);
    const description = sanitizeString(data.description as string, 2000);
    const budgetAmount = (data.budgetAmount as string).trim();
    const currency = data.currency as string;
    const projectType = data.projectType as string;
    const deadline = (data.deadline as string) || "";

    if (!name || name.length < 2) { setError("Name is required (at least 2 characters)."); return; }
    if (!isValidEmail(email)) { setError("Please enter a valid email address."); return; }
    if (!description || description.length < 10) { setError("Description is required (at least 10 characters)."); return; }
    if (!budgetAmount || isNaN(Number(budgetAmount)) || Number(budgetAmount) <= 0 || Number(budgetAmount) > 10_000_000) { setError("Please enter a valid budget amount."); return; }
    if (!projectTypes.includes(projectType)) { setError("Please select a valid project type."); return; }
    if (!currencies.includes(currency)) { setError("Please select a valid currency."); return; }

    const allText = `${name} ${email} ${company} ${description}`;
    if (isSuspiciousInput(allText)) { setError("Your submission contains disallowed content."); return; }

    setSubmitting(true);
    const payload = { name, email, company, projectType, budget: `${budgetAmount} ${currency}`, description, deadline, turnstileToken: turnstileToken.current };
    try {
      await fetch(API_ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload), keepalive: true });
      setSubmitted(true);
    } catch { setError("Submission failed. Please try again."); } finally {
      setSubmitting(false);
      if (window.turnstile && widgetIdRef.current) { window.turnstile.reset(widgetIdRef.current); turnstileToken.current = null; }
    }
  };

  if (submitted) {
    return (
      <section id="work-request" className="section-padding">
        <div className="container-narrow max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="gradient-border p-12 text-center">
            <CheckCircle size={48} style={{ color: "#00f5ff" }} className="mx-auto mb-4" />
            <h3 className="font-display text-2xl font-[700] mb-2 text-foreground">Request Sent!</h3>
            <p className="font-body" style={{ color: "#6b6b8a" }}>We will contact you shortly.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="work-request" className="section-padding">
      <div className="container-narrow max-w-2xl">
        <div className="cyan-divider mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="eyebrow">Work With Us</span>
          <h2 className="font-display font-[700] text-3xl md:text-4xl mt-3 text-foreground">
            Start Your Project
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="projectForm"
          onSubmit={handleSubmit}
          className="gradient-border p-6 sm:p-8 space-y-5"
          autoComplete="off"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Full Name *</label>
              <input name="name" required type="text" maxLength={100} autoComplete="name"
                className={inputClass}
                style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Email *</label>
              <input name="email" required type="email" maxLength={255} autoComplete="email"
                className={inputClass}
                style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Company <span style={{ color: "#6b6b8a" }}>(optional)</span></label>
            <input name="company" type="text" maxLength={100}
              className={inputClass}
              style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
              placeholder="Company name"
            />
          </div>

          {/* Honeypot */}
          <div className="absolute" style={{ left: "-9999px", top: "-9999px" }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Project Type *</label>
              <select name="projectType" required
                className={inputClass}
                style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <option value="">Select type</option>
                {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Budget Amount *</label>
              <div className="flex gap-2">
                <input name="budgetAmount" required type="number" min={1} max={10000000}
                  className={`${inputClass} flex-1`}
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
                  placeholder="e.g. 500"
                />
                <select name="currency" required
                  className={`${inputClass} w-24`}
                  style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {currencies.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Project Description *</label>
            <textarea name="description" required rows={4} maxLength={2000}
              className={`${inputClass} resize-none`}
              style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
              placeholder="Tell us about your project..."
            />
          </div>

          <div>
            <label className="text-sm font-body font-medium mb-1.5 block text-foreground">Deadline <span style={{ color: "#6b6b8a" }}>(optional)</span></label>
            <input name="deadline" type="date"
              className={inputClass}
              style={{ background: "#0f0f1a", border: "1px solid #1e1e35", color: "#f0f0f0" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "#00f5ff"; e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,245,255,0.2)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "#1e1e35"; e.currentTarget.style.boxShadow = "none"; }}
            />
          </div>

          {error && <p className="text-sm text-center font-body" style={{ color: "#ef4444" }} role="alert">{error}</p>}

          <div className="flex justify-center">
            <div ref={turnstileContainerRef} />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-md font-display font-[700] text-sm flex items-center justify-center gap-2 transition-all duration-250 hover:opacity-90 disabled:opacity-60"
            style={{ background: "var(--gradient-primary)", color: "#fff" }}
          >
            <Send size={16} />
            {submitting ? "Sending..." : "Send Request →"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default WorkRequestForm;
