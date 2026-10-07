import { useEffect, useRef, useState } from 'react';
import { useAppointment } from '../../context/AppointmentContext';
import './drawer.css';

function AppointmentDrawer() {
  const { open, closeDrawer } = useAppointment();
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(900);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Listen for height postMessages from Aesthetic Nurse Software portal
  useEffect(() => {
    function handleMessage(e) {
      if (!e.data) return;

      // ANS sends height as a plain number, or as { height: number }
      if (typeof e.data === 'number' && e.data > 100) {
        setIframeHeight(e.data);
      } else if (typeof e.data === 'object' && e.data.height && e.data.height > 100) {
        setIframeHeight(e.data.height);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      {/* Overlay */}
      <div
        className={`appt-overlay ${open ? 'appt-overlay--open' : ''}`}
        onClick={closeDrawer}
      />

      {/* Drawer panel */}
      <div className={`appt-drawer ${open ? 'appt-drawer--open' : ''}`}>

        {/* Header */}
        <div className="appt-drawer__head">
          <div className="appt-drawer__brand">
            <span className="appt-drawer__eyebrow">Kensley Aesthetics</span>
            <span className="appt-drawer__title">Schedule Your Consultation</span>
          </div>
          <button className="appt-drawer__close" onClick={closeDrawer} aria-label="Close">
            <span />
            <span />
          </button>
        </div>

        <div className="appt-drawer__body">
          <iframe
            ref={iframeRef}
            src="https://portal.aestheticnursesoftware.com/book-online-iframe/31976?is_iframe=1&auto_adjust_height=1"
            frameBorder="0"
            scrolling="no"
            style={{ width: '100%', height: iframeHeight + 'px', border: 'none', display: 'block' }}
            id="ansOlbIframe"
            title="Schedule Your Consultation"
          />
        </div>

      </div>
    </>
  );
}

export default AppointmentDrawer;
