import { ArrowRight, Check, Sparkles } from 'lucide-react'
import BinIllustration from './BinIllustration.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="badge">
            <Sparkles size={14} aria-hidden="true" /> AI + Sustainability
          </span>
          <h1>Turn Waste Into Better Choices.</h1>
          <p className="hero-sub">AI-powered waste identification and responsible disposal guidance.</p>
          <p className="lead">
            Identify everyday waste, understand how to dispose of it responsibly, and discover simple actions that
            reduce environmental impact.
          </p>
          <div className="hero-actions">
            <a href="#analyzer" className="btn btn-primary btn-lg">
              Analyze Your Waste <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#how" className="btn btn-ghost btn-lg">
              How It Works
            </a>
          </div>
          <ul className="hero-points">
            <li>
              <Check size={16} aria-hidden="true" /> No sign-up needed
            </li>
            <li>
              <Check size={16} aria-hidden="true" /> No personal information
            </li>
            <li>
              <Check size={16} aria-hidden="true" /> Guidance that defers to local rules
            </li>
          </ul>
        </div>

        <BinIllustration />
      </div>
    </section>
  )
}
