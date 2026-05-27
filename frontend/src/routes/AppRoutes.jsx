import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../context/AuthContext'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import Landing from '../pages/Landing'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'

function Protected({ children }) {
  const { token } = useAuth()
  if (!token) return <Navigate to="/login" replace />
  return children
}

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/customers"
          element={
            <Protected>
              <Customers />
            </Protected>
          }
        />
        <Route
          path="/products"
          element={
            <Protected>
              <Products />
            </Protected>
          }
        />
        <Route
          path="/orders"
          element={
            <Protected>
              <Orders />
            </Protected>
          }
        />
      </Routes>
    </AuthProvider>
  )
}
