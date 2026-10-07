// ============================================================
// analytics.ts — Provider-agnostic analytics wrapper (FR-15)
// ============================================================

type EventName =
  | 'cta_click'
  | 'form_start'
  | 'form_submit'
  | 'form_error'
  | 'page_view'
  | 'newsletter_signup';

interface AnalyticsEvent {
  name: EventName;
  properties?: Record<string, string | number | boolean>;
}

/**
 * Track an analytics event. Currently logs to console.
 * Replace the body with your provider (GA4, Plausible, PostHog, etc.)
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined') return;

  // Check cookie consent before sending
  const consent = localStorage.getItem('cookie-consent');
  if (consent !== 'accepted') return;

  // eslint-disable-next-line no-console
  console.log('[Analytics]', event.name, event.properties);

  // Adapter interface — replace with real provider:
  // if (window.gtag) {
  //   window.gtag('event', event.name, event.properties);
  // }
}

/** Track a page view */
export function trackPageView(path: string): void {
  trackEvent({ name: 'page_view', properties: { path } });
}

/** Track a CTA click */
export function trackCTAClick(label: string, location: string): void {
  trackEvent({
    name: 'cta_click',
    properties: { label, location },
  });
}
