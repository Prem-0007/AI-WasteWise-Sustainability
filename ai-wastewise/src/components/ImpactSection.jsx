import { IMPACTS } from '../data/siteContent.js'
import SectionHeading from './SectionHeading.jsx'

export default function ImpactSection() {
  return (
    <section id="impact" className="section section-tint" aria-labelledby="impact-title">
      <div className="container">
        <SectionHeading
          id="impact-title"
          title="Expected Impact"
          intro="What this idea aims to support. These are goals for the concept, not measured results."
        />
        <div className="impacts">
          {IMPACTS.map(({ title, text, Icon }) => (
            <article key={title} className="impact">
              <span className="impact-icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="fineprint">No usage statistics or environmental savings are claimed for this prototype.</p>
      </div>
    </section>
  )
}
