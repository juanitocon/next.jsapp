import React, { useState } from 'react'
import plates from '../data/plates.json'


function PairCard({left,right,onChoose}){
return (
<div className="max-w-md mx-auto p-4 shadow rounded bg-white grid grid-cols-2 gap-2">
<div className="flex flex-col items-center" onClick={()=>onChoose(left.id)}>
<img src={left.image} alt={left.name} className="w-32 h-32 object-cover rounded"/>
<button className="mt-2 btn">{left.name}</button>
</div>
<div className="flex flex-col items-center" onClick={()=>onChoose(right.id)}>
<img src={right.image} alt={right.name} className="w-32 h-32 object-cover rounded"/>
<button className="mt-2 btn">{right.name}</button>
</div>
</div>
)
}


export default function Parejas(){
const [index, setIndex] = useState(0)
const [history, setHistory] = useState([])
const left = plates[index % plates.length]
const right = plates[(index+1) % plates.length]


function choose(id){
setHistory(h=>[...h,id])
setIndex(i=>i+2)
// aquí podrías llamar a supabase para incrementar likes
}


return (
<div>
<h2 className="text-2xl mb-4">Parejas — elige entre dos platos</h2>
<PairCard left={left} right={right} onChoose={choose} />
<div className="mt-4">
<strong>Tu selección (últimas 5):</strong>
<ul>
{history.slice(-5).reverse().map((id,idx)=> <li key={idx}>{id}</li>)}
</ul>
</div>
</div>
)
}