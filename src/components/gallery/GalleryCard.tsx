import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Gallery.css';
import HamsterInfo from './HamsterInfo'
import { Hamster } from '../../types/Hamster'


const GalleryCard = () => {
	const [hamsters, setHamsters] = useState<null | Hamster []>(null)
	useEffect(() => {
		async function getHamsters() {
		const response = await fetch('/hamsters', { method: 'GET'})
		const data: Hamster [] = await response.json()
		console.log('hämtade från server' , data)
		setHamsters(data)
		// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är Mounted
		}
		getHamsters()
	}, [])
	return (

	<div className= "hamster-container">
		<h1> Välkommen till galleriet!</h1>
		{hamsters 
		? hamsters.map(h => (
			<div className="hamster-card" key={ h.id  }>
				{(h.imgName.startsWith('http')) ? <img src={h.imgName}alt="hamster" />: <img src={`img/${h.imgName}`}alt="hamster" />}
			 <br/>
			{h.name} <br/>
			<HamsterInfo hamster = {h} />
			
			

			
		
		</div> 
		
		))
	: 'Hämtar produkter från API...'}

	</div>
	)}





// const GalleryCard = () => {
// 	return (

// 	<div className="hamster-container">	
// 	<div className="hamster-card">
// 		<p>Hamsterbild</p>
// 		<h1> Namn</h1>
// 		<button>Mer info </button>

// 		</div>
// 	</div>
	
// )
// 	}

export default GalleryCard
