import React, { createContext, useContext, useState, useEffect } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'))
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
      api.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
      localStorage.removeItem('token')
      delete api.defaults.headers.common.Authorization
    }
  }, [token])

  const login = (t) => setToken(t)
  const logout = () => {
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext
