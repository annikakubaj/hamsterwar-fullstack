import { useState } from 'react'
import './Form.css'

const History = () => {
	const [name, setName] = useState ('');
	const [age, setAge] = useState ('');
	const [loves, setLoves] = useState ('');
	const [favFood, setFavFood] = useState ('');
	const [imageName, setImageName] = useState ('');
	const [controlledText, setControlledText] = useState('')
	const [controlledText2, setControlledText2] = useState('') 
	const [controlledText3, setControlledText3] = useState('')
	const [controlledText4, setControlledText4] = useState('')  
	const [controlledText5, setControlledText5] = useState('') 
	const [nameTouched, setNameTouched] = useState(false)
	const [ageTouched, setAgeTouched] = useState(false)
	const [loveTouched, setLoveTouched] = useState(false)
	const [favFoodTouched, setFavFoodTouched] = useState(false)
	const [imageTouched, setImageNameTouched] = useState(false)
	

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

	

	let ageIsValid: boolean = true 
	let ageErrorMessage: string = ''
	if( age === '') {
		ageIsValid = false 
		ageErrorMessage = 'Vänligen ange din hamsters ålder'
	}

	let ageClass = ''
	if ( ageTouched ) {
		ageClass = (ageIsValid ? 'valid' : 'error')
	}

	

	let loveIsValid: boolean = true 
	let loveErrorMessage: string = ''
	if( loves === '') {
		loveIsValid = false 
		loveErrorMessage = 'Vänligen fyll i vad din hamster tycker om att göra.'
	}

	let loveClass = ''
	if ( loveTouched ) {
		loveClass = (loveIsValid ? 'valid' : 'error')
	}

	

	let favFoodIsValid: boolean = true 
	let favFoodErrorMessage: string = ''
	if( favFood === '') {
		favFoodIsValid = false 
		favFoodErrorMessage = 'Vänligen fyll i din hamsters favoritmat.'
	}

	let favFoodClass = ''
	if ( favFoodTouched ) {
		favFoodClass = (favFoodIsValid ? 'valid' : 'error')
	}

	
	let imageNameIsValid: boolean = true
	let imageNameErrorMessage: string = ''
	if( imageName === '' ) {
		imageNameIsValid = false
		imageNameErrorMessage = 'Vänligen lägg till en bild'
	}

	let imageClass = ''
	if ( imageTouched ) {
		imageClass = (imageNameIsValid ? 'valid' : 'error')
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
				<input 
				placeholder="Ålder"
				onBlur={() => setAgeTouched(true)}
				 type="text"
				  className="valid" 
				  onChange={event =>{
					console.log('Controlled change', event.target.value);setAge(event.target.value)
					setControlledText2(event.target.value)
				}
			
			}
				value={age}
				/>
				</label>
				{ageTouched ? <div className= "message hidden"> {ageErrorMessage}</div> : null}
				<br/> 
				Ålder: {controlledText2}
				</section>

				<section> 
			 
				<label> Älskar: 
				<input 
				placeholder="Älskar"
				onBlur={() => setLoveTouched(true)}
				 type="text"
				  className="valid" 
				  onChange={event =>{
					console.log('Controlled change', event.target.value);setLoves(event.target.value)
					setControlledText3(event.target.value)
				}
			
			}
				value={loves}
				/>
				</label>
				{loveTouched ? <div className= "message hidden"> {loveErrorMessage}</div> : null}
				<br/> 
				Älskar: {controlledText3}
				</section>

				<section> 
			 
				<label> Favoritmat: 
				<input 
				placeholder="Favoritmat"
				onBlur={() => setFavFoodTouched(true)}
				 type="text"
				  className="valid" 
				  onChange={event =>{
					console.log('Controlled change', event.target.value);setFavFood(event.target.value)
					setControlledText4(event.target.value)
				}
			
			}
				value={favFood}
				/>
				</label>
				{favFood ? <div className= "message hidden"> {favFoodErrorMessage}</div> : null}
				<br/> 
				Favoritmat: {controlledText4}
				</section>

				<section> 
			 
				<label> Lägg till bild: 
				<input 
				placeholder="Bild"
				onBlur={() => setImageNameTouched(true)}
				 type="text"
				  className="valid" 
				  onChange={event =>{
					console.log('Controlled change', event.target.value);setImageName(event.target.value)
					setControlledText5(event.target.value)
				}
			
			}
				value={imageName}
				/>
				</label>
				{imageName ? <div className= "message hidden"> {imageNameErrorMessage}</div> : null}
				<br/> 
				Bild:<img src= {controlledText5} />
				</section>

				

				
			<div>
				<button disabled={formIsInvalid}> Spara hamster! </button>
			</div>
			
	</div>
)}
			

export default History