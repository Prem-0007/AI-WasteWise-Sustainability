import { RESPONSIBLE_AI } from '../data/siteContent.js'

export default function ResponsibleAI() {
  return (
    <section id="responsible-ai" className="section section-tint" aria-labelledby="responsible-title">
      <div className="container responsible">
        <div className="responsible-intro">
          <h2 id="responsible-title">Responsible AI</h2>
          <p>
            AI can make disposal decisions easier, but it should support people, not replace official guidance. These
            principles shape every answer in AI WasteWise.
          </p>
        </div>
        <ul className="responsible-list">
          {RESPONSIBLE_AI.map(({ title, text, Icon }) => (
            <li key={title}>
              <span className="responsible-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
