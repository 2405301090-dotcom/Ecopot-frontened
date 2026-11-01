export default function CartDrawer({ open, onClose, cart, onChange, onRemove, onClear }) {
  const items = Object.values(cart)
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-label="Shopping cart" aria-hidden={!open}>
        <div className="drawer-head">
          <h3>Your Cart</h3>
          <button className="close" onClick={onClose} aria-label="Close cart">✕</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">Your cart is empty. Add a pot to get started 🌿</p>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((i) => (
                <li key={i.id}>
                  <div>
                    <strong>{i.name}</strong>
                    <span>₹{i.price} each</span>
                  </div>
                  <div className="qty">
                    <button onClick={() => onChange(i.id, -1)} aria-label="Decrease quantity">−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => onChange(i.id, 1)} aria-label="Increase quantity">+</button>
                    <button className="remove" onClick={() => onRemove(i.id)} aria-label="Remove item">🗑</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="drawer-foot">
              <div className="total"><span>Total</span><strong>₹{total}</strong></div>
              <button className="btn btn-primary full" onClick={onClear}>Clear Cart</button>
              <small>Demo store — no payment is processed.</small>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
