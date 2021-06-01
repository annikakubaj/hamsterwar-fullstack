import React from 'react'
import { useState } from 'react'
import { Hamster } from '../../types/Hamster'

interface Props {
	hamster: Hamster
}

const HamsterInfo = ({ hamster }:Props) => {
	const [isVisible, setIsVisible] = useState(false)
	

	let maybeHamsterInfo = null

	if( isVisible ) {
		maybeHamsterInfo = (
		 <div className="hamster-info">
		<p>Namn: { hamster.name }</p>
		<p>Ålder: {hamster.age}</p>
		<p>Gillar att: {hamster.loves}</p>
		<p>Favoritmat: {hamster.favFood}</p>
		<p>Antal matcher: {hamster.games}</p>
		<p>Antal vinster: {hamster.wins}</p>
		<p>Antal förluster: {hamster.defeats}</p>
		</div>
		)

	}

	const toggleVisibility = () => {
		setIsVisible( !isVisible )

	}
	return (
		
	<div className="hamster-card">
		<button className="show-btn" onClick={toggleVisibility}>
			{isVisible ? 'Stäng hamster' : 'Visa hamster' } </button>
		{maybeHamsterInfo}

		
		
		
	</div>
	
)
	}

export default HamsterInfo
