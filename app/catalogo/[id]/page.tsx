'use client'
import { useParams } from 'next/navigation'
import { useCart } from '../../../lib/cart'
import { useState } from 'react'

const mock = {
  'vaso-01': { id:'vaso-01', name:'Vaso térmico', price:7990, options:['Color','Grabado'] },
  'bolso-02': { id:'bolso-02', name:'Bolso tote', price:12990, options:['Color','Tamaño'] },
  'lapiz-03': { id:'lapiz-03', name:'Set escritura', price:3990, options:['Color'] },
} as const

export default function Producto(){
  const { id } = useParams<{id:string}>()
  const p = mock[id as keyof typeof mock]
  const { add } = useCart()
  const [qty,setQty]=useState(1)
  const [opts,setOpts]=useState<Record<string,string>>({})

  if(!p) return <div>Producto no encontrado.</div>

  const addToCart=()=>{
    add({ id:p.id, name:p.name, price:p.price, options:opts }, qty)
    alert('Agregado al carrito')
  }

  return (
    <section className="card" style={{padding:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
      <div style={{aspectRatio:'4/3',background:'#f8fafc',borderRadius:12}}/>
      <div>
        <h1>{p.name}</h1>
        <div className="muted" style={{marginBottom:8}}>${(p.price/100).toFixed(2)}</div>

        <h2>Personalización</h2>
        <div className="chips" style={{flexDirection:'column',alignItems:'stretch'}}>
          {p.options.map(k=>(
            <input key={k} className="chip" placeholder={k} value={opts[k]||''}
              onChange={e=>setOpts(s=>({...s,[k]:e.target.value}))}/>
          ))}
          <div className="chips" style={{justifyContent:'space-between'}}>
            <div className="chip">Cantidad
              <input type="number" min={1} value={qty} onChange={e=>setQty(+e.target.value)} style={{width:80,marginLeft:8}}/>
            </div>
            <button onClick={addToCart} className="btn btn-primary">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </section>
  )
}
