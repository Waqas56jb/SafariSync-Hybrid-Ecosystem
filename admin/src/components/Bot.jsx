import { Bar } from 'react-chartjs-2'
import { botLogs, TEAL, GOLD, CORAL, GRID } from '../data'
import { registerCharts } from '../charts'

registerCharts()

export default function Bot() {
  const intentData = {
    labels: [
      'Confirmations',
      'Reminders',
      'FAQs',
      'Photo prompts',
      'Status checks',
      'Reschedules',
      'Escalations',
    ],
    datasets: [
      {
        axis: 'y',
        data: [612, 548, 402, 377, 296, 84, 31],
        backgroundColor: [TEAL, TEAL, GOLD, CORAL, TEAL, GOLD, '#FF6B6B'],
        borderRadius: 6,
        barThickness: 17,
      },
    ],
  }

  const intentOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: GRID } },
      y: { grid: { display: false }, ticks: { font: { size: 10.5 } } },
    },
  }

  return (
    <section className="view on" id="v-bot">
      <div className="kpis" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
        <div className="kpi">
          <span className="ico">💬</span>
          <span className="lbl">Conversations · Jul</span>
          <b>1,873</b>
          <span className="delta up">▲ 26.3%</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(63,214,143,.15)' }}>
          <span className="ico">⚡</span>
          <span className="lbl">Avg. response</span>
          <b>1.8s</b>
          <span className="delta up">▼ 0.4s faster</span>
        </div>
        <div className="kpi" style={{ '--glow': 'rgba(240,172,72,.15)' }}>
          <span className="ico">🤖</span>
          <span className="lbl">Auto-resolved</span>
          <b>98.2%</b>
          <span className="delta up">▲ 1.1 pts</span>
        </div>
      </div>
      <div className="grid g-main">
        <div className="panel">
          <div className="panel-head">
            <h3>
              Messages by intent <small>Last 30 days</small>
            </h3>
          </div>
          <div className="chart-box">
            <Bar data={intentData} options={intentOptions} />
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>Live event stream</h3>
            <span className="tag ok">● Streaming</span>
          </div>
          <div className="bot-log" id="botLog">
            {botLogs.map(([ico, text, time]) => (
              <div className="log-row" key={time + text}>
                <span className="log-ico">{ico}</span>
                <span>{text}</span>
                <time>{time}</time>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
