'use client'
import Link from 'next/link'
// Update the import path if your cart hook is located elsewhere, for example:
import { useState } from 'react';

export function useCart() {
  // Replace with your actual cart logic
  const [count] = useState(0);
  return { count };
}

export default function Header(){
  const { count } = useCart()
  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link href="/" className="font-extrabold" style={{letterSpacing:'.2px'}}>MerchLab</Link>
        <nav className="nav-links">
          <Link href="/"    className="chip">Inicio</Link>
          <Link href="/catalogo" className="chip">Catálogo</Link>
          <Link href="/hace-tu-web" className="chip">Hacé tu web</Link>
          <Link href="/nosotras" className="chip">Nosotras</Link>
          <Link href="/login" className="chip">Login</Link>
          <Link href="/register" className="chip">Registrarse</Link>
          <Link href="/carrito" className="chip" style={{position:'relative'}}>
            Carrito
            {!!count && <span className="badge">{count}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
