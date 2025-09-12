import Header from '@/components/Header'
import { CartProvider } from '../lib/cart'

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="es">
      <body>
        <Header />
        <CartProvider>
          <main className="container">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
