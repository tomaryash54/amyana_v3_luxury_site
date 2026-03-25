const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA_MEASUREMENT_ID || "").trim()
const GA_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/

function ensureDataLayer() {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
}

export function initAnalytics() {
  if (typeof window === "undefined") return

  ensureDataLayer()

  if (!GA_MEASUREMENT_ID_PATTERN.test(GA_MEASUREMENT_ID) || typeof window.gtag === "function") {
    return
  }

  const script = document.createElement("script")
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag = gtag
  gtag("js", new Date())
  gtag("config", GA_MEASUREMENT_ID, { send_page_view: false })
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return

  ensureDataLayer()

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params)
    return
  }

  window.dataLayer.push({
    event: eventName,
    ...params,
  })
}

export function trackWebVital(metric) {
  if (!metric || typeof metric !== "object") return

  trackEvent("web_vital", {
    metric_name: metric.name,
    metric_value: Number(metric.value?.toFixed?.(2) ?? metric.value ?? 0),
    metric_delta: Number(metric.delta?.toFixed?.(2) ?? metric.delta ?? 0),
    metric_id: metric.id,
    metric_rating: metric.rating,
    non_interaction: true,
  })
}
