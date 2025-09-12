export default function Home(){
  return (
    <section className="card hero">
      <div>
        <div className="muted" style={{letterSpacing:'.12em'}}>MERCHANDISING & REGALOS</div>
        <h1>Llevá tu marca a otro nivel</h1>
        <p className="muted">Vos elegís el producto, <b>nosotras lo personalizamos.</b></p>
        <div className="chips" style={{marginTop:16}}>
          <a className="btn btn-primary" href="/catalogo">Ver catálogo</a>
          <a className="btn btn-ghost" href="https://instagram.com" target="_blank">Instagram</a>
        </div>
      </div>
      <div className="hero-bubble" />
    </section>
  )
}
