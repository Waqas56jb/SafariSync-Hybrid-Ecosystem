import { useMemo } from 'react'
import { Line, Doughnut } from 'react-chartjs-2'
import {
  Activity,
  ArrowUpRight,
  Award,
  Calendar,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Gift,
  Image,
  LineChart,
  MapPin,
  MessageCircle,
  PieChart,
  Ticket,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react'
import {
  TEAL,
  GOLD,
  DEEP,
  GRID,
  chartTip,
  registerCharts,
  tealAreaFill,
} from './charts'

registerCharts()

const ACTIVITY = [
  ['CheckCircle2', '#E1F7EB', '#12A150', 'Booking VA-2841 confirmed', 'Jul 21 · 10:02'],
  ['CreditCard', '#E3F5F4', '#0FA3A0', 'Payment of $1,068 received', 'Jul 21 · 10:01'],
  ['Image', '#FCF1DC', '#B07514', '14 photos approved to gallery', 'Jun 14 · 19:40'],
  ['Gift', '#FFE9E5', '#FF6B5C', '+120 loyalty points earned', 'Jun 14 · 19:00'],
  ['MessageCircle', '#E3F5F4', '#0FA3A0', 'Azul sent your tour album', 'Jun 15 · 09:12'],
  ['Calendar', '#EDF1F3', '#0A3D4A', 'Reminder: Beach Safari in 12 days', 'Jul 26 · 08:00'],
]

const ICON_MAP = {
  CheckCircle2,
  CreditCard,
  Image,
  Gift,
  MessageCircle,
  Calendar,
}

export default function Overview() {
  const spendData = useMemo(
    () => ({
      labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Spend',
          data: [1246, 180, 420, 320, 649, 510, 740, 1068],
          fill: true,
          backgroundColor: tealAreaFill,
          borderColor: TEAL,
          borderWidth: 2.8,
          tension: 0.4,
          pointRadius: 4.5,
          pointHoverRadius: 6,
          pointBackgroundColor: '#fff',
          pointBorderColor: TEAL,
          pointBorderWidth: 2.2,
        },
      ],
    }),
    [],
  )

  const spendOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          ...chartTip,
          callbacks: { label: (x) => ` $${x.parsed.y.toLocaleString()}` },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: GRID },
          border: { display: false },
          ticks: { callback: (v) => `$${v}`, font: { size: 10 } },
        },
        x: { grid: { display: false }, border: { display: false } },
      },
    }),
    [],
  )

  const mixData = useMemo(
    () => ({
      labels: ['Beach Safari', 'City View', 'Taste & View'],
      datasets: [
        {
          data: [3, 2, 1],
          backgroundColor: [TEAL, DEEP, GOLD],
          borderWidth: 5,
          borderColor: '#fff',
          hoverOffset: 8,
        },
      ],
    }),
    [],
  )

  const mixOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      cutout: '68%',
      plugins: { legend: { display: false }, tooltip: { ...chartTip } },
    }),
    [],
  )

  return (
    <>
      <div className="kpis">
        <div className="kpi">
          <span className="ico t-teal">
            <Ticket className="lucide" />
          </span>
          <span className="lbl">Trips booked</span>
          <b>6</b>
          <span className="delta">
            <TrendingUp className="lucide" />2 this year
          </span>
        </div>
        <div className="kpi">
          <span className="ico t-gold">
            <Wallet className="lucide" />
          </span>
          <span className="lbl">Total spent</span>
          <b>$3,184</b>
          <span className="delta">
            <TrendingUp className="lucide" />$912 in 2026
          </span>
        </div>
        <div className="kpi">
          <span className="ico t-coral">
            <Camera className="lucide" />
          </span>
          <span className="lbl">Photos shared</span>
          <b>148</b>
          <span className="delta">
            <Award className="lucide" />Top 5% of guests
          </span>
        </div>
        <div className="kpi">
          <span className="ico t-green">
            <Gift className="lucide" />
          </span>
          <span className="lbl">Loyalty points</span>
          <b>620</b>
          <span className="delta">
            <ArrowUpRight className="lucide" />80 to next reward
          </span>
        </div>
      </div>
      <div className="grid g-21">
        <div>
          <div className="next-trip">
            <span className="tag ok">
              <Check className="lucide" />
              Confirmed & paid
            </span>
            <h3>Beach Safari</h3>
            <div className="trip-meta">
              <span>
                <Calendar className="lucide" />
                Sat, Aug 8 2026
              </span>
              <span>
                <Clock className="lucide" />8:45 AM
              </span>
              <span>
                <MapPin className="lucide" />
                Marina Dock 3
              </span>
              <span>
                <Users className="lucide" />
                12 guests
              </span>
            </div>
            <div className="countdown">
              <div className="count">
                <b>12</b>
                <span>Days</span>
              </div>
              <div className="count">
                <b>07</b>
                <span>Hrs</span>
              </div>
              <div className="count">
                <b>26</b>
                <span>Min</span>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-head">
              <h3>
                <LineChart className="lucide" />
                Spending overview
              </h3>
              <small>Last 8 months</small>
            </div>
            <div className="chart-box">
              <Line data={spendData} options={spendOptions} />
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gap: '1rem', alignContent: 'start' }}>
          <div className="panel">
            <div className="panel-head">
              <h3>
                <PieChart className="lucide" />
                Trips by safari
              </h3>
              <small>6 total</small>
            </div>
            <div className="chart-box" style={{ height: 190 }}>
              <Doughnut data={mixData} options={mixOptions} />
            </div>
            <div className="chart-legend">
              <div className="row">
                <span className="lbl">
                  <i className="dot" style={{ background: TEAL }} />
                  Beach Safari
                </span>
                <b>3 trips</b>
              </div>
              <div className="row">
                <span className="lbl">
                  <i className="dot" style={{ background: DEEP }} />
                  City View
                </span>
                <b>2 trips</b>
              </div>
              <div className="row">
                <span className="lbl">
                  <i className="dot" style={{ background: GOLD }} />
                  Taste & View
                </span>
                <b>1 trip</b>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="panel-head">
              <h3>
                <Activity className="lucide" />
                Recent activity
              </h3>
            </div>
            <div id="actList" style={{ display: 'grid', gap: '.55rem' }}>
              {ACTIVITY.map(([icon, bg, color, text, time]) => {
                const Icon = ICON_MAP[icon]
                return (
                  <div className="act-item" key={text}>
                    <span className="act-ico" style={{ background: bg, color }}>
                      <Icon className="lucide" />
                    </span>
                    <div style={{ flex: 1, fontSize: '.82rem', fontWeight: 600, lineHeight: 1.3 }}>
                      {text}
                    </div>
                    <span
                      className="mono"
                      style={{ fontSize: '.64rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}
                    >
                      {time}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
