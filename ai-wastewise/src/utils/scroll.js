// Smooth-scroll helper that respects the reduced-motion preference.
export function scrollToId(id, block = 'start') {
  const element = document.getElementById(id)
  if (!element) return
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  element.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block })
}
