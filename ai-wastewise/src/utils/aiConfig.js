// Reads optional AI settings from Vite environment variables (see .env.example).
// Nothing is hardcoded: without VITE_AI_API_KEY the app uses its built-in engine.

const env = import.meta.env ?? {}

const DEFAULT_MODELS = {
  openai: 'gpt-4o-mini',
  anthropic: 'claude-haiku-4-5-20251001',
}

const provider = String(env.VITE_AI_PROVIDER || 'openai').trim().toLowerCase()

export const AI_CONFIG = {
  apiKey: String(env.VITE_AI_API_KEY || '').trim(),
  provider: provider === 'anthropic' ? 'anthropic' : 'openai',
  model: String(env.VITE_AI_MODEL || '').trim() || DEFAULT_MODELS[provider] || DEFAULT_MODELS.openai,
  baseUrl: String(env.VITE_AI_BASE_URL || '').trim().replace(/\/+$/, ''),
}

export const hasAiKey = () => Boolean(AI_CONFIG.apiKey)
