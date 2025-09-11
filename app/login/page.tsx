'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | undefined>();

  // Dejalo “fake” por ahora para que compile. Después lo conectamos a Supabase.
  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg('Demo: login simulado. Luego integramos Supabase.');
  };

  return (
    <section className="py-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handle} className="mt-4 space-y-3">
        <input
          className="w-full border rounded-lg px-3 py-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border rounded-lg px-3 py-2"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="px-4 py-2 rounded-full bg-black text-white">
          Entrar
        </button>
      </form>
      <div className="text-sm text-gray-600 mt-2">{msg}</div>
    </section>
  );
}
