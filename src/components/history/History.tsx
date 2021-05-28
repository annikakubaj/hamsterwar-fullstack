import { useState } from 'react'
import './Form.css'

const History = () => {
	const [name, setName] = useState ('');
	const [name2, setName2] = useState ('');
	const [controlledText, setControlledText] = useState('')
	const [controlledText2, setControlledText2] = useState('') 
	const [nameTouched, setNameTouched] = useState(false)

	let nameIsValid: boolean = (name !== '')
	let nameClass = ''
	if ( nameTouched ) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	}

	return (
	<div className="form">
		<h1> Lägg till ny hamster exempel </h1>
		<section> 
			 
				<label> Namn: 
				<input
				onBlur={() => setNameTouched(true)}
				 onChange={event =>{
					console.log('Controlled change', event.target.value);setName(event.target.value)
					setControlledText(event.target.value)
				}
			
			}
				value={name}
				className={nameClass}
				/>
				</label>
				<div className= "message hidden">Error?</div>
				<br/> 
				Namn: {controlledText}
				</section>

				<section> 
			 
				<label> Namn: 
				<input className="valid" onChange={event =>{
					console.log('Controlled change', event.target.value);setName2(event.target.value)
					 //toUpperCase fö rsta bokstaven
					setControlledText2(event.target.value)
				}
			
			}
				value={name2}
				/>
				</label>
				<div className= "message hidden">Error?</div>
				<br/> 
				Namn: {controlledText2}
				</section>
			
			
	</div>
)}
			

export default History