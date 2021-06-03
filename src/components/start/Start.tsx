import { useEffect } from 'react'
import { useState } from 'react'
import { Hamster } from '../../types/Hamster'
import Hamsterwarslogoo from './Hamsterwarslogoo.svg'
import './Start.css';
import { Link } from 'react-router-dom';



const Start = () => {
	const [hamsters, setHamsters] = useState<null | Hamster[]>(null)
    
    useEffect(() => {
getHamsters()   
    }, [])
    async function getHamsters() {
        const response = await fetch('/hamsters', {method: 'GET'})
        const data: Hamster[] = await response.json()
        setHamsters(data)
		
	}

	return (
	
		<main>
			<img src= { Hamsterwarslogoo } className="logo" alt="Hamsterwars logo" />
	

		<div> { hamsters 
		? <div className="start-container"> <h1>Välkommen till HamsterWars! </h1> 
		<h3>Detta är appen där du kan rösta på den hamster du tycker är sötast genom att klicka på den i battle.</h3>
		
		<Link to="/Battle"><button className="battle-btn">Let's battle!</button> </Link> 
		 </div>

	:<div> <h1> Kunde inte hämta hamstrar från databasen. </h1> 
<button className="error-btn" onClick={() => {getHamsters()}}> Försök igen </button> </div> } </div>

	

</main>

	)}

export default Start 

