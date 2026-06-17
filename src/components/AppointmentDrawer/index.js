import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { client, MAIN_TREATMENTS_QUERY } from '../../lib/sanityClient';
import { useAppointment } from '../../context/AppointmentContext';
import './drawer.css';

function AppointmentDrawer() {
  const { open, closeDrawer } = useAppointment();

  const [treatments, setTreatments] = useState([]);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', treatment: '', date: '', time: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    client.fetch(MAIN_TREATMENTS_QUERY).then((data) => {
      setTreatments(
        data.map((t) => ({ title: t.label, slug: t.slug }))
      );
    });
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    closeDrawer();
    setTimeout(() => setSubmitted(false), 500);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`appt-overlay ${open ? 'appt-overlay--open' : ''}`}
        onClick={handleClose}
      />

      {/* Drawer panel */}
      <div className={`appt-drawer ${open ? 'appt-drawer--open' : ''}`}>

        {/* Header */}
        <div className="appt-drawer__head">
          <div className="appt-drawer__brand">
            <span className="appt-drawer__eyebrow">Creative Touch</span>
            <span className="appt-drawer__title">Book an Appointment</span>
          </div>
          <button className="appt-drawer__close" onClick={handleClose} aria-label="Close">
            <span />
            <span />
          </button>
        </div>

        <div className="appt-drawer__body">
          {submitted ? (
            <div className="appt-drawer__success">
              <div className="appt-drawer__success-icon">✓</div>
              <h3 className="appt-drawer__success-title">Request Received</h3>
              <p className="appt-drawer__success-text">
                Thank you, {form.name.split(' ')[0]}. We'll confirm your appointment within 24 hours.
              </p>
              <button className="appt-drawer__submit" onClick={handleClose}>
                Done
              </button>
            </div>
          ) : (
            <form className="appt-drawer__form" onSubmit={handleSubmit}>

              <div className="appt-drawer__row">
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Full Name *</label>
                  <input
                    className="appt-drawer__input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    required
                  />
                </div>
              </div>

              <div className="appt-drawer__row appt-drawer__row--split">
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Email *</label>
                  <input
                    className="appt-drawer__input"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={set('email')}
                    required
                  />
                </div>
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Phone</label>
                  <input
                    className="appt-drawer__input"
                    type="tel"
                    placeholder="+1 000 000 0000"
                    value={form.phone}
                    onChange={set('phone')}
                  />
                </div>
              </div>

              <div className="appt-drawer__row">
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Treatment *</label>
                  <select
                    className="appt-drawer__input appt-drawer__select"
                    value={form.treatment}
                    onChange={set('treatment')}
                    required
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((t) => (
                      <option key={t.slug} value={t.slug}>{t.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="appt-drawer__row appt-drawer__row--split">
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Preferred Date *</label>
                  <input
                    className="appt-drawer__input"
                    type="date"
                    value={form.date}
                    onChange={set('date')}
                    required
                  />
                </div>
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Preferred Time</label>
                  <select
                    className="appt-drawer__input appt-drawer__select"
                    value={form.time}
                    onChange={set('time')}
                  >
                    <option value="">Any time</option>
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>02:00 PM</option>
                    <option>03:00 PM</option>
                    <option>04:00 PM</option>
                    <option>05:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="appt-drawer__row">
                <div className="appt-drawer__field">
                  <label className="appt-drawer__label">Message</label>
                  <textarea
                    className="appt-drawer__input appt-drawer__textarea"
                    placeholder="Any additional notes or concerns..."
                    value={form.message}
                    onChange={set('message')}
                    rows={3}
                  />
                </div>
              </div>

              <div className="appt-drawer__footer">
                <p className="appt-drawer__note">* Required fields</p>
                <button className="appt-drawer__submit" type="submit">
                  Confirm Appointment
                  <span className="appt-drawer__submit-arrow">→</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default AppointmentDrawer;
