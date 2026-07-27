import { useState } from 'react'
import BrandMark from './BrandMark'
import Overview from './Overview'
import Bookings from './Bookings'
import Tours from './Tours'
import Gallery from './Gallery'
import Customers from './Customers'
import Bot from './Bot'
import Settings from './Settings'
import { VIEW_TITLES } from '../data'

const MENU = [
  { id: 'overview', label: 'Overview', icon: '◧' },
  { id: 'bookings', label: 'Bookings', icon: '🎟', badgeKey: 'bookings' },
  { id: 'tours', label: 'Tours', icon: '🧭' },
  { id: 'gallery', label: 'Gallery queue', icon: '🖼', badgeKey: 'gallery' },
]

const PEOPLE = [
  { id: 'customers', label: 'Customers', icon: '👥' },
  { id: 'bot', label: 'WhatsApp bot', icon: '💬' },
]

const SYSTEM = [{ id: 'settings', label: 'Settings', icon: '⚙' }]

export default function Shell({ onLogout }) {
  const [view, setView] = useState('overview')
  const [sideOpen, setSideOpen] = useState(false)
  const [galleryPending, setGalleryPending] = useState(6)

  const [title, subtitle] = VIEW_TITLES[view] || VIEW_TITLES.overview

  function go(id) {
    setView(id)
    setSideOpen(false)
    window.scrollTo({ top: 0 })
  }

  function toggleSide(force) {
    setSideOpen((prev) => (force === undefined ? !prev : force))
  }

  function renderLink(item) {
    let badge = null
    if (item.badgeKey === 'bookings') badge = 3
    if (item.badgeKey === 'gallery' && galleryPending > 0) badge = galleryPending

    return (
      <button
        key={item.id}
        type="button"
        className={`side-link${view === item.id ? ' on' : ''}`}
        data-v={item.id}
        onClick={() => go(item.id)}
      >
        {item.icon}&nbsp; {item.label}
        {badge != null ? <span className="n">{badge}</span> : null}
      </button>
    )
  }

  return (
    <div id="app" className="on">
      <div
        className={`overlay${sideOpen ? ' on' : ''}`}
        id="ovl"
        onClick={() => toggleSide(false)}
      />
      <aside id="side" className={sideOpen ? 'open' : ''}>
        <div className="brand">
          <BrandMark size={36} />
          <span>
            <b>Vista Azul</b>
            <small>Control Deck</small>
          </span>
        </div>
        <div className="side-label">Operations</div>
        {MENU.map(renderLink)}
        <div className="side-label">People & bot</div>
        {PEOPLE.map(renderLink)}
        <div className="side-label">System</div>
        {SYSTEM.map(renderLink)}
        <button type="button" className="side-link" onClick={onLogout}>
          ⎋&nbsp; Log out
        </button>
        <div className="side-user">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
            alt=""
          />
          <div>
            <b>Nijoe Farrell</b>
            <span>Owner · Super admin</span>
          </div>
        </div>
      </aside>

      <main>
        <div className="topbar">
          <button
            className="mob-toggle"
            type="button"
            onClick={() => toggleSide()}
            aria-label="Menu"
          >
            ☰
          </button>
          <div>
            <h2 id="viewTitle">{title}</h2>
            <p id="viewSub">{subtitle}</p>
          </div>
          <div className="search">
            🔍
            <input placeholder="Search bookings, guests, tickets…" />
          </div>
          <button className="bell" type="button" aria-label="Notifications">
            🔔
          </button>
        </div>

        {view === 'overview' && <Overview onGoBookings={() => go('bookings')} />}
        {view === 'bookings' && <Bookings />}
        {view === 'tours' && <Tours />}
        {view === 'gallery' && <Gallery onPendingChange={setGalleryPending} />}
        {view === 'customers' && <Customers />}
        {view === 'bot' && <Bot />}
        {view === 'settings' && <Settings />}
      </main>
    </div>
  )
}
