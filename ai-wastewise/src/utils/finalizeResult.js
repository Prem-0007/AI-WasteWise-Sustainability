import { CATEGORY_META, DEFAULT_SAFETY, RECYCLABILITY_SCORES } from '../data/wasteCategories.js'
import { clamp } from './text.js'

// Turns the output of either engine (local or LLM) into the single shape the UI renders:
// {
//   category, categoryId, wasteType, disposal, recyclability, recyclabilityScore,
//   environmentalImpact, sustainabilityTip, confidence, safety, safetyLevel,
//   note, input, source, usedFallback
// }
export function finalizeResult(raw, { input, source, usedFallback = false }) {
  const categoryId = CATEGORY_META[raw.categoryId] ? raw.categoryId : 'unknown'
  const meta = CATEGORY_META[categoryId]

  const recyclability = raw.recyclability in RECYCLABILITY_SCORES ? raw.recyclability : 'Unknown'
  const score = Number.isFinite(raw.recyclabilityScore)
    ? clamp(Math.round(raw.recyclabilityScore), 0, 100)
    : RECYCLABILITY_SCORES[recyclability]

  // "warning" = hazardous, "caution" = handle with extra care, "normal" = routine note.
  let safetyLevel = 'normal'
  if (raw.hazardous || categoryId === 'hazardous') safetyLevel = 'warning'
  else if (['ewaste', 'special', 'unknown'].includes(categoryId)) safetyLevel = 'caution'

  return {
    input,
    source,
    usedFallback,
    category: meta.label,
    categoryId,
    wasteType: raw.wasteType,
    disposal: raw.disposal,
    recyclability,
    recyclabilityScore: score,
    environmentalImpact: raw.environmentalImpact,
    sustainabilityTip: raw.sustainabilityTip,
    confidence: Math.round(clamp(Number(raw.confidence) || 0, 0, 100)),
    safety: raw.safety || DEFAULT_SAFETY,
    safetyLevel,
    note: raw.note || '',
  }
}
