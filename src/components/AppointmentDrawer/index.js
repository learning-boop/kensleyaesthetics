import { useEffect } from 'react';
import { useAppointment } from '../../context/AppointmentContext';
import './drawer.css';

function AppointmentDrawer() {
  const { open, closeDrawer } = useAppointment();

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

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
            <span className="appt-drawer__title">Book an Appointment</span>
          </div>
          <button className="appt-drawer__close" onClick={closeDrawer} aria-label="Close">
            <span />
            <span />
          </button>
        </div>

        <div className="appt-drawer__body">
          <iframe
            src="https://portal.aestheticnursesoftware.com/book-online-iframe/31976?is_iframe=1&auto_adjust_height=1"
            frameBorder="0"
            scrolling="no"
            style={{ width: '100%', border: 'none', display: 'block' }}
            id="ansOlbIframe"
            title="Book an Appointment"
          />
        </div>

      </div>
    </>
  );
}

export default AppointmentDrawer;
