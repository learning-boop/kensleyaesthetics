import Image from 'next/image';
import './ClinicShowcase.css';

const CLINIC_IMAGES = [
  {
    src: '/images/clinic/kensley-aesthetics-waiting-room-branded-wall-jesmond.jpeg',
    alt: 'Kensley Aesthetics waiting room with branded wall and comfortable seating',
    label: 'Waiting Area',
  },
  {
    src: '/images/clinic/kensley-aesthetics-building-exterior-entrance-jesmond.jpeg',
    alt: 'Kensley Aesthetics clinic exterior and entrance in Jesmond, Newcastle',
    label: 'Our Clinic',
  },
  {
    src: '/images/clinic/kensley-aesthetics-treatment-room-hydrafacial-newcastle.jpeg',
    alt: 'Modern treatment room with HydraFacial equipment at Kensley Aesthetics Newcastle',
    label: 'Treatment Room',
  },
  {
    src: '/images/clinic/kensley-aesthetics-clinic-entrance-jesmond-newcastle.jpeg',
    alt: 'Kensley Aesthetics branded entrance with logo at Jesmond clinic, Newcastle',
    label: 'Welcome',
  },
  {
    src: '/images/clinic/kensley-aesthetics-consultation-room-medical-supplies-newcastle.jpeg',
    alt: 'Clinical consultation room with medical supplies at Kensley Aesthetics',
    label: 'Clinical Suite',
  },
  {
    src: '/images/clinic/kensley-aesthetics-consultation-office-jesmond-newcastle.jpeg',
    alt: 'Private consultation office at Kensley Aesthetics clinic in Jesmond',
    label: 'Consultation Room',
  },
];

export default function ClinicShowcase() {
  return (
    <section className="cs-section">
      <div className="cs-inner">
        <div className="cs-header">
          <h2 className="cs-title">Our Clinic</h2>
          <p className="cs-subtitle">
            A modern, purpose-equipped aesthetic clinic designed for your
            comfort, privacy and care.
          </p>
        </div>

        <div className="cs-grid">
          {CLINIC_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`cs-card ${i === 0 ? 'cs-card--featured' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="cs-card__img"
                width={800}
                height={600}
                loading="lazy"
                sizes={i === 0
                  ? '(max-width: 768px) 100vw, 60vw'
                  : '(max-width: 768px) 100vw, 30vw'}
              />
              <span className="cs-card__label">{img.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
