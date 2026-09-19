import { SDGS } from '../data/siteContent.js'
import SectionHeading from './SectionHeading.jsx'

export default function SdgSection() {
  const { primary, secondary } = SDGS
  return (
    <section id="sdg" className="section" aria-labelledby="sdg-title">
      <div className="container">
        <SectionHeading
          id="sdg-title"
          title="Designed for Sustainable Development"
          intro="AI WasteWise is built around one primary goal and supports two more."
        />
        <div className="sdg-layout">
          <article className="sdg sdg-primary">
            <p className="sdg-number" aria-hidden="true">
              {primary.number}
            </p>
            <div>
              <h3>
                SDG {primary.number}
                <span>{primary.title}</span>
              </h3>
              <p>{primary.text}</p>
              <p className="sdg-tag">Primary goal</p>
            </div>
          </article>

          <div className="sdg-stack">
            {secondary.map((goal) => (
              <article key={goal.number} className={`sdg sdg-secondary sdg-${goal.tone}`}>
                <p className="sdg-number" aria-hidden="true">
                  {goal.number}
                </p>
                <div>
                  <h3>
                    SDG {goal.number}
                    <span>{goal.title}</span>
                  </h3>
                  <p>{goal.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <p className="fineprint">
          AI WasteWise is an independent student project inspired by the Sustainable Development Goals. It is not
          affiliated with, or endorsed by, the United Nations or any government organization.
        </p>
      </div>
    </section>
  )
}
