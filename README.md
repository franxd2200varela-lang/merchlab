# MerchLab — Host Ready (Next.js 14 + Tailwind v4 + Supabase Auth)

## 1) Supabase
- Crear proyecto en https://supabase.com
- Copiar `Project URL` y `anon public key`
- Auth → Providers → Email: habilitar Email/Password
- Auth → Users → Add user: **varelafranciscoq@gmail.com** con contraseña (auto-confirm)

## 2) Variables (local o en Vercel)
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_WHATSAPP=543875403225
NEXT_PUBLIC_OWNER_EMAILS=varelafranciscoq@gmail.com
```

## 3) Deploy en Vercel
- Subir repo a GitHub → Importar en Vercel → Setear las 4 variables → Deploy
- Probar: /login (ingresar) → /admin (debe permitirte entrar)

## 4) Notas
- Panel Admin protegido por email (sin ABM aún). Luego podemos sumar BD, storage y panel completo.
- toche toche
