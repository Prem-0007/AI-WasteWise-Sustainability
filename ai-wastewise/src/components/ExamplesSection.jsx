import { EXAMPLE_CARDS } from '../data/examples.js'
import SectionHeading from './SectionHeading.jsx'

export default function ExamplesSection({ onSelect, disabled }) {
  return (
    <section id="examples" className="section section-tint" aria-labelledby="examples-title">
      <div className="container">
        <SectionHeading
          id="examples-title"
          title="Try these examples"
          intro="Tap an item and it is analyzed instantly in the analyzer above."
        />
        <div className="examples">
          {EXAMPLE_CARDS.map(({ id, title, query, hint, Icon, tone }) => (
            <button
              key={id}
              type="button"
              className={`example tone-${tone}`}
              disabled={disabled}
              onClick={() => onSelect(query)}
            >
              <span className="example-icon" aria-hidden="true">
                <Icon size={24} />
              </span>
              <span className="example-text">
                <strong>{title}</strong>
                <span>{hint}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
