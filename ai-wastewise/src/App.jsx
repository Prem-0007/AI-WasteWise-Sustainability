import { useCallback, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Analyzer from './components/Analyzer.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import ExamplesSection from './components/ExamplesSection.jsx'
import SdgSection from './components/SdgSection.jsx'
import ImpactSection from './components/ImpactSection.jsx'
import AboutAI from './components/AboutAI.jsx'
import ResponsibleAI from './components/ResponsibleAI.jsx'
import Footer from './components/Footer.jsx'
import { analyzeWaste } from './utils/analyzeWaste.js'
import { scrollToId } from './utils/scroll.js'

export default function App() {
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | done
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const inputRef = useRef(null)
  const requestId = useRef(0) // ignores stale responses if the user starts a new analysis

  const runAnalysis = useCallback(async (text) => {
    const trimmed = text.trim()
    if (!trimmed) {
      setError('Enter a waste item first, for example “used plastic bottle”.')
      setStatus('idle')
      setResult(null)
      return
    }

    const id = ++requestId.current
    setError('')
    setResult(null)
    setStatus('loading')

    try {
      const analysis = await analyzeWaste(trimmed)
      if (id !== requestId.current) return
      setResult(analysis)
      setStatus('done')
    } catch (err) {
      if (id !== requestId.current) return
      setStatus('idle')
      setError('Something went wrong while analyzing. Please try again.')
    }
  }, [])

  const handleInputChange = (value) => {
    setInput(value)
    if (error) setError('')
  }

  const handleSubmit = () => runAnalysis(input)

  // Quick chips (inside the analyzer) and example cards both fill the input and analyze it.
  const handleQuickPick = (text) => {
    setInput(text)
    runAnalysis(text)
  }

  const handleExample = (text) => {
    setInput(text)
    scrollToId('analyzer')
    runAnalysis(text)
  }

  const handleReset = () => {
    requestId.current += 1
    setInput('')
    setResult(null)
    setStatus('idle')
    setError('')
    scrollToId('analyzer')
    setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 400)
  }

  return (
    <>
      <a href="#analyzer" className="skip-link">
        Skip to analyzer
      </a>
      <Navbar />
      <main>
        <Hero />
        <Analyzer
          input={input}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          onQuickPick={handleQuickPick}
          onReset={handleReset}
          status={status}
          result={result}
          error={error}
          inputRef={inputRef}
        />
        <HowItWorks />
        <ExamplesSection onSelect={handleExample} disabled={status === 'loading'} />
        <SdgSection />
        <ImpactSection />
        <AboutAI />
        <ResponsibleAI />
      </main>
      <Footer />
    </>
  )
}
