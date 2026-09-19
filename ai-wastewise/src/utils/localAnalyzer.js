import { UNKNOWN_RESULT, WASTE_KNOWLEDGE } from '../data/wasteKnowledge.js'
import { finalizeResult } from './finalizeResult.js'
import { clamp, tokenize } from './text.js'

// ---------------------------------------------------------------------------
// Built-in analysis engine (used when no AI key is configured, or the live AI
// call fails). It scores every knowledge-base entry against the user's text:
//   * longer, more specific phrases score higher ("broken glass" > "glass")
//   * hazardous entries win ties, so safety is never under-reported
//   * ambiguous words only produce low-confidence answers with a clarification
// ---------------------------------------------------------------------------

const STRONG_BASE = 100 // per token in a matched phrase
const WEAK_SCORE = 40

// Prepare keyword token lists once, at load time.
const PREPARED = WASTE_KNOWLEDGE.map((entry) => ({
  entry,
  strong: entry.keywords.map((phrase) => toKeyword(phrase)),
  weak: (entry.weakKeywords || []).map((phrase) => toKeyword(phrase)),
}))

function toKeyword(phrase) {
  const tokens = tokenize(phrase)
  return { phrase, tokens, score: tokens.length * STRONG_BASE + tokens.join('').length }
}

// A one-word keyword must appear as a token. A multi-word keyword must appear with
// its words close together (allows "used plastic water bottle" to match "plastic bottle").
function containsKeyword(tokens, keywordTokens) {
  if (keywordTokens.length === 0) return false
  if (keywordTokens.length === 1) return tokens.includes(keywordTokens[0])
  const windowSize = keywordTokens.length + 2
  for (let i = 0; i < tokens.length; i += 1) {
    const slice = tokens.slice(i, i + windowSize)
    if (keywordTokens.every((token) => slice.includes(token))) return true
  }
  return false
}

function findMatches(tokens) {
  const matches = []
  for (const { entry, strong, weak } of PREPARED) {
    const strongHits = strong.filter((k) => containsKeyword(tokens, k.tokens))
    if (strongHits.length > 0) {
      const best = strongHits.reduce((a, b) => (b.score > a.score ? b : a))
      matches.push({ entry, kind: 'strong', keyword: best, score: best.score + (strongHits.length - 1) * 5 })
      continue
    }
    const weakHit = weak.find((k) => containsKeyword(tokens, k.tokens))
    if (weakHit) matches.push({ entry, kind: 'weak', keyword: weakHit, score: WEAK_SCORE })
  }
  return matches
}

const isHazardous = (entry) => entry.categoryId === 'hazardous'

function compareMatches(a, b) {
  if (b.score !== a.score) return b.score - a.score
  if (isHazardous(a.entry) !== isHazardous(b.entry)) return isHazardous(a.entry) ? -1 : 1 // safety first on ties
  return b.entry.confidence - a.entry.confidence
}

export function analyzeLocally(input, { usedFallback = false } = {}) {
  const tokens = tokenize(input)
  const matches = findMatches(tokens).sort(compareMatches)

  // Nothing recognised -> honest "Needs Verification" answer.
  if (matches.length === 0) {
    const note =
      tokens.length === 0
        ? 'The built-in engine reads English descriptions. Try describing the item in English, for example “used cooking oil”.'
        : ''
    return finalizeResult({ ...UNKNOWN_RESULT, note }, { input, source: 'local', usedFallback })
  }

  const top = matches[0]
  const { entry } = top

  // Other, unrelated items mentioned in the same text (e.g. "banana peel and battery").
  const others = matches.filter(
    (m) => m !== top && m.kind === 'strong' && (m.entry.family || m.entry.id) !== (entry.family || entry.id),
  )

  let confidence = entry.confidence
  const notes = []
  let safety = entry.safety
  let hazardous = false

  if (top.kind === 'weak') {
    confidence = Math.min(confidence, 58)
    if (entry.clarifyNote) notes.push(entry.clarifyNote)
  } else if (top.keyword.tokens.length === 1 && tokens.length > 4) {
    confidence -= 6 // a single generic word inside a long sentence is a weaker signal
  }

  if (others.length > 0) {
    confidence -= 8
    const names = others.map((m) => m.entry.id.replace(/-/g, ' '))
    notes.push(
      `Your description also mentions ${names.join(' and ')}. This result covers the main item only, so analyze the others separately.`,
    )
    const hazardousOther = others.find((m) => isHazardous(m.entry))
    if (hazardousOther && !isHazardous(entry)) {
      hazardous = true
      safety = `${entry.safety} Also, ${hazardousOther.entry.id.replace(/-/g, ' ')} needs separate hazardous handling: ${hazardousOther.entry.safety}`
    }
  }

  return finalizeResult(
    {
      categoryId: entry.categoryId,
      wasteType: entry.wasteType,
      disposal: entry.disposal,
      recyclability: entry.recyclability,
      recyclabilityScore: entry.recyclabilityScore,
      environmentalImpact: entry.environmentalImpact,
      sustainabilityTip: entry.sustainabilityTip,
      confidence: clamp(confidence, 30, 98),
      safety,
      hazardous,
      note: notes.join(' '),
    },
    { input, source: 'local', usedFallback },
  )
}
