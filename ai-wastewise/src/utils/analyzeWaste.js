import { AI_CONFIG, hasAiKey } from './aiConfig.js'
import { analyzeLocally } from './localAnalyzer.js'
import { analyzeWithLLM } from './llmClient.js'

export const MAX_INPUT_LENGTH = 120
const MIN_ANALYSIS_MS = 1500 // keeps the "AI is analyzing…" state readable for demos

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Analyze a waste item description.
 *
 * Uses a live LLM when VITE_AI_API_KEY is set; otherwise (or if the call fails)
 * uses the built-in knowledge engine. Always resolves with the same structure:
 * { category, wasteType, disposal, recyclability, environmentalImpact,
 *   sustainabilityTip, confidence, safety, ... }
 */
export async function analyzeWaste(input) {
  const text = String(input ?? '').trim().slice(0, MAX_INPUT_LENGTH)
  if (!text) throw new Error('Please describe a waste item.')

  const startedAt = Date.now()
  let result = null
  let usedFallback = false

  if (hasAiKey()) {
    try {
      result = await analyzeWithLLM(text, AI_CONFIG)
    } catch (error) {
      console.warn('[AI WasteWise] Live AI unavailable, using the built-in engine instead.', error?.message)
      usedFallback = true
    }
  }

  if (!result) result = analyzeLocally(text, { usedFallback })

  await wait(Math.max(0, MIN_ANALYSIS_MS - (Date.now() - startedAt)))
  return result
}
