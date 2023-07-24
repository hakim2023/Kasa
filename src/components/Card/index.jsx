import React from 'react'
import { Link } from 'react-router-dom'


export default function Card({id,title,cover}) {
 
  return (
   <>
      <li className='card' >
         {/* un redirect vers la page logement afichant les informations en fonction de l'id de l'element cliqué */}
         <Link to={`/logement/${id}`} >
            {/* sur scss ajouter un overlay ou une couche un peu sombre sur chaque element */}
            <div className="overlay"></div>
            <img src={cover} alt={`${title} cover`} />
         </Link>
         <p>{title}</p>
	  </li>
   </>

  )
}
