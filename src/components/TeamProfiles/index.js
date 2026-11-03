import { useState } from 'react';
import Image from 'next/image';
import { TEAM } from '../../data/team';
import './TeamProfiles.css';

const PREVIEW_PARAGRAPHS = 2;

function initials(name) {
  return name
    .replace(/^Dr\s+/i, '')
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Profile({ person }) {
  const [open, setOpen] = useState(false);
  const extra = person.bio.length > PREVIEW_PARAGRAPHS;
  const bioId = `${person.slug}-bio`;

  return (
    <article className="tp-profile" id={person.slug} aria-labelledby={`${person.slug}-name`}>
      <div className="tp-photo">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={`${person.name}, ${person.role} at Kensley Aesthetics`}
            className="tp-photo__img"
            width={800}
            height={1000}
            loading="lazy"
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        ) : (
          <div className="tp-photo__empty" aria-hidden="true">
            <span>{initials(person.name)}</span>
          </div>
        )}
      </div>

      <div className="tp-details">
        <h3 className="tp-name" id={`${person.slug}-name`}>{person.name}</h3>
        <p className="tp-role">{person.role}</p>

        <dl className="tp-facts">
          {person.registration && (
            <div className="tp-fact">
              <dt>{person.registration.body} registration</dt>
              <dd>{person.registration.number}</dd>
            </div>
          )}
          {person.facts.map((f) => (
            <div className="tp-fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="tp-bio" id={bioId}>
          {person.bio.map((para, i) => (
            <p key={i} className={!open && i >= PREVIEW_PARAGRAPHS ? 'tp-bio__more' : undefined}>
              {para}
            </p>
          ))}
        </div>

        {extra && (
          <button
            type="button"
            className="tp-toggle"
            aria-expanded={open}
            aria-controls={bioId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Show less' : `Read more about ${person.name.replace(/^Dr\s+/i, '').split(' ')[0]}`}
          </button>
        )}
      </div>
    </article>
  );
}

export default function TeamProfiles() {
  return (
    <section className="tp-section" aria-labelledby="tp-title">
      <div className="tp-inner">
        <header className="tp-head">
          <h2 className="tp-title" id="tp-title">Meet the team</h2>
          <p className="tp-intro">
            Our practitioners are qualified healthcare professionals with further training in
            aesthetic medicine. Whoever you see, your treatment starts with an unhurried
            consultation.
          </p>
        </header>

        <div className="tp-list">
          {TEAM.map((person) => (
            <Profile key={person.slug} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}
