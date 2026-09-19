import { useEffect, useState } from 'react'
import { Check, Recycle } from 'lucide-react'

const STAGES = [
  'Reading your description',
  'Matching waste categories',
  'Checking disposal guidance',
  'Preparing your result',
]

export default function LoadingState() {
  const [stage, setStage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setStage((value) => Math.min(value + 1, STAGES.length - 1)), 450)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="loading" aria-hidden="true">
      <div className="loading-orb">
        <span className="ring ring-1" />
        <span className="ring ring-2" />
        <span className="orb-core">
          <Recycle size={30} />
        </span>
      </div>
      <div className="loading-copy">
        <h3>AI is analyzing your waste…</h3>
        <ul>
          {STAGES.map((label, index) => (
            <li key={label} className={index < stage ? 'done' : index === stage ? 'active' : ''}>
              <span className="tick">{index < stage ? <Check size={12} /> : null}</span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
