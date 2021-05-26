import { Server } from 'http'
import { useEffect, useState } from 'react'
import { HamsterItem } from '../../types/HamsterItem'

interface Props {
	items: HamsterItem []
}

const Gallery = ({ items }: Props) => {
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
	<div>
		<h1> Välkommen till galleriet!</h1>
		{hamsters 
		? hamsters.map(hamster => (
			<div key={ hamster.id  }>
				<img src={`img/${hamster.imgName}`}
				alt="hamster" />
			Bild på hamster <br/>
			{hamster.name} <br/>
			<button>Mer info!</button>

		</div>	
		))
	: 'Hämtar produkter från API...'}

	<div>

		{ items.length === 0 ? 'Det finns inga hamstrar.' :'TODO: mappa alla items' }
		

		
			Bild på hamster <br/>
			Namn på hamster <br/>
			<button>Mer info!</button>

		</div>
	</div>
)
	}

export default Gallery