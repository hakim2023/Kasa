import React from 'react'
import { useParams , Navigate } from 'react-router-dom'
import { logements } from '../../data/logements';
import Carousel from '../Carousel'
import './Logement.scss';
import Accordion from '../Accordion'
import Details from '../Details';
import Tag from '../Tag'



export default function Logement() {
  const {id}=useParams();
  
  const logement = logements.find((logement) => logement.id === id)

  if (logement === undefined){
    return<>
    <Navigate to="/page404" replace={true}  />
    </>
  }
  const equip = logement.equipments.map(function(item, idx) {
    
    return (
        <span key={idx}>
            {item}
            <br/>
        </span>
     )
})

  if(logement !== undefined)

  return (<>
  <div className="logement__container">

    <Carousel
    
        id={logement.id}
        cover={logement.cover}
        title={logement.title}
        pictures={logement.pictures}

    />
     <Details
     
      id={logement.id}
      title={logement.title}
      tags={logement.tags.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
      location={logement.location}
      rating={logement.rating}
      host={logement.host}
      name={logement.host.name}
      picture={logement.host.picture}
        />


    <div className='accordions__container'>
        <Accordion
            className='accordion' 
            id ={logement.id}
            title='Description'
            description={logement.description}
        />
          <Accordion 
            className='accordion' 
            id ={logement.id}
            title='Equipments'
            description={equip}
        />
    </div>
    </div>
      </>
  )


}
