import { useEffect, useRef, useState } from 'react'
import {
  Bell,
  Camera,
  CreditCard,
  Gift,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Menu,
  Sailboat,
  Search,
  Settings as SettingsIcon,
  Ticket,
} from 'lucide-react'
import Overview from './Overview'
import Bookings from './Bookings'
import Photos from './Photos'
import Payments from './Payments'
import Rewards from './Rewards'
import Support from './Support'
import Settings from './Settings'

const VIEW_TITLES = {
  home: ['¡Hola, María!', 'Your next blue day is in 12 days · Ticket VA-2841'],
  bookings: ['My bookings', '6 bookings · 1 upcoming'],
  photos: ['Photos & gallery', "Upload to your group's live gallery"],
  payments: ['Payments', 'Cards, wallets & invoices'],
  rewards: ['Rewards', 'Gold member · 620 points'],
  support: ['Support', 'Azul answers in ~1.8 seconds'],
  settings: ['Settings', 'Profile, language & notifications'],
}

const MENU_ITEMS = [
  { id: 'home', label: 'Overview', icon: LayoutDashboard },
  { id: 'bookings', label: 'My bookings', icon: Ticket },
  { id: 'photos', label: 'Photos & gallery', icon: Camera, badge: 'Live' },
  { id: 'payments', label: 'Payments', icon: CreditCard },
  { id: 'rewards', label: 'Rewards', icon: Gift },
]

const HELP_ITEMS = [
  { id: 'support', label: 'Support', icon: LifeBuoy },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
]

export default function Dashboard({ open, onLogout }) {
  const [activeView, setActiveView] = useState('home')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function navigate(view) {
    setActiveView(view)
    setSidebarOpen(false)
    mainRef.current?.scrollTo({ top: 0 })
  }

  function toggleSidebar(force) {
    setSidebarOpen((prev) => (force === undefined ? !prev : force))
  }

  const [title, subtitle] = VIEW_TITLES[activeView] ?? VIEW_TITLES.home

  return (
    <div id="dash" className={open ? 'on' : ''}>
      <div
        className={`d-overlay${sidebarOpen ? ' on' : ''}`}
        id="dOvl"
        onClick={() => toggleSidebar(false)}
      />
      <aside className={`d-side${sidebarOpen ? ' open' : ''}`} id="dSideEl">
        <a
          href="#"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            onLogout()
          }}
        >
          <span className="logo-mark">
            <Sailboat className="lucide" />
          </span>
          <span>
            <b>Vista Azul</b>
            <small>My trips</small>
          </span>
        </a>
        <div className="d-label">Menu</div>
        {MENU_ITEMS.map(({ id, label, icon: Icon, badge }) => (
          <button
            key={id}
            type="button"
            className={`d-link${activeView === id ? ' on' : ''}`}
            data-v={id}
            onClick={() => navigate(id)}
          >
            <Icon className="lucide" />
            {label}
            {badge ? <span className="n">{badge}</span> : null}
          </button>
        ))}
        <div className="d-label">Help</div>
        {HELP_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            className={`d-link${activeView === id ? ' on' : ''}`}
            data-v={id}
            onClick={() => navigate(id)}
          >
            <Icon className="lucide" />
            {label}
          </button>
        ))}
        <button type="button" className="d-link" onClick={onLogout}>
          <LogOut className="lucide" />
          Log out
        </button>
        <div className="d-user">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
            alt=""
          />
          <div>
            <b>María González</b>
            <span>Gold member · 620 pts</span>
          </div>
        </div>
      </aside>

      <main className="d-main" ref={mainRef}>
        <div className="d-top">
          <button
            className="icon-btn mob-open"
            type="button"
            onClick={() => toggleSidebar()}
            aria-label="Menu"
          >
            <Menu className="lucide" />
          </button>
          <div>
            <h2 id="dTitle">{title}</h2>
            <p id="dSub">{subtitle}</p>
          </div>
          <div className="d-search">
            <Search className="lucide" />
            <input placeholder="Search bookings, tickets…" />
          </div>
          <button className="icon-btn" type="button" aria-label="Notifications">
            <Bell className="lucide" />
            <span className="badge">3</span>
          </button>
        </div>

        <section className={`d-view${activeView === 'home' ? ' on' : ''}`} id="dv-home">
          {activeView === 'home' && <Overview />}
        </section>
        <section className={`d-view${activeView === 'bookings' ? ' on' : ''}`} id="dv-bookings">
          {activeView === 'bookings' && (
            <Bookings onLogout={onLogout} onNavigateToPhotos={() => navigate('photos')} />
          )}
        </section>
        <section className={`d-view${activeView === 'photos' ? ' on' : ''}`} id="dv-photos">
          {activeView === 'photos' && <Photos />}
        </section>
        <section className={`d-view${activeView === 'payments' ? ' on' : ''}`} id="dv-payments">
          {activeView === 'payments' && <Payments />}
        </section>
        <section className={`d-view${activeView === 'rewards' ? ' on' : ''}`} id="dv-rewards">
          {activeView === 'rewards' && <Rewards />}
        </section>
        <section className={`d-view${activeView === 'support' ? ' on' : ''}`} id="dv-support">
          {activeView === 'support' && <Support />}
        </section>
        <section className={`d-view${activeView === 'settings' ? ' on' : ''}`} id="dv-settings">
          {activeView === 'settings' && <Settings />}
        </section>
      </main>
    </div>
  )
}
