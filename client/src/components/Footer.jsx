import { Sailboat, MapPin, MessageCircle, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <a href="#top" className="logo">
              <span className="logo-mark">
                <Sailboat />
              </span>
              <span>
                <b style={{ color: '#fff' }}>Vista Azul</b>
                <small>Safaris</small>
              </span>
            </a>
            <p
              style={{
                fontSize: '.86rem',
                marginTop: '1rem',
                maxWidth: '30ch',
              }}
            >
              Coastal safaris, tastings and city walks — bilingual, small-group,
              beautifully organized.
            </p>
            <svg className="qr" viewBox="0 0 21 21" aria-label="QR code">
              <rect width="21" height="21" fill="#fff" />
              <g fill="#0B2532">
                <rect x="0" y="0" width="7" height="7" />
                <rect x="14" y="0" width="7" height="7" />
                <rect x="0" y="14" width="7" height="7" />
                <rect x="1" y="1" width="5" height="5" fill="#fff" />
                <rect x="15" y="1" width="5" height="5" fill="#fff" />
                <rect x="1" y="15" width="5" height="5" fill="#fff" />
                <rect x="2" y="2" width="3" height="3" />
                <rect x="16" y="2" width="3" height="3" />
                <rect x="2" y="16" width="3" height="3" />
                <rect x="9" y="0" width="1" height="1" />
                <rect x="11" y="1" width="1" height="1" />
                <rect x="9" y="3" width="2" height="1" />
                <rect x="12" y="3" width="1" height="2" />
                <rect x="9" y="6" width="1" height="2" />
                <rect x="0" y="9" width="2" height="1" />
                <rect x="3" y="9" width="1" height="1" />
                <rect x="5" y="10" width="2" height="1" />
                <rect x="8" y="9" width="2" height="2" />
                <rect x="12" y="9" width="1" height="1" />
                <rect x="14" y="10" width="2" height="1" />
                <rect x="18" y="9" width="2" height="1" />
                <rect x="2" y="12" width="1" height="1" />
                <rect x="6" y="12" width="1" height="1" />
                <rect x="10" y="12" width="2" height="2" />
                <rect x="16" y="12" width="1" height="1" />
                <rect x="19" y="12" width="1" height="2" />
                <rect x="9" y="15" width="1" height="1" />
                <rect x="12" y="14" width="1" height="2" />
                <rect x="14" y="16" width="2" height="1" />
                <rect x="17" y="15" width="1" height="1" />
                <rect x="9" y="18" width="2" height="1" />
                <rect x="12" y="18" width="1" height="2" />
                <rect x="15" y="18" width="2" height="1" />
                <rect x="18" y="18" width="2" height="2" />
              </g>
            </svg>
          </div>
          <div>
            <h4>Safaris</h4>
            <ul>
              <li>
                <a href="#tours">Beach Safari</a>
              </li>
              <li>
                <a href="#tours">Taste &amp; View Safari</a>
              </li>
              <li>
                <a href="#tours">City View Safari</a>
              </li>
              <li>
                <a href="#tours">Private charters</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#gallery">Live gallery</a>
              </li>
              <li>
                <a href="#how">How it works</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <MapPin />
                Marina Dock 3, Bahía Azul
              </li>
              <li>
                <MessageCircle />
                WhatsApp +1 (555) 012-8841
              </li>
              <li>
                <Mail />
                hola@vistaazul.co
              </li>
              <li>
                <Clock />
                Concierge online 24/7
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Vista Azul Safaris. All rights reserved.</span>
          <span>Stripe &amp; PayPal · SSL · GDPR-ready</span>
        </div>
      </div>
    </footer>
  );
}
