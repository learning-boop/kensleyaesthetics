import Image from 'next/image';
import { useAppointment } from '../../context/AppointmentContext';
import './TeamSection.css';

const TEAM_IMAGES = [
  { src: '/images/kensley-real/team-a-dr-mariyam-durrani-kensley-aesthetics.webp', alt: 'Dr Mariyam Durrani, Aesthetic Practitioner at Kensley Aesthetics, Newcastle', name: 'Dr Mariyam Durrani', role: 'Facial Aesthetics Practitioner' },
  { src: '/images/kensley-real/team-b-aesthetic-practitioner-kensley-aesthetics.webp', alt: 'Dr Pamela Inglis, Aesthetic Practitioner at Kensley Aesthetics clinic, Newcastle', name: 'Dr Pamela Inglis', role: 'Aesthetic Practitioner' },
  { src: '/images/kensley-real/team-c-aesthetic-practitioner-kensley-aesthetics.webp', alt: 'Sophia Azam, Aesthetic Practitioner at Kensley Aesthetics clinic in Jesmond, Newcastle', name: 'Sophia Azam', role: 'Aesthetic Practitioner' },
  { src: '/images/kensley-real/team-d-aesthetic-practitioner-kensley-aesthetics.webp', alt: 'Jacquelyn Foggin, Aesthetic Practitioner at Kensley Aesthetics clinic, Newcastle', name: 'Jacquelyn Foggin', role: 'Aesthetic Practitioner' },
];

/* ── Homepage team slider ──────────────────────────────── */
export function TeamSplit() {
  return (
    <section className="team-slider">
      <div className="team-slider__header">
        <span className="ts-eyebrow">The People Behind Your Care</span>
        <h2 className="team-slider__title">Meet Our Team</h2>
      </div>

      <div className="team-slider__track-wrap">
        <div className="team-slider__track">
          {/* Double the images for seamless infinite loop */}
          {[...TEAM_IMAGES, ...TEAM_IMAGES].map((img, i) => (
            <div key={i} className="team-slider__slide">
              <Image
                src={img.src}
                alt={img.alt}
                className="team-slider__img"
                width={500}
                height={500}
                loading="lazy"
                sizes="(max-width: 860px) 70vw, 320px"
              />
              <div className="team-slider__info">
                <p className="team-slider__name">{img.name}</p>
                <p className="team-slider__role">{img.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRACTITIONER_ROLES = [
  { title: 'Founder & Clinical Lead', name: 'Dr Matla', creds: 'Founder & Clinical Lead' },
  { title: 'Facial Aesthetics Practitioner', name: 'Dr Mariyam Durrani', creds: 'Facial Aesthetics Practitioner' },
  { title: 'Aesthetic Practitioner', name: 'Dr Pamela Inglis', creds: 'Aesthetic Practitioner' },
  { title: 'Aesthetic Practitioner', name: 'Sophia Azam', creds: 'Aesthetic Practitioner' },
  { title: 'Aesthetic Practitioner', name: 'Jacquelyn Foggin', creds: 'Aesthetic Practitioner' },
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
            A Team Built{' '}<br />on Clinical Trust
          </h2>
          <div className="ts-about-team__rule" />
          <p className="ts-about-team__desc">
            Kensley Aesthetics is supported by a dedicated team of medically
            qualified practitioners. Every member of our team
            shares the same clinical philosophy — natural-looking results, honest
            counsel, and care that puts the patient first.
          </p>
          <button className="ts-about-team__btn" onClick={openDrawer}>
            Schedule Your Consultation
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
          </div>
        </div>

      </div>
    </section>
  );
}
