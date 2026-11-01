import { team } from '../data'

export default function Team() {
  return (
    <section id="team" className="section alt">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Team</p>
          <h2>The people behind EcoPot</h2>
        </div>
        <div className="grid grid-4">
          {team.map((m) => (
            <article className="card team-card" key={m.name}>
              <div className="avatar">{m.name.split(' ').map((w) => w[0]).join('')}</div>
              <h3>{m.name}</h3>
              <span className="role">{m.role}</span>
              <p>{m.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
