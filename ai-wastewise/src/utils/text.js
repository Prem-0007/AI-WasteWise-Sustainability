// Small text helpers for the built-in analysis engine.

// Very light singular/plural normalisation ("batteries" -> "battery", "boxes" -> "box").
// Keywords and user input go through the same function, so they always compare equal.
export function stem(word) {
  if (word.length <= 3) return word
  if (word.endsWith('ies') && word.length > 4) return word.slice(0, -3) + 'y'
  if (word.endsWith('sses')) return word.slice(0, -2)
  if (/(xes|ches|shes)$/.test(word)) return word.slice(0, -2)
  if (/(ss|us|is)$/.test(word)) return word
  if (word.endsWith('s')) return word.slice(0, -1)
  return word
}

export function tokenize(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(stem)
}

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
