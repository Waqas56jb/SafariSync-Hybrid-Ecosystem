import { galleryShots } from '../data';

export default function Gallery() {
  const shots = [...galleryShots, ...galleryShots];

  return (
    <section id="gallery">
      <div className="container">
        <div className="sec-head">
          <span className="live-pill">
            <span className="dot" />
            Live from today&apos;s tours
          </span>
          <h2 style={{ marginTop: '1.1rem', color: '#fff' }}>
            Guests are uploading right now.
          </h2>
          <p>
            Every safari has its own photo stream. Snap, upload from your phone,
            and watch the group gallery grow in real time — moderated before it
            goes public.
          </p>
        </div>
      </div>
      <div className="marquee" id="marquee">
        {shots.map(([id, who, cap], index) => (
          <figure key={`${id}-${index}`}>
            <img
              loading="lazy"
              src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`}
              alt={`Guest photo by ${who}`}
            />
            <figcaption>
              <b>{who}</b>
              {cap}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
