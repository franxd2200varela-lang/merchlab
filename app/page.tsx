import React from "react";

export default function Home() {
  return (
    <section className="py-8">
      <div className="rounded-2xl overflow-hidden border">
        <div className="grid gap-8 p-8">
          <div>
            <h1 className="text-3xl font-extrabold">Llevá tu marca a otro nivel</h1>
            <p className="text-gray-600 mt-2">
              Vos elegís el producto, nosotras lo personalizamos ✨
            </p>
            <div className="flex gap-2 mt-4">
              <a className="px-4 py-2 rounded-full border" href="/catalogo">Ver catálogo</a>
              <a className="px-4 py-2 rounded-full border" href="/combos">Ver combos</a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <a href="/combos" className="rounded-xl border p-5 hover:bg-gray-50">
              <h3 className="font-semibold">Combos listos para cotizar</h3>
              <p className="text-sm text-gray-600 mt-1">
                Elegí productos y cantidades, y cotizá por WhatsApp.
              </p>
            </a>

            <a href="/servicio-paginas-web" className="rounded-xl border p-5 hover:bg-gray-50">
              <h3 className="font-semibold">También hacemos páginas web</h3>
              <p className="text-sm text-gray-600 mt-1">
                Sitios rápidos, lindos y listos para convertir.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
