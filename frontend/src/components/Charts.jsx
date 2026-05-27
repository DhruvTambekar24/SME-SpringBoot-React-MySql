import React from 'react'
import { Line, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
)

export default function Charts() {
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 3000, 2500, 4000, 4700],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59,130,246,0.1)',
        tension: 0.3,
      },
    ],
  }

  const pieData = {
    labels: ['Completed', 'Pending', 'Cancelled'],
    datasets: [
      {
        data: [60, 25, 15],
        backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-medium mb-2">Revenue (last 6 months)</h2>
        <Line data={lineData} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-medium mb-2">Orders Breakdown</h2>
        <Pie data={pieData} />
      </div>
    </div>
  )
}
