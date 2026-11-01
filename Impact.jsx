import { useEffect, useRef, useState } from 'react'
import { impact } from '../data'

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const run = () => {
      const start = performance.now()
      const dur = 1600
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1)
        setN(Math.floor(value * p))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }
    if (!('IntersectionObserver' in window)) { setN(value); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { run(); io.disconnect() }
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [value])

  return <span ref={ref}>{n.toLocaleString('en-IN')}{suffix}</span>
}

export default function Impact() {
  return (
    <section id="impact" className="section impact">
      <div className="container">
        <div className="section-head light">
          <p className="eyebrow">Environmental Impact</p>
          <h2>Small pots, big difference</h2>
          <p>Together with our customers, we are cutting waste one plant at a time.</p>
        </div>
        <div className="grid grid-4">
          {impact.map((i) => (
            <div className="impact-item" key={i.label}>
              <strong><Counter value={i.value} suffix={i.suffix} /></strong>
              <span>{i.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
