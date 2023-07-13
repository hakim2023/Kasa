import React from 'react'
import { Link } from 'react-router-dom'



export default function GalleryItem({id,title, cover }) {
  return (
    
      <li className='card' >
         <Link to={`/logements/`} >
            <div className="overlay"></div>
            <img src={cover} alt={`${title} cover`} />
         </Link>
         <p>{title}</p>
		  </li>
     

  )
}
