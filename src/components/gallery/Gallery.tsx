import React from 'react'
import './Gallery.css';
import GalleryCard from './GalleryCard'
import { Link } from 'react-router-dom'





const Gallery = () => {
	return (
		<div className="border">
		<div className="rubrik"><h1>Galleriet</h1> </div>
		<h2>Vill du tävla med din hamster? </h2>

		<Link to="/Form">
		 <button className="form-btn"> Lägg till en hamster </button> 
		 </Link>
		
	<GalleryCard />
	</div>
	
)
	}

export default Gallery