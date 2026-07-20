import { useEffect, useRef, useState } from 'react';
import SeoHead from '../components/SeoHead';
import './BookAppointment.css';

function BookAppointment() {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(1000);

  useEffect(() => {
    function handleMessage(e) {
      if (!e.data) return;
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
      <SeoHead
        title="Book an Appointment | Kensley Aesthetics Newcastle"
        description="Book your aesthetic consultation or treatment at Kensley Aesthetics in Jesmond, Newcastle. Doctor-led care, bespoke treatment plans."
        path="/book"
      />

      {/* ── Compact header ── */}
      <div className="ba-header">
        <span className="ba-header__eyebrow">Get Started</span>
        <h1 className="ba-header__title">Book an Appointment</h1>
        <p className="ba-header__sub">Beauty Refined · Confidence Restored</p>
        <div className="ba-header__logo-wrap">
          <img src="/assets/bookinglogo.png" alt="Kensley Aesthetics" className="ba-header__logo" />
        </div>
      </div>

      {/* ── Booking iframe ── */}
      <section className="ba-body">
        <iframe
          ref={iframeRef}
          src="https://portal.aestheticnursesoftware.com/book-online-iframe/31976?is_iframe=1&auto_adjust_height=1"
          frameBorder="0"
          scrolling="no"
          style={{ width: '100%', height: iframeHeight + 'px', border: 'none', display: 'block' }}
          id="ansOlbIframe"
          title="Book an Appointment — Kensley Aesthetics"
        />
      </section>
    </>
  );
}

export default BookAppointment;
