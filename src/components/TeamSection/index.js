import Image from 'next/image';
import { useAppointment } from '../../context/AppointmentContext';
import './TeamSection.css';

const TEAM_IMAGES = [
  { src: '/images/our-team/skin-specialist-kensley-aesthetics-clinic-newcastle.jpg', alt: 'Skin specialist at Kensley Aesthetics clinic, Newcastle upon Tyne' },
  { src: '/images/our-team/dr-tiru-matla-clinical-director-kensley-aesthetics-newcastle.jpg', alt: 'Dr Tiru Matla, Clinical Director at Kensley Aesthetics, Jesmond, Newcastle' },
  { src: '/images/our-team/medical-aesthetics-team-member-kensley-clinic-newcastle.jpg', alt: 'Medical aesthetics team member at Kensley clinic, Newcastle' },
  { src: '/images/our-team/aesthetic-practitioner-kensley-aesthetics-jesmond-newcastle.jpg', alt: 'Aesthetic practitioner at Kensley Aesthetics clinic in Jesmond, Newcastle' },
  { src: '/images/our-team/aesthetics-practitioner-kensley-aesthetics-newcastle.jpg', alt: 'Aesthetics practitioner at Kensley Aesthetics, Newcastle' },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRACTITIONER_ROLES = [
  { title: 'Clinical Director', name: 'Dr Tiru Matla', creds: 'MBBS · MRCGP · DFSRH' },
  { title: 'Aesthetics Practitioner', name: 'Aesthetics Practitioner', creds: 'Aesthetics Practitioner' },
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
            Kensley Aesthetics is led by Dr Tiru Matla and supported by a dedicated
            team of medically qualified practitioners. Every member of our team
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
