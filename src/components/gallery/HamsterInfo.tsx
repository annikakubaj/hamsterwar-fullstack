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
		 <div>
		<p>{ hamster.name }</p>
		<p>{hamster.age}</p>
		<p>{hamster.loves}</p>
		<p>{hamster.favFood}</p>
		<p>{hamster.games}</p>
		<p>{hamster.wins}</p>
		<p>{hamster.defeats}</p>
		</div>
		)

	}

	const toggleVisibility = () => {
		setIsVisible( !isVisible )

	}
	return (
		
	<div className="hamster-card">
		<button onClick={toggleVisibility}>
			{isVisible ? 'Stäng hamster' : 'Visa hamster' } </button>
		{maybeHamsterInfo}

		
		
		
	</div>
	
)
	}

export default HamsterInfo
