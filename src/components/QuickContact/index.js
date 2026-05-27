import { useState } from 'react';
import portraitImg from '../../data/images/eight.jpg';
import './QuickContact.css';

export default function QuickContact() {
  const [name, setName]   = useState('');
  const [phone, setPhone] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up form submission
    alert(`Thank you, ${name}! We will call you shortly.`);
    setName('');
    setPhone('');
  }

  return (
    <section className="qc-section">
      {/* Left — portrait image */}
      <div className="qc-image">
        <img
          src={portraitImg}
          alt="The Finest Care and Expert Touch"
        />
      </div>

      {/* Right — form */}
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
          By clicking the button, you make the right choice{' '}
          <span style={{ color: 'var(--color-rose)' }}>♥</span> and agree to the{' '}
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
