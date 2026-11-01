import { navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="logo light">🌱 EcoPot</a>
          <p>Grow Green, Live Clean. Sustainable pots for a healthier planet.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            {navLinks.slice(0, 5).map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#contact">Instagram</a></li>
            <li><a href="#contact">Facebook</a></li>
            <li><a href="#contact">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} EcoPot. Made with 💚 for a greener Earth.</div>
    </footer>
  )
}
