import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import api from '../services/api'

function CustomerForm({ onAdd }){
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [loading, setLoading] = useState(false)
  const submit = async (e)=>{
    e.preventDefault(); setLoading(true)
    try{
      const res = await api.post('/customers', { name, contact })
      onAdd(res.data)
      setName(''); setContact('')
    }catch(err){ alert('Create failed') }
    finally{ setLoading(false) }
  }
  return (
    <form onSubmit={submit} className="space-y-2">
      <input className="w-full border p-2 rounded" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Contact" value={contact} onChange={e=>setContact(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" disabled={loading}>{loading? 'Adding...' : 'Add Customer'}</button>
    </form>
  )
}

export default function Customers(){
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let mounted = true
    api.get('/customers').then(r=>{ if(mounted) setList(r.data) }).catch(()=>{}).finally(()=> mounted && setLoading(false))
    return ()=> mounted = false
  },[])

  const add = (c)=> setList(prev=>[...prev, c])

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 container">
          <h2 className="text-xl mb-4">Customers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow"><CustomerForm onAdd={add} /></div>
            <div className="bg-white p-4 rounded shadow">
              {loading? <div>Loading...</div> : (
                <table className="w-full text-left">
                  <thead><tr><th className="p-2">ID</th><th className="p-2">Name</th><th className="p-2">Contact</th></tr></thead>
                  <tbody>
                    {list.map(c=> (
                      <tr key={c.id} className="border-t"><td className="p-2">{c.id}</td><td className="p-2">{c.name}</td><td className="p-2">{c.contact}</td></tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
