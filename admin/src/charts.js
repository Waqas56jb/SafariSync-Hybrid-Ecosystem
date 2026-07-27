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
import { DIM, GRID } from './data'

let registered = false

export function registerCharts() {
  if (registered) return
  ChartJS.defaults.font.family = "'Space Grotesk',monospace"
  ChartJS.defaults.color = DIM
  ChartJS.defaults.borderColor = GRID
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

export function tealFill(context) {
  const { chart } = context
  const { ctx, chartArea } = chart
  if (!chartArea) return 'rgba(45,216,199,.32)'
  const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
  g.addColorStop(0, 'rgba(45,216,199,.32)')
  g.addColorStop(1, 'rgba(45,216,199,0)')
  return g
}

export function goldFill(context) {
  const { chart } = context
  const { ctx, chartArea } = chart
  if (!chartArea) return 'rgba(240,172,72,.3)'
  const g = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
  g.addColorStop(0, 'rgba(240,172,72,.3)')
  g.addColorStop(1, 'rgba(240,172,72,0)')
  return g
}

export const tip = {
  backgroundColor: '#0b1e24',
  borderColor: GRID,
  borderWidth: 1,
  padding: 12,
}
