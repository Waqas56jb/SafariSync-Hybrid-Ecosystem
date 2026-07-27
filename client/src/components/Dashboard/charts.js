import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'

export const TEAL = '#0FA3A0'
export const GOLD = '#F2A93B'
export const CORAL = '#FF6B5C'
export const DEEP = '#0A3D4A'
export const GRID = 'rgba(11,37,50,.07)'

export const chartTip = {
  backgroundColor: '#0B2532',
  padding: 11,
  cornerRadius: 9,
  titleFont: { size: 11 },
  bodyFont: { size: 11 },
}

let registered = false

export function registerCharts() {
  if (registered) return
  ChartJS.defaults.font.family = "'Plus Jakarta Sans',sans-serif"
  ChartJS.defaults.color = '#5C7580'
  ChartJS.defaults.font.size = 11
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Filler,
    Tooltip,
    Legend,
  )
  registered = true
}

/** Create a vertical linear gradient fill for line charts */
export function createGradientFill(ctx, top, bottom, colorStart, colorEnd) {
  const g = ctx.createLinearGradient(0, top, 0, bottom)
  g.addColorStop(0, colorStart)
  g.addColorStop(1, colorEnd)
  return g
}

export function tealAreaFill(context) {
  const chart = context.chart
  const { ctx, chartArea } = chart
  if (!chartArea) return 'rgba(15,163,160,.38)'
  return createGradientFill(
    ctx,
    chartArea.top,
    chartArea.bottom,
    'rgba(15,163,160,.38)',
    'rgba(15,163,160,0)',
  )
}

export function goldAreaFill(context) {
  const chart = context.chart
  const { ctx, chartArea } = chart
  if (!chartArea) return 'rgba(242,169,59,.42)'
  return createGradientFill(
    ctx,
    chartArea.top,
    chartArea.bottom,
    'rgba(242,169,59,.42)',
    'rgba(242,169,59,0)',
  )
}
