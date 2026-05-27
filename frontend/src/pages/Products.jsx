import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import api from '../services/api'

export default function Products(){
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  useEffect(()=>{ api.get('/products').then(r=>setList(r.data)).catch(()=>{}) },[])

  const add = async (e)=>{
    e.preventDefault()
    try{ const res = await api.post('/products', { name, price: parseFloat(price) }); setList(prev=>[...prev, res.data]); setName(''); setPrice('') }catch(e){alert('Failed')}
  }

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 container">
          <h2 className="text-xl mb-4">Products</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded shadow">
              <form onSubmit={add} className="space-y-2">
                <input className="w-full border p-2 rounded" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
                <input className="w-full border p-2 rounded" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Product</button>
              </form>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <table className="w-full text-left">
                <thead><tr><th className="p-2">ID</th><th className="p-2">Name</th><th className="p-2">Price</th></tr></thead>
                <tbody>{list.map(p=> (<tr key={p.id} className="border-t"><td className="p-2">{p.id}</td><td className="p-2">{p.name}</td><td className="p-2">{p.price}</td></tr>))}</tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
