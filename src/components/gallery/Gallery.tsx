import React from 'react'
import './Gallery.css';
import GalleryCard from './GalleryCard'
import HamsterInfo from './HamsterInfo'




const Gallery = () => {
	return (
		<div className="border">
		<h1>Hamsters </h1>
		
		
	<GalleryCard />
	<HamsterInfo />
	</div>
	
)
	}

export default Gallery