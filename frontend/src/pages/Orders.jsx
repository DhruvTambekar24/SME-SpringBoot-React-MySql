import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import api from '../services/api'

export default function Orders(){
  const [list, setList] = useState([])
  const [totalPrice, setTotalPrice] = useState('')

  useEffect(()=>{ api.get('/orders').then(r=>setList(r.data)).catch(()=>{}) },[])

  const add = async (e)=>{
    e.preventDefault()
    try{ const res = await api.post('/orders', { totalPrice: parseFloat(totalPrice) }); setList(prev=>[...prev, res.data]); setTotalPrice('') }catch(e){alert('Failed')}
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 container">
          <h2 className="text-xl mb-4">Orders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <form onSubmit={add} className="space-y-2">
                <input className="w-full border p-2 rounded" placeholder="Total Price" value={totalPrice} onChange={e=>setTotalPrice(e.target.value)} />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Order</button>
              </form>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <table className="w-full text-left">
                <thead><tr><th className="p-2">ID</th><th className="p-2">Total</th></tr></thead>
                <tbody>{list.map(o=> (<tr key={o.id} className="border-t"><td className="p-2">{o.id}</td><td className="p-2">{o.totalPrice}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
