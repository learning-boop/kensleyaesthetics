import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './QuickContact.css';

const EMAILJS_SERVICE_ID  = 'service_2pp5alh';
const EMAILJS_TEMPLATE_ID = 'template_mhftbrk';
const EMAILJS_PUBLIC_KEY  = '9BJmaeXydGuyEUSff';

export default function QuickContact() {
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState('');
  const [status, setStatus]   = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, phone_number: phone },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setName('');
      setPhone('');
    } catch {
      setStatus('error');
    }
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
            onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
            required
          />
        </div>

        <p className="qc-disclaimer">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy">privacy policy</a>.
        </p>

        {status === 'success' && (
          <p className="qc-success">Thank you! We'll be in touch shortly.</p>
        )}
        {status === 'error' && (
          <p className="qc-error">Something went wrong. Please try again.</p>
        )}

        <div className="qc-send-wrap">
          <button className="qc-send-btn" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </div>
      </form>
    </section>
  );
}
