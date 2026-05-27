import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { logout } = useAuth()
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <div className="text-xl font-semibold">SME Platform</div>
      <div>
        <button
          onClick={logout}
          className="px-3 py-1 bg-red-500 text-white rounded-md">
          Logout
        </button>
      </div>
    </div>
  )
}
