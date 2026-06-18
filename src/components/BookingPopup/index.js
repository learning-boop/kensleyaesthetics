import { useState, useEffect } from 'react';
import { useAppointment } from '../../context/AppointmentContext';
import './BookingPopup.css';

function BookingPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { openDrawer } = useAppointment();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.85) {
        setVisible(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const dismiss = () => {
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
  };

  const handleBook = () => {
    dismiss();
    openDrawer();
  };

  if (!visible) return null;

  return (
    <div className={`bp-popup ${dismissed ? 'bp-popup--out' : 'bp-popup--in'}`}>
      <button className="bp-popup__close" onClick={dismiss} aria-label="Close">
        <span /><span />
      </button>

      <span className="bp-popup__eyebrow">Creative Touch Renova</span>

      <p className="bp-popup__heading">
        Book an appointment,<br />
        get a new version<br />
        of yourself.
      </p>

      <button className="bp-popup__cta" onClick={handleBook}>
        Book Now
        <span className="bp-popup__cta-arrow">→</span>
      </button>
    </div>
  );
}

export default BookingPopup;
