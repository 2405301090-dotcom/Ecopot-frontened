import { useState } from 'react'

const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.'
    return e
  }

  const handleChange = (ev) => {
    setForm({ ...form, [ev.target.name]: ev.target.value })
    setErrors({ ...errors, [ev.target.name]: '' })
    setSent(false)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) {
      setSent(true)
      setForm(empty)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container two-col">
        <div>
          <p className="eyebrow">Contact Us</p>
          <h2>Let’s grow something together</h2>
          <p>Questions about our pots, bulk orders for schools or offices? Send us a message.</p>
          <ul className="contact-list">
            <li>📍 Green Street, Mathura, Uttar Pradesh</li>
            <li>✉️ hello@ecopot.example</li>
            <li>📞 +91 98765 43210</li>
          </ul>
        </div>

        <form className="card form" onSubmit={handleSubmit} noValidate>
          {sent && <div className="success" role="status">✅ Thank you! Your message has been sent. We’ll reply soon.</div>}

          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={errors.name ? 'invalid' : ''} />
          {errors.name && <small className="error">{errors.name}</small>}

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={errors.email ? 'invalid' : ''} />
          {errors.email && <small className="error">{errors.email}</small>}

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} placeholder="How can we help?" className={errors.message ? 'invalid' : ''} />
          {errors.message && <small className="error">{errors.message}</small>}

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
