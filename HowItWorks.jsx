import { steps } from '../data'

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How It Works</p>
          <h2>Four simple steps to a greener home</h2>
        </div>
        <div className="grid grid-4 steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
