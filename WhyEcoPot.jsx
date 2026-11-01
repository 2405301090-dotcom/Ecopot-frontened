import { reasons } from '../data'

export default function WhyEcoPot() {
  return (
    <section id="why" className="section alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Why EcoPot</p>
          <h2>Better for your plants, better for Earth</h2>
        </div>
        <div className="grid grid-4">
          {reasons.map((r) => (
            <article className="card center" key={r.title}>
              <div className="icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
