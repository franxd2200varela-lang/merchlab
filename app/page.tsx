export default function Home(){
  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="hero">
          <div>
            <div style={{letterSpacing:1, color:'#6b7280', fontWeight:600}}>MERCHANDISING &amp; REGALOS</div>
            <h1>Llevá tu marca a otro nivel</h1>
            <p>Vos elegís el producto, <strong>nosotras lo personalizamos</strong>.</p>
            <div style={{display:'flex', gap:12}}>
              <a className="btn btn--primary" href="/catalogo">Ver catálogo</a>
              <a className="btn btn--ghost" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
          <div className="center">
            <div className="bubble" />
          </div>
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="section">
        <h2 style={{fontSize:28, margin:'0 0 16px'}}>Categorías destacadas</h2>
        <div className="grid-3">
          {[1,2,3].map((n)=>(
            <article className="card" key={n}>
              <div className="center" style={{padding:24}}>
                <div className="bubble" style={{
                  maxWidth:360, background: n===1
                    ? 'radial-gradient(closest-side,#cffafe,#ecfeff)'
                    : n===2 ? 'radial-gradient(closest-side,#e9d5ff,#faf5ff)'
                    : 'radial-gradient(closest-side,#fef9c3,#fffbeb)'
                }}/>
              </div>
              <div className="card-body">
                <h3>{n===1?'Vasos, mugs & botellas': n===2?'Bolsos y mochilas':'Escritura'}</h3>
                <div className="meta">Ver productos</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
