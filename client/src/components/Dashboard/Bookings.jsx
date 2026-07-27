import { useMemo } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  ArrowRight,
  BarChart3,
  Check,
  Download,
  Image,
  PlusCircle,
  Ticket,
} from 'lucide-react'
import { TEAL, GOLD, CORAL, DEEP, GRID, chartTip, registerCharts } from './charts'

registerCharts()

export default function Bookings({ onLogout, onNavigateToPhotos }) {
  const groupData = useMemo(
    () => ({
      labels: ['Oct', 'Dec', 'Apr', 'Jun', 'Aug'],
      datasets: [
        {
          label: 'Guests',
          data: [16, 14, 11, 10, 12],
          backgroundColor: [DEEP, TEAL, GOLD, CORAL, TEAL],
          borderRadius: 9,
          borderSkipped: false,
          barPercentage: 0.65,
          categoryPercentage: 0.7,
        },
      ],
    }),
    [],
  )

  const groupOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...chartTip } },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: GRID },
          border: { display: false },
          ticks: { stepSize: 4 },
        },
        x: { grid: { display: false }, border: { display: false } },
      },
    }),
    [],
  )

  return (
    <div className="grid g-21">
      <div className="panel">
        <div className="panel-head">
          <h3>
            <Ticket className="lucide" />
            Booking history
          </h3>
          <small>6 bookings · since 2025</small>
        </div>
        <div className="scroll-x">
          <table>
            <thead>
              <tr>
                <th>Ticket</th>
                <th>Safari</th>
                <th>Date</th>
                <th>Guests</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mono">VA-2841</td>
                <td>
                  <div className="t-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=200&q=80"
                      alt=""
                    />
                    <div>
                      <b>Beach Safari</b>
                      <span>Group</span>
                    </div>
                  </div>
                </td>
                <td>Aug 8, 2026</td>
                <td className="mono">12</td>
                <td className="mono">$1,068</td>
                <td>
                  <span className="tag ok">
                    <Check className="lucide" />
                    Confirmed
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-line"
                    style={{ padding: '.4rem .9rem', fontSize: '.76rem' }}
                    type="button"
                    onClick={() => alert('Demo: opens the e-ticket PDF.')}
                  >
                    <Download className="lucide" />
                    Ticket
                  </button>
                </td>
              </tr>
              <tr>
                <td className="mono">VA-2790</td>
                <td>
                  <div className="t-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80"
                      alt=""
                    />
                    <div>
                      <b>Taste & View</b>
                      <span>Group</span>
                    </div>
                  </div>
                </td>
                <td>Jun 14, 2026</td>
                <td className="mono">10</td>
                <td className="mono">$740</td>
                <td>
                  <span className="tag done">Completed</span>
                </td>
                <td>
                  <button
                    className="btn btn-line"
                    style={{ padding: '.4rem .9rem', fontSize: '.76rem' }}
                    type="button"
                    onClick={onNavigateToPhotos}
                  >
                    <Image className="lucide" />
                    Album
                  </button>
                </td>
              </tr>
              <tr>
                <td className="mono">VA-2712</td>
                <td>
                  <div className="t-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=200&q=80"
                      alt=""
                    />
                    <div>
                      <b>City View</b>
                      <span>Group</span>
                    </div>
                  </div>
                </td>
                <td>Apr 3, 2026</td>
                <td className="mono">11</td>
                <td className="mono">$649</td>
                <td>
                  <span className="tag done">Completed</span>
                </td>
                <td>
                  <button
                    className="btn btn-line"
                    style={{ padding: '.4rem .9rem', fontSize: '.76rem' }}
                    type="button"
                    onClick={onNavigateToPhotos}
                  >
                    <Image className="lucide" />
                    Album
                  </button>
                </td>
              </tr>
              <tr>
                <td className="mono">VA-2650</td>
                <td>
                  <div className="t-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=200&q=80"
                      alt=""
                    />
                    <div>
                      <b>Beach Safari</b>
                      <span>Group</span>
                    </div>
                  </div>
                </td>
                <td>Dec 27, 2025</td>
                <td className="mono">14</td>
                <td className="mono">$1,246</td>
                <td>
                  <span className="tag done">Completed</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td className="mono">VA-2604</td>
                <td>
                  <div className="t-thumb">
                    <img
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=200&q=80"
                      alt=""
                    />
                    <div>
                      <b>City View</b>
                      <span>Private</span>
                    </div>
                  </div>
                </td>
                <td>Oct 9, 2025</td>
                <td className="mono">16</td>
                <td className="mono">$944</td>
                <td>
                  <span className="tag done">Completed</span>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <BarChart3 className="lucide" />
              Group size per trip
            </h3>
            <small>Guests</small>
          </div>
          <div className="chart-box" style={{ height: 185 }}>
            <Bar data={groupData} options={groupOptions} />
          </div>
          <div className="mini-bars">
            <div className="mb">
              <div className="mb-top">
                <span>Largest group</span>
                <b>16 guests</b>
              </div>
              <div className="track">
                <div className="fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="mb">
              <div className="mb-top">
                <span>Average size</span>
                <b>12.6 guests</b>
              </div>
              <div className="track">
                <div className="fill" style={{ width: '79%' }}></div>
              </div>
            </div>
            <div className="mb">
              <div className="mb-top">
                <span>Next trip</span>
                <b>12 guests</b>
              </div>
              <div className="track">
                <div className="fill" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="panel"
          style={{
            background: 'linear-gradient(135deg,var(--deep),#0d5666)',
            color: '#fff',
            border: 'none',
          }}
        >
          <h3
            style={{
              fontSize: '1.05rem',
              fontWeight: 800,
              display: 'flex',
              gap: '.5rem',
              alignItems: 'center',
            }}
          >
            <PlusCircle className="lucide" style={{ color: 'var(--gold)' }} />
            Plan the next one
          </h3>
          <p style={{ fontSize: '.85rem', opacity: 0.88, margin: '.5rem 0 1.1rem' }}>
            Groups of 10+ get instant confirmation. Private charters available on request.
          </p>
          <button className="btn btn-gold" type="button" onClick={onLogout}>
            Browse safaris
            <ArrowRight className="lucide" />
          </button>
        </div>
      </div>
    </div>
  )
}
