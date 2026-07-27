import { ArrowRight, ChevronDown, HelpCircle, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

const FAQS = [
  {
    q: 'What if our group is smaller than 10?',
    a: 'Group departures need 10+ guests, but you can pre-book a private tour for smaller groups — the concierge will quote you instantly on WhatsApp.',
  },
  {
    q: 'Can I reschedule my booking?',
    a: 'Yes — free rescheduling up to 48 hours before departure. Just message Azul on WhatsApp with your ticket number.',
  },
  {
    q: 'How do photo uploads work?',
    a: "During the tour you'll get a link on WhatsApp. Photos you upload are reviewed by our team (usually under 2 minutes) and then appear in your group's live gallery.",
  },
  {
    q: '¿Puedo reservar en español?',
    a: '¡Claro! Todo el sitio, los pagos y el concierge de WhatsApp funcionan completamente en español.',
  },
  {
    q: 'Is my payment secure?',
    a: 'All payments run through Stripe or PayPal over SSL. We never store your card details on our servers.',
  },
]

export default function Support() {
  return (
    <div className="grid g-21">
      <div className="panel">
        <div className="panel-head">
          <h3>
            <HelpCircle className="lucide" />
            Frequently asked
          </h3>
        </div>
        {FAQS.map(({ q, a }) => (
          <details className="faq" key={q}>
            <summary>
              {q} <ChevronDown className="lucide" />
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
      <div style={{ display: 'grid', gap: '1.1rem', alignContent: 'start' }}>
        <div className="wa-cta">
          <span className="ico">
            <MessageCircle className="lucide" />
          </span>
          <div style={{ flex: 1, minWidth: 180 }}>
            <h3>Azul is online</h3>
            <p>Avg. reply in 1.8 seconds — English or Español.</p>
          </div>
          <button
            className="btn btn-gold"
            type="button"
            onClick={() => alert('Demo: opens WhatsApp chat with the concierge.')}
          >
            Chat now
            <ArrowRight className="lucide" />
          </button>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <Phone className="lucide" />
              Other channels
            </h3>
          </div>
          <div style={{ display: 'grid', gap: '.8rem', fontSize: '.88rem' }}>
            <div style={{ display: 'flex', gap: '.7rem', alignItems: 'center' }}>
              <Mail className="lucide" style={{ color: 'var(--teal)' }} />
              hola@vistaazul.co
            </div>
            <div style={{ display: 'flex', gap: '.7rem', alignItems: 'center' }}>
              <Phone className="lucide" style={{ color: 'var(--teal)' }} />
              +1 (555) 012-8841
            </div>
            <div style={{ display: 'flex', gap: '.7rem', alignItems: 'center' }}>
              <MapPin className="lucide" style={{ color: 'var(--teal)' }} />
              Marina Dock 3, Bahía Azul
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
