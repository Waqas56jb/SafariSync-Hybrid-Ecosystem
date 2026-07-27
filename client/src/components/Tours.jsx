import {
  Palmtree,
  Flame,
  Utensils,
  Landmark,
  Clock,
  Users,
  Languages,
  ArrowRight,
} from 'lucide-react';
import { tours } from '../data';

const badgeIcons = {
  Flame,
  Utensils,
  Landmark,
};

export default function Tours({ onOpenAuth }) {
  return (
    <section id="tours">
      <div className="container">
        <div className="sec-head">
          <span className="eyebrow">
            <Palmtree className="lucide" style={{ width: 14, height: 14 }} />
            Choose your day
          </span>
          <h2>Three safaris. One coastline.</h2>
          <p>
            Every departure runs with a group of 10+ guests — or reserve the
            whole boat, table or rooftop as a private group.
          </p>
        </div>
        <div className="tour-grid">
          {tours.map((tour) => {
            const BadgeIcon = badgeIcons[tour.badge.icon];
            return (
              <article key={tour.id} className="tour">
                <div className="tour-img">
                  <span
                    className={`tour-badge${tour.badge.hot ? ' hot' : ''}`}
                  >
                    <BadgeIcon />
                    {tour.badge.label}
                  </span>
                  <img src={tour.image} alt={tour.imageAlt} loading="lazy" />
                </div>
                <div className="tour-body">
                  <h3>{tour.name}</h3>
                  <p>{tour.description}</p>
                  <div className="tour-meta">
                    <span>
                      <Clock />
                      {tour.duration}
                    </span>
                    <span>
                      <Users />
                      {tour.guests}
                    </span>
                    <span>
                      <Languages />
                      EN/ES
                    </span>
                  </div>
                  <div className="tour-foot">
                    <div className="price">
                      <b>${tour.price}</b>
                      <small>per guest</small>
                    </div>
                    <button
                      type="button"
                      className="btn btn-teal"
                      onClick={() => onOpenAuth('signup')}
                    >
                      Book
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
