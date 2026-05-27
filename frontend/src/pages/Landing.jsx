import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Grow your small business with SME Platform
            </h1>
            <p className="text-slate-700 mb-6">
              Track customers, manage inventory, and monitor sales with beautiful
              dashboards and simple workflows.
            </p>
            <div className="flex gap-3">
              <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Get Started
              </Link>
              <Link to="/login" className="px-4 py-2 border border-slate-300 rounded-md text-slate-700">
                Sign In
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg"
          >
            <div className="space-y-4">
              <div className="h-48 bg-gradient-to-r from-indigo-50 to-pink-50 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-semibold">Smart Dashboard</div>
                  <div className="text-sm text-slate-600">Visualize sales & orders at a glance</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-50 rounded">Customers: <strong>128</strong></div>
                <div className="p-3 bg-slate-50 rounded">Products: <strong>420</strong></div>
                <div className="p-3 bg-slate-50 rounded">Orders: <strong>36</strong></div>
                <div className="p-3 bg-slate-50 rounded">Revenue: <strong>$12.4k</strong></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
