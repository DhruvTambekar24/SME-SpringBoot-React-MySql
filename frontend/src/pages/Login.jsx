import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const res = await api.post('/auth/login', { email, password })
      // backend returns token string
      const token = res.data
      login(token)
      nav('/dashboard')
    } catch (err) {
      setError(err.response?.data || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full bg-blue-600 text-white p-2 rounded" disabled={loading}>{loading? 'Logging...' : 'Login'}</button>
        </form>
        <div className="mt-4 text-sm">No account? <Link to="/signup" className="text-blue-600">Sign up</Link></div>
      </div>
    </div>
  )
}
