import { Chart } from 'react-chartjs-2'
import { Doughnut, Bar } from 'react-chartjs-2'
import { bookings, TEAL, GOLD, CORAL, GRID } from '../data'
import { registerCharts, tealFill, tip } from '../charts'
import BookingRow from './BookingRow'

registerCharts()

export default function Overview({ onGoBookings }) {
  const revData = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'line',
        label: 'Revenue',
        data: [30150, 24800, 27400, 33900, 36200, 38750, 41300, 48920],
        yAxisID: 'y',
        fill: true,
        backgroundColor: tealFill,
        borderColor: TEAL,
        borderWidth: 2.6,
        tension: 0.42,
        pointRadius: 3.5,
        pointBackgroundColor: '#0F2830',
        pointBorderColor: TEAL,
        pointBorderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Bookings',
        data: [132, 108, 121, 149, 158, 171, 190, 214],
        yAxisID: 'y1',
        backgroundColor: 'rgba(240,172,72,.55)',
        borderRadius: 6,
        barThickness: 14,
      },
    ],
  }

  const revOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: { legend: { display: false }, tooltip: tip },
    scales: {
      y: {
        position: 'left',
        grid: { color: GRID },
        ticks: { callback: (v) => `$${v / 1000}k` },
      },
      y1: { position: 'right', grid: { display: false } },
      x: { grid: { display: false } },
    },
  }

  const mixData = {
    labels: ['Beach Safari', 'Taste & View', 'City View'],
    datasets: [
      {
        data: [96, 64, 54],
        backgroundColor: [TEAL, GOLD, CORAL],
        borderColor: '#0F2830',
        borderWidth: 4,
        hoverOffset: 9,
      },
    ],
  }

  const mixOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: { usePointStyle: true, padding: 13, font: { size: 10.5 } },
      },
    },
  }

  const botData = {
    labels: ['6a', '8a', '10a', '12p', '2p', '4p', '6p', '8p'],
    datasets: [
      {
        data: [14, 42, 88, 131, 96, 84, 118, 73],
        backgroundColor: (ctx) => (ctx.dataIndex === 3 ? GOLD : 'rgba(45,216,199,.5)'),
        borderRadius: 5,
        barThickness: 16,
      },
    ],
  }

  const botOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: GRID } },
      x: { grid: { display: false } },
    },
  }

  return (
    <section className="view on" id="v-overview">
      <div className="kpis">
        <div className="kpi" style={{ '--glow': 'rgba(45,216,199,.16)' }}>
          <span className="ico">💰</span>
          <span className="lbl">Revenue · Jul</span>
          <b>$48,920</b>
          <span className="delta up">▲ 18.4% vs Jun</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(240,172,72,.16)' }}>
          <span className="ico">🎟</span>
          <span className="lbl">Bookings · Jul</span>
          <b>214</b>
          <span className="delta up">▲ 12.1%</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(255,122,92,.15)' }}>
          <span className="ico">👥</span>
          <span className="lbl">Guests hosted</span>
          <b>2,562</b>
          <span className="delta up">▲ 9.7%</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(63,214,143,.15)' }}>
          <span className="ico">💬</span>
          <span className="lbl">Bot conversations</span>
          <b>1,873</b>
          <span className="delta up">▲ 26.3%</span>
        </div>
      </div>

      <div className="grid g-main">
        <div className="panel">
          <div className="panel-head">
            <h3>
              Revenue & bookings <small>Last 8 months</small>
            </h3>
            <div className="legend">
              <span>
                <i style={{ background: 'var(--teal)' }} />
                REVENUE
              </span>
              <span>
                <i style={{ background: 'var(--gold)' }} />
                BOOKINGS
              </span>
            </div>
          </div>
          <div className="chart-box">
            <Chart type="bar" data={revData} options={revOptions} />
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>
              Bookings by safari <small>July 2026</small>
            </h3>
          </div>
          <div className="chart-box" style={{ height: 200 }}>
            <Doughnut data={mixData} options={mixOptions} />
          </div>
          <div style={{ marginTop: '1.1rem', display: 'grid', gap: '.55rem', fontSize: '.8rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--dim)' }}>🌐 Bookings in Spanish</span>
              <b className="mono">41%</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--dim)' }}>🔒 Private group share</span>
              <b className="mono">18%</b>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--dim)' }}>📱 Booked via WhatsApp</span>
              <b className="mono">33%</b>
            </div>
          </div>
        </div>
      </div>

      <div className="grid g-main" style={{ marginTop: '1.1rem' }}>
        <div className="panel">
          <div className="panel-head">
            <h3>Latest bookings</h3>
            <button className="btn btn-ghost btn-sm" type="button" onClick={onGoBookings}>
              View all →
            </button>
          </div>
          <div className="scroll-x">
            <table className="tbl">
              <thead>
                <tr>
                  <th>Ticket</th>
                  <th>Guest</th>
                  <th>Safari</th>
                  <th>Guests</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.slice(0, 5).map((b) => (
                  <BookingRow key={b[0]} b={b} short />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>
              Bot activity today <small>Messages per hour</small>
            </h3>
          </div>
          <div className="chart-box" style={{ height: 180 }}>
            <Bar data={botData} options={botOptions} />
          </div>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
            <span className="tag ok">98.2% auto-resolved</span>
            <span className="tag pend">4 escalations</span>
            <span className="tag priv">EN 59% · ES 41%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
