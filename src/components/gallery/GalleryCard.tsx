import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Gallery.css';
import HamsterInfo from './HamsterInfo'
import { Hamster } from '../../types/Hamster'


const GalleryCard = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)
    
    useEffect(() => {
getHamsters()   
    }, [])
    async function getHamsters() {
        const response = await fetch('/hamsters', {method: 'GET'})
        const data: Hamster[] = await response.json()
        setHamsters(data)
        
    
    }
    async function removeHamster(id:string) {
        await fetch("/hamsters/" + id, { method: 'DELETE' })
       getHamsters()
    }
	
	
	return (
		

	<div className= "hamster-container">
	
		{hamsters 
		? hamsters.map(h => (
			<div className="hamster-card" key={ h.id  }>
				<button className="delete-btn" onClick={() => removeHamster(h.id)}>X</button>
				{(h.imgName.startsWith('http')) ? <img src={h.imgName}alt="hamster" />: <img src={`img/${h.imgName}`}alt="hamster" />}
				
			 <br/>
			<h1>{h.name} </h1> <br/>
			
			<HamsterInfo hamster = {h} />
			{/* <button className="delete-btn" onClick={() => removeHamster(h.id)}>X</button>  */}
			</div> 
		
		))
	: 'Hämtar produkter från API...'}

	</div>
	)}



export default GalleryCard
