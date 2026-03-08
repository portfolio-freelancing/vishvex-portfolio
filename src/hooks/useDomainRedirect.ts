/**
 * Redirects pages.dev traffic to the canonical domain.
 * Call once at app root.
 */
export function useDomainRedirect() {
  if (typeof window === "undefined") return;

  const { hostname, pathname, search, hash } = window.location;

  // Redirect any *.pages.dev access to the canonical domain
  if (hostname.endsWith(".pages.dev")) {
    window.location.replace(
      `https://vishvex.online${pathname}${search}${hash}`
    );
  }
}
