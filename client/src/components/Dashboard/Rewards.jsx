import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
  BadgePercent,
  Camera,
  Gift,
  GlassWater,
  Lock,
  TrendingUp,
} from 'lucide-react'
import { GOLD, GRID, chartTip, registerCharts, goldAreaFill } from './charts'

registerCharts()

export default function Rewards() {
  const ptsData = useMemo(
    () => ({
      labels: ['Oct', 'Dec', 'Apr', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'Points',
          data: [95, 220, 330, 500, 620],
          fill: true,
          backgroundColor: goldAreaFill,
          borderColor: GOLD,
          borderWidth: 2.8,
          tension: 0.4,
          pointRadius: 4.5,
          pointHoverRadius: 6,
          pointBackgroundColor: '#fff',
          pointBorderColor: GOLD,
          pointBorderWidth: 2.2,
        },
      ],
    }),
    [],
  )

  const ptsOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { ...chartTip } },
      scales: {
        y: { beginAtZero: true, grid: { color: GRID }, border: { display: false } },
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
            <Gift className="lucide" />
            Gold member progress
          </h3>
          <small>620 / 700 points to Platinum</small>
        </div>
        <div className="reward-hero">
          <div className="ring">
            <svg width="150" height="150" viewBox="0 0 150 150">
              <circle cx="75" cy="75" r="64" fill="none" stroke="#EDF1F3" strokeWidth="13" />
              <circle
                cx="75"
                cy="75"
                r="64"
                fill="none"
                stroke="url(#gradR)"
                strokeWidth="13"
                strokeLinecap="round"
                strokeDasharray="402"
                strokeDashoffset="46"
              />
              <defs>
                <linearGradient id="gradR" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#0FA3A0" />
                  <stop offset="1" stopColor="#F2A93B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="txt">
              <div>
                <b>88%</b>
                <span>to Platinum</span>
              </div>
            </div>
          </div>
          <div className="perks">
            <div className="perk">
              <BadgePercent className="lucide" />
              <div>
                <b>10% off every booking</b> — active since Gold
              </div>
            </div>
            <div className="perk">
              <Camera className="lucide" />
              <div>
                <b>Free printed photo album</b> — earned at 500 pts
              </div>
            </div>
            <div className="perk">
              <GlassWater className="lucide" />
              <div>
                <b>Welcome drinks for the group</b> — earned at 600 pts
              </div>
            </div>
            <div className="perk locked">
              <Lock className="lucide" />
              <div>
                <b>Free private-charter upgrade</b> — unlocks at Platinum (700 pts)
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="panel" style={{ alignSelf: 'start' }}>
        <div className="panel-head">
          <h3>
            <TrendingUp className="lucide" />
            Points earned
          </h3>
          <small>Cumulative</small>
        </div>
        <div className="chart-box" style={{ height: 190 }}>
          <Line data={ptsData} options={ptsOptions} />
        </div>
        <div className="mini-bars" style={{ marginTop: '.9rem' }}>
          <div className="mb">
            <div className="mb-top">
              <span>Beach Safari · Jul</span>
              <b>+120 pts</b>
            </div>
            <div className="track">
              <div
                className="fill"
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg,#F2A93B,#f7c069)',
                }}
              ></div>
            </div>
          </div>
          <div className="mb">
            <div className="mb-top">
              <span>Taste & View · Jun</span>
              <b>+170 pts</b>
            </div>
            <div className="track">
              <div
                className="fill"
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg,#F2A93B,#f7c069)',
                }}
              ></div>
            </div>
          </div>
          <div className="mb">
            <div className="mb-top">
              <span>City View · Apr</span>
              <b>+110 pts</b>
            </div>
            <div className="track">
              <div
                className="fill"
                style={{
                  width: '65%',
                  background: 'linear-gradient(90deg,#F2A93B,#f7c069)',
                }}
              ></div>
            </div>
          </div>
          <div className="mb">
            <div className="mb-top">
              <span>To Platinum</span>
              <b>80 pts left</b>
            </div>
            <div className="track">
              <div className="fill" style={{ width: '88%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
