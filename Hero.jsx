export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <span className="pill">🌍 Sustainable plant pots</span>
          <h1>Grow Green, <span>Live Clean</span></h1>
          <p>
            EcoPot turns recycled and natural materials into beautiful pots and planters —
            so your plants thrive and the planet breathes easier.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Shop Now</a>
            <a href="#about" className="btn btn-outline">Learn More</a>
          </div>
          <ul className="hero-stats">
            <li><strong>100%</strong> recycled</li>
            <li><strong>6</strong> eco designs</li>
            <li><strong>0</strong> plastic packaging</li>
          </ul>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80"
            alt="Green plants growing in pots"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
      </div>
    </section>
  )
}
