import { useState } from 'react'

function Toggle({ label, initial = true }) {
  const [on, setOn] = useState(initial)
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: 'var(--dim)' }}>{label}</span>
      <button
        className={`switch${on ? ' on' : ''}`}
        role="switch"
        aria-checked={on}
        aria-label={label}
        type="button"
        onClick={() => setOn((v) => !v)}
      />
    </div>
  )
}

export default function Settings() {
  return (
    <section className="view on" id="v-settings">
      <div className="set-grid">
        <div className="panel">
          <div className="panel-head">
            <h3>Business profile</h3>
          </div>
          <div className="field">
            <label>Business name</label>
            <input defaultValue="Vista Azul Safaris" />
          </div>
          <div className="field">
            <label>Default language</label>
            <select defaultValue="English">
              <option>English</option>
              <option>Español</option>
            </select>
          </div>
          <div className="field">
            <label>WhatsApp business number</label>
            <input defaultValue="+1 (555) 012-8841" />
          </div>
          <div className="field">
            <label>Minimum group size</label>
            <input type="number" defaultValue={10} />
          </div>
          <button
            className="btn btn-teal"
            style={{ width: 'auto' }}
            type="button"
            onClick={() => alert('Demo: settings saved.')}
          >
            Save changes
          </button>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>Payments & security</h3>
          </div>
          <div className="field">
            <label>Stripe status</label>
            <input value="Connected · acct_demo_8841" readOnly style={{ color: 'var(--green)' }} />
          </div>
          <div className="field">
            <label>PayPal status</label>
            <input value="Connected · vistaazul-biz" readOnly style={{ color: 'var(--green)' }} />
          </div>
          <div style={{ display: 'grid', gap: '.7rem', margin: '.4rem 0 1.1rem', fontSize: '.85rem' }}>
            <Toggle label="Two-factor authentication" />
            <Toggle label="GDPR data-retention mode" />
            <Toggle label="Audit logging" />
          </div>
          <div className="field">
            <label>Recent audit events</label>
            <textarea
              rows={5}
              readOnly
              defaultValue={`[12:41] admin@vistaazul.co · approved photo #8827
[12:33] admin@vistaazul.co · refunded VA-2833 ($740)
[11:58] system · Stripe payout $12,480 settled
[11:12] admin@vistaazul.co · edited Beach Safari price
[10:02] bot · escalated chat +34 6** *** 221`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
