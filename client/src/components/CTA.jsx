import { Users, ArrowRight } from 'lucide-react';

export default function CTA({ onOpenAuth }) {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta-band">
          <span className="eyebrow" style={{ color: 'var(--gold)' }}>
            <Users className="lucide" style={{ width: 14, height: 14 }} />
            Groups of 10+ · Private charters
          </span>
          <h2 style={{ marginTop: '.8rem' }}>
            Your blue day is one booking away.
          </h2>
          <button
            type="button"
            className="btn btn-gold"
            onClick={() => onOpenAuth('signup')}
          >
            Start your booking
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
