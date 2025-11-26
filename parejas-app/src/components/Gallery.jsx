import React from 'react'
import plates from '../data/plates.json'
import { motion } from 'framer-motion'


export default function Gallery(){
return (
<div>
<h2 className="text-2xl mb-4">Galería de comidas colombianas</h2>
<div className="grid grid-cols-3 gap-4">
{plates.map(p=> (
<motion.div whileHover={{ scale: 1.03 }} key={p.id} className="rounded overflow-hidden shadow">
<img src={p.image} alt={p.name} className="w-full h-36 object-cover"/>
<div className="p-2">
<div className="font-bold">{p.name}</div>
</div>
</motion.div>
))}
</div>
</div>
)
}