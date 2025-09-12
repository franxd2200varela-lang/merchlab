'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

function allowed(email?:string|null){
  const owners=(process.env.NEXT_PUBLIC_OWNER_EMAILS||'').split(',').map(s=>s.trim().toLowerCase()).filter(Boolean)
  return !!email && owners.includes(email.toLowerCase())
}

export default function Admin(){
  const [email,setEmail]=useState<string|null>()
  useEffect(() => {
    supabase.auth.getUser().then(({ data }: { data: { user: { email?: string | null } | null } }) =>
      setEmail(data.user?.email ?? null)
    );
  }, []);
  if(email===undefined) return <div>Cargando...</div>
  if(!allowed(email)) return <div className="muted">Acceso denegado</div>

  return (
    <section>
      <h1>Admin</h1>
      <p className="muted">Acá irán: crear categorías, productos, subir imágenes, etc.</p>
      {/* TODO: CRUD real con Supabase tables */}
    </section>
  )
}
