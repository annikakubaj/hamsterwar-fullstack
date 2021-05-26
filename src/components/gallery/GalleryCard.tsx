import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Gallery.css';


const GalleryCard = () => {
	const [hamsters, setHamsters] = useState<null | any []>(null)
	useEffect(() => {
		async function get() {
		const response = await fetch('/hamsters', { method: 'GET'})
		const data: string[] = await response.json()
		console.log('hämtade från server' , data)
		setHamsters(data)
		// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är Mounted
		}
		get()
	}, [])
	return (

	<div className= "hamster-container">
		<h1> Välkommen till galleriet!</h1>
		{hamsters 
		? hamsters.map(hamster => (
			<div className="hamster-card" key={ hamster.id  }>
				<img src={`img/${hamster.imgName}`}
				alt="hamster" />
			Bild på hamster <br/>
			{hamster.name} <br/>
			<button>Mer info!</button>

			
		
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
