import { useState } from 'react';
import { submitContact } from '../../services/api';
import './QuickContact.css';

export default function QuickContact() {
  const [name, setName]       = useState('');
  const [phone, setPhone]     = useState('');
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitContact({ name, phone, message: 'Callback request via website.' });
      setSent(true);
      setName('');
      setPhone('');
    } catch {
      setError('Something went wrong. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="qc-section">
      {sent ? (
        <div className="qc-form-panel qc-form-panel--sent">
          <p className="qc-sent-msg">Thank you, we'll be in touch shortly.</p>
        </div>
      ) : (
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

          {error && <p className="qc-error">{error}</p>}

          <p className="qc-disclaimer">
            By submitting this form, you agree to our{' '}
            <a href="/privacy-policy">privacy policy</a>.
          </p>

          <div className="qc-send-wrap">
            <button className="qc-send-btn" type="submit" disabled={loading}>
              {loading ? 'Sending…' : 'Send'}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
