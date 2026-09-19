import { useEffect, useRef, useState } from 'react'
import { Bot, Database, Globe, Info, Lightbulb, ListChecks, Recycle, RotateCcw, ShieldAlert, ShieldCheck } from 'lucide-react'
import { CATEGORY_META } from '../data/wasteCategories.js'
import { CATEGORY_ICONS } from './categoryIcons.js'

const RING_RADIUS = 34
const RING_LENGTH = 2 * Math.PI * RING_RADIUS

function ConfidenceRing({ value }) {
  const [filled, setFilled] = useState(false)
  useEffect(() => {
    const frame = requestAnimationFrame(() => setFilled(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const offset = RING_LENGTH * (1 - (filled ? value : 0) / 100)
  return (
    <div className="confidence" role="img" aria-label={`AI confidence ${value} percent`}>
      <svg viewBox="0 0 84 84" width="96" height="96" aria-hidden="true">
        <circle cx="42" cy="42" r={RING_RADIUS} className="ring-track" />
        <circle
          cx="42"
          cy="42"
          r={RING_RADIUS}
          className="ring-fill"
          strokeDasharray={RING_LENGTH}
          strokeDashoffset={offset}
          transform="rotate(-90 42 42)"
        />
      </svg>
      <span className="confidence-value">{value}%</span>
      <span className="confidence-label">AI confidence</span>
    </div>
  )
}

function sourceLabel(result) {
  if (result.source === 'ai') return { Icon: Bot, text: 'Live AI analysis' }
  if (result.usedFallback) return { Icon: Database, text: 'Built-in engine (live AI unavailable)' }
  return { Icon: Database, text: 'Built-in knowledge engine' }
}

export default function ResultPanel({ result, onReset }) {
  const headingRef = useRef(null)
  const meta = CATEGORY_META[result.categoryId] ?? CATEGORY_META.unknown
  const CategoryIcon = CATEGORY_ICONS[meta.icon]
  const { Icon: SourceIcon, text: sourceText } = sourceLabel(result)
  const isWarning = result.safetyLevel === 'warning'
  const showBanner = result.safetyLevel !== 'normal'
  const lowConfidence = result.confidence < 70

  // Move focus to the result so keyboard and screen-reader users land on it.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <article className="result" aria-labelledby="result-title">
      <header className="result-head">
        <div className="result-heading">
          <span className={`category-badge tone-${meta.tone}`}>
            <CategoryIcon size={18} aria-hidden="true" /> {result.category}
          </span>
          <h3 id="result-title" ref={headingRef} tabIndex={-1}>
            {result.wasteType}
          </h3>
          <p className="result-input">
            Analysis for “{result.input}”
          </p>
        </div>
        <ConfidenceRing value={result.confidence} />
      </header>

      {showBanner && (
        <div className={`safety-banner ${isWarning ? 'tone-red' : 'tone-amber'}`} role={isWarning ? 'alert' : 'note'}>
          <ShieldAlert size={22} aria-hidden="true" />
          <div>
            <strong>{isWarning ? 'Safety warning' : 'Safety note'}</strong>
            <p>{result.safety}</p>
          </div>
        </div>
      )}

      {(result.note || lowConfidence) && (
        <div className="info-note">
          <Info size={18} aria-hidden="true" />
          <p>
            {result.note}
            {lowConfidence && ` Confidence is low, so please verify with your local waste-management authority before acting.`}
          </p>
        </div>
      )}

      <div className="result-grid">
        <section className="panel panel-disposal">
          <h4>
            <ListChecks size={18} aria-hidden="true" /> Disposal guidance
          </h4>
          <p>{result.disposal}</p>
        </section>

        <section className="panel">
          <h4>
            <Recycle size={18} aria-hidden="true" /> Recyclability
          </h4>
          <div
            className="meter"
            role="meter"
            aria-label="Recyclability"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={result.recyclabilityScore}
            aria-valuetext={result.recyclability}
          >
            <span style={{ width: `${result.recyclabilityScore}%` }} />
          </div>
          <p className="meter-label">
            <strong>{result.recyclability}</strong>
            {!['Unknown', 'Not recyclable'].includes(result.recyclability) && <span>{result.recyclabilityScore}/100</span>}
          </p>
        </section>

        <section className="panel">
          <h4>
            <Globe size={18} aria-hidden="true" /> Environmental impact
          </h4>
          <p>{result.environmentalImpact}</p>
        </section>

        <section className="panel panel-tip">
          <h4>
            <Lightbulb size={18} aria-hidden="true" /> Sustainability tip
          </h4>
          <p>{result.sustainabilityTip}</p>
        </section>

        {!showBanner && (
          <section className="panel panel-safety">
            <h4>
              <ShieldCheck size={18} aria-hidden="true" /> Safety
            </h4>
            <p>{result.safety}</p>
          </section>
        )}
      </div>

      <footer className="result-foot">
        <p className="disclaimer">
          <SourceIcon size={16} aria-hidden="true" />
          <span>
            {sourceText}. Advisory guidance only; local waste rules always come first.
          </span>
        </p>
        <button type="button" className="btn btn-outline" onClick={onReset}>
          <RotateCcw size={16} aria-hidden="true" /> Analyze Another Item
        </button>
      </footer>
    </article>
  )
}
