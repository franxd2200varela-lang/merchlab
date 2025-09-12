import Link from 'next/link'

const mock = [
  { id:'vaso-01', name:'Vaso térmico', price:7990, image:'/img/vaso.png' },
  { id:'bolso-02', name:'Bolso tote', price:12990, image:'/img/bolso.png' },
  { id:'lapiz-03', name:'Set escritura', price:3990, image:'/img/escritura.png' },
]

export default function Catalogo(){
  return (
    <section>
      <h1>Catálogo</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:16}}>
        {mock.map(p=>(
          <Link key={p.id} href={`/catalogo/${p.id}`} className="card" style={{padding:12}}>
            <div style={{aspectRatio:'4/3',background:'#f8fafc',borderRadius:12,marginBottom:8}}/>
            <div style={{fontWeight:600}}>{p.name}</div>
            <div className="muted">${(p.price/100).toFixed(2)}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
