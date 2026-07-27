import { useState } from 'react'
import { bookings } from '../data'
import BookingRow from './BookingRow'

const FILTERS = ['all', 'Confirmed', 'Pending', 'Private']

export default function Bookings() {
  const [filter, setFilter] = useState('all')
  const rows = bookings.filter((b) => filter === 'all' || b[8] === filter)

  return (
    <section className="view on" id="v-bookings">
      <div className="panel">
        <div className="panel-head">
          <h3>
            All bookings <small>July 2026 · 214 records</small>
          </h3>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className="btn btn-ghost btn-sm"
                style={filter === f ? { borderColor: 'var(--teal)' } : undefined}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
        </div>
        <div className="scroll-x">
          <table className="tbl">
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Guest</th>
                <th>Safari</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Payment</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((b) => (
                <BookingRow key={b[0]} b={b} short={false} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
