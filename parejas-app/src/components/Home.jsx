// src/components/Home.jsx
import React from 'react'
import plates from '../data/plates.json'

export default function Home({ go }) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Bienvenido a ParejasApp 🇨🇴</h2>
      <p className="text-gray-700">
        Explora las comidas típicas de Colombia, elige tus favoritas, crea platos únicos,
        mira el ranking nacional y disfruta una galería animada.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <button onClick={() => go('parejas')} className="p-4 bg-white shadow rounded text-left">
          🥘 <strong>Parejas</strong><br/>
          Elige entre dos platos
        </button>

        <button onClick={() => go('creator')} className="p-4 bg-white shadow rounded text-left">
          🍽️ <strong>Crear plato</strong><br/>
          Mezcla ingredientes
        </button>

        <button onClick={() => go('ranking')} className="p-4 bg-white shadow rounded text-left">
          ⭐ <strong>Ranking</strong><br/>
          Platos más votados
        </button>

        <button onClick={() => go('gallery')} className="p-4 bg-white shadow rounded text-left">
          🖼️ <strong>Galería</strong><br/>
          Imágenes animadas
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-bold mb-2">Platillos destacados:</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {plates.slice(0,5).map(p => (
            <div key={p.id} className="min-w-[120px] bg-white shadow rounded p-2">
              <img src={p.image} className="h-20 w-full object-cover rounded" />
              <div className="text-center text-sm mt-1">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
