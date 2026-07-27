import { useState } from 'react';
import {
  Compass,
  MessageCircle,
  Map,
  Calendar,
  Users,
  Search,
} from 'lucide-react';
import { tours } from '../data';

export default function Hero({ onOpenAuth }) {
  const [guests, setGuests] = useState(12);

  const quickBook = () => {
    if (guests < 10) {
      alert(
        'Group departures need a minimum of 10 guests — or ask us about a private pre-booking!',
      );
      return;
    }
    onOpenAuth('signup');
  };

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <h1>
          One coastline.
          <br />
          <span>One blue day.</span>
        </h1>
        <p>
          Small-boat safaris, rooftop tastings and old-town walks — booked in
          minutes.
        </p>
        <div className="hero-cta">
          <a className="btn btn-gold" href="#tours">
            <Compass className="lucide" />
            Explore safaris
          </a>
          <a className="btn btn-ghost" href="#bot">
            <MessageCircle className="lucide" />
            WhatsApp concierge
          </a>
        </div>
      </div>
      <div className="bookbar" role="search" aria-label="Quick booking">
        <div className="cell">
          <label>
            <Map className="lucide" />
            Safari
          </label>
          <select id="qTour" defaultValue={tours[0].bookOption}>
            {tours.map((tour) => (
              <option key={tour.id} value={tour.bookOption}>
                {tour.bookOption}
              </option>
            ))}
          </select>
        </div>
        <div className="cell">
          <label>
            <Calendar className="lucide" />
            Date
          </label>
          <input type="date" id="qDate" defaultValue="2026-08-08" />
        </div>
        <div className="cell">
          <label>
            <Users className="lucide" />
            Guests · min 10
          </label>
          <input
            type="number"
            id="qGuests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
          />
        </div>
        <div className="go">
          <button type="button" className="btn btn-teal" onClick={quickBook}>
            <Search className="lucide" />
            Check availability
          </button>
        </div>
      </div>
    </section>
  );
}
