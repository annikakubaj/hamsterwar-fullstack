import React from "react";
import './Battle.css';
import { useEffect, useState } from "react"
import { Hamster } from "../../types/Hamster"


const Battle = () => {
  const [randomHamster, setRandomHamster] = useState<null | Hamster>(null);
  const [randomHamster2, setRandomHamster2] = useState<null | Hamster>(null);
  const [isVisibleRandomHamster, setIsVisibleRandomHamster] = useState(false)

  //Ändra any, funkar så länge, skapa inteface
  useEffect(() => {
    async function getRandomHamster(random:any) {
      const response = await fetch('/hamsters/random', { method: "GET" });
      const data: Hamster = await response.json();
      random(data)
      
    }
   

  getRandomHamster(setRandomHamster)
  getRandomHamster(setRandomHamster2)
}, [])


const randomHamsterLeft = () => {
	setIsVisibleRandomHamster( true )
}


	const randomHamsterRight = () => {
		setIsVisibleRandomHamster( true )

	}


	return (
		<main className="battle">
		
		{randomHamster ? 
		<div className="randomhamsterleft" key={randomHamster.id} onClick={randomHamsterLeft}>
		{(randomHamster.imgName.startsWith('http')) ? <img src={randomHamster.imgName}alt="hamster" />: <img src={`img/${randomHamster.imgName}`}alt="hamster" />}
		<h2>{randomHamster.name}</h2>
		<p>{randomHamster.age}</p>
		<p>{randomHamster.favFood}</p>
		<p>{randomHamster.loves}</p>
		
		{isVisibleRandomHamster ? <div><p>Wins: {randomHamster.wins}</p> <p>Defeats: {randomHamster.defeats}</p></div>: 'Rösta för att ta del av resultat'}
		</div> : 'Hämtar random hamster från API'}
		
		
		{randomHamster2 ? 
		<div className="randomhamsterright" key={randomHamster2.id} onClick={randomHamsterRight}>
		{(randomHamster2.imgName.startsWith('http')) ? <img src={randomHamster2.imgName}alt="hamster" />: <img src={`img/${randomHamster2.imgName}`}alt="hamster" />}
		<h2>{randomHamster2.name}</h2>
		<p>{randomHamster2.age}</p>
		<p>{randomHamster2.favFood}</p>
		<p>{randomHamster2.loves}</p>
		{isVisibleRandomHamster ? <div><p>Wins: {randomHamster2.wins}</p> <p>Defeats: {randomHamster2.defeats}</p></div>: 'Rösta för att ta del av resultat'}
		
		
		</div> : 'Hämtar random hamster från API'}
		
		{/* randomHamster.id === randomHamster2.id 
		randomHamster.id != randomHamster2.id  */}
		
		
					
			</main>
			)
		}


	  
export default Battle;
