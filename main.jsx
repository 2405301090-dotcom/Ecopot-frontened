import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Leaf, Menu, X, ArrowUpRight, Sprout, Recycle, Heart, ShoppingBag, Plus, Minus, CheckCircle2, Mail, Instagram, Facebook, ArrowRight } from "lucide-react";
import "./style.css";

const products = [
  { id: 1, name: "Seed Starter Pot", size: "Small · Set of 6", price: 149, emoji: "🌱", tag: "Best for beginners", color: "sage" },
  { id: 2, name: "Everyday Grow Pot", size: "Medium · Set of 4", price: 249, emoji: "🪴", tag: "Bestseller", color: "cream" },
  { id: 3, name: "Garden Buddy Pot", size: "Large · Set of 2", price: 299, emoji: "🌿", tag: "For bigger roots", color: "peach" }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function addToCart(product) {
    setCart(current => {
      const found = current.find(item => item.id === product.id);
      return found
        ? current.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        : [...current, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  }
  function changeQty(id, delta) {
    setCart(current => current.map(item => item.id === id ? { ...item, qty: item.qty + delta } : item).filter(item => item.qty > 0));
  }
  function submitForm(e) {
    e.preventDefault();
    if (form.name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) || form.message.trim().length < 10) return;
    setSent(true);
  }

  const nav = [["About", "#about"], ["Products", "#products"], ["Why EcoPot", "#why"], ["How it works", "#how"], ["Contact", "#contact"]];
  return <>
    <header className="header">
      <a className="brand" href="#home" aria-label="EcoPot home"><span className="brand-mark"><Leaf size={22}/></span><span>eco<span className="brand-light">pot</span><small>GROW GREEN, LIVE CLEAN</small></span></a>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <button className="cart-button" onClick={() => setCartOpen(true)} aria-label="Open shopping cart"><ShoppingBag size={19}/><span>Cart</span><b>{cartCount}</b></button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"></span> BETTER PLANTS. LESS PLASTIC.</div>
          <h1>Grow green.<br/><em>Live clean.</em></h1>
          <p className="hero-text">A little pot can make a big difference. Meet biodegradable plant pots designed to help your plants — and our planet — thrive together.</p>
          <div className="hero-actions"><a className="button button-dark" href="#products">Explore EcoPots <ArrowUpRight size={18}/></a><a className="text-link" href="#about">Our story <ArrowRight size={17}/></a></div>
          <div className="hero-proof"><div className="proof-icons"><span>🌱</span><span>♻️</span><span>🌍</span></div><div><strong>A greener start, naturally.</strong><small>Thoughtful gardening for everyday life.</small></div></div>
        </div>
        <div className="hero-art">
          <div className="art-sun"></div><div className="art-label"><Leaf size={16}/> ROOTED IN NATURE</div>
          <div className="plant-illustration"><div className="stem"></div><div className="leaf-shape leaf-one"></div><div className="leaf-shape leaf-two"></div><div className="leaf-shape leaf-three"></div><div className="leaf-shape leaf-four"></div><div className="pot-rim"></div><div className="pot-body"><span>eco<br/>pot</span></div><div className="soil"></div></div>
          <div className="floating-note note-one"><span>♻️</span><div><b>Plastic-free thinking</b><small>One pot at a time</small></div></div>
          <div className="floating-note note-two"><span>🌿</span><div><b>Plant. Grow. Return.</b><small>Made for a greener cycle</small></div></div>
          <div className="hero-art-caption">NATURE DOES IT BETTER <span>✳</span></div>
        </div>
        <div className="hero-bottom"><span>01 / A NEW WAY TO GROW</span><span>MADE FOR PLANT PEOPLE <span className="tiny-leaf">✳</span></span></div>
      </section>

      <section className="values-strip">
        <div><Recycle/><span><b>Less plastic waste</b><small>A more thoughtful alternative</small></span></div>
        <div><Sprout/><span><b>Plant pot together</b><small>Help protect delicate roots</small></span></div>
        <div><Heart/><span><b>Made for plant lovers</b><small>Simple, useful and beautiful</small></span></div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-kicker">01 — OUR STORY</div>
        <div className="about-grid">
          <div><h2>A small pot.<br/><em>A big purpose.</em></h2></div>
          <div className="about-copy"><p>Why should a plant's first home be something that stays on our planet for centuries? EcoPot is built around a simple idea: make growing greener feel easy, practical and beautiful.</p><p>Our concept is all about giving plants a thoughtful start and helping people take one small step toward less plastic in their everyday gardening.</p><a className="text-link" href="#why">Discover our values <ArrowRight size={17}/></a></div>
        </div>
        <div className="mission-card"><div className="mission-symbol"><Sprout size={38}/></div><div><span>OUR PROMISE</span><h3>Growing should give back to nature.</h3></div><p>Small everyday choices can help build a cleaner, greener future — one plant at a time.</p></div>
      </section>

      <section className="section product-section" id="products">
        <div className="section-heading"><div><div className="section-kicker">02 — THE COLLECTION</div><h2>Find your plant's<br/><em>happy place.</em></h2></div><p>Simple pot sizes for small beginnings, everyday greens and growing gardens.</p></div>
        <div className="product-grid">
          {products.map(p => <article className="product-card" key={p.id}>
            <div className={"product-art " + p.color}><span className="product-tag">{p.tag}</span><div className="product-plant">{p.emoji}</div><div className="product-pot"><span>eco<br/>pot</span></div><button className="quick-add" onClick={() => addToCart(p)} aria-label={"Add " + p.name + " to cart"}><Plus size={20}/></button></div>
            <div className="product-info"><div><h3>{p.name}</h3><p>{p.size}</p></div><strong>₹{p.price}</strong></div>
          </article>)}
        </div>
        <p className="demo-note">Demo prices for this student project. No real payment is collected.</p>
      </section>

      <section className="why-section" id="why">
        <div className="why-visual"><div className="why-orbit orbit-one"></div><div className="why-orbit orbit-two"></div><div className="earth-emoji">🌎</div><div className="why-sticker">GROW<br/>WITH<br/>CARE ✳</div></div>
        <div className="why-copy"><div className="section-kicker">03 — WHY ECOPOT</div><h2>Good for your<br/><em>garden. Better for Earth.</em></h2><p className="muted">We believe sustainable choices should fit real life — from a windowsill herb to a little balcony jungle.</p>
          <div className="benefit-list"><div><span>01</span><div><b>A greener alternative</b><p>Designed as a concept to reduce reliance on single-use plastic pots.</p></div><CheckCircle2/></div><div><span>02</span><div><b>Root-friendly gardening</b><p>Planting with care can make moving young plants simpler.</p></div><CheckCircle2/></div><div><span>03</span><div><b>Easy on everyday budgets</b><p>Accessible gardening should be for everyone, including students.</p></div><CheckCircle2/></div></div>
        </div>
      </section>

      <section className="section steps-section" id="how">
        <div className="section-heading"><div><div className="section-kicker">04 — HOW IT WORKS</div><h2>Four steps to a<br/><em>greener beginning.</em></h2></div><p>Make space for a little green in your day. Start small and let nature do its thing.</p></div>
        <div className="steps-grid">{[["01","Fill","Add potting mix to your pot, leaving a little room at the top.","🪴"],["02","Sow","Plant a seed or seedling and water it gently.","🌱"],["03","Grow","Give it good light, regular water and a little patience.","☀️"],["04","Transplant","Follow the pot's material guidance when moving your plant.","🌿"]].map(s=><div className="step-card" key={s[0]}><div className="step-top"><span>{s[0]}</span><b>{s[3]}</b></div><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div>
        <p className="demo-note">Always check the product's material and care instructions before planting a pot directly into soil.</p>
      </section>

      <section className="team-band"><div className="section-kicker">05 — THE PEOPLE BEHIND THE IDEA</div><h2>Four people.<br/><em>One greener goal.</em></h2><p>A student team bringing a sustainability idea to life.</p><div className="team-grid">{[["S","Shivanshi","Founder & Vision"],["T","Taniya","Product & Design"],["S","Sneha","Marketing & Outreach"],["S","Simran","Operations & Sustainability"]].map((m,i)=><div className="team-member" key={m[1]}><div className={"avatar avatar-"+i}>{m[0]}</div><b>{m[1]}</b><small>{m[2]}</small></div>)}</div></section>

      <section className="contact-section" id="contact"><div className="contact-copy"><div className="section-kicker">06 — SAY HELLO</div><h2>Let's grow<br/><em>something good.</em></h2><p>Have a question, an idea or a nursery partnership in mind? We'd love to hear from you.</p><a className="contact-email" href="mailto:2405301090@geetauniversity.edu.in"><Mail size={18}/> 2405301090@geetauniversity.edu.in</a><div className="social-links"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram</a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><Facebook size={18}/> Facebook</a></div></div>
        <form className="contact-form" onSubmit={submitForm} noValidate><h3>Send us a message</h3><label>Your name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="What should we call you?" required minLength="2"/></label><label>Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com" required/></label><label>Your message<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell us what's on your mind..." rows="4" required minLength="10"/></label><button className="button button-dark submit-button" type="submit">{sent ? "Message validated ✓" : "Send message"} <ArrowUpRight size={18}/></button>{sent && <p className="success-message">Thanks, {form.name}! The form is validated in this demo. Connect an email service to receive real messages.</p>}<p className="form-note">Demo form — messages are not sent to a server.</p></form>
      </section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><Leaf size={22}/></span><span>eco<span className="brand-light">pot</span><small>GROW GREEN, LIVE CLEAN</small></span></a><p>Biodegradable plant pot concept for a greener future.</p><div>© 2026 EcoPot · Student project</div></footer>

    {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={e => e.stopPropagation()}><div className="cart-head"><div><span className="section-kicker">YOUR GREEN PICKS</span><h2>Your cart <span>({cartCount})</span></h2></div><button className="close-cart" onClick={() => setCartOpen(false)} aria-label="Close cart"><X/></button></div>{cart.length === 0 ? <div className="empty-cart"><span>🪴</span><h3>Your cart is growing space.</h3><p>Add an EcoPot to get started.</p><button className="button button-dark" onClick={() => {setCartOpen(false); document.querySelector("#products").scrollIntoView({behavior:"smooth"});}}>Explore products <ArrowRight size={17}/></button></div> : <><div className="cart-items">{cart.map(item=><div className="cart-item" key={item.id}><div className={"mini-pot "+item.color}>{item.emoji}</div><div className="cart-item-info"><b>{item.name}</b><small>₹{item.price} · {item.size}</small><div className="qty-controls"><button onClick={()=>changeQty(item.id,-1)} aria-label="Decrease quantity"><Minus size={14}/></button><span>{item.qty}</span><button onClick={()=>changeQty(item.id,1)} aria-label="Increase quantity"><Plus size={14}/></button></div></div><strong>₹{item.price*item.qty}</strong></div>)}</div><div className="cart-total"><span>Total</span><b>₹{total}</b></div><button className="button button-dark checkout-button" onClick={() => alert("This is a demo student project. No real payments are processed.")}>Demo checkout <ArrowUpRight size={18}/></button><p className="form-note">No real payments are processed.</p></>}</aside></div>}
  </>;
}

createRoot(document.getElementById("root")).render(<App/>);
