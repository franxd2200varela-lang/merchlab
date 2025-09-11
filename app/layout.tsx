import './globals.css';

export const metadata = {
  title: 'MerchLab',
  description: 'Merchandising personalizado',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="sticky top-0 bg-white/90 backdrop-blur border-b">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
            <a href="/" className="font-extrabold">MerchLab</a>
            <nav className="ml-auto flex items-center gap-2">
              <a className="px-3 py-1 rounded-full border" href="/catalogo">Catálogo</a>
              <a className="px-3 py-1 rounded-full border" href="/combos">Combos</a>
              <a className="px-3 py-1 rounded-full border" href="/casos-de-exito">Casos de éxito</a>
              <a className="px-3 py-1 rounded-full border" href="/login">Login</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
