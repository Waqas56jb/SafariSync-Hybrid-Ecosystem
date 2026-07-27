import { useMemo } from 'react'
import { Doughnut } from 'react-chartjs-2'
import {
  Check,
  CheckCircle2,
  Download,
  PieChart,
  Receipt,
  Wifi,
} from 'lucide-react'
import { TEAL, GOLD, DEEP, chartTip, registerCharts } from './charts'

registerCharts()

export default function Payments() {
  const payData = useMemo(
    () => ({
      labels: ['Beach Safari', 'City View', 'Taste & View'],
      datasets: [
        {
          data: [2314, 1593, 740],
          backgroundColor: [TEAL, DEEP, GOLD],
          borderWidth: 5,
          borderColor: '#fff',
          hoverOffset: 8,
        },
      ],
    }),
    [],
  )

  const payOptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      cutout: '66%',
      plugins: {
        legend: { display: false },
        tooltip: {
          ...chartTip,
          callbacks: { label: (x) => ` $${x.parsed.toLocaleString()}` },
        },
      },
    }),
    [],
  )

  return (
    <div className="grid g-21">
      <div>
        <div className="pay-cards">
          <div className="pcard visa">
            <div className="row">
              <span>PRIMARY CARD</span>
              <Wifi className="lucide" style={{ transform: 'rotate(90deg)' }} />
            </div>
            <div className="num">•••• •••• •••• 4921</div>
            <div className="row">
              <span>MARÍA GONZÁLEZ · 09/28</span>
              <span className="brand-txt">VISA</span>
            </div>
          </div>
          <div className="pcard pp">
            <div className="row">
              <span>LINKED WALLET</span>
              <CheckCircle2 className="lucide" />
            </div>
            <div className="num">maria@example.com</div>
            <div className="row">
              <span>VERIFIED ACCOUNT</span>
              <span className="brand-txt">PayPal</span>
            </div>
          </div>
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <Receipt className="lucide" />
              Invoices
            </h3>
            <small>All payments secured by Stripe</small>
          </div>
          <div className="scroll-x">
            <table>
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Booking</th>
                  <th>Method</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mono">INV-1187</td>
                  <td>VA-2841 · Beach</td>
                  <td>Visa •4921</td>
                  <td>Jul 21, 2026</td>
                  <td className="mono">$1,068</td>
                  <td>
                    <span className="tag ok">
                      <Check className="lucide" />
                      Paid
                    </span>
                  </td>
                  <td>
                    <button
                      className="icon-btn"
                      style={{ width: 34, height: 34 }}
                      type="button"
                      onClick={() => alert('Demo: downloads PDF invoice.')}
                      aria-label="Download"
                    >
                      <Download className="lucide" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="mono">INV-1102</td>
                  <td>VA-2790 · Taste</td>
                  <td>PayPal</td>
                  <td>Jun 2, 2026</td>
                  <td className="mono">$740</td>
                  <td>
                    <span className="tag ok">
                      <Check className="lucide" />
                      Paid
                    </span>
                  </td>
                  <td>
                    <button
                      className="icon-btn"
                      style={{ width: 34, height: 34 }}
                      type="button"
                      onClick={() => alert('Demo: downloads PDF invoice.')}
                      aria-label="Download"
                    >
                      <Download className="lucide" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="mono">INV-1044</td>
                  <td>VA-2712 · City</td>
                  <td>Visa •4921</td>
                  <td>Mar 20, 2026</td>
                  <td className="mono">$649</td>
                  <td>
                    <span className="tag ok">
                      <Check className="lucide" />
                      Paid
                    </span>
                  </td>
                  <td>
                    <button
                      className="icon-btn"
                      style={{ width: 34, height: 34 }}
                      type="button"
                      onClick={() => alert('Demo: downloads PDF invoice.')}
                      aria-label="Download"
                    >
                      <Download className="lucide" />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="mono">INV-0989</td>
                  <td>VA-2650 · Beach</td>
                  <td>Visa •4921</td>
                  <td>Dec 12, 2025</td>
                  <td className="mono">$1,246</td>
                  <td>
                    <span className="tag ok">
                      <Check className="lucide" />
                      Paid
                    </span>
                  </td>
                  <td>
                    <button
                      className="icon-btn"
                      style={{ width: 34, height: 34 }}
                      type="button"
                      onClick={() => alert('Demo: downloads PDF invoice.')}
                      aria-label="Download"
                    >
                      <Download className="lucide" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="panel" style={{ alignSelf: 'start' }}>
        <div className="panel-head">
          <h3>
            <PieChart className="lucide" />
            Spend by safari
          </h3>
          <small>Lifetime</small>
        </div>
        <div className="chart-box" style={{ height: 200 }}>
          <Doughnut data={payData} options={payOptions} />
        </div>
        <div className="chart-legend">
          <div className="row">
            <span className="lbl">
              <i className="dot" style={{ background: TEAL }} />
              Beach Safari
            </span>
            <b>$2,314</b>
          </div>
          <div className="row">
            <span className="lbl">
              <i className="dot" style={{ background: DEEP }} />
              City View
            </span>
            <b>$1,593</b>
          </div>
          <div className="row">
            <span className="lbl">
              <i className="dot" style={{ background: GOLD }} />
              Taste & View
            </span>
            <b>$740</b>
          </div>
        </div>
        <div
          style={{
            marginTop: '1rem',
            paddingTop: '.9rem',
            borderTop: '1px solid var(--line)',
            display: 'grid',
            gap: '.55rem',
            fontSize: '.83rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--muted)' }}>Lifetime total</span>
            <b className="mono">$4,647</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--muted)' }}>Avg. per trip</span>
            <b className="mono">$774</b>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--muted)' }}>Saved with rewards</span>
            <b className="mono" style={{ color: '#12A150' }}>
              $186
            </b>
          </div>
        </div>
      </div>
    </div>
  )
}
