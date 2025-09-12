'use client'
import { useCart } from '../../lib/cart'

export default function Carrito(){
  const { items, total, remove, clear } = useCart()
  return (
    <section>
      <h1>Carrito</h1>
      {!items.length && <p className="muted">Tu carrito está vacío</p>}
      {items.map(it=>(
        <div key={it.id} className="card" style={{padding:12,display:'grid',gridTemplateColumns:'1fr auto auto',gap:12,alignItems:'center',marginBottom:10}}>
          <div>
            <div style={{fontWeight:600}}>{it.name}</div>
            {!!it.options && <div className="muted" style={{fontSize:13}}>
              {Object.entries(it.options).filter(([,v])=>v).map(([k,v])=>`${k}: ${v}`).join(' · ')}
            </div>}
          </div>
          <div className="muted">{it.qty} x ${(it.price/100).toFixed(2)}</div>
          <button className="chip" onClick={()=>remove(it.id)}>Quitar</button>
        </div>
      ))}
      {!!items.length && (
        <div className="chips" style={{justifyContent:'space-between',marginTop:12}}>
          <div style={{fontWeight:700}}>Total: ${(total/100).toFixed(2)}</div>
          <div className="chips">
            <button className="chip" onClick={clear}>Vaciar</button>
            <a className="btn btn-primary" href={`/checkout`}>Continuar pedido</a>
          </div>
        </div>
      )}
    </section>
  )
}
