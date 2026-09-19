import { ArrowRight, Braces, Database, Sparkles } from 'lucide-react'
import { WASTE_KNOWLEDGE } from '../data/wasteKnowledge.js'
import { SAMPLE_OUTPUT } from '../data/siteContent.js'
import SectionHeading from './SectionHeading.jsx'

export default function AboutAI() {
  return (
    <section id="about-ai" className="section" aria-labelledby="about-ai-title">
      <div className="container">
        <SectionHeading
          id="about-ai-title"
          title="How the AI works"
          intro="One clear pipeline: your description goes in, a structured and checkable answer comes out."
        />

        <div className="about-grid">
          <div className="about-copy">
            <div className="pipeline" aria-hidden="true">
              <span>Your description</span>
              <ArrowRight size={16} />
              <span>AI analysis</span>
              <ArrowRight size={16} />
              <span>Structured guidance</span>
            </div>

            <ul className="about-list">
              <li>
                <span className="about-icon" aria-hidden="true">
                  <Sparkles size={20} />
                </span>
                <div>
                  <h3>Live AI mode</h3>
                  <p>
                    When an AI provider is connected, a language model reads the description, classifies the item and
                    writes the guidance. Its output is validated before it is shown.
                  </p>
                </div>
              </li>
              <li>
                <span className="about-icon" aria-hidden="true">
                  <Database size={20} />
                </span>
                <div>
                  <h3>Built-in knowledge engine</h3>
                  <p>
                    Without an API key, a curated knowledge base of {WASTE_KNOWLEDGE.length} common waste types answers
                    instantly. Unknown items are marked “Needs Verification” instead of being guessed.
                  </p>
                </div>
              </li>
              <li>
                <span className="about-icon" aria-hidden="true">
                  <Braces size={20} />
                </span>
                <div>
                  <h3>Same structure every time</h3>
                  <p>
                    Category, waste type, disposal, recyclability, environmental impact, tip, confidence and safety
                    appear in every result.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <figure className="code-card">
            <figcaption>Example output</figcaption>
            <pre>
              <code>{SAMPLE_OUTPUT}</code>
            </pre>
          </figure>
        </div>
      </div>
    </section>
  )
}
