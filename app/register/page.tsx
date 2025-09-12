'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function Register(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [msg,setMsg]=useState<string>()

  const submit=async(e:React.FormEvent)=>{
    e.preventDefault()
    setMsg('Creando cuenta...')
    const { error } = await supabase.auth.signUp({ email, password })
    if(error){ setMsg(error.message); return }
    setMsg('Revisá tu email para confirmar la cuenta.')
  }

  return (
    <section style={{maxWidth:420}}>
      <h1>Registrarse</h1>
      <form onSubmit={submit} className="chips" style={{flexDirection:'column',alignItems:'stretch'}}>
        <input className="chip" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="chip" placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button className="btn btn-primary">Crear cuenta</button>
        {msg && <div className="muted">{msg}</div>}
      </form>
    </section>
  )
}
