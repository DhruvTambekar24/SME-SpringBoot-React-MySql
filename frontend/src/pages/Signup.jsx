import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/auth/signup', { email, password })
      nav('/login')
    } catch (err) {
      console.error(err)
      alert('Signup failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <form onSubmit={submit} className="space-y-3">
          <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input type="password" className="w-full border p-2 rounded" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button className="w-full bg-green-600 text-white p-2 rounded" disabled={loading}>{loading? 'Signing...' : 'Sign up'}</button>
        </form>
        <div className="mt-4 text-sm">Have account? <Link to="/login" className="text-blue-600">Login</Link></div>
      </div>
    </div>
  )
}
