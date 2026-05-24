import './Testimonials.css';

const reviews = [
  { text: 'The team exceeded every expectation. The attention to detail was remarkable — I felt truly heard throughout the entire process.', name: 'Client Name', role: 'Location · Year' },
  { text: 'Professional, warm, and extraordinarily talented. The result was beyond what I imagined possible. Highly recommend.',            name: 'Client Name', role: 'Location · Year' },
  { text: 'From the first consultation to the final walkthrough, the experience was seamless and the outcome absolutely stunning.',         name: 'Client Name', role: 'Location · Year' },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__head">
          <p className="section-label">Client Stories</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{r.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" />
                <div>
                  <div className="testimonial-card__name">{r.name}</div>
                  <div className="testimonial-card__role">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
