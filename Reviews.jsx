import { reviews } from '../data'

export default function Reviews() {
  return (
    <section id="reviews" className="section alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Customer Reviews</p>
          <h2>Loved by plant parents</h2>
        </div>
        <div className="grid grid-3">
          {reviews.map((r) => (
            <article className="card review" key={r.name}>
              <div className="stars" aria-label={`${r.stars} out of 5 stars`}>
                {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
              </div>
              <p>“{r.text}”</p>
              <div className="reviewer">
                <div className="avatar sm">{r.name[0]}</div>
                <div><strong>{r.name}</strong><span>{r.city}</span></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
