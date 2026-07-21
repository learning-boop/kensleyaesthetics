import { useState } from 'react';
import './QuickContact.css';

const WHATSAPP_NUMBER = '447920699154';

export default function QuickContact() {
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const text = encodeURIComponent(`Hi, I'd like to request a callback. My name is ${name} and my number is ${phone}.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  }

  return (
    <section className="qc-section">
      <form className="qc-form-panel" onSubmit={handleSubmit} noValidate>
        <div className="qc-field">
          <input
            className="qc-input"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="qc-field">
          <input
            className="qc-input"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
        </div>

        <p className="qc-disclaimer">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy">privacy policy</a>.
        </p>

        <div className="qc-send-wrap">
          <button className="qc-send-btn" type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
