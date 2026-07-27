import { useState } from 'react'
import { Bell, Save, User } from 'lucide-react'

const NOTIFICATIONS = [
  { id: 'whatsapp', label: 'WhatsApp booking updates', defaultOn: true },
  { id: 'reminders', label: 'Tour reminders (24h & 2h)', defaultOn: true },
  { id: 'photos', label: 'Photo prompts during tours', defaultOn: true },
  { id: 'offers', label: 'Offers & rewards news', defaultOn: false },
]

function Switch({ on, onToggle }) {
  return (
    <button
      className={`switch${on ? ' on' : ''}`}
      role="switch"
      aria-checked={on}
      type="button"
      onClick={onToggle}
    />
  )
}

export default function Settings() {
  const [toggles, setToggles] = useState(() =>
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, n.defaultOn])),
  )

  function toggle(id) {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="grid g-21">
      <div className="panel">
        <div className="panel-head">
          <h3>
            <User className="lucide" />
            Profile
          </h3>
        </div>
        <div className="field">
          <label>Full name</label>
          <input defaultValue="María González" />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" defaultValue="maria@example.com" />
        </div>
        <div className="field">
          <label>WhatsApp number</label>
          <input defaultValue="+34 612 884 221" />
        </div>
        <div className="field">
          <label>Preferred language</label>
          <select defaultValue="Español">
            <option>Español</option>
            <option>English</option>
          </select>
        </div>
        <button
          className="btn btn-teal"
          type="button"
          style={{ width: 'auto' }}
          onClick={() => alert('Demo: profile saved.')}
        >
          <Save className="lucide" />
          Save changes
        </button>
      </div>
      <div className="panel" style={{ alignSelf: 'start' }}>
        <div className="panel-head">
          <h3>
            <Bell className="lucide" />
            Notifications
          </h3>
        </div>
        <div style={{ display: 'grid', gap: '1rem', fontSize: '.88rem' }}>
          {NOTIFICATIONS.map(({ id, label }) => (
            <div
              key={id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span>{label}</span>
              <Switch on={toggles[id]} onToggle={() => toggle(id)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
