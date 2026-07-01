import { useState } from 'react';
import PageHero from '../components/PageHero';
import { useTreatments } from '../context/TreatmentsContext';
import { submitContact } from '../services/api';
import './pages.css';

function Contact() {
  const { treatments } = useTreatments();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', treatment: '', message: '',
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await submitContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.treatment,
        message: form.message,
      });
      setSent(true);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        label="Get in Touch"
        title={<>Book an Appointment<br />or Say Hello</>}
        subtitle="We'd love to hear from you. Fill in the form below or reach out directly."
      />

      <section className="page-section">
        <div className="container">
          <div className="contact-layout">

            <div className="contact-form-wrap">
              {sent ? (
                <div className="contact-success">
                  <span className="contact-success__icon">✦</span>
                  <h2 className="section-title">Thank You</h2>
                  <p className="page-body-text" style={{ marginTop: 16 }}>
                    We've received your message and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label">Full Name *</label>
                      <input
                        className="contact-form__input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Email Address *</label>
                      <input
                        className="contact-form__input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-form__row">
                    <div className="contact-form__field">
                      <label className="contact-form__label">Phone Number</label>
                      <input
                        className="contact-form__input"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 (0) ..."
                      />
                    </div>
                    <div className="contact-form__field">
                      <label className="contact-form__label">Treatment of Interest</label>
                      <select
                        className="contact-form__input contact-form__select"
                        name="treatment"
                        value={form.treatment}
                        onChange={handleChange}
                      >
                        <option value="">Select a treatment</option>
                        {treatments.map((t) => (
                          <option key={t.slug} value={t.label}>{t.label}</option>
                        ))}
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>
                  </div>
                  <div className="contact-form__field">
                    <label className="contact-form__label">Your Message</label>
                    <textarea
                      className="contact-form__input contact-form__textarea"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals or any questions you have..."
                      rows={5}
                    />
                  </div>
                  {error && (
                    <p style={{ color: '#e87f7f', fontSize: 13, fontFamily: 'Helvetica Neue, Arial, sans-serif', marginBottom: 8 }}>
                      {error}
                    </p>
                  )}
                  <button type="submit" className="btn-primary contact-form__submit" disabled={loading}>
                    {loading ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            <aside className="contact-info">
              <div className="contact-info__block">
                <p className="section-label">Location</p>
                <p className="contact-info__text">
                  Creative Touch<br />
                  London, United Kingdom
                </p>
              </div>
              <div className="contact-info__block">
                <p className="section-label">Opening Hours</p>
                <p className="contact-info__text">
                  Monday – Friday: 9am – 7pm<br />
                  Saturday: 10am – 5pm<br />
                  Sunday: By appointment only
                </p>
              </div>
              <div className="contact-info__block">
                <p className="section-label">Contact</p>
                <p className="contact-info__text">
                  hello@creativetouchrenova.com<br />
                  07906 99154
                </p>
              </div>
              <div className="contact-info__block">
                <p className="section-label">Follow Us</p>
                <div className="contact-info__socials">
                  <span className="contact-info__social-link">Instagram</span>
                  <span className="contact-info__social-link">Facebook</span>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
