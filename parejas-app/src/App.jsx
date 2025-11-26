import React, { useState } from 'react'
import Home from './components/Home'
import Parejas from './components/Parejas'
import Creator from './components/Creator'
import Ranking from './components/Ranking'
import Gallery from './components/Gallery'
import ObjetoSanAgustin from './components/ObjetoSanAgustin'
import Info from './components/Info'
import Settings from './components/Settings'


export default function App(){
const [route, setRoute] = useState('home')
return (
<div className="min-h-screen bg-gray-50">
<header className="p-4 shadow-md bg-white flex justify-between items-center">
<h1 className="text-xl font-bold">Parejas: Comidas Colombianas</h1>
<nav className="space-x-2">
{['home','parejas','creator','ranking','gallery','objeto','info','settings'].map(r=> (
<button key={r} onClick={()=>setRoute(r)} className="px-2 py-1 rounded hover:bg-gray-100">{r}</button>
))}
</nav>
</header>
<main className="p-4">
{route === 'home' && <Home go={setRoute} />}
{route==='parejas' && <Parejas />}
{route==='creator' && <Creator />}
{route==='ranking' && <Ranking />}
{route==='gallery' && <Gallery />}
{route==='objeto' && <ObjetoSanAgustin />}
{route==='info' && <Info />}
{route==='settings' && <Settings />}
</main>
</div>
)
}