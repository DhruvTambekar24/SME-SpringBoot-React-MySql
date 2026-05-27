import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r p-4 h-full">
      <nav className="flex flex-col gap-2">
        <Link className="text-gray-700 hover:text-blue-600" to="/dashboard">Dashboard</Link>
        <Link className="text-gray-700 hover:text-blue-600" to="/customers">Customers</Link>
        <Link className="text-gray-700 hover:text-blue-600" to="/products">Products</Link>
        <Link className="text-gray-700 hover:text-blue-600" to="/orders">Orders</Link>
      </nav>
    </div>
  )
}
