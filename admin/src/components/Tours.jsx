import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { tours, TEAL, GOLD, CORAL, GRID } from '../data'
import { registerCharts } from '../charts'

registerCharts()

export default function Tours() {
  const [live, setLive] = useState(() =>
    Object.fromEntries(tours.map((t) => [t.id, true])),
  )

  const occData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Beach',
        data: [14, 12, 15, 16, 19, 23, 22],
        backgroundColor: TEAL,
        borderRadius: 5,
        barThickness: 11,
      },
      {
        label: 'Taste & View',
        data: [10, 11, 12, 13, 15, 17, 16],
        backgroundColor: GOLD,
        borderRadius: 5,
        barThickness: 11,
      },
      {
        label: 'City View',
        data: [11, 10, 12, 12, 14, 18, 15],
        backgroundColor: CORAL,
        borderRadius: 5,
        barThickness: 11,
      },
    ],
  }

  const occOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { usePointStyle: true, font: { size: 10.5 } },
      },
    },
    scales: {
      y: {
        grid: { color: GRID },
        title: { display: true, text: 'SEATS', font: { size: 9 } },
      },
      x: { grid: { display: false } },
    },
  }

  return (
    <section className="view on" id="v-tours">
      <div className="panel-head" style={{ marginBottom: '1rem' }}>
        <h3 style={{ fontFamily: "'Fraunces',serif" }}>
          Tour catalogue{' '}
          <small style={{ color: 'var(--dim)' }}>Toggle live status, edit pricing & capacity</small>
        </h3>
        <button
          className="btn btn-teal"
          style={{ width: 'auto' }}
          type="button"
          onClick={() => alert('Demo: opens the New Tour form.')}
        >
          + New tour
        </button>
      </div>
      <div className="tour-admin">
        {tours.map((t) => (
          <div className="tcard" key={t.id}>
            <img src={t.image} alt="" />
            <div className="body">
              <h4>{t.name}</h4>
              <span className="tag ok">{live[t.id] ? 'Live' : 'Off'}</span>
              <div className="rowline">
                <span>Price / guest</span>
                <b>${t.price}</b>
              </div>
              <div className="rowline">
                <span>Capacity</span>
                <b>{t.capacity}</b>
              </div>
              <div className="rowline">
                <span>Jul occupancy</span>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width: `${t.occupancy}%` }} />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '.9rem',
                }}
              >
                <button
                  className="btn btn-ghost btn-sm"
                  type="button"
                  onClick={() => alert('Demo: opens editor.')}
                >
                  Edit
                </button>
                <button
                  className={`switch${live[t.id] ? ' on' : ''}`}
                  role="switch"
                  aria-checked={live[t.id]}
                  aria-label={`Toggle ${t.name}`}
                  type="button"
                  onClick={() => setLive((prev) => ({ ...prev, [t.id]: !prev[t.id] }))}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="panel" style={{ marginTop: '1.1rem' }}>
        <div className="panel-head">
          <h3>
            Occupancy by weekday <small>Avg. seats filled per departure</small>
          </h3>
        </div>
        <div className="chart-box" style={{ height: 220 }}>
          <Bar data={occData} options={occOptions} />
        </div>
      </div>
    </section>
  )
}
