import React, {useState} from 'react'
import plates from '../data/plates.json'


export default function Creator(){
const [selected, setSelected] = useState([])
function toggle(plate){
setSelected(s=> s.includes(plate.id) ? s.filter(x=>x!==plate.id) : [...s,plate.id])
}
return (
<div>
<h2 className="text-2xl mb-4">Creador de platos</h2>
<div className="grid grid-cols-3 gap-4">
{plates.map(p=> (
<div key={p.id} className={`p-2 rounded shadow ${selected.includes(p.id)?'ring-2 ring-offset-2':''}`}>
<img src={p.image} alt={p.name} className="w-full h-32 object-cover rounded"/>
<div className="mt-2 flex justify-between items-center">
<div>
<div className="font-bold">{p.name}</div>
<div className="text-sm">{p.desc}</div>
</div>
<button onClick={()=>toggle(p)} className="px-2 py-1 rounded bg-gray-100">{selected.includes(p.id)?'Quitar':'Agregar'}</button>
</div>
</div>
))}
</div>
<div className="mt-4 p-4 shadow rounded bg-white">
<h3 className="font-bold">Tu plato</h3>
<div className="flex gap-2 mt-2">
{selected.length===0 ? <div className="text-sm">Selecciona ingredientes</div> : selected.map(id=> <div key={id} className="px-2 py-1 bg-gray-100 rounded">{id}</div> )}
</div>
</div>
</div>
)
}