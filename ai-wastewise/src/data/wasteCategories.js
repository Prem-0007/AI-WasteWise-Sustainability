// Category metadata shared by the local engine, the LLM validator and the UI.
// `icon` is a string key resolved to a Lucide component in components/categoryIcons.js
// so this file stays free of React and can be used anywhere.

export const CATEGORY_META = {
  recyclable: { id: 'recyclable', label: 'Recyclable', icon: 'recycle', tone: 'green' },
  organic: { id: 'organic', label: 'Organic / Compostable', icon: 'sprout', tone: 'leaf' },
  reusable: { id: 'reusable', label: 'Reusable / Donate', icon: 'shirt', tone: 'teal' },
  ewaste: { id: 'ewaste', label: 'E-Waste', icon: 'cpu', tone: 'blue' },
  special: { id: 'special', label: 'Special Handling', icon: 'droplets', tone: 'amber' },
  hazardous: { id: 'hazardous', label: 'Hazardous', icon: 'shieldAlert', tone: 'red' },
  unknown: { id: 'unknown', label: 'Needs Verification', icon: 'helpCircle', tone: 'gray' },
}

export const CATEGORY_IDS = Object.keys(CATEGORY_META)

// Recyclability labels the UI understands, with a default meter value (0-100).
export const RECYCLABILITY_SCORES = {
  High: 90,
  Medium: 60,
  Low: 25,
  'Not recyclable': 5,
  Compostable: 85,
  Unknown: 0,
}

export const DEFAULT_SAFETY = 'Follow local waste-management guidelines.'
