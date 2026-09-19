import { STEPS } from '../data/siteContent.js'
import SectionHeading from './SectionHeading.jsx'

export default function HowItWorks() {
  return (
    <section id="how" className="section" aria-labelledby="how-title">
      <div className="container">
        <SectionHeading id="how-title" title="How it works" intro="Three quick steps from a confusing item to a clear decision." />
        <ol className="steps">
          {STEPS.map(({ number, title, text, Icon }) => (
            <li key={number} className="step">
              <span className="step-number" aria-hidden="true">
                {number}
              </span>
              <span className="step-icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>
                <span className="sr-only">Step {number}: </span>
                {title}
              </h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
