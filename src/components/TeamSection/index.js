import { useAppointment } from '../../context/AppointmentContext';
import './TeamSection.css';

/* ── Homepage split layout ──────────────────────────────── */
export function TeamSplit() {
  const { openDrawer } = useAppointment();

  return (
    <section className="ts-split">
      {/* Left: team photo */}
      <div className="ts-split__img-col">
        <img
          src="/assets/kensley-aesthetics-clinical-team-newcastle.png"
          alt="The Kensley Aesthetics clinical team — Dr Tiru Matla and practitioners, Newcastle"
          className="ts-split__img"
          loading="lazy"
          width="800"
          height="600"
        />
      </div>

      {/* Right: content */}
      <div className="ts-split__content-col">
        <span className="ts-eyebrow">The People Behind Your Care</span>
        <h2 className="ts-split__heading">
          Meet<br />Our Team
        </h2>
        <div className="ts-split__rule" />

        {/* Founder feature */}
        <div className="ts-split__founder">
          <p className="ts-split__founder-label">Founder &amp; Clinical Director</p>
          <h3 className="ts-split__founder-name">Dr Tiru Matla</h3>
          <p className="ts-split__founder-creds">MBBS · MRCGP · DFSRH · GMC Registered</p>
        </div>

        <div className="ts-split__member-divider" />

        <button className="ts-split__btn" onClick={openDrawer}>
          Book a Consultation
        </button>
      </div>
    </section>
  );
}

const PRACTITIONER_ROLES = [
  { title: 'Clinical Director', name: 'Dr Tiru Matla', creds: 'MBBS · MRCGP · DFSRH' },
  { title: 'Facial Aesthetics', name: 'Dr Mariyam Durrani', creds: 'Dentist & Aesthetics Practitioner' },
  { title: 'Aesthetics Practitioner', name: 'Sophia Azam', creds: 'Pharmacist · Independent Prescriber' },
];

/* ── About page team section ────────────────────────────── */
export default function TeamSection() {
  const { openDrawer } = useAppointment();

  return (
    <section className="ts-about-team">
      <div className="ts-about-team__inner">

        {/* Left — heading + intro */}
        <div className="ts-about-team__left">
          <span className="ts-eyebrow">Our People</span>
          <h2 className="ts-about-team__title">
            A Team Built<br />on Clinical Trust
          </h2>
          <div className="ts-about-team__rule" />
          <p className="ts-about-team__desc">
            Kensley Aesthetics is led by Dr Tiru Matla and supported by a dedicated
            team of medically qualified practitioners. Every member of our team
            shares the same clinical philosophy — natural-looking results, honest
            counsel, and care that puts the patient first.
          </p>
          <button className="ts-about-team__btn" onClick={openDrawer}>
            Book a Consultation
          </button>
        </div>

        {/* Right — practitioner list + team count */}
        <div className="ts-about-team__right">
          <div className="ts-about-team__list">
            {PRACTITIONER_ROLES.map((p, i) => (
              <div className="ts-about-team__row" key={i}>
                <span className="ts-about-team__row-num">0{i + 1}</span>
                <div>
                  <p className="ts-about-team__row-title">{p.title}</p>
                  <p className="ts-about-team__row-name">{p.name}</p>
                  <p className="ts-about-team__row-creds">{p.creds}</p>
                </div>
              </div>
            ))}
            <div className="ts-about-team__row ts-about-team__row--muted">
              <span className="ts-about-team__row-num">—</span>
              <div>
                <p className="ts-about-team__row-name">+ 2 additional practitioners</p>
                <p className="ts-about-team__row-creds">Clinically trained &amp; patient focused</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
