import React from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'



export default function GalleryItem({id,title, cover }) {
   // const name = host.name.replace(/\s/g, "-").toLowerCase();
  
  return (
   <>
    
      <li className='card' >
         <Link to={`/logement/${id}`} >
            <div className="overlay"></div>
            <img src={cover} alt={`${title} cover`} />
         </Link>
         <p>{title}</p>
	  </li>
        </>

  )
}
