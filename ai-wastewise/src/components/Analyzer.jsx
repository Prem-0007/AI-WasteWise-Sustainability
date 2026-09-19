import { useEffect, useRef } from 'react'
import { CircleAlert, LoaderCircle, Search, Sparkles } from 'lucide-react'
import { QUICK_CHIPS } from '../data/examples.js'
import { MAX_INPUT_LENGTH } from '../utils/analyzeWaste.js'
import LoadingState from './LoadingState.jsx'
import ResultPanel from './ResultPanel.jsx'

export default function Analyzer({ input, onInputChange, onSubmit, onQuickPick, onReset, status, result, error, inputRef }) {
  const resultRef = useRef(null)
  const isLoading = status === 'loading'

  // Bring the loading state / result into view when it appears.
  useEffect(() => {
    if (status !== 'loading' && status !== 'done') return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    resultRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  }, [status])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return (
    <section id="analyzer" className="section analyzer">
      <div className="container">
        <div className="analyzer-card">
          <div className="analyzer-head">
            <h2>What’s the waste?</h2>
            <p>Describe an item in your own words. You will get where it goes, why, and what you can do better.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="waste-input" className="sr-only">
              Describe a waste item
            </label>
            <div className="input-row">
              <div className={`input-wrap${error ? ' has-error' : ''}`}>
                <Search size={20} className="input-icon" aria-hidden="true" />
                <input
                  id="waste-input"
                  ref={inputRef}
                  type="text"
                  value={input}
                  maxLength={MAX_INPUT_LENGTH}
                  placeholder="Describe a waste item…"
                  autoComplete="off"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? 'waste-input-error' : undefined}
                  onChange={(event) => onInputChange(event.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <LoaderCircle size={18} className="spin" aria-hidden="true" /> Analyzing…
                  </>
                ) : (
                  <>
                    <Sparkles size={18} aria-hidden="true" /> Analyze with AI
                  </>
                )}
              </button>
            </div>

            {error && (
              <p id="waste-input-error" className="field-error" role="alert">
                <CircleAlert size={16} aria-hidden="true" /> {error}
              </p>
            )}

            <div className="chips" role="group" aria-label="Example items">
              <span className="chips-label">Try</span>
              {QUICK_CHIPS.map((chip) => (
                <button key={chip} type="button" className="chip" disabled={isLoading} onClick={() => onQuickPick(chip)}>
                  {chip}
                </button>
              ))}
            </div>
          </form>
        </div>

        <p className="sr-only" role="status">
          {isLoading ? 'AI is analyzing your waste…' : status === 'done' && result ? `Analysis complete: ${result.category}` : ''}
        </p>

        <div ref={resultRef} className="results-anchor">
          {isLoading && <LoadingState />}
          {status === 'done' && result && <ResultPanel result={result} onReset={onReset} />}
        </div>
      </div>
    </section>
  )
}
