/**
 * Client-side security utilities for input sanitization,
 * rate limiting, and bot detection.
 */

// ── Input Sanitization ──────────────────────────────────────────────

const HTML_TAG_REGEX = /<\/?[a-z][\s\S]*?>/gi;
const SCRIPT_PATTERN = /(<script|javascript:|on\w+\s*=|eval\s*\(|document\.(write|cookie)|window\.(location|open))/gi;
const SQL_INJECTION_PATTERN = /((\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|EXEC|EXECUTE)\b.*\b(FROM|INTO|SET|TABLE|WHERE|ALL)\b)|(--)|(\/\*)|\b(OR|AND)\b\s+\d+\s*=\s*\d+)/gi;

/**
 * Strips HTML tags from a string.
 */
export function stripHtml(input: string): string {
  return input.replace(HTML_TAG_REGEX, "").trim();
}

/**
 * Detects potentially malicious payloads (XSS / injection).
 * Returns true if the input looks suspicious.
 */
export function isSuspiciousInput(input: string): boolean {
  return SCRIPT_PATTERN.test(input) || SQL_INJECTION_PATTERN.test(input);
}

/**
 * Sanitize a form string: trim, strip HTML, enforce max length.
 */
export function sanitizeString(input: string, maxLength: number): string {
  return stripHtml(input).slice(0, maxLength);
}

// ── Rate Limiter ────────────────────────────────────────────────────

interface RateLimitEntry {
  timestamps: number[];
}

const rateLimitStore = new Map<string, RateLimitEntry>();

/**
 * Simple sliding-window rate limiter.
 * @returns true if the action is allowed, false if rate-limited.
 */
export function checkRateLimit(
  key: string,
  maxAttempts: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(key) ?? { timestamps: [] };

  // Purge expired entries
  entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

  if (entry.timestamps.length >= maxAttempts) {
    rateLimitStore.set(key, entry);
    return false;
  }

  entry.timestamps.push(now);
  rateLimitStore.set(key, entry);
  return true;
}

// ── Bot / Headless Detection ────────────────────────────────────────

/**
 * Basic headless browser detection heuristics.
 * Not bulletproof but adds friction for scrapers.
 */
export function detectHeadlessBrowser(): boolean {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;

  const ua = navigator.userAgent.toLowerCase();

  // Known headless user-agent strings
  if (
    ua.includes("headlesschrome") ||
    ua.includes("phantomjs") ||
    ua.includes("slimerjs") ||
    ua.includes("puppeteer")
  ) {
    return true;
  }

  // navigator.webdriver is set by automation tools
  if ((navigator as Record<string, unknown>).webdriver === true) {
    return true;
  }

  return false;
}

// ── Email Validation ────────────────────────────────────────────────

const STRICT_EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export function isValidEmail(email: string): boolean {
  return STRICT_EMAIL_REGEX.test(email) && email.length <= 255;
}

// ── Honeypot helper ─────────────────────────────────────────────────

/**
 * Returns true if the honeypot field was filled (i.e., likely a bot).
 */
export function isHoneypotTriggered(value: string | undefined): boolean {
  return !!value && value.length > 0;
}
