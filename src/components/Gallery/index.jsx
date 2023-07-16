import React from 'react'
import Card from '../Card'
import {logements} from './../../data/logements'
import './Gallery.scss'

// console.log(logements)

export default function Gallery() {

  return (
    <ul className='gallery__container'>          
              {logements.map((logement) => (
						  	      <Card 
                        key={logement.id}
                        id={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                        host={logement.host}
						      	 />               
                ))}   
    </ul>
         )
}
