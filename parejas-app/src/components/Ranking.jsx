import React, {useEffect, useState} from 'react'
import plates from '../data/plates.json'
import { supabase } from '../supabaseClient'


export default function Ranking(){
const [ranks, setRanks] = useState([])
useEffect(()=>{
async function load(){
const {data} = await supabase.from('likes').select('*')
const map = {};
data?.forEach(d=>{ map[d.plate_id]=d.count })
const arr = plates.map(p=> ({...p, likes: map[p.id]||0})).sort((a,b)=>b.likes-a.likes)
setRanks(arr)
}
load()
},[])


return (
<div>
<h2 className="text-2xl mb-4">Ranking de los más votados</h2>
<ol>
{ranks.map(p=> (
<li key={p.id} className="p-2 bg-white shadow rounded mb-2 flex items-center">
<img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded mr-4"/>
<div className="flex-1">
<div className="font-bold">{p.name}</div>
<div className="text-sm">{p.desc}</div>
</div>
<div className="text-lg">⭐ {p.likes}</div>
</li>
))}
</ol>
</div>
)
}