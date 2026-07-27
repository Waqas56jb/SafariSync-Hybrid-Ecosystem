import {
  Bot,
  CheckCheck,
  AlarmClock,
  ImagePlus,
  Languages,
} from 'lucide-react';
import { botFeatures, chatBubbles } from '../data';

const featureIcons = {
  CheckCheck,
  AlarmClock,
  ImagePlus,
  Languages,
};

export default function Concierge() {
  return (
    <section id="bot">
      <div className="container bot-wrap">
        <div>
          <span className="eyebrow">
            <Bot className="lucide" style={{ width: 14, height: 14 }} />
            Always on, in two languages
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 3.3vw, 2.7rem)',
              fontWeight: 800,
              margin: '.8rem 0 1rem',
            }}
          >
            Say hola to your WhatsApp concierge.
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '46ch' }}>
            No apps to install. The moment you book, Azul — our AI concierge —
            takes over confirmations, reminders and questions, day and night.
          </p>
          <ul className="bot-feats">
            {botFeatures.map((feat) => {
              const Icon = featureIcons[feat.icon];
              return (
                <li key={feat.title}>
                  <span className="ico">
                    <Icon />
                  </span>
                  <div>
                    <b>{feat.title}</b>
                    <span>{feat.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="phone" aria-label="WhatsApp conversation preview">
          <div className="phone-screen">
            <div className="wa-head">
              <span className="wa-avatar">A</span>
              <div>
                <b>Azul · Vista Azul Safaris</b>
                <span>online</span>
              </div>
            </div>
            <div className="wa-body">
              {chatBubbles.map((bubble, index) => (
                <div
                  key={index}
                  className={`bubble ${bubble.type}`}
                  style={{ animationDelay: bubble.delay }}
                >
                  <span dangerouslySetInnerHTML={{ __html: bubble.html }} />
                  <time>{bubble.time}</time>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
