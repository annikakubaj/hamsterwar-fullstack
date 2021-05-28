import { useState } from 'react'
import './Form.css'

const History = () => {
	const [name, setName] = useState ('');
	const [name2, setName2] = useState ('');
	const [controlledText, setControlledText] = useState('')
	const [controlledText2, setControlledText2] = useState('') 
	const [nameTouched, setNameTouched] = useState(false)

	let nameIsValid: boolean = true
	let nameErrorMessage: string = ''
	if( name === '' ) {
		nameIsValid = false
		nameErrorMessage = 'Vänligen fyll i din hamsters namn'
	}

	let nameClass = ''
	if ( nameTouched ) {
		nameClass = (nameIsValid ? 'valid' : 'error')
	} 

	let formIsInvalid = !nameIsValid 
	

	return (
	<div className="form">
		<h1> Lägg till ny hamster exempel </h1>
		<section> 
			 
				<label> Namn: 
				<input
				placeholder="Namn"
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
				{nameTouched ? <div className= "message hidden"> {nameErrorMessage} </div> : null}
				
				<br/> 
				Namn: {controlledText}
				</section>

				<section> 
			 
				<label> Ålder: 
				<input type="number" className="valid" onChange={event =>{
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
				Ålder: {controlledText2}
				</section>
			<div>
				<button disabled={formIsInvalid}> Spara hamster! </button>
			</div>
			
	</div>
)}
			

export default History