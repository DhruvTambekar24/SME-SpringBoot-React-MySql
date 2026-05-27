import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import SummaryCard from '../components/SummaryCard'
import Charts from '../components/Charts'

export default function Dashboard(){
  // dummy counts
  const stats = { customers: 12, products: 34, orders: 5 }
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 container">
          <h1 className="text-2xl font-semibold mb-4">Welcome to SME Platform</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <SummaryCard title="Customers" value={stats.customers} />
            <SummaryCard title="Products" value={stats.products} />
            <SummaryCard title="Orders" value={stats.orders} />
          </div>
          <Charts />
        </main>
      </div>
    </div>
  )
}
