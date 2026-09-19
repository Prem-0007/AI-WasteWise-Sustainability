// Shared heading block for page sections.
export default function SectionHeading({ id, title, intro, align = 'left' }) {
  return (
    <div className={`section-heading align-${align}`}>
      <h2 id={id}>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}
