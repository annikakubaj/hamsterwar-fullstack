import React from 'react'
import './Gallery.css';
import GalleryCard from './GalleryCard'





const Gallery = () => {
	return (
		<div className="border">
		<div className="rubrik"><h1>Galleriet</h1> </div>
		<button className="form-btn"> Lägg till en hamster </button>
		
		
	<GalleryCard />
	</div>
	
)
	}

export default Gallery