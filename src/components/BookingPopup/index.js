import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPopup.css';

function BookingPopup() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

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
    sessionStorage.setItem('ai-popup-dismissed', '1');
    setTimeout(() => setVisible(false), 400);
  };

  const handleTryNow = () => {
    dismiss();
    navigate('/book');
  };

  if (!visible) return null;

  return (
    <>
      <div className="bp-overlay" onClick={dismiss} />
      <div className={`bp-popup ${dismissed ? 'bp-popup--out' : 'bp-popup--in'}`}>
        <button className="bp-popup__close" onClick={dismiss} aria-label="Close">
          <span /><span />
        </button>

        <span className="bp-popup__eyebrow">Exclusive AI Feature</span>

        <p className="bp-popup__heading">
          Curious how you'd look<br />
          after your treatment?
        </p>

        <p className="bp-popup__body">
          Upload a photo and let our AI show you a personalised preview of your results — before you commit to a single appointment.
        </p>

        <button className="bp-popup__cta" onClick={handleTryNow}>
          See My Results
          <span className="bp-popup__cta-arrow">→</span>
        </button>

        <p className="bp-popup__disclaimer">AI simulation only. Individual results will vary.</p>
      </div>
    </>
  );
}

export default BookingPopup;
