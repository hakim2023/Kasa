import React from 'react'
import { useParams , Navigate } from 'react-router-dom'
import { logements } from '../../data/logements';
import './Logement.scss';
import Carousel from './../../components/Carousel'
import Accordion from './../../components/Accordion'
import Details from './../../components/Details';
import Tag from './../../components/Tag'


export default function Logement() {
  const {id}=useParams();
  
  const logement = logements.find((logement) => logement.id === id)

// si  l'id recuperé par useParams ne pas etre trouvé par a methode donc le logement n'existe pas
  if (logement === undefined){
    // j'utilise le composent react Navigate pour faire un redirect vers une page404 
    return (
      <>
          <Navigate to="/page404" replace={true}  />
      </>
    )
  }

  //j'ai créé une variable equip pour les equipements du logement chaque equipement par ligne
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
