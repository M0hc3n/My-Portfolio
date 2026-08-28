type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: EventParams
    ) => void;
  }
}

/**
 * Send a custom event to GA4.
 *
 * GA4's Enhanced Measurement already records page views, scroll depth,
 * outbound clicks and file downloads on its own. This is only for the things
 * it cannot infer -- which of two unlabelled marks was clicked, or whether a
 * post was actually read to the end.
 *
 * No-ops when gtag is absent: during SSR, before the script loads, or when a
 * visitor blocks it. That last case is common here, since the audience is
 * mostly developers.
 *
 * Note: custom parameters only appear in GA4 reports once registered as custom
 * dimensions (Admin -> Custom definitions). They reach the API either way.
 */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

/** Click on a link leaving the site, labelled so reports stay readable. */
export function trackOutbound(label: string, url: string) {
  let domain = "";
  try {
    domain = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    // mailto: and other non-URL hrefs -- the label alone identifies these
  }

  trackEvent("outbound_click", {
    link_label: label,
    link_domain: domain || undefined,
    link_url: url,
  });
}
