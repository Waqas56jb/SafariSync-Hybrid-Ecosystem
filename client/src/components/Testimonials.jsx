import { Star } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section>
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">Guest words</span>
          <h2>12,000 guests, one verdict.</h2>
        </div>
        <div className="quote-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="quote">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p>{item.quote}</p>
              <div className="quote-who">
                <img src={item.avatar} alt="" />
                <div>
                  <b>{item.name}</b>
                  <span>{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
