import { Line } from 'react-chartjs-2'
import { topGuests, GOLD, GRID } from '../data'
import { registerCharts, goldFill } from '../charts'

registerCharts()

export default function Customers() {
  const custData = {
    labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        data: [86, 64, 71, 95, 104, 112, 126, 142],
        fill: true,
        backgroundColor: goldFill,
        borderColor: GOLD,
        borderWidth: 2.6,
        tension: 0.42,
        pointRadius: 3.5,
        pointBackgroundColor: '#0F2830',
        pointBorderColor: GOLD,
        pointBorderWidth: 2,
      },
    ],
  }

  const custOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: GRID } },
      x: { grid: { display: false } },
    },
  }

  return (
    <section className="view on" id="v-customers">
      <div className="kpis" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div className="kpi">
          <span className="ico">👥</span>
          <span className="lbl">Total customers</span>
          <b>4,318</b>
          <span className="delta up">▲ 142 in Jul</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(240,172,72,.15)' }}>
          <span className="ico">🔁</span>
          <span className="lbl">Repeat rate</span>
          <b>37%</b>
          <span className="delta up">▲ 4 pts</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(255,122,92,.15)' }}>
          <span className="ico">⭐</span>
          <span className="lbl">Avg. rating</span>
          <b>4.9</b>
          <span className="delta up">1,204 reviews</span>
        </div>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>
            Top guests <small>By lifetime value</small>
          </h3>
        </div>
        <div className="scroll-x">
          <table className="tbl">
            <thead>
              <tr>
                <th>Guest</th>
                <th>Country</th>
                <th>Trips</th>
                <th>Photos</th>
                <th>Lifetime value</th>
                <th>Loyalty</th>
              </tr>
            </thead>
            <tbody>
              {topGuests.map((g) => (
                <tr key={g.email}>
                  <td>
                    <div className="who">
                      <img src={g.avatar} alt="" />
                      <div>
                        <b>{g.name}</b>
                        <span>{g.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{g.country}</td>
                  <td className="mono">{g.trips}</td>
                  <td className="mono">{g.photos}</td>
                  <td className="mono">{g.ltv}</td>
                  <td>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: `${g.loyalty}%` }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="panel" style={{ marginTop: '1.1rem' }}>
        <div className="panel-head">
          <h3>New customers by month</h3>
        </div>
        <div className="chart-box" style={{ height: 210 }}>
          <Line data={custData} options={custOptions} />
        </div>
      </div>
    </section>
  )
}
