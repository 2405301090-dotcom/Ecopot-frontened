import { products } from '../data'
import PotArt from './PotArt'

export default function Products({ onAdd, cart }) {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Products</p>
          <h2>Choose your EcoPot</h2>
          <p>Every pot is made from recycled or natural materials.</p>
        </div>
        <div className="grid grid-3">
          {products.map((p) => (
            <article className="card product-card" key={p.id}>
              <div className="product-img"><PotArt pot={p.pot} plant={p.plant} leaf={p.leaf} /></div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="product-foot">
                <strong className="price">₹{p.price}</strong>
                <button className="btn btn-primary btn-sm" onClick={() => onAdd(p)}>
                  {cart[p.id] ? `Added (${cart[p.id].qty}) +` : 'Add to Cart'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
